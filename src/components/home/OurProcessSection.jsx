import React from 'react';
import { Lightbulb, Ruler, CheckCircle, Hammer, Search, Truck, Sparkles } from 'lucide-react';

export default function OurProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Share Your Idea",
      desc: "Send your concept sketch, reference photo, or preferred model style via our form or WhatsApp.",
      icon: Lightbulb
    },
    {
      num: "02",
      title: "Choose Dimensions & Design",
      desc: "Select scale, number of tiers, architectural fluting, and lighting preferences with our guidance.",
      icon: Ruler
    },
    {
      num: "03",
      title: "Confirm Specifications & Price",
      desc: "Finalize material selection, exact timeline, pricing, and dispatch schedule before craft begins.",
      icon: CheckCircle
    },
    {
      num: "04",
      title: "Crafting & Detailing",
      desc: "Master Craftsman Samsher Alam executes surgical thermocol carving, jali fretwork, and gold leafing.",
      icon: Hammer
    },
    {
      num: "05",
      title: "Quality Inspection",
      desc: "Rigorous optical tests, structural balance review, and high-definition video previews sent to you.",
      icon: Search
    },
    {
      num: "06",
      title: "Packaging & Dispatch",
      desc: "Shock-absorbing foam cradle insertion, heavy wooden crating, and tracked Pan-India logistics.",
      icon: Truck
    }
  ];

  return (
    <section className="pt-8 sm:pt-10 pb-8 sm:pb-10 bg-[#FAF7F2] text-charcoal-900 relative overflow-hidden border-b border-subtle">
      {/* Subtle ambient warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold-500/[0.03] rounded-full blur-[170px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-200/80 border border-gold-500/30 text-charcoal-800 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Simple 6-Step Workflow</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-charcoal-900">
            Our <span className="font-cormorant italic font-normal text-gold-600">Process</span>
          </h2>

          <p className="text-xs sm:text-sm text-charcoal-600 font-sans max-w-xl mx-auto leading-relaxed">
            Transparent, artisan-led commissioning from your first sketch to safe arrival at your doorstep.
          </p>
        </div>

        {/* 6 Step Grid */}
        <div className="mt-7 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="px-5 sm:px-6 py-4.5 sm:py-5 rounded-2xl border border-gold-500/25 bg-[#181B22] hover:border-gold-400/80 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between group shadow-md"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-bold text-gold-400 group-hover:text-gold-300 transition-colors">
                      {st.num}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 group-hover:scale-105 group-hover:bg-gold-500/25 transition-all">
                      <Icon className="w-4.5 h-4.5 text-gold-300" />
                    </div>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-gold-200 transition-colors leading-snug">
                    {st.title}
                  </h3>

                  <p className="text-xs text-sand-200/85 leading-relaxed font-sans">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-sand-400/70">
                  <span>Stage {st.num} of 06</span>
                  <span className="text-gold-400/90 text-[10px] uppercase tracking-wider font-semibold group-hover:text-gold-300 transition-colors">
                    Artisan Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
