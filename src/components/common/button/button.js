import React from "react";
import { StyledButton } from "./button.styled";

const Button = (props) => {
  return (
    <StyledButton
      variant="contained"
      color="primary"
      disableElevation
      fullWidth
      size="large"
      {...props}
    />
  );
};

export default Button;
