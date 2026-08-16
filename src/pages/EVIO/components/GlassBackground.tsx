import { motion } from "framer-motion";

export function GlassOrb({
  x,
  y,
  size,
  color,
  delay = 0,
  duration = 10,
}: {
  x: string;
  y: string;
  size: number;
  color: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none z-0"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: `radial-gradient(circle at 35% 35%, ${color}aa, ${color}15 65%, transparent)`,
        filter: "blur(40px)",
        boxShadow: `0 0 ${size * 0.5}px ${color}44, inset 0 0 ${size * 0.3}px ${color}22`,
      }}
      animate={{
        y: [0, -30, 10, 0],
        x: [0, 20, -10, 0],
        scale: [1, 1.08, 0.95, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export function Floating3DCube({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      style={style}
      animate={{
        rotateX: [0, 15, -10, 0],
        rotateY: [0, 25, 10, 0],
        rotateZ: [0, -5, 5, 0],
        y: [0, -15, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="w-16 h-16 relative transform-gpu preserve-3d">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#9182c0]/40 to-[#c2e812]/40 backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(194,232,18,0.2)]" />
      </div>
    </motion.div>
  );
}

export function GlassCard({
  children,
  className = "",
  style = {},
  hoverGlow = true,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hoverGlow?: boolean;
}) {
  return (
    <motion.div
      whileHover={hoverGlow ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`rounded-2xl transition-all duration-300 relative overflow-hidden ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.04)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
        ...style,
      }}
    >
      {/* Top subtle highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
}
