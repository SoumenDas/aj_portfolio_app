import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./GlassBackground";
import { Stethoscope, UserCog, Bot, Sparkles, CheckCircle2, AlertTriangle, MapPin, Calendar, Briefcase, FileText } from "lucide-react";
import imgDoctor3 from "../imports/VbaPortalCaseStudy/a52f8c235407427e7d205d37c12622471558ef51.png";
import imgBusinessman1 from "../imports/VbaPortalCaseStudy/7067ba5abca83c304b17e41d8a2da34cb8f00bcd.png";

export interface PersonaData {
  roleTitle: string;
  subtitle: string;
  avatar: string;
  age: number;
  location: string;
  jobTitle: string;
  date: string;
  client: string;
  project: string;
  summary: string;
  behaviorTraits: string[];
  personality: {
    labelLeft: string;
    labelRight: string;
    value: number; // 0 to 100
  }[];
  responsibilities: {
    title: string;
    text: string;
  }[];
  frustrations: {
    title: string;
    text: string;
    aiSolution?: string;
  }[];
}

const PHYSICIAN_PERSONA: PersonaData = {
  roleTitle: "Physician",
  subtitle: "External Provider — CGT Specialist",
  avatar: imgDoctor3,
  age: 54,
  location: "New York, NY",
  jobTitle: "VBA Clinical Provider",
  date: "December 1, 2023",
  client: "Health Plans & Pharma",
  project: "VBA Platform",
  summary:
    "In summary, this persona archetype is a highly skilled and compassionate physician. This archetype administers rare drugs, collaborates on personalized treatment plans, educates patients on their conditions, and manages patient information through online forms and electronic health records. Proficient in healthcare technologies, he or she is detail-oriented, empathetic, adaptable to change, and committed to continuous learning.",
  behaviorTraits: ["PASSIONATE", "EMPATHETIC", "DEDICATED", "DETAIL-ORIENTED", "PRO-ACTIVE", "ORGANIZED"],
  personality: [
    { labelLeft: "Introvert", labelRight: "Extrovert", value: 50 },
    { labelLeft: "Analytical", labelRight: "Creative", value: 50 },
    { labelLeft: "Busy", labelRight: "Time rich", value: 20 },
    { labelLeft: "Messy", labelRight: "Organized", value: 90 },
    { labelLeft: "Independent", labelRight: "Team player", value: 50 },
  ],
  responsibilities: [
    {
      title: "Medication Administration",
      text: "Responsible for administering rare drugs to patients, ensuring they receive the precise dosage and monitoring for any potential side effects or complications.",
    },
    {
      title: "Treatment Planning",
      text: "Collaborates with physicians and specialists to develop personalized treatment plans for patients with rare diseases. Her expertise in pharmaceuticals allows her to optimize drug regimens for maximum effectiveness.",
    },
    {
      title: "Patient Education",
      text: "Takes the time to educate patients on their rare conditions and the medications they are prescribed. She communicates complex medical information in a clear and understandable manner, empowering patients to actively participate in their treatment.",
    },
    {
      title: "Collaboration",
      text: "Actively participates in interdisciplinary healthcare teams, collaborating with physicians, nurses, and other healthcare professionals to ensure holistic patient care.",
    },
  ],
  frustrations: [
    {
      title: "Limited Access to Rare Medications",
      text: "May experience frustration if there are challenges in obtaining or stocking the necessary rare medications for her patients. Supply chain issues or regulatory hurdles could impede timely access.",
      aiSolution: "AI Rule Engine alerts physician to CGT supply chain availability and contract eligibility upfront.",
    },
    {
      title: "High Administrative Burden",
      text: "If administrative tasks such as extensive paperwork or redundant data entry take up a significant portion of her time, this archetype might feel frustrated as it could detract from direct patient care.",
      aiSolution: "AI Clinical Copilot auto-extracts EMR lab values and cuts form completion time from 18m to <8m.",
    },
    {
      title: "Technological Challenges",
      text: "While proficient in technology, this archetype could experience frustration if there are frequent technical glitches in online platforms or electronic health record systems, hindering her ability to manage data.",
      aiSolution: "Distraction-free glassmorphic UI with real-time auto-saving prevents data loss.",
    },
    {
      title: "Challenges in Treatment Planning",
      text: "If there are uncertainties or obstacles in developing personalized treatment plans for patients with rare diseases, this archetype may find it frustrating, as it could affect the quality of care.",
      aiSolution: "AI Clinical Decision Support recommends evidence-based CGT protocols.",
    },
    {
      title: "Data Accuracy Concerns",
      text: "In her role of data management, Dr. Mercer may encounter frustration if there are persistent issues with the accuracy of patient information, potentially leading to errors in treatment planning or medication administration.",
      aiSolution: "AI Compliance Guard auto-validates pre-infusion lab parameters prior to contract submission.",
    },
  ],
};

