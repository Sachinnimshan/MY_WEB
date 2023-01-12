import styled, { keyframes } from "styled-components";
import { HiOutlineMenu } from "react-icons/hi";
import {Link} from 'react-router-dom';
import { VscClose } from "react-icons/vsc";

const sideMenuAnimation = keyframes`
 from {
    right: -100%;
  }
  to {
    right: 0%;
  }
`;

const headerAnimation = keyframes`
 from {
    top: -100%;
  }
  to {
    top: 0%;
  }
`;

export const HeaderContainer = styled("div")`
  
`;

export const DesktopHeader = styled("div")`
  display: flex;
  width: 100%;
  padding: 0.65rem 1.75rem;
  align-items: center;
  background-color: #1b262c;
  justify-content: space-between;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.05);
  z-index: 1000;
  animation-name: ${headerAnimation};
  animation-duration: 0.25s;
  position: fixed;
`;


export const MenuContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 5rem;
`;

export const SiteLogo = styled(Link)`
  color: lightgray;
  font-size: ${((props)=> props.mobile ===  true ? "1.75rem": "2rem")};
  cursor: pointer;
  font-family: 'Kaushan Script', cursive;
  min-width: max-content;
  text-decoration: none;
  &:hover{
    color: #94d600;
  }
`;

export const MenuIcon = styled(HiOutlineMenu)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  position: fixed;
  right: 0;
  z-index: 8000;
  background-color: #1b262c;
  margin-right: 1.5rem;
  border-radius: 2px;
`;

export const CloseIcon = styled(VscClose)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  position: fixed;
  right: 0;
  z-index: 8000;
  background-color: #1b262c;
  margin-right: 1.5rem;
  border: 1px solid lightgray;
`;

export const NavMenuContainer = styled("div")`
  display: flex;
  gap: 3rem;
`;

export const MenuItem = styled(Link)`
  color: lightgray;
  transition: all ease-in-out 0.3s;
  text-decoration: none;
  padding: ${(props) => (props.mobile === true && `1rem 0` )};
  &:hover {
    color: #94d600;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }
`;

export const SocialIconContainer = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
export const SocialIcons = styled("div")`
  color: lightgray;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #94d600;
  }
`;

export const SideMenuContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #1b262c;
  height: 100vh;
  width: 75%;
  padding: 1rem 3rem;
  z-index: 2500;
  opacity: 0.98;
  animation-name: ${sideMenuAnimation};
  animation-duration: 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;


