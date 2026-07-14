import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ContentSections } from './components/ContentSections';
import { ProcessSection } from './components/ProcessSection';
import { PersonaAndStyles } from './components/PersonaAndStyles';
import { SolutionsAndLearnings } from './components/SolutionsAndLearnings';
import { FloatingGlassShape, FloatingGradientSphere } from './components/Shapes';
import { ScrollToTopButton } from './components/ScrollToTopButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-brand-blue/30 selection:text-brand-dark relative">
      {/* Noise Texture Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <HeroSection />
      
      <main className="w-full overflow-hidden">
        <ContentSections />
        <ProcessSection />
        <PersonaAndStyles />
        <SolutionsAndLearnings />
      </main>

      {/* Footer */}
      <footer className="relative w-full h-[60vh] min-h-[400px] bg-brand-dark overflow-hidden flex flex-col justify-center items-center text-white border-t border-white/10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#1ABCFE]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#A259FF]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <FloatingGlassShape size="80px" top="20%" left="15%" className="border-white/10 bg-white/5" duration={12} delay={1} />
        <FloatingGlassShape size="100px" bottom="20%" right="15%" className="border-white/10 bg-white/5" duration={15} />
        <FloatingGradientSphere size="60px" top="50%" left="60%" className="from-orange-500/30 to-red-500/10 mix-blend-screen" duration={14} delay={2} />

        <div className="relative z-10 flex flex-col items-center">
          <div className="px-12 py-6 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl mb-8 flex flex-col items-center gap-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">THANK YOU!</h2>
            <p className="text-slate-400 text-sm font-medium">For taking the time to review this case study</p>
          </div>
          
          <div className="flex gap-2 items-center">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-brand-blue rounded-full" />
            <div className="w-2 h-2 rounded-full bg-brand-blue shadow-[0_0_10px_#1ABCFE]" />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-purple-500 rounded-full" />
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
}



