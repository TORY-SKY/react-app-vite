import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Barber Shop
        </Link>

        <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/" className="navbar-link" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link
            to="/services"
            className="navbar-link"
            onClick={toggleMobileMenu}
          >
            Services
          </Link>
          <Link
            to="/barbers"
            className="navbar-link"
            onClick={toggleMobileMenu}
          >
            Barbers
          </Link>
          <Link
            to="/contact"
            className="navbar-link"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
