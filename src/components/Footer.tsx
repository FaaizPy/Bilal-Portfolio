import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const [logoError, setLogoError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-8 pb-14 border-t border-slate-900 text-center relative">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* ECOM Accelerator Logo Brand Lockup */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-2xl bg-black border border-amber-500/30 p-1 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)] overflow-hidden">
            {!logoError ? (
              <img
                src="/ecom_accelerator_logo.jpg?v=2"
                alt="ECOM Accelerator Logo"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-amber-400 font-black text-sm">EA</span>
            )}
          </div>

          <div className="text-center">
            <span className="block text-sm font-black tracking-wider text-white uppercase font-sans">
              ECOM Accelerator
            </span>
            <span className="block text-[10px] tracking-widest text-amber-400/90 font-mono font-medium">
              BUILD · SCALE · GROW
            </span>
          </div>
        </div>

        {/* Quiet Statement */}
        <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
          Strategic e-commerce advisory and business consulting for modern brand founders.
        </p>

        {/* Copyright & Scroll to Top */}
        <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-2">
          <span>© 2026 Bilal Awan</span>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-1 text-slate-400 hover:text-blue-400 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
