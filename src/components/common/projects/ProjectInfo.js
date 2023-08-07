import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectInfo } from "../../../store/actions/projects";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import {
  CheckCircle,
  DemoBtn,
  ProjectInfoChipContainer,
  ProjectInfoHeader,
  ProjectInfoImage,
  ProjectInfoStackChips,
  SectionTitle,
} from "../../pages.styled";
import { useResponsive } from "../../../hooks/useResponsive";
import { FlexContainer } from "../../../styled";

function ProjectInfo(props) {
  const dispatch = useDispatch();
  const projectData = useSelector((state) => state.projectData);
  const { loading, errors, projectInfo } = projectData;

  useEffect(() => {
    dispatch(getProjectInfo(props.projectID));
    console.log(projectInfo);
  }, [dispatch, props.projectID]);

  return (
    <FlexContainer padding="1.5rem 1rem">
      {loading ? (
        <LoadingBox />
      ) : errors ? (
        <MessageBox>{errors}</MessageBox>
      ) : (
        <FlexContainer column gap={1}>
          <SectionTitle>{projectInfo.title}</SectionTitle>
          <FlexContainer column gap={1}>
            <ProjectInfoImage src={projectInfo.image} alt={projectInfo.title} />
            <FlexContainer column gap={1}>
              <ProjectInfoHeader>Check my work</ProjectInfoHeader>
              <FlexContainer gap={1}>
                {projectInfo.demo && (
                  <DemoBtn
                    href={projectInfo.demo}
                    target="_blank"
                    bgrColor="#0c6efd"
                  >
                    Demo
                  </DemoBtn>
                )}
                {projectInfo.youtube && (
                  <DemoBtn
                    href={projectInfo.youtube}
                    target="_blank"
                    bgrColor="#ff0000"
                  >
                    Youtube
                  </DemoBtn>
                )}
                {projectInfo.github && (
                  <DemoBtn
                    href={projectInfo.github}
                    target="_blank"
                    bgrColor="#347d39"
                  >
                    Github
                  </DemoBtn>
                )}
              </FlexContainer>
              <ProjectInfoHeader>Tech Stack</ProjectInfoHeader>
              <FlexContainer gap={0.75} flexwrap>
                {projectInfo.languages.map((lang) => (
                  <ProjectInfoStackChips>
                    <CheckCircle />
                    {lang}
                  </ProjectInfoStackChips>
                ))}
              </FlexContainer>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      )}
    </FlexContainer>
  );
}

export default ProjectInfo;
