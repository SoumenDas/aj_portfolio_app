import { useState, useEffect } from "react";
import { Sparkles, Layers, Sliders, Activity, FileText, UserCheck, CheckCircle2, MonitorSmartphone, Bot, Compass, Network, Users } from "lucide-react";

interface NavbarProps {
  onOpenSimulator: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navbar({ onOpenSimulator, activeSection, setActiveSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "overview", label: "Overview", icon: Layers },
    { id: "users", label: "Understanding Users", icon: Users },
    { id: "personas", label: "Personas", icon: UserCheck },
    { id: "journey", label: "Journey", icon: Compass },
    { id: "ia", label: "IA", icon: Network },
    { id: "research", label: "AI Research", icon: FileText },
    { id: "iterations", label: "Iterations", icon: Activity },
    { id: "gallery", label: "Mockups", icon: MonitorSmartphone },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div
          className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 border ${
            scrolled
              ? "bg-[#0a0814]/90 backdrop-blur-xl border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
              : "bg-[#120f24]/85 backdrop-blur-md border-white/15 shadow-2xl"
          }`}
        >
          {/* Brand / Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#4a4073] via-[#9182c0] to-[#c2e812] flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(145,130,192,0.4)] border border-white/20">
              E
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white tracking-wide text-sm sm:text-base">VBA</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveSection(link.id);
                    scrollTo(link.id);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#9182c0] text-white shadow-[0_0_15px_rgba(145,130,192,0.5)] scale-105"
                      : "text-[#b8b0d8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSimulator}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-[#0a0814] bg-[#c2e812] hover:bg-[#b0d410] transition-all shadow-[0_0_20px_rgba(194,232,18,0.4)] hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 fill-[#0a0814]" />
              <span>AI Sandbox</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
