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

    const resetForm=()=>{
        setvalues({username: '', email: '', message: ''});
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        seterrors(validate(values));
        if(errors.username && errors.email && errors.message){
            swal("Oops", "Someting Went Wrong", "error");
        }
        if(values.username === ''){
            swal("Oops", "Fields Are Required", "warning");
        }
        if(values.email === ''){
            swal("Oops", "Fields Are Required", "warning");
        }
        if(values.message === ''){
            swal("Oops", "Fields Are Required", "warning");
        }
        else{
            try{
                await axios({
                    method: "POST", 
                    url:'/api/email/sendemail', 
                    data:  values
                  });
                  swal("Good job!", "Thank You For Your Support", "success");
            }catch(error){
                swal("Ooops!", "Something Went Wrong", "error");
            }
        resetForm();
        }
    }

    return {handleChange, values, handleSubmit, errors} ;
}

export default ContactForm;
