// src/Components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const activeLinkStyle = { color: 'var(--accent-color)', fontWeight: '600' };

  return (
    <header className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <FaHome className="navbar-icon" /> EstateEase
        </Link>
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <NavLink to="/buy" className="nav-link" onClick={closeMenu} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Buy</NavLink>
          <NavLink to="/rent" className="nav-link" onClick={closeMenu} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Rent</NavLink>
          <NavLink to="/sell" className="nav-link" onClick={closeMenu} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Sell</NavLink>
          <NavLink to="/about-us" className="nav-link" onClick={closeMenu} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>About Us</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Contact</NavLink>
        </nav>
        <div className="nav-auth">
            <Link to="/login" className="btn-login">Login</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};
export default Navbar;
