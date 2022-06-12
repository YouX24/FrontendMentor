import React from 'react';
import Logo from '../images/logo.svg';

function Header() {
    return (
        <div className='base-header'>
            <img src={Logo} alt="brand logo"/>
        </div>
    )
}

export default Header;