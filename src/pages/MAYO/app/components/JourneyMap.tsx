import React, { useState } from "react";

const stages = [
  {
    title: "1. Define Objective",
    actions: "Identify research goals and required patient demographics.",
    emotion: "Motivated",
    emotionIcon: "🎯",
    painPoints: "Unclear data availability; fragmented historical records.",
    opportunities: "Provide a high-level dashboard of available modalities."
  },
  {
    title: "2. Formulate Criteria",
    actions: "Translate medical requirements into search parameters (NLP, parameters).",
    emotion: "Overwhelmed",
    emotionIcon: "🤯",
    painPoints: "Complex UI for search; rigid boolean logic requirements.",
    opportunities: "Implement NLP-based natural language search bar."
  },
  {
    title: "3. Build Cohort",
    actions: "Run queries to generate the initial patient list and refine filters.",
    emotion: "Focused",
    emotionIcon: "🔍",
    painPoints: "Slow query times; difficult to see immediate impacts of filters.",
    opportunities: "Real-time count updates as filters are toggled."
  },
  {
    title: "4. Review Profiles",
    actions: "Inspect individual patient records to ensure cohort accuracy.",
    emotion: "Cautious",
    emotionIcon: "🤔",
    painPoints: "Navigating between list and details loses context.",
    opportunities: "Side-panel quick view for patient profile summaries."
  },
  {
    title: "5. Request Imaging",
    actions: "Select relevant MRI/CT scans associated with the cohort.",
    emotion: "Relieved",
    emotionIcon: "😌",
    painPoints: "Some imaging data lacks proper metadata or is restricted.",
    opportunities: "Clear badging for imaging data quality and access level."
  },
  {
    title: "6. Export Data",
    actions: "Export study IDs or patient data for external analysis.",
    emotion: "Accomplished",
    emotionIcon: "✅",
    painPoints: "Formatting mismatches with external statistical tools.",
    opportunities: "Customizable CSV/JSON export templates."
  }
];

export function JourneyMap() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto mb-16">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b4fa6]/10 to-[#d6eaf8]/20 rounded-[24px] blur-3xl" />

      {/* Glassmorphism container */}
      <div className="relative bg-white/70 backdrop-blur-xl rounded-[24px] shadow-2xl border border-white/50 p-4 sm:p-6 lg:p-10 overflow-hidden">
        {/* Floating particles effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#2b4fa6] rounded-full opacity-10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative mb-8 border-b border-[#dcdcdc]/30 pb-6">
          <h2 className="text-[#2b4fa6] text-2xl sm:text-3xl font-bold mb-2">
            Physician / Researcher Journey Map
          </h2>
          <p className="text-[#556479] text-base sm:text-lg">Visualizing the end-to-end experience of building an imaging cohort</p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className="group relative bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 overflow-hidden flex flex-col shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(43,79,166,0.3)] cursor-pointer"
              style={{
                animationDelay: `${idx * 0.1}s`,
                perspective: "1000px"
              }}
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* 3D gradient header */}
              <div className={`relative bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] text-white p-4 transform transition-all duration-500 ${activeCard === idx ? 'scale-105' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="relative font-bold text-base sm:text-lg flex items-center gap-2">
                  <span className="text-2xl transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                    {stage.emotionIcon}
                  </span>
                  {stage.title}
                </h3>
              </div>

              <div className="relative p-4 flex-1 flex flex-col gap-4">
                {/* User Actions */}
                <div className="transform transition-all duration-300 hover:translate-x-1">
                  <h4 className="text-xs uppercase font-bold text-[#556479] mb-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] flex items-center justify-center shadow-md">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    User Actions
                  </h4>
                  <p className="text-sm text-[#2f3e53] leading-relaxed">{stage.actions}</p>
                </div>

                {/* Emotional State */}
                <div className="bg-gradient-to-r from-[#d6eaf8]/60 to-[#d6eaf8]/40 backdrop-blur-sm p-3 rounded-xl border border-[#d6eaf8]/70 transform transition-all duration-300 hover:scale-105">
                  <h4 className="text-xs uppercase font-bold text-[#556479] mb-2">Emotional State</h4>
                  <div className="flex items-center gap-2">
                    <span className={`text-xl transform transition-all duration-500 ${activeCard === idx ? 'scale-150 rotate-12' : ''}`}>
                      {stage.emotionIcon}
                    </span>
                    <span className="text-sm font-medium text-[#2f3e53]">{stage.emotion}</span>
                  </div>
                </div>

                {/* Pain Points with 3D effect */}
                <div className="relative bg-gradient-to-br from-[#2b4fa6]/10 to-[#2b4fa6]/5 backdrop-blur-sm p-3 rounded-xl border border-[#2b4fa6]/30 shadow-inner transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute top-1 right-1 w-2 h-2 bg-[#2b4fa6] rounded-full opacity-50" />
                  <h4 className="text-xs uppercase font-bold text-[#2b4fa6] mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Pain Points
                  </h4>
                  <p className="text-sm text-[#556479] leading-snug">{stage.painPoints}</p>
                </div>

                {/* Opportunities with glow effect */}
                <div className="relative bg-gradient-to-br from-[#4a90e2]/10 to-[#d6eaf8]/20 backdrop-blur-sm p-3 rounded-xl border border-[#4a90e2]/30 shadow-inner mt-auto transform transition-all duration-300 hover:shadow-[0_0_20px_rgba(43,79,166,0.2)] hover:-translate-y-1">
                  <div className="absolute top-1 right-1 w-2 h-2 bg-[#4a90e2] rounded-full opacity-50" />
                  <h4 className="text-xs uppercase font-bold text-[#4a90e2] mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Opportunities
                  </h4>
                  <p className="text-sm text-[#556479] leading-snug">{stage.opportunities}</p>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent">
                <div className={`h-full bg-gradient-to-r from-[#2b4fa6] to-[#4a90e2] transform transition-all duration-500 ${activeCard === idx ? 'scale-x-100' : 'scale-x-0'} origin-left`} />
              </div>
            </div>
          ))}
        </div>

        {/* Connection lines between stages */}
        <div className="hidden lg:block absolute top-[200px] left-0 right-0 h-px pointer-events-none">
          <div className="relative w-full h-full">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 bg-[#2b4fa6]/20 h-px"
                style={{
                  left: `${(i + 1) * 16.66}%`,
                  width: '16.66%'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
