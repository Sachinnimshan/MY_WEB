import React from "react";
import {
  ControlBack,
  ControlIconContainer,
  ControlNext,
  NextPreviousContainer,
} from "./next.styled";

function Nextprevious({clickNext, clickBack}) {
  return (
    <NextPreviousContainer>
      <ControlIconContainer onClick={clickBack}>
        <ControlBack/>
      </ControlIconContainer>
      <ControlIconContainer onClick={clickNext}>
        <ControlNext />
      </ControlIconContainer>
    </NextPreviousContainer>
  );
}

export default Nextprevious;
