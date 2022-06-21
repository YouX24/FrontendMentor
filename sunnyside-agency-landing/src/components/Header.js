import React from 'react';
import Logo from '../images/logo.svg';
import Burger from '../images/icon-hamburger.svg';
import Arrow from '../images/icon-arrow-down.svg';

function Header() {
    return (
        <header>
            <nav className="navbar">
                <img src={Logo} alt="logo"/>
                <img src={Burger} alt="burger menu"/>
            </nav>
            <div className="creatives">
                <h1>WE ARE CREATIVES</h1>
                <img src={Arrow} alt="arrow"/>
            </div>
        </header>
    )
}

export default Header;