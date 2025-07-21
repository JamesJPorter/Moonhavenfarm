import React from 'react';
import { useState } from 'react'
import './App.css';

// Header Component
function Header() {
  return (
    <header className="header">
      <div className="logo">Moon Haven Farms</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Hero Component (Main Section)
function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>Moon Haven Farms</h1>
      </div>
    </main>
  );
}

// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Moon Haven Farms. All Rights Reserved.</p>
    </footer>
  );
}

// Main App Component that assembles the page
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
