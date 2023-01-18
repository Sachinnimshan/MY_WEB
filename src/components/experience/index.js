import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useResponsive } from "../../hooks/useResponsive";
import { getAllExperience } from "../../store/actions/experience";
import {
  ExperienceCardContainer,
  ExperienceContainer,
  PageMessage,
} from "../pages.styled";
import LoadingBox from "../util/LoadingBox";
import MessageBox from "../util/MessageBox";
import ExperienceInfo from "./ExperienceInfo";

function Experience() {
  const dispatch = useDispatch();
  const { mobile } = useResponsive();
  const { loading, errors, experiences } = useSelector(
    (state) => state.experienceData
  );

  useEffect(() => {
    dispatch(getAllExperience());
  }, [dispatch]);
  return (
    <ExperienceContainer>
      <PageMessage mobile={mobile} marginBottom>
        My Experience
      </PageMessage>
      <ExperienceCardContainer>
        {loading && <LoadingBox />}
        {errors && <MessageBox>{errors}</MessageBox>}
        {experiences?.map((exp) => (
          <ExperienceInfo
            key={exp}
            jobDuration={exp.jobDuration}
            keyroles={exp.keyroles}
            companyName={exp.companyName}
            jobTitle={exp.jobTitle}
          />
        ))}
      </ExperienceCardContainer>
    </ExperienceContainer>
  );
}

export default Experience;
