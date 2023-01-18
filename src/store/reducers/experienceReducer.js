export const getAllExperienceReducer=(state={loading: true, experiences: []}, action)=>{
    switch(action.type){
        case "ALL_EXPERIENCE_REQUEST":
            return {loading: true};
        case "ALL_EXPERIENCE_SUCCESS":
            return {loading:false, experiences: action.payload};
        case "ALL_EXPERIENCE_FAIL":
            return {loading: false, errors: action.payload};
        default:
            return state;
    }
}