import React from 'react';
import './page.css';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {Button} from '@material-ui/core';
import {IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube} from 'react-icons/io';
import {SiTwitter} from 'react-icons/si';

function Home() {
    return (
        <div className="home-screen">
          <div className='home-center-info'>
          <div><Flip top><h1>HI, I'm Sachin</h1></Flip></div>
          <div><p>Software Developer / Free Lancer</p></div>
          <div><span>High Level Experience in Web Design & Development</span></div>
          <div><button className='home-btn'>Download My CV</button></div>
      
          <div className='top-social-icons'>
                <a href='https://www.youtube.com/sachinnimshan'><IoLogoYoutube className='social-media-icon'/></a>
                <a href='https://www.instagram.com/sachin_nimshan.06/'><IoLogoInstagram className='social-media-icon'/></a>
                <a href='https://www.facebook.com/sachin.nimshan/'><IoLogoFacebook className='social-media-icon'/></a>
                <a href='https://twitter.com/SachinNimshan'><IoLogoTwitter className='social-media-icon'/></a>
          </div>
          </div>
          <div><img src='/Images/banner.png'/></div>
        </div>
    )
}

export default Home;
