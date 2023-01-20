import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectInfo } from "../../store/actions/projects";
import LoadingBox from "../common/LoadingBox";
import MessageBox from "../common/MessageBox";
import {
  CheckCircle,
  DemoBtn,
  GithubBtn,
  ProjectInfoBtnContainer,
  ProjectInfoChipContainer,
  ProjectInfoContainer,
  ProjectInfoContent,
  ProjectInfoHeader,
  ProjectInfoImage,
  ProjectInfoStack,
  ProjectInfoStackChips,
  ProjectInfoTitle,
  ProjectInfoTop,
  YoutubeBtn,
} from "../pages.styled";

function ProjectInfo(props) {
  const dispatch = useDispatch();

  const projectData = useSelector((state) => state.projectData);
  const { loading, errors, projectInfo } = projectData;

  useEffect(() => {
    dispatch(getProjectInfo(props.projectID));
    console.log(projectInfo);
  }, [dispatch, props.projectID]);

  return (
    <ProjectInfoContainer>
      {loading ? (
        <LoadingBox />
      ) : errors ? (
        <MessageBox>{errors}</MessageBox>
      ) : (
        <ProjectInfoContent>
          <ProjectInfoTitle>{projectInfo.title}</ProjectInfoTitle>
          <ProjectInfoTop>
            <ProjectInfoImage src={projectInfo.image} alt={projectInfo.title} />
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
        </ProjectInfoContent>
      )}
    </ProjectInfoContainer>
  );
}

export default ProjectInfo;