const SME_PERSONA: PersonaData = {
  roleTitle: "Clinician SME",
  subtitle: "Internal Evaluator — Contract Specialist",
  avatar: imgBusinessman1,
  age: 48,
  location: "Boston, MA",
  jobTitle: "VBA Subject Matter Expert",
  date: "December 1, 2023",
  client: "Health Plans & Pharma",
  project: "VBA Platform",
  summary:
    "In summary, this persona archetype is a meticulous internal medical director and evaluator. This archetype evaluates complex Cell & Gene Therapy outcome claims against value-based contracts, reviews pended forms, and ensures strict regulatory and outcome compliance across national healthcare networks.",
  behaviorTraits: ["ANALYTICAL", "OBJECTIVE", "METICULOUS", "COMPLIANT", "STRATEGIC", "DECISIVE"],
  personality: [
    { labelLeft: "Introvert", labelRight: "Extrovert", value: 40 },
    { labelLeft: "Analytical", labelRight: "Creative", value: 85 },
    { labelLeft: "Busy", labelRight: "Time rich", value: 15 },
    { labelLeft: "Messy", labelRight: "Organized", value: 95 },
    { labelLeft: "Independent", labelRight: "Team player", value: 65 },
  ],
  responsibilities: [
    {
      title: "Outcome Contract Audit",
      text: "Audits submitted patient lab parameters and follow-up milestones against multi-million dollar value-based contract terms.",
    },
    {
      title: "Pended Form Triage",
      text: "Evaluates pended forms where lab data is missing or out-of-bounds, coordinating clarification outreach with external providers.",
    },
    {
      title: "Financial Settlement Approval",
      text: "Authorizes reimbursement tiers and performance-contingent financial payouts between health plans and manufacturers.",
    },
    {
      title: "Provider Network Guidance",
      text: "Provides expert clinical guidance to physicians regarding strict Cell & Gene Therapy documentation rules.",
    },
  ],
  frustrations: [
    {
      title: "Incomplete Submissions",
      text: "Frustration when external providers submit incomplete forms missing mandatory pre-infusion pregnancy or liver panels.",
      aiSolution: "AI Anomaly Engine blocks incomplete form submissions before they reach the SME queue.",
    },
    {
      title: "Manual Contract Calculation",
      text: "Time lost manually cross-referencing complex clinical parameters against outcome payout tables.",
      aiSolution: "AI Rule Engine automatically calculates contract tier payouts based on submitted lab data.",
    },
    {
      title: "Unstructured Outreach Communication",
      text: "Difficulty tracking back-and-forth email communications regarding pended cases.",
      aiSolution: "Unified in-app AI Outreach drafting and audit trail for all provider communications.",
    },
  ],
};

