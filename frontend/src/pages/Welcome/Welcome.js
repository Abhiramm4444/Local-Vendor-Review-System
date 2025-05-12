import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="slicing-image">
        <img
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80"
          alt="Delicious Food"
        />
        <div className="slice slice1"></div>
        <div className="slice slice2"></div>
        <div className="slice slice3"></div>
      </div>
      <h1>Welcome to Local Vendor Review</h1>
      <p>Discover and review the best restaurants and cafes near you in Hyderabad and Bangalore!</p>
      <a href="/vendors" className="welcome-button">Explore Vendors</a>
    </div>
  );
};

export default Welcome;
