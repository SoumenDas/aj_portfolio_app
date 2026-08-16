import { useState, useRef, useCallback } from "react";
import { GlassCard } from "./GlassBackground";
import { Sliders, Sparkles, AlertTriangle, CheckCircle2 } from "lucide-react";

import imgImage1 from "../imports/VbaPortalCaseStudy/f118d75d698dc62b3fc3f3fffe8a796aefb8d067.png";
import finalSolutionSlider from "../assets/final-solution-slider.png";

export const designEvolutionSection = { id: "design-evolution", label: "Design Evolution", icon: Sliders };

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const isDragging = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  return (
    <section id="design-evolution" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#c2e812]/15 text-[#c2e812] border border-[#c2e812]/30">
            <Sliders className="w-3.5 h-3.5" />
            <span>Design Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Visual Comparison: <br />
            <span className="bg-gradient-to-r from-[#ffffff] via-[#9182c0] to-[#c2e812] bg-clip-text text-transparent">
              Legacy Table Grid vs Redesigned AI Worklist
            </span>
          </h2>
          <p className="text-[#b8b0d8] text-sm leading-relaxed">
            Drag the interactive handle to compare the legacy cluttered interface against the redesigned glassmorphic portal.
          </p>
        </div>

        {/* Interactive Comparison Slider Container */}
        <GlassCard className="p-4 sm:p-6 space-y-6">

          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-video max-h-[70vh] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/15 bg-[#0a0814] shadow-2xl mx-auto"
          >
            {/* RIGHT IMAGE: REDESIGNED AI PORTAL (100% width background) */}
            <div className="absolute inset-0 w-full h-full bg-[#16122a]">
              <div className="absolute top-4 right-4 z-20 bg-[#16122a]/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs text-[#c2e812] font-bold flex items-center gap-2 shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                Final Solution
              </div>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute top-0 left-0 w-[12%] h-[5.5%] z-10 bg-[#352c54]" />
                <img src={finalSolutionSlider} alt="Final Approach" className="w-full h-full object-cover object-left-top" />
              </div>
            </div>

            {/* LEFT IMAGE: LEGACY INTERFACE (Clipped overlay) */}
            <div
              className="absolute top-0 left-0 bottom-0 overflow-hidden border-r-2 border-[#c2e812] shadow-[0_0_20px_rgba(194,232,18,0.5)] z-30"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="w-full h-full relative" style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}>
                <div className="absolute top-4 left-4 z-40 bg-[#2a1a1a]/80 backdrop-blur-md px-4 py-2 rounded-lg border border-red-500/20 text-xs text-red-400 font-bold flex items-center gap-2 shadow-lg">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  First Draft Version
                </div>
                <div className="w-full h-full flex items-center justify-center bg-[#2a1a1a]">
                  <img src={imgImage1} alt="Legacy UI" className="w-full h-full object-cover object-left-top" />
                </div>
              </div>
            </div>

            {/* DRAGGABLE HANDLE BUTTON */}
            <div
              className="absolute top-0 bottom-0 z-20 flex items-center justify-center -ml-5 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-[#c2e812] text-[#0a0814] shadow-[0_0_25px_#c2e812] flex items-center justify-center font-bold text-sm border-2 border-[#0a0814]">
                ↔
              </div>
            </div>
          </div>

          {/* Key Improvements Comparison List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs">
            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 space-y-2">
              <h4 className="font-bold text-red-300 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Legacy Interface Bottlenecks
              </h4>
              <ul className="space-y-1 text-[#b8b0d8] list-disc list-inside">
                <li>Fragmented multi-window spreadsheet entry (~18 mins)</li>
                <li>42% pended rate due to missing lab attachments</li>
                <li>No automated safety alerts or validation checks</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#c2e812]/10 border border-[#c2e812]/30 space-y-2">
              <h4 className="font-bold text-[#c2e812] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#c2e812]" />
                Redesigned Portal Improvements
              </h4>
              <ul className="space-y-1 text-[#b8b0d8] list-disc list-inside">
                <li>Streamlined multi-action worklist (&lt;8 mins)</li>
                <li>Inline AI Copilot EMR auto-fill</li>
                <li>Automated lab parameter & contract anomaly triage</li>
              </ul>
            </div>
          </div>

        </GlassCard>

      </div>
    </section>
  );
}
