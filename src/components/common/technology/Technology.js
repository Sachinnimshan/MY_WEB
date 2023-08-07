import React, { useState } from "react";
import { useResponsive } from "../../../hooks/useResponsive";
import {
  LanguageCard,
  LanguageImage,
  SectionTitle,
  SkillDescription,
  TechGridContainer,
} from "../../pages.styled";
import {
  FlexContainer,
  GridContainer,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  THEME_COLOR,
  WHITE_COLOR,
} from "../../../styled";
import ProgressCircle from "../progresscircle";

function Technology() {
  const { mobile } = useResponsive();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const languages = [
    {
      id: 1,
      image: "/tech/js.png",
      text: "Javascript",
    },
    {
      id: 2,
      image: "/tech/react.png",
      text: "React",
    },
    {
      id: 3,
      image: "/tech/next.png",
      text: "Next JS",
    },
    {
      id: 4,
      image: "/tech/node.png",
      text: "Node JS",
    },
    {
      id: 5,
      image: "/tech/express.png",
      text: "Express",
    },
    {
      id: 6,
      image: "/tech/redux.png",
      text: "Redux",
    },
    {
      id: 7,
      image: "/tech/mongo.png",
      text: "Mongo DB",
    },
    {
      id: 8,
      image: "/tech/css.png",
      text: "Css",
    },
    {
      id: 9,
      image: "/tech/mui.png",
      text: "Material UI",
    },
    {
      id: 10,
      image: "/tech/git.png",
      text: "Git",
    },
  ];

  return (
    <FlexContainer
      column
      gap={2}
      padding={mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      minHeight
    >
      <SectionTitle>TECHNOLOGIES & LIBRARIES</SectionTitle>
      <SkillDescription>
        I have more than 3 years of experience building softwares in different
        programming languages since 2020. Below is a quick overview of my main
        technical skill sets and technologies I use. My main programming tech
        stack is Javascript.
      </SkillDescription>
      <TechGridContainer>
        {languages.map((item) => (
          <LanguageCard key={item.id}>
            <LanguageImage src={item.image} alt={item.text} />
          </LanguageCard>
        ))}
      </TechGridContainer>
      {/* <ProgressCircle size={10} title="React" /> */}
    </FlexContainer>
  );
}

export default Technology;
