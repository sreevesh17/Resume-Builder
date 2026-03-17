import React from 'react';
import { Wallet } from 'lucide-react';
import './Dashboard.css';

function AICredits() {
  return (
    <div className="page-content">
      <div style={{ marginBottom: '2rem' }}>
        <h2>AI Generation Credits</h2>
        <p style={{ color: '#64748b' }}>Manage your AI usage for resume and cover letter generation.</p>
      </div>

      <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
        <Wallet size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
        <h3>Current Balance</h3>
        <h2 style={{ fontSize: '2.5rem', margin: '1rem 0', color: '#3b2c85' }}>42</h2>
        <p>You have plenty of credits left for this month.</p>
        <button style={{ marginTop: '1rem', padding: '10px 20px', borderRadius: '8px', background: 'linear-gradient(135deg, #00e5ff, #00acc1)', color: 'white', border: 'none', cursor: 'pointer' }}>Upgrade Plan</button>
      </div>
    </div>
  );
}

export default AICredits;
