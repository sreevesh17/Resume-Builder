import React from 'react';
import { FileText, Plus } from 'lucide-react';
import './Dashboard.css';

function MyResumes() {
  return (
    <div className="page-content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>My Resumes</h2>
        <button className="primary-btn" style={{ background: '#3b2c85', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <Plus size={18} /> Create New
        </button>
      </div>

      <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
        <FileText size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
        <h3>No Resumes Yet</h3>
        <p>Use the AI Assistant to generate a resume or click "Create New" to start from scratch.</p>
      </div>
    </div>
  );
}

export default MyResumes;
