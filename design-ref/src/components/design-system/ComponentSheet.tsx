import React from 'react';
import {
  MgtMark,
  MgtHorizontalOnLight,
  MgtHorizontalOnBlue,
  MgtStackedOnBlue,
  BrandTopStripe,
  BrandBarCutIn,
} from '../brand/MgtLogo';

export const ComponentSheet: React.FC = () => {
  const colors = [
    { name: 'Page', hex: '#FFFFFF', role: 'Main background canvas', textDark: true },
    { name: 'Surface', hex: '#F3F7FB', role: 'Alternate bands only, used rarely', textDark: true },
    { name: 'Ink', hex: '#122033', role: 'Headings and body text', textDark: false },
    { name: 'Muted', hex: '#526178', role: 'Captions and secondary lines', textDark: false },
    { name: 'Line', hex: '#D7E2EE', role: 'Dividers & structural borders', textDark: true },
    { name: 'Blue', hex: '#1776E9', role: 'Links, main button, blue in logo', textDark: false },
    { name: 'Deep Blue', hex: '#0B4CAD', role: 'Large blue areas where white text sits', textDark: false },
    { name: 'Green', hex: '#1E9C34', role: 'The swoosh, section markers, labels', textDark: false },
    { name: 'Yellow', hex: '#FEDE02', role: 'MAANDEEQ name & small labels on blue', textDark: true },
  ];

  return (
    <div className="w-full bg-[#FFFFFF] p-6 sm:p-10 max-w-[1240px] mx-auto text-[#122033] space-y-12">
      {/* Header */}
      <div className="border-b-2 border-[#122033] pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
              Design System Specification
            </span>
            <h1 className="text-3xl font-extrabold text-[#122033] tracking-tight mt-1">
              MGT Group · Component Sheet & Token Standard
            </h1>
            <p className="text-sm text-[#526178] mt-1">
              Visual tokens, UI component specifications, and accessibility contracts for developer implementation in Next.js.
            </p>
          </div>
          <div className="text-right text-xs text-[#526178]">
            <p className="font-bold text-[#122033]">Maandeeq Global Transportation Ltd.</p>
            <p>Hargeisa, Somaliland · 2026 Spec</p>
          </div>
        </div>
      </div>

      {/* 1. Color Palette Tokens & Accessibility Governance */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[#122033] flex items-center gap-2 border-b border-[#D7E2EE] pb-2">
          <span className="w-2.5 h-2.5 bg-[#1776E9]" />
          1. Color Token System (Strict 9-Color Palette)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-3">
          {colors.map((c) => (
            <div
              key={c.name}
              className="border border-[#D7E2EE] rounded-[2px] overflow-hidden flex flex-col justify-between"
            >
              <div
                className="h-16 w-full flex items-center justify-center p-2 text-center"
                style={{ backgroundColor: c.hex }}
              >
                <span
                  className={`text-xs font-mono font-bold ${
                    c.textDark ? 'text-[#122033]' : 'text-white'
                  }`}
                >
                  {c.hex}
                </span>
              </div>
              <div className="p-2.5 bg-white space-y-1 text-left">
                <span className="text-xs font-bold block">{c.name}</span>
                <span className="text-[10px] text-[#526178] block leading-tight">
                  {c.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Color Rules Callout */}
        <div className="bg-[#F3F7FB] border border-[#D7E2EE] p-4 text-xs space-y-1 text-[#122033]">
          <strong className="block font-bold text-[#0B4CAD] uppercase tracking-wider text-[11px]">
            Brand Color Enforcement Rules:
          </strong>
          <ul className="list-disc list-inside space-y-0.5 text-[#526178]">
            <li><strong>Yellow on white is FORBIDDEN.</strong> Yellow (#FEDE02) is only for MAANDEEQ name and small labels on deep blue.</li>
            <li><strong>No bright blue for paragraphs.</strong> Body text is strictly Ink (#122033).</li>
            <li><strong>White is the canvas.</strong> Surface (#F3F7FB) is reserved for alternating structural bands only.</li>
            <li><strong>Green is a marker.</strong> Green (#1E9C34) represents the swoosh and small labels; never the primary button.</li>
            <li><strong>White text sits strictly on Deep Blue (#0B4CAD)</strong> to guarantee WCAG AA contrast (&gt; 7:1).</li>
          </ul>
        </div>
      </section>

      {/* 2. Typography Scale */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[#122033] flex items-center gap-2 border-b border-[#D7E2EE] pb-2">
          <span className="w-2.5 h-2.5 bg-[#1776E9]" />
          2. Sturdy Grotesque Typographic Hierarchy
        </h2>

        <div className="border border-[#D7E2EE] divide-y divide-[#D7E2EE] text-sm">
          <div className="p-4 grid grid-cols-1 md:grid-cols-4 items-baseline gap-2">
            <span className="text-xs font-mono text-[#526178]">Page Title / H1 (36–44px)</span>
            <div className="md:col-span-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#122033] tracking-tight">
                Maandeeq Global Transportation
              </span>
            </div>
          </div>

          <div className="p-4 grid grid-cols-1 md:grid-cols-4 items-baseline gap-2">
            <span className="text-xs font-mono text-[#526178]">Section Heading / H2 (24–30px)</span>
            <div className="md:col-span-3">
              <span className="text-2xl font-bold text-[#122033] tracking-tight">
                Core Operations & Capabilities
              </span>
            </div>
          </div>

          <div className="p-4 grid grid-cols-1 md:grid-cols-4 items-baseline gap-2">
            <span className="text-xs font-mono text-[#526178]">Section Label (Uppercase Condensed)</span>
            <div className="md:col-span-3">
              <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
                VISION · MISSION · OPERATIONS
              </span>
            </div>
          </div>

          <div className="p-4 grid grid-cols-1 md:grid-cols-4 items-baseline gap-2">
            <span className="text-xs font-mono text-[#526178]">Body Prose (16–18px, ≤70ch)</span>
            <div className="md:col-span-3">
              <p className="text-base text-[#122033] leading-relaxed max-w-[70ch]">
                Maandeeq Global Transportation is a Hargeisa logistics company. It moves people and cargo across Somaliland and Somalia, and supports NGOs, UN agencies, and public projects with transport, freight, customs, procurement, and warehousing.
              </p>
            </div>
          </div>

          <div className="p-4 grid grid-cols-1 md:grid-cols-4 items-baseline gap-2">
            <span className="text-xs font-mono text-[#526178]">Tabular Figures (Mono Tabular)</span>
            <div className="md:col-span-3">
              <span className="font-mono text-sm text-[#1776E9] tabular-nums font-bold">
                01 / 02 / 03 / 063 484 8748 / 2026-10-07
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Button and Interactive Controls */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[#122033] flex items-center gap-2 border-b border-[#D7E2EE] pb-2">
          <span className="w-2.5 h-2.5 bg-[#1776E9]" />
          3. Button System & Focus State Contracts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Primary Button */}
          <div className="border border-[#D7E2EE] p-5 space-y-3">
            <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#526178] block">
              Primary Button
            </span>
            <div>
              <button className="px-5 py-3 bg-[#1776E9] hover:bg-[#0B4CAD] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors">
                Request service
              </button>
            </div>
            <p className="text-[11px] text-[#526178]">
              Solid Blue #1776E9, hover Deep Blue #0B4CAD. White label. Square/nearly square (radius under 4px). No drop shadow.
            </p>
          </div>

          {/* Secondary Button */}
          <div className="border border-[#D7E2EE] p-5 space-y-3">
            <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#526178] block">
              Secondary Button
            </span>
            <div>
              <button className="px-5 py-3 border border-[#1776E9] hover:bg-[#F3F7FB] text-[#1776E9] text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors">
                View services
              </button>
            </div>
            <p className="text-[11px] text-[#526178]">
              Blue outline 1px #1776E9, transparent fill, blue label.
            </p>
          </div>

          {/* Focus State Specification */}
          <div className="border border-[#D7E2EE] p-5 space-y-3">
            <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#526178] block">
              Accessibility Focus Outline
            </span>
            <div>
              <button
                className="px-5 py-3 bg-[#1776E9] text-white text-xs font-bold uppercase tracking-wider rounded-[3px]"
                style={{ outline: '2px solid #1776E9', outlineOffset: '3px' }}
              >
                Focused Control
              </button>
            </div>
            <p className="text-[11px] text-[#526178]">
              Clear 2px solid blue outline with 2px offset for keyboard navigation. No soft fuzzy glow.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Form Field Controls & Validation States */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[#122033] flex items-center gap-2 border-b border-[#D7E2EE] pb-2">
          <span className="w-2.5 h-2.5 bg-[#1776E9]" />
          4. Form Field Standards (Default, Dropdown, Error, Success)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#122033] mb-1">
                Input Field (Default)
              </label>
              <input
                type="text"
                readOnly
                value="International Rescue Committee"
                className="w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-[#D7E2EE] text-sm text-[#122033] rounded-[2px]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#122033] mb-1">
                Select Dropdown
              </label>
              <select
                disabled
                className="w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-[#D7E2EE] text-sm text-[#122033] rounded-[2px]"
              >
                <option>01. Vehicle leasing and light transport</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {/* Error state */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-rose-700 mb-1">
                Input in Error State (Text feedback required)
              </label>
              <input
                type="text"
                readOnly
                placeholder="Field left blank"
                className="w-full min-h-[44px] px-3.5 py-2.5 bg-rose-50/30 border border-rose-500 text-sm text-rose-900 rounded-[2px]"
              />
              <span className="text-[11px] font-medium text-rose-700 mt-1 block">
                Add your name, organization, the service you need, and a short message.
              </span>
            </div>

            {/* Success state */}
            <div className="p-3 bg-emerald-50 border border-[#1E9C34] rounded-[2px]">
              <span className="text-xs font-bold text-[#122033] uppercase tracking-wider block mb-0.5">
                Enquiry Submission Success State
              </span>
              <p className="text-xs text-[#122033]">
                Your email app should open with this enquiry. If it does not, write to the email address.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Logo Clear-Space & Lockup Specifications */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[#122033] flex items-center gap-2 border-b border-[#D7E2EE] pb-2">
          <span className="w-2.5 h-2.5 bg-[#1776E9]" />
          5. Logo Variations & Clear Space Rules
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Light Background Lockup */}
          <div className="border border-[#D7E2EE] bg-white p-6 space-y-3">
            <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#526178] block">
              Horizontal Lockup on White
            </span>
            <div className="p-4 border border-dashed border-[#D7E2EE] bg-white inline-block">
              <MgtHorizontalOnLight height={44} />
            </div>
            <p className="text-[11px] text-[#526178]">
              Yellow wordmark never sits isolated on white. Accompanied by deep blue/ink high contrast plate and crisp subtitle.
            </p>
          </div>

          {/* Deep Blue Lockup */}
          <div className="border border-[#093c8b] bg-[#0B4CAD] p-6 space-y-3 text-white">
            <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#FEDE02] block">
              Horizontal Lockup on Deep Blue (#0B4CAD)
            </span>
            <div className="p-4 border border-dashed border-white/30 bg-[#0B4CAD] inline-block">
              <MgtHorizontalOnBlue height={46} />
            </div>
            <p className="text-[11px] text-[#D7E2EE]">
              Circular mark with solid white disc. MAANDEEQ in vibrant Yellow #FEDE02 with white subtitle.
            </p>
          </div>

          {/* Stacked on Blue */}
          <div className="border border-[#093c8b] bg-[#0B4CAD] p-6 space-y-3 text-white text-center flex flex-col items-center">
            <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#FEDE02] block">
              Stacked Logo on Blue
            </span>
            <div className="p-4 border border-dashed border-white/30 inline-block">
              <MgtStackedOnBlue />
            </div>
          </div>

          {/* Circular Mark & Mobile Header */}
          <div className="border border-[#D7E2EE] bg-[#F3F7FB] p-6 space-y-3">
            <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#526178] block">
              Mobile Header Adaptation (390px Viewport)
            </span>
            <div className="flex items-center gap-3 p-3 bg-white border border-[#D7E2EE]">
              <MgtMark size={38} withDisc={false} />
              <div className="text-xs">
                <strong className="block font-bold text-[#122033]">Circular Mark Isolation</strong>
                <span className="text-[11px] text-[#526178]">
                  Prevents horizontal wordmark crush on narrow 390px mobile viewports.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Brand Bar Cut-In & 8px Stripe Motifs */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[#122033] flex items-center gap-2 border-b border-[#D7E2EE] pb-2">
          <span className="w-2.5 h-2.5 bg-[#1776E9]" />
          6. Brand Identity Motifs (From Profile Book)
        </h2>

        <div className="space-y-6">
          <div>
            <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#526178] block mb-2">
              A. 8px Top Brand Stripe (Affixed to page header)
            </span>
            <BrandTopStripe />
            <span className="text-[11px] text-[#526178] block mt-1">
              8px thin stripe: 64px–96px green segment (#1E9C34) + blue (#1776E9) spanning the remaining viewport width.
            </span>
          </div>

          <div>
            <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#526178] block mb-2">
              B. Green Bar Cut-In Title Motif (For key profile callouts)
            </span>
            <BrandBarCutIn
              title="Verified Logistics & Supply Chain Partner"
              subtitle="Company Profile Book Motif"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
