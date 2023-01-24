import React, { Fragment, useState } from "react";
import {
  CalendarIcon,
  CompanyName,
  ExperienceCard,
  ExperienceItem,
  JobActiveness,
  JobDuration,
  JobKeyItem,
  JobKeys,
  JobKeysContainer,
  JobTitle,
  KeysIcon,
  LocationIcon,
  SeeMoreText,
  WorkIcon,
} from "../../pages.styled";
import moment from "moment";

function ExperienceInfo({ data }) {
  const [expLength, setExpLength] = useState(3);
  const [keysExpand, setKeysExpand] = useState(false);
  const getJobDuration = (data) => {
    const start = data.start;
    const end = new Date(data?.ends);
    if (data?.current) {
      return `${moment(start).format("YYYY MMMM")} - Present`;
    }
    return `${moment(start).format("YYYY MMMM")} - ${moment(end).format(
      "YYYY MMMM"
    )}`;
  };

  const handleSeeMore = () => {
    setExpLength(expLength + data.keyroles?.length);
    setKeysExpand(!keysExpand);
  };

  const handleSeeLess = () => {
    setExpLength(3);
    setKeysExpand(false);
  };

  return (
    <ExperienceCard>
      <ExperienceItem>
        <WorkIcon />
        <JobTitle>
          <Fragment>{data.jobTitle}</Fragment>
          <JobActiveness active={data.current} />
        </JobTitle>
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
        {data.keyroles?.slice(0, expLength).map((key) => (
          <JobKeyItem>
            <KeysIcon />
            <JobKeys>{key}</JobKeys>
          </JobKeyItem>
        ))}
        {data.keyroles?.length > 4 && (
          <SeeMoreText onClick={keysExpand ? handleSeeLess : handleSeeMore}>
            {keysExpand ? "See less" : "See more"}
          </SeeMoreText>
        )}
      </JobKeysContainer>
    </ExperienceCard>
  );
}

export default ExperienceInfo;
