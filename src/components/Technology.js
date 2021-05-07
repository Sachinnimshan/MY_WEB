import React from 'react';
import './page.css';

function Technology() {
    return (
        <div className='p-2'>
            <div className='section-title'>
            <h1>Our Technology</h1>
            <span>Here, We are using latest Technology, Equiments and Machineries for our printings</span>
            </div>
        
        <div className='d-flex flex-wrap justify-content-center technology-card'>
        <div className="card mb-1">
              <img className="card-img-top" src="/Images/dgprint.jpg"/>
               <div className="card-body">
              <h5 className="card-title">Digital Printing </h5>
             <p className="card-text">We have latest machineries in digital printing from small to large scale printing</p>
             
            </div>
        </div>

        <div className="card mb-1">
              <img className="card-img-top" src="/Images/offset.jpg"/>
               <div className="card-body">
              <h5 className="card-title">Off Set Printing</h5>
             <p className="card-text">We have latest machineries in digital printing from small to large scale printing</p>
             
            </div>
        </div>

        <div className="card mb-1">
              <img className="card-img-top" src="/Images/3d.jpg"/>
               <div className="card-body">
              <h5 className="card-title">3D Printing</h5>
             <p className="card-text">We have latest machineries in digital printing from small to large scale printing</p>
             
            </div>
        </div>

        <div className="card mb-1">
              <img className="card-img-top" src="/Images/printer.jpg"/>
               <div className="card-body">
              <h5 className="card-title">Digital Laser Printeing</h5>
             <p className="card-text">We have latest machineries in digital printing from small to large scale printing</p>
            </div>
        </div>

      </div>
            
     </div>
    )
}

export default Technology;
