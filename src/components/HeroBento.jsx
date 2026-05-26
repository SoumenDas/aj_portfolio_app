import React from 'react';
import { portfolioData } from '../data/portfolioData';

const HeroBento = () => {
  const { profile, experience } = portfolioData;

  return (
    <section className="bento-hero animate-fade-in">
      <div className="bento-grid">
        {/* Main Intro Card */}
        <div className="bento-item glass-panel intro-card">
          <div className="status-badge">
            <span className="pulse-dot"></span> Available for opportunities
          </div>
          <h1 className="gradient-text">{profile.name}</h1>
          <h2 className="title">{profile.title}</h2>
          <p className="location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {profile.location}
          </p>
          <div className="action-buttons">
            <a href="/work" className="btn-primary">View Projects</a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn</a>
          </div>
        </div>

        {/* Profile Image Card */}
        <div className="bento-item glass-panel profile-img-card">
          <img src="/profile_ai.png" alt="Abhijit Jagtap - AI Portrait" className="profile-img" />
        </div>

        {/* About Card */}
        <div className="bento-item glass-panel about-card">
          <h3>About Me</h3>
          <p className="about-text">{profile.about}</p>
          <div className="ai-highlight">
            <svg className="ai-sparkle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-blue)" />
                  <stop offset="100%" stopColor="var(--accent-purple)" />
                </linearGradient>
              </defs>
              <path d="M12 2v4m0 12v4M4 12H2m18 0h2m-2.586-7.414l-2.828 2.828M7.414 16.586l-2.828 2.828m12.02-12.02l-2.828 2.828M7.414 7.414L4.586 4.586"></path>
            </svg>
            <p>Advocating AI-first design methodologies to craft intelligent and scalable interfaces.</p>
          </div>
        </div>

        {/* Current Experience Card */}
        <div className="bento-item glass-panel experience-card">
          <h3>Current Role</h3>
          {experience[0] && (
            <div className="exp-item">
              <div className="exp-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div className="exp-details">
                <h4>{experience[0].role}</h4>
                <p>{experience[0].company}</p>
                <span className="exp-year">{experience[0].year}</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Core Competencies */}
        <div className="bento-item glass-panel skills-card">
          <h3>Core Competencies</h3>
          <div className="skills-tags">
            <span className="skill-tag">UX Strategy</span>
            <span className="skill-tag">AI Interfaces</span>
            <span className="skill-tag">Design Systems</span>
            <span className="skill-tag">Data Visualization</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBento;
