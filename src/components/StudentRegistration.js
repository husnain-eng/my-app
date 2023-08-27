import React, { useState } from 'react';
import './StudentRegistration.css';

function StudentRegistration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    regNo: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform validation here before submitting the data
    console.log(formData); // Replace this with your data processing logic
  };

  return (
    <div className="popup-container">
      <div className="popup-card">
        <h2 className="card-title mb-4">Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Registration No:</label>
            <input
              type="text"
              className="form-control"
              name="regNo"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number:</label>
            <input
              type="tel"
              className="form-control"
              name="phoneNumber"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentRegistration;