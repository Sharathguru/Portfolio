import React, { useState, useEffect } from "react";
import "../CSS/Project.css"; // Import Project-specific CSS
import expenseImg from "../assets/expense.png";
import e_commerce from '../assets/e-commerce.png';
import API from '../assets/Api.png';
import FORM from '../assets/Form.png';
import REST from '../assets/Rest.png';


const Project = () => {
  const allProjects = [
    {
      title: "E-commerce Webpage",
      category: "Website",
      year: "2023",
      description:
        "An E-commerce webpage built using React. It features a responsive design, product pages, and a shopping cart.",
      technologies: ["React"],
      image:e_commerce,
      codeLink: "#",
      liveLink: "#",
    },
    {
      title: "Expenses Tracker",
      category: "Web-Apps",
      year: "2023",
      description:
        "A React-based application to track expenses with dynamic charts and filtering options.",
      technologies: ["React"],
      image: expenseImg,
      codeLink: "#",
      liveLink: "#",
    },
    {
      title: "Search Images",
      category: "Web-Apps",
      year: "2023",
      description:
        "A React application that uses an API to search and display images dynamically.",
      technologies: ["React", "API"],
      image: API, // Replace with the actual image path
    },
    {
      title: "Form Management",
      category: "Web-Apps",
      year: "2023",
      description:
        "A full-stack application using React for the frontend and Spring Framework with MySQL for the backend.",
      technologies: ["React", "Spring Framework", "MySQL"],
      image:FORM, // Replace with the actual image path
    },
    {
      title: "Restaurant Webpage",
      category: "Landing Page",
      year: "2023",
      description:
        "A restaurant webpage built using HTML, CSS, JavaScript, and Node.js. It features a responsive design and dynamic menu.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      image: REST, // Replace with the actual image path
    },
  
  ];

  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [clickedProject, setClickedProject] = useState(null);

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === "All") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter((project) => project.category === category));
    }
  };

  // const openModal = (project) => {
  //   setSelectedProject(project);
  //   document.body.classList.add("modal-open"); // Disable scrolling
  // };

  // const closeModal = () => {
  //   setSelectedProject(null);
  //   document.body.classList.remove("modal-open"); // Enable scrolling
  // };

  const handleProjectClick = (index) => {
    setClickedProject(index);
    setTimeout(() => setClickedProject(null), 1000); // Reset after animation
  };

  return (
    <section id="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">
        I have worked on a wide range of projects. From web apps to landing pages, here are some of my projects.
      </p>
      <div className="filter-buttons">
        {["All", "Website", "Web-Apps", "Landing Page"].map((category) => (
          <button
            key={category}
            className={`filter-button ${activeFilter === category ? "active" : ""}`}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div
            className={`project-card ${clickedProject === index ? "move-project" : ""}`}
            key={index}
            onClick={() => {
              handleProjectClick(index);
              openModal(project);
            }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-details">
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p className="project-year">{project.year}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <h3>{selectedProject.title}</h3>
            <p className="project-year">{selectedProject.year}</p>
            <p className="project-description">{selectedProject.description}</p>
            <div className="modal-buttons">
              <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer" className="view-code">
                View Code
              </a>
              <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="view-live">
                View Live App
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
