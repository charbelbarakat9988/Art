// BookForm.js
import React, { useState } from 'react';

const BookForm = ({ addBook }) => {
  const [formData, setFormData] = useState({ title: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: formData.title,
      price: formData.price,
    };
    addBook(newBook);
    alert(`Book added: \nTitle: ${formData.title} \nPrice: ${formData.price}`);
    setFormData({ title: '', price: '' });
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookForm;
