import React, { useState } from 'react';
import '../AddTenant/AddTenant.css'; // Import custom CSS file for styling
import NavBar from '../../../components/NavBar-Main/Navbar';

const RaiseComplaint = ({ landlordId,tenantId }) => {
  const [name, settitle] = useState('');
  const [email, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any actions with the form data, such as submitting it to a server.

    // Clear the form fields
    settitle('');
    setMessage('');

  };

  return (
    <div><NavBar/>
    <div className="form-container">
      <h2 className="form-title">Raise a Complaint</h2>
      <form onSubmit={handleSubmit} className="my-form">
        
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => settitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <input
            type="message"
            className="form-control"
            id="message"
            value={email}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default RaiseComplaint;
