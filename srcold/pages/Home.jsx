// src/pages/Home.js
import React from 'react';
import logo from '../assets/images/logo.png'; // Import the image

const Home = () => {
  return (
    <div>
      <h1>Welcome to the React App</h1>
      <p>This is a simple React application with routing, an image, a table, a list, and more!</p>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Home;
