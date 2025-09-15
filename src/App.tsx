
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Books from './components/Books/Books';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Books />
      <About />
      <Footer />
    </div>
  );
}

export default App;