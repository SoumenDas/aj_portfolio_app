import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allKeywords = [
  "Enterprise UX Architecture",
  "Quantitative Design Impact",
  "Design-to-Code Prototyping",
  "Design Systems & Scalability",
  "Complex Data Visualization",
  "Product Lifecycle Ownership",
  "FinTech & Clinical Workflows",
  "Vibecoding & Rapid Simulation",
  "Legacy-to-Cloud Modernization",
  "Cross-Functional Leadership"
];

const categories = [
  { id: "all", label: "All Achievements" },
  { id: "clinical-ux", label: "Clinical & Enterprise UX" },
  { id: "vibecoding-ai", label: "Vibecoding & AI" },
  { id: "business-roi", label: "Business ROI & Cost" },
  { id: "deploy-systems", label: "Deployments & Systems" }
];

const achievementsData = [
  {
    id: "quantitative-workflow",
    pillar: "clinical-ux",
    category: "Clinical & Enterprise UX",
    categoryIcon: "🧠",
    title: "Quantitative Workflow Optimization & Cognitive Reduction",
    description: "Architected data-dense enterprise applications and clinical decision support for high-stakes healthcare (Evicore Cigna, CitiusTech), slashing user task-completion time by 35%, cutting clinician cognitive load by 35%, and driving a +28% increase in daily active user retention.",
    metrics: [
      { label: "Task Time & Cognitive Load", value: "-35%", type: "positive" },
      { label: "DAU User Retention", value: "+28%", type: "positive" }
    ],
    chips: [
      "Quantitative Design Impact",
      "FinTech & Clinical Workflows",
      "Complex Data Visualization"
    ],
    accentColor: "var(--accent-blue)",
    glowColor: "rgba(0, 210, 255, 0.15)"
  },
  {
    id: "legacy-modernization",
    pillar: "business-roi",
    category: "Cost & Scale Modernization",
    categoryIcon: "💰",
    title: "Legacy-to-Cloud Modernization & Cost Reduction",
    description: "Modernized fragmented legacy monoliths into unified, design-system-powered cloud web platforms, eliminating redundant operational steps and saving enterprise stakeholders an estimated $1.2M annually in manual overhead.",
    metrics: [
      { label: "Annual Overhead Saved", value: "$1.2M", type: "positive" },
      { label: "Manual Steps Overhead", value: "Zero Overhead", type: "neutral" }
    ],
    chips: [
      "Legacy-to-Cloud Modernization",
      "Enterprise UX Architecture",
      "Design Systems & Scalability"
    ],
    accentColor: "var(--accent-purple)",
    glowColor: "rgba(157, 78, 221, 0.15)"
  },
  {
    id: "vibecoding-prototyping",
    pillar: "vibecoding-ai",
    category: "Vibecoding & Rapid Simulation",
    categoryIcon: "🚀",
    title: "Code-Adjacent Prototyping (\"Vibecoding\") & Design Tokens",
    description: "Leveraged rapid, functional prototyping and programmatic design-token engines to simulate live data queries and complex user interactions directly in code, eliminating design-to-engineering ambiguity and slashing review cycles by 50%.",
    metrics: [
      { label: "Review & Sign-Off Cycles", value: "-50%", type: "positive" },
      { label: "Data Query Simulation", value: "Live Code", type: "neutral" }
    ],
    chips: [
      "Vibecoding & Rapid Simulation",
      "Design-to-Code Prototyping",
      "Design Systems & Scalability"
    ],
    accentColor: "var(--accent-blue)",
    glowColor: "rgba(0, 210, 255, 0.15)"
  },
  {
    id: "revenue-roi",
    pillar: "business-roi",
    category: "Commercial & Conversion Growth",
    categoryIcon: "📈",
    title: "Commercial ROI & Conversion Funnel Acceleration",
    description: "Aligned complex multi-tier interface ecosystems with core business KPIs across global financial platforms, accelerating institutional deal-closure velocity and increasing critical conversion funnels by +22%.",
    metrics: [
      { label: "Funnel Conversion Lift", value: "+22%", type: "positive" },
      { label: "Deal-Closure Velocity", value: "Accelerated", type: "neutral" }
    ],
    chips: [
      "FinTech & Clinical Workflows",
      "Enterprise UX Architecture",
      "Quantitative Design Impact"
    ],
    accentColor: "var(--accent-purple)",
    glowColor: "rgba(157, 78, 221, 0.15)"
  },
  {
    id: "end-to-end-deployment",
    pillar: "deploy-systems",
    category: "0→1 Product Deployment",
    categoryIcon: "🛠️",
    title: "Full-Lifecycle Ownership & Zero-Downtime Releases",
    description: "Owned complete 0→1 product lifecycle from generative ethnographic research to zero-downtime production deployment, coordinating cross-functional roadmaps across engineering, QA, and executive leadership for mission-critical software.",
    metrics: [
      { label: "Production Deployment", value: "Zero Downtime", type: "positive" },
      { label: "Lifecycle Execution", value: "0→1 Full Scope", type: "neutral" }
    ],
    chips: [
      "Product Lifecycle Ownership",
      "Cross-Functional Leadership",
      "Enterprise UX Architecture"
    ],
    accentColor: "var(--accent-blue)",
    glowColor: "rgba(0, 210, 255, 0.15)"
  },
  {
    id: "global-recognition",
    pillar: "clinical-ux",
    category: "Global Industry Distinction",
    categoryIcon: "🏆",
    title: "Award-Winning Digital Banking & Market Visualization",
    description: "Directed vision and interaction architecture for premier digital banking platforms and high-frequency trading dashboards (Deutsche Bank, US Banking), securing international design acclaim including the prestigious Red Dot Award (2018).",
    metrics: [
      { label: "International Distinction", value: "Red Dot 2018", type: "positive" },
      { label: "Global Banking Scale", value: "Tier-1 Adoption", type: "neutral" }
    ],
    chips: [
      "Enterprise UX Architecture",
      "Complex Data Visualization",
      "FinTech & Clinical Workflows"
    ],
    accentColor: "var(--accent-purple)",
    glowColor: "rgba(157, 78, 221, 0.15)"
  },
  {
    id: "agentic-genai",
    pillar: "vibecoding-ai",
    category: "Agentic & GenAI Innovation",
    categoryIcon: "🤖",
    title: "Agentic UX & Conversational Natural Language Workflows",
    description: "Embedded Generative AI and NLP into traditional dashboard ecosystems (Call Center Manager, Microsoft Teams), replacing tedious multi-click drilldowns with instant conversational querying that yielded a 10x acceleration in query speed and a 40% reduction in workflow latency.",
    metrics: [
      { label: "Query Speed Acceleration", value: "10x Faster", type: "positive" },
      { label: "Operational Workflow Latency", value: "-40%", type: "positive" }
    ],
    chips: [
      "Quantitative Design Impact",
      "Vibecoding & Rapid Simulation",
      "Complex Data Visualization"
    ],
    accentColor: "var(--accent-blue)",
    glowColor: "rgba(0, 210, 255, 0.15)"
  },
  {
    id: "design-systems-cicd",
    pillar: "deploy-systems",
    category: "DesignOps & Token Automation",
    categoryIcon: "📐",
    title: "Intelligent Design Systems & Token CI/CD Pipelines",
    description: "Architected cross-platform design token systems synchronized with developer CI/CD pipelines, automating component parity, reducing design-to-production iteration friction by 35%, and ensuring mathematical consistency across millions of screens.",
    metrics: [
      { label: "Iteration Cycle Reduction", value: "-35%", type: "positive" },
      { label: "Code Token Synchronization", value: "100% Automated", type: "neutral" }
    ],
    chips: [
      "Design Systems & Scalability",
      "Design-to-Code Prototyping",
      "Cross-Functional Leadership"
    ],
    accentColor: "var(--accent-purple)",
    glowColor: "rgba(157, 78, 221, 0.15)"
  }
];

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedChip, setSelectedChip] = useState(null);

  const handleChipClick = (chip) => {
    setSelectedChip(prev => prev === chip ? null : chip);
  };

  const filteredAchievements = achievementsData.filter(item => {
    const matchesCategory = activeCategory === "all" || item.pillar === activeCategory;
    const matchesChip = !selectedChip || item.chips.includes(selectedChip);
    return matchesCategory && matchesChip;
  });

  return (
    <section id="achievements" className="page-section hero-mesh" style={{ position: 'relative', overflow: 'visible', paddingTop: '4rem', paddingBottom: '6rem' }}>
      <span id="impact" style={{ position: 'absolute', top: '-100px', left: 0 }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <h2 className="section-title" style={{ textAlign: 'left', borderBottom: 'none', marginBottom: '1rem', paddingBottom: '0', fontSize: '3rem' }}>
            Key Achievements
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '960px', lineHeight: '1.7', margin: 0 }}>
            Proven record of transforming complex enterprise landscapes through calculative UX optimization, code-adjacent vibecoding, zero-downtime full-lifecycle deployments, and measurable financial ROI.
          </p>
        </motion.div>

        {/* Pillar Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
            alignItems: 'center'
          }}
        >
          {categories.map((cat) => {
            const isCatActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '30px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  background: isCatActive
                    ? 'linear-gradient(90deg, var(--accent-blue), var(--accent-purple))'
                    : 'rgba(255, 255, 255, 0.04)',
                  border: isCatActive
                    ? '1px solid transparent'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  color: isCatActive ? '#fff' : 'var(--text-secondary)',
                  boxShadow: isCatActive ? '0 4px 20px rgba(0, 210, 255, 0.25)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isCatActive) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.color = '#fff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isCatActive) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Master Keywords Filter / Tray */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            marginBottom: '3rem',
            padding: '1.25rem 1.5rem',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02))',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {allKeywords.map((keyword, index) => {
              const isActive = selectedChip === keyword;
              return (
                <button
                  key={index}
                  onClick={() => handleChipClick(keyword)}
                  style={{
                    padding: '0.55rem 1.1rem',
                    borderRadius: '10px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    background: isActive
                      ? 'linear-gradient(90deg, #00d2ff, #9d4edd)'
                      : 'linear-gradient(135deg, rgba(0, 210, 255, 0.08), rgba(157, 78, 221, 0.08))',
                    border: isActive
                      ? '1px solid #ffffff'
                      : '1px solid rgba(0, 210, 255, 0.25)',
                    color: isActive ? '#0a0a0f' : '#f0f0f5',
                    boxShadow: isActive
                      ? '0 0 20px rgba(0, 210, 255, 0.5), 0 4px 12px rgba(0,0,0,0.3)'
                      : '0 2px 8px rgba(0,0,0,0.15)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transform: isActive ? 'scale(1.03)' : 'scale(1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'var(--accent-blue)';
                      e.currentTarget.style.boxShadow = '0 0 16px rgba(0, 210, 255, 0.35)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 210, 255, 0.18), rgba(157, 78, 221, 0.18))';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'rgba(0, 210, 255, 0.25)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 210, 255, 0.08), rgba(157, 78, 221, 0.08))';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  <span style={{ color: isActive ? '#0a0a0f' : 'var(--accent-blue)', fontSize: '0.75rem' }}>◆</span>
                  <span>{keyword}</span>
                  {isActive && <span style={{ fontSize: '0.75rem', fontWeight: '900' }}>✕</span>}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          layout
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem' }}
        >
          <AnimatePresence>
            {filteredAchievements.map((item, idx) => {
              const matchesSelectedChip = !selectedChip || item.chips.includes(selectedChip);

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background: 'var(--glass-bg)',
                    border: matchesSelectedChip && selectedChip
                      ? `1px solid ${item.accentColor}`
                      : '1px solid var(--glass-border)',
                    borderRadius: '16px',
                    padding: '2.2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(16px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                    boxShadow: matchesSelectedChip && selectedChip ? `0 8px 32px ${item.glowColor}` : '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                  className="win-card"
                >
                  {/* Top Accent Line */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: `linear-gradient(90deg, ${item.accentColor}, transparent)`
                    }}
                  />

                  {/* Top Row: Category and Index */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.2rem' }}>{item.categoryIcon}</span>
                        <span style={{
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: item.accentColor
                        }}>
                          {item.category}
                        </span>
                      </div>

                      {/* Numeric Index Tag */}
                      <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace' }}>
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '1.45rem',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      marginBottom: '1rem',
                      lineHeight: '1.3'
                    }}>
                      {item.title}
                    </h3>

                    {/* Narrative Body */}
                    <p style={{
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.65',
                      marginBottom: '1.8rem'
                    }}>
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Section: Metrics & Keyword Chips */}
                  <div>
                    {/* Metric Highlight Badges */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '0.75rem',
                      marginBottom: '1.5rem',
                      padding: '0.85rem 1rem',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '10px'
                    }}>
                      {item.metrics.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <div style={{
                            fontSize: '1.25rem',
                            fontWeight: '800',
                            color: metric.type === 'positive' ? 'var(--accent-blue)' : 'var(--text-primary)',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                          }}>
                            {metric.value}
                          </div>
                          <div style={{
                            fontSize: '0.75rem',
                            color: 'var(--text-secondary)',
                            marginTop: '0.2rem',
                            fontWeight: '500'
                          }}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Keyword Chips for this Achievement */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)', boxShadow: '0 0 8px var(--accent-blue)' }} />
                        Core Focus Areas & Skills:
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                        {item.chips.map((chip, cIdx) => {
                          const isChipActive = selectedChip === chip;
                          return (
                            <span
                              key={cIdx}
                              onClick={() => handleChipClick(chip)}
                              style={{
                                fontSize: '0.8rem',
                                fontWeight: '700',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                                background: isChipActive
                                  ? 'linear-gradient(90deg, rgba(0, 210, 255, 0.35), rgba(157, 78, 221, 0.35))'
                                  : 'linear-gradient(135deg, rgba(0, 210, 255, 0.1), rgba(157, 78, 221, 0.1))',
                                border: isChipActive
                                  ? '1.5px solid var(--accent-blue)'
                                  : '1px solid rgba(0, 210, 255, 0.28)',
                                color: isChipActive ? '#ffffff' : '#e6f7ff',
                                boxShadow: isChipActive
                                  ? '0 0 16px rgba(0, 210, 255, 0.45)'
                                  : '0 2px 6px rgba(0, 0, 0, 0.2)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.35rem'
                              }}
                              onMouseEnter={(e) => {
                                if (!isChipActive) {
                                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 210, 255, 0.22), rgba(157, 78, 221, 0.22))';
                                  e.currentTarget.style.borderColor = 'var(--accent-blue)';
                                  e.currentTarget.style.boxShadow = '0 0 14px rgba(0, 210, 255, 0.35)';
                                  e.currentTarget.style.transform = 'translateY(-2px)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isChipActive) {
                                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 210, 255, 0.1), rgba(157, 78, 221, 0.1))';
                                  e.currentTarget.style.borderColor = 'rgba(0, 210, 255, 0.28)';
                                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.2)';
                                  e.currentTarget.style.transform = 'translateY(0)';
                                }
                              }}
                            >
                              <span style={{ fontSize: '0.65rem', color: isChipActive ? '#fff' : 'var(--accent-blue)' }}>●</span>
                              {chip}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
