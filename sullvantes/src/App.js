import React from 'react';
import { BrowserRouter as _Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import MegaMenu from './components/MegaMenu';
import Footer from './components/Footer';
import Tools from '../src/pages/Tools';

import './App.css';


function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <p>This is the Portfolio page content.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <h3>Work</h3>
      <li>Web Dev Consulting</li> 
      <li>Childrearing</li>
      <li>Nature Volunteering</li>
      <li>FreedomFighting</li>
      <h3>Interests</h3>
        <li>Liverpool Football Club</li>
        <li>Contemplative Christianity</li>
        <li>Prison Abolition</li>

    </div>


  );
}

function Services() {
  return (
    <div>
      <h2>Our Services</h2>
      <p>Explore our services here.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
        <li>Github: <a href='https://github.com/sullvantes/'>sullvantes</a></li>
        <li>Github for Work: <a href='https://github.com/msullivanAPA/'>msullivanAPA</a></li>
        <li>Leetcode: LINK</li>
        <li>Instagram: LINK</li>
        <li>Github: LINK</li>
        <br/>

        <a href='https://friend.chess.com/XYt4g'>Become my Friend on Chess.com</a>
    </div>
  );
}

function App() {
  
  return (
    
    <div className="App">
      <MegaMenu />
      <br/>
      <Routes>
          <Route path="/" element={<Home />} exact component={Home} />
          <Route path="/portfolio" element={<Portfolio />} exact component={Portfolio} />
          <Route path="/about" element={<About />} component={About} />
          <Route path="/services" element={<Services />} component={Services} />
          <Route path="/tools" element={<Tools />} exact component={Tools} />
          <Route path="/contact" element={<Contact />} exact component={Contact} />
        </Routes>
        
      <Footer />

        </div>
      );
}

export default App;
