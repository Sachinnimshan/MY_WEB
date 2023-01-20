
import { getEducationInfo } from "../../helpers/api_helper";

export const getAllEducation = () => async (dispatch) => {
  dispatch({ type: "ALL_EDUCATION_REQUEST" });
  try {
    const response = await getEducationInfo();
    dispatch({ type: "ALL_EDUCATION_SUCCESS", payload: response });
  } catch (error) {
    dispatch({
      type: "ALL_EDUCATION_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
