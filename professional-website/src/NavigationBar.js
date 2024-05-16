import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/education-skills">Education & Skills</Link></li>
        <li><Link to="/experience-projects">Experience & Projects</Link></li>
        <li><Link to="/extracurriculars-interests">Extracurriculars & Interests</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
