import React, { useState } from "react";
import screen1 from "../../imports/image-0.png";
import screen2 from "../../imports/image-1.png";
import screen3 from "../../imports/image-2.png";
import screen4 from "../../imports/image-3.png";

const mockups = [
  {
    id: 1,
    title: "Login & Welcome",
    description: "Secure authentication gateway for Mayo Clinic staff",
    image: screen1,
  },
  {
    id: 2,
    title: "Cohort Builder",
    description: "Advanced cohort definition and search criteria",
    image: screen2,
  },
  {
    id: 3,
    title: "List View & Filters",
    description: "Comprehensive patient data filtering and visualization",
    image: screen3,
  },
  {
    id: 4,
    title: "Data Analysis",
    description: "Detailed cohort analysis and imaging extraction",
    image: screen4,
  },
];

export function Mockups() {
  const [activeScreen, setActiveScreen] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-[1400px] mx-auto mb-16">
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
              <span className="text-white/80 text-sm uppercase tracking-wider font-bold">Interface Showcase</span>
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-3">Product Mockups</h2>
            <p className="text-white/90 text-lg md:text-xl uppercase tracking-wide">Visual Walkthrough</p>
          </div>
        </div>

        <div className="p-6 md:p-12">
          {/* Mockups Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {mockups.map((mockup, idx) => {
              return (
                <div
                  key={mockup.id}
                  className="group relative"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                  onMouseEnter={() => setActiveScreen(mockup.id)}
                  onMouseLeave={() => setActiveScreen(null)}
                >
                  {/* Screen Info Card */}
                  <div className="relative bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 p-6 mb-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(43,79,166,0.3)]">
                    <div className="flex items-start gap-4">
                      {/* Number badge */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">{mockup.id}</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#2f3e53] mb-2">
                          {mockup.title}
                        </h3>
                        <p className="text-sm text-[#556479] leading-relaxed">
                          {mockup.description}
                        </p>
                      </div>

                      {/* Screen icon */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#d6eaf8]/50 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#2b4fa6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom indicator */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2b4fa6] to-[#4a90e2] transform transition-all duration-500 rounded-b-2xl ${
                      activeScreen === mockup.id ? 'scale-x-100' : 'scale-x-0'
                    } origin-left`} />
                  </div>

                  {/* MacBook Mockup */}
                  <div className={`relative transform transition-all duration-700 ${
                    activeScreen === mockup.id ? 'scale-105 -translate-y-2' : ''
                  }`}>
                    {/* MacBook Body */}
                    <div className="relative bg-gradient-to-b from-[#e8e8e8] to-[#d0d0d0] rounded-2xl p-2 md:p-3 shadow-2xl">
                      {/* Screen Bezel */}
                      <div className="relative bg-black rounded-lg p-1.5 md:p-2 shadow-inner">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-32 h-4 md:h-6 bg-black rounded-b-2xl z-10" />

                        {/* Screen Content */}
                        <div className="relative bg-white rounded-sm overflow-hidden shadow-lg" style={{ aspectRatio: '1366/768' }}>
                          <img
                            src={mockup.image}
                            alt={mockup.title}
                            className="w-full h-full object-cover"
                          />

                          {/* Screen Glare Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </div>

                      {/* Keyboard Base */}
                      <div className="absolute -bottom-1.5 md:-bottom-2 left-0 right-0 h-4 md:h-6 bg-gradient-to-b from-[#d0d0d0] to-[#b8b8b8] rounded-b-2xl shadow-md">
                        {/* Trackpad indication */}
                        <div className="absolute bottom-0.5 md:bottom-1 left-1/2 -translate-x-1/2 w-16 md:w-24 h-2 md:h-3 bg-[#a8a8a8] rounded-sm" />
                      </div>
                    </div>

                    {/* Shadow beneath laptop */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-[#2b4fa6]/20 blur-2xl rounded-full" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Divider with animated dots */}
          <div className="flex items-center justify-center gap-3 my-12">
            <div className="h-2 w-2 rounded-full bg-[#2b4fa6]/30" />
            <div className="h-2 w-2 rounded-full bg-[#2b4fa6]/50" />
            <div className="h-2 w-2 rounded-full bg-[#2b4fa6]/30" />
          </div>

          {/* Features Summary */}
          <div className="bg-gradient-to-br from-[#f8f9fa] to-white/60 backdrop-blur-md rounded-2xl border border-white/60 p-6 md:p-8 shadow-inner">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-[#2b4fa6] mb-3">Complete Workflow Solution</h3>
                <p className="text-[#556479] text-sm md:text-base leading-relaxed">
                  From secure login to advanced cohort analysis, the Mayo Imaging Cohort platform provides a comprehensive suite of tools designed to streamline research workflows and maximize efficiency for medical imaging professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
