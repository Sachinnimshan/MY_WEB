import { getExperienceInfo } from "../../helpers/api_helper";

export const getAllExperience = () => async (dispatch) => {
  dispatch({ type: "ALL_EXPERIENCE_REQUEST" });
  try {
    const response = await getExperienceInfo();
    dispatch({ type: "ALL_EXPERIENCE_SUCCESS", payload: response });
  } catch (error) {
    dispatch({
      type: "ALL_EXPERIENCE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
