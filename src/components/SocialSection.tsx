import React from 'react';
import { InstagramIcon, TikTokIcon, LinkedInIcon } from './SocialIcons';
import { ArrowUpRight } from 'lucide-react';

export function SocialSection() {
  const socials = [
    {
      name: 'Instagram',
      handle: '@bilal_awan_112',
      description: 'Follow my journey, ECOM insights, business strategies, and practical lessons.',
      url: 'https://www.instagram.com/bilal_awan_112',
      icon: InstagramIcon,
      accentColor: 'hover:border-pink-500/40 group-hover:text-pink-400',
      iconBg: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
    },
    {
      name: 'TikTok',
      handle: '@bilalawan_112',
      description: 'Short-form ECOM and business content.',
      url: 'https://www.tiktok.com/@bilalawan_112',
      icon: TikTokIcon,
      accentColor: 'hover:border-cyan-500/40 group-hover:text-cyan-400',
      iconBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    },
    {
      name: 'LinkedIn',
      handle: 'Bilal Awan',
      description: 'Connect with me professionally and follow my business insights.',
      url: 'https://www.linkedin.com/in/muhammad-bilal-4450b639a',
      icon: LinkedInIcon,
      accentColor: 'hover:border-blue-500/40 group-hover:text-blue-400',
      iconBg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    },
  ];

  return (
    <section className="w-full space-y-4 pt-4 pb-6">
      {/* Section Header */}
      <div className="flex items-center justify-between px-1">
        <div>
          <h2 className="text-sm font-semibold tracking-wider text-blue-400 uppercase">
            Connect With Me
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Follow along on social channels & platforms
          </p>
        </div>
        <span className="text-xs text-slate-400 tabular-nums">02 / 02</span>
      </div>

      {/* Social Cards */}
      <div className="space-y-3">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#0a0f1e] to-[#060a14] border border-slate-800/90 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.15)] hover:-translate-y-0.5 active:scale-[0.99]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-105 ${social.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white text-base tracking-tight group-hover:text-blue-200 transition-colors">
                        {social.name}
                      </h3>
                      <span className="text-xs text-slate-400 font-mono">
                        {social.handle}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300/80 mt-1 leading-relaxed">
                      {social.description}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-300 group-hover:border-blue-500/40 shrink-0 transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
