import svgPaths from "./svg-zlc2zmc7w4";
import imgEllipse2 from "./dc50d7a13f27a13e5189620fbe42f9e955f5c4a6.png";
import imgMayoSymbol1 from "./ffb09972e9f5bbeec4ef06dd4cf9165428bc0058.png";
import imgMayoMonogram1 from "./38c326b978d1c7469e1550806643c8c97dda9dae.png";

function Group() {
  return (
    <div className="absolute contents left-[130px] top-[10px]">
      <div className="absolute h-[18.344px] left-[132.55px] top-[31.66px] w-[88.662px]" data-name="MAYO MONOGRAM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-94.54%] max-w-none top-0 w-[194.54%]" src={imgMayoMonogram1} />
        </div>
      </div>
      <div className="absolute h-[18.344px] left-[130px] top-[10px] w-[81.783px]" data-name="MAYO MONOGRAM 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[210.9%]" src={imgMayoMonogram1} />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[64px] top-[10px]">
      <div className="absolute h-[40px] left-[64px] top-[10px] w-[50.303px]" data-name="MAYO Symbol 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMayoSymbol1} />
      </div>
      <Group />
    </div>
  );
}

function FontDownload() {
  return (
    <div className="absolute left-[112px] size-[30px] top-[142px]" data-name="font_download">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="font_download">
          <mask height="30" id="mask0_24_661" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="30" id="Bounding box" width="30" />
          </mask>
          <g mask="url(#mask0_24_661)">
            <path d={svgPaths.p339dd180} fill="var(--fill-0, #2B4FA6)" id="font_download_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[60px] top-[136px]">
      <div className="absolute bg-[#f6f6f6] h-[75px] left-[60px] rounded-[4px] top-[136px] w-[139px]" />
      <div className="absolute h-0 left-[75px] top-[211px] w-[109px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 109 2">
            <line id="Line 127" stroke="var(--stroke-0, #2B4FA6)" strokeWidth="2" x2="109" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[normal] left-[79px] text-[#2b4fa6] text-[16px] top-[182px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Text Search
      </p>
      <FontDownload />
    </div>
  );
}

function SettingsEthernet() {
  return (
    <div className="absolute left-[calc(25%+81.5px)] size-[40px] top-[139px]" data-name="settings_ethernet">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="settings_ethernet">
          <mask height="40" id="mask0_24_687" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="40" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="40" id="Bounding box" width="40" />
          </mask>
          <g mask="url(#mask0_24_687)">
            <path d={svgPaths.p3188fc00} fill="var(--fill-0, #1570E4)" id="settings_ethernet_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(25%+41.5px)] top-[139px]">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[calc(25%+41.5px)] text-[#1570e4] text-[16px] top-[189px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Define Cohort
      </p>
      <SettingsEthernet />
    </div>
  );
}

function FileUpload() {
  return (
    <div className="absolute left-[calc(50%+55px)] size-[34px] top-[142px]" data-name="file_upload">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="file_upload">
          <mask height="34" id="mask0_24_645" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="34" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="34" id="Bounding box" width="34" />
          </mask>
          <g mask="url(#mask0_24_645)">
            <path d={svgPaths.p29085f00} fill="var(--fill-0, #D6D6D6)" id="file_upload_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[calc(50%+3px)] top-[142px]">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+3px)] text-[#afafaf] text-[16px] top-[186px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Upload Cohorts
      </p>
      <FileUpload />
    </div>
  );
}

function RadioButtonChecked() {
  return (
    <div className="absolute inset-[25.16%_29.28%_73.13%_69.25%]" data-name="radio_button_checked">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="radio_button_checked">
          <mask height="20" id="mask0_24_675" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_24_675)">
            <path d={svgPaths.p10526500} fill="var(--fill-0, #2B4FA6)" id="radio_button_checked_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[25.16%_25.92%_72.96%_69.25%]">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[25.41%_25.92%_72.96%_71.45%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Male
      </p>
      <RadioButtonChecked />
    </div>
  );
}

function RadioButtonChecked1() {
  return (
    <div className="absolute inset-[25.13%_93.41%_73.16%_5.12%]" data-name="radio_button_checked">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="radio_button_checked">
          <mask height="20" id="mask0_24_699" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_24_699)">
            <path d={svgPaths.p9b89c00} fill="var(--fill-0, #2B4FA6)" id="radio_button_checked_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function RadioButtonUnchecked() {
  return (
    <div className="absolute inset-[25.18%_15.15%_73.11%_83.38%]" data-name="radio_button_unchecked">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="radio_button_unchecked">
          <mask height="20" id="mask0_24_681" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_24_681)">
            <path d={svgPaths.p6d7f100} fill="var(--fill-0, #9D9CB5)" id="radio_button_unchecked_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[25.18%_12.08%_72.96%_83.38%]">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[25.41%_12.08%_72.96%_85.43%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Both
      </p>
      <RadioButtonUnchecked />
    </div>
  );
}

function RadioButtonUnchecked1() {
  return (
    <div className="absolute inset-[25.18%_22.77%_73.11%_75.77%]" data-name="radio_button_unchecked">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="radio_button_unchecked">
          <mask height="20" id="mask0_24_681" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_24_681)">
            <path d={svgPaths.p6d7f100} fill="var(--fill-0, #9D9CB5)" id="radio_button_unchecked_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[25.18%_18.3%_72.96%_75.77%]">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[25.41%_18.3%_72.96%_77.82%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Female
      </p>
      <RadioButtonUnchecked1 />
    </div>
  );
}

function RadioButtonUnchecked2() {
  return (
    <div className="absolute inset-[25.21%_83.38%_73.08%_15.15%]" data-name="radio_button_unchecked">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="radio_button_unchecked">
          <mask height="20" id="mask0_24_671" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_24_671)">
            <path d={svgPaths.p3b97cdf0} fill="var(--fill-0, #9D9CB5)" id="radio_button_unchecked_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function RadioButtonUnchecked3() {
  return (
    <div className="absolute inset-[25.16%_8.93%_73.13%_89.6%]" data-name="radio_button_unchecked">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="radio_button_unchecked">
          <mask height="20" id="mask0_24_653" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_24_653)">
            <path d={svgPaths.p19c28a00} fill="var(--fill-0, #9D9CB5)" id="radio_button_unchecked_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[25.16%_4.69%_72.96%_89.6%]">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[25.41%_4.69%_72.96%_91.8%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Others
      </p>
      <RadioButtonUnchecked3 />
    </div>
  );
}

function ExpandMore() {
  return (
    <div className="absolute inset-[42.58%_61.49%_55.37%_36.75%]" data-name="expand_more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_24_691" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_691)">
            <path d={svgPaths.p29a09680} fill="var(--fill-0, #2B4FA6)" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ExpandMore1() {
  return (
    <div className="absolute inset-[49.41%_55.64%_48.53%_42.61%]" data-name="expand_more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_24_691" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_691)">
            <path d={svgPaths.p29a09680} fill="var(--fill-0, #2B4FA6)" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ExpandMore2() {
  return (
    <div className="absolute inset-[49.4%_42.61%_48.55%_55.64%]" data-name="expand_more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_24_691" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_691)">
            <path d={svgPaths.p29a09680} fill="var(--fill-0, #2B4FA6)" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ExpandMore3() {
  return (
    <div className="absolute inset-[49.4%_28.99%_48.55%_69.25%]" data-name="expand_more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_24_691" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_691)">
            <path d={svgPaths.p29a09680} fill="var(--fill-0, #2B4FA6)" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ExpandMore4() {
  return (
    <div className="absolute inset-[49.4%_14.35%_48.55%_83.89%]" data-name="expand_more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_24_691" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_691)">
            <path d={svgPaths.p29a09680} fill="var(--fill-0, #2B4FA6)" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="add">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add">
          <mask height="24" id="mask0_24_657" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_657)">
            <path d={svgPaths.p298ee080} fill="var(--fill-0, #2B4FA6)" id="add_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[10px] h-[40px] items-center justify-center left-[calc(12.5%+90.25px)] px-[20px] py-[8px] rounded-[6px] top-[418px]" data-name="Primary Button">
      <div aria-hidden="true" className="absolute border border-[#2b4fa6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Add />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2b4fa6] text-[18px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        add criteria for record type
      </p>
    </div>
  );
}

function Add1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="add">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add">
          <mask height="24" id="mask0_24_657" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_657)">
            <path d={svgPaths.p298ee080} fill="var(--fill-0, #2B4FA6)" id="add_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PrimaryButton1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[10px] h-[40px] items-center justify-center left-[calc(37.5%+159.75px)] px-[20px] py-[8px] rounded-[6px] top-[418px]" data-name="Primary Button">
      <div aria-hidden="true" className="absolute border border-[#2b4fa6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Add1 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2b4fa6] text-[18px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`add subgroup of record types & criteria`}</p>
    </div>
  );
}

