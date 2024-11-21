import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-img">
          <img src="logo.png" alt="LOGO" />
          <div className="logo-name">
            INTERNO<div>ARCHITECTS</div>
          </div>
        </div>

        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Pages</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
