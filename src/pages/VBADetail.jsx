import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const VBADetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="case-study-page"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      {/* Hero Section */}
      <section className="hero-mesh" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', zIndex: 2, position: 'relative' }}>
          <motion.div {...fadeIn}>
            <Link to="/work" style={{ color: 'var(--accent-blue)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>← Back to Selected Work</Link>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '2rem' }}>
              EVIO VBA <br />
              <span style={{ background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Case Study</span>
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: '1.6' }}>
              Transforming cell and gene therapy contract administration through a scalable, HIPAA-compliant Value Based Administration platform.
            </p>
          </motion.div>
        </div>

        {/* Floating 3D Background Element */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            position: 'absolute', 
            right: '-10%', 
            top: '20%', 
            width: '60%', 
            opacity: 0.4,
            filter: 'blur(40px)',
            background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)',
            height: '600px',
            zIndex: 1
          }}
        />
      </section>

      {/* Requirement Gathering Section */}
      <section className="page-section" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div {...fadeIn}>
              <h2 className="section-title">01. Requirement Gathering</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                The challenge was complex: administering cell and gene therapy contracts requires balancing high-cost clinical outcomes with strict HIPAA compliance. We conducted intensive stakeholder connects and kick-off meetings to map the intricate ecosystem of Value Based Administration.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {['Stakeholder Interviews', 'Scrum Meetings', 'Agile Workflows'].map(chip => (
                  <span key={chip} style={{ padding: '0.5rem 1rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '4px', fontSize: '0.9rem' }}>{chip}</span>
                ))}
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn}
              style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--glass-border)', position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: '-20px', left: '20px', background: 'var(--accent-blue)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 'bold' }}>AI-FIRST APPROACH</div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                "We used AI-driven data synthesis to analyze 200+ hours of stakeholder transcripts, identifying three critical friction points in contract adjudication that were previously invisible."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Research & Insights */}
      <section className="page-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2 {...fadeIn} className="section-title">02. User Insights & Research Artifacts</motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {[
              { title: "Personas", desc: "Detailed profiles of Clinical Reviewers and Contract Managers.", icon: "👤" },
              { title: "Journey Maps", desc: "Mapping the 'Value Journey' from contract inception to payout.", icon: "🗺️" },
              { title: "Info Architecture", desc: "Complex data structures simplified for rapid retrieval.", icon: "🏗️" }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                whileHover={{ y: -10 }}
                style={{ background: 'var(--glass-bg)', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--glass-border)' }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UX Process & Mockups */}
      <section className="page-section" style={{ background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div {...fadeIn} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="section-title">03. High-Fidelity Mockups</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Iterative prototyping on Figma allowed us to validate interaction flows with end-users.</p>
          </motion.div>
          
          <motion.div 
            {...fadeIn}
            style={{ 
              width: '100%', 
              borderRadius: '30px', 
              overflow: 'hidden', 
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              border: '1px solid var(--glass-border)'
            }}
          >
            <img 
              src="/vba_app_mockup_3d_1778862976880.png" 
              alt="VBA Application Mockup" 
              style={{ width: '100%', display: 'block' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="page-section" style={{ paddingBottom: '10rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title">04. Key Outcomes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
            {[
              { val: "30%", label: "Faster Adjudication", sub: "Reduced manual data entry" },
              { val: "100%", label: "HIPAA Compliant", sub: "Verified secure architecture" },
              { val: "20%", label: "Higher Adoption", sub: "Improved user satisfaction" }
            ].map(stat => (
              <motion.div key={stat.label} {...fadeIn} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>{stat.val}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{stat.label}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ textAlign: 'center', padding: '6rem 2rem', background: 'linear-gradient(180deg, transparent, rgba(0, 210, 255, 0.05))' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Want to collaborate?</h2>
        <a href="/#contact" className="btn btn-primary">Get in Touch ↗</a>
      </section>
    </motion.div>
  );
};

export default VBADetail;
