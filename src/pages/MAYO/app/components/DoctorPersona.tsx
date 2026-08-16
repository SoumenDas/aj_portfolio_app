export function DoctorPersona() {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto mb-16 group">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-[24px] blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />

      {/* Glassmorphism card */}
      <div className="relative bg-white/70 backdrop-blur-xl rounded-[24px] shadow-2xl border border-white/50 overflow-hidden transform transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(43,79,166,0.3)] hover:scale-[1.02]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[40px] items-center p-6 md:p-[40px]">
          {/* 3D Avatar with animated gradient */}
          <div className="flex-shrink-0 group/avatar">
            <div className="relative bg-gradient-to-br from-[#d6eaf8] via-[#2b4fa6] to-[#1a2f66] flex h-[160px] md:h-[200px] items-center justify-center rounded-full w-[160px] md:w-[200px] shadow-[0_10px_40px_-10px_rgba(43,79,166,0.6)] transform transition-all duration-500 hover:scale-110 hover:rotate-6 hover:shadow-[0_20px_60px_-10px_rgba(43,79,166,0.8)] cursor-pointer">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-500" />
              <svg className="h-[100px] md:h-[120px] text-white w-[100px] md:w-[120px] transform transition-transform duration-500 group-hover/avatar:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" fill="currentColor" />
              </svg>
            </div>
          </div>

          <div className="flex-1 w-full">
            <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] mb-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#2f3e53] to-[#2b4fa6] text-[28px] md:text-[36px] animate-[fadeIn_0.6s_ease-in]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Dr. Sarah Mitchell, MD
            </p>
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] mb-[20px] text-[#2b4fa6] text-[20px] md:text-[24px] animate-[fadeIn_0.8s_ease-in]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Board-Certified Internal Medicine Physician
            </p>

            <div className="flex flex-col gap-[12px]">
              {[
                "15+ years of clinical experience in patient care and diagnostic medicine",
                "Specialized in chronic disease management and preventive care",
                "Fellow of the American College of Physicians (FACP)",
                "Medical degree from Johns Hopkins School of Medicine"
              ].map((text, idx) => (
                <div key={idx} className="flex gap-[12px] items-start group/item transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex-shrink-0 h-[20px] w-[20px] bg-[#2b4fa6] rounded-full flex items-center justify-center shadow-md transform transition-all duration-300 group-hover/item:scale-110">
                    <svg className="h-[14px] text-white w-[14px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </div>
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[#556479] text-[16px] md:text-[18px] transition-colors duration-300 group-hover/item:text-[#2b4fa6]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative border-[#dcdcdc]/30 border-solid border-t-[1px] mt-[24px] pt-[24px] pl-4">
              <div className="absolute left-0 top-[24px] w-1 h-full bg-gradient-to-b from-[#2b4fa6] to-transparent rounded-full" />
              <p className="font-['Roboto:Italic',sans-serif] italic leading-[normal] text-[#556479] text-[16px] md:text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                "My approach to medicine is centered on building lasting relationships with patients and empowering them with the knowledge and tools they need to live healthier lives."
              </p>
            </div>
          </div>
        </div>

        {/* 3D Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-[30px] p-6 md:p-[40px] pt-0">
          {[
            { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", value: "5,000+", label: "Patients Treated", gradient: "from-blue-400 to-blue-600" },
            { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", value: "50+", label: "Published Articles", gradient: "from-purple-400 to-purple-600" },
            { icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z", value: "4.9/5", label: "Patient Rating", gradient: "from-pink-400 to-pink-600" }
          ].map((stat, idx) => (
            <div key={idx} className="group/stat relative bg-white/60 backdrop-blur-md p-6 md:p-[30px] rounded-[16px] text-center border border-white/60 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer" style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-[16px] opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500" />
              <div className={`relative bg-gradient-to-br ${stat.gradient} flex h-[48px] items-center justify-center mx-auto mb-[16px] rounded-full w-[48px] shadow-lg transform transition-all duration-500 group-hover/stat:scale-125 group-hover/stat:rotate-12`}>
                <svg className="h-[24px] text-white w-[24px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d={stat.icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </div>
              <p className="relative font-['Roboto:Bold',sans-serif] font-bold leading-[normal] mb-[8px] text-transparent bg-clip-text bg-gradient-to-r from-[#2f3e53] to-[#2b4fa6] text-[24px] transform transition-all duration-300 group-hover/stat:scale-110" style={{ fontVariationSettings: "'wdth' 100" }}>
                {stat.value}
              </p>
              <p className="relative font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[#556479] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}