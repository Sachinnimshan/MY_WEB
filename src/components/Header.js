import React, {useState} from 'react';
import './page.css';
import {Slide} from 'react-reveal';
import {GoThreeBars} from 'react-icons/go';
import {IoMdCloseCircle} from 'react-icons/io';

function Header() {
  const [menu, setmenu] = useState(false);
  const showMenu=()=> setmenu(!menu);
  const closeMenu=()=> setmenu(false);

    return (
        <div className='header-container'>
        <div><a href='#'><img className='site-logo' src='/Images/signature.png'/></a></div>
        <div className='menu-container'>
            <ul className='menu-item-container'>
              <div className='menu-item'><a href='#'>Home</a></div>
              <div className='menu-item'><a href='#about'>About</a></div>
              <div className='menu-item'><a href='#services'>Services</a></div>
              <div className='menu-item'><a href='#projects'>Projects</a></div>
              <div><a href='#contact'><button className='btn-contact'>Contact</button></a></div>
            </ul>
          </div>
          
          <div><GoThreeBars onClick={showMenu} className='menu-icon'/></div>
        <Slide right>
          <div className={menu ? 'nav-menu active' : 'nav-menu'}>
          <Slide right>
          <div className='navbar-container'>
            <ul className='nav-item-container'>
              <li className='w-100' style={{listStyleType:'none'}}>
                <div className='close-menu-container'>
                 <div className='close-menu'><IoMdCloseCircle onClick={closeMenu} className='close-menu-icon'/></div>
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
    )
}

export default Header;
