import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { SECONDARY_COLOR } from "../../styled";

function LoadingBox(props) {
  return (
    <div>
      <CircularProgress size="3rem" style={{ color: SECONDARY_COLOR }} />
    </div>
  );
}

export default LoadingBox;
