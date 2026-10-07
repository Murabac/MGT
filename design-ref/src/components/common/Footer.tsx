import React from 'react';
import { PageId } from '../../types';
import { COMPANY_INFO } from '../../data/content';
import { MgtHorizontalOnBlue } from '../brand/MgtLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="w-full bg-[#0B4CAD] text-white border-t border-[#093c8b]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#1b5ec2]/40">
          {/* Col 1: Horizontal logo on blue + Tagline + Mission */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <MgtHorizontalOnBlue height={46} />
            <p className="text-[#FEDE02] font-condensed font-bold text-sm tracking-widest uppercase mt-2">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-[#D7E2EE] text-sm leading-relaxed max-w-md pt-1">
              Third-party logistics across Somaliland and Somalia. Reliable fleet leasing, heavy haulage, road freight, customs clearance, procurement, and secure warehousing for NGOs, UN agencies, and public institutions.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-[#1E9C34] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-[2px]">
                Established 2023 · Hargeisa
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h3 className="text-xs font-condensed font-bold tracking-widest uppercase text-[#FEDE02]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D7E2EE]">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('clients')}
                  className="hover:text-white transition-colors text-left"
                >
                  Clients
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hargeisa Office & Contact Information */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <h3 className="text-xs font-condensed font-bold tracking-widest uppercase text-[#FEDE02]">
              Hargeisa Operations
            </h3>
            <div className="space-y-2 text-sm text-[#D7E2EE]">
              <p>
                <strong className="text-white block font-semibold">Office Address:</strong>
                {COMPANY_INFO.office}
              </p>
              <p className="pt-1">
                <strong className="text-white block font-semibold">Direct Email:</strong>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-white hover:underline underline-offset-2 break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
              <div className="pt-1">
                <strong className="text-white block font-semibold mb-1">Dispatch Phone Lines:</strong>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  {COMPANY_INFO.fourMainPhones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="hover:text-white transition-colors py-0.5"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E2EE]/80">
          <p>© 2026 Maandeeq Global Transportation Ltd.</p>
          <p className="text-right">
            Somaliland & Somalia 3PL Operations · Institutional Logistics
          </p>
        </div>
      </div>
    </footer>
  );
};
