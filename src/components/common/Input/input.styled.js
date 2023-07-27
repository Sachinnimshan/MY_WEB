import styled from "@emotion/styled";
import { LIGHT_GRAY } from "../../../styled";

export const InputContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 0 10px;
`;

export const InputLabel = styled("span")`
  font-size: 14px;
  color: ${LIGHT_GRAY};
  margin-bottom: 10px;
`;

export const ErrorLabel = styled("span")`
  font-size: 14px;
  color: #f93232;
  margin-top: 5px;
  font-weight: 500;
`;
