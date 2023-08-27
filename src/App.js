import React, { useState } from 'react';
import './App.css';
import Feature from './components/Feature';
import Main from './components/Main';
import Navbar from './components/Navbar';
import AssignmentForm from './components/AssignmentForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SessionalResult from './components/SessionalResult';
import MidResults from './components/MidResults';
import FinalResults from './components/FinalResults';
import LoginModal from './components/LoginModal';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginForm(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/submit" element={<AssignmentForm />} />
          <Route path="/checknow" element={<SessionalResult />} />
          <Route path="/checkMid" element={<MidResults />} />
          <Route path="/checkFinal" element={<FinalResults />} />
          <Route
            path="/"
            element={
              <React.Fragment>
                <Main
                  handleLoginClick={handleLoginClick}
                  isLoggedIn={isLoggedIn}
                  handleLogout={handleLogout}
                />
                <Feature />
                {showLoginForm && <LoginModal onClose={handleCloseLoginModal} onLogin={handleLogin} />}
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;