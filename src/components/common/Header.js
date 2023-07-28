import React, { useState } from "react";
import {
  CloseIcon,
  MenuIcon,
  MenuItem,
  SideMenuContainer,
  SiteLogo,
  SocialIconContainer,
  SocialIcons,
} from "../pages.styled";
import { useResponsive } from "../../hooks/useResponsive";
import { useEffect } from "react";
import { socialIcons } from "../common/social";
import {
  BG_GRAY,
  FlexContainer,
  PADDING_DESKTOP,
  PADDING_DESKTOP_HEADER,
  PADDING_MOBILE,
  PADDING_MOBILE_HEADER,
} from "../../styled";
import Button from "./button/button";
import { Backdrop } from "@mui/material";

function Header() {
  const { mobile } = useResponsive();

  const [menu, setmenu] = useState(false);
  const showMenu = () => setmenu(!menu);
  const closeMenu = () => setmenu(false);

  const navData = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Portfolio", route: "/portfolio" },
    { name: "Skills", route: "/skills" },
    { name: "Contact", route: "/contact" },
  ];

  useEffect(() => {
    if (menu && !mobile) {
      closeMenu();
    }
  }, [mobile, menu]);

  return (
    <FlexContainer>
      {!menu && (
        <FlexContainer
          alignX="space-between"
          padding={mobile ? PADDING_MOBILE_HEADER : PADDING_DESKTOP_HEADER}
          bgrColor={BG_GRAY}
          flex
          gap={4}
        >
          <SiteLogo to="/" mobile={mobile}>
            Sachin Nimshan
          </SiteLogo>
          {mobile ? (
            <MenuIcon onClick={showMenu} />
          ) : (
            <FlexContainer
              alignX="space-between"
              alignY="center"
              gap={1}
              flex
              overflowX
            >
              <FlexContainer gap={2} overflowX>
                {navData.map((item) => (
                  <MenuItem to={item.route}>{item.name}</MenuItem>
                ))}
              </FlexContainer>

              <Button text="Start Now" padding="0.75rem 2rem" flex="0" />
            </FlexContainer>
          )}
        </FlexContainer>
      )}
      <Backdrop open={menu} style={{zIndex: 50000}}>
        <SideMenuContainer mobile={mobile} showMenu={menu}>
          {menu && <CloseIcon onClick={closeMenu} />}
          {navData.map((item) => (
            <MenuItem
              to={item.route}
              onClick={closeMenu}
              mobile={mobile}
              sideMenu
            >
              {item.name}
            </MenuItem>
          ))}
          <SocialIconContainer>
            {socialIcons.map((item) => (
              <SocialIcons key={item} href={item.url} aria-label={item.name}>
                {item.icon}
              </SocialIcons>
            ))}
          </SocialIconContainer>
          <SiteLogo to="/">Sachin Nimshan</SiteLogo>
        </SideMenuContainer>
      </Backdrop>
    </FlexContainer>
  );
}

export default Header;
