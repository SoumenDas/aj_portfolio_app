import { GlassCard } from "./GlassBackground";
import { Search, Zap, User, FileWarning, History, Target } from "lucide-react";

export function SecondaryResearch() {
  const insights = [
    {
      title: "Performance & Flexibility",
      desc: "System speed is a critical bottleneck. Users require highly responsive interfaces with configurable layouts that adapt to their specific workflows.",
      icon: Zap,
      color: "text-[#c2e812]",
      bg: "bg-[#c2e812]/10",
      border: "border-[#c2e812]/20",
      quotes: '"If the system is slow, that can be a significant bottleneck."'
    },
    {
      title: "Unified Patient Profile",
      desc: "Clinicians demand a clean, centralized interface where comprehensive patient data is instantly accessible during routine interactions.",
      icon: User,
      color: "text-[#ffb703]",
      bg: "bg-[#ffb703]/10",
      border: "border-[#ffb703]/20",
      quotes: '"Need a comprehensive patient profile in one place."'
    },
    {
      title: "Documentation Accuracy",
      desc: "Users face friction when capturing specific clinical requirements (e.g., pregnancy tests) and struggle to find historical data.",
      icon: FileWarning,
      color: "text-red-400",
      bg: "bg-red-400/10",
      border: "border-red-400/20",
      quotes: '"Documentation issues with pregnancy tests."'
    },
    {
      title: "Longitudinal Tracking",
      desc: "A strong emphasis was placed on easily tracking historical changes in prescriptions, dosages, and past prescriber notes over time.",
      icon: History,
      color: "text-[#9182c0]",
      bg: "bg-[#9182c0]/10",
      border: "border-[#9182c0]/20",
      quotes: '"Need to track changes in dosage and frequency over the years."'
    },
  ];

  return (
    <section id="secondary-research" className="py-16 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#c2e812]/15 text-[#c2e812] border border-[#c2e812]/30">
            <Search className="w-3.5 h-3.5" />
            <span>Research & Discovery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Secondary Research <br />
            <span className="bg-gradient-to-r from-[#ffffff] via-[#9182c0] to-[#c2e812] bg-clip-text text-transparent mt-2 inline-block">
              User Interview Insights
            </span>
          </h2>
          <p className="text-[#b8b0d8] text-sm leading-relaxed max-w-2xl mx-auto">
            Synthesized qualitative feedback and core takeaways gathered from direct conversations with clinical staff and end-users.
          </p>
        </div>

        {/* Synthesized Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((item, idx) => (
            <GlassCard key={idx} className="p-6 flex flex-col md:flex-row items-start gap-5" hoverGlow={true}>
              <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.border} border flex items-center justify-center shrink-0`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
                <p className="text-sm text-[#b8b0d8] leading-relaxed">
                  {item.desc}
                </p>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs font-mono text-[#7a7299] italic">
                    {item.quotes}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Overall Summary Banner */}
        <GlassCard className="p-6 md:p-8 border-[#9182c0]/30 bg-gradient-to-r from-[#16122a] via-[#120f24] to-[#0a0814] flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9182c0]/20 to-[#c2e812]/20 border border-[#c2e812]/30 flex items-center justify-center shrink-0">
            <Target className="w-8 h-8 text-[#c2e812]" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Key Takeaways & Overall Summary</h3>
            <p className="text-sm text-[#b8b0d8] leading-relaxed max-w-4xl">
              The recurring themes highlight critical areas of improvement in <strong>system performance, accurate documentation, and the need for comprehensive, easily accessible patient information</strong>. Addressing these core concerns will significantly enhance the user experience, reduce cognitive load, and vastly improve clinical workflow efficiency.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
