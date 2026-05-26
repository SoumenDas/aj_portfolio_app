import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { profile } = portfolioData;
  return (
    <section id="contact" className="page-section" style={{ minHeight: 'auto', borderTop: '1px solid var(--glass-border)', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Build Something Great</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
          If you're building a team that needs a design leader who can set strategy, drive alignment, and ship premium platforms at scale, I'd love to have that conversation.
        </p>
        
        <div className="wins-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', marginBottom: '4rem', textAlign: 'left' }}>
          <a href="mailto:abhijit.jagtap3443@gmail.com" className="win-card reveal" style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <div className="win-icon" style={{ marginBottom: '1rem' }}>✉️</div>
            <div className="win-domain">Direct Email</div>
            <div className="win-title">abhijit.jagtap3443@gmail.com</div>
            <p className="win-desc" style={{ marginBottom: 0 }}>
              Reach out directly to discuss strategy, design operations, or your next big enterprise project.
            </p>
          </a>
          
          <a href="tel:+917977150400" className="win-card reveal" style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <div className="win-icon" style={{ marginBottom: '1rem' }}>📞</div>
            <div className="win-domain">Direct Phone</div>
            <div className="win-title">+91 79771 50400</div>
            <p className="win-desc" style={{ marginBottom: 0 }}>
              Available for quick calls to align on vision and explore potential design leadership opportunities.
            </p>
          </a>
        </div>
        
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <p>{profile.name} &bull; {profile.title} &bull; {profile.location}</p>
          <p style={{ marginTop: '0.5rem' }}>© {new Date().getFullYear()} All rights reserved. Designed with an AI-First Approach.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
