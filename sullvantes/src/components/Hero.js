// src/components/Hero.js
import React from 'react';
import './Hero.css';
import winstar from '../winstar.png';

function Hero() {
  return (
    <div className="hero">
      <img
        src={winstar}
        alt="sleeping cat"
        className="hero-image"
      />
      <div className="hero-content">
        <h1>Sullihan Home</h1>
      </div>
    </div>
  );
}

export default Hero;
