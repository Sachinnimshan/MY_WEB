import React, { useEffect } from "react";
import {
  DARK_GRAY,
  FlexContainer,
  SmallText,
  WEIGHT_500,
  WEIGHT_600,
} from "../../../styled";
import { ProgressView } from "./progress.styled";

function ProgressCircle({ size = 3, value, title, ...props }) {
  let progressStartValue = 0;
  console.log(progressStartValue);
  let progressEndValue = 90;
  let speed = 10000;
  let progress;

  useEffect(() => {
    progress = setInterval(() => {
      progressStartValue++;
      if (progressStartValue === progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
  }, []);
  return (
    <FlexContainer column gap={1} alignY="center">
      <ProgressView
        width={size}
        height={size}
        progressStartValue={progressStartValue}
        className="circular-progress"
        {...props}
      >
        <SmallText
          size={16}
          weight={WEIGHT_500}
          color={DARK_GRAY}
          position="relative"
          className="progress-value"
        >
          {progressStartValue}%
        </SmallText>
      </ProgressView>
      <SmallText size={14} color={DARK_GRAY} weight={WEIGHT_600}>
        {title}
      </SmallText>
    </FlexContainer>
  );
}

export default ProgressCircle;
