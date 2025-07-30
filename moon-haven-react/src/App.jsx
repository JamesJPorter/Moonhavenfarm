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

// New Gallery Component
function Gallery() {
  return (
    <section className="gallery-section">
      <h2 id="gallery-header">Our Farm & Process</h2>
      <div className="gallery-row">
        <div className="gallery-image">
          <img src="/garden.jpg" alt="Fresh produce from the farm" />
        </div>
        <div className="gallery-text">
          <h3 class="gallery-heading">Sustainably Grown</h3>
          <p>Our commitment to sustainable agriculture means we grow our produce without synthetic pesticides, ensuring healthy soil and even healthier food for your family.</p>
        </div>
      </div>
      
      <div className="gallery-row row-reverse">
        <div className="gallery-image">
          <img src="/little_tujunga.jpg" alt="Farm animals in a pasture" />
        </div>
        <div className="gallery-text">
          <h3 class="gallery-heading">On an Ethical Farming Journey</h3>
          <p>We believe in compassionate farming. Our animals are raised in open pastures with plenty of space to roam, leading to high-quality, ethically produced meat and dairy.</p>
        </div>
      </div>

      <div className="gallery-row">
        <div className="gallery-image">
          <img src="/stunt_road.jpg" alt="A local farmers market stall" />
        </div>
        <div className="gallery-text">
          <h3 class="gallery-heading">Beauty and Health Go Hand in Hand</h3>
          <p>We bring the freshest produce directly to you through our community-supported agriculture (CSA) program and local farmers' market stalls. Taste the difference!</p>
        </div>
      </div>
    </section>
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
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
