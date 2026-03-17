import React from 'react';
import { Mail, Phone, MapPin, Globe, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import './ResumePreview.css';

/**
 * ResumePreview Component
 * Renders a professional resume in a two-column A4 layout.
 * 
 * @param {Object} data - The resume data object containing name, summary, skills, etc.
 */
const ResumePreview = ({ data, theme = 'modern' }) => {
  if (!data) return null;

  return (
    <div className={`resume-a4-container ${theme}-theme`}>
      <div className={`resume-sheet theme-${theme}`}>
        {/* Sidebar / Top Head */}
        <div className="resume-sidebar">
          <div className="profile-image-container">
            <div className="profile-placeholder">
              <span>{data.name?.charAt(0) || 'U'}</span>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">Contact</h3>
            <div className="contact-item">
              <Mail size={14} />
              <span>{data.email || 'N/A'}</span>
            </div>
            <div className="contact-item">
              <Phone size={14} />
              <span>{data.phone || 'N/A'}</span>
            </div>
            <div className="contact-item">
              <MapPin size={14} />
              <span>{data.address || 'N/A'}</span>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">Skills</h3>
            <div className="skills-list">
              {data.skills?.split(',').map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill.trim()}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Main Body */}
        <div className="resume-main">
          <header className="resume-header">
            <h1 className="resume-name">{data.name}</h1>
            <p className="resume-designation">Professional Candidate</p>
          </header>

          <section className="main-section">
            <div className="section-header">
              <Award size={18} className="section-icon" />
              <h2 className="section-title">Professional Summary</h2>
            </div>
            <div className="section-divider"></div>
            <p className="section-content">{data.summary}</p>
          </section>

          <section className="main-section">
            <div className="section-header">
              <Briefcase size={18} className="section-icon" />
              <h2 className="section-title">Experience</h2>
            </div>
            <div className="section-divider"></div>
            <div className="section-content">
              {data.experience?.split('\n').map((line, idx) => (
                <p key={idx} className="list-line">{line}</p>
              ))}
            </div>
          </section>

          <section className="main-section">
            <div className="section-header">
              <GraduationCap size={18} className="section-icon" />
              <h2 className="section-title">Education</h2>
            </div>
            <div className="section-divider"></div>
            <p className="section-content">{data.education}</p>
          </section>

          <section className="main-section">
            <div className="section-header">
              <Code size={18} className="section-icon" />
              <h2 className="section-title">Projects</h2>
            </div>
            <div className="section-divider"></div>
            <div className="section-content">
              {data.projects?.split('\n').map((line, idx) => (
                <p key={idx} className="list-line">{line}</p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
