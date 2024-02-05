// LandingPage.js
import React from 'react';
import '../../styles/LandingPage.css';

const WelcomePage = () => (
  <div className="welcome-container">
    <h3 className="welcome-title">
      WELLCOME TO BOOK A WEB DEVELOPER APP
    </h3>
    <div className="button-container">
      <a
        href="http://127.0.0.1:3000/signup"
        className="signup-button"
      >
        Sign Up
      </a>
      <a
        href="http://127.0.0.1:3000/login"
        className="signin-button"
      >
        Login
      </a>
    </div>
  </div>
);

export default WelcomePage;

