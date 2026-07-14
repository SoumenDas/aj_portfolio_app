import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import WorkPage from './pages/WorkPage';
import ProjectDetail from './pages/ProjectDetail';
import CompanyDetail from './pages/CompanyDetail';
import VBADetail from './pages/VBADetail';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollHandler from './components/ScrollHandler';

function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/vba" element={<VBADetail />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
          <Route path="/career/:companyId" element={<CompanyDetail />} />
        </Routes>
        <Contact />
        <ScrollToTopButton />
      </div>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
