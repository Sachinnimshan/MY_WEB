import React from "react";
import {
  PageContainer,
} from "../pages.styled";
import Experience from "../common/experience/index";
import Education from "../common/education";

function About() {

  return (
    <PageContainer>
      <Experience />
      <Education />
    </PageContainer>
  );
}

export default About;
