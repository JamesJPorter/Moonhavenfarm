import React, { useState, useEffect } from 'react';
import './App.css';

// Header Component with scroll effect
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set state based on scroll position (true if scrolled more than 50px)
      setIsScrolled(window.scrollY > 50);
    };

    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when the component unmounts for cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty array ensures this effect runs only once

  return (
    // Add 'header-scrolled' class when isScrolled is true
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="logo">Moon Haven Farms</div>
      
      <nav className={isNavOpen ? 'nav-open' : ''}>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

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

// Hero Component with scroll effect
function Hero() {
  const [bgImage, setBgImage] = useState('/background.png'); // Default image

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgImage('/Sunset-1.jpg'); // Change to sunset image on scroll
      } else {
        setBgImage('/background.png'); // Revert to default when at the top
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // The background image is now set dynamically via inline styles
    <main 
      className="hero" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})` 
      }}
    >
      <div className="hero-content">
        <h1>Coming Soon!</h1>
      </div>
    </main>
  );
}

// Gallery Component
function Gallery() {
  return (
    <section className="gallery-section">
      <h2 id="gallery-header">Our Farm & Process</h2>
      <div className="gallery-row">
        <div className="gallery-image">
          <img src="/garden.jpg" alt="Fresh produce from the farm" />
        </div>
        <div className="gallery-text">
          <h3 className="gallery-heading">Sustainably Grown</h3>
          <p>Our commitment to sustainable agriculture means we grow our produce without synthetic pesticides, ensuring healthy soil and even healthier food for your family.</p>
        </div>
      </div>
      
      <div className="gallery-row row-reverse">
        <div className="gallery-image">
          <img src="/little_tujunga.jpg" alt="Farm animals in a pasture" />
        </div>
        <div className="gallery-text">
          <h3 className="gallery-heading">On an Ethical Farming Journey</h3>
          <p>We believe in compassionate farming. Our animals are raised in open pastures with plenty of space to roam, leading to high-quality, ethically produced meat and dairy.</p>
        </div>
      </div>

      <div className="gallery-row">
        <div className="gallery-image">
          <img src="/stunt_road.jpg" alt="A local farmers market stall" />
        </div>
        <div className="gallery-text">
          <h3 className="gallery-heading">Beauty and Health Go Hand in Hand</h3>
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
