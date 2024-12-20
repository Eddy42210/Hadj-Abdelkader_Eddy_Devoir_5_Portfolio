import React from 'react';
import './Services.css';
import '../App.css';
import CardComponent from '../components/Cards';


function Services() {
    return (
     <main>
        <div className='banner'>
        </div>
     
    <div className='service'>
            <h1 >Mon offre de services</h1>
    <p className='offre'>Voici les prestations sur lesquelles je peux intervenir</p>
    </div>
    <div className='cards'>
           
            <CardComponent />


    </div>


    
    
    </main>
)};

export default Services;