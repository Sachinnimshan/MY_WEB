import React from "react";
import Projects from "../common/projects/Projects";
import Technology from "../common/technology/Technology";
import { FlexContainer, PADDING_DESKTOP, PADDING_MOBILE } from "../../styled";
import { useResponsive } from "../../hooks/useResponsive";

function Portfolio() {
  const { mobile } = useResponsive();
  return (
    <FlexContainer
      column
      padding={mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      gap={2}
    >
      <Projects />
    </FlexContainer>
  );
}

export default Portfolio;
