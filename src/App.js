import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mentions from './pages/Mentions';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="App">
      <Router>
        <Header activeLink={activeLink} handleLinkClick={handleLinkClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mentions" element={<Mentions />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
        <Footer handleLinkClick={handleLinkClick} />
      </Router>
    </div>
  );
}

export default App;