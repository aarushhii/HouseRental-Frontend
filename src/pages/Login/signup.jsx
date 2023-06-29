  import React, { useContext, useState } from 'react';
  import { Link } from 'react-router-dom';
  import { AuthContext } from '../../context/AuthContext';
  import './SignUp.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.min.js';
  
  
  export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confpassword, setconfpassword] = useState('');
    const { signup } = useContext(AuthContext);
  
    const handleSubmit = (event) => {
      event.preventDefault();

      if (password !== confpassword) {
        alert("Passwords do not match");
        return;
      }

      const userData = {
        name,
        phone,
        email,
        password,
      };
      
      signup(userData);
    };
  
    return (
      <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="signup-form">
              <h2 className="text-center">Sign up</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="confpassword"
                    value={confpassword}
                    onChange={(event) => setconfpassword(event.target.value)}
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign Up
                  </button>
                </div>
                <div className="text-center">
                  Already have an account?{' '}
                  <Link to="/signin">Sign in</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  