import React,{useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';


const ContactForm=(validate)=> {
    const [values, setvalues] = useState({
        username: '',
        email: '',
        message: ''
    });

    const [errors, seterrors] = useState({});

    const handleChange=(e)=>{
        const {name, value } = e.target;
        setvalues({
            ...values, [name]: value
        });
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        seterrors(validate(values));
        if(errors.username && errors.email && errors.message){
            swal("Oops", "Someting Went Wrong", "error");
        }else{
            await axios.post("http://127.0.0.1:8000/api/contact", values);
            swal("Good job!", "Thank You For Your Support", "success");
        }
    }
    return {handleChange, values, handleSubmit, errors} ;
}

export default ContactForm;
