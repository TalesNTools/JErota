
import React from 'react';
import './Books.css';

const Books: React.FC = () => {
  const books = [
    {
      title: "Aphrodite's Touch",
      description: "The first encounter that changes everything. When mortal meets divine, passion ignites.",
      coverColor: "#D4AF37"
    },
    {
      title: "Eternal Flame",
      description: "The passion deepens as boundaries blur between the mortal world and divine desire.",
      coverColor: "#B8860B"
    },
    {
      title: "Sacred Bonds",
      description: "Love tested by time and fate. Can mortal and divine love survive the ultimate test?",
      coverColor: "#8B0000"
    },
    {
      title: "Divine Ascension",
      description: "The final chapter where love transcends all boundaries and becomes eternal.",
      coverColor: "#2a0000"
    }
  ];

  return (
    <section id="books" className="books">
      <div className="books-container">
        <h2 className="books-title">The Marked by Aphrodite Series</h2>
        <div className="books-grid">
          {books.map((book, index) => (
            <div key={index} className="book-card">
              <div 
                className="book-cover" 
                style={{ backgroundColor: book.coverColor }}
              >
                <div className="book-spine"></div>
                <div className="book-title">{book.title}</div>
              </div>
              <div className="book-info">
                <h3 className="book-title-text">{book.title}</h3>
                <p className="book-description">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="amazon-button-container">
          <a 
            href="https://www.amazon.com/s?k=Marked+by+Aphrodite+J+Erota" 
            target="_blank" 
            rel="noopener noreferrer"
            className="amazon-button"
          >
            <span className="amazon-icon">📚</span>
            Find on Amazon
          </a>
        </div>
      </div>
    </section>
  );
};

export default Books;