import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Work = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  return (
    <section id="work" className="page-section" style={{ paddingBottom: '8rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem', flexWrap: 'wrap', gap: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Selected Work</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.6' }}>
              A curated selection of high-impact platforms optimized for enterprise scale and AI integration.
            </p>
          </motion.div>

          {/* View Toggle */}
          <div style={{ 
            display: 'flex', 
            background: 'rgba(255, 255, 255, 0.05)', 
            padding: '4px', 
            borderRadius: '12px', 
            border: '1px solid var(--glass-border)',
            backdropFilter: 'blur(10px)'
          }}>
            <button 
              onClick={() => setViewMode('grid')}
              style={{
                padding: '0.6rem 1.2rem',
                border: 'none',
                borderRadius: '8px',
                background: viewMode === 'grid' ? 'var(--accent-blue)' : 'transparent',
                color: viewMode === 'grid' ? 'white' : 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                fontWeight: '600'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              Grid
            </button>
            <button 
              onClick={() => setViewMode('list')}
              style={{
                padding: '0.6rem 1.2rem',
                border: 'none',
                borderRadius: '8px',
                background: viewMode === 'list' ? 'var(--accent-blue)' : 'transparent',
                color: viewMode === 'list' ? 'white' : 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                fontWeight: '600'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              List
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
                gap: '2.5rem'
              }}
            >
              {portfolioData.projects.map((project, idx) => (
                <ProjectGridCard key={project.id} project={project} idx={idx} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              {portfolioData.projects.map((project, idx) => (
                <ProjectListCard key={project.id} project={project} idx={idx} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectGridCard = ({ project, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1, duration: 0.6 }}
  >
    <Link to={`/work/${project.id}`} style={{ textDecoration: 'none', display: 'block' }}>
      <motion.div
        whileHover={{ 
          y: -10,
          rotateX: 2,
          rotateY: -2,
          boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px var(--accent-blue)'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="win-card"
        style={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          padding: '0', 
          overflow: 'hidden',
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)',
          transformStyle: 'preserve-3d'
        }}
      >
        <div style={{ width: '100%', height: '240px', overflow: 'hidden', position: 'relative', borderBottom: '1px solid var(--glass-border)' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', padding: '0.4rem 1rem', borderRadius: '30px', fontSize: '0.75rem', color: 'var(--accent-blue)', fontWeight: 'bold' }}>{project.category}</div>
        </div>
        <div style={{ padding: '2rem', flex: 1 }}>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: '800' }}>{project.title}</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>{project.description || `Enterprise-grade ${project.category.toLowerCase()} solution optimized for scalability.`}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.8rem', borderRadius: '4px' }}>{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  </motion.div>
);

const ProjectListCard = ({ project, idx }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.05 }}
  >
    <Link to={`/work/${project.id}`} style={{ textDecoration: 'none' }}>
      <motion.div
        whileHover={{ x: 15, background: 'rgba(255, 255, 255, 0.05)', borderColor: 'var(--accent-blue)' }}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '2.5rem 3rem',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid var(--glass-border)',
          borderRadius: '20px',
          gap: '3rem',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div style={{ width: '150px', height: '100px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', flexShrink: 0 }}>
          <img src={project.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--accent-blue)', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '0.1em' }}>{project.category}</span>
          <h3 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', margin: '0.5rem 0' }}>{project.title}</h3>
          <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '1.1rem', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {project.description || `Enterprise-grade ${project.category.toLowerCase()} solution optimized for scalability.`}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: '400px' }}>
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>{tag}</span>
          ))}
        </div>
        <div style={{ color: 'var(--accent-blue)', opacity: 0.8 }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </motion.div>
    </Link>
  </motion.div>
);

export default Work;
