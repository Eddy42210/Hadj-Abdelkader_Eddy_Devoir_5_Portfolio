import React from 'react';
import heroBg from '../images/hero-bg.jpg';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div>
            
        <img src={heroBg} alt="Développeur sur machine"></img>

                <h1>Bonjour je suis John Doe</h1>
                <h2>Développeur web full stack</h2>

            </div>
        </div>
    )
};

export default Home;