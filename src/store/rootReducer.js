import {combineReducers} from 'redux';
import { userSignInReducer, userSignUpReducer } from './reducers/userReducer';

export default combineReducers({
    userLogin: userSignInReducer,
    userRegister: userSignUpReducer
});