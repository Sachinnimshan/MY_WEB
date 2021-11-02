import {combineReducers} from 'redux';
import { getAllProjectsReducer, getProjectInfoReducer, getProjectReviewsReducer } from './reducers/projectReducer';
import { userSignInReducer, userSignUpReducer } from './reducers/userReducer';

export default combineReducers({
    userLogin: userSignInReducer,
    userRegister: userSignUpReducer,
    projectList: getAllProjectsReducer,
    projectData: getProjectInfoReducer,
    projectReviews: getProjectReviewsReducer
});