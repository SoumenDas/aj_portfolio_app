import Group112 from "../imports/Group112/Group112";
import { About } from "./components/About";
import { BusinessGoals } from "./components/BusinessGoals";
import { ChallengesPainPoints } from "./components/ChallengesPainPoints";
import { UserCentricApproach } from "./components/UserCentricApproach";
import { InformationArchitecture } from "./components/InformationArchitecture";
import { DoctorPersona } from "./components/DoctorPersona";
import { JourneyMap } from "./components/JourneyMap";
import { Wireframes } from "./components/Wireframes";
import { Mockups } from "./components/Mockups";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-[#f0f4f8] w-full overflow-x-hidden relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#2b4fa6]/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d6eaf8]/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#2b4fa6]/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Mayo Header with Logo and Banner */}
      <div className="relative w-full flex justify-center bg-white shadow-lg mb-16 overflow-hidden">
        <div className="max-w-[1441px] w-full h-[685.978px] overflow-hidden">
          <Group112 />
        </div>
      </div>

      {/* Appended new responsive sections */}
      <div className="relative w-full max-w-[1200px] mx-auto px-4 pb-20">
        <div className="mb-20">
          <About />
        </div>

        <div className="mb-20">
          <BusinessGoals />
        </div>

        <div className="mb-20">
          <ChallengesPainPoints />
        </div>

        <div className="mb-20">
          <UserCentricApproach />
        </div>

        <div className="mb-20">
          <InformationArchitecture />
        </div>

        <div className="mb-20">
          <h2 className="text-[#2b4fa6] text-3xl md:text-5xl font-bold mb-4 text-center uppercase tracking-wide">
            User Persona
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2b4fa6] to-[#4a90e2] mx-auto mb-12 rounded-full" />
          <DoctorPersona />
        </div>

        <div className="mb-20">
          <JourneyMap />
        </div>
      </div>

      {/* Wireframes and Mockups sections with wider max-width at the bottom */}
      <div className="relative w-full max-w-[1400px] mx-auto px-4 pb-20">
        <div className="mb-20">
          <Wireframes />
        </div>

        <Mockups />
      </div>
    </div>
  );
}
