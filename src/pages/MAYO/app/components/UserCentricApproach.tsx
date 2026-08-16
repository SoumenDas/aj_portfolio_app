import React, { useState } from "react";
import imgSkills1 from "../../imports/Group43543/4a71ef3fe6ffad184ed57007ce6b59712f6a7835.png";
import imgBulb1 from "../../imports/Group43543/f3600bc0924c335061ff699965fd6e6b158151dd.png";
import imgSearch1 from "../../imports/Group43543/76e540cc911b933df88688eddfb76d645ce4ae73.png";
import imgIdea1 from "../../imports/Group43543/61f2edd61321d0c411480f38811d976dcc953327.png";
import imgComputer1 from "../../imports/Group43543/798df4a2e3f80b0f398138e6340eae1a96efadb9.png";
import imgDesign1 from "../../imports/Group43543/b41f3c9b25f3d0b15f4ab8eb32a88dac6bf35e43.png";
import imgDevelopers1 from "../../imports/Group43543/9daf5ae4edf7bffff0331769bb20923b16e98f5c.png";

const uxSteps = [
  {
    id: 1,
    title: "Discover",
    description: "Understanding user needs, pain points, and business requirements through AI-powered research and data analysis",
    icon: imgBulb1
  },
  {
    id: 2,
    title: "Define",
    description: "Clarifying problems and opportunities based on research insights with AI-driven pattern recognition",
    icon: imgSearch1
  },
  {
    id: 3,
    title: "Ideate",
    description: "Generating creative solutions and exploring different approaches leveraging AI First methodologies",
    icon: imgIdea1
  },
  {
    id: 4,
    title: "Design",
    description: "Creating wireframes, prototypes, and high-fidelity designs using AI-assisted design tools",
    icon: imgComputer1
  },
  {
    id: 5,
    title: "UX Tool kit",
    description: "Implementing AI-powered design systems and reusable components for intelligent user experiences",
    icon: imgDesign1
  },
  {
    id: 6,
    title: "Dev Support",
    description: "Collaborating with developers to ensure quality implementation with AI-enhanced workflows",
    icon: imgDevelopers1
  }
];

export function UserCentricApproach() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

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
              <span className="text-white/80 text-sm uppercase tracking-wider font-bold">Section 04</span>
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-3">CitiusTech's User Centric Approach</h2>
            <p className="text-white/90 text-lg md:text-xl uppercase tracking-wide">UX Methodology</p>
          </div>
        </div>

        <div className="p-6 md:p-12">
          {/* Introduction Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-lg">
                <img src={imgSkills1} alt="UX Methodology" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#2b4fa6]">
                Our Approach
              </h3>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2b4fa6] mt-2 flex-shrink-0" />
                  <p className="text-[#556479] text-base leading-relaxed">
                    Our goal was to create a seamless application that enables users to create, manage, and track their claims with ease, leveraging AI First approach for intelligent automation and enhanced user experiences.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2b4fa6] mt-2 flex-shrink-0" />
                  <p className="text-[#556479] text-base leading-relaxed">
                    We approached this by aligning business goals with user needs through CT's standardized iterative UX design process, integrating AI-powered insights at every stage to optimize workflows and deliver data-driven solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* UX Process Steps */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2b4fa6] mb-8 text-center">
              UX Design Process
            </h3>

            {/* Curved connecting line */}
            <div className="relative">
              <div className="hidden lg:block absolute top-20 left-0 right-0 h-px pointer-events-none">
                <svg className="w-full h-32 -translate-y-16" viewBox="0 0 1200 128" preserveAspectRatio="none">
                  <path
                    d="M 100,64 Q 250,30 400,64 T 700,64 Q 850,30 1100,64"
                    stroke="#2b4fa6"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.2"
                    strokeDasharray="8,8"
                  />
                </svg>
              </div>

              {/* Process Steps Grid */}
              <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {uxSteps.map((step, idx) => (
                  <div
                    key={step.id}
                    className="group relative bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 p-4 shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(43,79,166,0.3)] cursor-pointer"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2b4fa6]/5 to-[#d6eaf8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    {/* Icon Container */}
                    <div className="relative mb-3 flex justify-center">
                      <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 shadow-md flex items-center justify-center transform transition-all duration-500 ${
                        activeStep === step.id
                          ? 'border-[#2b4fa6] scale-110'
                          : 'border-[#d6eaf8]'
                      }`}>
                        <img
                          src={step.icon}
                          alt={step.title}
                          className="w-10 h-10 md:w-12 md:h-12 object-contain"
                        />
                      </div>

                      {/* Step number badge */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#2b4fa6] to-[#1a3a7d] text-white text-xs font-bold flex items-center justify-center shadow-md">
                        {step.id}
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="relative text-center text-sm md:text-base font-bold text-[#2f3e53] mb-2 transition-colors duration-300">
                      {step.title}
                    </h4>

                    {/* Description */}
                    <p className="relative text-xs text-[#556479] leading-relaxed text-center">
                      {step.description}
                    </p>

                    {/* Bottom indicator */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2b4fa6] to-[#4a90e2] transform transition-all duration-500 rounded-b-2xl ${
                      activeStep === step.id ? 'scale-x-100' : 'scale-x-0'
                    } origin-left`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "User-Centered", value: "100%" },
              { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Iterative", value: "6 Phases" },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "AI-Driven", value: "Always" }
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
