import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Custom Hook: useIntersectionObserver
// This hook tells us if a component is visible on the screen or not.
function useIntersectionObserver(options) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // If the element is visible, update the state.
      // We also unobserve it so the animation only happens once.
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
}


// Header Component (No changes needed here)
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
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

// Hero Component (No changes needed here)
function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main className={`hero ${isScrolled ? 'hero-scrolled' : ''}`}>
      <div className="hero-content">
        <h1>Coming Soon!</h1>
      </div>
    </main>
  );
}

// Gallery Component with Fade-in effect
function Gallery() {
  // Set up observer options
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  // Create a ref and observer for each gallery row
  const [ref1, isVisible1] = useIntersectionObserver(observerOptions);
  const [ref2, isVisible2] = useIntersectionObserver(observerOptions);
  const [ref3, isVisible3] = useIntersectionObserver(observerOptions);

  return (
    <section className="gallery-section">
      <h2 id="gallery-header">Our Farm & Process</h2>
      
      {/* Assign the ref and conditionally add the 'visible' class */}
      <div ref={ref1} className={`gallery-row ${isVisible1 ? 'visible' : ''}`}>
        <div className="gallery-image">
          <img src="/garden.jpg" alt="Fresh produce from the farm" />
        </div>
        <div className="gallery-text">
          <h3 className="gallery-heading">Sustainably Grown</h3>
          <p>Our commitment to sustainable agriculture means we grow our produce without synthetic pesticides, ensuring healthy soil and even healthier food for your family.</p>
        </div>
      </div>
      
      <div ref={ref2} className={`gallery-row row-reverse ${isVisible2 ? 'visible' : ''}`}>
        <div className="gallery-image">
          <img src="/little_tujunga.jpg" alt="Farm animals in a pasture" />
        </div>
        <div className="gallery-text">
          <h3 className="gallery-heading">On an Ethical Farming Journey</h3>
          <p>We believe in compassionate farming. Our animals are raised in open pastures with plenty of space to roam, leading to high-quality, ethically produced meat and dairy.</p>
        </div>
      </div>

      <div ref={ref3} className={`gallery-row ${isVisible3 ? 'visible' : ''}`}>
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


// Footer Component (No changes needed)
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Moon Haven Farms. All Rights Reserved.</p>
    </footer>
  );
}

// Main App Component (No changes needed)
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
