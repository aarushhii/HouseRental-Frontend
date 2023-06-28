import React, { useState } from 'react';
import '../AddTenant/AddTenant.css';
import NavBar from '../../../components/NavBar-Main/Navbar';

const AddProperty = ({ landlordId }) => {
  const [name, setName] = useState('');
  const [email, setAdress] = useState('');
  const [password, setRent] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any actions with the form data, such as submitting it to a server.

    // Clear the form fields
    setName('');
    setAdress('');
    setRent('');

  };

  return (
    <div><NavBar/>
    <div className="form-container">
      <h2 className="form-title">Add Property</h2>
      <form onSubmit={handleSubmit} className="my-form">
        
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="adress">Adress:</label>
          <input
            type="text"
            className="form-control"
            id="adress"
            value={email}
            onChange={(e) => setAdress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rent">Password:</label>
          <input
            type="number"
            className="form-control"
            id="rent"
            value={password}
            onChange={(e) => setRent(e.target.value)}
            required
          />
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default AddProperty;
