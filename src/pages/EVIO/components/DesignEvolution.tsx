import { useState, useEffect } from "react";
import { GlassCard } from "./GlassBackground";
import { Layers, Sparkles, Check, X } from "lucide-react";

import iteration01Final1 from "../assets/iteration-01-final-1.png";
import iteration01Final2 from "../assets/iteration-01-final-2.png";
import iteration01Final3 from "../assets/iteration-01-final-3.png";
import iteration01Final4 from "../assets/iteration-01-final-4.png";
import iteration02Wireframe1 from "../assets/iteration-02-new-1.png";
import iteration02Wireframe2 from "../assets/iteration-02-new-2.png";
import iteration02Wireframe3 from "../assets/iteration-02-new-3.png";
import iteration02Wireframe4 from "../assets/iteration-02-new-4.png";
import iteration03Wireframe1 from "../assets/iteration-03-new-1.png";
import iteration03Wireframe2 from "../assets/iteration-03-new-2.png";
import imgScreenshot20240312At5402 from "../imports/VbaPortalCaseStudy/6794bd7802ba3c330aef5040e2d1b1c028d65e3c.png";
import imgScreenshot20240312At5391 from "../imports/VbaPortalCaseStudy/05889c0725d9d52395af787366078332963adbcb.png";

export function DesignEvolution() {
  const [activeIteration, setActiveIteration] = useState<number>(1);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const iterations = [
    {
      id: 1,
      name: "Iteration 01",
      title: "Split-Screen Wireframe Approach",
      subtitle: "Side-by-side list & form evaluation",
      src: [iteration01Final1, iteration01Final2, iteration01Final3, iteration01Final4],
      pros: ["Quick access to patient list", "Compact overview"],
      cons: ["High visual noise & horizontal scroll", "Cognitive overload during data entry"],
      aiFeedback: "AI Layout Evaluator detected context drift during patient data entry.",
    },
    {
      id: 2,
      name: "Iteration 02",
      title: "Tabbed Worklist Structure",
      subtitle: "Separated provider & SME queues",
      src: [iteration02Wireframe1, iteration02Wireframe2, iteration02Wireframe3, iteration02Wireframe4],
      pros: ["Clear role separation", "Simpler navigation"],
      cons: ["Hidden critical status chips", "No inline AI assistance"],
      aiFeedback: "AI Heatmap predicted 32% missed pended notifications.",
    },
    {
      id: 3,
      name: "Iteration 03 (Final Solution)",
      title: "Full-Page Multi-Action Dashboard",
      subtitle: "AI Copilot + Dynamic Glassmorphism Worklist",
      src: [iteration03Wireframe1, iteration03Wireframe2],
      pros: [
        "100% distraction-free full page workflow",
        "Inline AI Copilot EMR auto-fill",
        "Automated lab anomaly highlights",
        "Reduces form completion to <8 mins",
      ],
      cons: [],
      aiFeedback: "AI Usability Rating: 98/100 — Optimal cognitive focus.",
    },
  ];

  const current = iterations.find((i) => i.id === activeIteration) || iterations[0];

  return (
    <section id="iterations" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#c2e812]/15 text-[#c2e812] border border-[#c2e812]/30">
            <Layers className="w-3.5 h-3.5" />
            <span>04. AI Generative Design Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Iterative UX Progression: <br />
            <span className="bg-gradient-to-r from-[#ffffff] via-[#9182c0] to-[#c2e812] bg-clip-text text-transparent">
              From Split-Screen Noise to AI-Driven Full-Page Clarity
            </span>
          </h2>
          <p className="text-[#b8b0d8] text-sm leading-relaxed">
            Comparing early wireframes against the final AI Copilot-enabled multi-action layout.
          </p>
        </div>

        {/* Iteration Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {iterations.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveIteration(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeIteration === item.id
                  ? "bg-[#c2e812] text-[#0a0814] shadow-[0_0_20px_rgba(194,232,18,0.4)] scale-105"
                  : "bg-white/5 text-[#b8b0d8] hover:text-white border border-white/10"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Active Iteration Card View */}
        <GlassCard className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Screenshot Preview Column */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-white border border-white/15 shadow-2xl relative group">
              {Array.isArray(current.src) ? (
                <div className="relative w-full">
                  {/* Invisible base image to set aspect ratio */}
                  <img src={current.src[0]} className="w-full h-auto p-2 opacity-0 pointer-events-none" alt="spacer" />
                  
                  {current.src.map((imgSrc, idx) => (
                    <img
                      key={idx}
                      src={imgSrc}
                      alt={`${current.title} - Slide ${idx + 1}`}
                      onClick={() => setSelectedImage(imgSrc)}
                      className={`absolute top-0 left-0 w-full h-full object-contain object-top bg-white p-2 transition-opacity duration-1000 cursor-pointer ${
                        idx === (imageIndex % current.src.length) ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={current.src as string}
                  alt={current.title}
                  onClick={() => setSelectedImage((Array.isArray(current.src) ? current.src[0] : current.src) as string)}
                  className="w-full h-auto max-h-[480px] object-contain object-top bg-white p-2 z-10 relative cursor-pointer"
                />
              )}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold font-mono bg-[#0a0814]/90 text-[#c2e812] border border-white/20 backdrop-blur-md shadow-md z-20">
                {current.name} Preview
              </div>
            </div>

            {/* Iteration Details & AI Evaluation Column */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-mono text-[#9182c0] uppercase tracking-wider">{current.subtitle}</span>
                <h3 className="text-xl font-bold text-white mt-1">{current.title}</h3>
              </div>

              {/* Pros & Cons */}
              <div className="space-y-3">
                {current.pros.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-[#c2e812] uppercase tracking-wider block">Key Advantages:</span>
                    <div className="space-y-1">
                      {current.pros.map((p, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#b8b0d8]">
                          <Check className="w-3.5 h-3.5 text-[#c2e812] shrink-0" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {current.cons.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-bold text-[#ff6b6b] uppercase tracking-wider block">Identified Drawbacks:</span>
                    <div className="space-y-1">
                      {current.cons.map((c, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#ff6b6b] shrink-0">
                          <X className="w-3.5 h-3.5 text-[#ff6b6b] shrink-0" />
                          <span className="text-[#b8b0d8]">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* AI Agent Feedback Box */}
              <div className="p-3.5 rounded-xl bg-[#c2e812]/10 border border-[#c2e812]/30 space-y-1 text-xs text-[#c2e812]">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Agent Usability Evaluation:</span>
                </div>
                <p className="text-[#b8b0d8] text-xs leading-normal">{current.aiFeedback}</p>
              </div>

            </div>

          </div>
        </GlassCard>

      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0814]/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full max-h-[90vh] flex flex-col items-center justify-center">
            <button 
              className="absolute -top-12 right-0 md:-right-12 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl ring-1 ring-white/20"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
