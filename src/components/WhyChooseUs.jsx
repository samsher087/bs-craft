import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Flame, 
  Crown, 
  PackageCheck, 
  MapPin, 
  MessageCircle, 
  Heart,
  Award
} from 'lucide-react';
import { whyChoosePillars } from '../data/process';

export default function WhyChooseUs() {
  const iconMap = {
    Sparkles: Sparkles,
    Layers: Layers,
    Flame: Flame,
    Crown: Crown,
    PackageCheck: PackageCheck,
    MapPin: MapPin,
    MessageCircle: MessageCircle,
    Heart: Heart
  };

  return (
    <section className="relative py-24 sm:py-28 bg-deep-black overflow-hidden border-t border-gold-500/15">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-royal-emerald/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-900 border border-gold-400/35 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span>Our Distinctions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-warm-white tracking-tight">
            Why Choose <span className="text-gold-gradient italic font-cormorant">Being Samsher Crafting?</span>
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-2" />

          <p className="text-warm-white/80 text-sm sm:text-base leading-relaxed font-sans">
            Every creation is born from surgical attention to detail, traditional architectural knowledge, and genuine artistic devotion.
          </p>
        </div>

        {/* 8 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoosePillars.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-charcoal-900/80 hover:bg-emerald-950/60 border border-gold-500/20 hover:border-gold-400/50 shadow-lg hover:shadow-gold-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-charcoal-850 group-hover:bg-royal-emerald/30 border border-gold-400/30 flex items-center justify-center text-gold-300 group-hover:text-gold-200 transition-colors shadow-inner">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-warm-white group-hover:text-gold-200 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-warm-white/70 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-charcoal-800 flex items-center justify-between text-[11px] text-gold-400/80 font-mono">
                  <span>Pillar {idx + 1}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">Authentic</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
