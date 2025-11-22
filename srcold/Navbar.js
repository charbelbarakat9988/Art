// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-book">Add Book</Link></li>
        <li><Link to="/view-books">View All Books</Link></li>
        <li><Link to="/add-name">Add Name</Link></li>
        <li><Link to="/view-names">View All Names</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
