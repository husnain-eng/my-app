import React, { useState } from 'react';
import axiosInstance from '../utils/axios-util';
import './LoginForm.css'

const LoginForm = ({ onLogin }) => {
  const [studentAgNo, setStudentAgNo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      
      await axiosInstance.post(`/auth/login`, {
        registrationNumber: studentAgNo, password
      }).then(response => {
        const { token } = response.data;

      // Store the token in localStorage
      console.log("tokken", token)
      localStorage.setItem('token', token);
      })
      console.log('Login successful');
      onLogin(); 
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-form-container">
      <h2 className="card-title text-center">Student Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="studentAgNo">Student AG No:</label>
          <input type="text" className="form-control" id="studentAgNo" placeholder="Enter AG No" required value={studentAgNo} onChange={(e) => setStudentAgNo(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;