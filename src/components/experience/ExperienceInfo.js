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
} from "../pages.styled";

function ExperienceInfo(props) {
  return (
    <ExperienceCard>
      <ExperienceItem>
        <WorkIcon />
        <JobTitle>{props.jobTitle}</JobTitle>
      </ExperienceItem>
      <ExperienceItem>
        <CalendarIcon />
        <JobDuration>{props.jobDuration}</JobDuration>
      </ExperienceItem>
      <ExperienceItem>
        <LocationIcon />
        <CompanyName>{props.companyName}</CompanyName>
      </ExperienceItem>
      <JobKeysContainer>
        {props.keyroles?.map((key) => (
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
