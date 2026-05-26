import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "🗺️ DESIGN STRATEGY",
      skills: ["Product Roadmapping", "North Star Visioning", "Design-to-Value Mapping", "Competitive Intelligence", "Stakeholder Alignment", "0→1 Product Launch", "Systems Thinking"]
    },
    {
      title: "🤖 ADVANCED UX & AI",
      skills: ["AI Orchestration", "Agentic UX Design", "Human-AI Interaction (HAI)", "Prompt Engineering", "Multimodal Interfaces", "Predictive UX", "Ethical AI Design"]
    },
    {
      title: "⚙️ ARCHITECTURE & SYSTEMS",
      skills: ["Design Systems Governance", "Workflow Automation", "Information Architecture", "DesignOps", "Service Blueprinting", "Scalable Frameworks", "Enterprise SaaS"]
    },
    {
      title: "📈 DATA & RESEARCH",
      skills: ["Behavioral Analytics", "A/B Testing Strategy", "Qualitative Synthesis", "UX Metrics & KPIs", "Conversion Optimization", "Usability Benchmarking", "Cognitive Walkthroughs"]
    },
    {
      title: "🛠️ TOOLS & EXECUTION",
      skills: ["Advanced Figma (Dev Mode)", "Motion Graphics (AE)", "Rapid Prototyping", "Low-Code Acceleration", "Interaction Design", "High-Fidelity UI", "Visual Metaphors"]
    },
    {
      title: "🏬 DOMAIN EXPERTISE",
      skills: ["Healthcare Tech (HealthTech)", "EdTech Frameworks", "Fintech & Compliance", "FMCG Digital Strategy", "B2B Enterprise Software"]
    }
  ];

  return (
    <section id="skills" className="page-section hero-mesh" style={{ marginTop: '5rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 className="section-title">Skills & Domain Expertise</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '800px' }}>
          Breadth across the full design stack: strategy, execution, AI integration, and domain-specific leadership.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ 
                background: 'var(--glass-bg)', 
                border: '1px solid var(--glass-border)', 
                borderRadius: '20px', 
                padding: '2.5rem',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-blue)', marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    style={{ 
                      padding: '0.5rem 1rem', 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid rgba(255, 255, 255, 0.1)', 
                      borderRadius: '8px', 
                      color: 'var(--text-primary)', 
                      fontSize: '0.9rem',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.borderColor = 'var(--accent-blue)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
