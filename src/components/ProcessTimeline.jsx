import React from 'react';
import { 
  Lightbulb, 
  Ruler, 
  CheckCircle, 
  Hammer, 
  Search, 
  Truck,
  Sparkles 
} from 'lucide-react';
import { processSteps } from '../data/process';

export default function ProcessTimeline() {
  const iconMap = {
    Lightbulb: Lightbulb,
    Ruler: Ruler,
    CheckCircle: CheckCircle,
    Hammer: Hammer,
    Search: Search,
    Truck: Truck
  };

  return (
    <section className="relative py-24 sm:py-28 bg-[#07130E] bg-jali-mesh overflow-hidden border-t border-gold-500/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-royal-emerald/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-900 border border-gold-400/35 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Master Craftsman Workflow</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-warm-white tracking-tight">
            Our Crafting <span className="text-gold-gradient italic font-cormorant">Process</span>
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-2" />

          <p className="text-warm-white/80 text-sm sm:text-base leading-relaxed font-sans">
            From initial sketch discussion to final crating and dispatch, every stage follows a disciplined artisan protocol.
          </p>
        </div>

        {/* 6 Step Interactive Horizontal / Grid Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {processSteps.map((stepItem, idx) => {
            const IconComponent = iconMap[stepItem.icon] || Sparkles;
            return (
              <div
                key={stepItem.step}
                className="relative rounded-2xl bg-charcoal-900/90 border border-gold-500/20 hover:border-gold-400/60 p-6 sm:p-7 shadow-xl hover:shadow-gold-sm transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Large Background Step Number */}
                <div className="absolute top-4 right-5 text-4xl sm:text-5xl font-cinzel font-black text-gold-500/10 group-hover:text-gold-400/20 transition-colors pointer-events-none">
                  {stepItem.step}
                </div>

                <div className="space-y-4">
                  {/* Step Badge & Icon */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-800 to-charcoal-900 border border-gold-400/40 flex items-center justify-center text-gold-300 group-hover:scale-105 transition-transform shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400">
                        Step {stepItem.step}
                      </span>
                      <h4 className="text-xs font-semibold text-warm-white/70">
                        {stepItem.short}
                      </h4>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-warm-white group-hover:text-gold-200 transition-colors">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-warm-white/75 leading-relaxed font-sans">
                    {stepItem.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal-800 flex items-center justify-between text-[11px] text-emerald-400 font-medium">
                  <span>Phase {idx + 1} of 6</span>
                  <span className="text-gold-400/80">Direct Consultation</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
