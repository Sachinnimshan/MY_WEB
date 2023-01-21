import axios from "axios";
import baseURL from "../util/config";

export const performRequest = async (
  method,
  url,
  data,
  needLoading,
  showErrorPopup = true
) => {
  return await axios({
    baseURL: baseURL,
    url: url,
    method: method,
    data: data,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const getAllProjectsInfo = async () => {
  return await performRequest("GET", "/projects", {});
};

export const getProjectDetails = async (projectID) => {
  return await performRequest("GET", `/projects/${projectID}`, {});
};

export const getEducationInfo = async () => {
  return await performRequest("GET", "/education", {});
};

export const getExperienceInfo = async () => {
  return await performRequest("GET", "/experience", {});
};
