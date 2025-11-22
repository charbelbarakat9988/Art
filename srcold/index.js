import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: add your global styles here
import App from './App'; // Import the main App component

// Render the App component into the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This will target the div with id 'root' in public/index.html
);
