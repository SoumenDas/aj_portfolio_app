import svgPaths from "./svg-ez0tuij1vp";
import imgMayoClinicLogo1 from "./d356a10aa45bf306ff962a82898731a64973fa1a.png";
import imgMayoDoctors from "./mayo_doctors_illustration.png";

function UndrawMedicineB1Ol() {
  return (
    <div className="absolute h-[420px] left-[840px] top-[120px] w-[520px] pointer-events-none flex items-center justify-center" data-name="mayo-doctors-illustration">
      <img 
        src={imgMayoDoctors} 
        alt="Mayo Clinic Doctors & Research Team" 
        className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.15)]" 
      />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[685.978px] left-0 top-0 w-[1441px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1441 685.978">
          <path d={svgPaths.p1d2fa00} fill="url(#paint0_linear_38_1882)" id="Vector 1" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_38_1882" x1="720.5" x2="720.5" y1="0" y2="685.5">
              <stop stopColor="#2B4FA6" />
              <stop offset="1" stopColor="#1570E4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[242px] left-[188.5px] top-[260px] w-[223px]" data-name="Mayo_Clinic_logo 1">
        <img alt="Mayo Clinic Logo" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgMayoClinicLogo1} />
      </div>
      <UndrawMedicineB1Ol />
    </div>
  );
}

