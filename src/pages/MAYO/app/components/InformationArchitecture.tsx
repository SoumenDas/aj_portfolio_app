import React, { useState } from "react";

interface FeatureNode {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "core" | "data" | "search" | "export";
}

const features: FeatureNode[] = [
  {
    id: "cohort-builder",
    title: "Cohort Builder",
    description: "Advanced query interface for defining patient cohorts based on clinical criteria",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    category: "core"
  },
  {
    id: "search-engine",
    title: "Search Engine",
    description: "Natural language processing and Boolean search capabilities for complex queries",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    category: "search"
  },
  {
    id: "lpr-integration",
    title: "LPR Integration",
    description: "Seamless connection to Longitudinal Patient Records for comprehensive data access",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    category: "data"
  },
  {
    id: "dicom-store",
    title: "DICOM Store",
    description: "Direct access to medical imaging archives with DICOM standards compliance",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    category: "data"
  },
  {
    id: "patient-viewer",
    title: "Patient Profile Viewer",
    description: "Comprehensive patient details with medical history and imaging metadata",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    category: "core"
  },
  {
    id: "filter-system",
    title: "Dynamic Filters",
    description: "Real-time filtering with instant count updates and visual feedback",
    icon: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
    category: "search"
  },
  {
    id: "imaging-selector",
    title: "Imaging Selector",
    description: "Multi-modality imaging selection with MRI, CT, and X-ray support",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    category: "core"
  },
  {
    id: "export-engine",
    title: "Export Engine",
    description: "Flexible data export in CSV, JSON, or direct cloud storage integration",
    icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
    category: "export"
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Visual insights and cohort statistics with interactive charts",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    category: "core"
  }
];

const categoryConfig = {
  core: { label: "Core Features", color: "from-[#2b4fa6] to-[#1a3a7d]", accent: "#2b4fa6" },
  data: { label: "Data Integration", color: "from-[#2b4fa6] to-[#1a3a7d]", accent: "#2b4fa6" },
  search: { label: "Search & Query", color: "from-[#2b4fa6] to-[#1a3a7d]", accent: "#2b4fa6" },
  export: { label: "Export & Analysis", color: "from-[#2b4fa6] to-[#1a3a7d]", accent: "#2b4fa6" }
};

