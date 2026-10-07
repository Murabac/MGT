import React, { useState } from 'react';
import { PageId } from '../../types';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ServicesPage } from '../pages/ServicesPage';
import { ClientsPage } from '../pages/ClientsPage';
import { ContactPage } from '../pages/ContactPage';

type FrameId =
  | 'home-desktop'
  | 'home-mobile'
  | 'about-desktop'
  | 'about-mobile'
  | 'services-desktop'
  | 'services-mobile'
  | 'clients-desktop'
  | 'clients-mobile'
  | 'contact-desktop'
  | 'contact-mobile'
  | 'contact-states'
  | 'mobile-menu-open';

export const FigmaCanvasViewer: React.FC = () => {
  const [selectedFrame, setSelectedFrame] = useState<FrameId>('home-desktop');
  const [zoomScale, setZoomScale] = useState<number>(0.75);
  const [contactStateInspect, setContactStateInspect] = useState<'empty' | 'error' | 'success'>('empty');

  const frames: { id: FrameId; name: string; viewport: '1440px' | '390px'; page: PageId; note?: string }[] = [
    { id: 'home-desktop', name: 'Home / Desktop', viewport: '1440px', page: 'home' },
    { id: 'home-mobile', name: 'Home / Mobile', viewport: '390px', page: 'home' },
    { id: 'about-desktop', name: 'About / Desktop', viewport: '1440px', page: 'about' },
    { id: 'about-mobile', name: 'About / Mobile', viewport: '390px', page: 'about' },
    { id: 'services-desktop', name: 'Services / Desktop', viewport: '1440px', page: 'services' },
    { id: 'services-mobile', name: 'Services / Mobile', viewport: '390px', page: 'services' },
    { id: 'clients-desktop', name: 'Clients / Desktop', viewport: '1440px', page: 'clients' },
    { id: 'clients-mobile', name: 'Clients / Mobile', viewport: '390px', page: 'clients' },
    { id: 'contact-desktop', name: 'Contact / Desktop', viewport: '1440px', page: 'contact' },
    { id: 'contact-mobile', name: 'Contact / Mobile', viewport: '390px', page: 'contact' },
    { id: 'contact-states', name: 'Contact / States (Empty · Error · Success)', viewport: '1440px', page: 'contact' },
    { id: 'mobile-menu-open', name: 'Mobile Menu / Open State', viewport: '390px', page: 'home', note: 'Drawer Expanded' },
  ];

  const currentFrameObj = frames.find((f) => f.id === selectedFrame) || frames[0];
  const isMobile = currentFrameObj.viewport === '390px';

  return (
    <div className="w-full bg-[#1e293b] text-white min-h-[calc(100vh-120px)] flex flex-col">
      {/* Top Figma Inspection Toolbar */}
      <div className="bg-[#0f172a] border-b border-slate-700 px-4 py-3 flex flex-wrap items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#1776E9] rounded-[2px]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              FIGMA CANVAS SPECIFICATION
            </span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-xs text-[#FEDE02] font-mono font-bold">
            Frame: {currentFrameObj.name}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            ({currentFrameObj.viewport})
          </span>
        </div>

        {/* Zoom and Scale Controls */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Zoom:</span>
          {[0.5, 0.65, 0.75, 1.0].map((scale) => (
            <button
              key={scale}
              onClick={() => setZoomScale(scale)}
              className={`px-2.5 py-1 text-xs font-mono rounded-[2px] transition-colors ${
                zoomScale === scale
                  ? 'bg-[#1776E9] text-white font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {Math.round(scale * 100)}%
            </button>
          ))}
        </div>
      </div>

      {/* Frame Selection Tabs */}
      <div className="bg-[#1e293b] border-b border-slate-700 px-4 py-2 flex items-center gap-1.5 overflow-x-auto text-xs shrink-0">
        {frames.map((frame) => {
          const isSelected = selectedFrame === frame.id;
          return (
            <button
              key={frame.id}
              onClick={() => setSelectedFrame(frame.id)}
              className={`px-3 py-1.5 font-medium rounded-[2px] whitespace-nowrap transition-colors flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#0B4CAD] text-white font-bold shadow-sm border border-[#1776E9]'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-transparent'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  frame.viewport === '1440px' ? 'bg-[#1776E9]' : 'bg-[#1E9C34]'
                }`}
              />
              <span>{frame.name}</span>
            </button>
          );
        })}
      </div>

      {/* Contextual Sub-bar for Contact States */}
      {selectedFrame === 'contact-states' && (
        <div className="bg-slate-900 border-b border-slate-800 px-6 py-2 flex items-center gap-4 text-xs">
          <span className="text-slate-400 font-mono">Simulate State:</span>
          <div className="flex items-center gap-2">
            {(['empty', 'error', 'success'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setContactStateInspect(st)}
                className={`px-3 py-1 rounded-[2px] font-bold uppercase text-[11px] transition-colors ${
                  contactStateInspect === st
                    ? st === 'error'
                      ? 'bg-rose-600 text-white'
                      : st === 'success'
                      ? 'bg-[#1E9C34] text-white'
                      : 'bg-[#1776E9] text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {st} State
              </button>
            ))}
          </div>
          <span className="text-slate-500 text-[11px]">
            {contactStateInspect === 'empty' && 'Default pristine blank form inputs'}
            {contactStateInspect === 'error' && 'Validation message triggered for missing required fields'}
            {contactStateInspect === 'success' && 'Enquiry generated and mail client instructions displayed'}
          </span>
        </div>
      )}

      {/* Main Canvas Workspace with Grid Pattern & Frame */}
      <div className="flex-1 overflow-auto p-8 flex items-start justify-center bg-[#090d16] bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
        <div
          className="transition-transform duration-200 origin-top flex flex-col items-center"
          style={{ transform: `scale(${zoomScale})` }}
        >
          {/* Frame Label & Measurement Badge */}
          <div className="mb-3 flex items-center justify-between w-full px-2 text-xs font-mono text-slate-400">
            <span className="text-[#FEDE02] font-bold">
              FRAME // {currentFrameObj.name.toUpperCase()}
            </span>
            <span>
              DIMENSIONS: {currentFrameObj.viewport} × AUTO
            </span>
          </div>

          {/* Rendered Frame Surface */}
          <div
            className={`bg-white text-[#122033] shadow-2xl border-4 border-slate-700 rounded-[4px] overflow-hidden ${
              isMobile ? 'w-[390px] min-h-[844px]' : 'w-[1440px] min-h-[900px]'
            }`}
          >
            {/* Header for Frame */}
            <Header
              currentPage={currentFrameObj.page}
              onNavigate={() => {}}
              isMobileMenuOpenOverride={selectedFrame === 'mobile-menu-open'}
            />

            {/* Page Content for Frame */}
            <main>
              {currentFrameObj.page === 'home' && (
                <HomePage onNavigate={() => {}} />
              )}
              {currentFrameObj.page === 'about' && (
                <AboutPage onNavigate={() => {}} />
              )}
              {currentFrameObj.page === 'services' && (
                <ServicesPage onNavigate={() => {}} />
              )}
              {currentFrameObj.page === 'clients' && (
                <ClientsPage onNavigate={() => {}} />
              )}
              {currentFrameObj.page === 'contact' && (
                <ContactPage
                  onNavigate={() => {}}
                  forcedState={
                    selectedFrame === 'contact-states'
                      ? contactStateInspect
                      : undefined
                  }
                />
              )}
            </main>

            {/* Footer for Frame */}
            <Footer onNavigate={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};
