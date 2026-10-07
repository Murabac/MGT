import React, { useState } from 'react';
import { PageId } from '../../types';
import { MgtMark, MgtHorizontalOnLight, BrandTopStripe } from '../brand/MgtLogo';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  isMobileMenuOpenOverride?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  isMobileMenuOpenOverride,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMenuOpen = isMobileMenuOpenOverride !== undefined ? isMobileMenuOpenOverride : mobileMenuOpen;

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'clients', label: 'Clients' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="w-full bg-[#FFFFFF] border-b border-[#D7E2EE] sticky top-0 z-40">
      {/* 8px top brand stripe: green segment + blue width */}
      <BrandTopStripe />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-4">
        {/* Zone 1: Brand Logo */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus-visible:outline-2 focus-visible:outline-[#1776E9] p-1"
            aria-label="MGT Group - Return to Home"
          >
            {/* Desktop / tablet: Full horizontal lockup */}
            <div className="hidden sm:block">
              <MgtHorizontalOnLight height={40} />
            </div>
            {/* Mobile (390px): Circular mark alone so wordmark is not crushed */}
            <div className="sm:hidden flex items-center gap-2.5">
              <MgtMark size={38} withDisc={false} />
              <div className="flex flex-col">
                <span className="text-[#122033] font-black text-lg tracking-wider leading-none font-sans">
                  MGT GROUP
                </span>
                <span className="text-[#0B4CAD] text-[9px] font-bold tracking-wider uppercase leading-none mt-0.5">
                  HARGEISA
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-semibold tracking-wide transition-colors relative py-1 focus-visible:outline-2 focus-visible:outline-[#1776E9] ${
                  isActive
                    ? 'text-[#1776E9]'
                    : 'text-[#122033] hover:text-[#1776E9]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1776E9]"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Quick Call Link on Desktop */}
          <a
            href="tel:0634848748"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#122033] hover:text-[#1776E9] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#1E9C34]" />
            <span className="font-mono">063 484 8748</span>
          </a>

          {/* Main button: Blue #1776E9, square/radius under 4px, white text */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#1776E9] hover:bg-[#0B4CAD] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#1776E9] shadow-xs"
          >
            Request service
          </button>

          {/* Mobile menu button: Toggle between 'Menu' and 'Close' */}
          <button
            onClick={() => setMobileMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center min-w-[70px] h-[40px] px-3.5 border border-[#D7E2EE] bg-[#F3F7FB] text-[#122033] text-xs font-bold uppercase tracking-wider rounded-[3px] hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-[#1776E9]"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (When Open) */}
      {isMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden w-full bg-[#FFFFFF] border-b border-[#D7E2EE] px-4 py-4 shadow-sm"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center justify-between py-3 px-3 rounded-[3px] text-sm font-semibold tracking-wide text-left ${
                currentPage === 'home'
                  ? 'bg-[#F3F7FB] text-[#1776E9] font-bold'
                  : 'text-[#122033] hover:bg-[#F3F7FB]'
              }`}
            >
              <span>Home</span>
              {currentPage === 'home' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#1776E9]" />
              )}
            </button>
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between py-3 px-3 rounded-[3px] text-sm font-semibold tracking-wide text-left ${
                    isActive
                      ? 'bg-[#F3F7FB] text-[#1776E9] font-bold'
                      : 'text-[#122033] hover:bg-[#F3F7FB]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1776E9]" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-3 border-t border-[#D7E2EE] flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 bg-[#1776E9] hover:bg-[#0B4CAD] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] text-center"
            >
              Request service
            </button>
            <div className="text-center pt-2">
              <span className="text-[11px] text-[#526178]">
                Hargeisa Office · 150 Street, Kodbuur District
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
