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
            await axios({
                method: "POST", 
                url:'/api/email/sendemail', 
                data:  values
              }).then((response)=>{
                if (response.data.status === 'success'){
                    alert("Message Sent."); 
                    resetForm();
                }else if(response.data.status === 'fail'){
                    alert("Message failed to send.")
                }
              });
            swal("Good job!", "Thank You For Your Support", "success");
        }
    }

    return {handleChange, values, handleSubmit, errors} ;
}

export default ContactForm;
