import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./GlassBackground";
import { Search, Filter, Sparkles, CheckCircle2, Clock, AlertTriangle, FileText, X, ChevronRight, User, Plus, Bot, Wand2, Zap } from "lucide-react";

export interface PatientRecord {
  id: string;
  name: string;
  drug: string;
  formType: "Required" | "Follow-up" | "Pended" | "Resubmitted" | "Past Due";
  status: "Needs Action" | "Under SME Review" | "Approved & Validated";
  urgency: "CRITICAL" | "HIGH" | "ROUTINE";
  aiRiskScore: number;
  date: string;
  assignedTo: string;
  pregnancyTestDone?: boolean;
  baselineLabValue?: string;
}

const INITIAL_RECORDS: PatientRecord[] = [
  { id: "CGT-9042", name: "Marcus Vance", drug: "Kymriah (Tisagenlecleucel)", formType: "Required", status: "Needs Action", urgency: "CRITICAL", aiRiskScore: 94, date: "Today, 09:30 AM", assignedTo: "Dr. A. Miller", pregnancyTestDone: true, baselineLabValue: "8.4 g/dL" },
  { id: "CGT-8924", name: "Sarah Jenkins", drug: "Zolgensma (Onasemnogene)", formType: "Follow-up", status: "Under SME Review", urgency: "HIGH", aiRiskScore: 78, date: "Yesterday, 04:15 PM", assignedTo: "Dr. K. Patel", pregnancyTestDone: true, baselineLabValue: "12.1 g/dL" },
  { id: "CGT-8811", name: "Robert Chen", drug: "Luxturna (Voretigene)", formType: "Pended", status: "Needs Action", urgency: "ROUTINE", aiRiskScore: 42, date: "Jul 21, 2024", assignedTo: "Dr. A. Miller", pregnancyTestDone: false, baselineLabValue: "Pending Lab" },
  { id: "CGT-8790", name: "Elena Rostova", drug: "Casgevy (Exagamglogene)", formType: "Resubmitted", status: "Approved & Validated", urgency: "CRITICAL", aiRiskScore: 91, date: "Jul 20, 2024", assignedTo: "Dr. R. Hayes", pregnancyTestDone: true, baselineLabValue: "14.2 g/dL" },
  { id: "CGT-8650", name: "David Kim", drug: "Elevidys (Delandistrogene)", formType: "Past Due", status: "Needs Action", urgency: "HIGH", aiRiskScore: 85, date: "Jul 18, 2024", assignedTo: "Dr. K. Patel", pregnancyTestDone: true, baselineLabValue: "9.8 g/dL" },
];

