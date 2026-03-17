import React from 'react';
import { Contact } from 'lucide-react';
import './Dashboard.css';

function Profile({ user }) {
  return (
    <div className="page-content">
      <div style={{ marginBottom: '2rem' }}>
        <h2>My Profile</h2>
        <p style={{ color: '#64748b' }}>Manage your account settings and personal information.</p>
      </div>

      <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
        <Contact size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
        <h3>Account settings</h3>
        <p>Name: {user?.firstName} {user?.lastName}</p>
        <p>Email: {user?.email}</p>
        <button style={{ marginTop: '1rem', padding: '8px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'white', cursor: 'pointer' }}>Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;
