import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ activeLink, handleLinkClick }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">JOHN DOE</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                to="/" 
                className={activeLink === '/' ? 'nav-link active' : 'nav-link'} 
                onClick={() => handleLinkClick('/')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/Services" 
                className={activeLink === '/Services' ? 'nav-link active' : 'nav-link'} 
                onClick={() => handleLinkClick('/Services')}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/Portfolio" 
                className={activeLink === '/Portfolio' ? 'nav-link active' : 'nav-link'} 
                onClick={() => handleLinkClick('/Portfolio')}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/Contact" 
                className={activeLink === '/Contact' ? 'nav-link active' : 'nav-link'} 
                onClick={() => handleLinkClick('/Contact')}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/Mentions" 
                className={activeLink === '/Mentions' ? 'nav-link active' : 'nav-link'} 
                onClick={() => handleLinkClick('/Mentions')}
              >
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
