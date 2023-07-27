import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { HiOutlineLocationMarker, HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";
import { BsBriefcase, BsDash } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import MuiDialog from "@mui/material/Dialog";
import {
  BG_GRAY,
  BORDER_RADIUS,
  DARK_GRAY,
  LIGHT_GRAY,
  PRIMARY_COLOR,
  SECONDARY_THEME_COLOR,
  THEME_COLOR,
  TRANSITION,
  WEIGHT_400,
  WEIGHT_500,
  WEIGHT_600,
  WEIGHT_700,
  WHITE_COLOR,
  YELLOW_COLOR,
} from "../styled";

/*************************page structure and elements*******************/

export const SectionTitle = styled("h1")`
  color: ${LIGHT_GRAY};
  font-size: calc(1rem + 0.5vw);
  width: fit-content;
  font-weight: ${WEIGHT_700};
  padding: 0 1rem;
  text-transform: capitalize;
  border-left: 1rem solid ${YELLOW_COLOR};
`;

export const IconWrapper = styled("div")`
  color: ${(props) => props.color};
  font-size: ${(props) => `${props.size}rem` || "1.25rem"};
  cursor: pointer;
  background-color: ${(props) => props.bgrColor};
  padding: ${(props) => props.padding && "0.5rem"};
  display: flex;
  align-items: center;
  border-radius: ${(props) => props.radius && "50%"};
  position: ${(props) => props.position};
  transition: all ease-in-out 0.3s;
  z-index: 4000;
  box-shadow: ${(props) =>
    props.shadow &&
    "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.05)"};
  &:hover {
    color: ${(props) => props.hoverColor};
    background-color: ${(props) => props.hoverBgrColor};
    transition: all ease-in-out 0.3s;
  }
`;

/*************************page structure and elements*******************/

/************************* Buttons *******************/

export const DownloadLinkBtn = styled("a")`
  padding: 0.8rem 1rem;
  border-radius: ${BORDER_RADIUS};
  display: flex;
  flex: 1;
  align-items: center;
  gap: 10px;
  justify-content: center;
  background-image: ${`linear-gradient(to right, ${SECONDARY_THEME_COLOR} 0%, ${THEME_COLOR} 100%)`};
  margin-top: ${(props) => props.margin && "1.5rem"};
  text-decoration: none;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

export const DownloadIcon = styled(FaDownload)`
  color: ${WHITE_COLOR};
  font-size: 1rem;
`;
/************************* Buttons *******************/

/************************* Header *******************/

const headerAnimation = keyframes`
 from {
    left: -100%;
  }
  to {
    left: 0%;
  }
`;

export const DesktopHeader = styled("div")`
  display: flex;
  padding: ${(props) => (props.mobile === true ? "1rem 1.75rem" : "1rem 3rem")};
  align-items: center;
  background-color: ${PRIMARY_COLOR};
  justify-content: space-between;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.05);
  z-index: 1000;
  animation-name: ${headerAnimation};
  animation-duration: 0.5s;
`;

export const MenuContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 5rem;
  gap: 1rem;
`;

export const SiteLogo = styled(Link)`
  color: ${DARK_GRAY};
  font-size: ${(props) => (props.mobile ? "24px" : "2rem")};
  cursor: pointer;
  font-family: "Kaushan Script", cursive;
  min-width: max-content;
  text-decoration: none;
  display: flex;
  font-weight: ${WEIGHT_600};
  //background: ${`linear-gradient(to bottom, transparent 50%, ${YELLOW_COLOR} 100%)`};
`;

export const MenuIcon = styled(HiMenu)`
  color: ${DARK_GRAY};
  font-size: 2rem;
  cursor: pointer;
  position: fixed;
  right: 0;
  z-index: 8000;
  margin-right: 1.5rem;
`;

export const CloseIcon = styled(VscClose)`
  color: ${DARK_GRAY};
  font-size: 2rem;
  cursor: pointer;
  position: fixed;
  right: 0;
  top: 2%;
  z-index: 8000;
  margin-right: 1.5rem;
`;

export const NavMenuContainer = styled("div")`
  display: flex;
  gap: 2.5rem;
`;

