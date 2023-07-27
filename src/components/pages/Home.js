import React from "react";
import { BannerImage, DownloadIcon, DownloadLinkBtn } from "../pages.styled";
import { useResponsive } from "../../hooks/useResponsive";
import {
  FlexContainer,
  LIGHT_GRAY,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  SECONDARY_YELLOW,
  SmallText,
  THEME_COLOR,
  TextView,
  WEIGHT_500,
  WEIGHT_600,
  WHITE_COLOR,
  YELLOW_COLOR,
} from "../../styled";
import Button from "../common/button/button";

function Home() {
  const { mobile } = useResponsive();
  return (
    <FlexContainer
      bgrColor={WHITE_COLOR}
      padding={mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      flexwrap={mobile}
      gap={2}
      flex
      alignY="center"
      alignX={mobile ? "center" : "space-between"}
      
    >
      <FlexContainer column alignY={mobile && "center"} flex>
        <SmallText size={16} weight={WEIGHT_500} color={LIGHT_GRAY}>
          Hello,
        </SmallText>
        <TextView weight={WEIGHT_600} size={4}>
          I'm Sachin
        </TextView>
        <TextView
          color={THEME_COLOR}
          size={0.5}
          weight={WEIGHT_600}
          transform="uppercase"
        >
          Software Engineer | Free Lancer
        </TextView>

        <FlexContainer gap={0.5} flexwrap margin="1.5rem 0" flex>
          <DownloadLinkBtn href="https://sn-backend.onrender.com/api/resume">
            <SmallText color={WHITE_COLOR} size={14}>
              Download My CV
            </SmallText>
            <DownloadIcon />
          </DownloadLinkBtn>
          <Button
            text="Contact me"
            padding="0.8rem 1rem"
            bgrColor1={SECONDARY_YELLOW}
            bgrColor2={YELLOW_COLOR}
          />
        </FlexContainer>
      </FlexContainer>
      <BannerImage mobile={mobile} src="/images/home.jpg" alt="Home" />
    </FlexContainer>
  );
}

export default Home;
