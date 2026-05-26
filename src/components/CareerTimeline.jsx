import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const careerData = [
  {
    id: "citiustech_senior_lead",
    icon: "🏥",
    company: "CitiusTech",
    role: "Senior Lead User Experience Designer",
    period: "Apr 2026 - Present · Bengaluru, Karnataka, India",
    highlights: ["Service Design, User Experience Design (UED) and +7 skills"]
  },
  {
    id: "citiustech_deputy",
    icon: "🏥",
    company: "CitiusTech",
    role: "Deputy Manager",
    period: "Jun 2025 - May 2026 · Pune District, Maharashtra, India",
    highlights: ["Process Design, Application Development and +9 skills"]
  },
  {
    id: "citiustech_assistant",
    icon: "🏥",
    company: "CitiusTech",
    role: "Assistant Manager",
    period: "Jul 2022 - Jun 2025 · Pune District, Maharashtra, India",
    highlights: ["Service Design, Graphic Design Principles and +6 skills"]
  },
  {
    id: "cognizant",
    icon: "💻",
    company: "Cognizant",
    role: "Sr User Experience Designer",
    period: "Aug 2021 - Jun 2022 · Pune District, Maharashtra, India",
    highlights: ["Service Design, Graphic Design Principles and +6 skills"]
  },
  {
    id: "accenture",
    icon: "⚡",
    company: "Accenture",
    role: "User Experience Designer",
    period: "Feb 2020 - Jul 2021 · Pune Division, Maharashtra, India",
    highlights: ["Service Design, Graphic Design Principles and +7 skills"]
  },
  {
    icon: "⚡",
    company: "Accenture",
    role: "User Interface Designer",
    period: "Jun 2019 - Feb 2020",
    highlights: ["Service Design, Graphic Design Principles and +7 skills"]
  },
  {
    id: "tcs",
    icon: "🏢",
    company: "Tata Consultancy Services",
    role: "Visual Designer",
    period: "Jun 2017 - Oct 2018 · Pune, Maharashtra, India",
    highlights: [
      "Responsible for converting wireframes into visual designs",
      "Service Design, Graphic Design Principles and +7 skills"
    ]
  },
  {
    id: "dreamatic",
    icon: "🎨",
    company: "Dreamatic Innovations Pvt Ltd",
    role: "Graphic Designer & Visualiser",
    period: "May 2016 - May 2017",
    highlights: ["Service Design, Graphic Design Principles and +4 skills"]
  }
];

const CareerTimeline = () => {
  return (
    <section id="career" className="page-section" style={{ marginTop: '5rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 className="section-title">Professional Timeline</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '4rem', lineHeight: '1.6' }}>
          From Visual Design to Senior Lead UX Designer. Years of compounding craft building enterprise-scale experiences. 
        </p>
        
        <div style={{ position: 'relative', paddingLeft: '3rem' }}>
          {/* Vertical Line */}
          <div style={{ position: 'absolute', left: '15px', top: '0', bottom: '0', width: '2px', background: 'var(--glass-border)', zIndex: 0 }}></div>

          {careerData.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ position: 'relative', marginBottom: '3rem' }}
            >
              {/* Dot Icon */}
              <div style={{ 
                position: 'absolute', 
                left: '-3rem', 
                top: '24px', 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%', 
                background: 'var(--glass-bg)', 
                border: `1px solid var(--glass-border)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                zIndex: 2,
                backdropFilter: 'blur(10px)',
                transform: 'translateY(-50%)'
              }}>
                {item.icon}
              </div>
              
              <Link to={`/career/${item.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                <motion.div 
                   className="win-card"
                   style={{ backdropFilter: 'blur(10px)', width: '100%', position: 'relative' }}
                >
                  <div style={{ color: 'var(--accent-blue)', fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.company}</div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    {item.role}
                  </h3>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    {item.period}
                  </div>
                  
                  <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{highlight}</li>
                    ))}
                  </ul>

                  <div style={{ position: 'absolute', right: '1.5rem', top: '1.5rem', color: 'var(--accent-blue)', opacity: 0.8, fontSize: '1.2rem' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
