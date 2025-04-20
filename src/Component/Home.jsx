import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Skill from "./Skill"; // Import Skill component
import Project from "./Project"; // Import Project component
import "../CSS/Navbar.css";
import "../CSS/Home.css";

const Home = () => {
  const roles = ["Web Developer", "React JS", "Backend Developer"];
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setTypedText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypedText("");
          setCharIndex(0);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [charIndex, currentRoleIndex, roles]);

  return (
    <main id="background">
      <Navbar />
      <section id="main-content">
        <Outlet />
      </section>
      <section id="hero-section">
        <div className="hero-content">
          <article className="hero-text">
            <h1>
              Hey I'm <span className="highlight">Sarath Kumar V</span>
            </h1>
            <h2>
              I'm a <span className="animated-text">{typedText}</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              quasi commodi quia rerum, iste corporis expedita in excepturi
              nesciunt repellendus quisquam amet provident ad mollitia debitis
              odit voluptatem necessitatibus tempora.
            </p>
            <div className="circle-container">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/sarath-kumar-v-887b571aa/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <button className="hire-me-btn">Hire me</button>
          </article>
          <div className="hero-image-wrapper">
            <figure className="hero-image">
              <img
                src="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
                alt="Profile"
              />
            </figure>
          </div>
        </div>
      </section>
      <div className="skills-wrapper">
        <Skill />
      </div>
      <div className="projects-wrapper">
        <Project />
      </div>
    </main>
  );
};

export default Home;
