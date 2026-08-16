import { motion } from "framer-motion";
import { GlassCard, GlassOrb } from "./GlassBackground";
import { Sparkles, Clock, ShieldCheck, Cpu, ArrowRight, Play, CheckCircle, Bot, BrainCircuit } from "lucide-react";
import evioIllustration from "../assets/evio-illustration.png";

interface HeroSectionProps {
  onOpenSimulator: () => void;
  onExploreClick: () => void;
}

export function HeroSection({ onOpenSimulator, onExploreClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Glowing 3D Orbs */}
      <GlassOrb x="5%" y="10%" size={380} color="#6b5ca5" delay={0} duration={12} />
      <GlassOrb x="68%" y="5%" size={340} color="#9182c0" delay={2} duration={10} />
      <GlassOrb x="80%" y="55%" size={220} color="#4a4073" delay={4} duration={14} />
      <GlassOrb x="10%" y="65%" size={260} color="#c2e812" delay={3} duration={11} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#c2e812]/15 text-[#c2e812] border border-[#c2e812]/30 shadow-[0_0_15px_rgba(194,232,18,0.2)]">
                <BrainCircuit className="w-3.5 h-3.5" />
                AI-Augmented UX Case Study
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-[#b8b0d8] border border-white/10">
                Cell & Gene Therapy (CGT)
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                VBA Portal <br />
                <span className="bg-gradient-to-r from-[#ffffff] via-[#9182c0] to-[#c2e812] bg-clip-text text-transparent">
                  AI-Driven UX Redesign
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#b8b0d8] leading-relaxed max-w-xl">
                Redesigning Value-Based Administration for Cell & Gene Therapy using AI Agents for transcript synthesis, generative layout exploration, and inline clinical decision support.
              </p>
            </motion.div>

            {/* Hero Official PNG Illustration Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-xl flex flex-col sm:flex-row items-center gap-4 shadow-xl"
            >
              <div className="w-full sm:w-44 h-32 shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 flex items-center justify-center p-2 border border-white/40 shadow-md">
                <img
                  src={evioIllustration}
                  alt="Clinical Workflows Illustration"
                  className="w-full h-full object-contain scale-x-[-1]"
                />
              </div>
              <div className="space-y-1 text-xs text-left">
                <span className="font-mono text-[#c2e812] text-[10px] font-bold uppercase tracking-wider">Official Vector Artwork</span>
                <h4 className="font-bold text-white text-sm">Provider & SME Dual Workflow</h4>
                <p className="text-[#b8b0d8] leading-normal text-[11px]">
                  Connecting treating physicians at workstations with clinical SMEs conducting mobile tablet reviews nationwide.
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <button
                onClick={onOpenSimulator}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-[#0a0814] bg-[#c2e812] hover:bg-[#b0d410] transition-all shadow-[0_0_20px_rgba(194,232,18,0.4)] hover:scale-105 active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-[#0a0814]" />
                <span>Launch AI Prototype Sandbox</span>
              </button>

              <button
                onClick={onExploreClick}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
              >
                <span>Explore AI UX Process</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9182c0]" />
              </button>
            </motion.div>

            {/* Key Deliverables Checkmarks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-white/10 text-xs font-medium text-[#b8b0d8]"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#c2e812]" />
                <span>AI Transcript Synthesis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#c2e812]" />
                <span>AI Layout Exploration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#c2e812]" />
                <span>Official Vector Assets</span>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Interactive 3D Stats Glass Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5"
          >
            {/* Stat Card 1 */}
            <GlassCard className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] text-[#7a7299] font-mono uppercase tracking-wider">AI Discovery</span>
                  <div className="text-2xl font-black text-white mt-0.5 flex items-baseline gap-2">
                    <span>10x Faster</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#c2e812]/15 text-[#c2e812] border border-[#c2e812]/30">
                      LLM Synthesis
                    </span>
                  </div>
                  <p className="text-xs text-[#b8b0d8] mt-1">Automated quote extraction from clinician recordings</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#4a4073]/40 border border-[#9182c0]/30 flex items-center justify-center text-[#c2e812]">
                  <Bot className="w-5 h-5" />
                </div>
              </div>
            </GlassCard>

            {/* Stat Card 2 */}
            <GlassCard className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] text-[#7a7299] font-mono uppercase tracking-wider">Form Efficiency</span>
                  <div className="text-2xl font-black text-white mt-0.5 flex items-baseline gap-2">
                    <span>&lt; 8 min</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#c2e812]/15 text-[#c2e812] border border-[#c2e812]/30">
                      -55% Time
                    </span>
                  </div>
                  <p className="text-xs text-[#b8b0d8] mt-1">AI pre-fills lab parameters & confirms safety protocols</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#4a4073]/40 border border-[#9182c0]/30 flex items-center justify-center text-[#9182c0]">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
            </GlassCard>

            {/* Stat Card 3 */}
            <GlassCard className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] text-[#7a7299] font-mono uppercase tracking-wider">Anomaly Detection</span>
                  <div className="text-2xl font-black text-[#c2e812] mt-0.5">
                    AI Copilot
                  </div>
                  <p className="text-xs text-[#b8b0d8] mt-1">Real-time out-of-range lab alerts & contract rule validation</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#4a4073]/40 border border-[#9182c0]/30 flex items-center justify-center text-[#c2e812]">
                  <Cpu className="w-5 h-5" />
                </div>
              </div>
            </GlassCard>

            {/* Stat Card 4 */}
            <GlassCard className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] text-[#7a7299] font-mono uppercase tracking-wider">BRD Generation</span>
                  <div className="text-2xl font-black text-white mt-0.5 flex items-baseline gap-2">
                    <span>100% Coverage</span>
                  </div>
                  <p className="text-xs text-[#b8b0d8] mt-1">AI domain agents generated business specs bridging missing BA gap</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#4a4073]/40 border border-[#9182c0]/30 flex items-center justify-center text-[#9182c0]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
            </GlassCard>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
