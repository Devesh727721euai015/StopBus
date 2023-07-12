import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="title">StopBus.com</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/profile" className="nav-link">Profile</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search for bus" />
        <button className="search-button">Search</button>
      </div>
    </nav>
  );
}

export default Navbar;
