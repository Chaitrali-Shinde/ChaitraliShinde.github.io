import React from 'react';
import './main.css'; // Importing CSS (create this file to add styles)
import { Home } from '../home';
import { ContactUs } from '../contact';
import {About }from '../about'

function main() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <nav className="navbar">
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </nav>
      <section id="Home" className="section">
        <Home/>
      </section>
      <section id="about" className="section">
       <About/>
      </section>
      <section id="contact" className="section">
        <ContactUs/>
      </section>
    </div>
  );
}

export default main;
