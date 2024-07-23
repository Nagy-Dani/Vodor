import React from "react";
import './css/Header.css';
import logo from './images/Logo.png';
import './css/Media.css';

const Header = ({ids}) => {
    return(
        <div className="Header">
            <img src={logo} alt='Company Logo' className="logo"></img>
            <ul>
                {ids.map((id, index) => (
                    <li key={index}>
                        <a href={`#${id}`}>{id}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Header;