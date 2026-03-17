import React, { useState } from 'react';
import { registerUser } from '../services/UserService';
import './Auth.css';

function Register({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    
    try {
      const response = await registerUser(formData);
      setStatus({ type: 'success', message: 'Registration successful! You can now login.' });
      console.log('Registered:', response.data);
    } catch (error) {
      setStatus({ type: 'error', message: error.response?.data?.message || 'Registration failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form-container glass-effect">
      <h2>Create Account</h2>
      <p className="subtitle">Join us to build your perfect resume</p>
      
      {status.message && (
        <div className={`alert ${status.type}`}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleRegister} className="auth-form">
        <div className="input-group">
          <label>Full Name</label>
          <input name="name" placeholder="John Doe" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input name="email" type="email" placeholder="name@example.com" onChange={handleChange} required />
        </div>
        
        <div className="input-group">
          <label>Password</label>
          <input name="password" type="password" placeholder="••••••••" onChange={handleChange} required />
        </div>
        
        <button type="submit" disabled={loading} className="primary-btn">
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      
      <p className="switch-prompt">
        Already have an account? <span onClick={onSwitchToLogin} className="switch-link">Login</span>
      </p>
    </div>
  );
}

export default Register;
