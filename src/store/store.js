import {compose,createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const initialstate = {
    userLogin: {
        userInfo: localStorage.getItem('userInfo') ?
        JSON.parse(localStorage.getItem('userInfo')): null
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialstate, composeEnhancer(applyMiddleware(thunk)));

export default store;