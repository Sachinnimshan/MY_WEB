import React from 'react';
import './page.css';
import {Slide, Fade} from 'react-reveal';
import {MdDesktopMac} from 'react-icons/md';
import {AiOutlineMobile} from 'react-icons/ai';

const services = [
    {
        id: 1,
        title: "Web Development",
        image: "/Images/s1.png",
        description: "Developing Dynamic web applications for various purposes using React JS, Express, Node JS, Next JS, MERN Stack"
    },
    {
        id: 2,
        title: "Mobile App Development",
        image: "/Images/s3.png",
        description: "Development of cross platform mobile applications for IOS and Android using React Native"
    },
    // {
    //     id: 3,
    //     title: "Ui / Ux Design",
    //     image: "/Images/s4.png"
    // }
]

function Services() {
    return (
        <div className='services-container'>
            <div className='section-title'>
               <h1>My Services</h1>
              <span>What I Do</span>
            </div>
            
            <div className='service-card-main-container'>
            {services && services.map((item)=>(
                <div key={item.id} className='service-card'>
                    <img className='service-img' src={item.image}/>
                    <span className='service-title'>{item.title}</span>
                    <div className='service-caption'>
                    <p className='service-desc'>{item.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Services;
