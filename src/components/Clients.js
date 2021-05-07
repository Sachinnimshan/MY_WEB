import React from 'react';
import './page.css';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Clients() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        <div className='p-2'>
            <div className='section-title'>
            <h1>Our Clients</h1>
            <span>We Provide Our Printing Services for Many Popular Brands in Sri Lanka</span>
            </div>

            <div className='client-logo-container'>
            <Slider {...settings}>
            <div><img src='/Images/cr1.jpg' className='img-client'/></div>
            <div><img src='/Images/cr1.jpg' className='img-client'/></div>
            <div><img src='/Images/cr1.jpg' className='img-client'/></div>
            <div><img src='/Images/cr1.jpg' className='img-client'/></div>
            <div><img src='/Images/cr1.jpg' className='img-client'/></div>
            <div><img src='/Images/cr1.jpg' className='img-client'/></div>
            
            </Slider>
            </div>

        </div>
    )
}

export default Clients;
