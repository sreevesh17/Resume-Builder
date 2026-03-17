import React from 'react';
import { Calendar } from 'lucide-react';
import './Dashboard.css';

function Schedules() {
  return (
    <div className="page-content">
      <div style={{ marginBottom: '2rem' }}>
        <h2>Interview Schedules</h2>
        <p style={{ color: '#64748b' }}>Keep track of your upcoming interviews and meetings.</p>
      </div>

      <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
        <Calendar size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
        <h3>Calendar Empty</h3>
        <p>Your upcoming interviews will be synced here.</p>
      </div>
    </div>
  );
}

export default Schedules;
