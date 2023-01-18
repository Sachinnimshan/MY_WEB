import MuiDialog from "@material-ui/core/Dialog";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const Dialog = styled(MuiDialog)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  color: #666666;
`;

export const Body = styled(Typography)`
font-size: 16px;
color: #666666;
font-weight: 400;
`;