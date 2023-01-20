import {
  getAllProjectsInfo,
  getProjectDetails,
} from "../../helpers/api_helper";

export const getAllProjects = () => async (dispatch) => {
  dispatch({ type: "ALL_PROJECTS_REQUEST" });
  try {
    const response = await getAllProjectsInfo();
    dispatch({ type: "ALL_PROJECTS_SUCCESS", payload: response });
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
    const response = await getProjectDetails(projectID);
    dispatch({ type: "PROJECT_INFO_SUCCESS", payload: response });
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
