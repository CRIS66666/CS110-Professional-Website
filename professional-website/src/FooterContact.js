import React, { useState } from 'react';
import './FooterContact.css';

function FooterContact() {
  const [showEmail, setShowEmail] = useState(false);
  let timer;

  const handleMouseEnter = () => {
    timer = setTimeout(() => {
      setShowEmail(true);
    }, 2000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer);
    setShowEmail(false);
  };

  return (
    <footer className="footer-contact">
      <p>Contact Information</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/enchong-liao-11088724a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/CRIS66666" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <a href="mailto:liaoenchong9@gmail.com">Email</a>
          {showEmail && <span className="email-popup">liaoenchong9@gmail.com</span>}
        </li>
      </ul>
    </footer>
  );
}

export default FooterContact;

