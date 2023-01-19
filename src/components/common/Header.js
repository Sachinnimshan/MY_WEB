import React, { useState } from "react";
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
import { socialIcons } from "../util/social";

function Header() {
  const { mobile } = useResponsive();

  const [menu, setmenu] = useState(false);
  const showMenu = () => setmenu(!menu);
  const closeMenu = () => setmenu(false);

  const navData = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Skills", route: "/skills" },
    { name: "Projects", route: "/projects" },
    { name: "Contact", route: "/contact" },
  ];

  useEffect(() => {
    if (menu && !mobile) {
      closeMenu();
    }
  }, [mobile, menu]);

  return (
    <HeaderContainer>
      {!menu && (
        <DesktopHeader mobile={mobile}>
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
                {socialIcons.map((item) => (
                  <SocialIcons key={item} href={item.url}>
                    {item.icon}
                  </SocialIcons>
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
            {socialIcons.map((item) => (
              <SocialIcons key={item} href={item.url}>
                {item.icon}
              </SocialIcons>
            ))}
          </SocialIconContainer>
          <SiteLogo to="/">Sachin Nimshan</SiteLogo>
        </SideMenuContainer>
      )}
    </HeaderContainer>
  );
}

export default Header;
