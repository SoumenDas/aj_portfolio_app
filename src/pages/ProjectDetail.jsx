import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import KerastiqueDetail from './KerastiqueDetail';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (id === 'kerastique') {
    return <KerastiqueDetail />;
  }

  if (id === 'vba' || id === 'stoploss') {
    const isVba = id === 'vba';
    const imgSrc = isVba ? "/assets/images/vba_full.jpg" : "/assets/images/stoploss_full.jpg";
    const altText = isVba ? "VBA Application Case Study" : "Stoploss Application Case Study";

    return (
      <main style={{ minHeight: '100vh', paddingTop: '100px', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem 4rem 2rem' }}>
          <button 
            onClick={() => navigate(-1)} 
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              border: '1px solid var(--glass-border)', 
              color: 'var(--text-secondary)', 
              padding: '0.6rem 1.5rem', 
              borderRadius: '30px', 
              cursor: 'pointer',
              marginBottom: '2rem',
              display: 'inline-block',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
          >
            &larr; Back to Work
          </button>
          
          <img 
            src={imgSrc} 
            alt={altText} 
            style={{ width: '100%', borderRadius: '16px', display: 'block', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }} 
          />
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', paddingTop: '150px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Case Study Coming Soon</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>The detailed breakdown for this project is currently being compiled.</p>
      <button onClick={() => navigate(-1)} className="btn btn-outline" style={{ cursor: 'pointer' }}>Go Back</button>
    </main>
  );
};

export default ProjectDetail;
