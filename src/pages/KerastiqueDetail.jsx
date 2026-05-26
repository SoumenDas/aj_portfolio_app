import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KerastiqueDetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionStyle = { maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 6rem' };
  const cardStyle = { background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '3rem', borderRadius: '24px', backdropFilter: 'blur(10px)' };
  const titleStyle = { fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 'bold' };

  const iPadFrameStyle = {
    border: '14px solid #111',
    borderRadius: '36px',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7), inset 0 0 0 2px #333',
    overflow: 'hidden',
    position: 'relative',
    background: '#000',
    margin: '0 auto',
    width: '100%',
    maxWidth: '800px'
  };

  const iPadScreenStyle = {
    width: '100%',
    height: '700px',
    overflowY: 'auto',
    overflowX: 'hidden',
    background: '#fff' // In case image has transparency or is short
  };

  return (
    <main className="hero-mesh" style={{ minHeight: '100vh', paddingTop: '100px', color: 'var(--text-primary)', paddingBottom: '4rem' }}>
      {/* Back Button */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <button 
          onClick={() => navigate(-1)} 
          style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            border: '1px solid var(--glass-border)', 
            color: 'var(--text-secondary)', 
            padding: '0.6rem 1.5rem', 
            borderRadius: '30px', 
            cursor: 'pointer',
            marginBottom: '4rem',
            display: 'inline-block',
            transition: 'background 0.2s',
            backdropFilter: 'blur(10px)'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
        >
          &larr; Back to Work
        </button>
      </div>

      {/* Hero Section */}
      <section style={{ ...sectionStyle, textAlign: 'center' }}>
        <h4 style={{ color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>AI-Driven UX Case Study</h4>
        <h1 style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Kerastique
        </h1>
        <p style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '1rem' }}>Premium Hair Care Brand | E-commerce Platform</p>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 4rem', lineHeight: '1.6' }}>
          Hair Care Revolution: Transforming product discovery with personalized AI recommendations for salon artists and beauty enthusiasts.
        </p>
        
        {/* Metadata Banner */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', ...cardStyle }}>
          <div>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '2rem', marginBottom: '0.5rem' }}>⏱️</h4>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>8 Weeks</p>
            <p style={{ color: 'var(--text-secondary)' }}>Project Duration</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '2rem', marginBottom: '0.5rem' }}>👥</h4>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>2 Personas</p>
            <p style={{ color: 'var(--text-secondary)' }}>User Research</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '2rem', marginBottom: '0.5rem' }}>🗺️</h4>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>5 Stages</p>
            <p style={{ color: 'var(--text-secondary)' }}>User Journey</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '2rem', marginBottom: '0.5rem' }}>✨</h4>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Lead UX</p>
            <p style={{ color: 'var(--text-secondary)' }}>My Role</p>
          </div>
        </div>
      </section>

      {/* Discovery Phase */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Discovery Phase</h2>
        <div style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>Primary Goal</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Launch premium hair care brand (KERASTIQUE) with exceptionally high quality, technology & research-driven formulations to compete with existing local and overseas brands PAN India.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Market Opportunity</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Expansion to existing business of personal care and cosmetics category, launching specialized hair care range for specific treatments and hair care issues.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Key Differentiator</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Path-breaking technology in hair care addressing current shortcomings of existing products, providing potent hair rejuvenation & long-lasting fortifying effects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Define Phase: Problem vs Solution */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>The Challenge & Solution</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#ef4444' }}>⚠️ Pain Points</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
              <li>Wasting hours in Mumbai traffic to reach wholesale shops</li>
              <li>Overwhelming product choices without proper guidance</li>
              <li>Lack of educational resources about product usage</li>
              <li>No personalized recommendations for different hair types</li>
              <li>Difficulty tracking loyalty points and rewards</li>
            </ul>
          </div>
          
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#22c55e' }}>💡 Our Solutions</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
              <li>🤖 AI-powered hair diagnosis survey</li>
              <li>🎯 Smart product recommendations engine</li>
              <li>📚 Video tutorials and educational content</li>
              <li>✨ Personalized product matching system</li>
              <li>🎁 Gamified loyalty rewards program</li>
            </ul>
            <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '12px', border: '1px solid rgba(34, 197, 94, 0.2)', color: '#4ade80', fontWeight: 'bold' }}>
              Result: 40% reduction in decision time ⚡
            </div>
          </div>
        </div>
      </section>

      {/* User Research: Personas */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>User Research: Meet Our Users</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
          {/* Persona 1 */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ fontSize: '3rem' }}>💼</div>
              <div>
                <h3 style={{ fontSize: '1.8rem', margin: 0 }}>Poonam Bhawar</h3>
                <p style={{ color: 'var(--accent-blue)', margin: 0 }}>Salon Artist • Age 31 • Navi Mumbai</p>
              </div>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Primary Goal</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Find quality products quickly without traveling to wholesale shops.</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Main Frustration</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Time spent in Mumbai traffic & lack of product research resources.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '0.5rem' }}>Needs</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Efficiency & product education (B2B Focus).</p>
            </div>
          </div>

          {/* Persona 2 */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ fontSize: '3rem' }}>💻</div>
              <div>
                <h3 style={{ fontSize: '1.8rem', margin: 0 }}>Nikita Patil</h3>
                <p style={{ color: 'var(--accent-blue)', margin: 0 }}>IT Professional • Age 28 • Navi Mumbai</p>
              </div>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Primary Goal</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Maintain healthy hair with quality products without time investment.</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Main Frustration</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Busy schedule, public transport reliance, limited product awareness.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '0.5rem' }}>Needs</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Convenience & home education (B2C Focus).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Mapping */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Experience Mapping</h2>
        <div style={{ ...cardStyle, overflowX: 'auto' }}>
          <div style={{ minWidth: '800px', display: 'flex', justifyContent: 'space-between', padding: '2rem 0', borderBottom: '1px solid var(--glass-border)' }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>1️⃣</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Login</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Multiple sign-in methods</p>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>2️⃣</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Survey</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>AI hair diagnosis</p>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>3️⃣</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Browse</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>View exact products</p>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>4️⃣</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Select</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Add to cart / compare</p>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>5️⃣</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Purchase</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>UPI/Card payments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Architecture */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Information Architecture</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🏠 Home Page</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1rem' }}>
              <li>Brand story & Hero banners</li>
              <li>Product videos & demos</li>
              <li>Shop by hair type</li>
              <li>Loyalty points info</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🛍️ Product Pages</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1rem' }}>
              <li>Detailed descriptions</li>
              <li>Secondary category filters</li>
              <li>Related products</li>
              <li>Reviews & ratings</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🎁 Loyalty Program</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1rem' }}>
              <li>Earn points via quizzes</li>
              <li>Discount coupons & perks</li>
              <li>VIP membership tiers</li>
              <li>SMS enrollment</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📚 Educational</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1rem' }}>
              <li>Product demonstration videos</li>
              <li>Hair care tutorials</li>
              <li>Theory & USP explanations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AI in UX Process */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>AI Integration in the UX Process</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🧠</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--accent-blue)' }}>Research & Synthesis</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Leveraged LLMs to rapidly process user interview data, extract key pain points, and synthesize the dual B2B/B2C personas effectively.</p>
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎨</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#a5b4fc' }}>Visual Ideation</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Used Generative AI tools like Midjourney to quickly prototype mood boards, brand aesthetics, and high-fidelity conceptual imagery for the beauty space.</p>
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✍️</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#22c55e' }}>UX Copywriting</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Utilized AI for generating realistic, empathetic product descriptions and tailoring the tone-of-voice to resonate with both Salon Artists and IT Professionals.</p>
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚙️</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#ef4444' }}>Core Feature Design</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Designed the logic and UI flows for the 'AI Hair Diagnosis' engine, bridging the gap between complex algorithmic outputs and user-friendly interfaces.</p>
          </div>
        </div>
      </section>

      {/* Project Impact */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Project Impact</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div style={{ textAlign: 'center', background: 'var(--glass-bg)', padding: '3rem 2rem', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
            <h1 style={{ fontSize: '3rem', color: 'var(--accent-blue)', marginBottom: '1rem' }}>40%</h1>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Faster Selection</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>AI-driven hair diagnosis reduces product selection time.</p>
          </div>
          <div style={{ textAlign: 'center', background: 'var(--glass-bg)', padding: '3rem 2rem', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
            <h1 style={{ fontSize: '3rem', color: '#a5b4fc', marginBottom: '1rem' }}>100%</h1>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>User Focused</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Video tutorials empower users with deep product knowledge.</p>
          </div>
          <div style={{ textAlign: 'center', background: 'var(--glass-bg)', padding: '3rem 2rem', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
            <h1 style={{ fontSize: '3rem', color: '#22c55e', marginBottom: '1rem' }}>35%</h1>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Repeat Purchases</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Gamified loyalty program increases overall engagement.</p>
          </div>
        </div>
      </section>

      {/* Design Tokens & Style Guide */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Design Tokens & AI Style Generation</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
          To maintain a premium, accessible aesthetic, we leveraged AI tools to analyze competitive beauty platforms and generate a mathematically accessible color palette. This process ensured high contrast ratios for aging users while maintaining brand elegance.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* Color Palette Tokens */}
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--accent-blue)' }}>Color Palette</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '2rem' }}>
              {[
                { name: 'Dark/Primary', hex: '#111827' },
                { name: 'Secondary Pink', hex: '#F9A8D4' },
                { name: 'Tertiary Sand', hex: '#FDE047' },
                { name: 'Body Text', hex: '#4B5563' },
                { name: 'Success', hex: '#10B981' },
                { name: 'Danger', hex: '#EF4444' },
                { name: 'Warning', hex: '#F59E0B' }
              ].map((color, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ width: '80px', height: '80px', margin: '0 auto 1rem', background: color.hex, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)' }}></div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>{color.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{color.hex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Typography Tokens */}
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#a5b4fc' }}>Typography: Roboto</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div>
                <h1 style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 800, fontSize: '4rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Aa</h1>
                <h4 style={{ marginBottom: '0.5rem' }}>Roboto Bold</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Primary Headings & Titles</p>
              </div>
              <div>
                <h1 style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '4rem', marginBottom: '1rem' }}>Aa</h1>
                <h4 style={{ marginBottom: '0.5rem' }}>Roboto Regular</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Body Copy & Descriptions</p>
              </div>
            </div>
          </div>

          {/* Recreated UI Components */}
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '3rem', color: 'var(--accent-blue)' }}>UI Components & Elements</h3>
            
            {/* Buttons */}
            <div style={{ marginBottom: '4rem' }}>
              <h4 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Buttons</h4>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <button style={{ background: '#111827', color: '#fff', padding: '0.8rem 2rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)', fontWeight: 'bold' }}>Primary Action</button>
                <button style={{ background: '#F9A8D4', color: '#111827', padding: '0.8rem 2rem', borderRadius: '30px', border: 'none', fontWeight: 'bold' }}>Secondary Action</button>
                <button style={{ background: 'transparent', color: 'var(--text-primary)', padding: '0.8rem 2rem', borderRadius: '30px', border: '2px solid var(--text-primary)', fontWeight: 'bold' }}>Outline Button</button>
              </div>
            </div>

            {/* Snackbars */}
            <div style={{ marginBottom: '4rem' }}>
              <h4 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Snackbars / Alerts</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #EF4444', padding: '1rem', borderRadius: '8px' }}>
                   <p style={{ color: '#EF4444', fontWeight: 'bold', marginBottom: '0.2rem' }}>Error Message</p>
                   <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>A system error occurred during diagnosis. Please try again.</p>
                </div>
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10B981', padding: '1rem', borderRadius: '8px' }}>
                   <p style={{ color: '#10B981', fontWeight: 'bold', marginBottom: '0.2rem' }}>Success Message</p>
                   <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Hair profile updated and saved successfully!</p>
                </div>
                <div style={{ background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #F59E0B', padding: '1rem', borderRadius: '8px' }}>
                   <p style={{ color: '#F59E0B', fontWeight: 'bold', marginBottom: '0.2rem' }}>Warning Message</p>
                   <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Please complete all required fields to continue.</p>
                </div>
              </div>
            </div>

            {/* Inputs & Form Elements */}
            <div>
              <h4 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Input Fields</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Standard Input</label>
                  <input type="text" placeholder="Enter text..." style={{ width: '100%', padding: '1rem', background: 'transparent', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff' }} disabled />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#10B981' }}>Valid Input</label>
                  <input type="text" value="john@example.com" style={{ width: '100%', padding: '1rem', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid #10B981', borderRadius: '8px', color: '#fff' }} disabled />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#EF4444' }}>Error Input</label>
                  <input type="text" value="Invalid email format" style={{ width: '100%', padding: '1rem', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid #EF4444', borderRadius: '8px', color: '#fff' }} disabled />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Design Showcase / UI Screens */}
      <section style={{ ...sectionStyle, textAlign: 'center' }}>
        <h2 style={titleStyle}>Design Showcase</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.2rem' }}>High-fidelity interactive screens designed for the KERASTIQUE platform.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--accent-blue)' }}>Home / Landing Page</h3>
            <div style={iPadFrameStyle}>
              {/* Home indicator bar at bottom */}
              <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '120px', height: '5px', background: 'rgba(255,255,255,0.5)', borderRadius: '10px', zIndex: 10 }}></div>
              <div style={iPadScreenStyle}>
                <img src="/assets/images/kerastique/media__1778803158368.jpg" alt="Home Landing Page" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#a5b4fc' }}>Product Discovery & Filters</h3>
            <div style={iPadFrameStyle}>
              <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '120px', height: '5px', background: 'rgba(255,255,255,0.5)', borderRadius: '10px', zIndex: 10 }}></div>
              <div style={iPadScreenStyle}>
                <img src="/assets/images/kerastique/media__1778803158738.jpg" alt="Product Listing Page" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#22c55e' }}>Brand Story & About</h3>
            <div style={iPadFrameStyle}>
              <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '120px', height: '5px', background: 'rgba(255,255,255,0.5)', borderRadius: '10px', zIndex: 10 }}></div>
              <div style={iPadScreenStyle}>
                <img src="/assets/images/kerastique/media__1778803297375.jpg" alt="About Page" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
             <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Authentication Flow</h3>
                <div style={{ ...iPadFrameStyle, maxWidth: '100%' }}>
                  <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '5px', background: 'rgba(255,255,255,0.5)', borderRadius: '10px', zIndex: 10 }}></div>
                  <div style={{ ...iPadScreenStyle, height: '400px' }}>
                    <img src="/assets/images/kerastique/media__1778803214396.jpg" alt="Login Modal" style={{ width: '100%', display: 'block' }} />
                  </div>
                </div>
             </div>
             <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Contact & Support</h3>
                <div style={{ ...iPadFrameStyle, maxWidth: '100%' }}>
                  <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '5px', background: 'rgba(255,255,255,0.5)', borderRadius: '10px', zIndex: 10 }}></div>
                  <div style={{ ...iPadScreenStyle, height: '400px' }}>
                    <img src="/assets/images/kerastique/media__1778803276595.jpg" alt="Contact Us" style={{ width: '100%', display: 'block' }} />
                  </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* Footer / CTA */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Ready to transform your digital experience?</h3>
        <button onClick={() => navigate('/#contact')} className="btn btn-primary" style={{ background: 'var(--accent-blue)', color: 'white', padding: '1rem 2rem', borderRadius: '30px', fontSize: '1.1rem', cursor: 'pointer', border: 'none', fontWeight: 'bold' }}>Let's Talk</button>
      </section>

    </main>
  );
};

export default KerastiqueDetail;
