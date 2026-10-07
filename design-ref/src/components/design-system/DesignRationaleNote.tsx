import React from 'react';

export const DesignRationaleNote: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] p-6 sm:p-10 max-w-[900px] mx-auto text-[#122033] space-y-8">
      {/* Title */}
      <div className="border-b-2 border-[#122033] pb-4">
        <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
          Design Rationale & Architectural Note
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#122033] tracking-tight mt-1">
          Visual Strategy for Maandeeq Global Transportation
        </h1>
        <p className="text-xs text-[#526178] mt-1">
          Prepared for Developers, Management, and Implementation Teams
        </p>
      </div>

      {/* Note Body */}
      <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#122033]">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#122033] uppercase tracking-wider text-xs text-[#1776E9]">
            1. The User & The 60-Second Test
          </h2>
          <p>
            The primary visitor to this website is a logistics coordinator or procurement officer at an international NGO (like VSF Suisse, Plan International, or Welthungerhilfe), a United Nations agency (UNSOM, WFP), or a donor-financed infrastructure project in Hargeisa.
          </p>
          <p>
            This user is formal, busy, and intensely risk-averse. They are not looking for consumer SaaS marketing, animated trucks, or buzzwords like <em>“unlock your supply chain”</em> or <em>“seamless logistics solutions”</em>. They need immediate certainty: <strong>Does this company have 4x4 vehicles in Hargeisa? Can they haul heavy freight? Do they handle Berbera customs clearance and tax exemption processing? How do I reach dispatch today?</strong>
          </p>
          <p>
            Within 60 seconds of landing, the page answers each question without ambiguity and provides direct phone numbers and a clean enquiry form.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#122033] uppercase tracking-wider text-xs text-[#1776E9]">
            2. Anti-Slop Discipline & Institutional Authority
          </h2>
          <p>
            The interface rejects generic startup templates, rounded pill badges, floating drop shadows, and fake metrics (e.g. invented “99.8% on time” or “500 vehicles”). Every section uses clear, structural hairline dividers (<code>#D7E2EE</code>), authentic typographic hierarchy, and verified client engagements.
          </p>
          <p>
            Proof is provided through named institutional partners—such as the Ministry of Agricultural Development on the World Bank Barwaaqo project—rather than vague anonymous quotes or invented awards.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#122033] uppercase tracking-wider text-xs text-[#1776E9]">
            3. Color & Contrast Integrity
          </h2>
          <p>
            The palette adheres strictly to the brand’s defined color rules:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-[#526178]">
            <li><strong>White (#FFFFFF)</strong> forms the primary canvas to maintain legibility and calm authority.</li>
            <li><strong>Surface (#F3F7FB)</strong> is deployed conservatively for alternate structural bands.</li>
            <li><strong>Ink (#122033)</strong> provides crisp, high-contrast headings and body prose (preventing low-contrast washed-out grays).</li>
            <li><strong>Blue (#1776E9)</strong> is focused strictly on actionable touchpoints: links and primary buttons.</li>
            <li><strong>Deep Blue (#0B4CAD)</strong> anchors the top hero and footer, ensuring white text achieves &gt;7:1 WCAG AA contrast.</li>
            <li><strong>Green (#1E9C34)</strong> serves as a focused directional marker and small labels, matching the brand swoosh.</li>
            <li><strong>Yellow (#FEDE02)</strong> is restricted to the MAANDEEQ name and small labels on deep blue; it is never rendered as raw text on white.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#122033] uppercase tracking-wider text-xs text-[#1776E9]">
            4. Photography Direction
          </h2>
          <p>
            Photography is treated as working documentary logistics rather than commercial luxury travel. Fixed aspect ratios (16:9) frame working port containers, Land Cruisers on rural Somaliland routes, and organized warehouse staging bays. Underneath each slot, an explicit art-direction caption provides clear specifications for future client assets.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#122033] uppercase tracking-wider text-xs text-[#1776E9]">
            5. Next.js Implementation Notes for Developers
          </h2>
          <p>
            The design has been structured modularly with zero external layout dependencies:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-[#526178]">
            <li>Routes map directly to <code>/</code>, <code>/about</code>, <code>/services</code>, <code>/clients</code>, and <code>/contact</code> in Next.js App Router (<code>app/</code>).</li>
            <li>Tailwind CSS utility classes utilize strict pixel boundaries (buttons square with <code>rounded-[3px]</code>, tap targets &gt;= 44px).</li>
            <li>Anchors on <code>/services</code> allow direct deep-linking from the Home scannable list.</li>
            <li>Forms require no database back-end; they validate fields and open the user’s default mail client pre-populated with Hargeisa dispatch parameters.</li>
          </ul>
        </section>
      </div>

      <div className="pt-6 border-t border-[#D7E2EE] text-xs text-[#526178] flex items-center justify-between">
        <span>Maandeeq Global Transportation Ltd. · Established 2023</span>
        <span>Hargeisa, Somaliland</span>
      </div>
    </div>
  );
};
