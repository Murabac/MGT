import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'circle-on-blue' | 'mark-on-light' | 'horizontal-on-light' | 'horizontal-on-blue' | 'stacked-on-blue';
}

/**
 * Pure SVG vector mark representing the official MGT Group emblem:
 * - Green dynamic swoosh (#1E9C34)
 * - 'M' & 'g' in vibrant blue (#1776E9)
 * - 'T' in green (#1E9C34)
 * - 'GROUP' in blue (#1776E9)
 */
export const MgtMark: React.FC<{
  size?: number;
  onDark?: boolean;
  withDisc?: boolean;
  className?: string;
}> = ({ size = 48, onDark = false, withDisc = false, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="MGT Group Circular Mark"
    >
      {/* Optional solid white circular disc */}
      {withDisc && <circle cx="50" cy="50" r="48" fill="#FFFFFF" />}

      {/* Dynamic green swoosh */}
      <path
        d="M22 28 C16 38 12 55 24 64 C35 72 65 72 73 66 C65 68 38 67 27 59 C18 51 22 36 29 27 C34 21 44 23 44 23 C38 22 27 22 22 28 Z"
        fill="#1E9C34"
      />
      <path
        d="M21 27 C15 37 13 54 27 65 C39 74 68 71 74 65 C64 68 37 67 28 59 C20 50 20 37 27 29 C24 30 22 28 21 27 Z"
        fill="#1E9C34"
      />

      {/* M - Vibrant Blue #1776E9 */}
      <path
        d="M28 32 L34 32 L38 49 L42 32 L48 32 L48 57 L43 57 L43 41 L39.5 57 L36 57 L32.5 41 L32.5 57 L28 57 Z"
        fill="#1776E9"
      />

      {/* g - Vibrant Blue #1776E9 */}
      <path
        d="M50 40 L54 40 L54 43.5 C55.2 41 57.5 39.5 60.5 39.5 C65.5 39.5 68 43 68 48.5 C68 54 65.5 57.5 60.5 57.5 C58 57.5 55.5 56 54.5 53.5 L54.5 61 C54.5 64 53 65.5 49 65.5 L48 65.5 L48 62 L49.5 62 C51.5 62 52 61.2 52 59.5 L52 40 L50 40 Z M63.2 48.5 C63.2 44.8 61.8 42.8 59 42.8 C56.2 42.8 54.8 44.8 54.8 48.5 C54.8 52.2 56.2 54.2 59 54.2 C61.8 54.2 63.2 52.2 63.2 48.5 Z"
        fill="#1776E9"
      />

      {/* T - Green #1E9C34 */}
      <path
        d="M68 37 L82 37 L82 42 L77.5 42 L77.5 57 L72.5 57 L72.5 42 L68 42 Z"
        fill="#1E9C34"
      />

      {/* GROUP - Vibrant Blue #1776E9 */}
      <text
        x="50"
        y="77"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="12.5"
        letterSpacing="2.5"
        fill="#1776E9"
      >
        GROUP
      </text>
    </svg>
  );
};

/**
 * Horizontal lockup for white header:
 * Meets brand rules:
 * - Mark on the left (on-light)
 * - MAANDEEQ prominently displayed with high-contrast backing or ink/deep-blue framing so it never disappears on white
 * - GLOBAL TRANSPORTATION LTD. crisp subtitle in deep blue/ink
 */
export const MgtHorizontalOnLight: React.FC<{ className?: string; height?: number }> = ({
  className = '',
  height = 44,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Mark on light */}
      <MgtMark size={height} withDisc={false} />

      {/* Wordmark lockup */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span className="text-[#122033] font-black text-xl tracking-wider leading-none font-sans">
            MAANDEEQ
          </span>
          <span className="bg-[#FEDE02] text-[#122033] text-[9px] font-extrabold uppercase px-1 py-0.5 rounded-[2px] leading-none tracking-wider">
            MGT
          </span>
        </div>
        <span className="text-[#0B4CAD] text-[10px] font-bold tracking-[0.14em] uppercase leading-tight mt-0.5">
          GLOBAL TRANSPORTATION LTD.
        </span>
      </div>
    </div>
  );
};

/**
 * Horizontal lockup for blue backgrounds (e.g. Deep Blue #0B4CAD Footer):
 * - Circular mark with white disc
 * - MAANDEEQ in yellow (#FEDE02)
 * - GLOBAL TRANSPORTATION LTD. in white (#FFFFFF)
 */
export const MgtHorizontalOnBlue: React.FC<{ className?: string; height?: number }> = ({
  className = '',
  height = 46,
}) => {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Mark on blue with white disc */}
      <MgtMark size={height} withDisc={true} />

      {/* Wordmark on blue */}
      <div className="flex flex-col justify-center">
        <span className="text-[#FEDE02] font-black text-2xl tracking-wider leading-none font-sans">
          MAANDEEQ
        </span>
        <span className="text-white text-[10px] font-bold tracking-[0.16em] uppercase leading-tight mt-1 opacity-95">
          GLOBAL TRANSPORTATION LTD.
        </span>
      </div>
    </div>
  );
};

/**
 * Stacked logo on blue (for centered institutional placements or cards on deep blue):
 */
export const MgtStackedOnBlue: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <MgtMark size={68} withDisc={true} />
      <span className="text-[#FEDE02] font-black text-2xl tracking-widest leading-none font-sans mt-3">
        MAANDEEQ
      </span>
      <span className="text-white text-[10.5px] font-bold tracking-[0.18em] uppercase leading-tight mt-1 opacity-90">
        GLOBAL TRANSPORTATION LTD.
      </span>
    </div>
  );
};

/**
 * Top 8px Brand Stripe:
 * - A short green segment (#1E9C34), then blue (#1776E9) for the rest of the width.
 */
export const BrandTopStripe: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-[8px] flex shrink-0 ${className}`} aria-hidden="true">
      <div className="w-16 md:w-24 h-full bg-[#1E9C34]" />
      <div className="flex-1 h-full bg-[#1776E9]" />
    </div>
  );
};

/**
 * The brand move from their profile book:
 * A green bar that cuts into a blue title bar.
 */
export const BrandBarCutIn: React.FC<{ title: string; subtitle?: string; className?: string }> = ({
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`relative flex items-stretch ${className}`}>
      {/* Green cut-in bar */}
      <div className="w-3 bg-[#1E9C34] shrink-0" aria-hidden="true" />
      {/* Deep blue title block */}
      <div className="bg-[#0B4CAD] text-white px-5 py-3 flex-1 flex flex-col justify-center">
        <span className="text-xs font-condensed font-bold uppercase tracking-widest text-[#FEDE02]">
          {subtitle || 'MGT Group'}
        </span>
        <h2 className="text-lg md:text-xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
};
