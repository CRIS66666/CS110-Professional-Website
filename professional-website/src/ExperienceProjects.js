import React, { useState, useEffect } from 'react';
import './ExperienceProjects.css';

function ExperienceProjects() {
  const [visibleProjects, setVisibleProjects] = useState(0);

  const projects = [
    {
      title: "Climate Prediction Model (Python) - March 2024",
      details: [
        "Download dataset from Cloud and used Python libraries to train model",
        "Use Python libraries to read the climate information on Jetson Nano",
        "Use self data to verify machine learning model"
      ]
    },
    {
      title: "Task Scheduler (C++) - Jan 2023",
      details: [
        "Use node to save the information of a single task",
        "Allow user to edit task information, add new task, delete task, set priority of task, create subtasks within larger tasks, display current tasks, and group tasks by different classifications"
      ]
    },
    {
      title: "Library Management System (C++) - April 2022",
      details: [
        "Develop a books management system to help the librarians to manage books in their own database",
        "Use linked-list to read and add data in the input file",
        "Use sorting algorithm in order of A to Z",
        "Design the user interface. Let user to choose the commands (Insert, Delete, List, Quit), and sorting type (Author/Title/Subject)"
      ]
    },
    {
      title: "Simulated ATM Machine (Java) - May 2021",
      details: [
        "Use Class to store the account or user information",
        "Use JButton, JPanel, JLabel, and JTextField to create the user interface",
        "Use WindowListener and ActionListener to connect the buttons to windows"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleProjects(prev => {
        if (prev < projects.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 300); // Adjust the timing as needed
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="experience-projects">
      <h2>Experience & Projects</h2>
      {projects.slice(0, visibleProjects).map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.title}</h3>
          {project.details.map((detail, idx) => (
            <p key={idx}>{detail}</p>
          ))}
        </div>
      ))}
    </section>
  );
}

export default ExperienceProjects;
