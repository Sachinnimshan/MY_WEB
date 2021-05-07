import React,{useState} from 'react';
import './components/page.css';
import './App.css';


import {IoIosArrowDropupCircle} from 'react-icons/io';
import Home from './components/Home';
import Services from './components/Services';
import Technology from './components/Technology';
import Contact from './components/Contact';

import {FaFacebook,FaYoutube,FaFacebookF} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {IoLogoWhatsapp} from 'react-icons/io';
import {SiTwitter} from 'react-icons/si';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import About from './components/About';
import Clients from './components/Clients';

function App() {
  const [showScroll, setShowScroll] = useState(false);

   const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop);


    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-custom py-4 navbar-shadow fixed-top">
          <div className="container-fluid">
          <a href='#'><img src='/Images/site-logo.png' className="navbar-brand ml-5 logo"/></a>
           <button className="navbar-toggler toggle-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link header-links active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-links" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-links" href="#technology" >Technology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-links" href="#clients" >Clients</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  header-links" href="#about" >About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-links" href="#contact" >Contact</a>
              </li>
            </ul>   
           </div>
          </div>

          <div className='top-hotline'><span>HOTLINE : (+94) 475788946</span></div>

          <div className='top-social-icons'>
                <FaFacebookF className='fb-icon'/>
                <SiTwitter className='twitter-icon'/>
                <IoLogoWhatsapp className='whatsapp-icon'/>
                <FaYoutube className='youtube-icon'/>
                </div> 
         </nav>

         <IoIosArrowDropupCircle className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
        <div id="home"><Home/></div>
        <div id='services'><Services/></div>
        <div id='technology'><Technology/></div>
        <div id='clients'><Clients/></div>
        <div id='about'><About/></div>
        <div id='contact' ><Contact/></div>


        <div id='footer' className='footer-container mt-5'>
            <div>
                <a href="#"><img src='/Images/footer-logo.png' className='w-75 p-3'/></a>
            </div>

            <div className='footer-column'>
                <div className='mb-2'><span className='footer-title'>ABOUT</span></div>
                <div>
                  <ul className = 'navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                      <a className="nav-link text-light header-links" href="#services">Our Services</a>
                      </li>
                      <li className='nav-item'>
                      <a className="nav-link text-light header-links" href="#technology">Our Technology</a>
                      </li>
                      <li className='nav-item'>
                      <a className="nav-link text-light header-links" href="#services">Our Team</a>
                      </li>
                  </ul>
                </div>
            </div>

            <div className='footer-column'>
                <div className='mb-2'><span className='footer-title'>OPENING HOURS</span></div>
                <div>
                  <ul className = 'navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                      <span className='text-light'>Mon - Thu: 9.30 - 21.00</span>
                      </li>
                      <li className='nav-item'>
                      <span className='text-light'>Fri: 10.00 - 17.00</span>
                      </li>
                      <li className='nav-item'>
                      <span className='text-light'>Sun: 10.00 - 16.00</span>
                      </li>
                  </ul>
                </div>
            </div>

              <div className='social-media-container'>
                <div className='mb-2'>
                    <span className='footer-title'>FIND US ON</span>
                </div>
                <div>
                <FaFacebook className='social-media-icon'/>
                <AiFillTwitterCircle className='social-media-icon'/>
                <IoLogoWhatsapp className='social-media-icon'/>
                <FaYoutube className='social-media-icon'/>
                </div>            
              </div>
          </div>

          <div className='p-3 copyright-div'>
             <span>
               Copyright © 2021 Sachin Nimshan All Right Reserved</span>
          </div>

      </div>
       
    )
}

export default App;
