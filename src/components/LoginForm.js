import React, { useState } from 'react';
import './LoginForm.css'

const LoginForm = ({ onLogin }) => {
  const [studentAgNo, setStudentAgNo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic
    onLogin(); // Call the onLogin prop to update login state
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