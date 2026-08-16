import React, { useState } from "react";

const businessGoals = [
  {
    id: 1,
    title: "Self-Service Search Tool",
    description: "To provide an easy-to-use self-service search tool",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    category: "User Experience"
  },
  {
    id: 2,
    title: "LPR & DICOM Integration",
    description: "This tool should leverage the Longitudinal Patient Record (LPR) and the DICOM Store",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    category: "Data Integration"
  },
  {
    id: 3,
    title: "Process Consolidation",
    description: "Consolidate the process of identifying cohorts and extracting the associated images",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    category: "Workflow"
  },
  {
    id: 4,
    title: "Cloud Storage & Analysis",
    description: "Ability to move the images to a storage bucket for further analysis",
    icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
    category: "Infrastructure"
  }
];

export function BusinessGoals() {
  const [activeGoal, setActiveGoal] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto mb-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b4fa6]/10 to-[#d6eaf8]/20 rounded-[24px] blur-3xl" />

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
              <span className="text-white/80 text-sm uppercase tracking-wider font-bold">Section 02</span>
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-3">Business Goals</h2>
            <p className="text-white/90 text-lg md:text-xl uppercase tracking-wide">Knowing Objectives</p>
          </div>
        </div>

        <div className="p-6 md:p-12">
          {/* Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessGoals.map((goal, idx) => (
              <div
                key={goal.id}
                className="group relative bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(43,79,166,0.3)] cursor-pointer overflow-hidden"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onMouseEnter={() => setActiveGoal(goal.id)}
                onMouseLeave={() => setActiveGoal(null)}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2b4fa6]/5 to-[#d6eaf8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 rounded-full backdrop-blur-sm border bg-[#2b4fa6]/10 border-[#d6eaf8]/50 text-[#2b4fa6] text-xs font-bold uppercase">
                    {goal.category}
                  </div>
                </div>

                {/* Icon with 3D effect */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] flex items-center justify-center shadow-lg transform transition-all duration-500 flex-shrink-0 ${
                    activeGoal === goal.id ? 'scale-110 rotate-6' : ''
                  }`}>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <svg className="relative w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={goal.icon} />
                    </svg>
                  </div>

                  {/* Number badge */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6eaf8]/80 backdrop-blur-sm border border-white/60 shadow-inner flex items-center justify-center">
                    <span className="text-sm font-bold text-[#2b4fa6]">{goal.id}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h4 className="text-xl font-bold text-[#2f3e53] mb-3 transition-all duration-300">
                    {goal.title}
                  </h4>
                  <p className="text-sm text-[#556479] leading-relaxed">
                    {goal.description}
                  </p>
                </div>

                {/* Bottom indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2b4fa6] to-[#4a90e2] transform transition-all duration-500 ${
                  activeGoal === goal.id ? 'scale-x-100' : 'scale-x-0'
                } origin-left`} />
              </div>
            ))}
          </div>

          {/* Divider with animated dots */}
          <div className="flex items-center justify-center gap-3 my-12">
            <div className="h-2 w-2 rounded-full bg-[#2b4fa6]/30" />
            <div className="h-2 w-2 rounded-full bg-[#2b4fa6]/50" />
            <div className="h-2 w-2 rounded-full bg-[#2b4fa6]/30" />
          </div>

          {/* Summary Section */}
          <div className="bg-gradient-to-br from-[#f8f9fa] to-white/60 backdrop-blur-md rounded-2xl border border-white/60 p-6 md:p-8 shadow-inner">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-[#2b4fa6] mb-3">Core Objectives</h3>
                <p className="text-[#556479] text-sm md:text-base leading-relaxed">
                  These business goals drive the development of the Mayo Imaging Cohort platform, ensuring seamless integration with existing systems while providing researchers and clinicians with powerful, user-friendly tools for medical imaging analysis and cohort management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
