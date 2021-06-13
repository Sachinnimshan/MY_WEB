import React from 'react';
import './page.css';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {Button} from '@material-ui/core';

import {FaFacebook,FaYoutube,FaFacebookF} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {IoLogoInstagram} from 'react-icons/io';
import {SiTwitter} from 'react-icons/si';

function Home() {
    return (
        <div className="home-screen" style={{backgroundImage: "url('/Images/homeview1.jpg')", backgroundSize: 'cover'}}>
          <div className='home-center-info'>
          <div><Flip top><h1>HI, I'm Sachin</h1></Flip></div>
          <div><p>Software Developer / Free Lancer</p></div>
          <div><Button variant="outlined" color="primary" size='large'>Read More</Button></div>\
      
          <div className='top-social-icons'>
                <a href='https://www.youtube.com/sachinnimshan'><FaYoutube className='social-media-icon'/></a>
                <a href='https://www.instagram.com/sachin_nimshan.06/'><IoLogoInstagram className='social-media-icon'/></a>
                <a href='https://www.facebook.com/sachin.nimshan/'><FaFacebookF className='social-media-icon'/></a>
                <a href='https://twitter.com/SachinNimshan'><SiTwitter className='social-media-icon'/></a>
          </div>
          </div>
          <div style={{marginTop: '2rem'}}><img src='/Images/banner.png'/></div>
        </div>
    )
}

export default Home;
