import React from "react";
import {
  CalendarIcon,
  DegreeIcon,
  Degreetitle,
  EducationInfoCard,
  EducationInfoItem,
  EduDuration,
  LocationIcon,
  University,
} from "../../pages.styled";

function EducationInfo(props) {
  return (
    <EducationInfoCard>
      <EducationInfoItem>
        <DegreeIcon/>
        <Degreetitle>{props.title}</Degreetitle>
      </EducationInfoItem>
      <EducationInfoItem>
        <CalendarIcon/>
        <EduDuration>{props.years}</EduDuration>
      </EducationInfoItem>
      <EducationInfoItem>
        <LocationIcon/>
        <University>{props.university}</University>
      </EducationInfoItem>
    </EducationInfoCard>
  );
}

export default EducationInfo;
