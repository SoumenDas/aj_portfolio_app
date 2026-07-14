import React from 'react';
import { motion } from 'motion/react';
import { MousePointer2 } from 'lucide-react';
import { FloatingGlassShape, FloatingGradientSphere } from './Shapes';
import { DeviceMockup } from './DeviceMockup';

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-brand-dark overflow-hidden flex flex-col justify-center items-center text-white pt-20 pb-32">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#1ABCFE]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#A259FF]/20 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Abstract 3D Shapes (Glass & Spheres) */}
      <FloatingGlassShape size="120px" top="15%" left="20%" className="border-white/10 bg-white/5" duration={12} />
      <FloatingGlassShape size="80px" bottom="25%" right="15%" className="border-white/10 bg-white/5" delay={2} duration={15} />
      <FloatingGradientSphere size="100px" top="20%" right="25%" className="from-blue-500/40 to-purple-500/20 mix-blend-screen" duration={18} />
      <FloatingGradientSphere size="60px" bottom="30%" left="25%" className="from-orange-500/30 to-red-500/10 mix-blend-screen" delay={1} duration={14} />

      <div className="container max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium tracking-wide backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            UX CASE STUDY • 2023
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            Building an <span className="text-brand-blue">End to End</span> Stop Loss Application
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 font-medium"
          >
            UX Design | Development
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            <div className="flex flex-col gap-1 border-l-2 border-brand-blue pl-4">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Role</span>
              <span className="text-sm font-semibold">Lead UX Designer</span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-brand-blue pl-4">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Duration</span>
              <span className="text-sm font-semibold">6 Months</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-4"
          >
            {['Healthcare', 'Insurance', 'Enterprise B2B'].map((tag, i) => (
              <span key={tag} className={`px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md ${i === 0 ? 'bg-brand-blue text-brand-dark' : 'bg-white/10 text-white border border-white/20'}`}>
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Hero Image/Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-purple-500/20 blur-[80px] rounded-full" />
           <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-4 shadow-2xl flex items-center justify-center aspect-[4/3] overflow-hidden">
             {/* Abstract 3D composition placeholder - Since we don't have the real 3d asset, we use a nice splash image */}
              <img src="/assets/stoploss/hero-image.png" alt="Stop Loss Application Dashboard" className="w-full h-full object-cover rounded-[1.5rem] shadow-xl" />
           </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-[10px] tracking-widest uppercase font-bold"
      >
        Scroll to Explore
        <div className="w-5 h-8 rounded-full border border-slate-500 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1.5 bg-slate-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
