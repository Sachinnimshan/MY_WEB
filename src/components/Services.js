import React from 'react';
import Fade from 'react-reveal/Fade';
import {MdDesktopMac} from 'react-icons/md';
import {AiOutlineMobile} from 'react-icons/ai';

function Services() {
    return (
        <div className='services-container' style={{backgroundImage: 'url(/Images/service.jpg)', backgroundSize: 'cover'}}>
            <div className='services-over'>
            <div className='services-section'>
              <Fade top cascade><h1>Services</h1>
              <span>What I Do</span></Fade>
            </div>
            <div className='services-card-container'>
                <Fade bottom>
                <div className='service-card'>
                    <div className='service-icons'><MdDesktopMac/></div>
                    <h4>WEB DEVELOPMENT</h4>
                    <div className='breaker'></div>
                </div>
                </Fade>
                <Fade bottom>
                <div className='service-card'>
                    <div className='service-icons'><MdDesktopMac/></div>
                    <h4>DESKTOP APP DEVELOPMENT</h4>
                    <div className='breaker'></div>
                </div>
                </Fade>
                <Fade bottom>
                <div className='service-card'>
                    <div className='service-icons'><AiOutlineMobile/></div>
                    <h4>MOBILE APP DEVELOPMENT</h4>
                    <div className='breaker'></div>
                </div>
                </Fade>
                <Fade bottom>
                <div className='service-card'>
                    <div className='service-icons'><MdDesktopMac/></div>
                    <h4>UI / UX DESIGN</h4>
                    <div className='breaker'></div>
                </div>
                </Fade>
            </div>
        </div>

            
        </div>
    )
}

export default Services;
