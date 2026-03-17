import React from 'react';
import { Search, MoreVertical, FileText, Briefcase, ArrowUpRight } from 'lucide-react';
import './Dashboard.css';

function DashboardHome() {
  return (
    <>
      {/* WIDGETS AREA */}
      <div className="widgets-grid">
        <div className="glass-card primary-card">
          <div className="card-top-icons">
             <div className="chip"></div>
          </div>
          <div className="card-info">
            <span className="label">PRIMARY RESUME ID</span>
            <h3 className="value">RES-8829-4629-5025</h3>
          </div>
          <div className="card-footer">
             <div className="detail">
               <span className="label">TARGET ROLE</span>
               <span className="sub-value">Software Eng</span>
             </div>
             <div className="detail">
               <span className="label">UPDATED</span>
               <span className="sub-value">Oct/24</span>
             </div>
          </div>
        </div>

        <div className="glass-card orange-card">
          <div className="card-header-row">
            <h3>AI Profile Strength</h3>
            <div className="small-help">?</div>
          </div>
          <div className="metric-row">
            <div className="circle-icon">⚡</div>
            <div className="metric-data">
              <h2>85%</h2>
              <p>Top 10% in Software Eng</p>
            </div>
          </div>
        </div>

        <div className="glass-card cyan-card">
          <div className="card-header-row">
            <h3>Available AI Credits</h3>
            <span className="link">Upgrade Plan</span>
          </div>
          <div className="metric-number">
            <h2>42</h2><span> Credits</span>
          </div>
        </div>
      </div>

      {/* CHARTS AREA */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-title">Profile Views</span>
            <div className="stat-numbers">
              <span className="current">210</span>
              <span className="trend positive">23k <ArrowUpRight size={12}/></span>
            </div>
            <span className="stat-period">Current Month</span>
          </div>
          <div className="mini-chart orange-chart">
            <div className="bar b1"></div>
            <div className="bar b2"></div>
            <div className="bar b3 active"></div>
            <div className="bar b4"></div>
            <div className="bar b5"></div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-title">Applications</span>
            <div className="stat-numbers">
              <span className="current">18</span>
              <span className="trend positive">5 <ArrowUpRight size={12}/></span>
            </div>
            <span className="stat-period">Current Month</span>
          </div>
          <div className="mini-chart purple-chart">
            <div className="bar b1"></div>
            <div className="bar b2"></div>
            <div className="bar b3 active"></div>
            <div className="bar b4"></div>
            <div className="bar b5"></div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-title">Interview Rate</span>
            <div className="stat-numbers">
              <span className="current">12%</span>
              <span className="trend positive">2% <ArrowUpRight size={12}/></span>
            </div>
            <span className="stat-period">Current Month</span>
          </div>
          <div className="mini-chart cyan-chart">
            <div className="bar b1"></div>
            <div className="bar b2"></div>
            <div className="bar b3 active"></div>
            <div className="bar b4"></div>
            <div className="bar b5"></div>
          </div>
        </div>
      </div>

      {/* BOTTOM LISTS */}
      <div className="lists-grid">
        <div className="list-section">
          <div className="list-header">
            <h3>Recent Resumes</h3>
            <div className="list-actions">
              <button className="icon-btn"><Search size={16}/></button>
              <button className="icon-btn"><MoreVertical size={16}/></button>
            </div>
          </div>

          <div className="list-date">Today</div>
          <div className="list-item">
            <div className="item-icon bg-purple"><FileText size={16}/></div>
            <div className="item-details">
              <h4>Software Engineer Resume</h4>
              <p>Tailored for Google</p>
            </div>
            <div className="item-score positive">92% Match</div>
          </div>

          <div className="list-item">
            <div className="item-icon bg-gray"><FileText size={16}/></div>
            <div className="item-details">
              <h4>Frontend Developer</h4>
              <p>Draft</p>
            </div>
            <div className="item-score neutral">Incomplete</div>
          </div>

          <div className="list-date">Yesterday</div>
          <div className="list-item">
            <div className="item-icon bg-blue"><FileText size={16}/></div>
            <div className="item-details">
              <h4>Fullstack Roles</h4>
              <p>General Template</p>
            </div>
            <div className="item-score">85% Match</div>
          </div>
        </div>

        <div className="list-section">
          <div className="list-header">
            <h3>Upcoming Interviews</h3>
            <a href="#" className="view-all">View All</a>
          </div>

          <div className="list-date">Tomorrow</div>
          <div className="list-item">
            <div className="item-icon bg-darkblue"><Briefcase size={16}/></div>
            <div className="item-details">
              <h4>Meta - Frontend Eng</h4>
              <p>Technical Screen</p>
            </div>
            <div className="item-time">10:00 AM</div>
          </div>

          <div className="list-date">Next Week</div>
          <div className="list-item">
            <div className="item-icon bg-red"><Briefcase size={16}/></div>
            <div className="item-details">
              <h4>Netflix - UI/UX Developer</h4>
              <p>Hiring Manager</p>
            </div>
            <div className="item-time">2:30 PM</div>
          </div>
          
          <div className="list-item">
            <div className="item-icon bg-orange"><Briefcase size={16}/></div>
            <div className="item-details">
              <h4>Startup Inc - Lead Dev</h4>
              <p>Architecture Round</p>
            </div>
            <div className="item-time">11:00 AM</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardHome;
