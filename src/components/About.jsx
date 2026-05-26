import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="page-section hero-mesh">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        <h2 className="section-title" style={{ textAlign: 'left', borderBottom: 'none', marginBottom: '2rem', paddingBottom: '0' }}>About Me</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Left Column: Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.7', fontWeight: '400', position: 'sticky', top: '120px' }}>
            <p>
              Senior Lead User Experience Designer with over 9 years of experience in product design, visual communication, and design strategy, currently leading high-impact initiatives at CitiusTech. Specializing in workflow automation and human-centered design, the role focuses on launching and scaling intuitive digital solutions like the "Peak Performance" EdTech framework, enabling students to overcome remedial stigma through sophisticated, high-fidelity metaphors. Collaborated with cross-functional teams to drive operational efficiency, enhance user engagement, and reduce friction in complex healthcare and educational software.
            </p>
            <p>
              Dedicated to delivering data-driven solutions and fostering deep collaboration, enabling impactful product launches across Healthcare, Finance, and FMCG sectors. Expertise in interaction design, motion graphics, and rapid prototyping—leveraging AI and low-code acceleration—has significantly contributed to product performance and organizational growth. Committed to leveraging analytical skills and deep customer insights to build effective products that align with business goals while addressing intricate user needs.
            </p>
            <p>
              <strong>Leadership Philosophy:</strong> I firmly believe that the best products are built by empowered teams. As a manager and mentor, I focus on cultivating a culture of design excellence and cross-functional empathy. Whether I'm conducting architectural reviews with engineering leads or running workshops with junior designers, my goal is to elevate the entire organization's UX maturity and ensure our digital products are not just functional, but truly resonant.
            </p>
          </div>

          {/* Right Column: Pointer Boxes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            <div className="win-card" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent-blue)' }}>⚡️</span> Systems-Level UX Architecture
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                I don't just design interfaces; I architect scalable systems. By building the "Peak Performance" EdTech framework from the ground up, I created a foundation that standardizes complex pedagogical workflows into intuitive, high-fidelity digital experiences.
              </p>
            </div>

            <div className="win-card" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent-purple)' }}>📈</span> Design-to-Value Mapping
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                Every pixel must serve a purpose. I bridge the gap between user empathy and business outcomes, ensuring that digital solutions across Healthcare, Finance, and FMCG sectors move the needle on key performance metrics and organizational growth.
              </p>
            </div>

            <div className="win-card" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent-blue)' }}>⚙️</span> Workflow Orchestration & Automation
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                Specialized in "Zero-Friction" design, I transform fragmented, manual processes into unified automated workflows, significantly reducing cognitive load and operational errors in high-stakes healthcare environments.
              </p>
            </div>

            <div className="win-card" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent-purple)' }}>🧠</span> Psychological Reframing via Design
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                I leverage sophisticated visual metaphors to solve complex human problems, such as overcoming remedial learning stigma. My approach ensures that product design addresses deep-seated user emotions while maintaining functional efficiency.
              </p>
            </div>

            <div className="win-card" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent-blue)' }}>🚀</span> Rapid Prototyping & AI Integration
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                I compress the design-to-delivery lifecycle by integrating AI-driven tools and low-code acceleration. This allows for rapid experimentation and iterative testing without compromising on visual craft or interaction quality.
              </p>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
