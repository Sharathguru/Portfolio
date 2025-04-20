import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; // Ensure this matches the installed package
import "../CSS/Contact.css";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_divg0kq", // Replace with your EmailJS Service ID
        "template_yw54oj3", // Replace with your EmailJS Template ID
        formRef.current,
        "sgAwKFF644XCsmWrK" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send the message. Please try again.");
          console.log(error.text);
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section id="contact-section">
      <header>
        <h2 className="contact-title">Contact</h2>
        <p className="contact-description">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </header>
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="user_email" placeholder="Your Email" required />
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="user_name" placeholder="Your Name" required />
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Subject" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Message" required></textarea>
        <button type="submit" className="contact-submit-btn">Send Message</button>
      </form>
      <footer className="copyright-section">
        <i className="fa-solid fa-copyright"></i>
        <p>2025 Sarath Kumar V. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;