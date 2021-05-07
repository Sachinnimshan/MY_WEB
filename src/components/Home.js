import React from 'react';
import './page.css';

function Home() {
    return (
        <div className="home-screen" style={{backgroundImage: "url('/Images/bghome.png')", backgroundSize: 'cover'}}>
        <div className='home-center-info'>
          <div><h1>Copy & Printing</h1></div>
          <p>We specialize in commercial offset printing and digital printing services to cover all your needs.</p>
          <div><button>Read More</button></div>
          </div>
        </div>
    )
}

export default Home;
