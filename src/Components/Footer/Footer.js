import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">Interno</h2>
          <p className="footer-description">
            We are the leading architect and interior design firm in the world.
          </p>
          <div className="footer-socials">
            <a href="facebook.com" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="x.com" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="linkedIn.com" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Explore Section */}
        <div className="footer-explore">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Recent Blog</a>
            </li>
            <li>
              <a href="/">Pricing Plan</a>
            </li>
            <li>
              <a href="/">Our Projects</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>53, East Birchwood Ave. Brooklyn, New York 11201, USA.</p>
          <p>
            <a href="mailto:contact@interno.com">contact@interno.com</a>
          </p>
          <p>(123) 456 - 7890</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>Copyright © Interno | Designed by Ajeet Rana</p>
      </div>
    </footer>
  );
};

export default Footer;
