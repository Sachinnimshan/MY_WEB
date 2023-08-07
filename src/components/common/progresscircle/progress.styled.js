import styled from "@emotion/styled";
import {
  BG_GRAY,
  SECONDARY_THEME_COLOR,
  WHITE_COLOR,
} from "../../../styled";

export const ProgressView = styled("div")`
  width: ${(props) => `${props.width}rem`};
  height: ${(props) => `${props.height}rem`};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  background: ${(props) =>
    `conic-gradient(${SECONDARY_THEME_COLOR} ${
      props.progressStartValue * 3.6
    }deg, ${BG_GRAY} 0deg)`};
  ::before {
    width: calc(100% - 1.75rem);
    height: calc(100% - 1.75rem);
    content: "";
    border-radius: 50%;
    position: absolute;
    background-color: ${WHITE_COLOR};
  }
`;
