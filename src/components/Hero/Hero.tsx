
import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">Marked by Aphrodite</h2>
          <p className="hero-subtitle">A sensual journey through passion and desire</p>
          <p className="hero-description">
            Enter a world where love knows no bounds and passion ignites the soul. 
            J. Erota's acclaimed series explores the depths of human connection 
            through the lens of divine intervention.
          </p>
          <button className="cta-button">
            Explore the Series
          </button>
        </div>
        <div className="hero-decoration">
          <div className="gold-heart"></div>
          <div className="red-veil"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;