export const MenuItem = styled(Link)`
  color: ${DARK_GRAY};
  font-weight: ${WEIGHT_600};
  transition: all ease-in-out 0.3s;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: ${(props) => props.sideMenu && `1rem 0`};
  &:hover {
    color: ${THEME_COLOR};
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }
`;

export const SocialIconContainer = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
export const SocialIcons = styled("a")`
  color: ${LIGHT_GRAY};
  font-size: 1.25rem;
  display: flex;
  transition: ${TRANSITION};
  cursor: pointer;
  &:hover {
    transition: ${TRANSITION};
    color: ${SECONDARY_THEME_COLOR};
  }
`;

export const SideMenuContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${(props) => (props.showMenu ? "0" : "-100%")};
  background-color: ${BG_GRAY};
  height: 100vh;
  padding: 1rem 3rem;
  z-index: 55000;
  transition: all 0.5s ease;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

/************************* Header *******************/

const BannerAnimation = keyframes`
from {
  transform: translateY(0px);
}
to {
  transform: translateY(20px);
}
`;

export const BannerImage = styled("img")`
  width: 60%;
  animation-name: ${BannerAnimation};
  animation-iteration-count: infinite;
  animation-duration: 3s;
  display: flex;
  z-index: 400000;
  flex: 1;
  animation-direction: alternate;
`;

/************************* About *******************/

export const SkillDescription = styled("p")`
  color: ${LIGHT_GRAY};
  text-align: justify;
  font-size: 16px;
  font-weight: ${WEIGHT_400};
  line-height: 2rem;
`;

export const LanguageContainer = styled("div")`
  display: flex;
  gap: 1rem;
  object-fit: contain;
  width: 90%;
  align-items: center;
  padding: 2rem 0.5rem;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    background-color: transparent;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5rem;
    background-color: #dbdbdb;
    cursor: pointer;
  }
`;

export const LanguageCard = styled("div")`
`;
export const LanguageImage = styled("img")`
  max-width: 10rem;
  transition: all ease-in-out 0.2s;
`;

/************************* About *******************/

/************************* Projects *******************/

export const ProjectsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const ProjectCard = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1 1 200px;
  background-color: ${BG_GRAY};
  border-radius: ${BORDER_RADIUS};
  overflow: hidden;
`;

export const ProjectThumbnail = styled("img")`
  width: 100%;
  border-radius: 5px 5px 0 0;
  height: 100%;
`;

export const ProjectTitle = styled(Link)`
  font-size: 18px;
  font-weight: ${WEIGHT_600};
  color: ${DARK_GRAY};
  text-decoration: none;
`;

export const ProjectSubtitle = styled("span")`
  font-size: 14px;
  font-weight: ${WEIGHT_400};
  margin-top: 5px;
  color: ${LIGHT_GRAY};
`;

export const ProjectLinkContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  padding: 20px 10px;
`;

export const DemoBtn = styled("a")`
  background-color: ${(props) => props.bgrColor}; //#0c6efd
  border-radius: ${BORDER_RADIUS};
  color: ${WHITE_COLOR};
  flex: 1;
  border: none;
  font-weight: ${WEIGHT_500};
  text-align: center;
  padding: 5px 10px;
  text-decoration: none;
`;

export const YoutubeBtn = styled("a")`
  background-color: #ff0000;
  border-radius: 5px;
  color: white;
  border: none;
  padding: 5px 10px;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

export const GithubBtn = styled("a")`
  background-color: #347d39;
  border-radius: 5px;
  color: white;
  border: none;
  padding: 5px 10px;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

/************************* Projects *******************/

/************************* Project Info*******************/
export const ProjectInfoDialog = styled(MuiDialog)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectInfoContainer = styled("div")`
  padding: 1.25rem;
`;

export const ProjectInfoContent = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const ProjectInfoTop = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const ProjectInfoTitle = styled("span")`
  background-image: linear-gradient(#94d600, #1b262c);
  background-clip: text;
  color: white;
  font-size: 24px;
  font-family: "Open sans", sans-serif;
  font-weight: 600;
  text-align: center;
  margin: 0 0 2rem 0;
  max-width: fit-content;
  padding: 5px 20px;
  border-radius: 5px;
`;

export const ProjectInfoImage = styled("img")`
  border-radius: 5px;
  max-height: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 100%;
`;

