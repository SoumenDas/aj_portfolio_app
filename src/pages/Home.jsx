import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import About from '../components/About';
import Skills from '../components/Skills';
import Tools3D from '../components/Tools3D';
import CareerTimeline from '../components/CareerTimeline';

const ParallaxSection = ({ children, offset = 50 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  
  return (
    <div ref={ref} style={{ position: 'relative', zIndex: 1 }}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

const Home = () => {
  return (
    <main style={{ overflow: 'hidden' }}>
      {/* Background Noise for depth */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 80%)', zIndex: 0 }}></div>
      
      <Hero />
      
      <ParallaxSection offset={30}>
        <Impact />
      </ParallaxSection>
      
      <ParallaxSection offset={20}>
        <About />
      </ParallaxSection>
      
      <ParallaxSection offset={30}>
        <Skills />
      </ParallaxSection>

      <ParallaxSection offset={20}>
        <Tools3D />
      </ParallaxSection>
      
      <ParallaxSection offset={30}>
        <CareerTimeline />
      </ParallaxSection>
    </main>
  );
};

export default Home;
