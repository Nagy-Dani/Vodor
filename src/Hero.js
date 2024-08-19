import React from "react";
import './css/Hero.css';

import dc from './images/DaniCica.jpg';
import ac from './images/AnnaCica.jpg';
import lc from './images/LoraCica.jpg';
import pc from './images/PetiCica.jpg';


import './css/Media.css';

const Hero = () => {
    return(
        <div className="hero">
            <section className="card">
                <img className="profile" src={lc} alt="profile pictures"></img>
                <p>marton lora</p>
            </section>

            <section className="card">
                <img className="profile" src={ac} alt="profile pictures"></img>
                <p>shulcz anna</p>
            </section>

            <section className="card">
                <img className="profile" src={pc} alt="profile pictures"></img>
                <p>pajzer péter ákos</p>
            </section>

            <section className="card">
                <img className="profile" src={dc} alt="profile pictures"></img>
                <p>nagy dániel</p>
            </section>
        </div>
    );
}

export default Hero;