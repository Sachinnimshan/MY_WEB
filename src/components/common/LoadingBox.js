import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function LoadingBox(props) {
  return (
    <div>
      <CircularProgress size="5rem" style={{ color: "#94d600" }} />
    </div>
  );
}

export default LoadingBox;
