import React from 'react';
import { Share2, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onShare: () => void;
  onOpenContact: () => void;
}

export function Header({ onShare, onOpenContact }: HeaderProps) {
  return (
    <header className="w-full max-w-xl mx-auto px-4 py-4 flex items-center justify-between text-xs sm:text-sm">
      {/* Zone 1: Brand Wordmark */}
      <a
        href="#"
        className="flex items-center gap-2.5 group transition-opacity hover:opacity-90"
      >
        <div className="w-8 h-8 rounded-lg bg-black border border-amber-500/30 flex items-center justify-center p-0.5 shadow-[0_0_12px_rgba(212,175,55,0.25)] group-hover:border-amber-400 transition-colors overflow-hidden">
          <img
            src="/ecom_accelerator_logo.jpg?v=2"
            alt="ECOM Accelerator"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold tracking-wider text-white text-xs uppercase leading-tight">
            ECOM Accelerator
          </span>
          <span className="text-[9px] tracking-widest text-amber-400/90 font-mono leading-none">
            BUILD · SCALE · GROW
          </span>
        </div>
      </a>

      {/* Zone 3: Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={onShare}
          aria-label="Share profile"
          className="h-9 px-3 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 transition-all text-xs active:scale-95"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">Share</span>
        </button>

        <button
          onClick={onOpenContact}
          className="h-9 px-3.5 rounded-full bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 hover:text-blue-100 flex items-center gap-1.5 transition-all text-xs font-medium active:scale-95 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
        >
          <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
          <span>Inquire</span>
        </button>
      </div>
    </header>
  );
}
