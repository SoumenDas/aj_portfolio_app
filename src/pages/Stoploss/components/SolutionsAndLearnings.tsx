import React from 'react';
import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';
import { DeviceMockup } from './DeviceMockup';

export const SolutionsAndLearnings = () => {
  return (
    <div className="w-full relative z-10 py-20 bg-white/30 backdrop-blur-3xl border-t border-white/50">
      
      <div className="max-w-6xl mx-auto px-6 space-y-32">
        {/* Design Solutions */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Design Solutions</h2>
          
            <div className="bg-white/60 backdrop-blur-2xl border border-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50">
            <h3 className="text-lg font-bold text-brand-blue mb-8">Landing Page Redesign</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-red-600 mb-4 uppercase tracking-widest">Problems</h4>
                <ul className="space-y-4">
                  {[
                    "No obvious Call to Action",
                    "Keyboard Shortcuts were visible only on hover",
                    "No Visibility of system status"
                  ].map((p, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex gap-3 items-start p-4 bg-red-50/50 border border-red-100 rounded-xl hover:shadow-md hover:bg-white transition-all cursor-default"
                    >
                      <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">{p}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-emerald-600 mb-4 uppercase tracking-widest">Solutions</h4>
                <ul className="space-y-4">
                  {[
                    "Clear sections for Main Navigation, Search and Search Results",
                    "Evident Call to Action buttons",
                    "Intuitive flow for Primary Navigation"
                  ].map((s, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex gap-3 items-start p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl hover:shadow-md hover:bg-white transition-all cursor-default"
                    >
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">{s}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <div className="relative mx-auto w-full max-w-[800px] px-2 sm:px-6">
                {/* Macbook Display */}
                <div className="relative mx-auto bg-[#1e2022] rounded-t-[1.5rem] sm:rounded-t-[2rem] p-1.5 sm:p-2.5 pb-2 sm:pb-3 shadow-2xl border-t border-x border-[#333]">
                  {/* Camera hole */}
                  <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-black rounded-full z-10"></div>
                  
                  {/* Screen Content */}
                  <div className="relative overflow-hidden bg-white rounded-t-lg sm:rounded-t-xl rounded-b-sm h-[200px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                    <div className="absolute inset-0 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                      <img src="/assets/stoploss/home-page-screen.png" alt="Stop Loss Application Dashboard Home Page" className="w-full object-cover" />
                    </div>
                  </div>
                </div>
                
                {/* Macbook Base Component */}
                <div className="relative mx-auto -mt-[1px]">
                  {/* Top deck */}
                  <div className="h-2 sm:h-3 bg-[#cfd1d3] rounded-t-sm w-full mx-auto relative z-10 before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-white/60">
                    {/* Thumb notch */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[15%] sm:w-[12%] h-1 sm:h-1.5 bg-[#a3a5a7] rounded-b-lg shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)] flex justify-center">
                       <div className="w-[80%] h-[1px] bg-black/10 mt-0.5"></div>
                    </div>
                  </div>
                  {/* Front lip */}
                  <div className="h-1.5 sm:h-2.5 bg-[#9ca3af] rounded-b-[1rem] sm:rounded-b-[2rem] w-[104%] -left-[2%] relative z-0 mx-auto shadow-[0_15px_30px_rgba(0,0,0,0.25)] flex overflow-hidden">
                     <div className="w-full h-[1px] bg-white/20 mt-auto mb-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </section>

        {/* Flows - Create Contract / MGU List */}
        <section className="space-y-16">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6 }}
             className="bg-white/60 backdrop-blur-2xl border border-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 group hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500"
           >
              <h3 className="text-lg font-bold text-brand-blue mb-8">Design Solution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="relative overflow-hidden rounded-xl border border-slate-200 shadow-inner group/img">
                   <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity z-10">
                     <h4 className="text-xs font-bold text-white uppercase tracking-widest drop-shadow-md">Before</h4>
                   </div>
                   <h4 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest px-1 block group-hover/img:hidden transition-opacity">Before</h4>
                   <img src="/assets/stoploss/before.png" alt="Legacy UI" className="w-full object-contain transform group-hover/img:scale-105 transition-transform duration-700" />
                 </div>
                 <div className="relative overflow-hidden rounded-xl border border-emerald-200 shadow-md ring-1 ring-emerald-500/20 group/img">
                   <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-emerald-900/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity z-10">
                     <h4 className="text-xs font-bold text-white uppercase tracking-widest drop-shadow-md">After (Components & Spec)</h4>
                   </div>
                   <h4 className="text-xs font-bold text-emerald-500 mb-4 uppercase tracking-widest px-1 block group-hover/img:hidden transition-opacity">After (Components & Spec)</h4>
                   <img src="/assets/stoploss/after.png" alt="New UI Components" className="w-full object-contain transform group-hover/img:scale-105 transition-transform duration-700" />
                 </div>
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-white/60 backdrop-blur-2xl border border-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 group hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500"
           >
              <h3 className="text-lg font-bold text-brand-blue mb-4">MGU List & Add Contact</h3>
              <p className="text-sm font-medium text-slate-600 mb-8 max-w-3xl">
                Solution Highlights: Summarised overview in the form of data visualisation that enables user to quickly scan the information. Expandable rows for details with feasibility of adding and editing contacts reducing clicks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="relative overflow-hidden rounded-xl border border-slate-200 shadow-inner group/img">
                   <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity z-10">
                     <h4 className="text-xs font-bold text-white uppercase tracking-widest drop-shadow-md">Before</h4>
                   </div>
                   <h4 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest px-1 block group-hover/img:hidden transition-opacity">Before</h4>
                   <img src="/assets/stoploss/old-mgu-list.png" alt="Old MGU List" className="w-full object-contain transform group-hover/img:scale-105 transition-transform duration-700" />
                 </div>
                 <div className="relative overflow-hidden rounded-xl border border-emerald-200 shadow-md ring-1 ring-emerald-500/20 group/img">
                   <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-emerald-900/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity z-10">
                     <h4 className="text-xs font-bold text-white uppercase tracking-widest drop-shadow-md">After</h4>
                   </div>
                   <h4 className="text-xs font-bold text-emerald-500 mb-4 uppercase tracking-widest px-1 block group-hover/img:hidden transition-opacity">After</h4>
                   <img src="/assets/stoploss/new-mgu-list.png" alt="New MGU List" className="w-full object-contain transform group-hover/img:scale-105 transition-transform duration-700" />
                 </div>
              </div>
           </motion.div>
        </section>

        {/* Key Learnings */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-yellow-50/80 backdrop-blur-2xl border border-yellow-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-yellow-500/10 group hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-700"
          >
            {/* Ambient glowing radial background for learnings */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-300/30 via-orange-300/10 to-transparent rounded-full blur-[80px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <h2 className="text-3xl font-bold text-slate-900 mb-12 relative z-10">Key Learnings & Reflections</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-6">
                <h4 className="text-sm font-bold text-yellow-600 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                  Challenges
                </h4>
                <ul className="space-y-4">
                  {[
                    "Lack of domain knowledge as we couldn't conduct UX research",
                    "No BA for discovering the Functionality & Interactions of application",
                    "No Documentation on User stories"
                  ].map((c, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex gap-4 items-start p-6 bg-white/60 border border-white rounded-2xl shadow-sm hover:shadow-md hover:bg-white transition-all cursor-default relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400 opacity-0 transition-opacity" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 shrink-0" />
                      <span className="text-sm text-slate-700 font-medium leading-relaxed">{c}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  How We Overcame
                </h4>
                <ul className="space-y-4">
                  {[
                    "Had to go through the BRDs to understand the functionalities & possibilities in interactions",
                    "Multiple Q & A connects with stakeholders for more clarity on functionality",
                    "Dedicated connects with actual users throughout the design validation process"
                  ].map((s, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex gap-4 items-start p-6 bg-white/60 border border-white rounded-2xl shadow-sm hover:shadow-md hover:bg-white transition-all cursor-default relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400 opacity-0 transition-opacity" />
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <span className="text-sm text-slate-700 font-medium leading-relaxed">{s}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
