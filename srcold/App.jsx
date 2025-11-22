// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import TablePage from './pages/TablePage';
import ListPage from './pages/ListPage';
import NameForm from './NameForm';
import ViewAllNames from './ViewAllNames';
import './styles/App.css';  // Import global styles

const App = () => {
  const [names, setNames] = useState([]);

  const addName = (name) => {
    setNames([...names, name]);
  };

  return (
    <Router>
      <div>
        {/* Navbar Component */}
        <Navbar />

        <div className="container">
          <hr />
          
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/add-name" element={<NameForm addName={addName} />} />
            <Route path="/view-names" element={<ViewAllNames names={names} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
