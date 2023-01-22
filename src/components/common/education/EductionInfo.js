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
import moment from "moment";

function EducationInfo({ data }) {
  const getEduDuration = (data) => {
    const start = data.start;
    const end = new Date(data?.ends);
    if (!data?.ends) {
      return `${moment(start).format("YYYY")} - Present`;
    }
    return `${moment(start).format("YYYY")} - ${moment(end).format("YYYY")}`;
  };
  return (
    <EducationInfoCard>
      <EducationInfoItem>
        <DegreeIcon />
        <Degreetitle>{data.title}</Degreetitle>
      </EducationInfoItem>
      <EducationInfoItem>
        <CalendarIcon />
        <EduDuration>{getEduDuration(data)}</EduDuration>
      </EducationInfoItem>
      <EducationInfoItem>
        <LocationIcon />
        <University>{data.university}</University>
      </EducationInfoItem>
    </EducationInfoCard>
  );
}

export default EducationInfo;
