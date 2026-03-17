import React from 'react';
import { Receipt } from 'lucide-react';
import './Dashboard.css';

function Invoices() {
  return (
    <div className="page-content">
      <div style={{ marginBottom: '2rem' }}>
        <h2>Invoices & Billing</h2>
        <p style={{ color: '#64748b' }}>Manage your subscription and payment history.</p>
      </div>

      <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
        <Receipt size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
        <h3>No Recent Invoices</h3>
        <p>You are currently on the free Builder plan.</p>
      </div>
    </div>
  );
}

export default Invoices;
