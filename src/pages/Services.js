import React from 'react';
import './Services.css';
import '../App.css';


function Services() {
    return (
     <main>
        <div className='banner'>
        </div>
     
    <div className='page'>
            <h1 >Mon offre de services</h1>
    <p className='descriptif'>Voici les prestations sur lesquelles je peux intervenir</p>
    </div>
    <div className='cards'>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
            <i class="bi bi-brush"></i>
              <h2 className="card-title">UX Design</h2>
              <p className="card-text">L'UX Design est une discipline qui consiste à concevoir
                des produits (sites webs, applications mobiles, logiciels, objets connectés, etc.) en plaçant
                l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la 
                plus fluide et agréable possible.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body2">
            <i class="bi bi-code-slash"></i>
              <h2 className="card-title">Développement Web</h2>
              <p className="card-text">Le développement de sites web consiste à créer des sites internets en utilisant
                des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks 
                (Bootstrap, React, Angular, etc.).
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body3">
            <i class="bi bi-search"></i>
              <h2 className="card-title">Référencement</h2>
              <p className="card-text">Le Référencement naturel (SEO) est une technique qui consiste à optimiser un site web
                pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif
                est d'attirer un maximum de visiteurs qualifié sur le site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>  
    </div>
    </main>
)};

export default Services;