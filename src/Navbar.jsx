import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="Navbar">
      <h1>
        Sparky <span id="Name">Portfolio</span>
      </h1>
      <div id="Navbar-items-all" className={menuOpen ? 'open' : ''}>
        <Link to="/about" className="Navbar-items">About</Link>
        <Link to="/skill" className="Navbar-items">Skills</Link>
        <Link to="/project" className="Navbar-items">Projects</Link>
        <Link to="/education" className="Navbar-items">Education</Link> {/* Added Education link */}
        <Link to="/contact" className="Navbar-items">Contact</Link> {/* Added Contact link */}
      </div>
      <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
    </div>
  );
};

export default Navbar;