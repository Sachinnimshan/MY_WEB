import React from 'react';
import '../page.css';
import {AiOutlineClockCircle} from 'react-icons/ai';
import ContactForm from '../shared/ContactForm';
import validate from '../util/ValidateInfo';
import { FiSend} from 'react-icons/fi';
import {IoEarth} from 'react-icons/io5';
import {HiOutlineMail} from 'react-icons/hi';
import {Button} from 'react-bootstrap';
import {Slide} from 'react-reveal';

function Contact(){
  
  const {handleChange, values, handleSubmit, errors} = ContactForm(validate);

  return (
    <div className='contact-section'>
    <div className='section-title'>
      <Slide top><h1>Contact</h1></Slide>
      <span>Leave Me A Message</span>
      </div>

     <div className='contact-container'>

          <Slide bottom>
          <div className='contact-details'>
           <IoEarth className='contact-icons'/>
           <h4>Website</h4>
           <span><a style={{textDecoration: "none", color: "#444444"}} href='https://sachinnimshan.herokuapp.com'>Visit My Web</a></span>
           </div>
          </Slide>

          {/* <div className='contact-details'>
           <IoCallOutline className='contact-icons'/>
           <h4>Call Me</h4>
           <span>+94 77 9012 655</span>
          </div> */}
         

        <Slide top>
        <div className='contact-details'>
           <HiOutlineMail className='contact-icons'/>
           <h4>Email</h4>
           <span>sachinnimshan@gmail.com</span>
         </div>
        </Slide>

         <Slide bottom>
         <div className='contact-details'>
           <AiOutlineClockCircle className='contact-icons'/>
           <h4>Available Hours</h4>
           <span>Monday - Friday</span>
           <span>9:00AM - 05:00PM</span>
         </div>
         </Slide>

        <Slide top>
        <div className='contact-form'>
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
        <Button type="submit" variant='primary' size='lg'><FiSend/> Send Message</Button>
        </div>
        </form>
      </div>
        </Slide>


       </div>

</div>
  )
}

export default Contact;