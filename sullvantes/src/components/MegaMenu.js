// src/components/MegaMenu.js
import React from 'react';
import './MegaMenu.css';
import { Link } from 'react-router-dom';

function MegaMenu() {
  return (
    <div className="mega-menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/tools">Tools</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default MegaMenu;
