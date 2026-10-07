/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, ViewMode } from './types';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ClientsPage } from './components/pages/ClientsPage';
import { ContactPage } from './components/pages/ContactPage';
import { ComponentSheet } from './components/design-system/ComponentSheet';
import { DesignRationaleNote } from './components/design-system/DesignRationaleNote';
import { FigmaCanvasViewer } from './components/design-system/FigmaCanvasViewer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [viewMode, setViewMode] = useState<ViewMode>('live');
  const [activeAnchor, setActiveAnchor] = useState<string | undefined>(undefined);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [showSpecDrawer, setShowSpecDrawer] = useState(false);

  const handleNavigate = (page: PageId, targetOrService?: string) => {
    setCurrentPage(page);

    if (page === 'services' && targetOrService) {
      setActiveAnchor(targetOrService);
    } else if (page === 'contact' && targetOrService) {
      setPreselectedService(targetOrService);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#122033]">
      {/* Primary Clean Website Experience */}
      {viewMode === 'live' ? (
        <div className="flex-1 flex flex-col">
          {/* Main Clean Header */}
          <Header currentPage={currentPage} onNavigate={handleNavigate} />

          {/* Active Page View */}
          <main className="flex-1">
            {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
            {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={handleNavigate}
                activeAnchor={activeAnchor}
              />
            )}
            {currentPage === 'clients' && <ClientsPage onNavigate={handleNavigate} />}
            {currentPage === 'contact' && (
              <ContactPage
                onNavigate={handleNavigate}
                preselectedService={preselectedService}
              />
            )}
          </main>

          {/* Clean Deep-Blue Footer */}
          <Footer onNavigate={handleNavigate} />
        </div>
      ) : (
        /* Fullscreen Design System & Spec Inspection Mode */
        <div className="flex-1 flex flex-col bg-[#0f172a] text-white">
          <div className="bg-[#1e293b] border-b border-slate-700 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-[#FEDE02] rounded-[2px]" />
              <span className="font-bold text-sm">MGT Design Specifications & Review</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-[3px]">
                <button
                  onClick={() => setViewMode('figma-frames')}
                  className={`px-3 py-1 text-xs font-bold rounded-[2px] ${
                    viewMode === 'figma-frames' ? 'bg-[#1776E9] text-white' : 'text-slate-300'
                  }`}
                >
                  Figma Frames (1440 · 390px)
                </button>
                <button
                  onClick={() => setViewMode('components')}
                  className={`px-3 py-1 text-xs font-bold rounded-[2px] ${
                    viewMode === 'components' ? 'bg-[#1776E9] text-white' : 'text-slate-300'
                  }`}
                >
                  Component Sheet
                </button>
                <button
                  onClick={() => setViewMode('rationale')}
                  className={`px-3 py-1 text-xs font-bold rounded-[2px] ${
                    viewMode === 'rationale' ? 'bg-[#1776E9] text-white' : 'text-slate-300'
                  }`}
                >
                  Design Note
                </button>
              </div>
              <button
                onClick={() => setViewMode('live')}
                className="px-3.5 py-1.5 bg-white text-[#122033] hover:bg-slate-200 text-xs font-bold rounded-[2px]"
              >
                ← Back to Live Site
              </button>
            </div>
          </div>

          <div className="flex-1">
            {viewMode === 'figma-frames' && <FigmaCanvasViewer />}
            {viewMode === 'components' && (
              <div className="bg-[#F3F7FB] py-10 min-h-screen text-[#122033]">
                <ComponentSheet />
              </div>
            )}
            {viewMode === 'rationale' && (
              <div className="bg-[#F3F7FB] py-10 min-h-screen text-[#122033]">
                <DesignRationaleNote />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Discreet Design Spec Switcher (Bottom Right) */}
      {viewMode === 'live' && (
        <aside aria-label="Developer & Designer Tools" className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setShowSpecDrawer(!showSpecDrawer)}
            className="px-3.5 py-2 bg-[#122033]/90 hover:bg-[#122033] text-white border border-slate-700 backdrop-blur-sm rounded-full text-xs font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
            title="Inspect developer specifications, component sheet, and Figma frames"
          >
            <span className="w-2 h-2 rounded-full bg-[#1E9C34] group-hover:scale-110 transition-transform" />
            <span>Design Specs & Frames</span>
          </button>

          {showSpecDrawer && (
            <div className="absolute bottom-12 right-0 w-64 bg-[#122033] text-white border border-slate-700 p-3 rounded-[4px] shadow-2xl space-y-2 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                <span className="font-bold text-[#FEDE02]">Developer Inspection</span>
                <button
                  onClick={() => setShowSpecDrawer(false)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    setViewMode('figma-frames');
                    setShowSpecDrawer(false);
                  }}
                  className="w-full text-left p-2 rounded-[2px] hover:bg-[#1776E9] transition-colors"
                >
                  📐 Figma Frames (1440px / 390px)
                </button>
                <button
                  onClick={() => {
                    setViewMode('components');
                    setShowSpecDrawer(false);
                  }}
                  className="w-full text-left p-2 rounded-[2px] hover:bg-[#1776E9] transition-colors"
                >
                  🎨 1-Page Component Sheet
                </button>
                <button
                  onClick={() => {
                    setViewMode('rationale');
                    setShowSpecDrawer(false);
                  }}
                  className="w-full text-left p-2 rounded-[2px] hover:bg-[#1776E9] transition-colors"
                >
                  📝 Visual Rationale Note
                </button>
              </div>
            </div>
          )}
        </aside>
      )}
    </div>
  );
}
