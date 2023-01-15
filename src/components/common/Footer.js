import React from "react";
import {
  CopyRightContainer,
  CopyRightItems,
  FooterContainer,
  MyNameLink,
  SocialIconContainer,
  SocialIcons,
} from "../pages.styled";
import { socialIcons } from "../util/social";

function Footer() {
  return (
    <FooterContainer>
        <CopyRightItems>Copyright | All Rights Reserved</CopyRightItems>
        <CopyRightItems>
          Designend and Developed by <MyNameLink>Sachin Nimshan</MyNameLink>
        </CopyRightItems>
        <SocialIconContainer>
        {socialIcons &&
          socialIcons.map((item) => (
            <SocialIcons key={item.name} href={item.url}>
              {item.icon}
            </SocialIcons>
          ))}
      </SocialIconContainer>
    </FooterContainer>
  );
}

export default Footer;
