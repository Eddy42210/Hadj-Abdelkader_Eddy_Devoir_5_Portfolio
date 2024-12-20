import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'


const Footer = () => {
  return (
    <footer>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
             <div className='profil'>
              <h3 className='title1'>John Doe</h3>
              <a href="https://maps.app.goo.gl/gYQNEaFqr3tX5YR97">40 rue Laure Diebold</a>
              <a href="https://maps.app.goo.gl/gYQNEaFqr3tX5YR97">69009 Lyon, France</a>
              <a href="tel:+1020304050">10 20 30 40 50</a>
              <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
              <div className='reseaux'>
                <a href="https://github.com" target="_blank" className="icon" rel="nofollow noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://twitter.com" target="_blank" className="icon" rel="nofollow noreferrer">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" className="icon" rel="nofollow noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className='liens'>
              <h3 className='title2'>Liens Utiles</h3>
              <ul className='listes'>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Portfolio">Portfolio</Link></li>
                <li><Link to="/Contact">Me contacter</Link></li>
                <li><Link to="/Mentions">Mentions légales</Link></li>
              </ul>
          </div>
          <div className='realisations'>
              <h3 className='title2'>Mes Dernières réalisations</h3>
              <ul className='listes'>
                <li><Link to="/Portfolio">Fresh Food</Link></li>
                <li><Link to="/Portfolio">Restaurant Akira</Link></li>
                <li><Link to="/Portfolio">Espace bien-être</Link></li>
                <li><Link to="/Portfolio">SEO</Link></li>
                <li><Link to="/Portfolio">Création d'une API</Link></li>
                <li><Link to="/Portfolio">Maquette d'un site</Link></li>
              </ul>
          </div>
      </nav>
    </footer>
  );
};

export default Footer;