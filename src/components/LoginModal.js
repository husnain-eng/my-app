import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import './LoginModal.css';

const LoginModal = ({ onLogin }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <LoginForm onLogin={onLogin} />
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default LoginModal;