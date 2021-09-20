import React from 'react';
import './page.css';
import {Slide, Fade} from 'react-reveal';
import {MdDesktopMac} from 'react-icons/md';
import {AiOutlineMobile} from 'react-icons/ai';

function Services() {
    return (
        <div className='services-container'>
            <div className='services-over'>
            <div className='section-title'>
                <h1>My Services</h1>
              <span>What I Do</span>
              
            </div>
            
            <div className='service-card-main-container'>
            <Slide bottom>
            <div className='services-card-container'>
           <div style={{borderBottom: '5px solid #00C7FF'}} className='service-card card1'>
                 <div className='service-icons'><img src='/Images/s1.png'/></div>
                     <h4>web development</h4>
                 </div>
                 
                 <div style={{borderBottom: '5px solid #F58B09'}} className='service-card card2'>
                     <div className='service-icons'><img src='/Images/s2.png'/></div>
                     <h4>desktop app development</h4>
                 </div>
                 
                 {/* <Slide bottom><div className='service-card'>
                     <div className='service-icons'><img src='/Images/s3.png'/></div>
                     <h4>mobile app development</h4>
                 </div></Slide> */}
                 
                 <div  style={{borderBottom: '5px solid #08D94E'}}  className='service-card card3'>
                     <div className='service-icons'><img src='/Images/s4.png'/></div>
                     <h4>ui / ux design</h4>
                 </div>
            
             </div></Slide>
            </div>
        </div>

            
        </div>
    )
}

export default Services;
