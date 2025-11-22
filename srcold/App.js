// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import BookForm from './BookForm';
import ViewAllBooks from './ViewAllBooks';
import NameForm from './NameForm';
import ViewAllNames from './ViewAllNames';
const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);}


     const[names, setNames] = useState ([]);
    const addName = (name) => {
      setNames([...names, name]);
  };


    


  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={
        <div>
          <h1>Welcome to Book Manager!</h1>
          <h2>please, play away</h2>
        </div>
      } />
        <Route path="/add-book" element={<BookForm addBook={addBook} />} />
        <Route path="/view-books" element={<ViewAllBooks books={books} />} />
        <Route path='/add-name' element={<addName addName={addName}/>} />
        <Route path='/view-names' element={<ViewAllNames names={names}/>} /> 
        <Route path="/" element={<ViewAllBooks books={books} />} />
      </Routes>
    </Router>
  );
};

export default App;
