import React, { useState } from 'react';
import './App.css';

// Header Component with state for the mobile menu
function Header() {
  // State to track if the mobile navigation is open or closed
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Moon Haven Farms</div>
      
      {/* Navigation for desktop and mobile */}
      {/* The 'open' class is added based on the state */}
      <nav className={isNavOpen ? 'nav-open' : ''}>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Hamburger Menu Button - only visible on mobile */}
      {/* It toggles the isNavOpen state on click */}
      <button 
        className="hamburger" 
        onClick={() => setIsNavOpen(!isNavOpen)}
        aria-label="Toggle navigation"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </header>
  );
}

// Hero Component (Main Section)
function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>Coming Soon!</h1>
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
