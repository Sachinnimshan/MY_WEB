export const userSignInReducer=(state={}, action)=>{
    switch(action.type){
        case "USER_SIGN_IN_REQUEST":
            return {loading: true};
        case "USER_SIGN_IN_SUCCESS":
            return {loading: false, success: true, userInfo: action.payload};
        case "USER_SIGN_IN_FAIL":
            return {loading: false, success: false, errors: action.payload};
        case "USER_SIGN_OUT":
            return {};
        default:
            return state;
    }
}

export const userSignUpReducer=(state={}, action)=>{
    switch(action.type){
        case "USER_SIGN_UP_REQUEST":
            return {loading: true};
        case "USER_SIGN_UP_SUCCESS":
            return {loading: false, success: true, userInfo: action.payload};
        case "USER_SIGN_UP_FAIL":
            return {loading: false,  success: false, errors: action.payload};
        default:
            return state;
    }
}