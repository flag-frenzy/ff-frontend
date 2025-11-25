import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container about-page">
        <h1>About FlagFrenzy</h1>
        <p>Developed for Vanier College's 420-321-VA Course by Spyro Athanasoulis, </p>
        <p>Click <Link to="/">here</Link> to find out more about the project's development stages.</p>
    </div>
  );
};

export default About;
