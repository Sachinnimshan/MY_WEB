import React from 'react';
import './page.css';
import Fade from 'react-reveal/Fade';

function About() {
    return (
        <div className='p-2'>
            <div className='section-title'>
            <h1>About us</h1>
            <span>We have provided quality printing services for people all over the Sri Lanka since 1995.</span>
            </div>

            
            <div className='about-us-container' style={{backgroundImage: "url('/Images/dp1.jpg')", backgroundSize: 'cover'}}>

          <div className='about-info'>
          <div><h1>Pioneers in Digital Printing Industry</h1></div>
          <p>We specialize in commercial offset printing and digital printing services to cover all your needs.</p>
          <p>From brochures to banners, we are your one-stop print shop.</p>
          <div className='about-cards-container'>
              <div className='card about-cards'>
              <img src="Images/dpcard.jpg" class="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Latest Technology</h5>
              </div>
              </div>

              <div className='card about-cards'>
              <img src="/Images/26.jpg" class="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Experience over 2 Decades</h5>
              </div>
              </div>

              <div className='card about-cards'>
              <img src="/Images/laser.png" class="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Talented Hands on Work</h5>
              </div>
              </div>

              <div className='card about-cards'>
              <img src="/Images/quality.jpg" class="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Best Quality Solutions</h5>
              </div>
              </div>

          </div>
          </div>



            </div>
            
                

            




        </div>
    )
}

export default About;
