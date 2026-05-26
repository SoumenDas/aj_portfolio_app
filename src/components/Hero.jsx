import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import Scene3D from './Scene3D';
import { motion, AnimatePresence } from 'framer-motion';

const contexts = {
  Default: {
    tags: 'Financial Dashboards · Enterprise UX · Data Visualization · EdTech',
    title: 'I design systems, not just screens.',
    desc: 'I ship intuitive, AI-first experiences that simplify complex data across global enterprises. From comprehensive dashboards for top-tier US banks like Deutsche Bank to enterprise platforms for SAP and telecom giants, I operate where premium aesthetic design meets enterprise-scale usability.'
  },
  Healthcare: {
    tags: 'HIPAA-Compliant Systems · Clinical Dashboards · Medical Imaging',
    title: 'I design life-saving clinical workflows.',
    desc: 'Spearheading UX for mission-critical platforms at CitiusTech, Evicore Cigna, and Roche-Genentech. I specialize in reducing cognitive load for medical professionals, cutting iteration cycles by 35%, and designing ML-powered diagnostic interfaces.'
  },
  Fintech: {
    tags: 'High-Frequency Trading · Payroll Solutions · Banking UIs',
    title: 'I design scalable financial ecosystems.',
    desc: 'Architecting ultra-low latency interfaces for top-tier US banks, DTCC, and Deutsche Bank. I transform dense financial datasets into highly actionable, intuitive dashboards that drastically improve operational efficiency and decision-making speed.'
  }
};

const Hero = () => {
  const { profile } = portfolioData;
  const [activeContext, setActiveContext] = useState('Default');

  const content = contexts[activeContext];

  return (
    <section id="hero" className="page-section hero-mesh" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh', paddingTop: '120px', position: 'relative', overflow: 'hidden' }}>
      <Scene3D />

      <div className="hero-content" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>

        {/* Name & Designation Super Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ marginBottom: '2.5rem' }}
        >
          <h1 style={{ fontSize: '4.5rem', fontWeight: '900', background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '0.5rem', lineHeight: '1.1', margin: 0 }}>
            Abhijit Jagtap
          </h1>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', fontWeight: '500', letterSpacing: '0.05em', margin: 0, marginTop: '0.5rem' }}>
            Senior Lead User Experience Designer
          </h2>
        </motion.div>

        {/* Personalizer UI */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          style={{ marginBottom: '2.5rem', display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '0.8rem 1.2rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', width: 'fit-content' }}
        >
          {Object.keys(contexts).map(ctx => (
            <button
              key={ctx}
              onClick={() => setActiveContext(ctx)}
              style={{
                background: activeContext === ctx ? 'rgba(138, 43, 226, 0.2)' : 'transparent',
                border: `1px solid ${activeContext === ctx ? 'rgba(138, 43, 226, 0.5)' : 'transparent'}`,
                color: activeContext === ctx ? '#fff' : 'var(--text-secondary)',
                padding: '0.4rem 1rem',
                borderRadius: '30px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontSize: '0.85rem'
              }}
            >
              {ctx}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeContext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
              style={{ color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.9rem' }}
            >
              {content.tags}
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem', fontWeight: '800', letterSpacing: '-0.01em', color: 'var(--text-primary)' }}
            >
              {content.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.8', fontWeight: '400' }}
            >
              {content.desc}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
        >
          <Link to="/work" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>See My Work</Link>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>LinkedIn Profile</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
