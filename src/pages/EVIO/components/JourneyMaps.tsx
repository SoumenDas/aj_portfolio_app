import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./GlassBackground";
import { Compass, Stethoscope, UserCog, Sparkles, Smile, Frown, Meh, CheckCircle2, Bot, ArrowRight } from "lucide-react";

interface JourneyStage {
  step: string;
  emotionQuote: string;
  emotionLevel: number; // 1 (low) to 5 (high)
  actions: string[];
  keyPoints: string[];
  aiEnhancement: string;
}

interface JourneyMapData {
  role: string;
  title: string;
  subtitle: string;
  stages: JourneyStage[];
}

const PHYSICIAN_JOURNEY: JourneyMapData = {
  role: "Physician (External Provider)",
  title: "Treating Physician End-to-End Clinical Journey",
  subtitle: "Mapping physician touchpoints from single sign-on to clinical form submission and data summary.",
  stages: [
    {
      step: "Login",
      emotionQuote: `"Registering on the site with official email onboarding is key. Less friction during sign-on means better engagement."`,
      emotionLevel: 2,
      actions: ["Log In", "Recover Password"],
      keyPoints: ["Allow for SSO (Single Sign-On) to streamline physician authentication & reduce friction."],
      aiEnhancement: "AI Identity Verification & EMR SSO integration eliminates credential re-entry.",
    },
    {
      step: "CLINICAL RECORDS (LIST)",
      emotionQuote: `"The easier you make sign-on and record search, the better. Less cumbersome sign-on means higher physician adoption."`,
      emotionLevel: 3,
      actions: ["If entry is past due date, change status to Urgent", "Select single or multiple patient records to review"],
      keyPoints: [
        "Landing Page worklist",
        "VBA Drugs: Amvuttra, Givlaari, Hemgenix, Roctavian, Oxlumo, Onpattro, Zolgensma, Zynteglo, Vyjuvek.",
      ],
      aiEnhancement: "AI Worklist Sorting automatically prioritizes urgent CGT cases & pended items.",
    },
    {
      step: "CLINICAL ENTRY",
      emotionQuote: `"Finding historical prescriber data is a struggle. Need the ability to compare historical lab data to track patient progress."`,
      emotionLevel: 2,
      actions: ["Answer forms", "Upload additional clinical documentation", "Add historical notes for future review", "Submit"],
      keyPoints: [
        "If multiple entries are selected, show via appropriately labeled tabs.",
        "View historical patient baseline information.",
      ],
      aiEnhancement: "AI Clinical Copilot auto-populates EMR lab values & pre-validates safety criteria.",
    },
    {
      step: "Clinical Data Summary",
      emotionQuote: `"Trying to find information should be quick and efficient! Emergencies mean starting over."`,
      emotionLevel: 4,
      actions: ["Patient selection for new entries", "Display info about physicians administering contracted CGT drugs"],
      keyPoints: [
        "Summary of all assigned patients by provider NPI.",
        "Structured clinical notes for optimal patient tracking.",
      ],
      aiEnhancement: "AI Summary Engine generates real-time patient outcome scorecards & milestone alerts.",
    },
  ],
};

const SME_JOURNEY: JourneyMapData = {
  role: "Clinician SME (Internal Evaluator)",
  title: "Internal Evaluator Outcome Audit Journey",
  subtitle: "Mapping internal medical SME touchpoints from record review to contract financial settlement.",
  stages: [
    {
      step: "Login",
      emotionQuote: `"If the system is slow that can be a significant bottleneck during high-volume claim audits."`,
      emotionLevel: 2,
      actions: ["Log In", "Recover Password"],
      keyPoints: ["System performance allows fast & efficient access to review all active VBA entries."],
      aiEnhancement: "Instant biometric authentication with real-time audit trail recording.",
    },
    {
      step: "CLINICAL RECORDS (LIST)",
      emotionQuote: `"Probably run claim audits once a week across pended hospital submissions."`,
      emotionLevel: 3,
      actions: ["If entry is past due date, change status to Urgent", "Select single or multiple records to review"],
      keyPoints: [
        "Landing Page worklist",
        "VBA Drugs: Amvuttra, Givlaari, Hemgenix, Roctavian, Oxlumo, Onpattro, Zolgensma, Zynteglo, Vyjuvek.",
      ],
      aiEnhancement: "AI Anomaly Triage flags out-of-range lab results and missing attachments instantly.",
    },
    {
      step: "CLINICAL RECORDS (Review View)",
      emotionQuote: `"Need a comprehensive patient profile in one place to evaluate multi-million dollar CGT contracts."`,
      emotionLevel: 5,
      actions: ["Perform Plan Escalation", "Verify outcomes", "Re-Open pended cases", "Cancel invalid claims"],
      keyPoints: [
        "Can escalate up to 3 times",
        "View comprehensive patient profile",
        "Add audit notes saved as historical data",
        "Multi-record review via designated tabs",
      ],
      aiEnhancement: "AI Contract Rule Engine auto-calculates outcome payout tiers based on lab parameters.",
    },
    {
      step: "PHYSICIAN SCREEN",
      emotionQuote: `"I manage one patient at a time, checking treating physician credentials and NPI records."`,
      emotionLevel: 3,
      actions: ["Add Internal Comments", "Populate Due Date", "Monitor Due Date compliance"],
      keyPoints: [
        "Display info about physicians administering contracted CGT drugs.",
        "Simplified layout eliminates navigation complexity.",
      ],
      aiEnhancement: "AI Provider Verification auto-matches physician NPI & health plan contract terms.",
    },
    {
      step: "VBA MAIN EVENT",
      emotionQuote: `"Whatever you're doing, we should come up with something to make patients' life better each time."`,
      emotionLevel: 5,
      actions: [
        "Filter by: Drug, event type, provider, date",
        "Expand claim line for patient & provider info",
        "Authorize financial payout & verify receipts",
      ],
      keyPoints: ["Displays last 50 clinical outcome events by date with full financial audit log."],
      aiEnhancement: "Automated Financial Settlement Engine executes payout approval in under 60 seconds.",
    },
  ],
};

