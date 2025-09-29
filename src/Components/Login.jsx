// src/Components/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    // Uncomment and use Firebase authentication for real login:
    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   navigate('/');
    // } catch (err) {
    //   setError("Failed to log in. Please check your credentials.");
    // }
    alert('Login functionality to be implemented!');
    navigate('/');
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h2>Welcome Back!</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-full-width">Log In</button>
        </form>
        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
