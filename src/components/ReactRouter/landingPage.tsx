import React from "react";
import "./Landingpage.css";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <nav className="text-decoration-none mx-5 d-flex justify-content-between align-items-center">
      <h2>#VANLIFE</h2>
      <span className="">
        <NavLink to="/about" className="text-decoration-none m-4">
          About
        </NavLink>
        <NavLink to="/" className="text-decoration-none">
          VAN
        </NavLink>
      </span>
    </nav>
  );
};

export default LandingPage;
