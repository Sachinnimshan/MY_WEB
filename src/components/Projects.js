import { Button } from 'react-bootstrap';
import React from 'react';
import './page.css';
import {Pulse, Fade, Slide} from 'react-reveal';


function Projects() {
    return (
    <div className='project-section'>
    <div className='section-title'>
      <Fade bottom cascade>
      <h1>Projects</h1>
      <span>What I Have Done</span>
      </Fade>
    </div>
        
    <div className='project-container'>
    
    <Fade bottom><div className="card project-card">
    <img className="card-img-top" src="/Images/p1.jpg" alt="Card image cap"/>
    <div className="card-body">
    <h5 className="pro-title">Amazon Clone</h5>
    <p className="pro-text">
      MERN Stack | E-Commerce Website
    </p>
    </div>
    <div className="card-body">
    <a href="https://snmart.herokuapp.com/" target="_blank" className="card-link">
    <Button variant="outline-primary">View</Button>
    </a>
    <a href="https://youtube.com/playlist?list=PLWzNP2iyv9fCSm_ZRnIvOP0tx3eK6upy9" target="_blank" className="card-link">
    <Button variant="outline-danger">Youtube</Button>
    </a>
    </div>
    </div></Fade>
  
    </div>
    </div>
    )
}

export default Projects;
