import styled, { keyframes } from "styled-components";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

/*************************page structure and elements*******************/
export const PageContainer = styled("div")`
  padding: 2rem;
  min-height: 95vh;
`;

export const PageHeader = styled("div")`
  text-align: center;
  padding: 0 0 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PageTitle = styled("h1")`
  background-image: linear-gradient(#94d600, #1b262c);
  background-clip: text;
  color: white;
  letter-spacing: 0.5px;
  font-size: 14px;
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  padding: 8px 10px;
  border-radius: 5px;
`;

export const PageMessage = styled("h1")`
  color: #666666;
  font-size: ${(props) => (props.mobile === true ? "24px" : "36px")};
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  margin-top: 5px;
`;

/*************************page structure and elements*******************/

/************************* Buttons *******************/
export const Button = styled("button")`
  background-image: linear-gradient(to left bottom, #94d600, #1b262c);
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-top: ${(props) => props.margin && "1.5rem"};
`;

export const ButtonText = styled("span")`
  color: white;
  font-size: 16px;
`;

export const DownloadLinkBtn = styled("a")`
  background-image: linear-gradient(to left bottom, #94d600, #1b262c);
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-top: ${(props) => props.margin && "1.5rem"};
  text-decoration: none;
`;

export const DownloadIcon = styled(FaDownload)`
  color: white;
  font-size: 1rem;
`;
/************************* Buttons *******************/

/************************* Header *******************/
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
    left: -100%;
  }
  to {
    left: 0%;
  }
`;

const BannerAnimation = keyframes`
from {
  transform: translateY(0px);
}
to {
  transform: translateY(20px);
}
`;

export const HeaderContainer = styled("div")``;

export const DesktopHeader = styled("div")`
  display: flex;
  padding: ${(props) =>
    props.mobile === true ? "0.75rem 1.75rem" : "0.75rem 3rem"};
  align-items: center;
  background-color: #1b262c;
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
`;

export const SiteLogo = styled(Link)`
  color: lightgray;
  font-size: ${(props) => (props.mobile === true ? "24px" : "2rem")};
  cursor: pointer;
  font-family: "Kaushan Script", cursive;
  min-width: max-content;
  text-decoration: none;
  &:hover {
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
  padding: ${(props) => props.mobile === true && `1rem 0`};
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
export const SocialIcons = styled("a")`
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
  padding: 1rem 3rem;
  z-index: 2500;
  opacity: 0.98;
  animation-name: ${sideMenuAnimation};
  animation-duration: 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

/************************* Header *******************/

/************************* Home *******************/
export const HomeContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(170deg, white 25%, #94d600);
  gap: 2rem;
  flex-wrap: wrap;
  min-height: 90vh;
`;

export const HomeLeftContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  @media (max-width: 1300px) {
    padding-top: 4rem;
  }
`;

export const Hellotext = styled("span")`
  font-family: "Open sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
  background-image: -webkit-linear-gradient(#94d600, #1b262c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const MyName = styled("h1")`
  font-size: ${(props) => (props.mobile === true ? "2em" : "80px")};
  font-family: "Open Sans";
  font-weight: 600;
  background-image: -webkit-linear-gradient(#94d600, #1b262c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-radius: 5px;
`;

export const MyJob = styled("span")`
  font-family: "Open Sans", sans-serif;
  background-image: -webkit-linear-gradient(#94d600, #1b262c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${(props) => (props.mobile === true ? "18px" : "32px")};
  font-weight: 600;
`;

export const MyDescription = styled("p")`
  font-family: "Poppins", sans-serif;
  background-image: -webkit-linear-gradient(#94d600, #1b262c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 15px;
  font-weight: 500;
`;

export const HomeRightContainer = styled("div")``;

export const HomeBanner = styled("img")`
  width: ${((props)=> props.mobile === true ? "100%" : "600px")};
  height: ${((props)=> props.mobile === true ? "auto" : "600px")};
  max-width: 100%;
  animation-name: ${BannerAnimation};
  animation-iteration-count: infinite;
  animation-duration: 3s;
  animation-direction: alternate;
`;

/************************* Home *******************/

/************************* About *******************/
export const SkillContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SkillDescription = styled("p")`
  color: #666666;
  text-align: center;
  font-size: 16px;
  font-family: "Open Sans", cursive;
  letter-spacing: 1px;
  font-weight: 500;
  line-height: 2rem;
`;

export const LanguageContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const LanguageCard = styled("div")``;
export const LanguageImage = styled("img")`
  width: 10rem;
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
  max-width: 30rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.05);
`;

export const ProjectThumbnail = styled("img")`
  width: 100%;
  max-height: 170px;
  border-radius: 5px 5px 0 0;
`;

export const ProjectTitle = styled(Link)`
  font-size: 22px;
  font-family: "Open Sans", sans-serif;
  color: #666666;
  font-weight: 600;
  text-decoration: none;
  transition: all ease-in-out 0.3s;
  margin-top: 1rem;
  &:hover {
    background-image: -webkit-linear-gradient(#94d600, #1b262c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all ease-in-out 0.3s;
  }
`;

export const ProjectSubtitle = styled("span")`
  font-size: 16px;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  background-image: -webkit-linear-gradient(#94d600, #1b262c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

export const ProjectLinkContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  padding: 20px 10px;
`;

export const DemoBtn = styled("a")`
  background-color: #0c6efd;
  border-radius: 5px;
  color: white;
  border: none;
  padding: 5px 10px;
  text-decoration: none;
  &:hover {
    color: white;
  }
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

export const ProjectBanner = styled("img")`
  max-width: 700px;
  width: 100%;
  display: flex;
`;

/************************* Projects *******************/

/************************* Project Info*******************/

export const ProjectInfoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectInfoTop = styled("div")`
  display: flex;
  justify-content: space-between;
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
  gap: 1rem;
`;

export const ProjectInfoStack = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
`;

export const ProjectInfoHeader = styled("span")`
  font-size: 18px;
  color: #666666;
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
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  font-family: "Open sans", sans-serif;
`;

export const CheckCircle = styled(FiCheckCircle)`
  color: yellowgreen;
  font-size: 18px;
`;

export const ReviewMainContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: auto;
  border-radius: 5px;
  margin-top: 3rem;
`;

export const ReviewFormContainer = styled("div")`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ReviewFormHeader = styled("span")`
  font-size: 20px;
  color: #666666;
  font-family: "Open sans", sans-serif;
  font-weight: 600;
  margin: 0 0 1rem 0;
`;

export const ReviewsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 500px;
  width: 100%;
`;

export const ReviewsHeader = styled("span")`
  font-size: 20px;
  color: #666666;
  font-family: "Open sans", sans-serif;
  font-weight: 600;
`;

export const ReviewItem = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 400px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 10px;
`;

export const ReviewerName = styled("span")`
  color: #666666;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
`;

export const ReviewMessage = styled("span")`
  color: #666666;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
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

export const ContactInfoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContactInfo = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContactInfoTitle = styled("span")`
  font-size: 18px;
  color: #666666;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

export const ContactInfoSubtitle = styled("span")`
  font-size: 16px;
  color: #666666;
  font-family: "Open sans", sans-serif;
  font-weight: 400;
`;

export const ContactFormContainer = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`;

export const EmailIcon = styled(HiOutlineMail)`
  color: #94d600;
  font-size: ${(props) => (props.mobile === true ? "1.5rem" : "2.5rem")}; ;
`;

export const AvailableHoursIcon = styled(AiOutlineClockCircle)`
  color: #94d600;
  font-size: ${(props) => (props.mobile === true ? "1.5rem" : "2.5rem")}; ;
`;

/************************* Contact *******************/

/************************* Footer *******************/
export const FooterContainer = styled("div")`
  background-color: #1b262c;
  padding: 1rem 1.75rem;
  align-items: center;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  font-size: 12.5px;
  color: lightgray;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  justify-content: center;
  letter-spacing: 0.5px;
`;

export const CopyRightItems = styled("span")``;

export const MyNameLink = styled("a")`
  font-family: "Poppins", sans-serif;
  font-family: 13px;
  font-weight: 400;
  color: lightgray;
  transition: all ease-in-out 0.3s;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #94d600;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }
`;

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