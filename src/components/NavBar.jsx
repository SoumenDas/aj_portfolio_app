import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-brand gradient-text">AJ</Link>
        <div className="nav-links">
          <HashLink smooth to="/#hero" className="nav-link">Home</HashLink>
          <HashLink smooth to="/#impact" className="nav-link">Impact</HashLink>
          <HashLink smooth to="/#about" className="nav-link">About</HashLink>
          <Link to="/work" className="nav-link">Work</Link>
          <HashLink smooth to="/#skills" className="nav-link">Skills</HashLink>
          <HashLink smooth to="/#career" className="nav-link">Career</HashLink>
          <HashLink smooth to="#contact" className="nav-link">Contact</HashLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
