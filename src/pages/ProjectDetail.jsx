import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import KerastiqueDetail from './KerastiqueDetail';
import StoplossDetail from './StoplossDetail';
import EVIODetail from './EVIODetail';
import MAYODetail from './MAYODetail';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (id === 'mayo') {
    return <MAYODetail />;
  }

  if (id === 'kerastique') {
    return <KerastiqueDetail />;
  }
  
  if (id === 'stoploss') {
    return <StoplossDetail />;
  }

  if (id === 'evio' || id === 'vba') {
    return <EVIODetail />;
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
