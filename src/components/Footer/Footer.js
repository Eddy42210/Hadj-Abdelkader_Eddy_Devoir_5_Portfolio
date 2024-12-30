import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ handleLinkClick }) => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-start">
            <h3 className='title1'>John Doe</h3>
            <address>
              <a href="https://maps.app.goo.gl/gYQNEaFqr3tX5YR97" className="d-block text-white">40 rue Laure Diebold</a>
              <a href="https://maps.app.goo.gl/gYQNEaFqr3tX5YR97" className="d-block text-white">69009 Lyon, France</a>
              <a href="tel:+1020304050" className="d-block text-white">10 20 30 40 50</a>
              <a href="mailto:john.doe@gmail.com" className="d-block text-white">john.doe@gmail.com</a>
            </address>
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
          <div className="col-md-4 text-start">
            <h3 className='title2'>Liens Utiles</h3>
            <ul className='list-unstyled'>
              <li><Link to="/" onClick={() => handleLinkClick('/')} className="text-white">Accueil</Link></li>
              <li><Link to="/Services" onClick={() => handleLinkClick('/Services')} className="text-white">Services</Link></li>
              <li><Link to="/Portfolio" onClick={() => handleLinkClick('/Portfolio')} className="text-white">Portfolio</Link></li>
              <li><Link to="/Contact" onClick={() => handleLinkClick('/Contact')} className="text-white">Me contacter</Link></li>
              <li><Link to="/Mentions" onClick={() => handleLinkClick('/Mentions')} className="text-white">Mentions légales</Link></li>
            </ul>
          </div>
          <div className="col-md-4 text-start">
            <h3 className='title2'>Mes Dernières réalisations</h3>
            <ul className='list-unstyled'>
              <li><Link to="/Portfolio" onClick={() => handleLinkClick('/Portfolio')} className="text-white">Fresh Food</Link></li>
              <li><Link to="/Portfolio" onClick={() => handleLinkClick('/Portfolio')} className="text-white">Restaurant Akira</Link></li>
              <li><Link to="/Portfolio" onClick={() => handleLinkClick('/Portfolio')} className="text-white">Espace bien-être</Link></li>
              <li><Link to="/Portfolio" onClick={() => handleLinkClick('/Portfolio')} className="text-white">SEO</Link></li>
              <li><Link to="/Portfolio" onClick={() => handleLinkClick('/Portfolio')} className="text-white">Création d'une API</Link></li>
              <li><Link to="/Portfolio" onClick={() => handleLinkClick('/Portfolio')} className="text-white">Maquette d'un site</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
