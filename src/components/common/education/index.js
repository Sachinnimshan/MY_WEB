import React, { useEffect } from "react";
import {
  EducationContainer,
  EducationInfoContainer,
  SectionTitle,
} from "../../pages.styled";
import { useDispatch, useSelector } from "react-redux";
import { getAllEducation } from "../../../store/actions/education";
import EducationInfo from "./EductionInfo";
import LoadingBox from "../../util/LoadingBox";
import MessageBox from "../../util/MessageBox";
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
    <EducationContainer>
      <SectionTitle mobile={mobile}>Education</SectionTitle>
      <EducationInfoContainer>
        {loading && <LoadingBox />}
        {errors && <MessageBox>{errors}</MessageBox>}
        {educationInfo?.map((item) => (
          <EducationInfo
            title={item.title}
            years={item.years}
            university={item.university}
          />
        ))}
      </EducationInfoContainer>
    </EducationContainer>
  );
}

export default Education;
