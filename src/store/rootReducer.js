import { combineReducers } from "redux";
import { getAllExperienceReducer } from "./reducers/experienceReducer";
import {
  getAllProjectsReducer,
  getProjectInfoReducer,
} from "./reducers/projectReducer";
import { getAllEducationReducer } from "./reducers/educationReducer";
import { postMessageReducer } from "./reducers/contactReducer";

export default combineReducers({
  projectList: getAllProjectsReducer,
  projectData: getProjectInfoReducer,
  experienceData: getAllExperienceReducer,
  educationData: getAllEducationReducer,
  contactData: postMessageReducer,
});
