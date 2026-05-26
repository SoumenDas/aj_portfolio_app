import React, { useEffect } from 'react';
import Work from '../components/Work';

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <Work />
    </main>
  );
};

export default WorkPage;
