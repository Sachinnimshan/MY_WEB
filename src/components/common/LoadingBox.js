import React from "react";
import { CircularProgress, Backdrop } from "@mui/material";
import { YELLOW_COLOR } from "../../styled";

function LoadingBox(props) {
  return (
    <Backdrop open>
      <CircularProgress size="3rem" style={{ color: YELLOW_COLOR }} />
    </Backdrop>
  );
}

export default LoadingBox;
