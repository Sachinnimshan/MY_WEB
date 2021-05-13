import React from 'react';
import './page.css';
import Fade from 'react-reveal/Fade';

function Services() {
    return (
        <div className='p-2'>
            <div className='section-title'>
            <h1>Our Services</h1>
            <span>Photocopying is widely used in the business, education, and government sectors</span>
            </div>
          
        <div className='d-flex flex-wrap justify-content-center services-card'>
        <Fade right>
        <div className="card" style={{width: "24rem"}}>
        <img src="/Images/icon-01.png" style={{width: "6rem"}} alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Color & b/w Prints</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">More Info</a>
        </div>
        </div>
        </Fade>

        <Fade right>
        <div className="card" style={{width: "24rem"}}>
        <img src="/Images/icon-02.png" style={{width: "6rem"}} alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Wide Format Printing</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">More Info</a>
        </div>
        </div>
        </Fade>

        <Fade right>
        <div className="card card-bg" style={{width: "24rem"}}>
        <img src="/Images/icon-03.png" style={{width: "6rem"}} alt="..."/>
        <div className="card-body">
        <h5 className="card-title">3D Printing</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">More Info</a>
        </div>
        </div>
        </Fade>

        <Fade left>
        <div className="card" style={{width: "24rem"}}>
        <img src="/Images/icon-04.png" style={{width: "6rem"}} alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Photo Copies</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">More Info</a>
        </div>
        </div>
        </Fade>

        <Fade left>
        <div className="card" style={{width: "24rem"}}>
        <img src="/Images/icon-05.png" style={{width: "6rem"}} alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Posters/Flyers</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">More Info</a>
        </div>
        </div>
        </Fade>

        <Fade left>
        <div className="card " style={{width: "24rem"}}>
        <img src="/Images/icon-06.png" style={{width: "6rem"}} alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Booklets</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">More Info</a>
        </div>
        </div>
        </Fade>
      </div>
            
        </div>
    )
}

export default Services;
