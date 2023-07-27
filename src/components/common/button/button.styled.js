import styled from "@emotion/styled";
import {
  BORDER_RADIUS,
  LIGHT_GRAY,
  SECONDARY_THEME_COLOR,
  THEME_COLOR,
  WEIGHT_500,
  WHITE_COLOR,
} from "../../../styled";

export const StyledButton = styled("button")`
  border: none;
  padding: ${(props) => props.padding};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  height: fit-content;
  flex: ${(props) => props.flex || 1};
  letter-spacing: 0.5px;
  color: ${(props) => props.color || WHITE_COLOR};
  font-size: ${(props) => `${props.size}px`};
  font-weight: ${WEIGHT_500};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  background-image: ${(props) =>
    `linear-gradient(to right, ${
      props.bgrColor1 || SECONDARY_THEME_COLOR
  } 0%, ${props.bgrColor2 || THEME_COLOR} 100%)`};
  border-radius: ${BORDER_RADIUS};
  cursor: pointer;
  &:disabled {
    background-color: ${LIGHT_GRAY};
  }
`;
