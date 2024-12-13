import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

function Header() {
  
  return (
        <div className='header'>
          
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <p className='logo'>JOHN DOE</p>
                <ul className='list'>
                  <li><Link to="/" className='elementList'>Home</Link></li>
                  <li><Link to="/Services" className='elementList'>Services</Link></li>
                  <li><Link to="/Portfolio" className='elementList'>Portfolio</Link></li>
                  <li><Link to="/Contact" className='elementList'>Contact</Link></li>
                  <li><Link to="/Mentions" className='elementList'>Mentions légales</Link></li>
                </ul>

            </nav>

        </div>

  ) 
};

export default Header;