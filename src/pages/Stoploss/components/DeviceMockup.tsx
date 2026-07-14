import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface DeviceMockupProps {
  imageSrc: string;
  altText: string;
  className?: string;
}

export function DeviceMockup({ imageSrc, altText, className }: DeviceMockupProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn("relative mx-auto max-w-4xl", className)}
    >
      <div className="relative rounded-[2rem] border-[8px] border-surface-container-highest shadow-2xl bg-surface overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-24 bg-surface-container-highest rounded-b-xl z-20" />
        <div className="relative aspect-[16/10] bg-surface-container-low overflow-hidden rounded-[1.5rem]">
           <img 
            src={imageSrc} 
            alt={altText}
            className="w-full h-full object-cover origin-top transition-transform duration-[10s] ease-in-out hover:scale-[1.15]"
          />
        </div>
      </div>
      <div className="w-[110%] h-4 bg-surface-container-highest mx-auto rounded-b-full shadow-xl -ml-[5%]" />
    </motion.div>
  );
}
