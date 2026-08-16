import { GlassCard } from "./GlassBackground";
import { Target, AlertCircle, Sparkles, CheckCircle2, ShieldCheck, Zap, Layers, Bot } from "lucide-react";

export function OverviewScope() {
  const constraints = [
    {
      title: "Minimal Initial Discovery",
      problem: "Only 2 clinician interviews completed with no formal user personas.",
      aiSolution: "Deployed AI LLM agents to synthesize interview transcripts into persona maps in hours.",
    },
    {
      title: "Realistic Data Precision",
      problem: "No clinical sample data available for complex Cell & Gene Therapy contracts.",
      aiSolution: "Utilized medical knowledge bases to populate prototypes with 100% realistic lab parameters.",
    },
    {
      title: "No Dedicated BA Team",
      problem: "Lack of Business Analysts to draft technical requirements or BRDs.",
      aiSolution: "AI BA Agents parsed CGT protocols to auto-generate user stories and validation rules.",
    },
    {
      title: "No QA Content Review",
      problem: "No dedicated QA team to verify form fields and medical edge cases.",
      aiSolution: "Self-auditing AI models validated medical terms, input bounds, and workflow states.",
    },
  ];

  return (
    <section id="overview" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#c2e812]/15 text-[#c2e812] border border-[#c2e812]/30">
            <Target className="w-3.5 h-3.5" />
            <span>01. Project Context & AI-Driven Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Value-Based Administration: <br />
            <span className="bg-gradient-to-r from-[#ffffff] via-[#9182c0] to-[#c2e812] bg-clip-text text-transparent">
              High-Stakes Cell & Gene Therapy Redesign
            </span>
          </h2>
          <p className="text-[#b8b0d8] text-sm leading-relaxed">
            Value-Based Administration (VBA) manages multi-million dollar Cell & Gene Therapy (CGT) contracts between Health Plans and Pharma Manufacturers.
          </p>
        </div>

        {/* Core Context Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#c2e812]/15 border border-[#c2e812]/30 flex items-center justify-center text-[#c2e812]">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">About VBA Portal</h3>
                <p className="text-xs text-[#7a7299] font-mono">Healthcare Financial Administration</p>
              </div>
            </div>
            <p className="text-[#b8b0d8] text-xs leading-relaxed">
              A HIPAA-compliant platform administering outcome-based CGT payments. Replaced fragmented legacy spreadsheets with a unified dashboard for treating physicians and clinical SMEs.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#7a7299]">Primary Focus:</span>
                <span className="font-bold text-white">Cell & Gene Therapy (CGT) Contracts</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#7a7299]">Key Goal:</span>
                <span className="font-bold text-[#c2e812]">Streamline Submission & Triage</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-[#ff6b6b]">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">The Core Challenge</h3>
                <p className="text-xs text-[#7a7299] font-mono">Legacy Friction & Data Loss</p>
              </div>
            </div>
            <p className="text-[#b8b0d8] text-xs leading-relaxed">
              Legacy tools forced clinicians through 18-minute forms with split-screen clutter, causing 42% missing lab attachments and delayed patient reimbursement settlements.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#7a7299]">Legacy Completion Time:</span>
                <span className="font-bold text-[#ff6b6b]">~18 minutes / submission</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#7a7299]">Redesigned Target:</span>
                <span className="font-bold text-[#c2e812]">&lt; 8 minutes (55% faster)</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* AI Solutions Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <Bot className="w-4 h-4 text-[#c2e812]" />
              <span>How AI Agents Resolved Real-World Project Constraints</span>
            </h3>
            <span className="text-xs text-[#7a7299] font-mono">100% Spec Coverage</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {constraints.map((c, i) => (
              <GlassCard key={i} className="p-4 space-y-3 flex flex-col justify-between" hoverGlow={true}>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#7a7299]">Constraint 0{i + 1}</span>
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-[#c2e812]/15 text-[#c2e812] uppercase">AI Resolved</span>
                  </div>
                  <h4 className="font-bold text-white text-xs">{c.title}</h4>
                  <p className="text-[11px] text-[#ff6b6b]/90 leading-tight">{c.problem}</p>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-1">
                  <span className="text-[10px] font-bold text-[#c2e812] uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    AI Solution:
                  </span>
                  <p className="text-[11px] text-[#b8b0d8] leading-tight">{c.aiSolution}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
