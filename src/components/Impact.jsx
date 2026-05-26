import React from 'react';

const Impact = () => {
  return (
    <section id="impact" className="page-section" style={{ position: 'relative', overflow: 'visible' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        
        {/* Full Width Content */}
        <div style={{ position: 'relative', zIndex: 5 }}>
          <div className="hero-content animate-fade-in" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '1rem', fontWeight: '800', letterSpacing: '-0.02em' }}>Biggest UX Wins</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3.5rem', lineHeight: '1.6', fontWeight: '400' }}>
              Six areas where my AI-first design strategy moved the needle at scale. Not just designing a screen, but changing the trajectory of user engagement and business efficiency.
            </p>
            
            <div className="wins-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          <div className="win-card reveal">
            <div className="win-icon">🧠</div>
            <div className="win-domain">Healthcare Tech · AI Diagnostics</div>
            <div className="win-title">AI-Driven Clinical Decision Support</div>
            <p className="win-desc">
              Spearheaded UX design for mission-critical platforms at CitiusTech and Evicore Cigna. Replaced legacy manual review systems with an AI-first interface that surfaces predictive diagnostics. By designing human-in-the-loop ML algorithms, we reduced cognitive load for doctors and minimized false-positive alerts.
            </p>
            <div className="win-metrics">
              <span className="metric-chip">35% Less Cognitive Load</span>
              <span className="metric-chip">Predictive ML Models</span>
              <span className="metric-chip">20% Faster Decisions</span>
            </div>
          </div>
          
          <div className="win-card reveal">
            <div className="win-icon">⚡</div>
            <div className="win-domain">Enterprise · Workflow Automation</div>
            <div className="win-title">Generative AI Enterprise Workflows</div>
            <p className="win-desc">
              Led the end-to-end UX/UI design for robust enterprise tools at Accenture and Cognizant. Integrated Generative AI directly into Microsoft Teams apps (Call Center Manager) to automatically summarize customer histories, drastically simplifying fragmented operational processes.
            </p>
            <div className="win-metrics">
              <span className="metric-chip">GenAI Summarization</span>
              <span className="metric-chip">40% Latency Reduction</span>
              <span className="metric-chip">30% Usability Increase</span>
            </div>
          </div>
          
          <div className="win-card reveal">
            <div className="win-icon">📐</div>
            <div className="win-domain">Design Ops · AI Prototyping</div>
            <div className="win-title">Scaling Intelligent Design Systems</div>
            <p className="win-desc">
              Envisioned 'north star experiences' across global organizations by embedding AI-assisted design prototyping into the CI/CD pipeline. Established robust UI libraries that leverage programmatic design tokens, reducing manual iteration cycles and empowering engineers.
            </p>
            <div className="win-metrics">
              <span className="metric-chip">Programmatic Tokens</span>
              <span className="metric-chip">35% Iteration Reduction</span>
              <span className="metric-chip">Automated CI/CD</span>
            </div>
          </div>

          <div className="win-card reveal">
            <div className="win-icon">🛍️</div>
            <div className="win-domain">E-Commerce · Predictive Analytics</div>
            <div className="win-title">Predictive Consumer Platforms</div>
            <p className="win-desc">
              Working with TCS and Dreamatic Innovations, I transformed global e-commerce journeys for TATA.com and Citi Bank. Designed a dynamic UI layer driven by a personalized recommendation engine, pushing real-time content based on behavioral analytics.
            </p>
            <div className="win-metrics">
              <span className="metric-chip">Behavioral Targeting</span>
              <span className="metric-chip">30% Viewer Retention</span>
              <span className="metric-chip">Real-time Personalization</span>
            </div>
          </div>

          <div className="win-card reveal">
            <div className="win-icon">🤖</div>
            <div className="win-domain">Conversational UX · NLP</div>
            <div className="win-title">Natural Language Interfaces</div>
            <p className="win-desc">
              Pioneered the integration of Natural Language Processing (NLP) into traditional dashboard environments. Instead of forcing users to hunt for data through nested menus, I designed conversational prompt interfaces that allow users to simply ask for complex data queries and receive visualized answers instantly.
            </p>
            <div className="win-metrics">
              <span className="metric-chip">NLP Integration</span>
              <span className="metric-chip">Zero-Click Analytics</span>
              <span className="metric-chip">10x Query Speed</span>
            </div>
          </div>

          <div className="win-card reveal">
            <div className="win-icon">📊</div>
            <div className="win-domain">Fintech · Predictive Modeling</div>
            <div className="win-title">Data-Driven Market Forecasting UIs</div>
            <p className="win-desc">
              Architected specialized interfaces for high-frequency trading and payroll solutions that ingest millions of data points. Designed a predictive forecasting UI that uses underlying AI models to simulate potential market outcomes, turning raw dense datasets into highly actionable, intuitive visual stories.
            </p>
            <div className="win-metrics">
              <span className="metric-chip">Data Storytelling</span>
              <span className="metric-chip">Predictive Forecasting</span>
              <span className="metric-chip">Dense Data Architecture</span>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
