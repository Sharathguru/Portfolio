import React from "react";
import "../CSS/Education.css"; // Import Education-specific CSS

const Education = () => {
  return (
    <section id="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-card">
        <h3>SJB Institute of Technology</h3>
        <p>Bachelor of Engineering - BE, Computer Science Engineering</p>
        <p>2021 - 2024</p>
        <p>Grade: 6.46 CGPA</p>
        <p>
        I have strong problem-solving skills and a passion for technology.  
    My college experience gave me a solid foundation in frontend development,  
    including HTML, CSS, JavaScript, UI frameworks like  Bootstrap and Tailwind CSS. I enjoy creating user-friendly, efficient,  
    and visually appealing web applications while continuously learning  
    and improving my skills in modern web technologies.  
        </p>
      </div>
      <div className="education-card">
        <h3>Vasavi Jnana Peetha Polytechnic</h3>
        <p>Diploma ,Computer Science </p>
        <p>2018 - 2021</p>
        <p>Grade: 62%</p>
        <p>I got interested in frontend development during my diploma, where I focused on HTML and CSS. This foundational experience sparked my passion for creating small web applications and websites during my diploma. It gave me hands-on exposure to web development and motivated me to explore and expand my skills in modern frontend technologies.</p>
      </div>
      <div className="education-card">
    <h3>Little Flower High School</h3>
    <p>SSLC (Secondary School Leaving Certificate)</p>
    <p>2017 - 2018</p>
    <p>Grade: 65%</p>
    <p>Completed my secondary education with a focus on basic subjects and foundational learning.</p>
</div>

    </section>
  );
};

export default Education;
