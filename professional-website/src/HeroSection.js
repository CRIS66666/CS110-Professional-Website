import React from 'react';
import './HeroSection.css';

function HeroSection() {
  const profileImageUrl = `${process.env.PUBLIC_URL}/profile.JPG`;
  return (
    <section className="hero-section">
      <img src={profileImageUrl} alt="Profile" className="hero-image" />
      <h1>Enchong Liao (Cris)</h1>
      <p>Computer Science Student in UCR| Aspiring Software Developer</p>
    </section>
  );
}

export default HeroSection;