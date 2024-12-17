import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
    const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <p className='logo'>JOHN DOE</p>
            <ul className='list'>
                <li>
                    <Link to="/" className={"elementList " + (activeLink === '/' ? 'active' : '')} onClick={() => handleLinkClick('/')}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/Services" className={"elementList " + (activeLink === '/Services' ? 'active' : '')} onClick={() => handleLinkClick('/Services')}>
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="/Portfolio" className={"elementList " + (activeLink === '/Portfolio' ? 'active' : '')} onClick={() => handleLinkClick('/Portfolio')}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/Contact" className={"elementList " + (activeLink === '/Contact' ? 'active' : '')} onClick={() => handleLinkClick('/Contact')}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/Mentions" className={"elementList " + (activeLink === '/Mentions' ? 'active' : '')} onClick={() => handleLinkClick('/Mentions')}>
                        Mentions légales
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;