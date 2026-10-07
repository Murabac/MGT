import React, { useState } from 'react';
import { PageId } from '../../types';
import {
  COMPANY_INFO,
  SERVICES,
  CLIENTS,
  TESTIMONIAL,
  GM_SHORT_QUOTE,
} from '../../data/content';
import { MgtMark } from '../brand/MgtLogo';

interface HomePageProps {
  onNavigate: (page: PageId, anchorOrService?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Service category filter state for modern, clean scanning
  const [activeCategory, setActiveCategory] = useState<'all' | 'fleet' | 'freight' | 'supply'>('all');

  // Quick route enquiry widget state
  const [quickService, setQuickService] = useState('Vehicle leasing and light transport');
  const [quickRoute, setQuickRoute] = useState('Hargeisa to Burao corridor');

  const filteredServices = SERVICES.filter((s) => {
    if (activeCategory === 'fleet') {
      return ['vehicle-leasing', 'trucks-heavy-transport', 'travel-services'].includes(s.id);
    }
    if (activeCategory === 'freight') {
      return ['road-freight', 'sea-air-freight', 'customs-clearance', 'tax-exemption'].includes(s.id);
    }
    if (activeCategory === 'supply') {
      return ['procurement', 'warehouse-management', 'fumigation-pest-control', 'disinfection', 'property-site-support'].includes(s.id);
    }
    return true; // 'all' - shows all 12 services in clean modern grid
  });

  const handleQuickEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('contact', `${quickService} (${quickRoute})`);
  };

