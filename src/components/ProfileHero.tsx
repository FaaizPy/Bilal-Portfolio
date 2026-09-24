import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BadgeCheck, Calendar, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface ProfileHeroProps {
  onOpenContact: () => void;
  onToast?: (message: string) => void;
}

export function ProfileHero({ onOpenContact }: ProfileHeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('bilal_profile_avatar');
      if (saved) {
        setCustomAvatar(saved);
      }
    } catch {
      // localStorage may be disabled
    }
  }, []);

  const avatarSrc = customAvatar || '/bilal_portrait.jpg?v=3';

  return (
    <div className="w-full flex flex-col items-center text-center pt-3 pb-8 px-4">
      {/* Profile Image with Electric Halo */}
      <div className="relative mb-5 group">
        {/* Soft Ambient Electric Blue Backlight */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-blue-600/40 via-cyan-500/20 to-blue-500/40 blur-lg opacity-70 group-hover:opacity-100 transition duration-700 animate-subtle-pulse" />

        {/* Outer Circular Ring */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-b from-blue-500/60 via-slate-800 to-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.35)]">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0f1d] relative">
            {!imageError ? (
              <img
                src={avatarSrc}
                alt="Bilal Awan — ECOM Strategist & Business Consultant"
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-blue-950 text-blue-200">
                <span className="text-2xl font-bold">BA</span>
              </div>
            )}
            
            {/* Subtle gloss overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10 pointer-events-none" />
          </div>
        </div>

        {/* Status indicator on avatar: Available for Consultations */}
        <div 
          title="Available for consultations"
          className="absolute bottom-1 right-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-[#05070B] p-0.5 border border-blue-500/40 shadow-md"
        >
          <span className="w-full h-full rounded-full bg-blue-500 flex items-center justify-center animate-pulse">
            <span className="w-2 h-2 rounded-full bg-white shadow-sm" />
          </span>
        </div>
      </div>

      {/* Name & Verified Badge */}
      <div className="flex items-center justify-center gap-2 mb-1.5">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Bilal Awan
        </h1>
        <BadgeCheck
          className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 fill-blue-500/20 shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          aria-label="Verified consultant"
        />
      </div>

      {/* Title */}
      <p className="text-sm sm:text-base font-medium text-blue-400/90 tracking-wide mb-2">
        ECOM Strategist & Business Consultant
      </p>

      {/* Brand affiliation with official logo */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0f1e] border border-amber-500/25 shadow-[0_0_15px_rgba(212,175,55,0.08)] mb-4">
        <img
          src="/ecom_accelerator_logo.jpg?v=2"
          alt="ECOM Accelerator"
          className="w-4 h-4 rounded-sm object-contain"
        />
        <span className="text-xs text-slate-200 font-semibold">Founder, ECOM Accelerator</span>
        <span aria-hidden="true" className="w-1 h-1 rounded-full bg-amber-400" />
        <span className="text-[10px] text-amber-400 font-mono tracking-wider font-medium">BUILD · SCALE · GROW</span>
      </div>

      {/* Bio */}
      <p className="text-sm sm:text-[15px] leading-relaxed text-slate-300/90 max-w-md mx-auto text-balance mb-6 font-normal">
        Helping entrepreneurs build ECOM brands, improve their business strategy, and grow through social media.
      </p>

      {/* Quick Action Buttons */}
      <div className="flex items-center justify-center gap-3 w-full max-w-sm">
        <a
          href="https://calendly.com/bilalashrafawan1494/business-strategist-with-bilal-awan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] active:scale-[0.98]"
        >
          <Calendar className="w-4 h-4 text-blue-200" />
          <span>Book Strategy Call</span>
          <ArrowRight className="w-3.5 h-3.5 opacity-80" />
        </a>

        <button
          onClick={onOpenContact}
          className="py-3 px-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/30 text-slate-200 hover:text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          <MessageSquare className="w-4 h-4 text-blue-400" />
          <span>Inquire</span>
        </button>
      </div>
    </div>
  );
}
