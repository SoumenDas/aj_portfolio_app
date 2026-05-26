import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { careerDetails } from '../data/careerDetails';

const CompanyDetail = () => {
  const { companyId } = useParams();
  const data = careerDetails[companyId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [companyId]);

  if (!data) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h2>Company not found.</h2>
        <a href="/#career" style={{ color: 'var(--accent-blue)', marginTop: '1rem', textDecoration: 'none' }}>Return Home</a>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingBottom: '6rem' }}
    >
      {/* Hero Section */}
      <section className="page-section hero-mesh" style={{ paddingTop: '140px', paddingBottom: '4rem', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <a href="/#career" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', width: 'fit-content', cursor: 'pointer' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Timeline
          </a>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem', background: 'linear-gradient(90deg, var(--text-primary), var(--accent-blue))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: '1.2' }}
          >
            {data.name}
          </motion.h1>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--accent-purple)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{data.duration}</span>
          </div>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.6' }}>
            {data.description}
          </p>
        </div>
      </section>

      {/* Roles & Impact Section */}
      {data.roles && data.roles.length > 0 && (
        <section className="page-section" style={{ paddingTop: '4rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>Roles & Strategic Impact</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
              {data.roles.map((role, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '2rem' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>{role.title}</h3>
                    <span style={{ color: 'var(--accent-blue)', fontWeight: '600' }}>{role.duration}</span>
                  </div>
                  <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {role.impact.map((point, pIdx) => (
                      <li key={pIdx} style={{ lineHeight: '1.6', fontSize: '1.05rem' }}>
                        {/* Highlight AI-specific keywords if they exist to draw attention */}
                        {point.split(/(AI-driven|machine learning algorithms|data-driven|assistive technology|AI-First approach|computer science techniques)/gi).map((part, i) => 
                          /AI-driven|machine learning algorithms|data-driven|assistive technology|AI-First approach|computer science techniques/gi.test(part) ? 
                          <strong key={i} style={{ color: 'var(--text-primary)' }}>{part}</strong> : part
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Showcase */}
      <section className="page-section" style={{ paddingTop: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '3rem' }}>Key Projects & Responsibilities</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            {data.projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="win-card"
                style={{ backdropFilter: 'blur(10px)', display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', margin: 0 }}>{project.name}</h3>
                    <span style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {project.date}
                    </span>
                  </div>
                  
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {project.summary}
                  </p>

                  {/* AI Use Highlight */}
                  <div style={{ background: 'rgba(0, 210, 255, 0.05)', borderLeft: '4px solid var(--accent-blue)', padding: '1.5rem', borderRadius: '0 12px 12px 0', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--accent-blue)', fontWeight: '600' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                      AI Integration Strategy
                    </div>
                    <p style={{ margin: 0, color: 'var(--text-primary)', lineHeight: '1.5' }}>
                      {project.aiUsage}
                    </p>
                  </div>

                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Core Responsibilities</h4>
                  <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} style={{ lineHeight: '1.5' }}>{resp}</li>
                    ))}
                  </ul>

                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Tools & Execution</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', background: 'var(--bg-primary)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                    <span style={{ fontSize: '0.95rem' }}>{project.technologies}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CompanyDetail;
