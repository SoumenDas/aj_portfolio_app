import { useState } from "react";
import { MonitorSmartphone, ChevronLeft, ChevronRight } from "lucide-react";
import imgSandbox1 from "../assets/mockup-sandbox-1.png";
import imgSandbox2 from "../assets/mockup-sandbox-2.png";
import imgSandbox3 from "../assets/mockup-sandbox-3.png";
import imgSandbox4 from "../assets/mockup-sandbox-4.png";
import imgSandbox5 from "../assets/mockup-sandbox-5.png";

export function DesignGallery() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const flowScreens = [
    { src: imgSandbox1, label: "Initial Dashboard View" },
    { src: imgSandbox2, label: "Patient Statistics" },
    { src: imgSandbox3, label: "Detailed Event Log" },
    { src: imgSandbox4, label: "Provider Information Panel" },
    { src: imgSandbox5, label: "Search & Filtering Features" },
  ];

  const handleNext = () => setActiveStep((p) => (p + 1) % flowScreens.length);
  const handlePrev = () => setActiveStep((p) => (p - 1 + flowScreens.length) % flowScreens.length);

  return (
    <section id="gallery" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#c2e812]/15 text-[#c2e812] border border-[#c2e812]/30">
            <MonitorSmartphone className="w-3.5 h-3.5" />
            <span>07. Mockups</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Final UI Mockups: <br />
            <span className="bg-gradient-to-r from-[#ffffff] via-[#9182c0] to-[#c2e812] bg-clip-text text-transparent">
              High-Fidelity Screens & Core User Flows
            </span>
          </h2>
          <p className="text-[#b8b0d8] text-base leading-relaxed">
            Explore the authentic, high-resolution UI mockups and complete user flows created throughout the AI-augmented UX redesign process. Use the interactive sandbox below to click through the journey.
          </p>
        </div>

        {/* MacBook Pro Sandbox */}
        <div className="max-w-6xl mx-auto flex flex-col items-center pt-8">
          
          {/* Laptop Frame */}
          <div className="relative w-full max-w-5xl">
            {/* Screen Bezel */}
            <div className="relative bg-[#0d0d0d] rounded-t-[2.5rem] p-3 sm:p-5 shadow-[0_0_40px_rgba(0,0,0,0.8)] border-4 border-[#2a2a2a] ring-1 ring-white/10 mx-auto w-full overflow-hidden flex flex-col">
              {/* Webcam */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#333]"></div>
              
              {/* Screen Display */}
              <div className="w-full h-auto bg-[#f8f9fc] overflow-hidden rounded-lg relative ring-1 ring-black/10 flex items-start justify-center">
                 <img 
                   src={flowScreens[activeStep].src}
                   alt="MacBook Mockup Flow"
                   className="w-full h-auto block object-cover transition-opacity duration-300"
                 />
              </div>
            </div>

            {/* Laptop Base / Keyboard deck */}
            <div className="relative w-[110%] -left-[5%] h-6 sm:h-8 bg-gradient-to-b from-[#e5e5e5] to-[#737373] rounded-t-sm rounded-b-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#ffffff]/20 flex justify-center z-20">
              {/* Trackpad indent */}
              <div className="w-1/4 h-2 sm:h-3 bg-[#525252]/30 rounded-b-md shadow-inner"></div>
            </div>
          </div>

          {/* Flow Controls */}
          <div className="mt-14 flex flex-col sm:flex-row items-center gap-6 bg-[#16122a] border border-white/10 px-8 py-4 rounded-full shadow-2xl backdrop-blur-md">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-4 text-center">
               <span className="text-sm font-bold text-[#c2e812] tracking-wide">
                 Step {activeStep + 1} of {flowScreens.length}
               </span>
               <span className="text-sm text-[#b8b0d8] border-l border-white/20 pl-4">
                 {flowScreens[activeStep].label}
               </span>
            </div>

            <button 
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c2e812] hover:bg-[#a8c90f] text-[#0a0814] shadow-[0_0_15px_rgba(194,232,18,0.4)] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
