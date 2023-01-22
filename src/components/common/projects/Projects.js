import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProjects } from "../../../store/actions/projects";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import {
  DemoBtn,
  GithubBtn,
  ProjectCard,
  ProjectInfoDialog,
  ProjectLinkContainer,
  ProjectsContainer,
  ProjectSubtitle,
  ProjectThumbnail,
  ProjectTitle,
  SectionContainer,
  SectionTitle,
  YoutubeBtn,
} from "../../pages.styled";
import { useResponsive } from "../../../hooks/useResponsive";
import ProjectInfo from "./ProjectInfo";

function Projects() {
  const dispatch = useDispatch();
  const { mobile } = useResponsive();
  const projectList = useSelector((state) => state.projectList);
  const { loading, errors, projects } = projectList;
  const [showInfo, setShowInfo] = useState(false);
  const [selectedID, setSelectedID] = useState(null);

  const openInfoDialog = (id) => {
    setShowInfo(!showInfo);
    setSelectedID(id);
  };

  const closeInfoDialog = () => {
    setShowInfo(false);
  };

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <SectionContainer marginBottom>
      <SectionTitle mobile={mobile} marginBottom>
        PROJECTS
      </SectionTitle>
      <ProjectsContainer>
        {loading && <LoadingBox />}
        {errors && <MessageBox>{errors}</MessageBox>}
        {projects?.map((item) => (
          <ProjectCard key={item.id} onClick={() => openInfoDialog(item._id)}>
            <ProjectThumbnail src={item.image} alt={item.title} />
            <ProjectTitle>{item.title}</ProjectTitle>
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
        ))}
      </ProjectsContainer>
      <ProjectInfoDialog open={showInfo} onClose={closeInfoDialog} fullWidth>
        <ProjectInfo projectID={selectedID} />
      </ProjectInfoDialog>
    </SectionContainer>
  );
}

export default Projects;
