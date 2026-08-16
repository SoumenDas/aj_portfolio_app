import { GlassCard } from "./GlassBackground";
import { Users, User, UserCog, ArrowDown, FileText, AlertCircle, FilePlus, RefreshCcw, Bell } from "lucide-react";
import { motion } from "framer-motion";

export function UnderstandingUsers() {
  return (
    <div className="py-16 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-3 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#c2e812]/15 text-[#c2e812] border border-[#c2e812]/30 shadow-[0_0_15px_rgba(194,232,18,0.2)]">
            <Users className="w-3.5 h-3.5" />
            <span>Understanding Users</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Users &amp; Form Flow
          </h2>
          <p className="text-[#b8b0d8] text-sm leading-relaxed">
            Visualizing the cross-functional data exchange between External Physicians and Internal Clinicians.
          </p>
        </motion.div>

        {/* Form Flow Diagram in Dark Glassmorphism Style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <GlassCard className="p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-[#16122a] via-[#120f24] to-[#0a0814] shadow-2xl border border-white/10">
            
            {/* Ambient Glow Effects */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#9182c0]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c2e812]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-5xl mx-auto hidden lg:block pb-10 mt-16 px-4">
              
              <div className="relative w-full mb-8">
                <div className="flex justify-between items-start relative z-10 w-full mx-auto mb-4">
                
                {/* --- Physician Flow --- */}
                <div className="flex flex-col items-center w-[46%] relative">
                  
                  {/* Avatar Icon (Glassmorphic with SVG Illustration) */}
                  <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#c2e812]/20 to-[#4a4073]/20 border-[4px] border-white/20 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(194,232,18,0.2)] backdrop-blur-md overflow-hidden relative">
                    <svg viewBox="0 0 100 100" className="w-[110px] h-[110px] mt-8">
                      {/* Face */}
                      <circle cx="50" cy="40" r="24" fill="#fbd3c1"/>
                      {/* Hair */}
                      <path d="M 26 35 C 20 -10, 80 -10, 74 35 L 75 30 Q 50 10 25 30 Z" fill="#4a4073"/>
                      <path d="M 26 35 L 30 20 L 70 20 L 74 35 Z" fill="#4a4073"/>
                      {/* Coat */}
                      <path d="M 15 100 C 15 65, 85 65, 85 100" fill="#fff"/>
                      <path d="M 40 100 L 40 65 L 60 65 L 60 100" fill="#fff"/>
                      <path d="M 45 65 L 50 80 L 55 65 Z" fill="#fbd3c1"/>
                      {/* Stethoscope */}
                      <path d="M 35 65 C 30 80, 50 100, 70 70" fill="none" stroke="#4a4073" strokeWidth="2.5"/>
                      <circle cx="35" cy="65" r="4" fill="#fff" stroke="#4a4073" strokeWidth="2"/>
                      <circle cx="70" cy="70" r="4" fill="#4a4073"/>
                      {/* Eyes */}
                      <circle cx="38" cy="38" r="3" fill="#333"/>
                      <circle cx="62" cy="38" r="3" fill="#333"/>
                      {/* Mouth */}
                      <path d="M 45 50 Q 50 54 55 50" fill="none" stroke="#333" strokeWidth="2"/>
                    </svg>
                  </div>
                  
                  {/* Title */}
                  <div className="bg-white/5 border border-white/10 text-white font-extrabold text-xl px-10 py-2.5 rounded-full shadow-lg mb-5 w-full text-center backdrop-blur-md tracking-wide">
                    Physician
                  </div>
                  
                  <div className="w-0.5 h-8 bg-gradient-to-b from-white/20 to-white/5 mb-2" />
                  
                  {/* Worklist Pill */}
                  <div className="bg-gradient-to-r from-[#9182c0]/30 to-[#4a4073]/30 border border-[#9182c0]/40 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(145,130,192,0.2)] flex items-center justify-center gap-2 mb-6 w-3/4 backdrop-blur-md">
                    <FileText className="w-4 h-4 text-[#9182c0]" /> Provider Worklist
                  </div>

                  {/* Split line */}
                  <div className="w-full border-t border-white/20 relative mb-6">
                    <div className="absolute top-0 left-4 h-5 border-l border-white/20" />
                    <div className="absolute top-0 left-1/2 h-5 border-l border-white/20 transform -translate-x-1/2" />
                    <div className="absolute top-0 right-4 h-5 border-l border-white/20" />
                  </div>

                  {/* Form Type Pills */}
                  <div className="flex w-full relative z-10">
                    <div className="w-1/3 px-1.5">
                      <div className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-[#b8b0d8] hover:text-white font-medium text-[11px] px-2 py-3 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 w-full text-center cursor-pointer">
                        <FilePlus className="w-4 h-4 text-[#c2e812]" /> Required Form
                      </div>
                    </div>
                    <div className="w-1/3 px-1.5">
                      <div className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-[#b8b0d8] hover:text-white font-medium text-[11px] px-2 py-3 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 w-full text-center cursor-pointer">
                        <RefreshCcw className="w-4 h-4 text-[#9182c0]" /> Follow-up Form
                      </div>
                    </div>
                    <div className="w-1/3 px-1.5">
                      <div className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-[#b8b0d8] hover:text-white font-medium text-[11px] px-2 py-3 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 w-full text-center cursor-pointer">
                        <AlertCircle className="w-4 h-4 text-[#ffb703]" /> Pended Form
                      </div>
                    </div>
                  </div>
                </div>


                {/* --- Internal Clinician Flow --- */}
                <div className="flex flex-col items-center w-[46%] relative">
                  
                  {/* Avatar Icon (Glassmorphic with SVG Illustration) */}
                  <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#9182c0]/20 to-[#4a4073]/20 border-[4px] border-white/20 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(145,130,192,0.2)] backdrop-blur-md overflow-hidden relative">
                    <svg viewBox="0 0 100 100" className="w-[110px] h-[110px] mt-8">
                      <circle cx="50" cy="40" r="24" fill="#fbd3c1"/>
                      <path d="M 15 100 C 15 65, 85 65, 85 100" fill="#4a4073"/>
                      <path d="M 40 100 L 40 65 L 60 65 L 60 100" fill="#2a2342"/>
                      <path d="M 45 65 L 50 80 L 55 65 Z" fill="#fff"/>
                      <path d="M 48 70 L 50 85 L 52 70 Z" fill="#e63946"/> {/* Tie */}
                      <circle cx="38" cy="38" r="3" fill="#333"/>
                      <circle cx="62" cy="38" r="3" fill="#333"/>
                      {/* Glasses */}
                      <circle cx="38" cy="38" r="9" fill="none" stroke="#222" strokeWidth="3"/>
                      <circle cx="62" cy="38" r="9" fill="none" stroke="#222" strokeWidth="3"/>
                      <path d="M 47 38 L 53 38" stroke="#222" strokeWidth="3"/>
                      <path d="M 45 50 Q 50 54 55 50" fill="none" stroke="#333" strokeWidth="2"/>
                      <path d="M 26 35 C 20 -10, 80 -10, 74 35 L 75 30 Q 50 10 25 30 Z" fill="#1e293b"/>
                    </svg>
                  </div>
                  
                  {/* Title */}
                  <div className="bg-white/5 border border-white/10 text-white font-extrabold text-xl px-10 py-2.5 rounded-full shadow-lg mb-5 w-full text-center backdrop-blur-md tracking-wide">
                    Internal Clinician
                  </div>
                  
                  <div className="w-0.5 h-8 bg-gradient-to-b from-white/20 to-white/5 mb-2" />
                  
                  {/* Worklist Pill */}
                  <div className="bg-gradient-to-r from-[#9182c0]/30 to-[#4a4073]/30 border border-[#9182c0]/40 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(145,130,192,0.2)] flex items-center justify-center gap-2 mb-6 w-3/4 backdrop-blur-md">
                    <FileText className="w-4 h-4 text-[#9182c0]" /> Clinician Worklist
                  </div>

                  {/* Split line */}
                  <div className="w-full border-t border-white/20 relative mb-6">
                    <div className="absolute top-0 left-4 h-5 border-l border-white/20" />
                    <div className="absolute top-0 left-1/2 h-5 border-l border-white/20 transform -translate-x-1/2" />
                    <div className="absolute top-0 right-4 h-5 border-l border-white/20" />
                  </div>

                  {/* Form Type Pills */}
                  <div className="flex w-full relative z-10">
                    <div className="w-1/3 px-1.5">
                      <div className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-[#b8b0d8] hover:text-white font-medium text-[11px] px-2 py-3 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 w-full text-center cursor-pointer">
                        <FilePlus className="w-4 h-4 text-[#c2e812]" /> New Forms
                      </div>
                    </div>
                    <div className="w-1/3 px-1.5">
                      <div className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-[#b8b0d8] hover:text-white font-medium text-[11px] px-2 py-3 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 w-full text-center cursor-pointer">
                        <RefreshCcw className="w-4 h-4 text-[#ffb703]" /> Resubmitted
                      </div>
                    </div>
                    <div className="w-1/3 px-1.5">
                      <div className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-[#b8b0d8] hover:text-white font-medium text-[11px] px-2 py-3 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 w-full text-center cursor-pointer">
                        <Bell className="w-4 h-4 text-red-400" /> Past Due Forms
                      </div>
                    </div>
                  </div>
                  
                  {/* Escalation Support Node */}
                  <div className="absolute top-[100%] mt-20 left-[83.33%] -translate-x-1/2 flex flex-col items-center z-10 w-32">
                    <div className="w-[70px] h-[70px] bg-[#2dc678] rounded-full flex items-center justify-center mb-10 relative shadow-[0_0_15px_rgba(45,198,120,0.4)] border-[3px] border-white/20 overflow-hidden backdrop-blur-md">
                      <svg viewBox="0 0 100 100" className="w-[65px] h-[65px] mt-6">
                        <circle cx="50" cy="40" r="22" fill="#fbd3c1"/>
                        <path d="M 25 100 C 25 65, 75 65, 75 100" fill="#2a3f54"/>
                        <path d="M 25 15 C 40 -10, 60 -10, 75 15 L 85 45 L 75 35 Z" fill="#e63946"/>
                        <path d="M 25 15 C 40 -10, 60 -10, 75 15 L 15 45 L 25 35 Z" fill="#e63946"/>
                        <circle cx="42" cy="38" r="3.5" fill="#333"/>
                        <circle cx="58" cy="38" r="3.5" fill="#333"/>
                        <path d="M 45 48 Q 50 53 55 48" fill="none" stroke="#333" strokeWidth="2.5"/>
                      </svg>
                      <div className="absolute top-0 right-0 bg-white/90 shadow-md text-xs font-bold w-4 h-4 rounded flex items-center justify-center text-gray-800 backdrop-blur-sm">?</div>
                    </div>
                    <div className="bg-gradient-to-r from-[#9182c0]/30 to-[#4a4073]/30 border border-[#9182c0]/40 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(145,130,192,0.2)] flex items-center justify-center gap-2 text-center backdrop-blur-md whitespace-nowrap mt-2">
                      Outreach / Escalate
                    </div>
                  </div>

                </div>
              </div>

              {/* SVG Connecting Lines Background (Positioned at top-[100%] of the pills row) */}
              <svg className="absolute left-4 right-4 w-[calc(100%-2rem)] h-[500px] pointer-events-none z-0" style={{ top: "425px" }} viewBox="0 0 1000 300" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c2e812" stopOpacity="1" />
                    <stop offset="100%" stopColor="#9bc53d" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="grad-orange" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#ffb703" stopOpacity="1" />
                    <stop offset="100%" stopColor="#fb8500" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="grad-red" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ef233c" stopOpacity="1" />
                    <stop offset="100%" stopColor="#d90429" stopOpacity="1" />
                  </linearGradient>
                  
                  <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 1 1.5 L 9 5 L 1 8.5 L 2.8 5 z" fill="#9bc53d" />
                  </marker>
                  <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 1 1.5 L 9 5 L 1 8.5 L 2.8 5 z" fill="#0284c7" />
                  </marker>
                  <marker id="arrow-orange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 1 1.5 L 9 5 L 1 8.5 L 2.8 5 z" fill="#ffb703" />
                  </marker>
                  <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 1 1.5 L 9 5 L 1 8.5 L 2.8 5 z" fill="#ef233c" />
                  </marker>

                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g filter="url(#glow)">
                  {/* 1. Red Branch A: Resubmitted Forms -> New Forms (Shallowest Depth y=30) */}
                  <motion.path 
                    d="M 758 0 V 30 H 600 V 0" 
                    fill="none" 
                    stroke="url(#grad-red)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    strokeDasharray="0 10"
                    vectorEffect="non-scaling-stroke"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />

                  {/* 2. Red Branch B: Resubmitted Forms -> Pended Form (Shallowest Depth y=30) */}
                  <motion.path 
                    d="M 758 0 V 30 H 396 V 0" 
                    fill="none" 
                    stroke="url(#grad-red)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    strokeDasharray="0 10"
                    vectorEffect="non-scaling-stroke"
                    markerEnd="url(#arrow-red)"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />

                  {/* 3. Green Path: Required Form -> New Forms (Depth y=55) */}
                  <motion.path 
                    d="M 76.6 0 V 55 H 616.6 V 0" 
                    fill="none" 
                    stroke="url(#grad-green)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    strokeDasharray="0 10"
                    vectorEffect="non-scaling-stroke"
                    markerEnd="url(#arrow-green)"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* 4. Blue Path: Follow-up Form -> New Forms (Depth y=80) */}
                  <motion.path 
                    d="M 230 0 V 80 H 633 V 0" 
                    fill="none" 
                    stroke="url(#grad-blue)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    strokeDasharray="0 10"
                    vectorEffect="non-scaling-stroke"
                    markerEnd="url(#arrow-blue)"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* 5. Orange Path: Pended Form -> Resubmitted Forms (Deepest Depth y=105) */}
                  <motion.path 
                    d="M 370 0 V 105 H 782 V 0" 
                    fill="none" 
                    stroke="url(#grad-orange)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    strokeDasharray="0 10"
                    vectorEffect="non-scaling-stroke"
                    markerEnd="url(#arrow-orange)"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* 6. Past Due Forms -> Outreach / Escalate Profile Illustration */}
                  <motion.path 
                    d="M 923.3 0 V 75" 
                    fill="none" 
                    stroke="url(#grad-red)" 
                    strokeWidth="3.5" 
                    strokeLinecap="round"
                    strokeDasharray="0 10"
                    vectorEffect="non-scaling-stroke"
                    markerEnd="url(#arrow-red)"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </g>
              </svg>
              </div>
              
              {/* Target nodes for the cross-connections (Visual Endpoints) */}
              <div className="mt-[280px] relative z-10 w-full mx-auto" />
            </div>

            {/* Mobile Fallback */}
            <div className="block lg:hidden space-y-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-5 h-5 text-[#c2e812]" />
                  <h3 className="font-bold text-white text-lg">Physician Flow</h3>
                </div>
                <p className="text-[#b8b0d8] text-sm mb-3">Provider Worklist &rarr; Required / Follow-up / Pended Forms</p>
              </div>
              
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <UserCog className="w-5 h-5 text-[#9182c0]" />
                  <h3 className="font-bold text-white text-lg">Clinician Flow</h3>
                </div>
                <p className="text-[#b8b0d8] text-sm mb-3">Clinician Worklist &rarr; New / Resubmitted / Past Due Forms</p>
                <div className="mt-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Escalates to Outreach Team
                </div>
              </div>
            </div>

          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
