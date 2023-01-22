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

function EducationInfo({data}) {
  return (
    <EducationInfoCard>
      <EducationInfoItem>
        <DegreeIcon/>
        <Degreetitle>{data.title}</Degreetitle>
      </EducationInfoItem>
      <EducationInfoItem>
        <CalendarIcon/>
        <EduDuration>{data.years}</EduDuration>
      </EducationInfoItem>
      <EducationInfoItem>
        <LocationIcon/>
        <University>{data.university}</University>
      </EducationInfoItem>
    </EducationInfoCard>
  );
}

export default EducationInfo;
