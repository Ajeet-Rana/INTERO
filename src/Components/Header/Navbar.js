import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the menu visibility
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Closes the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-img">
          <img src="logo.png" alt="LOGO" />
          <div className="logo-name">
            INTERNO<div>ARCHITECTS</div>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <li>
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="card-container"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="recent-projects"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="recent-blogs"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Pages
            </Link>
          </li>
          <li>
            <Link to="footer" smooth={true} duration={500} onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
