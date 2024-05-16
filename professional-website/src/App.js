import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import EducationSkills from './EducationSkills';
import ExperienceProjects from './ExperienceProjects';
import ExtracurricularsInterests from './ExtracurricularsInterests';
import FooterContact from './FooterContact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/education-skills" element={<EducationSkills />} />
          <Route path="/experience-projects" element={<ExperienceProjects />} />
          <Route path="/extracurriculars-interests" element={<ExtracurricularsInterests />} />
        </Routes>
        <FooterContact />
      </div>
    </Router>
  );
}

export default App;
