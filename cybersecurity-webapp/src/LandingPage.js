// components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Cybersecurity Hub</h1>
      <p>Protect your digital assets with our cutting-edge solutions.</p>
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default LandingPage;