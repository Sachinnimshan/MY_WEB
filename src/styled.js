import styled from "@emotion/styled";

export const PRIMARY_COLOR = "#0F141E";
export const SECONDARY_COLOR = "#00C6BC";
export const WHITE_COLOR = "#ffffff";
export const BLACK_COLOR = "#000000";
export const DARK_GRAY = "#444444";
export const LIGHT_GRAY = "#555555";
export const FONT_WHITE = "#eeeeee";
export const BG_GRAY = "#F8F8F8";

export const THEME_COLOR = "#6272C7";
export const SECONDARY_THEME_COLOR = "#9AA6FF";
export const YELLOW_COLOR = "#FFBF50";
export const SECONDARY_YELLOW = "#FEC14F";

export const WEIGHT_400 = 400;
export const WEIGHT_500 = 500;
export const WEIGHT_600 = 600;
export const WEIGHT_700 = 700;
export const WEIGHT_800 = 800;

export const PADDING_MOBILE_HEADER = "1rem";
export const PADDING_DESKTOP_HEADER = "1rem 5rem";
export const PADDING_MOBILE = "1rem 1.25rem";
export const PADDING_DESKTOP = "3rem 5rem";

export const BORDER_RADIUS = "0.25rem";

export const TRANSITION = "all ease-in-out 0.5s";

export const AppContainer = styled("div")``;

export const AppContent = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: ${WHITE_COLOR};
`;

export const FlexContainer = styled("div")`
  display: flex;
  gap: ${(props) => `${props.gap}rem`};
  align-items: ${(props) => props.alignY};
  flex-direction: ${(props) => props.column && "column"};
  justify-content: ${(props) => props.alignX};
  border-radius: ${(props) => props.radius && BORDER_RADIUS};
  background-color: ${(props) => props.bgrColor};
  padding: ${(props) => props.padding};
  flex-wrap: ${(props) => props.flexwrap && "wrap"};
  margin: ${(props) => props.margin};
  flex: ${(props) => props.flex && "1"};
  overflow: ${(props) => props.overflow && "hidden"};
  max-width: ${(props) => props.maxWidth};
  position: ${(props) => props.position};
  border-top: ${(props) => `1px solid ${props.borderTop}`};
  border: ${(props) => props.border && `1px solid ${props.border}`};
  overflow-x: ${(props) => props.overflowX && "scroll"};
  z-index: ${(props) => props.zIndex};
  top: ${(props) => props.top};
  min-height: ${(props) => props.minHeight && "100vh"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: ${(props) => props.cursor || "pointer"};
  opacity: ${(props) => props.opacity};
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TextView = styled("span")`
  font-size: ${(props) => `calc(0.87rem + ${props.size}vw)`};
  font-weight: ${(props) => props.weight || WEIGHT_400};
  color: ${(props) => props.color || DARK_GRAY};
  line-height: ${(props) => `calc(2rem + ${props.lineHeight}vw)`};
  text-align: ${(props) => props.align || "justify"};
  white-space: ${(props) => props.nowrap && "nowrap"};
  text-transform: ${(props) => props.transform || "capitalize"};
  background-color: ${(props) => props.bgrColor};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.radius && BORDER_RADIUS};
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => (props.fullWidth && "100%") || "fit-content"};
  align-self: ${(props) => props.alignY && "center"};
  justify-self: ${(props) => props.alignX && "center"};
  overflow-x: ${(props) => props.overflowX && "scroll"};
  display: flex;
  height: fit-content;
  flex: ${(props) => props.flex};
  text-decoration: ${(props) => props.underline && "underline"};
  background: ${(props) =>
    props.highLight &&
    `linear-gradient(to bottom, transparent 65%, ${
      props.bgrColor || YELLOW_COLOR
    } 65%)`};
  &:hover {
    color: ${(props) => props.hoverColor};
    background-color: ${(props) => props.hoverBgColor};
    opacity: ${(props) => props.hover && "0.9"};
    transition: all ease-in-out 0.2s;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SmallText = styled("span")`
  font-size: ${(props) => props.size + "px"};
  color: ${(props) => props.color || DARK_GRAY};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align || "justify"};
  white-space: ${(props) => props.nowrap || "nowrap"};
   position: ${(props) => props.position};
   display: flex;
`;

export const TestText = styled("span")`
  background: linear-gradient(to bottom, transparent 50%, red 50%);
  font-size: 16px;
  padding: 1rem;
`;

export const GridContainer = styled("div")`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 2fr));
`;
