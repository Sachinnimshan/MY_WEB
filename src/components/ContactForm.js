import React,{useState} from 'react';
import axios from 'axios';

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

    const handleSubmit=async(e)=>{
        e.preventDefault();
        seterrors(validate(values));
        const res = await axios.post("http://127.0.0.1:8000/api/contact", values);
    console.log(res);

    }
    return {handleChange, values, handleSubmit, errors} ;
}

export default ContactForm;
