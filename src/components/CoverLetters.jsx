import React from 'react';
import { CreditCard } from 'lucide-react';
import './Dashboard.css';

function CoverLetters() {
  return (
    <div className="page-content">
      <div style={{ marginBottom: '2rem' }}>
        <h2>Cover Letters</h2>
        <p style={{ color: '#64748b' }}>Generate AI cover letters tailored to your target jobs.</p>
      </div>

      <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
        <CreditCard size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
        <h3>Coming Soon</h3>
        <p>Your generated custom cover letters will be saved here.</p>
      </div>
    </div>
  );
}

export default CoverLetters;
