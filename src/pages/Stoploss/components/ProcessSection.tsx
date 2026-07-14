import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { Search, Lightbulb, PenTool, LayoutTemplate, Layers, Users2, Check } from 'lucide-react';

export const ProcessSection = () => {
  const steps = [
    { num: 1, title: 'Discover', subtitle: 'RESEARCH', icon: Search, color: 'text-blue-500', shadow: 'shadow-blue-500/20' },
    { num: 2, title: 'Define', subtitle: 'INSIGHTS', icon: Lightbulb, color: 'text-cyan-500', shadow: 'shadow-cyan-500/20' },
    { num: 3, title: 'Ideate', subtitle: 'SOLUTIONS', icon: PenTool, color: 'text-emerald-500', shadow: 'shadow-emerald-500/20' },
    { num: 4, title: 'Design', subtitle: 'CREATE', icon: LayoutTemplate, color: 'text-green-500', shadow: 'shadow-green-500/20' },
    { num: 5, title: 'UX Tool kit', subtitle: 'TOOLS', icon: Layers, color: 'text-teal-500', shadow: 'shadow-teal-500/20' },
    { num: 6, title: 'Dev Support', subtitle: 'SUPPORT', icon: Users2, color: 'text-indigo-500', shadow: 'shadow-indigo-500/20' },
  ];

  return (
    <div className="w-full relative z-10 py-20 max-w-6xl mx-auto px-6">
      <SectionHeader 
        subtitle="OUR PROCESS" 
        title="UX Methodology"
        description="A structured approach to solving complex design challenges"
      />
      
      <div className="relative mt-20">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-indigo-200 -translate-y-12 hidden md:block" />

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4 relative z-10">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-6 h-6 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 flex items-center justify-center mb-4 border border-white shadow-sm absolute -mt-8 bg-white z-20">
                {step.num}
              </div>
              <div className={`w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl flex items-center justify-center shadow-xl border border-white/60 mb-6 ${step.shadow} backdrop-blur-xl relative overflow-hidden group hover:-translate-y-2 transition-transform`}>
                <div className={`absolute inset-0 opacity-10 bg-current ${step.color}`} />
                <step.icon className={`w-8 h-8 md:w-10 md:h-10 ${step.color}`} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-slate-800 text-sm">{step.title}</h4>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-1">{step.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Design Process Deep Dive section replacing the dark "Our Approach" banner from PDF with detailed content */}
      <div className="mt-40">
        <SectionHeader 
          title="Design Process Deep Dive"
          description="From discovery to delivery, our systematic AI-First approach"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          {/* Discover */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-yellow-50/60 backdrop-blur-xl border border-yellow-100 p-8 rounded-[2rem] shadow-lg shadow-yellow-500/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/40 rounded-full blur-2xl -translate-y-10 translate-x-10" />
             <div className="text-6xl font-black text-yellow-100 mb-2 font-serif tracking-tighter">01</div>
             <div className="inline-block px-3 py-1 bg-[#8B4513]/10 text-[#8B4513] border border-[#8B4513]/20 text-[10px] font-bold rounded-full uppercase tracking-widest mb-4">Know the direction</div>
             <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">Discover <Search className="w-5 h-5 text-yellow-500"/></h3>
             <ul className="space-y-3 relative z-10">
               {["Project Kick off meetings", "Stakeholder & company vision", "Legacy app analysis", "AI-driven competitor analysis & synthesis"].map((t, i) => (
                 <li key={i} className="flex gap-3 bg-white/60 p-3 rounded-xl border border-white"><div className="mt-0.5 bg-yellow-500 text-white rounded-full p-0.5 shrink-0"><Check className="w-3 h-3"/></div><span className="text-sm font-medium text-slate-700">{t}</span></li>
               ))}
             </ul>
             <div className="mt-5 pt-4 border-t border-yellow-200/50 relative z-10">
               <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">AI-First Tools</div>
               <div className="flex flex-wrap gap-2">
                 {["ChatGPT", "Perplexity", "Miro Copilot"].map(tool => (
                   <span key={tool} className="px-2 py-1 bg-white/80 rounded-md text-[11px] font-bold text-slate-800 shadow-sm border border-white backdrop-blur-md">{tool}</span>
                 ))}
               </div>
             </div>
          </motion.div>

          {/* Define */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-blue-50/60 backdrop-blur-xl border border-blue-100 p-8 rounded-[2rem] shadow-lg shadow-blue-500/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/40 rounded-full blur-2xl -translate-y-10 translate-x-10" />
             <div className="text-6xl font-black text-blue-100 mb-2 font-serif tracking-tighter">02</div>
             <div className="inline-block px-3 py-1 bg-[#8B4513]/10 text-[#8B4513] border border-[#8B4513]/20 text-[10px] font-bold rounded-full uppercase tracking-widest mb-4">Know the insights</div>
             <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">Define <Lightbulb className="w-5 h-5 text-blue-500"/></h3>
             <ul className="space-y-3 relative z-10">
               {[
                 "Understanding business, user goals & User Flow", 
                 "Defining project scope", 
                 "Identify User Needs",
                 "Research Validation with stakeholders",
                 "Created IA & Task flow for application",
                 "AI clustering & thematic pattern recognition"
                ].map((t, i) => (
                 <li key={i} className="flex gap-3 bg-white/60 p-3 rounded-xl border border-white"><div className="mt-0.5 bg-blue-500 text-white rounded-full p-0.5 shrink-0"><Check className="w-3 h-3"/></div><span className="text-sm font-medium text-slate-700">{t}</span></li>
               ))}
             </ul>
             <div className="mt-5 pt-4 border-t border-blue-200/50 relative z-10">
               <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">AI-First Tools</div>
               <div className="flex flex-wrap gap-2">
                 {["Dovetail AI", "FigJam AI", "ChatGPT"].map(tool => (
                   <span key={tool} className="px-2 py-1 bg-white/80 rounded-md text-[11px] font-bold text-slate-800 shadow-sm border border-white backdrop-blur-md">{tool}</span>
                 ))}
               </div>
             </div>
          </motion.div>

           {/* Design */}
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-purple-50/60 backdrop-blur-xl border border-purple-100 p-8 rounded-[2rem] shadow-lg shadow-purple-500/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/40 rounded-full blur-2xl -translate-y-10 translate-x-10" />
             <div className="text-6xl font-black text-purple-100 mb-2 font-serif tracking-tighter">03</div>
             <div className="inline-block px-3 py-1 bg-purple-200/50 text-purple-800 text-[10px] font-bold rounded-full uppercase tracking-widest mb-4">Potential Solutions</div>
             <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">Design <PenTool className="w-5 h-5 text-purple-500"/></h3>
             <ul className="space-y-3 relative z-10">
               {[
                 "Created UX artefacts - Persona & IA",
                 "Created design style guide (IBX, Bootstrap, Custom)",
                 "A/B Testing to finalise style guide",
                 "Usability testing done with the client (Admin User)",
                 "AI-augmented generative UI & rapid prototyping"
                ].map((t, i) => (
                 <li key={i} className="flex gap-3 bg-white/60 p-3 rounded-xl border border-white"><div className="mt-0.5 bg-purple-500 text-white rounded-full p-0.5 shrink-0"><Check className="w-3 h-3"/></div><span className="text-sm font-medium text-slate-700">{t}</span></li>
               ))}
             </ul>
             <div className="mt-5 pt-4 border-t border-purple-200/50 relative z-10">
               <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">AI-First Tools</div>
               <div className="flex flex-wrap gap-2">
                 {["Figma AI", "Relume", "Midjourney", "Galileo AI"].map(tool => (
                   <span key={tool} className="px-2 py-1 bg-white/80 rounded-md text-[11px] font-bold text-slate-800 shadow-sm border border-white backdrop-blur-md">{tool}</span>
                 ))}
               </div>
             </div>
          </motion.div>

          {/* Dev Support */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-emerald-50/60 backdrop-blur-xl border border-emerald-100 p-8 rounded-[2rem] shadow-lg shadow-emerald-500/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/40 rounded-full blur-2xl -translate-y-10 translate-x-10" />
             <div className="text-6xl font-black text-emerald-100 mb-2 font-serif tracking-tighter">04</div>
             <div className="inline-block px-3 py-1 bg-emerald-200/50 text-emerald-800 text-[10px] font-bold rounded-full uppercase tracking-widest mb-4">Support Dev Team</div>
             <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">Dev Support <span className="font-mono text-emerald-500 text-sm tracking-tighter">&lt;/&gt;</span></h3>
             <ul className="space-y-3 relative z-10">
               {[
                 "Created Design Specification Document",
                 "Plugin demo for design to dev handover",
                 "Design Reviews",
                 "Quick resolution of dev queries",
                 "AI-assisted code hand-off & validation"
                ].map((t, i) => (
                 <li key={i} className="flex gap-3 bg-white/60 p-3 rounded-xl border border-white"><div className="mt-0.5 bg-emerald-500 text-white rounded-full p-0.5 shrink-0"><Check className="w-3 h-3"/></div><span className="text-sm font-medium text-slate-700">{t}</span></li>
               ))}
             </ul>
             <div className="mt-5 pt-4 border-t border-emerald-200/50 relative z-10">
               <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">AI-First Tools</div>
               <div className="flex flex-wrap gap-2">
                 {["Cursor", "GitHub Copilot", "Zeplin AI"].map(tool => (
                   <span key={tool} className="px-2 py-1 bg-white/80 rounded-md text-[11px] font-bold text-slate-800 shadow-sm border border-white backdrop-blur-md">{tool}</span>
                 ))}
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
