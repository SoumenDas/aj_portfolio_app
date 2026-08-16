import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { OverviewScope } from "./components/OverviewScope";
import { PersonaWorkflows } from "./components/PersonaWorkflows";
import { JourneyMaps } from "./components/JourneyMaps";
import { InformationArchitecture } from "./components/InformationArchitecture";
import { ResearchInsights } from "./components/ResearchInsights";
import { DesignEvolution } from "./components/DesignEvolution";
import { BeforeAfterSlider } from "./components/BeforeAfterSlider";
import { UnderstandingUsers } from "./components/UnderstandingUsers";
import { SecondaryResearch } from "./components/SecondaryResearch";
import { LivePrototypeSimulator } from "./components/LivePrototypeSimulator";
import { DesignGallery } from "./components/DesignGallery";
import { OutcomesMetrics } from "./components/OutcomesMetrics";
import { ArrowUp, Sparkles, ShieldCheck, Bot } from "lucide-react";
import { FloatingWatermarks } from "./components/FloatingWatermarks";

export default function App() {
  const [isSimulatorModalOpen, setIsSimulatorModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "users", "personas", "journey", "ia", "research", "iterations", "gallery"];
      
      let current = sections[0];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section's top has crossed the 300px mark from the top of the viewport,
          // it becomes the new active section. Since we iterate in DOM order,
          // the last one to satisfy this is the correct active section.
          if (rect.top <= 300) {
            current = s;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans bg-[#0a0814] text-white overflow-x-hidden relative selection:bg-[#c2e812] selection:text-[#0a0814]">
      
      {/* Fixed Animated Watermark Shapes */}
      <FloatingWatermarks />

      <div className="relative z-10">
        {/* Sticky Glass Navbar */}
        <Navbar
          onOpenSimulator={() => setIsSimulatorModalOpen(true)}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

      {/* Main Interactive Case Study Flow */}
      <main>
        {/* 1. AI Hero Section with 3D elements & stats */}
        <HeroSection
          onOpenSimulator={() => setIsSimulatorModalOpen(true)}
          onExploreClick={() => scrollToSection("overview")}
        />

        {/* 2. AI-Driven Overview & Project Scope */}
        <OverviewScope />

        {/* 6. Understanding Users Section */}
        <section id="users" className="scroll-mt-20">
          <UnderstandingUsers />
        </section>

        {/* 6b. Secondary Research / Interview Insights */}
        <SecondaryResearch />

        {/* 3. AI-Augmented Personas & Process Flow */}
        <PersonaWorkflows />

        {/* 3b. User Journey Maps */}
        <JourneyMaps />

        {/* 3c. AI-Generated Information Architecture */}
        <InformationArchitecture />

        {/* 4. AI Transcript Processing & Sentiment Research */}
        <ResearchInsights />

        {/* 5. AI Generative Design Evolution */}
        <DesignEvolution />


        {/* 7. Interactive Before vs After Visual Comparison Slider */}
        <BeforeAfterSlider />

      {/* 7. Live Interactive AI Worklist Sandbox */}
      <LivePrototypeSimulator />

      {/* 8. Visual Gallery of AI-Generated UI Screenshots, Illustrations & Patterns */}
      <DesignGallery />

      {/* 10. Key AI Outcomes & Business Impact */}
      <OutcomesMetrics />
    </main>

      {/* Interactive Live AI Sandbox Modal */ }
  <LivePrototypeSimulator
    isOpen={isSimulatorModalOpen}
    onClose={() => setIsSimulatorModalOpen(false)}
  />

  {/* Footer */ }
  <footer className="relative z-10 border-t border-white/10 py-12 bg-[#06050e]">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#4a4073] to-[#c2e812] flex items-center justify-center font-bold text-white text-xs">
          E
        </div>
        <div>
          <p className="text-sm font-bold text-white">VBA Portal</p>
          <p className="text-xs text-[#7a7299]">End-to-End AI UX Design Process & Interactive Prototype</p>
        </div>
      </div>

      <div className="flex items-center gap-6 text-xs text-[#b8b0d8]">
        <span className="flex items-center gap-1.5">
          <Bot className="w-4 h-4 text-[#c2e812]" />
          AI UX Design Process
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#9182c0]" />
          HIPAA Compliant
        </span>
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#c2e812]" />
          Glassmorphism UX
        </span>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center text-[#b8b0d8] hover:text-white transition-all"
        title="Back to Top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  </footer>
      </div>
    </div >
  );
}
