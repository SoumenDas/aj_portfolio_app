import { GlassCard } from "./GlassBackground";
import { FileSearch, MessageSquare, Sparkles, BrainCircuit, Activity, CheckCircle2, User, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

import imgQuestion1 from "../imports/VbaPortalCaseStudy/3413e6717ae510c691d90abe6b9a7bda40861298.png";
import imgIdea1 from "../imports/VbaPortalCaseStudy/385101c166a095ba2df13d0bedfd976aaaa538ce.png";
import imgWrite1 from "../imports/VbaPortalCaseStudy/5ac8f09d1da9022d614703b9a0e138ea5ef53fd0.png";

export function ResearchInsights() {
  const quotes = [
    {
      author: "Treating Physician, Oncology Specialty",
      text: `"Submitting Cell & Gene Therapy forms takes almost 20 minutes between seeing patients. If mandatory lab attachments are pended, we lose weeks tracking down missing paperwork."`,
      category: "Administrative Burden",
      impact: "High Friction",
      aiInsight: "NLP Sentiment: 88% Urgency for Inline Auto-Fill.",
    },
    {
      author: "Clinical Subject Matter Expert (SME)",
      text: `"Evaluating outcome claims manually against contract tiers is error-prone. We need clear out-of-range lab highlights so we can focus on true exception cases."`,
      category: "Decision Support",
      impact: "Quality Bottleneck",
      aiInsight: "NLP Sentiment: 92% Demand for AI Rule Engine.",
    },
    {
      author: "Health Plan Operations Lead",
      text: `"Our main priority is ensuring 100% compliance with pre-infusion safety criteria without overwhelming external doctors with redundant forms."`,
      category: "Compliance & Safety",
      impact: "Risk Factor",
      aiInsight: "NLP Sentiment: 95% Priority for Automated Guardrails.",
    },
  ];

  const synthesisPillars = [
    {
      title: "1. Distraction-Free Flow",
      desc: "Single-column progressive disclosure replacing split-screen clutter.",
      icon: imgQuestion1,
    },
    {
      title: "2. Inline AI Assistance",
      desc: "EMR lab parameter auto-filling and automated safety validation.",
      icon: imgIdea1,
    },
    {
      title: "3. Triage & Anomaly Scoring",
      desc: "AI risk flags highlighting pended forms and out-of-range lab parameters.",
      icon: imgWrite1,
    },
  ];

  return (
    <section id="research" className="py-16 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-3 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#c2e812]/15 text-[#c2e812] border border-[#c2e812]/30">
            <FileSearch className="w-3.5 h-3.5" />
            <span>03. AI-Driven Research & Transcript Synthesis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            LLM Transcript Extraction: <br />
            <span className="bg-gradient-to-r from-[#ffffff] via-[#9182c0] to-[#c2e812] bg-clip-text text-transparent">
              Synthesizing Clinician Quotes & UX Pillars
            </span>
          </h2>
          <p className="text-[#b8b0d8] text-sm leading-relaxed">
            AI language models processed un-transcribed clinician interview audio to extract key quotes, analyze sentiment, and map UX priorities.
          </p>
        </motion.div>

        {/* AI Discovery Metrics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <GlassCard className="p-6 border-[#9182c0]/30 bg-gradient-to-r from-[#16122a] via-[#120f24] to-[#0a0814] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#c2e812]/15 border border-[#c2e812]/30 flex items-center justify-center text-[#c2e812] shrink-0">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">LLM Natural Language Processing Pipeline</h3>
                <p className="text-xs text-[#b8b0d8]">Transcribed & clustered 100+ minutes of raw clinician audio in under 15 minutes.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-center shrink-0">
              <div>
                <span className="text-xl font-black text-[#c2e812]">10x</span>
                <span className="text-[10px] text-[#7a7299] block font-mono">Faster Discovery</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <span className="text-xl font-black text-white">100%</span>
                <span className="text-[10px] text-[#7a7299] block font-mono">Quote Extraction</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Verbatim Clinician Quotes Grid */}
        <div className="space-y-4">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#c2e812]" />
            <span>Extracted Clinician Quotes & NLP Sentiment Analysis</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                className="h-full"
              >
                <GlassCard className="p-5 space-y-4 flex flex-col justify-between h-full" hoverGlow={true}>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#9182c0]/20 text-[#9182c0] border border-[#9182c0]/30">
                        {q.category}
                      </span>
                      <span className="text-[10px] font-mono text-[#ff6b6b]">{q.impact}</span>
                    </div>

                    <p className="text-xs text-[#b8b0d8] leading-relaxed italic">{q.text}</p>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-white font-semibold">
                      <User className="w-3.5 h-3.5 text-[#7a7299]" />
                      <span>{q.author}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#c2e812]/10 border border-[#c2e812]/20 text-[10px] font-mono text-[#c2e812] flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span>{q.aiInsight}</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Synthesis Core UX Pillars */}
        <div className="space-y-4 pt-4">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-white uppercase tracking-wider font-mono text-center"
          >
            AI-Synthesized Core UX Design Pillars
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {synthesisPillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.2, ease: "easeOut" }}
                className="h-full"
              >
                <GlassCard className="p-5 text-center space-y-3 flex flex-col items-center justify-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2">
                    <img src={p.icon} alt={p.title} className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-bold text-white text-sm">{p.title}</h4>
                  <p className="text-xs text-[#b8b0d8] leading-relaxed">{p.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

