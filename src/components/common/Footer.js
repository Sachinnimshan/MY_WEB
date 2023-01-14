import React from "react";
import {
  CopyRightContainer,
  FooterContainer,
  MyNameLink,
  SocialIconContainer,
  SocialIcons,
} from "../pages.styled";
import { socialIcons } from "../util/social";

function Footer() {
  return (
    <FooterContainer>
      <CopyRightContainer>
        © Copyright | All Rights Reserved | Designend and Developed by{" "}
        <MyNameLink>Sachin Nimshan</MyNameLink>
      </CopyRightContainer>

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
