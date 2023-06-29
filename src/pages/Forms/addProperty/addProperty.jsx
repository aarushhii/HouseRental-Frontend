import React, { useState } from 'react';
import '../AddTenant/AddTenant.css';
import NavBar from '../../../components/NavBar-Main/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AddProperty = () => {
  const [data, setData] = useState({
      name: "",
      type: "",
      city: "",
      address: "",
      rent: "",
  });

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(data.name+data.type+data.city+data.address+data.rent+user.id);
    const response = await fetch(
        `https://houserentalapi-production.up.railway.app/api/property/add`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.name,
                type: data.type,
                city: data.city,
                address: data.address,
                rent: data.rent,
                ownerId: user.id,
            }),
        }
    );
        const dataJson = await response.json();
        console.log(dataJson);
        setData({ name: "", type: "", city: "", address: "", rent: "" });
        navigate("/property");   
  };

  return (
      <div>
          <NavBar />
          <div className="form-container">
              <h2 className="form-title">Add Property</h2>
              <form onSubmit={handleSubmit} className="my-form">
                  <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          onChange={handleChange}
                          required
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="type">Type:</label>
                      <input
                          type="text"
                          className="form-control"
                          id="type"
                          name="type"
                          onChange={handleChange}
                          required
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="city">City:</label>
                      <input
                          type="text"
                          className="form-control"
                          id="city"
                          name="city"
                          onChange={handleChange}
                          required
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="address">Address:</label>
                      <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          onChange={handleChange}
                          required
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="rent">Rent:</label>
                      <input
                          type="number"
                          className="form-control"
                          id="rent"
                          name="rent"
                          onChange={handleChange}
                          required
                      />
                  </div>

                  <button type="submit" className="btn btn-primary">
                      Submit
                  </button>
              </form>
          </div>
      </div>
  );
};

export default AddProperty;
