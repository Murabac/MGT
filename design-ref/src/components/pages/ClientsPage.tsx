import React from 'react';
import { PageId } from '../../types';
import { CLIENTS, TESTIMONIAL } from '../../data/content';

interface ClientsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* Page Header */}
      <section className="border-b border-[#D7E2EE] bg-gradient-to-b from-[#F3F7FB] to-white py-12 md:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1E9C34]">
              Institutional Proof & Credentials
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#122033] tracking-tight">
              Our Institutional Partners
            </h1>
            <p className="text-base sm:text-lg text-[#526178] leading-relaxed">
              MGT Group has delivered transport, haulage, field supplies, and logistics coordination for international non-governmental organizations, United Nations bodies, and Somaliland public ministries.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Registry: Clean, Modern, Trust-Building Cards & Table */}
      <section className="py-14 md:py-20 border-b border-[#D7E2EE]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#D7E2EE]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 bg-[#1776E9] rounded-[1px]" aria-hidden="true" />
                <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#1776E9]">
                  Accredited Ground Experience
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122033] tracking-tight">
                Organizations Contracted with MGT
              </h2>
            </div>
            <p className="text-xs text-[#526178] max-w-sm">
              Displayed in clean typographic format per donor confidentiality standards.
            </p>
          </div>

          {/* Clean Modern Client Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENTS.map((client, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D7E2EE] hover:border-[#1776E9] p-6 rounded-[3px] transition-all flex flex-col justify-between shadow-xs hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#526178] mb-3">
                    <span className="font-mono text-[#1776E9] font-bold">PARTNER 0{idx + 1}</span>
                    <span className="text-[10px] uppercase font-bold text-[#1E9C34] bg-emerald-50 px-2 py-0.5 rounded-[2px]">
                      Verified
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#122033] leading-snug mb-3">
                    {client.name}
                  </h3>
                </div>

                <div className="pt-3 border-t border-[#D7E2EE]">
                  <span className="text-[11px] font-bold text-[#122033] uppercase tracking-wider block mb-0.5">
                    Scope of Work:
                  </span>
                  <p className="text-xs text-[#526178] leading-relaxed">
                    {client.workDone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote: Deep Blue Band, Yellow Label, White Quote */}
      <section className="bg-[#0B4CAD] text-white py-16 md:py-24 border-y border-[#093c8b]">
        <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {/* Yellow Label sitting on blue */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-1 bg-[#FEDE02]" aria-hidden="true" />
              <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#FEDE02]">
                Official Client Recommendation
              </span>
            </div>

            {/* White Quote */}
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed text-white max-w-4xl tracking-tight">
              “{TESTIMONIAL.quote}”
            </blockquote>

            {/* Attribution Details */}
            <div className="pt-6 border-t border-[#1b5ec2]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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

              <div className="shrink-0">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 bg-[#1776E9] hover:bg-white hover:text-[#0B4CAD] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors"
                >
                  Contact MGT Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Note */}
      <section className="py-12 bg-[#F3F7FB]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-[#526178] max-w-2xl mx-auto">
            * Formal letters of recommendation and verified past performance dossiers are available to accredited organizations during procurement audits and expressions of interest.
          </p>
        </div>
      </section>
    </div>
  );
};
