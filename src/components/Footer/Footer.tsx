
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">J. Erota</h3>
            <p className="footer-description">
              Crafting stories of passion, desire, and divine love.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link">Newsletter</a>
              <a href="#" className="social-link">Goodreads</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Legal</h4>
            <div className="legal-links">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms of Service</a>
              <a href="#" className="legal-link">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} J. Erota. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;