  return (
    <div className="w-full bg-[#FFFFFF] text-[#122033]">
      {/* 1. Modern High-Impact Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#D7E2EE]">
        {/* Subtle background ambient tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F3F7FB] via-white to-white pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Bold, Modern Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Minimalist Trust Kicker */}
              <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-[#526178]">
                <span className="w-2 h-2 rounded-full bg-[#1E9C34] animate-pulse" aria-hidden="true" />
                <span className="text-[#122033] font-bold">Hargeisa, Somaliland</span>
                <span className="text-[#D7E2EE]">·</span>
                <span>Established 2023</span>
                <span className="text-[#D7E2EE]">·</span>
                <span className="text-[#1776E9] font-bold">3PL Field Partner</span>
              </div>

              {/* Commanding Headline & Tagline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#122033] tracking-tight leading-[1.12]">
                  Moving People & Cargo Across Somaliland.
                </h1>
                <p className="text-base sm:text-lg font-bold text-[#1776E9] tracking-wide">
                  {COMPANY_INFO.tagline}
                </p>
              </div>

              {/* Exact One-Sentence Description with Breathing Room */}
              <p className="text-base sm:text-lg text-[#526178] leading-relaxed max-w-[620px]">
                {COMPANY_INFO.oneSentenceDescription}
              </p>

              {/* High-Converting Primary Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 bg-[#1776E9] hover:bg-[#0B4CAD] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-all transform active:scale-95 shadow-sm inline-flex items-center gap-2"
                >
                  <span>Request service / quote</span>
                  <span aria-hidden="true">→</span>
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 border border-[#D7E2EE] hover:border-[#1776E9] bg-white hover:bg-[#F3F7FB] text-[#122033] text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors"
                >
                  Explore 12 services
                </button>
              </div>

              {/* Fast Direct Dispatch Phone */}
              <div className="pt-2 flex items-center gap-3 text-xs text-[#526178]">
                <span className="w-2 h-2 bg-[#1E9C34] rounded-full" />
                <span>Urgent field dispatch:</span>
                <a
                  href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                  className="font-mono font-bold text-[#122033] hover:text-[#1776E9] underline underline-offset-2"
                >
                  {COMPANY_INFO.phones[0]}
                </a>
                <span className="text-[#D7E2EE]">·</span>
                <span className="text-[11px] text-[#526178]">24/7 NGO emergency line</span>
              </div>
            </div>

            {/* Right Column: Clean Photographic Feature Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-white border border-[#D7E2EE] p-2.5 rounded-[4px] shadow-sm">
                {/* 16:9 Documentary Hero Photo */}
                <div className="relative aspect-[16/9] w-full bg-[#122033] overflow-hidden rounded-[2px]">
                  <img
                    src="/src/assets/images/port_containers_dusk_1791368503589.jpg"
                    alt="Working container port and logistics terminal at dusk"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Subtle brand mark plate */}
                  <div className="absolute top-3 right-3 bg-white/95 px-3 py-1.5 border border-[#D7E2EE] rounded-[2px] shadow-sm flex items-center gap-2">
                    <MgtMark size={22} withDisc={false} />
                    <span className="text-[10px] font-bold tracking-wider text-[#122033] uppercase">
                      Hargeisa Hub
                    </span>
                  </div>
                </div>

                {/* Clean Feature Overlay Pills underneath */}
                <div className="p-3 bg-white space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#122033] font-semibold border-b border-[#D7E2EE] pb-2">
                    <span>Field Transport & Haulage</span>
                    <span className="text-[#1E9C34] text-[11px] font-bold">Audit-Ready 3PL</span>
                  </div>
                  <p className="text-[11px] text-[#526178] italic leading-tight">
                    Art direction: Working logistics operations. Port container staging, overland freight transfers, and field fleet deployment across Somaliland corridors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sleek Metrics Strip (Clean, Modern, Credible) */}
      <section className="bg-white border-b border-[#D7E2EE] py-8">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="space-y-0.5">
              <span className="text-3xl font-extrabold text-[#122033] font-mono tabular-nums">
                12
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1776E9]">
                Specialized Services
              </p>
              <p className="text-[11px] text-[#526178]">
                Vehicles, freight, customs, warehousing & procurement
              </p>
            </div>

            <div className="space-y-0.5">
              <span className="text-3xl font-extrabold text-[#122033] font-mono tabular-nums">
                9+
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1E9C34]">
                Institutional Partners
              </p>
              <p className="text-[11px] text-[#526178]">
                WFP, UNSOM, Plan Intl, VSF, Welthungerhilfe
              </p>
            </div>

            <div className="space-y-0.5">
              <span className="text-3xl font-extrabold text-[#122033] font-mono tabular-nums">
                100%
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-[#122033]">
                Corridor Coverage
              </p>
              <p className="text-[11px] text-[#526178]">
                Hargeisa, Berbera Port, Burao, Sanaag, Somalia
              </p>
            </div>

            <div className="space-y-0.5">
              <span className="text-3xl font-extrabold text-[#122033] font-mono tabular-nums">
                24/7
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1776E9]">
                Dispatch Support
              </p>
              <p className="text-[11px] text-[#526178]">
                Dedicated field coordinator for contracted missions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Fast Interactive Logistics Planner & Enquiry Tool (Draws Clients in 30 Seconds!) */}
      <section className="py-12 bg-[#F3F7FB] border-b border-[#D7E2EE]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="bg-white border border-[#D7E2EE] p-6 sm:p-8 rounded-[4px] shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#D7E2EE]">
              <div>
                <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
                  Fast Logistics Dispatch
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#122033] tracking-tight">
                  Need Fleet, Haulage, or Clearance Fast?
                </h2>
              </div>
              <p className="text-xs text-[#526178] max-w-sm">
                Select your logistical requirement below to route directly to our Hargeisa operations desk.
              </p>
            </div>

            <form onSubmit={handleQuickEnquiry} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
              {/* Select Service */}
              <div className="sm:col-span-5 space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#122033]">
                  1. What service do you need?
                </label>
                <select
                  value={quickService}
                  onChange={(e) => setQuickService(e.target.value)}
                  className="w-full h-[46px] px-3.5 bg-[#F3F7FB] border border-[#D7E2EE] rounded-[3px] text-sm text-[#122033] font-medium focus-visible:outline-2 focus-visible:outline-[#1776E9]"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.number}. {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Route / Region */}
              <div className="sm:col-span-4 space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#122033]">
                  2. Route / Operational Area
                </label>
                <select
                  value={quickRoute}
                  onChange={(e) => setQuickRoute(e.target.value)}
                  className="w-full h-[46px] px-3.5 bg-[#F3F7FB] border border-[#D7E2EE] rounded-[3px] text-sm text-[#122033] font-medium focus-visible:outline-2 focus-visible:outline-[#1776E9]"
                >
                  <option value="Hargeisa Urban & Regional">Hargeisa & Surrounding Districts</option>
                  <option value="Hargeisa to Burao corridor">Hargeisa — Burao Corridor</option>
                  <option value="Berbera Port maritime clearance">Berbera Port Gateway & Customs</option>
                  <option value="Sanaag / Erigavo field mission">Sanaag Region (Erigavo & Eastern)</option>
                  <option value="Maroodi Jeex field operations">Maroodi Jeex Field Operations</option>
                  <option value="Cross-border Somaliland to Somalia">Overland Transit to Somalia</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-3">
                <button
                  type="submit"
                  className="w-full h-[46px] bg-[#1776E9] hover:bg-[#0B4CAD] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Proceed to enquiry</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Core Services Showcase (Clean, Modern, Categorized) */}
      <section className="py-16 md:py-20 border-b border-[#D7E2EE]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-[#D7E2EE]">
            <div>
              <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
                Comprehensive 3PL Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122033] tracking-tight mt-1">
                Logistics & Transport Services
              </h2>
              <p className="text-sm text-[#526178] mt-1 max-w-xl">
                Sit between your program requirements and the ground assets needed to deliver field operations.
              </p>
            </div>

            {/* Modern Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F3F7FB] border border-[#D7E2EE] rounded-[3px]">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 text-xs font-bold rounded-[2px] transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-[#1776E9] text-white shadow-sm'
                    : 'text-[#122033] hover:bg-white'
                }`}
              >
                All (12)
              </button>
              <button
                onClick={() => setActiveCategory('fleet')}
                className={`px-3 py-1.5 text-xs font-bold rounded-[2px] transition-colors ${
                  activeCategory === 'fleet'
                    ? 'bg-[#1776E9] text-white shadow-sm'
                    : 'text-[#122033] hover:bg-white'
                }`}
              >
                Fleet & Haulage
              </button>
              <button
                onClick={() => setActiveCategory('freight')}
                className={`px-3 py-1.5 text-xs font-bold rounded-[2px] transition-colors ${
                  activeCategory === 'freight'
                    ? 'bg-[#1776E9] text-white shadow-sm'
                    : 'text-[#122033] hover:bg-white'
                }`}
              >
                Freight & Customs
              </button>
              <button
                onClick={() => setActiveCategory('supply')}
                className={`px-3 py-1.5 text-xs font-bold rounded-[2px] transition-colors ${
                  activeCategory === 'supply'
                    ? 'bg-[#1776E9] text-white shadow-sm'
                    : 'text-[#122033] hover:bg-white'
                }`}
              >
                Warehousing & Supply
              </button>
            </div>
          </div>

          {/* Clean Modern Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-[#D7E2EE] hover:border-[#1776E9] p-6 rounded-[3px] transition-all flex flex-col justify-between group shadow-xs hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#1776E9] bg-[#F3F7FB] px-2 py-0.5 rounded-[2px] tabular-nums">
                      {service.number}
                    </span>
                    <span className="text-[10px] font-condensed font-bold uppercase tracking-wider text-[#526178]">
                      MGT Certified
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#122033] group-hover:text-[#1776E9] transition-colors leading-snug mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#526178] leading-relaxed mb-4">
                    {service.summary}
                  </p>

                  {/* Fleet items list preview if available */}
                  {service.fleetOrItems && service.fleetOrItems.length > 0 && (
                    <div className="pt-3 border-t border-[#D7E2EE] mb-4">
                      <p className="text-[11px] font-bold text-[#122033] uppercase tracking-wider mb-1.5">
                        {service.id === 'procurement' ? 'Categories:' : 'Available Fleet:'}
                      </p>
                      <div className="flex flex-wrap gap-1.5 text-[11px] text-[#526178]">
                        {service.fleetOrItems.slice(0, 4).map((f, i) => (
                          <span
                            key={i}
                            className="bg-[#F3F7FB] px-2 py-0.5 border border-[#D7E2EE] rounded-[2px]"
                          >
                            {f}
                          </span>
                        ))}
                        {service.fleetOrItems.length > 4 && (
                          <span className="text-[11px] text-[#1776E9] self-center">
                            +{service.fleetOrItems.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#D7E2EE] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('contact', service.title)}
                    className="text-xs font-bold text-[#1776E9] group-hover:text-[#0B4CAD] transition-colors flex items-center gap-1"
                  >
                    <span>Request this service</span>
                    <span aria-hidden="true">→</span>
                  </button>
                  <button
                    onClick={() => onNavigate('services', service.id)}
                    className="text-[11px] text-[#526178] hover:text-[#122033] hover:underline"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 border border-[#D7E2EE] hover:border-[#1776E9] text-xs font-bold uppercase tracking-wider text-[#122033] hover:text-[#1776E9] rounded-[3px] transition-colors"
            >
              View full specifications for all 12 services →
            </button>
          </div>
        </div>
      </section>

      {/* 5. Institutional Clients Proof Strip (Instant Trust for NGOs & UN) */}
      <section className="py-14 bg-[#F3F7FB] border-b border-[#D7E2EE]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
              Proven Operational Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122033] tracking-tight mt-1">
              Trusted by UN Agencies, INGOs & Donors
            </h2>
            <p className="text-xs sm:text-sm text-[#526178] mt-1.5">
              Verified third-party logistics support across Somaliland and Somalia.
            </p>
          </div>

          {/* Clean, Elegant Institutional Table / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CLIENTS.map((client, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D7E2EE] p-4 rounded-[3px] flex flex-col justify-between hover:border-[#1776E9]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#526178] mb-1">
                    <span className="font-mono text-[#1776E9] font-bold">0{idx + 1}</span>
                    <span className="text-[10px] uppercase font-bold text-[#1E9C34]">Verified Client</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#122033] leading-snug">
                    {client.name}
                  </h3>
                </div>
                <div className="pt-2 mt-2 border-t border-[#D7E2EE] text-xs text-[#526178]">
                  <span className="text-[#122033] font-semibold">Scope: </span>
                  {client.workDone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. High-Prestige Testimonial: Deep Blue Band */}
      <section className="bg-[#0B4CAD] text-white py-16 border-y border-[#093c8b]">
        <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FEDE02]" />
              <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#FEDE02]">
                Official Institutional Recommendation
              </span>
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed text-white tracking-tight">
              “{TESTIMONIAL.quote}”
            </blockquote>

            <div className="pt-4 border-t border-[#1b5ec2]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <cite className="not-italic text-base sm:text-lg font-bold text-white block">
                  {TESTIMONIAL.attribution}
                </cite>
                <span className="text-sm text-[#FEDE02] font-semibold block mt-0.5">
                  {TESTIMONIAL.role}, {TESTIMONIAL.organization}
                </span>
                <span className="text-xs text-[#D7E2EE] block mt-1">
                  Context: {TESTIMONIAL.context}
                </span>
              </div>

              <div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 bg-[#1776E9] hover:bg-white hover:text-[#0B4CAD] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors"
                >
                  Contact our logistics team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Executive Credibility: General Manager's Note */}
      <section className="py-14 bg-white border-b border-[#D7E2EE]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl border-l-4 border-[#1776E9] pl-6 py-1">
            <p className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1776E9] mb-1">
              General Manager's Commitment
            </p>
            <p className="text-base sm:text-lg text-[#122033] leading-relaxed">
              “{GM_SHORT_QUOTE.quote}”
            </p>
            <div className="mt-3 flex items-center justify-between pt-2">
              <div>
                <strong className="block text-sm font-bold text-[#122033]">
                  {GM_SHORT_QUOTE.author}
                </strong>
                <span className="text-xs text-[#526178]">
                  General Manager, Maandeeq Global Transportation Ltd.
                </span>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="text-xs font-bold text-[#1776E9] hover:underline"
              >
                Read full executive message →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Modern High-Converting Contact Strip */}
      <section className="py-12 bg-[#F3F7FB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="bg-white border border-[#D7E2EE] p-6 sm:p-8 rounded-[4px] flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
                Direct Dispatch & Coordination
              </span>
              <h3 className="text-xl font-bold text-[#122033]">
                Ready to dispatch vehicles or cargo?
              </h3>
              <p className="text-xs sm:text-sm text-[#526178]">
                Office: {COMPANY_INFO.office} · Dispatch lines: {COMPANY_INFO.fourMainPhones.join(' · ')}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                className="px-5 py-3 border border-[#1776E9] text-[#1776E9] hover:bg-[#F3F7FB] text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors"
              >
                Call: {COMPANY_INFO.phones[0]}
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-[#1776E9] hover:bg-[#0B4CAD] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors"
              >
                Send online enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
