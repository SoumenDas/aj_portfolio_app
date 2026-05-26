import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const figmaSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 57"><path fill="%23F24E1E" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="%23A259FF" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v19H9.5A9.5 9.5 0 0 1 0 47.5z"/><path fill="%231ABCFE" d="M19 47.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="%230ACF83" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z"/><path fill="%23FF7262" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z"/><path fill="%23F24E1E" d="M19 0h9.5a9.5 9.5 0 1 1 0 19H19V0z"/></svg>`;
const sketchSvg = `data:image/svg+xml;utf8,<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="%23FDB300" d="M110.8 77H401.2L512 245.5L256 512L0 245.5L110.8 77Z"/><path fill="%23EA6C00" d="M256 512L512 245.5H352L256 512Z"/><path fill="%23FDAD00" d="M256 512L0 245.5H160L256 512Z"/><path fill="%23FDD231" d="M256 512L160 245.5H352L256 512Z"/><path fill="%23FDAD00" d="M160 245.5L110.8 77H256V245.5H160Z"/><path fill="%23FDD231" d="M352 245.5L401.2 77H256V245.5H352Z"/><path fill="%23FFFFFF" d="M160 245.5L256 77L352 245.5H160Z"/></svg>`;
const antigravitySvg = `data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" fill="none" stroke="%2300D2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`;
const geminiSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%238E75B2" stroke-width="2"><path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"/></svg>`;
const chatGptSvg = `data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="%2310A37F" d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.06 6.06 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9 6.06 6.06 0 0 0 10.27-2.17 5.98 5.98 0 0 0 4-2.9 6.05 6.05 0 0 0-.74-7.1zm-9.07 11.02a4.4 4.4 0 0 1-2.87-1.04l.14-.08 4.77-2.76a.8.8 0 0 0 .4-.69v-5.46l2.13 1.23c.02.01.04.04.04.07v4.26a4.43 4.43 0 0 1-4.6 4.47zm-6.28-2.58a4.41 4.41 0 0 1-1.22-2.81v-5.63L3.59 8.56a.04.04 0 0 0-.06.03v4.26a4.43 4.43 0 0 0 6.64 3.83l4.77 2.76a.8.8 0 0 1-.39.69L9.78 21.36c-.03.01-.06 0-.08-.03zm-1.84-6.42a4.41 4.41 0 0 1 1.22-2.81l4.88-2.82V1.95a.04.04 0 0 0-.02-.06L1.84 4.05a4.43 4.43 0 0 0-2.04 6.01l2.39 4.13a.8.8 0 0 1 0 .79L.07 19.12c-.02.02.01.05.04.04l4.98-2.88zm11.91-4.6a4.4 4.4 0 0 1 2.87 1.04l-.14.08-4.77 2.76a.8.8 0 0 0-.4.69v5.46l-2.13-1.23c-.02-.01-.04-.04-.04-.07V3.17a4.43 4.43 0 0 1 4.6 4.47zm6.28 2.58a4.41 4.41 0 0 1 1.22 2.81v5.63l2.13 1.23a.04.04 0 0 0 .06-.03V7.47a4.43 4.43 0 0 0-6.64-3.83l-4.77-2.76a.8.8 0 0 1 .39-.69l4.77-2.76c.03-.01.06 0 .08.03zm1.84 6.42a4.41 4.41 0 0 1-1.22 2.81l-4.88 2.82v4.25a.04.04 0 0 0 .02.06l4.88-2.81a4.43 4.43 0 0 0 2.04-6.01l-2.39-4.13a.8.8 0 0 1 0-.79l2.13-3.68c.02-.03-.01-.06-.04-.04L18.84 13.22zM12 15.63a3.63 3.63 0 1 1 0-7.26 3.63 3.63 0 0 1 0 7.26z"/></svg>`;
const createAdobe = (col, t) => `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="5" y="5" width="90" height="90" rx="20" fill="none" stroke="${encodeURIComponent(col)}" stroke-width="8"/><text x="50" y="65" font-family="sans-serif" font-weight="900" font-size="45" fill="${encodeURIComponent(col)}" text-anchor="middle">${t}</text></svg>`;

const tools = [
  { name: 'Figma', color: '#F24E1E', icon: figmaSvg },
  { name: 'Sketch', color: '#FDD231', icon: sketchSvg },
  { name: 'Antigravity', color: '#00D2FF', icon: '/assets/images/tools/antigravity.png' },
  { name: 'ChatGPT', color: '#10A37F', icon: '/assets/images/tools/chatgpt.png', size: '44px' },
  { name: 'Adobe XD', color: '#FF61F6', icon: createAdobe('#FF61F6', 'Xd') },
  { name: 'Gemini AI', color: '#8E75B2', icon: geminiSvg },
  { name: 'Photoshop', color: '#31A8FF', icon: createAdobe('#31A8FF', 'Ps') },
  { name: 'Illustrator', color: '#FF9A00', icon: createAdobe('#FF9A00', 'Ai') },
  { name: 'Premiere Pro', color: '#9999FF', icon: createAdobe('#9999FF', 'Pr') },
  { name: 'Dimension', color: '#00A56E', icon: createAdobe('#00A56E', 'Dn') }
];

const ToolCard = ({ tool }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        width: '120px',
        height: '120px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '20px',
        cursor: 'pointer',
        rotateX,
        rotateY,
        transformPerspective: 800,
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.1, background: 'rgba(255, 255, 255, 0.08)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <img src={tool.icon} alt={tool.name} style={{ width: tool.size || '40px', height: tool.size || '40px', marginBottom: '1rem', filter: `drop-shadow(0 0 10px ${tool.color}40)` }} />
      <span style={{ fontSize: '0.75rem', fontWeight: '500', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
        {tool.name}
      </span>
    </motion.div>
  );
};

const Tools3D = () => {
  return (
    <section id="tools" className="page-section" style={{ position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="section-title" style={{ marginBottom: '4rem', borderBottom: 'none' }}>Software & AI Stack</h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
          perspective: '1000px'
        }}>
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
            >
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools3D;
