import { Button } from 'react-bootstrap';
import React from 'react';
import '../page.css';
import { BiSlideshow } from 'react-icons/bi';
import {AiOutlineGithub, AiOutlineYoutube} from 'react-icons/ai';
import {Fade, Slide} from 'react-reveal';


const projects = [
  {
    id: 1,
    name: "Amazon Clone",
    description: "MERN Stack | E-commerce website",
    image: "/projects/p1.jpg",
    website: "https://snmart.herokuapp.com/",
    youtube: "https://www.youtube.com/watch?v=aRjjdu2k-xU&list=PLWzNP2iyv9fCSm_ZRnIvOP0tx3eK6upy9",
    github: "https://github.com/Sachinnimshan/snmart-web"
  },
  {
    id: 2,
    name: "Cryptocurrency web",
    description: "MERN Stack | Cryptocurrency website",
    image: "/projects/crypto.jpg",
    website: "https://crypto.herokuapp.com/",
    youtube: false,
    github: "https://github.com/Sachinnimshan/crypt-web"
  },
  {
    id: 3,
    name: "Movie web",
    description: "MERN Stack | Movie & Tv Series website",
    image: "/projects/tvsn.jpg",
    website: "https://tvsn.herokuapp.com/",
    youtube: "https://www.youtube.com/watch?v=SJC6whT0wQM",
    github: "https://github.com/Sachinnimshan/tvsn"
  }
]


function Projects() {
    return (
    <div className='project-section'>
    <div className='section-title'>
      <Slide top><h1>Projects</h1></Slide>
      <span>What I Have Done</span>
    </div>
        
    <div className='project-container'>
      {projects && projects.map((item)=>(
        <Fade bottom>
          <div key={item.id} className='project-card'>
          <img src={item.image} className='project-thumbnail' alt={item.name}/>
          <div style={{height: "auto",gap: "0.5rem", padding: "0.25rem", display: "flex", flexDirection: "column"}}>
          <span className='project-name'>{item.name}</span>
          <span className='project-desc'>{item.description}</span>
          <div style={{display: "flex",justifyContent:"center", alignItems: 'center', gap: "10px", marginTop: "0.5rem", paddingBottom: '1rem'}}>
            <Button variant='primary' size='sm' href={item.website}><BiSlideshow/>Demo</Button>
            <Button variant='danger' size='sm' href={item.youtube}><AiOutlineYoutube/>Youtube</Button>
            <Button variant='success' size='sm'href={item.github}><AiOutlineGithub/>Github</Button>
          </div>
         </div>
        </div>
        </Fade>
      ))}
    </div>

    <div style={{display: 'flex', justifyContent: 'center', marginTop: "2rem"}}>
      <img style={{width: "50%"}} src="/Images/serve.png"/></div>
    </div>
    )
}

export default Projects;
