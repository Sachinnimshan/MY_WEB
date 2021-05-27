import React from 'react';
import './page.css';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {Button} from '@material-ui/core';

import {FaFacebook,FaYoutube,FaFacebookF} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {IoLogoWhatsapp} from 'react-icons/io';
import {SiTwitter} from 'react-icons/si';

function Home() {
    return (
      <Fade bottom>
        <div className="home-screen" style={{backgroundImage: "url('/Images/homeview1.jpg')", backgroundSize: 'cover'}}>
          <div className='home-center-info'>
          <Zoom bottom cascade>
          <div><Flip top><h1>HI, I'm Sachin</h1></Flip></div>
          <div><p>Software Developer / Free Lancer</p></div>
          <div><Button variant="outlined" color="primary" size='large'>Read More</Button></div>\
          </Zoom>
          <div className='top-social-icons'>
                <FaFacebookF className='social-media-icon'/>
                <SiTwitter className='social-media-icon'/>
                <IoLogoWhatsapp className='social-media-icon'/>
                <FaYoutube className='social-media-icon'/>
          </div>
          </div>
          <div><img src='/Images/banner.png'/></div>
        </div>
        </Fade>
    )
}

export default Home;
