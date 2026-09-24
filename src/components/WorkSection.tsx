import React from 'react';
import { Compass, ShoppingBag, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function WorkSection() {
  const cards = [
    {
      id: 'business-consultation',
      title: 'Business Consultation',
      badge: '1-on-1 Private Session',
      description:
        'Get a focused strategy session to identify your biggest business opportunities, challenges, and next steps.',
      buttonText: 'Book a Consultation',
      url: 'https://calendly.com/bilalashrafawan1494/business-strategist-with-bilal-awan',
      icon: Compass,
      highlights: [
        'Strategic opportunity & bottleneck mapping',
        'Custom execution roadmap tailored to your model',
        'Direct Q&A with actionable next steps',
      ],
      popular: false,
    },
    {
      id: 'ecom-service-consultation',
      title: 'ECOM Service Consultation',
      badge: 'Scaling & Growth Focus',
      description:
        'Want to build or scale an ECOM business? Explore how we can help with your ECOM growth strategy, store, marketing, and scaling.',
      buttonText: 'Discuss Your ECOM Business',
      url: 'https://calendly.com/bilalashrafawan1494/business-strategist-with-bilal-awan',
      icon: ShoppingBag,
      highlights: [
        'Store conversion optimization & architecture',
        'Paid media & organic social growth strategy',
        'Scaling frameworks to unlock repeatable revenue',
      ],
      popular: true,
    },
  ];

  return (
    <section className="w-full space-y-4 pt-2 pb-6">
      {/* Section Header */}
      <div className="flex items-center justify-between px-1">
        <div>
          <h2 className="text-sm font-semibold tracking-wider text-blue-400 uppercase">
            Work With Bilal
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Tailored advisory & growth partnerships
          </p>
        </div>
        <span className="text-xs text-slate-400 tabular-nums">01 / 02</span>
      </div>

      {/* Cards List */}
      <div className="space-y-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className={`group relative rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#0b1224] to-[#070b16] border transition-all duration-300 ${
                card.popular
                  ? 'border-blue-500/35 hover:border-blue-400 shadow-[0_0_25px_rgba(37,99,235,0.12)]'
                  : 'border-slate-800 hover:border-blue-500/40'
              } hover:shadow-[0_0_35px_rgba(37,99,235,0.22)] hover:-translate-y-0.5`}
            >
              {/* Subtle electric ambient glow top-right */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/15 transition-all" />

              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 mb-3.5 relative">
                <div className="w-11 h-11 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 group-hover:border-blue-400 transition-all shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-medium text-blue-300/80 tracking-wide">
                    {card.badge}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="relative mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-100 transition-colors tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mt-2">
                  {card.description}
                </p>
              </div>

              {/* Strategic Deliverables List */}
              <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-800/80">
                {card.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] ${
                  card.popular
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40'
                    : 'bg-slate-900 hover:bg-blue-600/20 text-slate-100 hover:text-white border border-slate-800 hover:border-blue-500/50'
                }`}
              >
                <span>{card.buttonText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
