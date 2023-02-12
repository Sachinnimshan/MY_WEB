import React, { useState } from "react";
import { useResponsive } from "../../hooks/useResponsive";
import {
  LanguageCard,
  LanguageContainer,
  LanguageImage,
  SectionContainer,
  SectionTitle,
  SkillDescription,
} from "../pages.styled";

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
      image: "/tech/redux.png",
      text: "Redux",
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
      image: "/tech/mongo.png",
      text: "Mongo DB",
    },
    {
      id: 7,
      image: "/tech/next.png",
      text: "Next JS",
    },
    {
      id: 8,
      image: "/tech/mui.png",
      text: "Material UI",
    },
  ];
  
  return (
    <SectionContainer>
      <SectionTitle mobile={mobile} marginBottom>
        TECHNOLOGIES & LIBRARIES
      </SectionTitle>
      <SkillDescription>
        I have more than 3 years of experience building softwares in different
        programming languages since 2020. Below is a quick overview of my main
        technical skill sets and technologies I use.
        <br/>My main programming tech stack is Javascript.
      </SkillDescription>
      <LanguageContainer>
        {languages.map((item) => (
          <LanguageCard key={item.id}>
            <LanguageImage src={item.image} alt={item.text}/>
          </LanguageCard>
        ))}
      </LanguageContainer>
    </SectionContainer>
  );
}

export default Technology;
