import React, { useState } from 'react';
import { loginUser } from '../services/UserService';
import './Auth.css';

function Login({ onSwitchToRegister, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      const response = await loginUser({ email, password });
      setStatus({ type: 'success', message: 'Login successful! Welcome back.' });
      console.log('Logged in:', response.data);
      // Pass the user data to the parent App component to update state
      setTimeout(() => onLoginSuccess(response.data), 1000); // 1s delay to show success message
    } catch (error) {
      setStatus({ type: 'error', message: error.response?.data?.message || 'Invalid email or password' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form-container glass-effect">
      <h2>Welcome Back</h2>
      <p className="subtitle">Please sign in to continue</p>
      
      {status.message && (
        <div className={`alert ${status.type}`}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleLogin} className="auth-form">
        <div className="input-group">
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="name@example.com" 
            value={email}
            onChange={e => setEmail(e.target.value)} 
            required 
          />
        </div>
        
        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            value={password}
            onChange={e => setPassword(e.target.value)} 
            required 
          />
        </div>
        
        <button type="submit" disabled={loading} className="primary-btn">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      
      <p className="switch-prompt">
        Don't have an account? <span onClick={onSwitchToRegister} className="switch-link">Register</span>
      </p>
    </div>
  );
}

export default Login;
