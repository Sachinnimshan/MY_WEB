import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)`
  &.MuiButton-root {
    border-radius: 4px;
    text-transform: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    padding: 10px 20px;
    background: linear-gradient(to left bottom, #94d600, #1b262c);
    margin-top: ${(props) => props.marginTop && "1rem"};
  }

  &.MuiButton-outlined {
    background: linear-gradient(to left bottom, #94d600, #1b262c);
    border: 2px solid #ffbfc2;
    color: #ffffff !important;

    &.Mui-disabled {
      background-color: #e5e5e5;
      color: #999999 !important;
      border: 2px solid #e6e6e6;
    }
  }

  & .MuiButton-startIcon {
    margin-left: 0;
    svg {
      height: 16px;
      width: 16px;
    }
  }

  &.MuiButton-sizeSmall {
    padding: 8px 12px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }

  &.MuiButton-sizeLarge {
    padding: 14px 14px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    & .MuiButton-startIcon {
      svg {
        height: 24px;
        width: 24px;
      }
    }
  }

  &.Mui-disabled {
    background-color: #e5e5e5;
    color: #999999;
    border: none;
  }
`;
