import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectInfo } from "../../store/actions/projects";
import LoadingBox from "../util/LoadingBox";
import MessageBox from "../util/MessageBox";

import {
  CheckCircle,
  DemoBtn,
  GithubBtn,
  PageContainer,
  ProjectInfoBtnContainer,
  ProjectInfoChipContainer,
  ProjectInfoContainer,
  ProjectInfoHeader,
  ProjectInfoImage,
  ProjectInfoStack,
  ProjectInfoStackChips,
  ProjectInfoTitle,
  ProjectInfoTop,
  YoutubeBtn,
} from "../pages.styled";
import Reviews from "../common/Reviews";

function ProjectInfo(props) {
  const projectID = props.match.params.id;
  const dispatch = useDispatch();

  const projectData = useSelector((state) => state.projectData);
  const { loading, errors, projectInfo } = projectData;

  useEffect(() => {
    dispatch(getProjectInfo(projectID));
    console.log(projectInfo);
  }, [dispatch, projectID]);

  return (
    <PageContainer>
      {loading ? (
        <LoadingBox/>
      ) : errors ? (
        <MessageBox>{errors}</MessageBox>
      ) : (
        <ProjectInfoContainer>
          <ProjectInfoTitle>{projectInfo.title}</ProjectInfoTitle>
          <ProjectInfoTop>
            <ProjectInfoImage src={projectInfo.image} />
            <ProjectInfoStack>
              <ProjectInfoHeader>Check my work</ProjectInfoHeader>
              <ProjectInfoBtnContainer>
                {projectInfo.demo && (
                  <DemoBtn href={projectInfo.demo} target="_blank">
                    Demo
                  </DemoBtn>
                )}
                {projectInfo.youtube && (
                  <YoutubeBtn href={projectInfo.youtube} target="_blank">
                    Youtube
                  </YoutubeBtn>
                )}
                {projectInfo.github && (
                  <GithubBtn href={projectInfo.github} target="_blank">
                    Github
                  </GithubBtn>
                )}
              </ProjectInfoBtnContainer>
              <ProjectInfoHeader>Tech Stack</ProjectInfoHeader>
              <ProjectInfoChipContainer>
                {projectInfo.languages.map((lang) => (
                  <ProjectInfoStackChips>
                    <CheckCircle />
                    {lang}
                  </ProjectInfoStackChips>
                ))}
              </ProjectInfoChipContainer>
            </ProjectInfoStack>
          </ProjectInfoTop>
        </ProjectInfoContainer>
      )}
      <Reviews projectID={projectID} />
    </PageContainer>
  );
}

export default ProjectInfo;
