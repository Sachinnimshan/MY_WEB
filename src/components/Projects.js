import React from 'react';
import ReactPlayer from "react-player";
import Fade from 'react-reveal/Fade';
import './page.css';


function Projects() {
    return (
    <div className='project-section'>
    <div className='section-title'>
      <Fade top cascade>
      <h1>Projects</h1>
      <span>What I Have Done</span>
      </Fade>
    </div>
        
    <div className='project-container'>
        <div><ReactPlayer className='project-card' url="https://www.youtube.com/watch?v=aRjjdu2k-xU&pp=sAQA"/></div>
        <div><ReactPlayer className='project-card' url='https://www.youtube.com/watch?v=nbdPGthQjQk&pp=sAQA'/></div>
    </div>
    </div>
    )
}

export default Projects;
