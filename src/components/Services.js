import React from 'react';
import {Slide, Fade} from 'react-reveal';
import {MdDesktopMac} from 'react-icons/md';
import {AiOutlineMobile} from 'react-icons/ai';

function Services() {
    return (
        <div className='services-container'>
            <div className='services-over'>
            <div className='section-title'>
              <Fade top cascade><h1>My Services</h1>
              <span>What I Do</span></Fade>
            </div>
            
            <div className='service-card-main-container'>
        
            <div className='services-card-container'>
                
                <div className='service-card'>
                <Slide right> <div className='service-icons'><img src='/Images/web.png'/></div>
                     <h4>WEB DEVELOPMENT</h4>
                     <div className='breaker'></div></Slide>
                 </div>
                 
                 <div className='service-card'>
                     <Slide right><div className='service-icons'><img src='/Images/desktop.png'/></div>
                     <h4>DESKTOP APP DEVELOPMENT</h4>
                     <div className='breaker'></div></Slide>
                 </div>
                 
                 <div className='service-card'>
                     <Slide right><div className='service-icons'><img src='/Images/phone.png'/></div>
                     <h4>MOBILE APP DEVELOPMENT</h4>
                     <div className='breaker'></div></Slide>
                 </div>
                 
                 <div className='service-card'>
                     <Slide right><div className='service-icons'><img src='/Images/ux.png'/></div>
                     <h4>UI / UX DESIGN</h4>
                     <div className='breaker'></div></Slide>
                 </div>
             </div>
            </div>
        </div>

            
        </div>
    )
}

export default Services;
