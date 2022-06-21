import React from 'react';
import Logo from '../images/logo.svg';
import Burger from '../images/icon-hamburger.svg';
import Arrow from '../images/icon-arrow-down.svg';

function Header() {

    function burgerMenu() {
        const menu = document.querySelector(".menu");
        console.log(menu.style.display)
        if (menu.style.display !== 'flex') {
            menu.style.display = "flex"
        } else {
            menu.style.display = "none"
        }
    }

    return (
        <header>
            <nav className="navbar">
                <img src={Logo} alt="logo"/>
                <div className="desktop-directory">
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Projects</a>
                    <a className="active-desktop" href="#">Contact</a>
                </div>
                <img className="burger-menu" src={Burger} alt="burger menu" onClick={burgerMenu}/>
            </nav>
            <div className="menu">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
                <a className="active-page" href="#">Contact</a>
            </div>
            <div className="creatives">
                <h1>WE ARE CREATIVES</h1>
                <img src={Arrow} alt="arrow"/>
            </div>
        </header>
    )
}

export default Header;