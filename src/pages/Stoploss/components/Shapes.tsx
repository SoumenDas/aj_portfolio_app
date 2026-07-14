import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface FloatingShapeProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  size: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  className?: string;
}

export const FloatingGlassShape = ({ 
  delay = 0, 
  duration = 10, 
  size, 
  top, left, right, bottom, 
  className = "",
  ...props 
}: FloatingShapeProps) => (
  <motion.div
    initial={{ y: 0, x: 0, rotate: -10 }}
    animate={{ 
      y: [0, -15, 0, 15, 0],
      rotate: [-10, 5, -5, -10]
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }}
    style={{ top, left, right, bottom, width: size, height: size }}
    className={`absolute pointer-events-none ${className}`}
    {...props}
  >
    <div className="w-full h-full rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl" />
  </motion.div>
);

export const FloatingGradientSphere = ({ 
  delay = 0, 
  duration = 10, 
  size, 
  top, left, right, bottom, 
  className = "" 
}: FloatingShapeProps) => (
  <motion.div
    initial={{ y: 0, scale: 0.9 }}
    animate={{ 
      y: [0, -20, 0],
      scale: [0.9, 1.05, 0.9]
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }}
    style={{ top, left, right, bottom, width: size, height: size }}
    className={`absolute pointer-events-none rounded-full blur-[2px] opacity-70 ${className}`}
  >
    <div className="w-full h-full rounded-full bg-gradient-to-br shadow-inner backdrop-blur-sm" />
  </motion.div>
);
