import React from "react";
import {
  ButtonText,
  DownloadIcon,
  DownloadLinkBtn,
  Hellotext,
  HomeBanner,
  HomeContainer,
  HomeLeftContainer,
  HomeRightContainer,
  MyDescription,
  MyJob,
  MyName,
} from "../pages.styled";
import { useResponsive } from "../../hooks/useResponsive";

function Home() {
  const { mobile } = useResponsive();
  return (
    <HomeContainer>
      <HomeLeftContainer mobile={mobile}>
        <Hellotext>Hello,</Hellotext>
        <MyName mobile={mobile}>I'm Sachin</MyName>
        <MyJob mobile={mobile}>Software Engineer | Free Lancer</MyJob>
        <MyDescription>High Level Experience in Web Design</MyDescription>
        <DownloadLinkBtn
          href="https://sn-backend.onrender.com/api/resume"
          margin
        >
          <ButtonText>Download My CV</ButtonText>
          <DownloadIcon />
        </DownloadLinkBtn>
      </HomeLeftContainer>
      <HomeRightContainer>
        <HomeBanner
          mobile={mobile}
          src="https://ik.imagekit.io/ni26jldfa/pageImages/home.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673925472610"
          alt="Home"
        />
      </HomeRightContainer>
    </HomeContainer>
  );
}

export default Home;
