import React, { useState } from "react";

const toolFeatures = [
  {
    id: 1,
    title: "Mayo Clinic Staff",
    description: "Used by Mayo Clinic staff",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    detail: "Designed specifically for Mayo Clinic clinical and research staff to streamline their workflow"
  },
  {
    id: 2,
    title: "Cohort-Based Search",
    description: "Cohorts based search the list of patients on user specified search criteria",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    detail: "Advanced search capabilities allowing users to define and filter patient cohorts using custom criteria"
  },
  {
    id: 3,
    title: "Imaging Study Extraction",
    description: "Identifying cohorts and extracting associated imaging studies from the MCC",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    detail: "Seamlessly extract and access medical imaging data associated with identified patient cohorts"
  }
];

export function About() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

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
              <span className="text-white/80 text-sm uppercase tracking-wider font-bold">Section 01</span>
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-3">About Product</h2>
            <p className="text-white/90 text-lg md:text-xl uppercase tracking-wide">Know Your Tool</p>
          </div>
        </div>

        <div className="p-6 md:p-12">
          {/* Tool Title */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#2b4fa6]">
                MAYO Imaging Cohort
              </h3>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 p-6 shadow-lg">
              <p className="text-[#556479] text-base md:text-lg leading-relaxed">
                A comprehensive platform designed to empower Mayo Clinic staff with advanced tools for patient cohort identification, medical imaging search, and data extraction from the Mayo Clinic system.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2b4fa6] mb-8 text-center">
              Key Features
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {toolFeatures.map((feature, idx) => (
                <div
                  key={feature.id}
                  className="group relative bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(43,79,166,0.3)] cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  onMouseEnter={() => setActiveFeature(feature.id)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2b4fa6]/5 to-[#d6eaf8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-[#d6eaf8]/80 backdrop-blur-sm border border-white/60 shadow-inner">
                    <span className="text-sm font-bold text-[#2b4fa6]">{feature.id}</span>
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-4 flex justify-center">
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] flex items-center justify-center shadow-lg transform transition-all duration-500 ${
                      activeFeature === feature.id ? 'scale-110 rotate-6' : ''
                    }`}>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <svg className="relative w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h4 className="text-lg font-bold text-[#2f3e53] mb-3 text-center transition-all duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[#556479] leading-relaxed text-center mb-3">
                      {feature.description}
                    </p>

                    {/* Additional detail on hover */}
                    <div className={`transition-all duration-300 ${
                      activeFeature === feature.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      <div className="pt-3 border-t border-[#d6eaf8]/50">
                        <p className="text-xs text-[#2b4fa6] leading-relaxed text-center">
                          {feature.detail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2b4fa6] to-[#4a90e2] transform transition-all duration-500 rounded-b-2xl ${
                    activeFeature === feature.id ? 'scale-x-100' : 'scale-x-0'
                  } origin-left`} />
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

          {/* Stats Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Staff-Focused", value: "100%" },
              { icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4", label: "Data Sources", value: "MCC" },
              { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", label: "Search Type", value: "Cohort" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/60 backdrop-blur-md rounded-xl border border-white/60 p-4 text-center shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] rounded-xl flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                    </svg>
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#2b4fa6] mb-1">{stat.value}</p>
                <p className="text-xs text-[#556479] uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
