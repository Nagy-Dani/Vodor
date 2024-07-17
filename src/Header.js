import React from "react";
import './css/Header.css';
import Logo from './images/Logo.png';

function Header(){
    return(
        <div className="header-div">
            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>
            <nav className="main-nav">
                <ul>
                    <li><a>About us</a></li>
                    <li><a>What we offer</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;