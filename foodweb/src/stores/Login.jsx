import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';  // Import the CSS file for styling
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send a POST request to your backend
      const response = await axios.post('http://localhost:8000/login', {
        name,
        password,
      });
      navigate("/home");

      console.log('Login Successful:', response.data);
      // Handle success, such as storing a token in local storage or redirecting
    } catch (error) {
      console.error('Login Failed:', error);
      // Handle error, such as displaying an error message
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="register-link">
        Don't have an account? <Link to="/register">Create an account</Link>
      </p>
    </div>
  );
};

export default Login;
