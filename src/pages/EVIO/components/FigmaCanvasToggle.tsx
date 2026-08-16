import { useState } from "react";
import { GlassCard } from "./GlassBackground";
import VbaPortalCaseStudy from "../imports/VbaPortalCaseStudy";
import { Eye, EyeOff, Layout, Sparkles } from "lucide-react";

export function FigmaCanvasToggle() {
  const [showFigma, setShowFigma] = useState(false);

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        
        {/* Toggle Bar Card */}
        <GlassCard className="p-6 border-[#9182c0]/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#9182c0]/20 border border-[#9182c0]/30 flex items-center justify-center text-[#9182c0]">
              <Layout className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Verbatim Figma Case Study Canvas</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/10 text-[#b8b0d8]">
                  SVG Export
                </span>
              </h3>
              <p className="text-xs text-[#b8b0d8]">Toggle to render the original high-resolution Figma artwork canvas verbatim.</p>
            </div>
          </div>

          <button
            onClick={() => setShowFigma(!showFigma)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#0a0814] bg-[#c2e812] hover:bg-[#b0d410] transition-all shadow-[0_0_15px_rgba(194,232,18,0.3)] shrink-0"
          >
            {showFigma ? (
              <>
                <EyeOff className="w-4 h-4" />
                <span>Hide Figma Canvas</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                <span>View Full Figma Canvas</span>
              </>
            )}
          </button>
        </GlassCard>

        {/* Verbatim Render Container */}
        {showFigma && (
          <div className="w-full flex justify-center overflow-x-auto py-4 rounded-3xl bg-[#0a0814] border border-white/15 p-4 shadow-2xl">
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl">
              {/* Seamless Logo Mask Overlay hiding legacy logo patch */}
              <div
                className="absolute top-[1.2%] left-[1.2%] w-[12%] h-[4.5%] z-20 pointer-events-none"
                style={{ background: "#ffffff" }}
              />
              <VbaPortalCaseStudy />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
