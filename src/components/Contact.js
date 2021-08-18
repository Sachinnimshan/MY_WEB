import React, { Component} from 'react';
import './page.css';
import {VscLocation} from 'react-icons/vsc';
import {AiOutlineFacebook, AiOutlineMail, AiOutlineYoutube, AiOutlineClockCircle} from 'react-icons/ai';
import {FcPhoneAndroid} from 'react-icons/fc';
import ContactForm from './ContactForm';
import validate from './ValidateInfo';
import {Fade, Slide} from 'react-reveal';
import {Spinner} from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';
import { IoLogoInstagram} from 'react-icons/io';
import { FiTwitter } from 'react-icons/fi';
import {IoCallOutline} from 'react-icons/io5';
import {HiOutlineMail} from 'react-icons/hi';


function Contact(){
  
  const {handleChange, values, handleSubmit, errors} = ContactForm(validate);

  return (
    <div className='contact-section'>
    <div className='section-title'>
    <Fade bottom cascade>
      <h1>Contact</h1>
      <span>Leave Me A Message</span>
      </Fade>
      </div>

     <div className='contact-container'>
       <div className='contact-details-container'>

         <Slide bottom>
         <div className='contact-details'>
           <ul>
             <li><IoCallOutline className='contact-icons'/></li>
             <li><h4>Call Me</h4></li>
             <li><span>+94 77 9012 655</span></li>
           </ul>
         </div>
         </Slide>

         <Slide bottom><div className='contact-details'>
           <ul>
             <li><HiOutlineMail className='contact-icons'/></li>
             <li><h4>Email</h4></li>
             <li><span>sachinnimshan@gmail.com</span></li>
           </ul>
         </div></Slide>

         <Slide bottom><div className='contact-details'>
           <ul>
             <li><AiOutlineClockCircle className='contact-icons'/></li>
             <li><h4>Available Hours</h4></li>
             <li><span>Monday - Friday</span></li>
             <li><span>9:00AM - 05:00PM</span></li>
             </ul>
         </div></Slide>


       </div>

     <Slide bottom><div className='contact-form'>
       <form onSubmit={handleSubmit} >
        <div className="form-group p-3">
          <input 
            type="text"
            className="form-control"
            style={{fontFamily: 'Open Sans', fontSize: '15px'}}
            id="username" 
            aria-describedby="emailHelp"
            placeholder="Enter Your Name"
            name = "username"
            value={values.username}
            onChange={handleChange}/>
            {errors.username && <p className='form-errors'>{errors.username}</p>}
        </div>
        
        <div className="form-group p-3">
          
          <input 
           type="text"
           className="form-control"
           style={{fontFamily: 'Open Sans', fontSize: '15px'}}
           id="email" 
           placeholder="Enter Your Email"
           name="email"
           value={values.email}
           onChange={handleChange}/>
           {errors.email && <p className='form-errors'>{errors.email}</p>}
        </div>
        
        <div className="form-group p-3">
          
          <textarea 
            type="text" 
            className="form-control"
            style={{fontFamily: 'Open Sans', fontSize: '15px'}}
            id="message" 
            aria-describedby="emailHelp"
            placeholder="Enter Your Message"
            name="message"
            value={values.message}
            onChange={handleChange}/>
            {errors.message && <p className='form-errors'>{errors.message}</p>}
        </div>
        <div className="form-group p-3">
        <button type="submit" className="submit-btn">Send Message</button>
        </div>
        </form>
      </div>
</Slide>
</div>
</div>
  )
}

export default Contact;