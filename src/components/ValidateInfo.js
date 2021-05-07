export default function validateInfo(values){
    let errors= {};

    if(!values.username.trim()){
        errors.username = "Name is Required";
    }
    if(!values.email){
        errors.email = "Email is Required";
    }else if(!/^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email  = "Email Address is Invalid"
    }
    if(!values.message){
        errors.message = 'Message is Required';
    }

    return errors;
}