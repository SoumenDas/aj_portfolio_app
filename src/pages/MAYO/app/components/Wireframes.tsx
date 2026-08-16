import React, { useState } from "react";
import wireframe1 from "../../imports/wireframes/home-wireframe.png";
import wireframe2 from "../../imports/wireframes/cohort-list-wireframe.png";
import wireframe3 from "../../imports/wireframes/record-drilldown-wireframe.png";
import wireframe4 from "../../imports/wireframes/gcp-bucket-wireframe.png";

const wireframes = [
  {
    id: 1,
    title: "Home Search",
    description: "Main search interface for patient cohort discovery",
    image: wireframe1,
  },
  {
    id: 2,
    title: "Cohort List View",
    description: "Comprehensive list view with advanced filtering",
    image: wireframe2,
  },
  {
    id: 3,
    title: "Record Drilldown",
    description: "Detailed patient record view with imaging data",
    image: wireframe3,
  },
  {
    id: 4,
    title: "GCP Bucket Management",
    description: "Cloud storage bucket selection and management",
    image: wireframe4,
  },
];

export function Wireframes() {
  const [activeWireframe, setActiveWireframe] = useState<number | null>(null);

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
              <span className="text-white/80 text-sm uppercase tracking-wider font-bold">Design Process</span>
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-3">Wireframes</h2>
            <p className="text-white/90 text-lg md:text-xl uppercase tracking-wide">Low-Fidelity Design</p>
          </div>
        </div>

        <div className="p-6 md:p-12">
          {/* Wireframes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {wireframes.map((wireframe, idx) => {
              return (
                <div
                  key={wireframe.id}
                  className="group relative"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                  onMouseEnter={() => setActiveWireframe(wireframe.id)}
                  onMouseLeave={() => setActiveWireframe(null)}
                >
                  {/* Wireframe Info Card */}
                  <div className="relative bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 p-6 mb-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(43,79,166,0.3)]">
                    <div className="flex items-start gap-4">
                      {/* Number badge */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">{wireframe.id}</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#2f3e53] mb-2">
                          {wireframe.title}
                        </h3>
                        <p className="text-sm text-[#556479] leading-relaxed">
                          {wireframe.description}
                        </p>
                      </div>

                      {/* Wireframe icon */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#d6eaf8]/50 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#2b4fa6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom indicator */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2b4fa6] to-[#4a90e2] transform transition-all duration-500 rounded-b-2xl ${
                      activeWireframe === wireframe.id ? 'scale-x-100' : 'scale-x-0'
                    } origin-left`} />
                  </div>

                  {/* MacBook Mockup */}
                  <div className={`relative transform transition-all duration-700 ${
                    activeWireframe === wireframe.id ? 'scale-105 -translate-y-2' : ''
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
                            src={wireframe.image}
                            alt={wireframe.title}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-[#2b4fa6] mb-3">Design Foundation</h3>
                <p className="text-[#556479] text-sm md:text-base leading-relaxed">
                  These wireframes represent the initial low-fidelity design phase, establishing the core information architecture and user flow patterns before moving to high-fidelity mockups and final implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
