import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { IoLogoInstagram } from "react-icons/io";
import {
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiFillGithub,
} from "react-icons/ai";
import {
  CloseIcon,
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

function Header() {
  const { mobile } = useResponsive();
  const currentRef = useRef(null);

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
  return (
    <HeaderContainer>
        <SiteLogo />
      {mobile ? (
        menu ? <CloseIcon onClick={closeMenu}/> : <MenuIcon onClick={showMenu} />
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
      {menu && (
        <SideMenuContainer>
          {navData.map((item)=>(
            <MenuItem to={item.route} onClick={closeMenu}>{item.name}</MenuItem>
          ))}
          <SocialIconContainer>
            {socialData.map((item) => (
              <SocialIcons key={item}>{item.icon}</SocialIcons>
            ))}
          </SocialIconContainer>
        </SideMenuContainer>
      )}
    </HeaderContainer>
  );
}

export default Header;
