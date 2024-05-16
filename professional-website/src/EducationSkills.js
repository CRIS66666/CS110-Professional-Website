import React from 'react';
import './EducationSkills.css';

function EducationSkills() {
  return (
    <section className="education-skills">
      <h2>Education & Skills</h2>
      <div className="education">
        <h3>University of California, Riverside</h3>
        <p>Bachelor of Science, Computer Science (Expected Summer 2024)</p>
        <p>Master of Science, Computer Science (Expected Spring 2024)</p>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>Programming Languages: C++, Java, Python, JavaScript, HTML</li>
          <li>Soft Skills: Project planning, Problem solving, Team leadership, Time management, Quick learner</li>
          <li>Speaking Languages: English, Mandarin</li>
        </ul>
      </div>
    </section>
  );
}

export default EducationSkills;
