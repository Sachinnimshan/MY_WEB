import React from 'react';
import '../page.css';
import {Bounce,Slide, Fade} from 'react-reveal';

function About() {

  const languages = [
    {
      id: 1,
      image: "/tech/js.png",
      text: "Javascript"
    },
    {
      id: 2,
      image: "/tech/react.png",
      text: "React"
    },
    {
      id: 3,
      image: "/tech/redux.png",
      text: "Redux"
    },
    {
      id: 4,
      image: "/tech/node.png",
      text: "Node JS"
    },
    {
      id: 5,
      image: "/tech/express.png",
      text: "Express"
    },
    {
      id: 6,
      image: "/tech/mongo.png",
      text: "Mongo DB"
    },
    {
      id: 7,
      image: "/tech/next.png",
      text: "Next JS"
    },
    {
      id: 8,
      image: "/tech/reactnative.png",
      text: "React Native"
    }
  ]

    return (
        <div className='about-container'>
         <div className='section-title'>
            <Slide top><h1>About Me</h1></Slide>
            <span>My Skills</span>
            </div>
          <div className='skill-container container'>
          <Fade bottom>
          <div><p className='about-description'>I have more than 5+ years' experience building softwares in different programming languages since 2016.
          Below is a quick overview of my main technical skill sets and technologies I use.</p>
          </div>
          </Fade>
          <Bounce bottom cascade>
            <div className='tech-container'>
              {languages && languages.map((item)=>(
                <div key={item.id} className='skill-card'>
                  <img className='skill-img' src={item.image}/>
                </div>
              ))}
            </div>
          </Bounce>
          </div>
        </div>
    )
}

export default About;
