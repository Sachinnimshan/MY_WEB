import React from "react";
import { SocialIcons } from "../pages.styled";
import { socialIcons } from "../common/social";
import moment from "moment";
import {
  BG_GRAY,
  FlexContainer,
  LIGHT_GRAY,
  PADDING_DESKTOP,
  PADDING_DESKTOP_HEADER,
  PADDING_MOBILE,
  PADDING_MOBILE_HEADER,
  SmallText,
} from "../../styled";
import { useResponsive } from "../../hooks/useResponsive";

function Footer() {
  const { mobile } = useResponsive();
  return (
    <FlexContainer
      
      padding={mobile ? PADDING_MOBILE_HEADER : PADDING_DESKTOP_HEADER}
      bgrColor={BG_GRAY}
      alignX="center"
      gap={2}
      flexwrap
    >
      <SmallText color={LIGHT_GRAY} size={13}>
        © Copyrights {moment().year()} | All Rights Reserved
      </SmallText>

      <FlexContainer gap={0.5}>
        {socialIcons &&
          socialIcons.map((item) => (
            <SocialIcons
              key={item.name}
              href={item.url}
              target="_blank"
              aria-label={item.name}
            >
              {item.icon}
            </SocialIcons>
          ))}
      </FlexContainer>
    </FlexContainer>
  );
}

export default Footer;
