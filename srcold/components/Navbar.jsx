// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  // Import Navbar styles

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/table">Table</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="/add-name">Add Name</Link>
        </li>
        <li>
          <Link to="/view-names">View Names</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
