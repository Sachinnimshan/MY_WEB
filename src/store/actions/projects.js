import axios from 'axios';

export const getAllProjects=()=>async(dispatch)=>{
    dispatch({type: "ALL_PROJECTS_REQUEST"});
    try{
        const {data} = await axios.get("/api/projects");
        dispatch({type: "ALL_PROJECTS_SUCCESS", payload: data});
    }catch(error){
        dispatch({type: "ALL_PROJECTS_FAIL", payload: (error.response && error.response.data.message ?
            error.response.data.message : error.message)});
    }
}

export const getProjectInfo=(projectID)=>async(dispatch)=>{
    dispatch({type: "PROJECT_INFO_REQUEST", payload: projectID});
    try{
        const {data} = await axios.get(`/api/projects/${projectID}`);
        dispatch({type: "PROJECT_INFO_SUCCESS", payload: (data)});
    }catch(error){
        dispatch({type: "PROJECT_INFO_FAIL", payload: (error.response && error.response.data.message ?
            error.response.data.message : error.message)});
    }
}

export const getProjectReviews=(projectID)=>async(dispatch)=>{
    dispatch({type: "PROJECT_REVIEW_REQUEST", payload: projectID});
    try{
        const {data} = await axios.get(`/api/reviews/${projectID}`);
        dispatch({type: "PROJECT_REVIEW_SUCCESS", payload: (data)});
    }catch(error){
        dispatch({type: "PROJECT_REVIEW_FAIL", payload: (error.response && error.response.data.message ?
            error.response.data.message : error.message)});
    }
}

export const postReviews=(name, email,comment,projectID)=>async(dispatch)=>{
    dispatch({type: "POST_REVIEW_REQUEST", payload: {name, email,comment,projectID}});
    try{
        const {data} = await axios.post(`/api/reviews/post`, {name, email,comment,projectID});
        dispatch({type: "POST_REVIEW_SUCCESS", payload: data});
    }catch(error){
        dispatch({type: "POST_REVIEW_FAIL", payload: (error.response && error.response.data.message ?
            error.response.data.message : error.message)});
    }
}