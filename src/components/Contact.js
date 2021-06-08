import React, { Component} from 'react';
import './page.css';
import {VscLocation} from 'react-icons/vsc';
import {AiOutlineMail} from 'react-icons/ai';
import {FcPhoneAndroid} from 'react-icons/fc';
import ContactForm from './ContactForm';
import validate from './ValidateInfo';
import Fade from 'react-reveal/Fade';
import {Spinner} from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';

function Contact(){
  
  const {handleChange, values, handleSubmit, errors} = ContactForm(validate);

  return (
    <div className='p-2 contact-section'>
    <div className='section-title'>
    <Fade top cascade>
      <h1>Contact</h1>
      <span>If you still have any questions, Leave us a Message</span>
      </Fade>
      </div>

     <div className='contact-container'>
     <div ><img className='contact-image' src='/Images/contact.jpg'/></div>

     <div className='contact-form'>
       <form onSubmit={handleSubmit}>
        <div className="form-group p-3">
          <label for="exampleInputEmail1" className='label-fonts'>Name</label>
          <input 
            type="text"
            className="form-control"
            id="username" 
            aria-describedby="emailHelp"
            placeholder="Enter Your Name"
            name = "username"
            value={values.username}
            onChange={handleChange}/>
            {errors.username && <p className='form-errors'>{errors.username}</p>}
        </div>
        
        <div className="form-group p-3">
          <label for="exampleInputPassword1" className='label-fonts'>Email Address</label>
          <input 
           type="text"
           className="form-control" 
           id="email" 
           placeholder="Enter YourEmail"
           name="email"
           value={values.email}
           onChange={handleChange}/>
           {errors.email && <p className='form-errors'>{errors.email}</p>}
        </div>
        
        <div className="form-group p-3">
          <label for="exampleInputEmail1" className='label-fonts'>Message</label>
          <textarea 
            type="text" 
            className="form-control"
            id="message" 
            aria-describedby="emailHelp"
            placeholder="Enter Your Message"
            name="message"
            value={values.message}
            onChange={handleChange}/>
            {errors.message && <p className='form-errors'>{errors.message}</p>}
        </div>
        
        <div className="form-group p-3">
        <button type="submit" className="submit-btn">Submit</button>
        </div>
        </form>
      </div>


      <div className="contact-card" style={{width: "18rem"}}>
      <ul className="list-group">
      {/* <li className="list-group-item">
        <div><VscLocation className='contact-icon-address'/><h3>Address :</h3></div>
        <span>No 1/8, Hakmana Road, Walasmulla</span></li> */}
      <li className="list-group-item">
        <div><AiOutlineMail className='contact-icon-email'/><h3>Email :</h3></div>
      <span>sachinnimshan@gmail.com</span></li>
      <li className="list-group-item">
        <div><FcPhoneAndroid className='contact-icon-phone'/><h3>Phone :</h3></div>
      <span>(+94)779012655</span></li>
      </ul>
    </div>
    </div>
</div>
  )
}

export default Contact;