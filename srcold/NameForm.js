//NameForm
import React, { useState } from 'react';

const NameForm = ({ addName }) => {
  const [formData, setFormData] = useState({ name: '' , id: ''}); 
    const handleChange = (e) => {  
 const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  } ;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = {
      name: formData.name,
      id: formData.id,
    };
    addName(newName);
    alert(`Name added: \nName: ${formData.name} \nID: ${formData.id}`);
    setFormData({ name: '', id: '' });
  };
    return (

    <div>
      <h1>Add a New Name</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name: </label>
            <input
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
        </div>
        <div>   
            <label>ID: </label>
            <input
                type="text" 
                name="id"
                value={formData.id} 
                onChange={handleChange}
                required
            />
        </div>
        <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default NameForm;    