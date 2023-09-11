import React from 'react';
import './Footer.css';
import winstar from '../winstar.png';

function Footer() {
    return (
        <div>
        <img src={winstar} className="App-logo" alt="logo" />
        <p>This is our cat Winnie. He's not spinning, we are since he died in August 2023. </p>
        </div>
        );
    }

export default Footer;