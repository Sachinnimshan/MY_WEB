import styled from "styled-components";

export const InputContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 0 10px;
`;

export const InputLabel = styled("span")`
  font-size: 16px;
  color: #999999;
  font-family: "Poppins", sans-serif;
  margin-bottom: 10px;
`;

export const ErrorLabel = styled("span")`
  font-size: 14px;
  color: #f93232;
  font-family: "Poppins", sans-serif;
  margin-top: 5px;
  font-weight: 500;
`;
