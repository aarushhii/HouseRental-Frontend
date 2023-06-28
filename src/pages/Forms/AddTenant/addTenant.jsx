import React, { useState } from 'react';
import './AddTenant.css'; // Import custom CSS file for styling
import NavBar from '../../../components/NavBar-Main/Navbar';

const AddTenant = ({ propertyId, landlordId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any actions with the form data, such as submitting it to a server.

    // Clear the form fields
    setName('');
    setEmail('');
    setPassword('');
    setPhone('');
  };

  return (
    <div><NavBar/>
    <div className="form-container">
      <h2 className="form-title">Add Tenant</h2>
      <form onSubmit={handleSubmit} className="my-form">
        {/* <div className="form-group hidden">
          <label htmlFor="propertyId">Property ID:</label>
          <input
            type="text"
            className="form-control"
            id="propertyId"
            value={propertyId} // Replace with your own property ID value
            readOnly
          />
        </div>
        <div className="form-group hidden">
          <label htmlFor="landlordId">Landlord ID:</label>
          <input
            type="text"
            className="form-control"
            id="landlordId"
            value= {landlordId}// Replace with your own landlord ID value
            readOnly
          />
        </div> */}
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default AddTenant;
