import { GlassCard } from "./GlassBackground";
import { PersonaCard } from "./PersonaCard";
import { UserCheck, Sparkles } from "lucide-react";
import evioIllustration from "../assets/evio-illustration.png";
import { motion } from "framer-motion";

export function PersonaWorkflows() {
  const workflows = [
    {
      step: "01. Enrollment",
      color: "text-[#9182c0]",
      title: "Provider Registration",
      desc: "Physician registers patient & AI suggests optimal CGT tracking protocol.",
    },
    {
      step: "02. AI Data Entry",
      color: "text-[#9182c0]",
      title: "AI Smart Form Fill",
      desc: "AI Copilot pre-fills EMR lab parameters & confirms safety checks (<8 min).",
    },
    {
      step: "03. AI Rule Engine",
      color: "text-[#c2e812]",
      title: "Automated Verification",
      desc: "AI rule engine evaluates threshold criteria against contract terms.",
    },
    {
      step: "04. AI Triage",
      color: "text-[#9182c0]",
      title: "SME Anomaly Review",
      desc: "Internal SME validates flagged exception cases with AI recommendations.",
    },
    {
      step: "05. Settlement",
      color: "text-[#c2e812]",
      title: "Value Payout",
      desc: "Outcome-based financial settlement processed automatically for Health Plan.",
    },
  ];

  return (
    <section id="personas" className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#c2e812]/15 text-[#c2e812] border border-[#c2e812]/30">
            <UserCheck className="w-3.5 h-3.5" />
            <span>AI-Augmented Personas & Workflows</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dual Persona Architecture: <br />
            <span className="bg-gradient-to-r from-[#ffffff] via-[#9182c0] to-[#c2e812] bg-clip-text text-transparent">
              Physician (External Provider) vs Clinician SME
            </span>
          </h2>
          <p className="text-[#b8b0d8] text-base leading-relaxed">
            Detailed user persona specification board capturing behavioral traits, personality spectrum, core responsibilities, frustrations, and AI Copilot solutions.
          </p>
        </motion.div>

        {/* Official EVIO Vector Artwork Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <GlassCard className="p-6 border-[#c2e812]/30 bg-gradient-to-r from-[#16122a] via-[#120f24] to-[#0a0814] flex flex-col md:flex-row items-center gap-6 shadow-2xl">
            <div className="w-full md:w-80 h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 border border-white/50 flex items-center justify-center p-3 shrink-0 shadow-xl">
              <img
                src={evioIllustration}
                alt="Official Provider & SME Illustration"
                className="w-full h-full object-contain scale-x-[-1] filter drop-shadow-md"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#c2e812]/15 text-[#c2e812] border border-[#c2e812]/30 uppercase">
                  Official Persona Illustration
                </span>
                <span className="text-xs text-[#7a7299]">National Provider & SME Network</span>
              </div>
              <h3 className="text-xl font-bold text-white">Synthesizing Physical-to-Digital Clinical Touchpoints</h3>
              <p className="text-xs text-[#b8b0d8] leading-relaxed">
                This official vector illustration highlights the core user dynamic: External Physicians conducting seated computer data entry during patient appointments, partnered with mobile Internal Clinician SMEs reviewing cases on tablets across health plans nationwide.
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Persona Document Board (Recreated from Provided Persona Spec Sheet) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <PersonaCard />
        </motion.div>

        {/* Workflow Diagram Process */}
        <div className="space-y-6 pt-4">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[#c2e812] text-xs font-mono uppercase tracking-widest text-center flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI-Augmented End-to-End Value-Based Administration Workflow</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflows.map((wf, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                className="h-full"
              >
                <GlassCard className="p-4 text-center space-y-2 h-full flex flex-col justify-start">
                  <span className={`text-xs font-bold ${wf.color} font-mono`}>{wf.step}</span>
                  <h4 className="font-bold text-white text-xs">{wf.title}</h4>
                  <p className="text-[11px] text-[#b8b0d8]">{wf.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
