import React from "react";
import './css/Main.css';
import Header from './Header';
import Hero from './Hero';
import './css/Media.css';

const Main = () => {
    const ids = [
        'team',
        'goal',
    ];

    return(
        <div className="Main">
            
            <section className="section1">
                <Header ids={ids}/>
                <h1 className="welcome">Welcome</h1>
                <div class="custom-shape-divider-bottom-1721408716">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                     </svg>
                </div>
            </section>
            
            <section id="team" className="section2">
                <h2 className="h2Dividers">our team</h2>
                <Hero/>
                <p className="pBase p1">
                    We are all first year students at Elte faculty of informatics. This project is our participation in the Innovation lab that is hosted by our university. 
                </p>
            </section>
            
            <section id="goal" className="section3">
                <h2 className="h2Dividers">our Goal</h2>
                <p className="pBase">
                    We aim to revolutionize the process of booking. Our goal is to make it personalized, convenient and easy. 
                </p>
                <p className="pBase">
                    To support our development please fill this form out. 
                    <br/><br/>
                    <a href="" className="form" target="_blank">Google Form</a>
                </p>
            </section>
        </div>
    );
}

export default Main;