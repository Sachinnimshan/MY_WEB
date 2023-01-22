import React, { useEffect } from "react";
import {
  EducationContainer,
  SectionContainer,
  SectionTitle,
} from "../../pages.styled";
import { useDispatch, useSelector } from "react-redux";
import { getAllEducation } from "../../../store/actions/education";
import EducationInfo from "./EductionInfo";
import LoadingBox from "../../common/LoadingBox";
import MessageBox from "../../common/MessageBox";
import { useResponsive } from "../../../hooks/useResponsive";


function Education() {
  const dispatch = useDispatch();
  const {mobile}  =useResponsive();
  const { loading, errors, educationInfo } = useSelector(
    (state) => state.educationData
  );

  useEffect(() => {
    dispatch(getAllEducation());
  }, [dispatch]);

  return (
    <SectionContainer>
      <SectionTitle mobile={mobile}>EDUCATION</SectionTitle>
      <EducationContainer>
        {loading && <LoadingBox />}
        {errors && <MessageBox>{errors}</MessageBox>}
        {educationInfo?.map((data) => (
          <EducationInfo data={data}
          />
        ))}
      </EducationContainer>
    </SectionContainer>
  );
}

export default Education;
