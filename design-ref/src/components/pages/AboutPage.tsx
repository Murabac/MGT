import React from 'react';
import { PageId } from '../../types';
import {
  COMPANY_INFO,
  COMPANY_STORY_PARAGRAPHS,
  VISION_MISSION,
  VALUES,
  GM_FULL_MESSAGE,
} from '../../data/content';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* 1. Modern Page Header */}
      <section className="border-b border-[#D7E2EE] bg-gradient-to-b from-[#F3F7FB] to-white py-12 md:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
              Corporate Background & Mandate
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#122033] tracking-tight">
              About Maandeeq Global Transportation
            </h1>
            <p className="text-base sm:text-lg text-[#526178] leading-relaxed">
              Founded in Hargeisa in 2023, MGT Group sits directly between organizations that need missions delivered and the ground vehicles, freight routes, and customs clearances that get it done.
            </p>
          </div>

          {/* Quick Credential Highlights */}
          <div className="mt-8 pt-6 border-t border-[#D7E2EE] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="font-bold text-[#122033] block">Established 2023</span>
              <span className="text-[#526178]">Hargeisa, Somaliland</span>
            </div>
            <div>
              <span className="font-bold text-[#122033] block">Third-Party Logistics</span>
              <span className="text-[#526178]">Turnkey fleet & haulage</span>
            </div>
            <div>
              <span className="font-bold text-[#122033] block">Institutional Focus</span>
              <span className="text-[#526178]">UN, INGOs & Donors</span>
            </div>
            <div>
              <span className="font-bold text-[#122033] block">Regional Corridors</span>
              <span className="text-[#526178]">Somaliland & Somalia</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Story (Modern Split Layout) */}
      <section className="py-14 md:py-20 border-b border-[#D7E2EE]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Section Anchor & Key Facts */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
                  Our Purpose
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122033] tracking-tight mt-1">
                  The Company Story
                </h2>
              </div>
              <p className="text-xs text-[#526178] leading-relaxed">
                Operating in the Horn of Africa requires practical knowledge of terrain, regional port systems, and rigorous compliance standards.
              </p>
              <div className="bg-[#F3F7FB] border border-[#D7E2EE] p-4 rounded-[3px] text-xs space-y-2">
                <span className="font-bold text-[#122033] block uppercase tracking-wider text-[11px]">
                  Headquarters Location:
                </span>
                <p className="text-[#526178]">
                  {COMPANY_INFO.office}
                </p>
                <div className="pt-1 text-[#1776E9] font-semibold">
                  Serving Hargeisa, Berbera Port, Burao, Sanaag, and southern Somalia routes.
                </div>
              </div>
            </div>

            {/* Right: Three Paragraphs with Generous Modern Typography */}
            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-[#122033] leading-relaxed max-w-[70ch]">
              {COMPANY_STORY_PARAGRAPHS.map((p, idx) => (
                <p key={idx} className="border-l-2 border-[#D7E2EE] hover:border-[#1776E9] pl-5 transition-colors">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision and Mission (Modern Cards Side-by-Side) */}
      <section className="py-14 md:py-20 border-b border-[#D7E2EE] bg-[#F3F7FB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
              Direction & Purpose
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122033] tracking-tight mt-1">
              Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 border border-[#D7E2EE] rounded-[4px] shadow-xs space-y-3 relative overflow-hidden">
              <div className="w-full h-1 bg-[#1776E9] absolute top-0 left-0" />
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#1776E9]" />
                <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1776E9]">
                  Strategic Orientation
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#122033] tracking-tight">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-[#526178] leading-relaxed pt-1">
                {VISION_MISSION.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 border border-[#D7E2EE] rounded-[4px] shadow-xs space-y-3 relative overflow-hidden">
              <div className="w-full h-1 bg-[#1E9C34] absolute top-0 left-0" />
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#1E9C34]" />
                <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
                  Operational Mandate
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#122033] tracking-tight">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-[#526178] leading-relaxed pt-1">
                {VISION_MISSION.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Eight Core Values (Clean, Modern Grid) */}
      <section className="py-14 md:py-20 border-b border-[#D7E2EE]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#D7E2EE]">
            <div>
              <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
                Operating Principles
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122033] tracking-tight mt-1">
                Core Institutional Values
              </h2>
            </div>
            <p className="text-xs text-[#526178] max-w-sm">
              Eight operational commitments that guide our fleet drivers, customs agents, and warehouse teams every day.
            </p>
          </div>

          {/* Clean 4-Column Modern Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D7E2EE] hover:border-[#1776E9] p-5 rounded-[3px] transition-all flex flex-col justify-between shadow-xs hover:shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs text-[#526178]">
                    <span className="font-mono text-[#1776E9] font-bold">
                      0{idx + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D7E2EE] group-hover:bg-[#1E9C34] transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-[#122033] group-hover:text-[#1776E9] transition-colors mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#526178] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Executive Address with Placeholder Image for General Manager */}
      <section className="py-16 md:py-24 border-b border-[#D7E2EE] bg-[#F3F7FB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
              Executive Address
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#122033] tracking-tight mt-1">
              Message from the General Manager
            </h2>
            <p className="text-xs text-[#526178] mt-1">
              As printed in the 2026 company profile · {COMPANY_INFO.gmNote}
            </p>
          </div>

          <div className="bg-white border border-[#D7E2EE] rounded-[4px] p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Executive Portrait Placeholder & Credentials */}
              <div className="lg:col-span-5 space-y-4">
                {/* Fixed Aspect Ratio Photo Container with Placeholder Art Direction */}
                <div className="border border-[#D7E2EE] bg-[#F3F7FB] p-2 rounded-[3px]">
                  <div className="relative aspect-[4/3] w-full bg-[#122033] overflow-hidden rounded-[2px]">
                    <img
                      src="/src/assets/images/executive_general_manager_1791377732806.jpg"
                      alt="General Manager Mohamed Omar Farah in Hargeisa corporate office"
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Position Label Tag */}
                    <div className="absolute bottom-2.5 left-2.5 bg-[#0B4CAD]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[2px] backdrop-blur-xs">
                      General Manager
                    </div>
                  </div>

                  {/* Explicit Art Direction Note */}
                  <div className="p-2.5 text-xs text-[#526178] border-t border-[#D7E2EE] bg-white mt-2 rounded-[2px]">
                    <p className="font-semibold text-[#122033]">
                      Placeholder Asset:
                    </p>
                    <p className="italic text-[11px] mt-0.5">
                      Art direction: Mohamed Omar Farah, General Manager. Executive portrait in Hargeisa operations headquarters. (Client name confirmation pending).
                    </p>
                  </div>
                </div>

                {/* Identity & Contact Card */}
                <div className="p-4 bg-[#F3F7FB] border border-[#D7E2EE] rounded-[3px] space-y-1">
                  <h4 className="text-sm font-bold text-[#122033]">
                    {COMPANY_INFO.generalManager}
                  </h4>
                  <p className="text-xs text-[#1776E9] font-medium">
                    General Manager, Maandeeq Global Transportation Ltd.
                  </p>
                  <p className="text-[11px] text-[#526178] pt-1">
                    Hargeisa Headquarters · 150 Street, Kodbuur District
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="w-full py-2 bg-[#1776E9] hover:bg-[#0B4CAD] text-white text-xs font-bold uppercase tracking-wider rounded-[2px] transition-colors"
                    >
                      Enquire with General Manager
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Complete Five-Paragraph Address */}
              <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#122033] leading-relaxed">
                <div className="p-4 bg-[#F3F7FB] border-l-4 border-[#0B4CAD] rounded-r-[3px] mb-4">
                  <p className="text-sm sm:text-base font-semibold text-[#0B4CAD] italic">
                    “Logistics in our region is not simply a matter of dispatching vehicles; it is about accountability, strict adherence to duty of care, and understanding the complex conditions of cross-country corridors.”
                  </p>
                </div>

                {GM_FULL_MESSAGE.map((paragraph, idx) => (
                  <p key={idx} className="text-[#122033]">
                    {paragraph}
                  </p>
                ))}

                {/* Formal Sign-off */}
                <div className="pt-6 border-t border-[#D7E2EE] flex items-center justify-between">
                  <div>
                    <strong className="block text-base font-extrabold text-[#122033]">
                      {COMPANY_INFO.generalManager}
                    </strong>
                    <span className="text-xs text-[#526178]">
                      General Manager, Maandeeq Global Transportation Ltd.
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-[#1E9C34] font-bold block">
                      VERIFIED 2026 PROFILE
                    </span>
                    <span className="text-[10px] text-[#526178]">
                      Hargeisa, Somaliland
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Modern Conversion Callout */}
      <section className="py-14 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
              Work With Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122033] tracking-tight">
              Ready to discuss your mission logistics?
            </h2>
            <p className="text-sm text-[#526178]">
              Contact our Hargeisa operations desk to request vehicle availability, route assessments, or tender documentation.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-3.5 bg-[#1776E9] hover:bg-[#0B4CAD] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors"
              >
                Reach our operations team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