export function InformationArchitecture() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFeatures = selectedCategory
    ? features.filter(f => f.category === selectedCategory)
    : features;

  return (
    <div className="relative w-full max-w-[1200px] mx-auto mb-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b4fa6]/10 to-[#d6eaf8]/20 rounded-[32px] blur-3xl" />

      {/* Main container */}
      <div className="relative bg-white/70 backdrop-blur-xl rounded-[24px] shadow-2xl border border-white/50 overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-16 h-1 bg-white/60 rounded-full" />
              <span className="text-white/80 text-sm uppercase tracking-wider font-bold">Section 05</span>
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-3">Information Architecture</h2>
            <p className="text-white/90 text-lg md:text-xl uppercase tracking-wide">Product's Infrastructure & Features</p>
          </div>
        </div>

        <div className="p-6 md:p-12">
          {/* Category Filter */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === null
                    ? 'bg-gradient-to-r from-[#2b4fa6] to-[#1a3a7d] text-white shadow-lg'
                    : 'bg-white/60 backdrop-blur-md text-[#556479] border border-white/60 hover:bg-white/80'
                }`}
              >
                All Features
              </button>
              {Object.entries(categoryConfig).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === key
                      ? `bg-gradient-to-r ${config.color} text-white shadow-lg`
                      : 'bg-white/60 backdrop-blur-md text-[#556479] border border-white/60 hover:bg-white/80'
                  }`}
                >
                  {config.label}
                </button>
              ))}
            </div>
          </div>

          {/* Architecture Diagram - Layered View */}
          <div className="relative mb-12">
            {/* Connection lines background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <svg className="w-full h-full opacity-20" style={{ minHeight: '600px' }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2b4fa6" />
                    <stop offset="100%" stopColor="#4a90e2" />
                  </linearGradient>
                </defs>
                {/* Decorative connecting lines */}
                {filteredFeatures.map((_, idx) => (
                  <line
                    key={idx}
                    x1={`${10 + (idx % 3) * 30}%`}
                    y1={`${20 + Math.floor(idx / 3) * 30}%`}
                    x2={`${40 + (idx % 2) * 20}%`}
                    y2={`${40 + (idx % 3) * 20}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  />
                ))}
              </svg>
            </div>

            {/* Feature Nodes Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFeatures.map((feature, idx) => {
                const config = categoryConfig[feature.category];
                const isActive = activeNode === feature.id;

                return (
                  <div
                    key={feature.id}
                    className="group relative bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(43,79,166,0.3)] cursor-pointer"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                    onMouseEnter={() => setActiveNode(feature.id)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    {/* Animated gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                    {/* Category badge */}
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase bg-gradient-to-r ${config.color} text-white shadow-lg`}>
                        {config.label.split(' ')[0]}
                      </div>
                    </div>

                    {/* Icon container */}
                    <div className="relative mb-4 flex items-start gap-4">
                      <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center shadow-md transform transition-all duration-500 ${isActive ? 'scale-110 rotate-6' : ''}`}>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <svg className="relative w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                        </svg>
                      </div>

                      {/* Pulse indicator */}
                      <div className={`mt-2 w-3 h-3 rounded-full transition-all duration-500 ${
                        isActive
                          ? `bg-gradient-to-r ${config.color} animate-pulse`
                          : 'bg-gray-300/50'
                      }`} />
                    </div>

                    {/* Content */}
                    <h4 className="relative text-lg font-bold text-[#2f3e53] mb-2 transition-all duration-300">
                      {feature.title}
                    </h4>
                    <p className="relative text-sm text-[#556479] leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Bottom indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent">
                      <div className={`h-full bg-gradient-to-r ${config.color} transform transition-all duration-500 ${isActive ? 'scale-x-100' : 'scale-x-0'} origin-left`} />
                    </div>

                    {/* Corner accent */}
                    <div className={`absolute bottom-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${config.color} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* System Flow Visualization */}
          <div className="relative bg-gradient-to-br from-[#f8f9fa] to-white/60 backdrop-blur-md rounded-2xl border border-white/60 p-8 shadow-inner">
            <h3 className="text-2xl font-bold text-[#2b4fa6] mb-6 text-center">System Data Flow</h3>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
              {[
                { label: "Data Sources", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7", sub: "LPR & DICOM" },
                { label: "Processing", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", sub: "Query & Filter" },
                { label: "Visualization", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", sub: "Dashboard" },
                { label: "Export", icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12", sub: "CSV/Cloud" }
              ].map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="group relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] flex items-center justify-center shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-6 cursor-pointer">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <svg className="relative w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                      </svg>
                    </div>
                    <p className="mt-3 font-bold text-[#2f3e53] text-sm">{step.label}</p>
                    <p className="text-xs text-[#556479]">{step.sub}</p>
                  </div>

                  {idx < 3 && (
                    <div className="hidden md:flex items-center">
                      <svg className="w-12 h-6 text-[#2b4fa6]/30" fill="none" stroke="currentColor" viewBox="0 0 48 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h40m0 0l-8-8m8 8l-8 8" className="animate-pulse" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Stats Summary */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "9", label: "Core Features" },
              { value: "4", label: "Data Sources" },
              { value: "3", label: "Export Formats" },
              { value: "Real-time", label: "Processing" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/60 backdrop-blur-md rounded-xl border border-white/60 p-4 text-center shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <p className="text-2xl md:text-3xl font-bold text-[#2b4fa6] mb-1">{stat.value}</p>
                <p className="text-xs text-[#556479] uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