export function LivePrototypeSimulator({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const [records, setRecords] = useState<PatientRecord[]>(INITIAL_RECORDS);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedRecord, setSelectedRecord] = useState<PatientRecord | null>(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [isAiAutoFilling, setIsAiAutoFilling] = useState(false);

  // Form State for active data entry modal
  const [formData, setFormData] = useState({
    doseDate: "2024-07-23",
    baselineLab: "9.5 g/dL",
    pregnancyConfirmed: true,
    physicianNotes: "Patient tolerated infusion well with standard post-procedure monitoring.",
  });

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const handleOpenForm = (record: PatientRecord) => {
    setSelectedRecord(record);
    setFormData({
      doseDate: "2024-07-23",
      baselineLab: record.baselineLabValue || "9.5 g/dL",
      pregnancyConfirmed: record.pregnancyTestDone ?? true,
      physicianNotes: "Patient tolerated infusion well with standard post-procedure monitoring.",
    });
    setIsFormModalOpen(true);
  };

  const handleAiAutoFill = () => {
    setIsAiAutoFilling(true);
    setTimeout(() => {
      setFormData({
        doseDate: "2024-07-23",
        baselineLab: "11.4 g/dL (AI Extracted from Hospital EMR)",
        pregnancyConfirmed: true,
        physicianNotes: "AI Clinical Copilot: Pre-infusion safety criteria verified. Hemoglobin parameter within post-dosing tolerance range (11.4 g/dL). No adverse event markers detected.",
      });
      setIsAiAutoFilling(false);
      showToast("✨ AI Clinical Copilot auto-extracted lab values & confirmed safety protocols!");
    }, 600);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRecord) return;

    setRecords((prev) =>
      prev.map((r) =>
        r.id === selectedRecord.id
          ? { ...r, status: "Approved & Validated", pregnancyTestDone: formData.pregnancyConfirmed, baselineLabValue: formData.baselineLab }
          : r
      )
    );

    setIsFormModalOpen(false);
    showToast(`⚡ Form submitted for ${selectedRecord.name} (${selectedRecord.id})! AI rule engine verified HIPAA contract terms.`);
  };

  const filteredRecords = records.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.id.toLowerCase().includes(search.toLowerCase()) ||
      r.drug.toLowerCase().includes(search.toLowerCase());
    if (!matchesSearch) return false;
    if (activeFilter === "ALL") return true;
    if (activeFilter === "CRITICAL") return r.urgency === "CRITICAL";
    if (activeFilter === "NEEDS_ACTION") return r.status === "Needs Action";
    if (activeFilter === "APPROVED") return r.status === "Approved & Validated";
    if (activeFilter === "PENDED") return r.formType === "Pended";
    return true;
  });

  const content = (
    <div className="space-y-6 text-white">
      {/* Simulator Control Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#4a4073]/40 via-[#16122a] to-[#0a0814] border border-white/15">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#c2e812]/15 text-[#c2e812] border border-[#c2e812]/30 uppercase flex items-center gap-1">
              <Bot className="w-3 h-3" />
              AI Prototype Sandbox
            </span>
            <span className="text-xs text-[#7a7299] font-mono">Figma AI Design System Engine</span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">Live AI Clinician Worklist Simulator</h3>
          <p className="text-xs text-[#b8b0d8]">Test search filtering, AI risk scoring tags, and AI-assisted clinical form auto-fill in real-time.</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setRecords(INITIAL_RECORDS);
              showToast("🔄 Worklist state reset to initial demo values!");
            }}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            Reset Demo Data
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <input
            type="text"
            placeholder="Search veteran/patient name, CGT drug, or claim ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-[#554e7a] focus:outline-none focus:border-[#c2e812] transition-colors"
          />
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#554e7a]" />
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 w-full sm:w-auto overflow-x-auto">
          {[
            { id: "ALL", label: "All Cases" },
            { id: "CRITICAL", label: "🔥 AI Urgent" },
            { id: "NEEDS_ACTION", label: "⚡ Action Required" },
            { id: "PENDED", label: "⚠️ Pended Forms" },
            { id: "APPROVED", label: "✅ Validated" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                activeFilter === id ? "bg-[#c2e812] text-[#0a0814] shadow-md" : "text-[#b8b0d8] hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Patient Worklist Rows */}
      <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
        {filteredRecords.length === 0 ? (
          <div className="text-center py-12 text-[#554e7a]">No patient cases match your search criteria.</div>
        ) : (
          filteredRecords.map((r) => (
            <div
              key={r.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#c2e812]/40 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4a4073]/50 border border-[#9182c0]/40 flex items-center justify-center font-bold text-sm text-[#c2e812] shrink-0">
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-white text-base">{r.name}</span>
                    <span className="text-xs text-[#7a7299] font-mono">{r.id}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        r.urgency === "CRITICAL"
                          ? "bg-red-500/20 text-red-400 border border-red-500/40"
                          : r.urgency === "HIGH"
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                          : "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                      }`}
                    >
                      {r.urgency}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#9182c0]/20 text-[#9182c0] border border-[#9182c0]/30 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-[#c2e812]" />
                      AI Risk: {r.aiRiskScore}%
                    </span>
                  </div>
                  <p className="text-xs text-[#b8b0d8] mt-0.5 font-medium">{r.drug}</p>
                  <p className="text-[11px] text-[#554e7a] mt-1">Assigned: {r.assignedTo} • {r.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    r.status === "Approved & Validated"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                      : r.status === "Under SME Review"
                      ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                      : "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                  }`}
                >
                  {r.status}
                </span>

                <button
                  onClick={() => handleOpenForm(r)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#c2e812] hover:bg-[#b0d410] text-[#0a0814] transition-all shadow-md group-hover:scale-105"
                >
                  <span>{r.status === "Approved & Validated" ? "View AI Form" : "Open AI Clinical Form"}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[120] max-w-md px-5 py-3 rounded-2xl bg-[#c2e812] text-[#0a0814] text-xs font-bold shadow-2xl border border-white/20 animate-bounce flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#0a0814]" />
          <span>{toast}</span>
        </div>
      )}

      {/* Form Submission Modal */}
      <AnimatePresence>
        {isFormModalOpen && selectedRecord && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#120f24] rounded-2xl border border-white/15 shadow-2xl overflow-hidden text-white"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#1a1530] border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#c2e812] text-[#0a0814] flex items-center justify-center font-bold text-sm">
                    AI
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">AI-Assisted CGT Clinical Data Form</h3>
                    <p className="text-xs text-[#b8b0d8]">Patient: {selectedRecord.name} ({selectedRecord.id})</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsFormModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#b8b0d8] hover:text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmitForm} className="p-6 space-y-5">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#7a7299] font-mono">Therapy Protocol:</span>
                    <p className="font-bold text-white mt-0.5">{selectedRecord.drug}</p>
                  </div>
                  
                  {/* AI Smart Auto-Fill CTA */}
                  <button
                    type="button"
                    onClick={handleAiAutoFill}
                    disabled={isAiAutoFilling}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-[#9182c0] to-[#c2e812] text-[#0a0814] hover:opacity-90 transition-all shadow-md"
                  >
                    <Wand2 className="w-3.5 h-3.5" />
                    <span>{isAiAutoFilling ? "Extracting EMR..." : "AI Smart Auto-Fill"}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white uppercase tracking-wider">Infusion / Dosing Date</label>
                    <input
                      type="date"
                      value={formData.doseDate}
                      onChange={(e) => setFormData({ ...formData, doseDate: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#c2e812]"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white uppercase tracking-wider">Baseline Lab Parameter</label>
                    <input
                      type="text"
                      value={formData.baselineLab}
                      onChange={(e) => setFormData({ ...formData, baselineLab: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#c2e812]"
                      placeholder="e.g. 9.5 g/dL"
                      required
                    />
                  </div>
                </div>

                {/* Pre-infusion Pregnancy Test Compliance Check */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Pre-Infusion Mandatory Safety Protocol</span>
                    <span className="text-[10px] text-[#c2e812] font-mono flex items-center gap-1">
                      <Bot className="w-3 h-3" /> AI Verified
                    </span>
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.pregnancyConfirmed}
                      onChange={(e) => setFormData({ ...formData, pregnancyConfirmed: e.target.checked })}
                      className="w-4 h-4 rounded border-white/20 text-[#c2e812] focus:ring-0 cursor-pointer"
                    />
                    <span className="text-xs text-[#b8b0d8]">
                      I confirm mandatory pre-infusion laboratory screening (e.g. pregnancy & liver panel) was completed.
                    </span>
                  </label>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white uppercase tracking-wider">Physician Clinical Notes (AI Copilot Assisted)</label>
                  <textarea
                    rows={3}
                    value={formData.physicianNotes}
                    onChange={(e) => setFormData({ ...formData, physicianNotes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#c2e812]"
                    placeholder="Enter patient observations, side effects, or recovery notes..."
                  />
                </div>

                {/* Submit Action */}
                <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setIsFormModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#c2e812] hover:bg-[#b0d410] text-[#0a0814] transition-all shadow-lg flex items-center gap-1.5"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>Submit & Validate AI Contract Rules</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );

  if (isOpen !== undefined) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-[#120f24] rounded-3xl border border-white/15 shadow-2xl p-6 md:p-8 overflow-hidden my-8"
        >
          <div className="flex justify-end mb-2">
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {content}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <GlassCard className="p-6 md:p-8">
          {content}
        </GlassCard>
      </div>
    </section>
  );
}
