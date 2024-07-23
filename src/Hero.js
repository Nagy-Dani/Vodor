import React from "react";
import './css/Hero.css';
import pp from './images/placeholder.png';
import './css/Media.css';

const Hero = () => {
    return(
        <div className="hero">
            <section className="card">
                <img className="profile" src={pp} alt="profile pictures"></img>
                <p>marton lora</p>
            </section>

            <section className="card">
                <img className="profile" src={pp} alt="profile pictures"></img>
                <p>shulcz anna</p>
            </section>

            <section className="card">
                <img className="profile" src={pp} alt="profile pictures"></img>
                <p>pajzer péter ákos</p>
            </section>

            <section className="card">
                <img className="profile" src={pp} alt="profile pictures"></img>
                <p>nagy dániel</p>
            </section>
        </div>
    );
}

export default Hero;