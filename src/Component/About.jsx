import React, { useEffect, useState } from "react";
import Skill from "./Skill";
import Project from "./Project";
import Education from "./Education";
import Contact from "./Contact";
import "../CSS/About.css";
import ProfileImage from "../assets/12.png"; // Updated the image path

const About = () => {
  const roles = ["Web Developer", "React JS Developer", "Backend Developer"];
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
    <main id="about-section" className="about-container">
      <header className="about-content">
        <h2>Hi, I am</h2>
        <h1>
          <span className="highlight-me">Sarath Kumar V</span>
        </h1>
        <h3>
          I am a <span className="animated-text">{typedText}</span>
        </h3>
        <p className="about-content">
          A skilled full stack developer with strong frontend and backend foundations. Proficient in React.js, HTML, CSS, Tailwind CSS, Java Spring, and Node.js/Express. Passionate about modern web technologies and creating responsive, user-friendly interfaces. Collaborative, creative, and committed to delivering high-quality, innovative solutions.
        </p>
        <button className="about-button">
          <a
            href="https://drive.google.com/file/d/1qbUQbubOOCnF_7EvAk8LfkU_PS8SLcE_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Resume
          </a>
        </button>
      </header>
      <section className="about-image">
        <img src={ProfileImage} alt="Profile" />
      </section>
      <section>
        <Skill />
        <Project />
        <Education />
        <Contact />
      </section>
    </main>
  );
};

export default About;