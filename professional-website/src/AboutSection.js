import React from 'react';
import './AboutSection.css';

function AboutSection() {
  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p>I was born and raised in China and Taiwan. I moved to United States in 2015. Currently a student at UCR. I will continue my education to be an graduate student at UCR.</p>
      <p>I am interested in becoming a Supplemental Instruction Leader or Teaching Assistant or any relative positions at UCR. My coding and communication skills enable me to help others understand the concepts of materials, helping them achieve better grades and learn more things.</p>
      <p>I am also interested in becoming a Software Engineering after graduation.</p>
      <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Download Resume</a>
    </section>
  );
}

export default AboutSection;
