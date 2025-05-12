import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with\nUsername/Email: ${emailOrUsername}`);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <h2 className="login-title">Login</h2>
        <label htmlFor="emailOrUsername" className="input-label">
          Email or Username
        </label>
        <input
          id="emailOrUsername"
          type="text"
          className="login-input"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          placeholder="Enter email or username"
          required
          autoComplete="username"
        />

        <label htmlFor="password" className="input-label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
          autoComplete="current-password"
        />

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