export function JourneyMaps() {
  const [activeTab, setActiveTab] = useState<"physician" | "sme">("physician");
  const journey = activeTab === "physician" ? PHYSICIAN_JOURNEY : SME_JOURNEY;

  // Function to compute Y position for emotion wave path
  const getWaveY = (level: number) => {
    // level 1 to 5 mapping to SVG height 120 (level 5 = y:20, level 1 = y:100)
    return 110 - level * 18;
  };

  return (
    <section id="journey" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#c2e812]/15 text-[#c2e812] border border-[#c2e812]/30">
            <Compass className="w-3.5 h-3.5" />
            <span>02b. User Journey Maps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            User Experience Journey Maps: <br />
            <span className="bg-gradient-to-r from-[#ffffff] via-[#9182c0] to-[#c2e812] bg-clip-text text-transparent">
              Steps, Emotions, Actions & AI Enhancements
            </span>
          </h2>
          <p className="text-[#b8b0d8] text-sm leading-relaxed">
            Recreated verbatim from clinician interview journey maps — mapping steps, emotional quotes, actions, key points, and AI Copilot solutions.
          </p>
        </div>

        {/* Persona Switcher Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("physician")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === "physician"
                  ? "bg-[#9182c0] text-white shadow-[0_0_20px_rgba(145,130,192,0.5)]"
                  : "text-[#b8b0d8] hover:text-white"
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>Physician Journey Map (4-Stage Flow)</span>
            </button>

            <button
              onClick={() => setActiveTab("sme")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === "sme"
                  ? "bg-[#c2e812] text-[#0a0814] shadow-[0_0_20px_rgba(194,232,18,0.5)]"
                  : "text-[#b8b0d8] hover:text-white"
              }`}
            >
              <UserCog className="w-4 h-4" />
              <span>Clinician SME Journey Map (5-Stage Flow)</span>
            </button>
          </div>
        </div>

        {/* Main Journey Map Board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="p-6 space-y-6 border-[#9182c0]/30 shadow-2xl">
              
              {/* Journey Map Header Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-[#c2e812] uppercase tracking-wider">{journey.role}</span>
                  <h3 className="text-xl font-bold text-white">{journey.title}</h3>
                  <p className="text-xs text-[#b8b0d8] mt-0.5">{journey.subtitle}</p>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#9182c0]">
                  <Sparkles className="w-3.5 h-3.5 text-[#c2e812]" />
                  <span>{journey.stages.length} Core Process Stages</span>
                </div>
              </div>

              {/* Grid Column Layout for Stages */}
              <div className={`grid grid-cols-1 ${journey.stages.length === 4 ? "md:grid-cols-4" : "md:grid-cols-5"} gap-4`}>
                
                {/* 1. STEPS (Stage Headers) */}
                {journey.stages.map((st, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#4a4073] border border-[#9182c0]/40 text-center space-y-1">
                    <span className="text-[10px] font-mono text-[#c2e812] uppercase tracking-wider block">Stage 0{idx + 1}</span>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wide">{st.step}</h4>
                  </div>
                ))}

              </div>

              {/* 2. EMOTIONS & THOUGHTS (Wavy Curve & Quotes) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#9182c0] uppercase tracking-wider font-bold flex items-center gap-1.5">
                    <Smile className="w-4 h-4 text-[#c2e812]" />
                    <span>Emotions & User Quotes Curve</span>
                  </span>
                  <span className="text-[#7a7299]">Clinician Experience Sentiment</span>
                </div>

                {/* SVG Emotion Wave Container */}
                <div className="relative rounded-2xl bg-gradient-to-r from-[#16122a] via-[#1a1532] to-[#120f24] border border-white/10 p-4 overflow-hidden">
                  {/* Wave SVG Line */}
                  <svg className="w-full h-28 overflow-visible" viewBox="0 0 1000 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#9182c0" />
                        <stop offset="50%" stopColor="#c2e812" />
                        <stop offset="100%" stopColor="#9182c0" />
                      </linearGradient>
                      <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#c2e812" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#9182c0" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Smooth Cubic Path connecting points */}
                    <path
                      d={
                        journey.stages.length === 4
                          ? `M 125,${getWaveY(journey.stages[0].emotionLevel)} C 250,${getWaveY(journey.stages[0].emotionLevel)} 250,${getWaveY(journey.stages[1].emotionLevel)} 375,${getWaveY(journey.stages[1].emotionLevel)} C 500,${getWaveY(journey.stages[1].emotionLevel)} 500,${getWaveY(journey.stages[2].emotionLevel)} 625,${getWaveY(journey.stages[2].emotionLevel)} C 750,${getWaveY(journey.stages[2].emotionLevel)} 750,${getWaveY(journey.stages[3].emotionLevel)} 875,${getWaveY(journey.stages[3].emotionLevel)}`
                          : `M 100,${getWaveY(journey.stages[0].emotionLevel)} C 200,${getWaveY(journey.stages[0].emotionLevel)} 200,${getWaveY(journey.stages[1].emotionLevel)} 300,${getWaveY(journey.stages[1].emotionLevel)} C 400,${getWaveY(journey.stages[1].emotionLevel)} 400,${getWaveY(journey.stages[2].emotionLevel)} 500,${getWaveY(journey.stages[2].emotionLevel)} C 600,${getWaveY(journey.stages[2].emotionLevel)} 600,${getWaveY(journey.stages[3].emotionLevel)} 700,${getWaveY(journey.stages[3].emotionLevel)} C 800,${getWaveY(journey.stages[3].emotionLevel)} 800,${getWaveY(journey.stages[4].emotionLevel)} 900,${getWaveY(journey.stages[4].emotionLevel)}`
                      }
                      fill="none"
                      stroke="url(#waveGrad)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    {/* Stage Points on Path */}
                    {journey.stages.map((st, idx) => {
                      const stepPct = (idx + 0.5) / journey.stages.length;
                      const cx = stepPct * 1000;
                      const cy = getWaveY(st.emotionLevel);
                      return (
                        <g key={idx}>
                          <circle cx={cx} cy={cy} r="7" fill="#c2e812" stroke="#0a0814" strokeWidth="3" />
                          <circle cx={cx} cy={cy} r="12" fill="none" stroke="#c2e812" strokeWidth="1" strokeDasharray="2,2" />
                        </g>
                      );
                    })}
                  </svg>

                  {/* Quotes Cards Grid beneath Wave */}
                  <div className={`grid grid-cols-1 ${journey.stages.length === 4 ? "md:grid-cols-4" : "md:grid-cols-5"} gap-4 pt-4 border-t border-white/10`}>
                    {journey.stages.map((st, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                        <span className="text-[10px] font-mono text-[#c2e812] font-bold block">"{st.step}" Quote</span>
                        <p className="text-[11px] text-[#b8b0d8] leading-relaxed italic">{st.emotionQuote}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. ACTIONS ROW */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-[#9182c0] uppercase tracking-wider font-bold block">
                  User Actions per Stage
                </span>

                <div className={`grid grid-cols-1 ${journey.stages.length === 4 ? "md:grid-cols-4" : "md:grid-cols-5"} gap-4`}>
                  {journey.stages.map((st, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                      <span className="text-[10px] font-mono text-[#7a7299] uppercase block font-bold">Actions</span>
                      <ul className="space-y-1">
                        {st.actions.map((act, aIdx) => (
                          <li key={aIdx} className="text-xs text-white flex items-start gap-1.5">
                            <span className="text-[#c2e812] font-bold">•</span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. KEY POINTS ROW */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-[#9182c0] uppercase tracking-wider font-bold block">
                  Key Touchpoints & CGT Drugs
                </span>

                <div className={`grid grid-cols-1 ${journey.stages.length === 4 ? "md:grid-cols-4" : "md:grid-cols-5"} gap-4`}>
                  {journey.stages.map((st, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                      <span className="text-[10px] font-mono text-[#7a7299] uppercase block font-bold">Key Points</span>
                      <ul className="space-y-1">
                        {st.keyPoints.map((kp, kIdx) => (
                          <li key={kIdx} className="text-xs text-[#b8b0d8] leading-relaxed flex items-start gap-1.5">
                            <span className="text-[#9182c0] font-bold">•</span>
                            <span>{kp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. AI COPILOT ENHANCEMENT ROW */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <span className="text-xs font-mono text-[#c2e812] uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-[#c2e812]" />
                  <span>AI Copilot Redesign Enhancements</span>
                </span>

                <div className={`grid grid-cols-1 ${journey.stages.length === 4 ? "md:grid-cols-4" : "md:grid-cols-5"} gap-4`}>
                  {journey.stages.map((st, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#c2e812]/10 border border-[#c2e812]/30 space-y-1 text-xs text-[#c2e812]">
                      <span className="font-bold text-[10px] uppercase tracking-wider block">AI Solution:</span>
                      <p className="text-[#b8b0d8] text-[11px] leading-tight">{st.aiEnhancement}</p>
                    </div>
                  ))}
                </div>
              </div>

            </GlassCard>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
