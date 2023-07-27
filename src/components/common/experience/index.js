import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useResponsive } from "../../../hooks/useResponsive";
import { getAllExperience } from "../../../store/actions/experience";
import {
  SectionTitle,
} from "../../pages.styled";
import LoadingBox from "../../common/LoadingBox";
import MessageBox from "../../common/MessageBox";
import ExperienceInfo from "./ExperienceInfo";
import { FlexContainer } from "../../../styled";

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
    <FlexContainer column gap={2} >
      <SectionTitle mobile={mobile}>MY EXPERIENCE</SectionTitle>
      <FlexContainer flexwrap gap={1}>
        {loading && <LoadingBox />}
        {errors && <MessageBox>{errors}</MessageBox>}
        {experiences?.map((data) => (
          <ExperienceInfo data={data} />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
}

export default Experience;