export const ProjectInfoBtnContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProjectInfoStack = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
`;

export const ProjectInfoHeader = styled("span")`
  font-size: 18px;
  color: ${DARK_GRAY};
  font-family: "Open sans", sans-serif;
  font-weight: 600;
`;

export const ProjectInfoChipContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 400px;
`;

export const ProjectInfoStackChips = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${DARK_GRAY};
  font-size: 16px;
  font-weight: 500;
  font-family: "Open sans", sans-serif;
`;

export const CheckCircle = styled(FiCheckCircle)`
  color: yellowgreen;
  font-size: 18px;
`;

/************************* Project Info*******************/

/************************* Contact *******************/

export const ContactContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

export const ContactBanner = styled("img")`
  max-width: 500px;
  width: 100%;
  display: flex;
  animation-name: ${BannerAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

export const ContactInfo = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ContactInfoTitle = styled("span")`
  font-size: 16px;
  color: ${DARK_GRAY};
  font-weight: ${WEIGHT_600};
`;

export const ContactInfoSubtitle = styled("span")`
  font-size: 15px;
  color: ${LIGHT_GRAY};
  font-weight: ${WEIGHT_400};
`;

export const EmailIcon = styled(HiOutlineMail)``;
export const AvailableHoursIcon = styled(AiOutlineClockCircle)``;

/************************* Contact *******************/

/************************* Footer *******************/
export const FooterContainer = styled("div")`
  background-color: ${BG_GRAY};
  padding: 1rem 1.75rem;
  align-items: center;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${LIGHT_GRAY};
  font-weight: 400;
  justify-content: center;
  letter-spacing: 0.5px;
`;

export const CopyRightItems = styled("span")``;

/************************* Footer *******************/
/************************* 404 Not found *******************/
export const NotFoundContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;

export const NotFoundBanner = styled("img")`
  max-width: 600px;
  width: 100%;
`;

/************************* 404 Not found *******************/

/************************* Experience *******************/

export const ExperienceContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ExperienceCard = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  flex: 1 1 300px;
`;

export const ExperienceItem = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const JobDuration = styled("span")`
  font-weight: 500;
  color: ${DARK_GRAY};
  font-size: 15px;
  display: flex;
  align-items: center;
`;

export const CompanyName = styled("span")`
  font-size: 15px;
  color: ${DARK_GRAY};
  font-weight: ${WEIGHT_500};
`;

export const JobTitle = styled("span")`
  font-size: 16px;
  color: ${DARK_GRAY};
  font-weight: ${WEIGHT_600};
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const JobKeysContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const JobKeyItem = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const JobKeys = styled("span")`
  color: ${LIGHT_GRAY};
  font-weight: ${WEIGHT_400};
  font-size: 14px;
  line-height: 24px;
`;

export const CalendarIcon = styled(AiOutlineCalendar)`
  color: ${DARK_GRAY};
  font-size: 1rem;
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`
  color: ${DARK_GRAY};
  font-size: 1rem;
`;

export const WorkIcon = styled(BsBriefcase)`
  color: ${DARK_GRAY};
  font-size: 1rem;
`;

export const KeysIcon = styled(BsDash)`
  color: ${DARK_GRAY};
  font-size: 14px;
`;

export const JobActiveness = styled("div")`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.active && YELLOW_COLOR};
`;

export const SeeMoreText = styled("span")`
  font-size: 14px;
  color: ${YELLOW_COLOR};
  cursor: pointer;
`;

/************************* Experience *******************/

/************************* Education *******************/

export const EducationContainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const EducationInfoCard = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Degreetitle = styled("span")`
  color: ${DARK_GRAY};
  font-weight: ${WEIGHT_600};
`;

export const EducationInfoItem = styled("span")`
  color: ${DARK_GRAY};
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
`;

export const EduDuration = styled("span")`
  font-size: 15px;
`;

export const University = styled("span")`
  font-size: 15px;
`;

export const DegreeIcon = styled(IoSchoolOutline)`
  color: ${DARK_GRAY};
  font-size: 16px;
`;

/************************* Education *******************/

/************************* Library *******************/

export const LibraryContainer = styled("div")`
  display: flex;
`;

/************************* Library *******************/
