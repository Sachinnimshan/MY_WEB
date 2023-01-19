import axios from "axios";

const BASE_API_URL = "https://sn-backend.onrender.com";

export const getAllEducation = () => async (dispatch) => {
  dispatch({ type: "ALL_EDUCATION_REQUEST" });
  try {
    const { data } = await axios.get(`${BASE_API_URL}/api/education`);
    dispatch({ type: "ALL_EDUCATION_SUCCESS", payload: data });
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
