import React from 'react';
import './page.css';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {Button} from '@material-ui/core';
import {IoLogoInstagram} from 'react-icons/io';
import {FiTwitter} from 'react-icons/fi';
import {AiOutlineFacebook, AiOutlineYoutube} from 'react-icons/ai';

function Home() {
    return (
        <div className="home-screen">
          <div className='home-center-info'>
          <div><Flip top><h1>HI, I'm Sachin</h1></Flip></div>
          <div><p>Software Developer / Free Lancer</p></div>
          <div><span>High Level Experience in Web Design & Development</span></div>
          
      
          <div className='top-social-icons'>
                <a href='https://www.youtube.com/sachinnimshan'><AiOutlineYoutube className='social-media-icon'/></a>
                <a href='https://www.instagram.com/sachin_nimshan.06/'><IoLogoInstagram className='social-media-icon'/></a>
                <a href='https://www.facebook.com/sachin.nimshan/'><AiOutlineFacebook className='social-media-icon'/></a>
                <a href='https://twitter.com/SachinNimshan'><FiTwitter className='social-media-icon'/></a>
          </div>
          <div><button className='home-btn'>Download My CV</button></div>
          </div>
          <div><img src='/Images/banner.png'/></div>
        </div>
    )
}

export default Home;
