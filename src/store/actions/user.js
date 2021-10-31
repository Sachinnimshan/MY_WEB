import axios from 'axios';

export const userSignIn=(email,password)=>async(dispatch)=>{
    dispatch({type: "USER_SIGN_IN__REQUEST"});
    try{
        const {data} = await axios.post('/api/users/signin', {email,password});
        dispatch({type: "USER_SIGN_IN_SUCCESS", payload: (data)});
        localStorage.setItem("userInfo", JSON.stringify(data));
    }catch(error){
        dispatch({type: "USER_SIGN_IN_FAIL", payload: (error.response && error.response.data.message ?
            error.response.data.message : error.message)});
    }
}

export const userSignOut=()=>async(dispatch)=>{
    dispatch({type: "USER_SIGN_OUT"});
    localStorage.removeItem("userInfo");
}

export const userSignUp=(name, email, password)=>async(dispatch)=>{
    dispatch({type: "USER_SIGN_UP_REQUEST", payload:{name, email, password}});
    try{
        const {data} = await axios.post('/api/users/signup', {name, email, password});
        dispatch({type: "USER_SIGN_UP_SUCCESS", payload: (data)});
        dispatch({type: "USER_SIGN_IN_SUCCESS", payload: (data)});
        localStorage.setItem("userInfo", JSON.stringify(data));
    }catch(error){
        dispatch({type: "USER_SIGN_UP_FAIL", payload: (error.response && error.response.data.message ?
            error.response.data.message : error.message)});
    }
}