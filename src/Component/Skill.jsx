import React from "react";
import "../CSS/Skill.css"; // Import Skill-specific CSS

const Skill = () => {
  return (
    <section id="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-description">
        Here are some of my technical and professional skills.
      </p>
      <div className="skills-container">
        {/* Frontend Skills */}
        <div className="skills-card">
          <h3>Frontend Frameworks</h3>
          <div className="skills-icons">
            <div className="skill-item">
              <i className="fa-brands fa-html5" style={{ color: "#E34F26" }}></i> HTML
            </div>
            <div className="skill-item">
              <i className="fa-brands fa-css3-alt" style={{ color: "#1572B6" }}></i> CSS
            </div>
            <div className="skill-item">
              <i className="fa-brands fa-js" style={{ color: "#F7DF1E" }}></i> JavaScript
            </div>
            <div className="skill-item">
              <i className="fa-brands fa-react" style={{ color: "#61DAFB" }}></i> React JS
            </div>
            <div className="skill-item">
              <i className="fa-brands fa-bootstrap" style={{ color: "#7952B3" }}></i> Bootstrap
            </div>
            <div className="skill-item">
              <i className="fa-brands fa-css3-alt" style={{ color: "#38B2AC" }}></i> Tailwind CSS
            </div>
           
            


            
          </div>
        </div>

        {/* Backend Frameworks and Database */}
        <div className="skills-card">
          <h3>Backend Frameworks & Database</h3>
          <div className="skills-icons">
            <div className="skill-item">
              <i className="fa-brands fa-java" style={{ color: "#007396" }}></i> Java
            </div>
            <div className="skill-item">
              <i className="fa-brands fa-node-js" style={{ color: "#68A063" }}></i> Node.js
            </div>
            <div className="skill-item">
              <i className="fa-solid fa-leaf" style={{ color: "#6DB33F" }}></i> Spring Framework
            </div>
            <div className="skill-item">
              <i className="fa-solid fa-database" style={{ color: "#59666C" }}></i> Hibernate
            </div>
            <div className="skill-item">
              <i className="fa-solid fa-server" style={{ color: "#000000" }}></i> Express.js
            </div>
            <div className="skill-item">
              <i className="fa-solid fa-database" style={{ color: "#4479A1" }}></i> SQL
            </div>
            <div className="skill-item">
              <i className="fa-solid fa-database" style={{ color: "#00758F" }}></i> MySQL
            </div>
            <div className="skill-item">
              <i className="fa-solid fa-leaf" style={{ color: "#47A248" }}></i> MongoDB
            </div>
          </div>
        </div>

        {/* Other Skills */}
        <div className="skills-card">
          <h3>Other Tools</h3>
          <div className="skills-icons">
            <div className="skill-item">
              <i className="fa-brands fa-git" style={{ color: "#F05032" }}></i> Git
            </div>
            <div className="skill-item">
              <i className="fa-brands fa-github" style={{ color: "#181717" }}></i> GitHub
            </div>
            <div className="skill-item">
              <i className="fa-solid fa-cloud" style={{ color: "#00C7B7" }}></i> Netlify
            </div>
            <div className="skill-item">
              <i className="fa-solid fa-code" style={{ color: "#007ACC" }}></i> VS Code
            </div>
            <div className="skill-item">
              <i className="fa-solid fa-toolbox" style={{ color: "#F5C518" }}></i> Chrome DevTools
            </div>
            <div className="skill-item">
              <i className="fa-solid fa-laptop-code" style={{ color: "#2C2255" }}></i> Eclipse
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;