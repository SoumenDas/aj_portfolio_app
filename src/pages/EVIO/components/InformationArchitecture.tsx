import { useState } from "react";
import { GlassCard } from "./GlassBackground";
import { Network, Bot, Sparkles, CheckCircle2, User, UserCog, Layers, ShieldCheck, Lightbulb, FilePlus, AlertTriangle, Calendar, Send, Clock, Search, FolderArchive, FileText } from "lucide-react";

export function InformationArchitecture() {
  return (
    <section id="ia" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#c2e812]/15 text-[#c2e812] border border-[#c2e812]/30 shadow-[0_0_15px_rgba(194,232,18,0.2)]">
            <Network className="w-3.5 h-3.5" />
            <span>02c. Information Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Role-Based Information Architecture: <br />
            <span className="bg-gradient-to-r from-[#ffffff] via-[#9182c0] to-[#c2e812] bg-clip-text text-transparent">
              AI-Generated Worklist & Navigation Structure
            </span>
          </h2>
          <p className="text-[#b8b0d8] text-sm leading-relaxed">
            Synthesized from 100+ minutes of clinician interviews into a streamlined 2-branch role hierarchy.
          </p>
        </div>

        {/* AI Ideation Script Box (Our Styled Glassmorphic Card) */}
        <GlassCard className="p-6 border-[#c2e812]/30 bg-gradient-to-r from-[#16122a] via-[#120f24] to-[#0a0814] space-y-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c2e812]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c2e812]/20 to-[#9182c0]/20 border border-[#c2e812]/40 flex items-center justify-center text-[#c2e812] shrink-0 shadow-[0_0_20px_rgba(194,232,18,0.3)]">
              <Bot className="w-5 h-5 text-[#c2e812]" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#c2e812] font-bold uppercase tracking-wider block">AI UX Process Script</span>
              <h3 className="text-base font-bold text-white">How AI Ideated & Generated the Information Architecture</h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#b8b0d8] leading-relaxed relative z-10">
            To build an intuitive Information Architecture without traditional Business Analysts, I leveraged AI LLM prompt agents to synthesize 100+ minutes of raw clinician interview audio. By feeding unstructured transcript quotes and Cell & Gene Therapy (CGT) health plan contract rules into the AI model, the AI automatically clustered user intentions, eliminated redundant navigation layers, and generated this clean 2-branch role hierarchy for External Providers and Internal Clinicians in seconds.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-white/10 text-xs font-mono text-[#c2e812] relative z-10">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
              <Sparkles className="w-4 h-4 text-[#c2e812]" />
              <span>LLM Transcript Clustering</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#c2e812]" />
              <span>0-Depth Friction Reduction</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#c2e812]" />
              <span>Role-Based Task Alignment</span>
            </div>
          </div>
        </GlassCard>

        {/* Recreated Information Architecture Tree in Signature Glassmorphism Style */}
        <GlassCard className="p-8 space-y-10 border-[#9182c0]/40 shadow-2xl overflow-x-auto relative">
          
          {/* Top Pill Header */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-gradient-to-r from-[#4a4073] via-[#16122a] to-[#4a4073] border border-[#9182c0]/60 text-white font-bold text-base shadow-[0_0_25px_rgba(145,130,192,0.4)]">
              <Lightbulb className="w-5 h-5 text-[#c2e812]" />
              <span className="tracking-wide">Information Architecture</span>
            </div>
          </div>

          {/* TREE LEVEL 0: ROOT NODE */}
          <div className="flex flex-col items-center">
            <div className="px-10 py-3.5 rounded-2xl bg-gradient-to-r from-[#9182c0] via-[#4a4073] to-[#9182c0] text-white font-black text-lg border-2 border-[#c2e812]/50 shadow-[0_0_30px_rgba(194,232,18,0.4)] flex items-center gap-3">
              <Layers className="w-5 h-5 text-[#c2e812]" />
              <span>VBA Link</span>
            </div>
            <div className="w-0.5 h-10 bg-gradient-to-b from-[#c2e812] to-[#9182c0]" />
          </div>

          {/* TREE LEVEL 1 & 2 & 3 & 4 HIERARCHY */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative">
            
            {/* Horizontal Connector Line */}
            <div className="hidden lg:block absolute top-0 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-[#9182c0] via-[#c2e812] to-[#9182c0] -translate-y-5" />

            {/* BRANCH 1: PROVIDER */}
            <div className="space-y-6 flex flex-col items-center">
              
              {/* Level 1 Node: Provider */}
              <div className="w-full max-w-xs p-3.5 rounded-2xl bg-gradient-to-r from-[#16122a] via-[#4a4073] to-[#16122a] border border-[#9182c0]/60 text-center text-white font-extrabold text-sm shadow-xl flex items-center justify-center gap-2">
                <User className="w-4 h-4 text-[#c2e812]" />
                <span>Provider</span>
              </div>
              <div className="w-0.5 h-6 bg-[#9182c0]/60" />

              {/* Level 2 Node: Provider Worklist */}
              <div className="w-full max-w-xs p-3 rounded-xl bg-white/10 text-white font-bold text-xs border border-white/20 text-center shadow-md backdrop-blur-md">
                Provider Worklist
              </div>
              <div className="w-0.5 h-6 bg-[#9182c0]/60" />

              {/* Level 3 & Level 4 Sub-nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full items-stretch">
                
                {/* Level 3 Node: Action Required (White text as requested) */}
                <div className="space-y-3 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-between shadow-lg">
                  <div className="w-full space-y-2 text-center">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block">Action Required</span>
                    <div className="w-0.5 h-3 bg-white/40 mx-auto" />
                  </div>

                  {/* Level 4 Leaf Sub-nodes */}
                  <div className="space-y-2 w-full pt-1">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 hover:border-[#c2e812]/40 transition-colors shadow-sm">
                      <FilePlus className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>New</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/25 text-xs font-semibold text-red-300 flex items-center justify-center gap-2 hover:border-red-500/50 transition-colors shadow-sm">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <span>Pended</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-1.5 hover:border-[#c2e812]/40 transition-colors text-center shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-[#9182c0] shrink-0" />
                      <span className="leading-tight">Add Follow up Visit</span>
                    </div>
                  </div>
                </div>

                {/* Level 3 Node: Optional Follow-up */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-between shadow-lg min-h-[190px]">
                  <span className="text-xs font-bold text-white uppercase tracking-wider text-center">Optional Follow-up</span>
                  <div className="text-center space-y-1.5 py-4">
                    <Clock className="w-6 h-6 text-[#9182c0] mx-auto" />
                    <span className="text-[10px] text-[#7a7299] font-mono block">Milestone Schedule</span>
                  </div>
                  <div className="w-full p-2 rounded-xl bg-white/5 text-[11px] text-[#b8b0d8] text-center font-mono border border-white/5">
                    Post-Infusion
                  </div>
                </div>

                {/* Level 3 Node: Past Quarters */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-between shadow-lg min-h-[190px]">
                  <span className="text-xs font-bold text-white uppercase tracking-wider text-center">Past Quarters</span>
                  <div className="text-center space-y-1.5 py-4">
                    <FolderArchive className="w-6 h-6 text-[#7a7299] mx-auto" />
                    <span className="text-[10px] text-[#7a7299] font-mono block">Historical Archive</span>
                  </div>
                  <div className="w-full p-2 rounded-xl bg-white/5 text-[11px] text-[#b8b0d8] text-center font-mono border border-white/5">
                    Audit Log
                  </div>
                </div>

              </div>
            </div>

            {/* BRANCH 2: INTERNAL CLINICIAN */}
            <div className="space-y-6 flex flex-col items-center">
              
              {/* Level 1 Node: Internal Clinician */}
              <div className="w-full max-w-xs p-3.5 rounded-2xl bg-gradient-to-r from-[#16122a] via-[#4a4073] to-[#16122a] border border-[#9182c0]/60 text-center text-white font-extrabold text-sm shadow-xl flex items-center justify-center gap-2">
                <UserCog className="w-4 h-4 text-[#c2e812]" />
                <span>Internal Clinician</span>
              </div>
              <div className="w-0.5 h-6 bg-[#9182c0]/60" />

              {/* Level 2 Node: Clinician Worklist */}
              <div className="w-full max-w-xs p-3 rounded-xl bg-white/10 text-white font-bold text-xs border border-white/20 text-center shadow-md backdrop-blur-md">
                Clinician Worklist
              </div>
              <div className="w-0.5 h-6 bg-[#9182c0]/60" />

              {/* Level 3 & Level 4 Sub-nodes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full items-stretch">
                
                {/* Level 3 Node: New Forms (Pending Audit in white text & white icon as requested) */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-between shadow-lg text-center min-h-[210px]">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">New Forms</span>
                  <div className="space-y-1.5 py-2">
                    <FileText className="w-5 h-5 text-white mx-auto" />
                    <span className="text-[10px] text-white font-mono block font-semibold">Pending Audit</span>
                  </div>
                  
                  {/* Queue 01 styled like Queue 02 */}
                  <div className="w-full p-2 rounded-xl bg-[#9182c0]/10 border border-[#9182c0]/20 text-[10px] text-[#9182c0] font-mono font-bold">
                    Queue 01
                  </div>
                </div>

                {/* Level 3 Node: Resubmitted Forms */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-between shadow-lg text-center min-h-[210px]">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Resubmitted Forms</span>
                  <div className="space-y-1.5 py-2">
                    <Sparkles className="w-5 h-5 text-[#9182c0] mx-auto" />
                    <span className="text-[10px] text-[#9182c0] font-mono block font-semibold">Re-Evaluated</span>
                  </div>
                  <div className="w-full p-2 rounded-xl bg-[#9182c0]/10 border border-[#9182c0]/20 text-[10px] text-[#9182c0] font-mono font-bold">
                    Queue 02
                  </div>
                </div>

                {/* Level 3 Node: Past Quarters + 2 Chips (Outreach & Escalate) */}
                <div className="space-y-2 p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-between shadow-lg text-center min-h-[210px]">
                  <div className="space-y-1 w-full">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block">Past Quarters</span>
                    <div className="w-0.5 h-2 bg-[#9182c0] mx-auto" />
                  </div>
                  
                  {/* 2 Chips: Outreach & Escalate */}
                  <div className="space-y-1.5 w-full">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center gap-1.5 text-xs font-semibold hover:border-[#c2e812]/40 transition-colors shadow-sm">
                      <Send className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>Outreach</span>
                    </div>

                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center gap-1.5 text-xs font-semibold hover:border-[#c2e812]/40 transition-colors shadow-sm">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#9182c0] shrink-0" />
                      <span>Escalate</span>
                    </div>
                  </div>
                </div>

                {/* Level 3 Node: All Forms */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-between shadow-lg text-center min-h-[210px]">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">All Forms</span>
                  <div className="space-y-1.5 py-2">
                    <Search className="w-5 h-5 text-[#7a7299] mx-auto" />
                    <span className="text-[10px] text-[#7a7299] font-mono block">Master Search</span>
                  </div>
                  <div className="w-full p-2 rounded-xl bg-white/5 text-[10px] text-[#7a7299] font-mono border border-white/5">
                    Full Archive
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Domain Note Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#b8b0d8]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c2e812]" />
              <span>Domain Architecture: 100% HIPAA & Cell & Gene Therapy (CGT) Contract Compliant</span>
            </div>
            <div className="text-[#7a7299]">
              Recreated from VBA Link System Architecture
            </div>
          </div>

        </GlassCard>

      </div>
    </section>
  );
}
