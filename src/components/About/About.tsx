
import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About J. Erota</h2>
            <p className="about-description">
              J. Erota is a master storyteller who weaves tales of passion, desire, 
              and divine intervention. With a background in classical literature and 
              a deep understanding of human nature, J. creates worlds where love 
              transcends boundaries and passion knows no limits.
            </p>
            <p className="about-description">
              The "Marked by Aphrodite" series represents a culmination of years 
              spent exploring the depths of romantic storytelling, blending 
              mythological elements with contemporary sensibilities to create 
              a truly unique reading experience.
            </p>
            <div className="author-signature">
              <div className="signature-line"></div>
              <span className="signature-text">J. Erota</span>
            </div>
          </div>
          <div className="about-decoration">
            <div className="quill-pen"></div>
            <div className="ink-splash"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;