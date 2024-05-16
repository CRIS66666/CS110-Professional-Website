import React from 'react';
import './ExperienceProjects.css';

function ExperienceProjects() {
  return (
    <section className="experience-projects">
      <h2>Experience & Projects</h2>
      <div className="project">
        <h3>Climate Prediction Model (Python) - March 2024</h3>
        <p>• Download dataset from Cloud and used Python libraries to train model</p>
        <p>• Use Python libraries to read the climate information on Jetson Nano</p>
        <p>• Use self data to verify machine learning model</p>
      </div>
      <div className="project">
        <h3>Task Scheduler (C++) - Jan 2023</h3>
        <p>• Use node to save the information of a single task</p>
        <p>• Allow user to edit task information, add new task, delete task, set priority of task, create subtasks within larger tasks, display current tasks, and group tasks by different classifications</p>
      </div>
      <div className="project">
        <h3>Library Management System(C++) - April 2022</h3>
        <p>• Develop a books management system to help the librarians to manage books in their own database</p>
        <p>• Use <b>linked-list</b> to read and add data in the input file</p>
        <p>• Use <b>sorting algorithm</b> in order of A to Z</p>
        <p>• Design the user interface. Let user to choose the commands(Insert,Delete,List,Quit), and sorting type (Author/Title/Subject)</p>
      </div>
      <div className="project">
        <h3>Simulated ATM Machine (Java) - May 2021</h3>
        <p>• Use Class to store the account or user information</p>
        <p>• Use <b>JButton, JPanel, JLabel, and JTextField</b> to create the user interface</p>
        <p>• Use <b>WindowListener and ActionListener</b> to connect the buttons to windows.</p>
      </div>
    </section>
  );
}

export default ExperienceProjects;
