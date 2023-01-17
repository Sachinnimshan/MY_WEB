import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import { useSelector, useDispatch } from "react-redux";
import { getAllProjects } from "../../store/actions/projects";
import LoadingBox from "../util/LoadingBox";
import MessageBox from "../util/MessageBox";
import {
  DemoBtn,
  GithubBtn,
  PageContainer,
  PageHeader,
  PageMessage,
  PageTitle,
  ProjectBanner,
  ProjectCard,
  ProjectLinkContainer,
  ProjectsContainer,
  ProjectSubtitle,
  ProjectThumbnail,
  ProjectTitle,
  YoutubeBtn,
} from "../pages.styled";
import { useResponsive } from "../../hooks/useResponsive";

function Projects() {
  const dispatch = useDispatch();
  const { mobile } = useResponsive();
  const projectList = useSelector((state) => state.projectList);
  const { loading, errors, projects } = projectList;

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Projects</PageTitle>
        <PageMessage mobile={mobile}>What i have done</PageMessage>
      </PageHeader>
      <Fade bottom>
        <ProjectsContainer>
          {loading ? (
            <LoadingBox />
          ) : errors ? (
            <MessageBox>{errors}</MessageBox>
          ) : (
            projects.length > 0 &&
            projects.map((item) => (
              <ProjectCard key={item.id}>
                <ProjectThumbnail src={item.image} alt={item.title} />
                <ProjectTitle to={`/project/${item._id}`}>
                  {item.title}
                </ProjectTitle>
                <ProjectSubtitle>{item.description}</ProjectSubtitle>
                <ProjectLinkContainer>
                  {item.demo && (
                    <DemoBtn href={item.demo} target="_blank">
                      Demo
                    </DemoBtn>
                  )}
                  {item.youtube && (
                    <YoutubeBtn href={item.youtube} target="_blank">
                      Youtube
                    </YoutubeBtn>
                  )}
                  {item.github && (
                    <GithubBtn href={item.github} target="_blank">
                      Github
                    </GithubBtn>
                  )}
                </ProjectLinkContainer>
              </ProjectCard>
            ))
          )}
          <ProjectBanner
            src="https://ik.imagekit.io/ni26jldfa/pageImages/projects.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673925466720"
            alt="Projects"
          />
        </ProjectsContainer>
      </Fade>
    </PageContainer>
  );
}

export default Projects;
