import React, { useState } from 'react';
import '../styles/Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="main-navigation">
      <div className="nav-container">
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#features">Features</a></li>
          <li><a href="#app-features">Safe Haven App</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms-conditions">Terms & Conditions</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;