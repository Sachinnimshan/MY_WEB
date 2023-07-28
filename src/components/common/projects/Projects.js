import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProjects } from "../../../store/actions/projects";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import {
  DemoBtn,
  ProjectCard,
  ProjectInfoDialog,
  ProjectSubtitle,
  ProjectThumbnail,
  ProjectTitle,
  SectionTitle,
} from "../../pages.styled";
import { useResponsive } from "../../../hooks/useResponsive";
import ProjectInfo from "./ProjectInfo";
import { FlexContainer } from "../../../styled";

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
    <FlexContainer column gap={2} >
      <SectionTitle mobile={mobile}>PROJECTS</SectionTitle>
      <FlexContainer gap={1} flexwrap>
        {loading && <LoadingBox />}
        {errors && <MessageBox>{errors}</MessageBox>}
        {projects?.map((item) => (
          <ProjectCard key={item.id} onClick={() => openInfoDialog(item._id)}>
            <ProjectThumbnail src={item.image} alt={item.title} />
            <FlexContainer column padding="1rem 0" gap={0.5}>
              <ProjectTitle>{item.title}</ProjectTitle>
              <ProjectSubtitle>{item.description}</ProjectSubtitle>
              <FlexContainer gap={0.5} flexwrap>
                {item.demo && (
                  <DemoBtn href={item.demo} target="_blank" bgrColor="#0c6efd">
                    Demo
                  </DemoBtn>
                )}
                {item.youtube && (
                  <DemoBtn
                    href={item.youtube}
                    target="_blank"
                    bgrColor="#ff0000"
                  >
                    Youtube
                  </DemoBtn>
                )}
                {item.github && (
                  <DemoBtn
                    href={item.github}
                    target="_blank"
                    bgrColor="#347d39"
                  >
                    Github
                  </DemoBtn>
                )}
              </FlexContainer>
            </FlexContainer>
          </ProjectCard>
        ))}
      </FlexContainer>
      <ProjectInfoDialog open={showInfo} onClose={closeInfoDialog} fullWidth>
        <ProjectInfo projectID={selectedID} />
      </ProjectInfoDialog>
    </FlexContainer>
  );
}

export default Projects;
