import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import KerastiqueApp from './Kerastique/app/App';

const KerastiqueDetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ position: 'relative' }}>
      {/* Back Button Overlay */}
      <div style={{ 
        position: 'absolute', 
        top: '120px', 
        left: '2rem', 
        zIndex: 1000,
        maxWidth: '1200px',
        margin: '0 auto',
        width: 'calc(100% - 4rem)'
      }}>
        <button 
          onClick={() => navigate('/work')} 
          style={{ 
            background: 'rgba(0, 0, 0, 0.5)', 
            border: '1px solid rgba(255,255,255,0.1)', 
            color: '#fff', 
            padding: '0.6rem 1.5rem', 
            borderRadius: '30px', 
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'background 0.2s',
            fontWeight: '500'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)'}
        >
          &larr; Back to Work
        </button>
      </div>

      <KerastiqueApp />
    </main>
  );
};

export default KerastiqueDetail;
