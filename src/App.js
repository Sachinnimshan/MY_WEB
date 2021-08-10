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
import {IoMdCloseCircle} from 'react-icons/io';
import Slide from 'react-reveal/Slide';
import Projects from './components/Projects';
import {GoThreeBars} from 'react-icons/go';

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [menu, setmenu] = useState(false);

  const showMenu=()=> setmenu(!menu);
  const closeMenu=()=> setmenu(false);

  

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
      <Slide top><div><a href='#'><img className='site-logo' src='/Images/signature.png'/></a></div></Slide>
      <div className='menu-container'>
          <Slide top>
          <ul className='menu-item-container'>
            <div className='menu-item'><a href='#'>Home</a></div>
            <div className='menu-item'><a href='#about'>About</a></div>
            <div className='menu-item'><a href='#services'>Services</a></div>
            <div className='menu-item'><a href='#projects'>Projects</a></div>
            <div className='menu-item'><a href='#contact'>Contact</a></div>
          </ul></Slide>
        </div>
        
        <div><GoThreeBars onClick={showMenu} className='menu-icon'/></div>
      <Slide right>
        <div className={menu ? 'nav-menu active' : 'nav-menu'}>
        <Slide right>
        <div className='navbar-container'>
          <ul className='nav-item-container'>
            <li className='container menu-header'>
            <div className='close-menu-container'>
              <div className='menu-title'>Hello' You are Welcome</div>
              <div><IoMdCloseCircle onClick={closeMenu} className='close-menu'/></div>
            </div>
            </li>
            <li className='nav-item' onClick={closeMenu}><a href='#'>Home</a></li>
            <li className='nav-item' onClick={closeMenu}><a href='#about'>About</a></li>
            <li className='nav-item' onClick={closeMenu}><a href='#services'>Services</a></li>
            <li className='nav-item' onClick={closeMenu}><a href='#projects'>Projects</a></li>
            <li className='nav-item' onClick={closeMenu}><a href='#contact'>Contact</a></li>
          </ul>
        </div>
      </Slide>
        </div>
      </Slide>
      </div>
        <div><img className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}} src='/Images/top.png'/></div>
        <section id="home"><Home/></section>
        <section id="about"><About/></section>
        <section id="services"><Services/></section>
        <div className='page-break'></div>
        <section id="projects"><Projects/></section>
        <section id='contact'><Contact/></section>
        <section><Footer/></section>
      </div>
    )
}

export default App;