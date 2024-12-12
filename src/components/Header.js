import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand style={{ paddingLeft: '30px', textTransform: 'uppercase' }}>
        John Doe
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink to="/" className={`nav-link ${activeLink === '/' ? 'active-link' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/services" className={`nav-link ${activeLink === '/services' ? 'active-link' : ''}`}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={`nav-link ${activeLink === '/portfolio' ? 'active-link' : ''}`}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={`nav-link ${activeLink === '/contact' ? 'active-link' : ''}`}>
            Contact
          </NavLink>
          <NavLink to="/mentions" className={`nav-link ${activeLink === '/mentions' ? 'active-link' : ''}`}>
            Mentions légales
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;