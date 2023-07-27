import React, { useEffect } from "react";
import {
  SectionTitle,
} from "../../pages.styled";
import { useDispatch, useSelector } from "react-redux";
import { getAllEducation } from "../../../store/actions/education";
import EducationInfo from "./EductionInfo";
import LoadingBox from "../../common/LoadingBox";
import MessageBox from "../../common/MessageBox";
import { useResponsive } from "../../../hooks/useResponsive";
import { FlexContainer } from "../../../styled";

function Education() {
  const dispatch = useDispatch();
  const { mobile } = useResponsive();
  const { loading, errors, educationInfo } = useSelector(
    (state) => state.educationData
  );

  useEffect(() => {
    dispatch(getAllEducation());
  }, [dispatch]);

  return (
    <FlexContainer column gap={2} >
      <SectionTitle mobile={mobile}>EDUCATION</SectionTitle>
      <FlexContainer gap={2} flexwrap>
        {loading && <LoadingBox />}
        {errors && <MessageBox>{errors}</MessageBox>}
        {educationInfo?.map((data) => (
          <EducationInfo data={data} />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
}

export default Education;
