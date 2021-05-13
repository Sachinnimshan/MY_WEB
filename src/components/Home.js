import React from 'react';
import './page.css';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';


function Home() {
    return (
        <div className="home-screen" style={{backgroundImage: "url('/Images/bghome.png')", backgroundSize: 'cover'}}>
        <div className='home-center-info'>
          <div><Flip left><h1>Copy & Printing</h1></Flip></div>
          <Fade left>
          <p>We specialize in commercial offset printing and digital printing services to cover all your needs.</p>
          </Fade>
          <div><button>Read More</button></div>
          </div>
        </div>
    )
}

export default Home;
