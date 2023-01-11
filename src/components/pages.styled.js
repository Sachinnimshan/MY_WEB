import styled, { keyframes } from "styled-components";
import { IoFingerPrint } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import {Link} from 'react-router-dom';
import { VscClose } from "react-icons/vsc";

const breatheAnimation = keyframes`
 from {
    right: -100%;
  }
  to {
    right: 0%;
  }

`;

export const HeaderContainer = styled("div")`
  display: flex;
  width: 100%;
  padding: 1rem 1.5rem;
  align-items: center;
  background-color: #1b262c;
  justify-content: space-between;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.05);
  z-index: 1000;
  border-bottom: 4px solid #94d600;
`;

export const MenuContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 2rem;
`;

export const SiteLogo = styled(IoFingerPrint)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

export const MenuIcon = styled(HiOutlineMenu)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  position: fixed;
  right: 0;
  z-index: 1000;
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
  z-index: 1000;
  background-color: #1b262c;
  margin-right: 1.5rem;
  border-radius: 2px;
`;

export const NavMenuContainer = styled("div")`
  display: flex;
  gap: 2rem;
`;

export const MenuItem = styled(Link)`
  color: lightgray;
  transition: all ease-in-out 0.3s;
  text-decoration: none;
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
  font-size: 22px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const SideMenuContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  top: 10%;
  right: 0;
  background-color: #1b262c;
  width: 60%;
  padding: 3rem;
  z-index: 2500;
  opacity: 0.95;
  animation-name: ${breatheAnimation};
  animation-duration: 0.8s;
`;


