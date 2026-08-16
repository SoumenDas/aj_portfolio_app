import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MAYOApp from './MAYO/app/App';

const MAYODetail = () => {
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
            background: 'rgba(10, 25, 47, 0.85)', 
            border: '1px solid rgba(255, 255, 255, 0.2)', 
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
            e.currentTarget.style.background = 'rgba(43, 79, 166, 0.9)';
            e.currentTarget.style.borderColor = 'rgba(74, 144, 226, 0.6)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(10, 25, 47, 0.85)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
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

      <MAYOApp />
    </main>
  );
};

export default MAYODetail;
