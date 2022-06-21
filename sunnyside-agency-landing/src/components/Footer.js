import React from 'react';
import Logo from '../images/logo.svg';
import Facebook from '../images/icon-facebook.svg';
import Instagram from '../images/icon-instagram.svg';
import Twitter from '../images/icon-twitter.svg';
import Pinterest from '../images/icon-pinterest.svg';

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="logo"/>
            <div className='footer-pages'>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">About</a>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Services</a>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Projects</a>
            </div>
            <div className='footer-socials'>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="facebook"/></a>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="instagram"/></a>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="twitter"/></a>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><img src={Pinterest} alt="pinterest"/></a>
            </div>
        </footer>
    )
}

export default Footer;