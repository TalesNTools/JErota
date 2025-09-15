
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">J. Erota</h1>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#books" className="nav-link">Books</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;