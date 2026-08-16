import React, { useState } from "react";

const challengesData = [
  {
    id: 1,
    title: "Mayo Clinic Staff Usage",
    description: "Used by Mayo Clinic staff for cohort-based patient searches",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
  },
  {
    id: 2,
    title: "Search Criteria Complexity",
    description: "Cohorts based search of patient lists on user-specified search criteria",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  },
  {
    id: 3,
    title: "Imaging Study Extraction",
    description: "Identifying cohorts and extracting associated imaging studies from the MCC",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }
];

const painPointsData = [
  {
    id: 1,
    title: "LPR & DICOM Integration",
    description: "Tool should leverage the Longitudinal Patient Record (LPR) and the DICOM Store",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    severity: "high"
  },
  {
    id: 2,
    title: "Process Consolidation",
    description: "Consolidate the process of identifying cohorts and extracting the associated images",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    severity: "medium"
  },
  {
    id: 3,
    title: "Storage & Analysis",
    description: "Ability to move the images to a storage bucket for further analysis",
    icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
    severity: "medium"
  }
];

export function ChallengesPainPoints() {
  const [activeChallenge, setActiveChallenge] = useState<number | null>(null);
  const [activePainPoint, setActivePainPoint] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto mb-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b4fa6]/10 to-[#d6eaf8]/20 rounded-[32px] blur-3xl" />

      {/* Main glassmorphism container */}
      <div className="relative bg-white/70 backdrop-blur-xl rounded-[24px] shadow-2xl border border-white/50 overflow-hidden">
        {/* Header section with 3D effect */}
        <div className="relative bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-16 h-1 bg-white/60 rounded-full" />
              <span className="text-white/80 text-sm uppercase tracking-wider font-bold">Section 03</span>
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-3">Challenges & Pain Points</h2>
            <p className="text-white/90 text-lg md:text-xl uppercase tracking-wide">Knowing What to Solve</p>
          </div>
        </div>

        <div className="p-6 md:p-12">
          {/* Challenges Section */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#2b4fa6]">
                Challenges
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challengesData.map((challenge, idx) => (
                <div
                  key={challenge.id}
                  className="group relative bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(43,79,166,0.3)] cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  onMouseEnter={() => setActiveChallenge(challenge.id)}
                  onMouseLeave={() => setActiveChallenge(null)}
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2b4fa6]/5 to-[#d6eaf8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-[#d6eaf8]/80 backdrop-blur-sm border border-white/60 shadow-inner">
                    <span className="text-sm font-bold text-[#2b4fa6]">{challenge.id}</span>
                  </div>

                  {/* Icon with 3D effect */}
                  <div className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] flex items-center justify-center shadow-lg transform transition-all duration-500 ${activeChallenge === challenge.id ? 'scale-110 rotate-6' : ''}`}>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <svg className="relative w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={challenge.icon} />
                    </svg>
                  </div>

                  {/* Content */}
                  <h4 className="relative text-xl font-bold text-[#2f3e53] mb-3 transition-all duration-300">
                    {challenge.title}
                  </h4>
                  <p className="relative text-sm text-[#556479] leading-relaxed">
                    {challenge.description}
                  </p>

                  {/* Bottom glow indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2b4fa6] to-[#4a90e2] transform transition-all duration-500 ${activeChallenge === challenge.id ? 'scale-x-100' : 'scale-x-0'} origin-left`} />
                </div>
              ))}
            </div>
          </div>

          {/* Divider with animated dots */}
          <div className="flex items-center justify-center gap-3 my-12">
            <div className="h-2 w-2 rounded-full bg-[#2b4fa6]/30" />
            <div className="h-2 w-2 rounded-full bg-[#2b4fa6]/50" />
            <div className="h-2 w-2 rounded-full bg-[#2b4fa6]/30" />
          </div>

          {/* Pain Points Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#2b4fa6]">
                Pain Points
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {painPointsData.map((painPoint, idx) => (
                <div
                  key={painPoint.id}
                  className="group relative bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(43,79,166,0.3)] cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  onMouseEnter={() => setActivePainPoint(painPoint.id)}
                  onMouseLeave={() => setActivePainPoint(null)}
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2b4fa6]/5 to-[#d6eaf8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Severity indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-sm border bg-[#2b4fa6]/10 border-[#d6eaf8]/50 text-[#2b4fa6] text-xs font-bold uppercase">
                      <div className="w-2 h-2 rounded-full bg-[#2b4fa6]" />
                      {painPoint.severity}
                    </div>
                  </div>

                  {/* Icon with 3D effect */}
                  <div className="relative w-16 h-16 mb-6">
                    <div className={`relative w-full h-full rounded-2xl bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] flex items-center justify-center shadow-lg transform transition-all duration-500 ${activePainPoint === painPoint.id ? 'scale-110 rotate-6' : ''}`}>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <svg className="relative w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={painPoint.icon} />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="relative text-xl font-bold text-[#2f3e53] mb-3 transition-all duration-300">
                    {painPoint.title}
                  </h4>
                  <p className="relative text-sm text-[#556479] leading-relaxed">
                    {painPoint.description}
                  </p>

                  {/* Pulsing bottom indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-[#2b4fa6] to-[#4a90e2] transform transition-all duration-500 ${activePainPoint === painPoint.id ? 'translate-x-0' : '-translate-x-full'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
