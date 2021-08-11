import React from 'react';
import Fade from 'react-reveal/Fade';
import './page.css';
import {DiJavascript1, DiReact} from 'react-icons/di';
import {FaJava, FaPhp, FaReact, FaVuejs, FaNodeJs, FaCss3Alt} from 'react-icons/fa';
import {AiFillHtml5} from 'react-icons/ai';
import Bounce from 'react-reveal/Bounce';
import {SiCsharp} from 'react-icons/si';

function About() {
    return (
        <div className='about-container'>
         <div className='section-title'>
           <Fade bottom cascade>
            <h1>About Me</h1>
             <span>What I Do</span>
             </Fade>
            </div>
          <div className='skill-container container'>
          <Fade bottom><div className='container about-description'><p>I have more than 5+ years' experience building softwares in different programming languages since 2016.
          Below is a quick overview of my main technical skill sets and technologies I use.</p></div></Fade>
          <Bounce right cascade>
            <div className='container pt-5 pb-5 d-flex justify-content-center gap-5 py-2 px-2 flex-wrap'>
              <div><FaReact className='pro-icons'/></div>
              <div><FaVuejs className='pro-icons'/></div>
              <div><FaNodeJs className='pro-icons'/></div>
              <div><DiJavascript1 className='pro-icons'/></div>
              <div><FaPhp className='pro-icons'/></div>
              <div><AiFillHtml5 className='pro-icons'/></div>
              <div><FaCss3Alt className='pro-icons'/></div>
              <div><FaJava className='pro-icons'/></div>
              <div><SiCsharp className='pro-icons'/></div>
          </div></Bounce>
          </div>
        </div>
    )
}

export default About;
