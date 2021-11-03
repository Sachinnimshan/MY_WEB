export const getAllProjectsReducer=(state={loading: true, projects: []}, action)=>{
    switch(action.type){
        case "ALL_PROJECTS_REQUEST":
            return {loading: true};
        case "ALL_PROJECTS_SUCCESS":
            return {loading:false, projects: action.payload};
        case "ALL_PROJECTS_FAIL":
            return {loading: false, errors: action.payload};
        default:
            return state;
    }
}

export const getProjectInfoReducer=(state={loading: true, projects:[]},action)=>{
    switch(action.type){
        case "PROJECT_INFO_REQUEST":
            return {loading: true};
        case "PROJECT_INFO_SUCCESS":
            return {loading: false, projectInfo: action.payload};
        case "PROJECT_INFO_FAIL":
            return {loading: false, errors: action.payload};
        default:
            return state;
    }
}
export const getProjectReviewsReducer=(state={loading: true, reviews:[]},action)=>{
    switch(action.type){
        case "PROJECT_REVIEW_REQUEST":
            return {loading: true};
        case "PROJECT_REVIEW_SUCCESS":
            return {loading: false, reviews: action.payload};
        case "PROJECT_REVIEW_FAIL":
            return {loading: false, errors: action.payload};
        default:
            return state;
    }
}

export const postReviewReducer=(state={}, action)=>{
    switch(action.type){
        case "POST_REVIEW_REQUEST":
            return {loading: true};
        case "POST_REVIEW_SUCCESS":
            return {loading: false, success: true, newReview: action.payload};
        case "POST_REVIEW_FAIL":
            return {loading: false, success: false, errors: action.payload};
        default:
            return state;
    }
}