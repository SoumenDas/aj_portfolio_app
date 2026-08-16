import { GlassCard } from "./GlassBackground";
import { Zap, CheckCircle2, Sparkles, TrendingUp, Target, Activity } from "lucide-react";
import { motion } from "framer-motion";

export function OutcomesMetrics() {
  const metrics = [
    {
      title: "Reduced Claim Rework",
      value: "42%",
      trend: "+15% vs baseline",
      icon: Target,
      desc: "Decrease in pended pre-auth claims due to missing lab results.",
      color: "text-[#c2e812]",
      bg: "bg-[#c2e812]/10",
      border: "border-[#c2e812]/20"
    },
    {
      title: "Faster Processing Time",
      value: "2.4x",
      trend: "Avg 4.5 days → 1.9 days",
      icon: Zap,
      desc: "Acceleration in end-to-end outcome-based contract settlement.",
      color: "text-[#9182c0]",
      bg: "bg-[#9182c0]/10",
      border: "border-[#9182c0]/20"
    },
    {
      title: "Auto-Adjudication Rate",
      value: "78%",
      trend: "Target was 65%",
      icon: Activity,
      desc: "Claims automatically resolved by the AI rules engine without human intervention.",
      color: "text-white",
      bg: "bg-white/5",
      border: "border-white/10"
    }
  ];

  return (
    <section id="outcomes" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#9182c0]/15 text-[#9182c0] border border-[#9182c0]/30">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>07. Business Impact & Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c2e812] to-[#9182c0]">Value Delivery</span>
          </h2>
          <p className="text-[#b8b0d8] text-sm leading-relaxed max-w-2xl mx-auto">
            The VBA Provider Portal successfully reduced friction in outcome-based contracts, driving faster processing, fewer errors, and higher automated adjudication rates.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            >
              <GlassCard className={`p-8 space-y-6 border ${m.border} h-full`} hoverGlow={true}>
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${m.bg} ${m.color}`}>
                    <m.icon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/5 border border-white/10 text-[#b8b0d8]">
                    {m.trend}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className={`text-4xl font-black ${m.color}`}>
                    {m.value}
                  </div>
                  <h3 className="text-base font-bold text-white">{m.title}</h3>
                </div>

                <p className="text-xs text-[#b8b0d8] leading-relaxed">
                  {m.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Executive Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <GlassCard className="p-8 border-[#c2e812]/30 bg-gradient-to-r from-[#16122a] via-[#120f24] to-[#0a0814] text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-[#c2e812]/15 border border-[#c2e812]/30 flex items-center justify-center text-[#c2e812] mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white max-w-xl mx-auto">
              Value-Based Administration — AI-Driven UX Case Study Summary
            </h3>
            <p className="text-xs text-[#b8b0d8] leading-relaxed max-w-2xl mx-auto">
              By embedding AI across research transcript synthesis, generative layout prototyping, and inline decision support, the VBA Portal transformed Cell & Gene Therapy administration into a benchmark for modern healthcare UX design.
            </p>
            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#c2e812] font-mono">
              <CheckCircle2 className="w-4 h-4" />
              <span>VBA Portal Case Study — End-to-End AI UX Process Completed</span>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
}
