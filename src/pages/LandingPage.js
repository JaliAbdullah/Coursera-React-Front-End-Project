import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="overlay">
        <h1 className="company-name">GrowSpace Co.</h1>
        <p className="company-description">Discover the beauty of nature inside your home. We offer a wide variety of houseplants delivered to your door.</p>
        <Link to="/products" className="get-started-btn">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
