import React from "react";
import {
  LanguageCard,
  LanguageContainer,
  LanguageImage,
  PageContainer,
  PageHeader,
  PageMessage,
  PageTitle,
  SkillContainer,
  SkillDescription,
} from "../pages.styled";
import { useResponsive } from "../../hooks/useResponsive";
import Experience from "../experience";

function About() {
  const { mobile } = useResponsive();
  
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
      image: "/tech/reactnative.png",
      text: "React Native",
    },
    {
      id: 9,
      image: "/tech/mern.png",
      text: "MERN Stack",
    },
  ];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>About</PageTitle>
      </PageHeader>
      <Experience/>
      <SkillContainer>
        <PageMessage mobile={mobile} marginBottom>
          Technologies I Use
        </PageMessage>
        <SkillDescription>
          I have more than 5+ years' experience building softwares in different
          programming languages since 2016. Below is a quick overview of my main
          technical skill sets and technologies I use.
        </SkillDescription>
        <LanguageContainer>
          {languages.map((item) => (
            <LanguageCard key={item.id}>
              <LanguageImage src={item.image} alt={item.text} />
            </LanguageCard>
          ))}
        </LanguageContainer>
      </SkillContainer>
    </PageContainer>
  );
}

export default About;
