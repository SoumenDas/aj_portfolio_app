import React from 'react';
import { motion } from 'motion/react';

export const SectionHeader = ({ subtitle, title, description, align = "center" }: { subtitle?: string, title: React.ReactNode, description?: string, align?: "left" | "center" }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center flex flex-col items-center' : 'text-left'}`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/50 backdrop-blur-md border border-slate-200 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
          {subtitle}
        </motion.div>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 mt-4 max-w-2xl text-sm md:text-base font-medium"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
