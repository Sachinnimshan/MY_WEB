import { combineReducers } from "redux";
import { getAllExperienceReducer } from "./reducers/experienceReducer";
import {
  getAllProjectsReducer,
  getProjectInfoReducer,
  getProjectReviewsReducer,
  postReviewReducer,
} from "./reducers/projectReducer";
import {getAllEducationReducer} from './reducers/educationReducer';

export default combineReducers({
  projectList: getAllProjectsReducer,
  projectData: getProjectInfoReducer,
  projectReviews: getProjectReviewsReducer,
  reviewpost: postReviewReducer,
  experienceData: getAllExperienceReducer,
  educationData: getAllEducationReducer
});
