import React,{useState} from 'react';
import './components/page.css';
import './App.css';


import {BiMouse} from 'react-icons/bi';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Bounce from 'react-reveal/Bounce';
import Services from './components/Services';
import About from './components/About';
import {FaBars} from 'react-icons/fa';
import {CgClose} from 'react-icons/cg';

import Slide from 'react-reveal/Slide';
import Projects from './components/Projects';

import {CgArrowUpR} from 'react-icons/cg';
import Header from './components/Header';

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
    <div className='app'>
        <section id="header"><Header/></section> 
        <div><CgArrowUpR className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/></div>
        <section id="home"><Home/></section>
        <section id="about"><About/></section>
        <section id="services"><Services/></section>
        <section id="projects"><Projects/></section>
        <section id='contact'><Contact/></section>
        <section><Footer/></section>
      </div>
    )
}

export default App;