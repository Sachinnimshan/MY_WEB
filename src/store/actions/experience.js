import axios from "axios";
import swal from "sweetalert";

const BASE_API_URL = "https://sn-backend.onrender.com";

export const getAllExperience = () => async (dispatch) => {
  dispatch({ type: "ALL_EXPERIENCE_REQUEST" });
  try {
    const { data } = await axios.get(`${BASE_API_URL}/api/experience`);
    dispatch({ type: "ALL_EXPERIENCE_SUCCESS", payload: data });
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