function Close() {
  return (
    <div className="absolute left-[calc(87.5%+15.75px)] size-[24px] top-[585px]" data-name="close">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close">
          <mask height="24" id="mask0_24_705" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="23" id="Bounding box" stroke="var(--stroke-0, #2B4FA6)" width="23" x="0.5" y="0.5" />
          </mask>
          <g mask="url(#mask0_24_705)">
            <g id="close_2">
              <mask fill="white" id="path-2-inside-1_24_705">
                <path d={svgPaths.p246fe900} />
              </mask>
              <path d={svgPaths.p246fe900} fill="var(--fill-0, #2B4FA6)" />
              <path d={svgPaths.p222a7500} fill="var(--stroke-0, #2B4FA6)" mask="url(#path-2-inside-1_24_705)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[calc(87.5%+12.75px)] top-[582px]">
      <div className="absolute bg-white border border-[#2b4fa6] border-solid left-[calc(87.5%+12.75px)] rounded-[2px] size-[30px] top-[582px]" />
      <Close />
    </div>
  );
}

function ExpandMore5() {
  return (
    <div className="absolute inset-[61.38%_61.49%_36.57%_36.75%]" data-name="expand_more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_24_691" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_691)">
            <path d={svgPaths.p29a09680} fill="var(--fill-0, #2B4FA6)" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ExpandMore6() {
  return (
    <div className="absolute inset-[68.22%_56.59%_29.73%_41.65%]" data-name="expand_more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_24_691" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_691)">
            <path d={svgPaths.p29a09680} fill="var(--fill-0, #2B4FA6)" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ExpandMore7() {
  return (
    <div className="absolute inset-[68.21%_43.56%_29.74%_54.69%]" data-name="expand_more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_24_691" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_691)">
            <path d={svgPaths.p29a09680} fill="var(--fill-0, #2B4FA6)" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ExpandMore8() {
  return (
    <div className="absolute inset-[68.21%_31.41%_29.74%_66.84%]" data-name="expand_more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_24_691" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_691)">
            <path d={svgPaths.p29a09680} fill="var(--fill-0, #2B4FA6)" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close1() {
  return (
    <div className="absolute left-[calc(87.5%+35.75px)] size-[24px] top-[805px]" data-name="close">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close">
          <mask height="24" id="mask0_24_705" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="23" id="Bounding box" stroke="var(--stroke-0, #2B4FA6)" width="23" x="0.5" y="0.5" />
          </mask>
          <g mask="url(#mask0_24_705)">
            <g id="close_2">
              <mask fill="white" id="path-2-inside-1_24_705">
                <path d={svgPaths.p246fe900} />
              </mask>
              <path d={svgPaths.p246fe900} fill="var(--fill-0, #2B4FA6)" />
              <path d={svgPaths.p222a7500} fill="var(--stroke-0, #2B4FA6)" mask="url(#path-2-inside-1_24_705)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[calc(87.5%+32.75px)] top-[802px]">
      <div className="absolute bg-white border border-[#2b4fa6] border-solid left-[calc(87.5%+32.75px)] rounded-[2px] size-[30px] top-[802px]" />
      <Close1 />
    </div>
  );
}

function ExpandMore9() {
  return (
    <div className="absolute inset-[76.77%_56.59%_21.18%_41.65%]" data-name="expand_more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_24_691" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_691)">
            <path d={svgPaths.p29a09680} fill="var(--fill-0, #2B4FA6)" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ExpandMore10() {
  return (
    <div className="absolute inset-[76.75%_43.56%_21.2%_54.69%]" data-name="expand_more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_24_691" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_691)">
            <path d={svgPaths.p29a09680} fill="var(--fill-0, #2B4FA6)" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ExpandMore11() {
  return (
    <div className="absolute inset-[76.75%_30.6%_21.2%_67.64%]" data-name="expand_more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_24_691" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_691)">
            <path d={svgPaths.p29a09680} fill="var(--fill-0, #2B4FA6)" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close2() {
  return (
    <div className="absolute left-[calc(87.5%+35.75px)] size-[24px] top-[905px]" data-name="close">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close">
          <mask height="24" id="mask0_24_705" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="23" id="Bounding box" stroke="var(--stroke-0, #2B4FA6)" width="23" x="0.5" y="0.5" />
          </mask>
          <g mask="url(#mask0_24_705)">
            <g id="close_2">
              <mask fill="white" id="path-2-inside-1_24_705">
                <path d={svgPaths.p246fe900} />
              </mask>
              <path d={svgPaths.p246fe900} fill="var(--fill-0, #2B4FA6)" />
              <path d={svgPaths.p222a7500} fill="var(--stroke-0, #2B4FA6)" mask="url(#path-2-inside-1_24_705)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[calc(87.5%+32.75px)] top-[902px]">
      <div className="absolute bg-white border border-[#2b4fa6] border-solid left-[calc(87.5%+32.75px)] rounded-[2px] size-[30px] top-[902px]" />
      <Close2 />
    </div>
  );
}

function ExpandMore12() {
  return (
    <div className="absolute inset-[85.31%_56.59%_12.64%_41.65%]" data-name="expand_more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_24_691" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_691)">
            <path d={svgPaths.p29a09680} fill="var(--fill-0, #2B4FA6)" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ExpandMore13() {
  return (
    <div className="absolute inset-[85.3%_43.56%_12.65%_54.69%]" data-name="expand_more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_24_691" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_691)">
            <path d={svgPaths.p29a09680} fill="var(--fill-0, #2B4FA6)" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ExpandMore14() {
  return (
    <div className="absolute inset-[85.3%_30.23%_12.65%_68.01%]" data-name="expand_more">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_24_691" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_24_691)">
            <path d={svgPaths.p29a09680} fill="var(--fill-0, #2B4FA6)" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close3() {
  return (
    <div className="absolute left-[calc(87.5%+35.75px)] size-[24px] top-[1005px]" data-name="close">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close">
          <mask height="24" id="mask0_24_705" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="23" id="Bounding box" stroke="var(--stroke-0, #2B4FA6)" width="23" x="0.5" y="0.5" />
          </mask>
          <g mask="url(#mask0_24_705)">
            <g id="close_2">
              <mask fill="white" id="path-2-inside-1_24_705">
                <path d={svgPaths.p246fe900} />
              </mask>
              <path d={svgPaths.p246fe900} fill="var(--fill-0, #2B4FA6)" />
              <path d={svgPaths.p222a7500} fill="var(--stroke-0, #2B4FA6)" mask="url(#path-2-inside-1_24_705)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[calc(87.5%+32.75px)] top-[1002px]">
      <div className="absolute bg-white border border-[#2b4fa6] border-solid left-[calc(87.5%+32.75px)] rounded-[2px] size-[30px] top-[1002px]" />
      <Close3 />
    </div>
  );
}

export default function BuildCohortDefineCohort() {
  return (
    <div className="bg-white relative size-full" data-name="Build Cohort Define Cohort">
      <div className="absolute bg-[#2b4fa6] h-[60px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[1366px]" />
      <div className="absolute left-[calc(87.5%+84.75px)] size-[26px] top-[17px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="26" src={imgEllipse2} width="26" />
      </div>
      <Group1 />
      <div className="absolute bg-white border border-[#c7daf5] border-dashed h-[179px] left-[calc(12.5%+27.25px)] rounded-[4px] top-[482px] w-[1104px]" />
      <div className="absolute bg-white border border-[#c7daf5] border-dashed h-[80px] left-[calc(12.5%+164.25px)] rounded-[4px] top-[556px] w-[924px]" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[21.05%_80.16%_77.6%_4.39%] leading-[normal] text-[#556479] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        What are you looking for ?
      </p>
      <div className="absolute flex h-[72px] items-center justify-center left-[calc(12.5%+119.25px)] top-[136px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[72px]">
            <div className="absolute inset-[-0.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 0.5">
                <line id="Line 125" stroke="var(--stroke-0, #D6D6D6)" strokeWidth="0.5" x2="72" y1="0.25" y2="0.25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[22px] left-[60px] text-[#2b4fa6] text-[24px] top-[90px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Welcome to the MAYO Clinic Cohort Explorer
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[22px] left-[60px] text-[#2b4fa6] text-[24px] top-[350px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Patients above 60 with diabeties
      </p>
      <Group8 />
      <Group2 />
      <Group3 />
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[21.71%_55.34%_76.94%_31.55%] leading-[normal] text-[#556479] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Patient Demographics
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[25.19%_87.92%_73.44%_7.32%] leading-[normal] text-[#556479] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Patient `}</p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[25.19%_77.89%_73.44%_17.35%] leading-[normal] text-[#556479] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Study
      </p>
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[25.16%_65.37%_73.05%_31.55%] leading-[normal] text-[#556479] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Age :
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[43.37%_76.87%_55%_16.69%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Select Entity
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[42.65%_63.54%_55.73%_24.96%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Patient demographics
      </p>
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[25.16%_32.14%_73.05%_62.88%] leading-[normal] text-[#556479] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gender :
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[26.27%_53.81%_72.51%_42.9%] leading-[normal] text-[#556479] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        18- 40
      </p>
      <Group6 />
      <RadioButtonChecked1 />
      <Group5 />
      <Group7 />
      <RadioButtonUnchecked2 />
      <Group4 />
      <div className="absolute bg-[#d9d9d9] inset-[25.75%_46.71%_74.16%_35.58%] rounded-[2px]" />
      <div className="absolute bg-[#2b4fa6] inset-[25.73%_50.66%_74.14%_40.56%] rounded-[2px]" />
      <div className="absolute inset-[25.35%_59.3%_73.8%_39.97%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 23" r="4.5" stroke="var(--stroke-0, #2B4FA6)" />
        </svg>
      </div>
      <div className="absolute inset-[25.35%_50.51%_73.8%_48.76%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 23" r="4.5" stroke="var(--stroke-0, #2B4FA6)" />
        </svg>
      </div>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[26.12%_63.84%_72.85%_35.58%] leading-[normal] text-[#556479] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[26.25%_46.63%_72.72%_52.2%] leading-[normal] text-[#556479] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        80
      </p>
      <div className="absolute inset-[44.92%_62.15%_55.08%_24.23%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 186.01 1">
            <line id="Line 129" stroke="var(--stroke-0, #939292)" x2="186.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ExpandMore />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[50.21%_67.57%_48.17%_26.94%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Parameter
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[49.49%_63.98%_48.89%_33.97%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Age
      </p>
      <div className="absolute inset-[51.76%_57.54%_48.24%_33.24%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.01 1">
            <line id="Line 177" stroke="var(--stroke-0, #939292)" x2="126.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ExpandMore1 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[50.21%_47.8%_48.17%_45.97%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Comparator
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[49.47%_45.61%_48.9%_53.73%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`>`}</p>
      <div className="absolute inset-[51.74%_44.36%_48.26%_53%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.01 1">
            <line id="Line 178" stroke="var(--stroke-0, #939292)" x2="36.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ExpandMore2 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[50.21%_34.55%_48.17%_62.52%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Value
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[49.47%_31.33%_48.9%_67.35%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        60
      </p>
      <div className="absolute inset-[51.74%_30.75%_48.26%_66.62%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.01 1">
            <line id="Line 178" stroke="var(--stroke-0, #939292)" x2="36.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ExpandMore3 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[50.21%_22.18%_48.17%_75.7%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unit
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[49.47%_17.28%_48.9%_79.8%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Years
      </p>
      <div className="absolute inset-[51.74%_16.1%_48.26%_79.06%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.01 1">
            <line id="Line 180" stroke="var(--stroke-0, #939292)" x2="66.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ExpandMore4 />
      <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-center justify-center left-[60px] px-[20px] py-[8px] rounded-bl-[6px] rounded-tl-[6px] top-[417px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border border-[#2b4fa6] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-tl-[6px]" />
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2b4fa6] text-[18px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          AND
        </p>
      </div>
      <div className="absolute bg-[#2b4fa6] content-stretch flex flex-col h-[40px] items-center justify-center left-[137px] px-[20px] py-[8px] rounded-br-[6px] rounded-tr-[6px] top-[417px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border border-[#2b4fa6] border-solid inset-0 pointer-events-none rounded-br-[6px] rounded-tr-[6px]" />
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Or
        </p>
      </div>
      <PrimaryButton />
      <PrimaryButton1 />
      <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-center justify-center left-[60px] px-[20px] py-[8px] rounded-[6px] top-[516px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border border-[#2b4fa6] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2b4fa6] text-[18px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          AND
        </p>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-center justify-center left-[calc(12.5%+57.25px)] px-[20px] py-[8px] rounded-[6px] top-[576px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border border-[#2b4fa6] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2b4fa6] text-[18px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          AND
        </p>
      </div>
      <div className="absolute flex h-[72px] items-center justify-center left-[calc(37.5%+84.75px)] top-[136px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[72px]">
            <div className="absolute inset-[-0.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 0.5">
                <line id="Line 125" stroke="var(--stroke-0, #D6D6D6)" strokeWidth="0.5" x2="72" y1="0.25" y2="0.25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[60px] items-center justify-center left-[97px] top-[457px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[60px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 1">
                <line id="Line 157" stroke="var(--stroke-0, #2B4FA6)" x2="60" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[137px] top-[536px] w-[60px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 1">
            <line id="Line 158" stroke="var(--stroke-0, #2B4FA6)" x2="60" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-center justify-center left-[60px] px-[20px] py-[8px] rounded-[6px] top-[766px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border border-[#2b4fa6] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2b4fa6] text-[18px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          AND
        </p>
      </div>
      <div className="absolute flex h-[211px] items-center justify-center left-[97px] top-[556px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[211px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 211 1">
                <line id="Line 181" stroke="var(--stroke-0, #2B4FA6)" x2="211" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[137px] top-[786px] w-[60px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 1">
            <line id="Line 158" stroke="var(--stroke-0, #2B4FA6)" x2="60" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[calc(12.5%+134.25px)] top-[596px] w-[30px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 1">
            <line id="Line 183" stroke="var(--stroke-0, #2B4FA6)" x2="30" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#2b4fa6] content-stretch flex flex-col h-[40px] items-center justify-center left-[calc(87.5%-12.25px)] px-[20px] py-[8px] rounded-[6px] top-[1100px] w-[119px]" data-name="Primary Button">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Search
        </p>
      </div>
      <Group9 />
      <div className="absolute bg-white border border-[#c7daf5] border-dashed h-[379px] left-[calc(12.5%+27.25px)] rounded-[4px] top-[702px] w-[1104px]" />
      <div className="absolute bg-white border border-[#c7daf5] border-dashed h-[80px] left-[calc(12.5%+164.25px)] rounded-[4px] top-[776px] w-[941px]" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[62.17%_76.87%_36.2%_16.69%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Select Entity
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[61.45%_69.84%_36.92%_24.96%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Diagnosis
      </p>
      <div className="absolute inset-[63.72%_62.15%_36.28%_24.23%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 186.01 1">
            <line id="Line 129" stroke="var(--stroke-0, #939292)" x2="186.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ExpandMore5 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[69.01%_68.52%_29.36%_25.99%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Parameter
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[68.29%_58.78%_30.09%_33.02%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Diagnosis Code
      </p>
      <div className="absolute inset-[70.6%_58.35%_29.4%_32.28%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 1">
            <line id="Line 159" stroke="var(--stroke-0, #939292)" x2="128" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ExpandMore6 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[69.01%_48.76%_29.36%_45.02%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Comparator
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[68.28%_46.05%_30.1%_52.78%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        IN
      </p>
      <div className="absolute inset-[70.55%_45.31%_29.45%_52.05%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.01 1">
            <line id="Line 178" stroke="var(--stroke-0, #939292)" x2="36.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ExpandMore7 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[69.01%_38.8%_29.36%_58.64%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Type
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[68.29%_34.85%_30.09%_62.3%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ICD 9
      </p>
      <div className="absolute inset-[70.56%_33.89%_29.44%_62.01%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.01 1">
            <line id="Line 162" stroke="var(--stroke-0, #939292)" x2="56.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ExpandMore8 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[69.01%_25.99%_29.36%_71.08%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Value
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[68.28%_11.05%_30.1%_75.26%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        250.1, 250.11, 250.21,25...
      </p>
      <div className="absolute inset-[70.55%_11.86%_29.45%_74.52%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 186.01 1">
            <line id="Line 129" stroke="var(--stroke-0, #939292)" x2="186.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-center justify-center left-[calc(12.5%+57.25px)] px-[20px] py-[8px] rounded-[6px] top-[796px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border border-[#2b4fa6] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2b4fa6] text-[18px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          AND
        </p>
      </div>
      <div className="absolute h-0 left-[calc(12.5%+134.25px)] top-[816px] w-[30px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 1">
            <line id="Line 183" stroke="var(--stroke-0, #2B4FA6)" x2="30" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Group10 />
      <div className="absolute bg-white border border-[#c7daf5] border-dashed h-[80px] left-[calc(12.5%+164.25px)] rounded-[4px] top-[876px] w-[941px]" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[77.56%_68.52%_20.82%_25.99%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Parameter
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[76.84%_58.78%_21.54%_33.02%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Diagnosis Code
      </p>
      <div className="absolute inset-[79.15%_58.35%_20.85%_32.28%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 1">
            <line id="Line 159" stroke="var(--stroke-0, #939292)" x2="128" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ExpandMore9 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[77.56%_48.76%_20.82%_45.02%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Comparator
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[76.82%_46.05%_21.55%_52.78%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        IN
      </p>
      <div className="absolute inset-[79.09%_45.31%_20.91%_52.05%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.01 1">
            <line id="Line 178" stroke="var(--stroke-0, #939292)" x2="36.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ExpandMore10 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[77.56%_38.8%_20.82%_58.64%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Type
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[76.84%_34.19%_21.54%_62.3%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ICD 10
      </p>
      <div className="absolute inset-[79.11%_33.16%_20.89%_62.01%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.01 1">
            <line id="Line 180" stroke="var(--stroke-0, #939292)" x2="66.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ExpandMore11 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[77.56%_25.99%_20.82%_71.08%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Value
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[76.82%_11.27%_21.55%_75.26%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ED10.21, ED 10.311, ED ...
      </p>
      <div className="absolute inset-[79.09%_11.86%_20.91%_74.52%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 186.01 1">
            <line id="Line 129" stroke="var(--stroke-0, #939292)" x2="186.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-center justify-center left-[calc(12.5%+70.25px)] px-[20px] py-[8px] rounded-[6px] top-[896px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border border-[#2b4fa6] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2b4fa6] text-[18px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          or
        </p>
      </div>
      <div className="absolute h-0 left-[calc(12.5%+134.25px)] top-[916px] w-[30px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 1">
            <line id="Line 183" stroke="var(--stroke-0, #2B4FA6)" x2="30" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Group11 />
      <div className="absolute flex h-[61px] items-center justify-center left-[calc(12.5%+102.25px)] top-[936px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[61px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 1">
                <line id="Line 170" stroke="var(--stroke-0, #1D2366)" x2="61" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[61px] items-center justify-center left-[calc(12.5%+102.25px)] top-[836px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[61px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 1">
                <line id="Line 170" stroke="var(--stroke-0, #1D2366)" x2="61" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white border border-[#c7daf5] border-dashed h-[80px] left-[calc(12.5%+164.25px)] rounded-[4px] top-[976px] w-[941px]" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[86.11%_68.52%_12.27%_25.99%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Parameter
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[85.38%_58.78%_12.99%_33.02%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Diagnosis Code
      </p>
      <div className="absolute inset-[87.69%_58.35%_12.31%_32.28%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 1">
            <line id="Line 159" stroke="var(--stroke-0, #939292)" x2="128" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ExpandMore12 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[86.11%_48.76%_12.27%_45.02%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Comparator
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[85.37%_46.05%_13%_52.78%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        IN
      </p>
      <div className="absolute inset-[87.64%_45.31%_12.36%_52.05%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.01 1">
            <line id="Line 178" stroke="var(--stroke-0, #939292)" x2="36.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ExpandMore13 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[86.11%_38.8%_12.27%_58.64%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Type
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[85.38%_32.8%_12.99%_62.37%] leading-[normal] text-[#556479] text-[16px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Snomed
      </p>
      <div className="absolute inset-[87.65%_32.43%_12.35%_62.01%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.01 1">
            <line id="Line 173" stroke="var(--stroke-0, #939292)" x2="76.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ExpandMore14 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[86.11%_25.99%_12.27%_71.08%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Value
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[85.37%_12.44%_13%_75.26%] leading-[normal] text-[#556479] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        5368009,116872002,....
      </p>
      <div className="absolute inset-[87.64%_11.86%_12.36%_74.52%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 186.01 1">
            <line id="Line 129" stroke="var(--stroke-0, #939292)" x2="186.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-center justify-center left-[calc(12.5%+70.25px)] px-[20px] py-[8px] rounded-[6px] top-[996px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border border-[#2b4fa6] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2b4fa6] text-[18px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          or
        </p>
      </div>
      <div className="absolute h-0 left-[calc(12.5%+134.25px)] top-[1016px] w-[30px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 1">
            <line id="Line 183" stroke="var(--stroke-0, #2B4FA6)" x2="30" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Group12 />
    </div>
  );
}