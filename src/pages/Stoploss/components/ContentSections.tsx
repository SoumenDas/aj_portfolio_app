import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { Users, LayoutGrid, CheckCircle2, AlertTriangle } from 'lucide-react';

export const ContentSections = () => {
  return (
    <div className="w-full relative z-10 -mt-8">
      {/* Background Blobs for the main page wrapping */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 blur-[100px] rounded-full" />
        <div className="absolute top-[30%] right-[-10%] w-[30%] h-[50%] bg-rose-100/40 blur-[100px] rounded-full" />
        <div className="absolute top-[60%] left-[20%] w-[40%] h-[40%] bg-emerald-100/30 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-32 py-20">
        
        {/* Project Overview */}
        <section>
          <SectionHeader 
            subtitle="Project Overview" 
            title={<>Stop Loss <span className="text-brand-blue">Application</span></>}
            description="It is purchased by employers who have decided to self-fund their employee benefit plans, but do not want to assume 100% of the liability for losses arising from the plans."
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative mt-12">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-200/40 to-cyan-100/40 blur-[80px] -z-10 rounded-full" />
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white/60 backdrop-blur-3xl border border-white p-8 rounded-[2rem] shadow-xl shadow-blue-900/5"
             >
               <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6 border border-blue-100 shadow-sm">
                 <Users className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-slate-800 mb-3">Users</h3>
               <p className="text-slate-600 text-sm font-medium leading-relaxed">StopLoss Admin, StopLoss Representative & Managers</p>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-white/60 backdrop-blur-3xl border border-white p-8 rounded-[2rem] shadow-xl shadow-blue-900/5"
             >
               <div className="w-14 h-14 bg-orange-50 text-orange-400 rounded-2xl flex items-center justify-center mb-6 border border-orange-100 shadow-sm">
                 <LayoutGrid className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-slate-800 mb-5">What it does?</h3>
               <ul className="space-y-4">
                 {[
                   "Lower financial risk protects self-funded business against catastrophic claims",
                   "The application manages ~600 group Stop Loss contracts",
                   "Works as a TPA (Third Party Administrator) and will be carrying out admin work for the Self Insured HIP"
                 ].map((text, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <div className="mt-0.5 bg-brand-blue text-white rounded-full p-0.5 shadow-sm shrink-0">
                       <CheckCircle2 className="w-3.5 h-3.5" />
                     </div>
                     <span className="text-sm text-slate-600 font-medium leading-relaxed">{text}</span>
                   </li>
                 ))}
               </ul>
             </motion.div>
          </div>
        </section>

        {/* Business Challenges & Goals */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20"
          >
            {/* Dark Card Inner Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 mb-12 border-b border-white/10 pb-12">
              <div>
                <div className="w-14 h-14 rounded-2xl border border-white/20 bg-white/5 flex items-center justify-center mb-6 backdrop-blur-md">
                   <div className="w-6 h-6 border-2 border-white/50 rounded-full flex items-center justify-center">
                     <div className="w-2 h-2 bg-brand-blue rounded-full" />
                   </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Business Challenges &amp; Goals</h2>
                <p className="text-slate-400 font-medium">Key objectives for transforming the Stop Loss platform experience</p>
              </div>
              <div className="bg-slate-800/50 border border-white/10 rounded-2xl overflow-hidden aspect-video relative backdrop-blur-sm shadow-inner flex items-center justify-center p-2">
                 <img src="/assets/stoploss/business-challenges.png" alt="Business Challenges & Goals" className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
              {[
                "Create a seamless and easy to use application that increases user engagement",
                "Multi-tenant support (UX & development)",
                "Designing intuitive flow for all user groups, providing upfront contextual information",
                "Increase user productivity, automate key tasks & prevent errors"
              ].map((text, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(26,188,254,0.1)] transition-all cursor-default">
                  <div className="w-8 h-8 rounded-full bg-brand-blue text-brand-dark flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-sm text-slate-300 font-medium leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* UX Challenges */}
        <section>
          <SectionHeader 
            subtitle="Challenges we faced" 
            title="UX Challenges"
            description="Obstacles that shaped our problem-solving approach"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {[
              "No access to the documentation of previously done UX research",
              "Stakeholder communications due to timezone overlap",
              "Multiple emails for signoffs",
              "BRD documents & draft version of mockups provided for few screens",
              "Frequency of stakeholder connects for queries",
              "Aligning BRDs as per design changes",
              "Replacement of onshore resources & had to take up the UX tasks alone",
              "Got Extension due to no BA so UX resource has to take up responsibilities of BA"
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5, scale: 1.02, backgroundColor: "rgb(254 242 242)" }}
                className="bg-red-50/80 backdrop-blur-xl border border-red-100 p-5 rounded-2xl relative shadow-sm hover:shadow-lg transition-all cursor-default group"
              >
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-sm border border-yellow-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                </div>
                <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed relative z-10 pr-2">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
