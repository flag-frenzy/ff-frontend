import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container landing-page">
      <h1>Welcome to FlagFrenzy!</h1>
      <p className="intro-text">Test your cybersecurity skills with fun and challenging puzzles.</p>
      <p className="cta-text">Are you ready to dive in and earn your place on the leaderboard?</p>
      <div className="action-container">
        <Link to="/login">
          <button className="get-started-btn">Get Started</button>
        </Link>
        <p className="register-text">
          Don't have an account? <Link to="/register" className="register-link">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
