import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, FileText, Users, CreditCard, BookOpen, 
  Wallet, Contact, Receipt, Calendar, Home, Search, Bell, Mail, MoreVertical, 
  ArrowUpRight, ArrowDownRight, Briefcase
} from 'lucide-react';
import './Dashboard.css';
import Chatbot from './Chatbot';

function Dashboard({ user, onLogout }) {
  const getDisplayName = () => {
    if (user?.firstName) return user.firstName;
    if (user?.name) return user.name;
    if (user?.email) return user.email.split('@')[0];
    return 'User';
  };

  const displayName = getDisplayName();

  return (
    <div className="dashboard-container">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo"><Briefcase size={20} color="white" /></div>
          <span className="brand-name">Resume Pro</span>
        </div>

        <div className="nav-section">
          <h4 className="nav-title">Main Navigation</h4>
          <nav>
            <NavLink to="/" end className="nav-item">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
              <span className="chevron">›</span>
            </NavLink>
            <NavLink to="/resumes" className="nav-item">
              <FileText size={18} />
              <span>My Resumes</span>
              <span className="chevron">›</span>
            </NavLink>
            <NavLink to="/jobs" className="nav-item">
              <Users size={18} />
              <span>Job Tracker</span>
              <span className="chevron">›</span>
            </NavLink>
            <NavLink to="/cover-letters" className="nav-item">
              <CreditCard size={18} />
              <span>Cover Letters</span>
              <span className="chevron">›</span>
            </NavLink>
            <NavLink to="/library" className="nav-item">
              <BookOpen size={18} />
              <span>Library</span>
            </NavLink>
          </nav>
        </div>

        <div className="nav-section">
          <h4 className="nav-title">Settings & Upgrades</h4>
          <nav>
            <NavLink to="/credits" className="nav-item">
              <Wallet size={18} />
              <span>AI Credits</span>
              <span className="chevron">›</span>
            </NavLink>
            <NavLink to="/profile" className="nav-item">
              <Contact size={18} />
              <span>My Profile</span>
              <span className="chevron">›</span>
            </NavLink>
            <NavLink to="/invoices" className="nav-item">
              <Receipt size={18} />
              <span>Invoices</span>
              <span className="chevron">›</span>
            </NavLink>
            <NavLink to="/schedules" className="nav-item">
              <Calendar size={18} />
              <span>Schedules</span>
              <span className="chevron">›</span>
            </NavLink>
          </nav>
        </div>

        <div className="help-widget">
          <div className="help-icon">?</div>
          <h4>Help Center</h4>
          <p>Having trouble with templates? Contact us for guidance.</p>
          <button className="help-btn">Go To Help Center</button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        
        {/* TOP HEADER */}
        <header className="top-header">
          <div className="search-bar">
            <Search size={18} color="#aaa" />
            <input type="text" placeholder="Search resumes, jobs..." />
          </div>
          <div className="header-actions">
            <button className="icon-btn"><Home size={18} /></button>
            <button className="icon-btn"><Bell size={18} /></button>
            <button className="icon-btn"><MoreVertical size={18} /></button>
            
            <div className="user-profile">
              <span className="workspace-links">Account   Resumes</span>
              <div className="user-dropdown" onClick={onLogout} title="Click to Logout">
                <span>Hi, {displayName}</span>
                <div className="avatar">
                  {displayName.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* REACT ROUTER OUTLET (Pages load here) */}
        <div className="dashboard-page-container">
          <Outlet />
        </div>

      </main>

      {/* Floating AI Chatbot */}
      <Chatbot />
    </div>
  );
}

export default Dashboard;
