import React,{useState} from 'react';
import './components/page.css';
import './App.css';


import {IoIosArrowDropupCircle} from 'react-icons/io';
import Home from './components/Home';
import Services from './components/Services';
import Technology from './components/Technology';
import Contact from './components/Contact';



import {FaBars} from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import About from './components/About';
import Clients from './components/Clients';

import {Avatar} from '@material-ui/core';

import Bounce from 'react-reveal/Bounce';

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
      <div className='header-container'>
      <Bounce top>
        <div><a href='#'><img src='/Images/signature.png'/></a></div>
        <div className='navbar-container'>
          <div><ul className='nav-item-container'>
            <li className='nav-item'><a href='#'>Home</a></li>
            <li className='nav-item'><a href='#about'>About</a></li>
            <li className='nav-item'><a href='#services'>Services</a></li>
            <li className='nav-item'><a href='#portfolio'>Portfolio</a></li>
            <li className='nav-item'><a href='#projects'>Projects</a></li>
            <li className='nav-item'><a href='#contact'>Contact</a></li>
          </ul></div>
        </div>
        </Bounce>
      </div>
      
         <IoIosArrowDropupCircle className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
        <section id="home"><Home/></section>
        <section id='about'><About/></section>
        <section id='services'><Services/></section>
        <section id='technology'><Technology/></section>
        <section id='clients'><Clients/></section>
        <section id='contact' ><Contact/></section>


       

      </div>
       
    )
}

export default App;