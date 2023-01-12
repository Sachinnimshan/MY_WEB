import React, { useState, useRef } from "react";
import { IoLogoInstagram } from "react-icons/io";
import {
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiFillGithub,
} from "react-icons/ai";
import {
  CloseIcon,
  DesktopHeader,
  HeaderContainer,
  MenuContainer,
  MenuIcon,
  MenuItem,
  NavMenuContainer,
  SideMenuContainer,
  SiteLogo,
  SocialIconContainer,
  SocialIcons,
} from "../pages.styled";
import { useResponsive } from "../../hooks/useResponsive";
import { useEffect } from "react";

function Header() {
  const { mobile } = useResponsive();

  const [menu, setmenu] = useState(false);
  const showMenu = () => setmenu(!menu);
  const closeMenu = () => setmenu(false);

  const socialData = [
    { name: "Youtube", icon: <AiOutlineYoutube /> },
    { name: "Github", icon: <AiFillGithub /> },
    { name: "Instagram", icon: <IoLogoInstagram /> },
    { name: "Facebook", icon: <AiOutlineFacebook /> },
  ];

  const navData = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Projects", route: "/projects" },
    { name: "Contact", route: "/contact" },
  ];

  useEffect(() => {
    if (menu && !mobile) {
      closeMenu();
    }
  }, [mobile]);

  return (
    <HeaderContainer>
      {!menu && (
        <DesktopHeader>
          <SiteLogo to="/" mobile={mobile}>
            Sachin Nimshan
          </SiteLogo>
          {mobile ? (
            <MenuIcon onClick={showMenu} />
          ) : (
            <MenuContainer>
              <NavMenuContainer>
                {navData.map((item) => (
                  <MenuItem to={item.route}>{item.name}</MenuItem>
                ))}
              </NavMenuContainer>
              <SocialIconContainer>
                {socialData.map((item) => (
                  <SocialIcons key={item}>{item.icon}</SocialIcons>
                ))}
              </SocialIconContainer>
            </MenuContainer>
          )}
        </DesktopHeader>
      )}
      {menu && (
        <SideMenuContainer mobile={mobile}>
          <CloseIcon onClick={closeMenu} />
          {navData.map((item) => (
            <MenuItem to={item.route} onClick={closeMenu} mobile={mobile}>
              {item.name}
            </MenuItem>
          ))}
          <SocialIconContainer>
            {socialData.map((item) => (
              <SocialIcons key={item}>{item.icon}</SocialIcons>
            ))}
          </SocialIconContainer>
          <SiteLogo to="/">Sachin Nimshan</SiteLogo>
        </SideMenuContainer>
      )}
    </HeaderContainer>
  );
}

export default Header;
