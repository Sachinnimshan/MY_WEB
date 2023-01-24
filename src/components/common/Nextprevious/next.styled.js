import styled from "@emotion/styled";
import { GrNext, GrPrevious } from "react-icons/gr";

export const NextPreviousContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  position: absolute;
`;

export const ControlIconContainer = styled("div")`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  background-color: #1b262c;
  opacity: 0.05;
  justify-content: center;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
    transition: all ease-in-out 0.3s;
  }
`;

export const ControlNext = styled(GrNext)`
  font-size: 1.25rem;
`;

export const ControlBack = styled(GrPrevious)`
  font-size: 1.25rem;
`;
