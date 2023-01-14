import React from "react";
import "../page.css";
import { Slide } from "react-reveal";
import { FaDownload } from "react-icons/fa";
import {
  ButtonText,
  DownloadIcon,
  DownloadLinkBtn,
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
      <Slide left>
        <HomeLeftContainer mobile={mobile}>
          <MyName mobile={mobile}>Hi, I'm Sachin</MyName>
          <MyJob>Software Engineer | Free Lancer</MyJob>
          <MyDescription>
            High Level Experience in Web Design & Development
          </MyDescription>
          <DownloadLinkBtn href="https://sn-backend.onrender.com/api/resume" margin>
            <ButtonText>Download My CV</ButtonText>
            <DownloadIcon/>
          </DownloadLinkBtn>
        </HomeLeftContainer>
      </Slide>
      <Slide right>
        <HomeRightContainer>
          <HomeBanner src="/Images/homebg.png" />
        </HomeRightContainer>
      </Slide>
    </HomeContainer>
  );
}

export default Home;
