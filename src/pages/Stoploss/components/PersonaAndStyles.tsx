import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { Check, X, Code2, Paintbrush, Box } from 'lucide-react';

export const PersonaAndStyles = () => {
  return (
    <div className="w-full relative z-10 py-20 max-w-6xl mx-auto px-6">
      
      {/* Persona */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Persona</h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-2xl border border-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 grid grid-cols-1 lg:grid-cols-12 gap-12 group hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-500"
        >
          {/* Profile Sidebar */}
          <div className="col-span-1 lg:col-span-3 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-slate-100 border-4 border-white shadow-xl flex items-center justify-center mb-6 overflow-hidden transform group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500">
               <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop" alt="John Doe" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">John Doe</h3>
            <p className="text-brand-blue font-semibold text-sm mb-4">StopLoss Admin</p>
            <div className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 shadow-sm">
              Age: 36
            </div>
          </div>

          {/* Persona Details */}
          <div className="col-span-1 lg:col-span-9 space-y-8">
            <div>
              <h4 className="text-sm font-bold text-brand-blue mb-4">About</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Dineen works closely with associates & external clients to create solutions for business problems related to insurance & claims. She's a goto person for all business logic & domain knowledge across various tenants. She has been using the Stop Loss Platform since a year now.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50/50 border border-green-100 p-6 rounded-2xl relative overflow-hidden group/list shadow-sm hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full blur-2xl pointer-events-none opacity-0 group-hover/list:opacity-100 transition-opacity" />
                <h4 className="text-sm font-bold text-green-700 mb-4 relative z-10">Goals</h4>
                <ul className="space-y-4 relative z-10">
                  {[
                    "Reducing financial risk for employers",
                    "Ensure timely & accurate contract create & maintenance",
                    "Satisfied clients - employers & Payers"
                  ].map((g, i) => (
                    <motion.li key={i} whileHover={{ x: 5 }} className="flex gap-3 items-start cursor-default"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /><span className="text-sm text-slate-700 font-medium">{g}</span></motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50/50 border border-red-100 p-6 rounded-2xl relative overflow-hidden group/list shadow-sm hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/20 rounded-full blur-2xl pointer-events-none opacity-0 group-hover/list:opacity-100 transition-opacity" />
                <h4 className="text-sm font-bold text-red-700 mb-4 relative z-10">Challenges</h4>
                <ul className="space-y-4 relative z-10">
                  {[
                    "Handle multiple client workflows & requirements",
                    "Track claims raised and claimants data",
                    "Change in Client Enrollment & Demographics"
                  ].map((c, i) => (
                    <motion.li key={i} whileHover={{ x: 5 }} className="flex gap-3 items-start cursor-default"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /><span className="text-sm text-slate-700 font-medium">{c}</span></motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Style Guide Options */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Style Guide Options</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: "Bootstrap", pill: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200", icon: <Code2 className="w-4 h-4"/>, desc: "Universal published bootstrap design system which would be more easy for the developers to refer.", img: "/assets/stoploss/bootstrap.png" },
            { tag: "IBX Design System", pill: "bg-blue-100 text-blue-700 border-blue-200", icon: <Paintbrush className="w-4 h-4"/>, desc: "Predefined IBX design system applied to the other Independence applications", img: "/assets/stoploss/ibx-design-system.png" },
            { tag: "Custom", pill: "bg-emerald-100 text-emerald-700 border-emerald-200", icon: <Box className="w-4 h-4"/>, desc: "Combined components from design system and newly created components", img: "/assets/stoploss/custom-design-system.png" }
          ].map((style, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/60 backdrop-blur-xl border border-white p-6 rounded-[2rem] shadow-xl shadow-slate-200/50 flex flex-col h-[500px] cursor-default hover:shadow-2xl hover:shadow-slate-300/60 transition-all duration-300 group/card"
            >
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border self-start mb-6 shadow-sm ${style.pill} transform group-hover/card:scale-105 transition-transform`}>
                {style.icon} {style.tag}
              </div>
              <p className="text-sm text-slate-600 font-medium leading-relaxed mb-8 h-20">
                {style.desc}
              </p>
              <div className="flex-1 bg-slate-100 rounded-xl overflow-hidden border border-slate-200/50 relative shadow-inner grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500 group-hover/card:shadow-md">
                 <img src={style.img} alt={style.tag} className="w-full h-full object-contain p-2 transform group-hover/card:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
