import React from 'react';
import { Users } from 'lucide-react';
import './Dashboard.css';

function JobTracker() {
  return (
    <div className="page-content">
      <div style={{ marginBottom: '2rem' }}>
        <h2>Job Tracker</h2>
        <p style={{ color: '#64748b' }}>Manage and organize your active job applications.</p>
      </div>

      <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
        <Users size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
        <h3>Coming Soon</h3>
        <p>Your Kanban board for job tracking will appear here.</p>
      </div>
    </div>
  );
}

export default JobTracker;
