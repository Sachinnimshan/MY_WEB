import React from "react";
import {
  CalendarIcon,
  CompanyName,
  ExperienceCard,
  ExperienceItem,
  JobDuration,
  JobKeyItem,
  JobKeys,
  JobKeysContainer,
  JobTitle,
  KeysIcon,
  LocationIcon,
  WorkIcon,
} from "../../pages.styled";
import moment from "moment";

function ExperienceInfo({ data }) {
  const getJobDuration = (data) => {
    const start = data.start;
    const end = new Date(data?.ends);
    if (!data?.ends) {
      return `${moment(start).format("YYYY MMMM")} - Present`;
    }
    return `${moment(start).format("YYYY MMMM")} - ${moment(end).format(
      "YYYY MMMM"
    )}`;
  };

  return (
    <ExperienceCard>
      <ExperienceItem>
        <WorkIcon />
        <JobTitle>{data.jobTitle}</JobTitle>
      </ExperienceItem>
      <ExperienceItem>
        <CalendarIcon />
        <JobDuration>{getJobDuration(data)}</JobDuration>
      </ExperienceItem>
      <ExperienceItem>
        <LocationIcon />
        <CompanyName>{data.companyName}</CompanyName>
      </ExperienceItem>
      <JobKeysContainer>
        {data.keyroles?.map((key) => (
          <JobKeyItem>
            <KeysIcon />
            <JobKeys>{key}</JobKeys>
          </JobKeyItem>
        ))}
      </JobKeysContainer>
    </ExperienceCard>
  );
}

export default ExperienceInfo;
