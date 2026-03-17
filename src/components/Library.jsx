import React from 'react';
import { BookOpen } from 'lucide-react';
import './Dashboard.css';

function Library() {
  return (
    <div className="page-content">
      <div style={{ marginBottom: '2rem' }}>
        <h2>Template Library</h2>
        <p style={{ color: '#64748b' }}>Browse professional resume templates and styling options.</p>
      </div>

      <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
        <BookOpen size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
        <h3>Coming Soon</h3>
        <p>Template gallery matching Harvard, ATS-friendly, and Modern formats.</p>
      </div>
    </div>
  );
}

export default Library;
