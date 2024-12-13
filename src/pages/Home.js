import React from 'react';
import './Home.css';
import Button from '../components/Button';

const Home = () => {
    return (
        <div className='presentation'>
          
                <h1 className='title'>Bonjour je suis John Doe</h1>
                <h2 className='title'>Développeur web full stack</h2>
        <Button />
        </div>
    )
};

export default Home;