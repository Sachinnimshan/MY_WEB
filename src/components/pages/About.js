import React from "react";
import Experience from "../common/experience/index";
import Education from "../common/education";
import { FlexContainer, PADDING_DESKTOP, PADDING_MOBILE } from "../../styled";
import { useResponsive } from "../../hooks/useResponsive";

function About() {
  const { mobile } = useResponsive();
  return (
    <FlexContainer  padding={mobile ? PADDING_MOBILE : PADDING_DESKTOP} gap={3} flexwrap={mobile}>
      <Experience />
      <Education />
    </FlexContainer>
  );
}

export default About;
