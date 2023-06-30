import React, { useState } from 'react';
import '../AddTenant/AddTenant.css'; // Import custom CSS file for styling
import NavBar from '../../../components/NavBar-Main/Navbar';
import { useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const RaiseComplaint = ({ landlordId,tenantId }) => {
  const [data, setData] = useState({
    title:"",
    message:"",
    to:"",
    from:"",
    active:""
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
      if (location.state && location.state.to && location.state.from) {
          const to = location.state.to;
          const from = location.state.from;
          setData({
              to: to,
              from: from,
          });
      }
  }, [location.state]);
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(
        data.title + ", " + data.message + ", " + data.from + ", " + data.to
    );
    const response = await fetch(
          `https://houserentalapi-production.up.railway.app/api/notice/add`,
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  title: data.title,
                  content: data.message,
                  to: data.to,
                  from: data.from,
                  active: true,
              }),
          }
    );
    const dataJson = await response.json();
    console.log(dataJson);
    setData({ title: "", content: "", to: "", from: "", active: "" });
    navigate("/complaints");
  };

  return (
      <div>
          <NavBar />
          <div className="form-container">
              <h2 className="form-title">Raise a Complaint</h2>
              <form onSubmit={handleSubmit} className="my-form">
                  <div className="form-group">
                      <label htmlFor="title">Title:</label>
                      <input
                          type="text"
                          className="form-control"
                          id="title"
                          name="title"
                          onChange={handleChange}
                          required
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="message">Message:</label>
                      <input
                          type="message"
                          className="form-control"
                          id="message"
                          name="message"
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

export default RaiseComplaint;
