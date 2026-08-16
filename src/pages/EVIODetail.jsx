import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EVIOApp from './EVIO/App';

const EVIODetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ position: 'relative' }}>
      {/* Back Button Overlay */}
      <div style={{ 
        position: 'fixed', 
        top: '24px', 
        left: '2rem', 
        zIndex: 100,
      }}>
        <button 
          onClick={() => navigate('/work')} 
          style={{ 
            background: 'rgba(10, 8, 20, 0.75)', 
            border: '1px solid rgba(255, 255, 255, 0.15)', 
            color: '#fff', 
            padding: '0.5rem 1.25rem', 
            borderRadius: '9999px', 
            cursor: 'pointer',
            backdropFilter: 'blur(16px)',
            transition: 'all 0.2s ease',
            fontWeight: '600',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(194, 232, 18, 0.15)';
            e.currentTarget.style.borderColor = 'rgba(194, 232, 18, 0.4)';
            e.currentTarget.style.color = '#c2e812';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(10, 8, 20, 0.75)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.color = '#fff';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Work
        </button>
      </div>

      <EVIOApp />
    </main>
  );
};

export default EVIODetail;
