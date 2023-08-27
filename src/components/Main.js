import React, { useState } from 'react';
import StudentRegistration from './StudentRegistration'; // Adjust the import path
import './Main.css';

export default function Main({ handleLoginClick, isLoggedIn, handleLogout }) {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleSignUpClick = () => {
    setShowRegistration(true);
  };

  return (
    <section id="home">
      <div className="container">
        <img src="./public/bg1.png" alt="" />
        <h5>𝓔𝓓𝓤𝓚𝓘𝓐</h5>
        <h1>
          <span> LMS FOR</span> UET STUDENTS
        </h1>
        <p>
          Submit your Assignments, presentations and check
          <br /> your Mid and Final results
        </p>
        {!isLoggedIn && (
          <div>
            <button className='mx-3' onClick={handleLoginClick}>Log In</button>
            <button onClick={handleSignUpClick}>Sign Up</button>
          </div>
        )}
        {isLoggedIn && (
          <div>
            <p>Welcome, User!</p>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        )}
      </div>

      {/* Render the StudentRegistration component as a modal */}
      {showRegistration && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close-modal"
              onClick={() => setShowRegistration(false)}
            >
              &times;
            </span>
            <StudentRegistration />
          </div>
        </div>
      )}
    </section>
  );
}