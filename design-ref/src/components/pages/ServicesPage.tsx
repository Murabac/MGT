import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { SERVICES } from '../../data/content';

interface ServicesPageProps {
  onNavigate: (page: PageId, targetService?: string) => void;
  activeAnchor?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  activeAnchor,
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'fleet' | 'freight' | 'supply'>('all');

  useEffect(() => {
    if (activeAnchor) {
      const element = document.getElementById(activeAnchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [activeAnchor]);

  const displayedServices = SERVICES.filter((s) => {
    if (filterCategory === 'fleet') {
      return ['vehicle-leasing', 'trucks-heavy-transport', 'travel-services'].includes(s.id);
    }
    if (filterCategory === 'freight') {
      return ['road-freight', 'sea-air-freight', 'customs-clearance', 'tax-exemption'].includes(s.id);
    }
    if (filterCategory === 'supply') {
      return ['procurement', 'warehouse-management', 'fumigation-pest-control', 'disinfection', 'property-site-support'].includes(s.id);
    }
    return true;
  });

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* Modern Page Header */}
      <section className="border-b border-[#D7E2EE] bg-gradient-to-b from-[#F3F7FB] to-white py-12 md:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
              3PL Capabilities & Fleets
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#122033] tracking-tight">
              Our Services & Capabilities
            </h1>
            <p className="text-base sm:text-lg text-[#526178] leading-relaxed">
              MGT supplies third-party logistics across Somaliland and Somalia. We provide the vehicles, haulage, customs processing, and storage facilities required by donor programs and public missions.
            </p>
          </div>

          {/* Clean Operational Category Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 text-xs font-bold rounded-[3px] transition-colors ${
                filterCategory === 'all'
                  ? 'bg-[#1776E9] text-white shadow-sm'
                  : 'bg-white border border-[#D7E2EE] text-[#122033] hover:border-[#1776E9]'
              }`}
            >
              All 12 Services
            </button>
            <button
              onClick={() => setFilterCategory('fleet')}
              className={`px-4 py-2 text-xs font-bold rounded-[3px] transition-colors ${
                filterCategory === 'fleet'
                  ? 'bg-[#1776E9] text-white shadow-sm'
                  : 'bg-white border border-[#D7E2EE] text-[#122033] hover:border-[#1776E9]'
              }`}
            >
              Fleet & Haulage
            </button>
            <button
              onClick={() => setFilterCategory('freight')}
              className={`px-4 py-2 text-xs font-bold rounded-[3px] transition-colors ${
                filterCategory === 'freight'
                  ? 'bg-[#1776E9] text-white shadow-sm'
                  : 'bg-white border border-[#D7E2EE] text-[#122033] hover:border-[#1776E9]'
              }`}
            >
              Freight & Port Customs
            </button>
            <button
              onClick={() => setFilterCategory('supply')}
              className={`px-4 py-2 text-xs font-bold rounded-[3px] transition-colors ${
                filterCategory === 'supply'
                  ? 'bg-[#1776E9] text-white shadow-sm'
                  : 'bg-white border border-[#D7E2EE] text-[#122033] hover:border-[#1776E9]'
              }`}
            >
              Warehousing & Supply Chain
            </button>
          </div>
        </div>
      </section>

      {/* Clean Modern Services Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {displayedServices.map((srv) => (
              <div
                key={srv.id}
                id={srv.id}
                className="scroll-mt-24 border border-[#D7E2EE] hover:border-[#1776E9] bg-white p-6 sm:p-8 rounded-[4px] transition-all shadow-xs hover:shadow-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                  {/* Left Column: Number, Title, Summary, Action */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold bg-[#F3F7FB] border border-[#D7E2EE] text-[#1776E9] px-2 py-0.5 rounded-[2px] tabular-nums">
                        {srv.number}
                      </span>
                      <span className="text-[10px] font-condensed font-bold uppercase tracking-wider text-[#1E9C34]">
                        MGT Operational Division
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-[#122033] tracking-tight">
                      {srv.title}
                    </h2>

                    <p className="text-sm font-semibold text-[#1776E9]">
                      {srv.summary}
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => onNavigate('contact', srv.title)}
                        className="px-5 py-2.5 bg-[#1776E9] hover:bg-[#0B4CAD] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors inline-flex items-center gap-2 shadow-xs"
                      >
                        <span>Request this service</span>
                        <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Narrative, Fleet or Items, Photo Slot */}
                  <div className="lg:col-span-7 space-y-4 border-t lg:border-t-0 lg:border-l border-[#D7E2EE] pt-4 lg:pt-0 lg:pl-8">
                    <p className="text-sm sm:text-base text-[#122033] leading-relaxed">
                      {srv.description}
                    </p>

                    {/* Fleet / items list */}
                    {srv.fleetOrItems && srv.fleetOrItems.length > 0 && (
                      <div className="bg-[#F3F7FB] border border-[#D7E2EE] p-4 rounded-[3px]">
                        <h4 className="text-xs font-condensed font-bold uppercase tracking-widest text-[#122033] mb-2">
                          {srv.id === 'procurement' ? 'Procurement Items:' : 'Available Vehicles & Fleet:'}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#122033]">
                          {srv.fleetOrItems.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 font-medium">
                              <span className="w-1.5 h-1.5 bg-[#1776E9] shrink-0" aria-hidden="true" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Institutional usage note */}
                    {srv.fieldNote && (
                      <div className="border-l-2 border-[#1E9C34] pl-3 py-1 bg-[#F3F7FB] text-xs text-[#526178]">
                        <strong className="text-[#122033]">Active Deployments: </strong>
                        {srv.fieldNote}
                      </div>
                    )}

                    {/* Fixed aspect ratio photo slots with art direction */}
                    {srv.id === 'vehicle-leasing' && (
                      <div className="mt-4 border border-[#D7E2EE] bg-[#F3F7FB] p-2 rounded-[3px]">
                        <div className="relative aspect-[16/9] w-full bg-[#122033] overflow-hidden rounded-[2px]">
                          <img
                            src="/src/assets/images/field_transport_vehicle_1791368517811.jpg"
                            alt="4x4 Land Cruiser field logistics vehicle on a Somaliland road"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-2 text-xs text-[#526178]">
                          <span className="font-semibold text-[#122033]">Art direction:</span> Land Cruiser on a Somaliland road, daylight, no stock-watermark look.
                        </div>
                      </div>
                    )}

                    {srv.id === 'warehouse-management' && (
                      <div className="mt-4 border border-[#D7E2EE] bg-[#F3F7FB] p-2 rounded-[3px]">
                        <div className="relative aspect-[16/9] w-full bg-[#122033] overflow-hidden rounded-[2px]">
                          <img
                            src="/src/assets/images/warehouse_cargo_depot_1791368539325.jpg"
                            alt="Logistics storage warehouse and transport staging in Somaliland"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-2 text-xs text-[#526178]">
                          <span className="font-semibold text-[#122033]">Art direction:</span> Secure warehouse bay, pallet staging with round-the-clock guards.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Conversion Footer */}
      <section className="py-14 bg-[#F3F7FB] border-t border-[#D7E2EE]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
              Start an engagement
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122033] tracking-tight">
              Ready to request one of these services?
            </h2>
            <p className="text-sm text-[#526178]">
              Tell us the vehicles, route, cargo volume, or customs assistance your organization requires. We reply promptly from the Hargeisa operations desk.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-[#1776E9] hover:bg-[#0B4CAD] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors"
              >
                Send service enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
