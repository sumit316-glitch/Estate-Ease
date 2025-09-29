// src/Components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-about">
          <h3>EstateEase</h3>
          <p>Your partner in finding the perfect property. Simplifying real estate for everyone in India.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/buy">Buy</Link></li>
            <li><Link to="/rent">Rent</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 EstateEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
