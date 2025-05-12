import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="hero-content">
        <h1 className="hero-title">Discover the Best Local Vendors</h1>
        <p className="hero-subtitle">
          Find and review restaurants near you to enjoy quality food with peace of mind.
        </p>
        <a href="/vendors" className="cta-button">
          Browse Vendors
        </a>
      </div>
    </section>
  );
};

export default Home;
