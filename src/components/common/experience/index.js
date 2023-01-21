import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useResponsive } from "../../../hooks/useResponsive";
import { getAllExperience } from "../../../store/actions/experience";
import {
  ExperienceCardContainer,
  ExperienceContainer,
  SectionTitle,
} from "../../pages.styled";
import LoadingBox from "../../common/LoadingBox";
import MessageBox from "../../common/MessageBox";
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
      <SectionTitle mobile={mobile} marginBottom>
        MY EXPERIENCE
      </SectionTitle>
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
