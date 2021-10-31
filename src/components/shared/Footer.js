import React from 'react';
import '../page.css';
import {socialIcons} from '../util/social';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-left'>
            <div>© Copyright | All Rights Reserved</div>
            <div>Designend by <a style={{textDecoration: 'none'}} href='#'><strong>Sachin Nimshan</strong></a></div>
            </div>

            <div className='footer-right'>
                {socialIcons && socialIcons.map((item)=>(
                    <a key={item.name} href={item.url}>
                        <div className='footer-icons'>{item.icon}</div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Footer;
