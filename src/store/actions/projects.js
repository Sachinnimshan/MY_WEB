import axios from "axios";
import swal from "sweetalert";

const BASE_API_URL = "https://sn-backend.onrender.com";

export const getAllProjects = () => async (dispatch) => {
  dispatch({ type: "ALL_PROJECTS_REQUEST" });
  try {
    const { data } = await axios.get(`${BASE_API_URL}/api/projects`);
    dispatch({ type: "ALL_PROJECTS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "ALL_PROJECTS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProjectInfo = (projectID) => async (dispatch) => {
  dispatch({ type: "PROJECT_INFO_REQUEST", payload: projectID });
  try {
    const { data } = await axios.get(
      `${BASE_API_URL}/api/projects/${projectID}`
    );
    dispatch({ type: "PROJECT_INFO_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "PROJECT_INFO_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

