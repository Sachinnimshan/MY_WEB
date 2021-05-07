import React, { Component} from 'react';
import './page.css';
import {VscLocation} from 'react-icons/vsc';
import {AiOutlineMail} from 'react-icons/ai';
import {FcPhoneAndroid} from 'react-icons/fc';
import Swal from 'sweetalert2';
import axios from 'axios';


 class Contact extends Component{
  state = {
    username: '',
    email: '',
    message: ''
  }

  handleInput=(e)=>{
    const {value, name} = e.target;
    this.setState({[name]:value});
  }

  onSubmitHandler = async(e)=>{
    e.preventDefault();
    const res = await axios.post("/contact",this.state);
    console.log(res);
  }

render(){
  return (
    <div className='p-2 contact-section'>
    <div className='section-title'>
      <h1>Contact</h1>
      <span>If you still have any questions, Leave us a Message</span>
      </div>

     <div className='contact-container'>
     <div ><img className='contact-image' src='/Images/contact.jpg'/></div>

     <div className='contact-form'>
       <form onSubmit={this.onSubmitHandler}>
        <div className="form-group p-3">
          <label for="exampleInputEmail1" className='label-fonts'>Name</label>
          <input 
            type="text"
            className="form-control"
            id="username" 
            aria-describedby="emailHelp"
            placeholder="Enter Your Name"
            name = "username"
            value={this.state.username}
            onChange={this.handleInput}/>
        </div>
        <div className="form-group p-3">
          <label for="exampleInputPassword1" className='label-fonts'>Email Address</label>
          <input 
           type="text"
           className="form-control" 
           id="email" 
           placeholder="Enter YourEmail"
           name="email"
           value={this.state.email}
           onChange={this.handleInput}/>
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
            value={this.state.message}
            onChange={this.handleInput}/>
        </div>
        <div className="form-group p-3">
        <button type="submit" className="submit-btn">Submit</button>
        </div>
        </form>
      </div>


      <div className="contact-card" style={{width: "18rem"}}>
      <ul className="list-group">
      <li className="list-group-item">
        <div><VscLocation className='contact-icon-address'/><h3>Address :</h3></div>
        <span>No 1/8, Hakmana Road, Walasmulla</span></li>
      <li className="list-group-item">
        <div><AiOutlineMail className='contact-icon-email'/><h3>Email :</h3></div>
      <span>chameleon@gmail.com</span></li>
      <li className="list-group-item">
        <div><FcPhoneAndroid className='contact-icon-phone'/><h3>Phone :</h3></div>
      <span>(+94)475788946</span></li>
      </ul>
    </div>
    </div>
</div>
  )
}
  

}

export default Contact;