import React, { Component} from 'react';
import './page.css';
import {VscLocation} from 'react-icons/vsc';
import {AiOutlineFacebook, AiOutlineMail, AiOutlineYoutube} from 'react-icons/ai';
import {FcPhoneAndroid} from 'react-icons/fc';
import ContactForm from './ContactForm';
import validate from './ValidateInfo';
import {Fade, Slide} from 'react-reveal';
import {Spinner} from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';
import { IoLogoInstagram } from 'react-icons/io';
import { FiTwitter } from 'react-icons/fi';

function Contact(){
  
  const {handleChange, values, handleSubmit, errors} = ContactForm(validate);

  return (
    <div className='contact-section' style={{backgroundImage: 'url(/Images/contactus.jpg)', backgroundSize: 'cover'}}>
    <div className='contact-over'>
    <div className='section-title1'>
    <Fade top cascade>
      <h1>Contact</h1>
      <span>Leave Me A Message</span>
      </Fade>
      </div>

     <div className='contact-container'>
     <Slide left><div style={{textAlign: 'center'}}><img className='contact-image' src='/Images/contact1.png'/>
     <div className='social-media-container'>
      <div><h5>Follow Me On Social Media</h5></div>
      <div>
      <a href='https://www.youtube.com/sachinnimshan'><AiOutlineYoutube className='social-media-icon1'/></a>
                <a href='https://www.instagram.com/sachin_nimshan.06/'><IoLogoInstagram className='social-media-icon1'/></a>
                <a href='https://www.facebook.com/sachin.nimshan/'><AiOutlineFacebook className='social-media-icon1'/></a>
                <a href='https://twitter.com/SachinNimshan'><FiTwitter className='social-media-icon1'/></a>
      </div>

    </div>
     </div></Slide>

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
           placeholder="Enter Your Email"
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
      <li className="list-group-item">
        <div><AiOutlineMail className='contact-icon-email'/><h5>Email :</h5></div>
      <span>sachinnimshan@gmail.com</span></li>
      <li className="list-group-item">
        <div><FcPhoneAndroid className='contact-icon-phone'/><h5>Phone :</h5></div>
      <span>(+94)779012655</span></li>
      </ul>
    </div>

    </div>
    </div>
</div>
  )
}

export default Contact;