export function PersonaCard() {
  const [activeTab, setActiveTab] = useState<"physician" | "sme">("physician");
  const data = activeTab === "physician" ? PHYSICIAN_PERSONA : SME_PERSONA;

  return (
    <div className="space-y-8">
      {/* Persona Selector Header Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("physician")}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === "physician"
                ? "bg-[#9182c0] text-white shadow-[0_0_20px_rgba(145,130,192,0.5)]"
                : "text-[#b8b0d8] hover:text-white"
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            <span>Physician Persona (External Provider)</span>
          </button>

          <button
            onClick={() => setActiveTab("sme")}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === "sme"
                ? "bg-[#c2e812] text-[#0a0814] shadow-[0_0_20px_rgba(194,232,18,0.5)]"
                : "text-[#b8b0d8] hover:text-white"
            }`}
          >
            <UserCog className="w-4 h-4" />
            <span>Clinician SME Persona (Internal Evaluator)</span>
          </button>
        </div>
      </div>

      {/* Main Recreated Persona Document Board */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-white/15 bg-[#120f24] overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
            
            {/* Left Vertical Spine / Sidebar Header */}
            <div className="lg:col-span-2 bg-gradient-to-b from-[#4a4073] to-[#2d254e] p-6 flex flex-col justify-between items-center text-white border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden">
              {/* Spine Title */}
              <div className="w-full flex-1 flex items-center justify-center py-4">
                <h2 className="text-2xl sm:text-3xl font-black tracking-widest uppercase text-[#c2e812] [writing-mode:horizontal-tb] lg:[writing-mode:vertical-lr] lg:rotate-180 text-center drop-shadow-md">
                  {data.roleTitle}
                </h2>
              </div>

              {/* Metadata Spine Footer */}
              <div className="w-full space-y-3 pt-6 text-xs text-[#b8b0d8] font-mono border-t border-white/20 z-10 text-left">
                <div>
                  <span className="text-[10px] text-white/60 uppercase block">Date</span>
                  <span className="font-bold text-white text-[11px]">{data.date}</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/60 uppercase block">Client</span>
                  <span className="font-bold text-white text-[11px]">{data.client}</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/60 uppercase block">Project</span>
                  <span className="font-bold text-[#c2e812] text-[11px]">{data.project}</span>
                </div>
              </div>
            </div>

            {/* Column 1: Profile & Bio Summary */}
            <div className="lg:col-span-3 p-6 space-y-6 bg-white/5 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Profile Photo */}
                <div className="text-center space-y-3">
                  <div className="w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-tr from-[#9182c0] via-white to-[#c2e812] shadow-2xl overflow-hidden">
                    <img src={data.avatar} alt={data.roleTitle} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{data.roleTitle} Persona</h3>
                    <span className="text-xs font-mono text-[#c2e812]">{data.jobTitle}</span>
                  </div>
                </div>

                {/* Key Demographics Meta */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#7a7299] font-mono">Age:</span>
                    <span className="font-bold text-white">{data.age}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#7a7299] font-mono">Location:</span>
                    <span className="font-bold text-white">{data.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#7a7299] font-mono">Job Title:</span>
                    <span className="font-bold text-[#c2e812]">{data.jobTitle}</span>
                  </div>
                </div>

                {/* Summary Paragraph */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-[#9182c0] uppercase tracking-wider">Executive Summary:</span>
                  <p className="text-xs text-[#b8b0d8] leading-relaxed italic">{data.summary}</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#c2e812]/10 border border-[#c2e812]/30 text-xs text-[#c2e812] font-mono flex items-center gap-2">
                <Bot className="w-4 h-4 shrink-0" />
                <span>AI Agentic Archetype Validated</span>
              </div>
            </div>

            {/* Column 2: Behavior Traits & Personality Sliders */}
            <div className="lg:col-span-3 p-6 space-y-6 bg-white/5 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Behavior Traits Pills */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Behavior Traits</h4>
                  <div className="flex flex-wrap gap-2">
                    {data.behaviorTraits.map((trait, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-[11px] font-bold bg-[#4a4073]/60 text-white border border-[#9182c0]/40 uppercase tracking-wider"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Personality Spectrum Sliders */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Personality Spectrum</h4>
                  
                  <div className="space-y-3">
                    {data.personality.map((p, idx) => (
                      <div key={idx} className="space-y-1 text-xs">
                        <div className="flex justify-between text-[#b8b0d8] font-medium text-[11px]">
                          <span>{p.labelLeft}</span>
                          <span>{p.labelRight}</span>
                        </div>
                        <div className="relative w-full h-2 rounded-full bg-white/10">
                          <div
                            className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#c2e812] shadow-[0_0_10px_#c2e812] border border-[#0a0814]"
                            style={{ left: `calc(${p.value}% - 7px)` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-[#7a7299] font-mono">
                Extrapolated via Clinician Interview NLP
              </div>
            </div>

            {/* Column 3: Roles & Responsibilities + Frustrations & AI Solutions */}
            <div className="lg:col-span-4 p-6 space-y-6 bg-white/5 flex flex-col justify-between">
              <div className="space-y-6 max-h-[580px] overflow-y-auto pr-1">
                
                {/* Role and Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Role & Responsibilities</h4>
                  <div className="space-y-3">
                    {data.responsibilities.map((r, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-[#9182c0] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <h5 className="font-bold text-white text-xs">{r.title}</h5>
                        </div>
                        <p className="text-xs text-[#b8b0d8] leading-relaxed pl-7">{r.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frustrations & AI Solutions */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <h4 className="text-xs font-bold text-[#ff6b6b] uppercase tracking-wider font-mono flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#ff6b6b]" />
                    <span>Frustrations & AI Solutions</span>
                  </h4>
                  
                  <div className="space-y-3">
                    {data.frustrations.map((f, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-red-500/5 border border-red-500/20 space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <div>
                            <h5 className="font-bold text-red-300 text-xs">{f.title}</h5>
                            <p className="text-xs text-[#b8b0d8] leading-relaxed mt-0.5">{f.text}</p>
                          </div>
                        </div>

                        {f.aiSolution && (
                          <div className="p-2.5 rounded-lg bg-[#c2e812]/10 border border-[#c2e812]/30 text-xs text-[#c2e812] flex items-start gap-2 ml-7">
                            <Sparkles className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold block text-[10px] uppercase tracking-wider">AI Solution:</span>
                              <span className="text-[#b8b0d8]">{f.aiSolution}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#c2e812] font-mono">
                <span>VBA Platform Persona Card</span>
                <CheckCircle2 className="w-4 h-4 text-[#c2e812]" />
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
