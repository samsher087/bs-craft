import React, { useState } from 'react';
import { Sparkles, Sun, Moon, Lightbulb, Compass, Crown, ShieldCheck, ArrowRight } from 'lucide-react';
import { gumbadHighlights } from '../data/products';

export default function GumbadSection({ onSelectProduct, onOpenCustomOrder }) {
  const [isIlluminated, setIsIlluminated] = useState(true);

  const gumbadCards = [
    {
      id: "gumbad-noor",
      title: "Grand Noor Gumbad",
      tag: "Master Silhouette",
      image: isIlluminated ? "/assets/images/grand_gumbad_night.jpg" : "/assets/images/grand_gumbad_day.jpg",
      dayImg: "/assets/images/grand_gumbad_day.jpg",
      nightImg: "/assets/images/grand_gumbad_night.jpg",
      desc: "32-fluted ribbed dome with traditional kalash pinnacle and 360-degree perimeter warm ambient illumination.",
      specs: "6 ft Height • 5 ft Base Diameter • Multi-Tier Arch Base"
    },
    {
      id: "gumbad-khazra",
      title: "Gumbad-e-Khazra Replica",
      tag: "Sacred Icon",
      image: "/assets/images/gumbad_e_khazra.jpg",
      desc: "Faithful green dome curvature with golden pinnacle, pillared veranda, and warm light glowing through arched lattice windows.",
      specs: "32 in Height • 24 in Base • Museum Finish Base"
    },
    {
      id: "ajmer-dargah",
      title: "Ajmer Dargah Sacred Gumbad",
      tag: "Heritage Craft",
      image: "/assets/images/ajmer_dargah_model.jpg",
      desc: "Bulbous dome profile with scalloped chhatris, filigree perforated screens, and 24k-styled gold leaf gilding.",
      specs: "36 in Height • 30 in Base • Gold Foil Detailing"
    }
  ];

  return (
    <section id="gumbad" className="relative py-28 bg-[#070D1F] overflow-hidden border-t border-gold-500/15">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Lighting Mode Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gold-500/15">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5 text-gold-400" />
              <span>Architectural Cupolas</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50 tracking-tight">
              Elegant <span className="text-gold-gradient italic font-cormorant">Gumbad Collection</span>
            </h2>

            <p className="text-ivory-200/80 text-sm sm:text-base max-w-xl font-sans">
              Iconic dome craftsmanship featuring mathematical curve ratios, golden pinnacle kalash, and internal luminous lighting channels.
            </p>
          </div>

          {/* Interactive Light Mode Control */}
          <div className="flex items-center gap-3 bg-navy-950/80 p-2 rounded-2xl border border-gold-500/30 shadow-lg">
            <span className="text-xs font-medium text-ivory-300/80 px-2">Studio Lighting:</span>
            <button
              onClick={() => setIsIlluminated(false)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                !isIlluminated
                  ? 'bg-gold-500 text-navy-950 shadow-gold-sm'
                  : 'text-ivory-300 hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Day View</span>
            </button>
            <button
              onClick={() => setIsIlluminated(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                isIlluminated
                  ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 shadow-gold-sm'
                  : 'text-ivory-300 hover:text-white'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Night Illumination</span>
            </button>
          </div>
        </div>

        {/* 3 Large Gumbad Showcase Cards with Interactive Hover Brightness */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {gumbadCards.map((card) => (
            <div
              key={card.id}
              className="group relative rounded-3xl bg-gradient-to-b from-navy-900/90 to-navy-950/95 border border-gold-500/20 hover:border-gold-400/60 shadow-xl hover:shadow-gold-md transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Area with Interactive Glow Effect */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-950">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-105 transition-all duration-700 ease-out"
                />

                {/* Ambient Golden Light Hover Flare */}
                <div className="absolute inset-0 bg-gold-400/0 group-hover:bg-gold-400/10 transition-colors duration-500 pointer-events-none" />

                {/* Dark Bottom Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-navy-950/85 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                    {card.tag}
                  </span>
                </div>

                {/* Interactive Light Indicator */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-navy-900/90 border border-gold-500/30 text-[11px] text-gold-300">
                    <Lightbulb className="w-3 h-3 text-gold-400 animate-pulse" />
                    <span>LED Equipped</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-ivory-50 group-hover:text-gold-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-navy-800 space-y-3">
                  <p className="text-xs font-mono text-gold-300/90">
                    {card.specs}
                  </p>
                  <button
                    onClick={onOpenCustomOrder}
                    className="w-full py-2.5 rounded-xl bg-navy-850 hover:bg-gold-500 text-gold-300 hover:text-navy-950 border border-gold-500/30 hover:border-transparent font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Request This Gumbad</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 6 Key Architectural Highlights Grid */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50">
              Architectural Elements of Our Domes
            </h3>
            <p className="text-xs sm:text-sm text-ivory-300/80 font-sans">
              Every curve, arch, and kalash is engineered for structural equilibrium and sublime aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gumbadHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-900/60 border border-gold-500/20 hover:border-gold-400/50 hover:bg-navy-900 transition-all duration-300 flex gap-4 items-start group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 shrink-0 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-base font-bold text-ivory-50 group-hover:text-gold-200 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-ivory-300/75 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gumbad Section CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenCustomOrder}
            className="px-9 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-navy-950 font-bold text-sm uppercase tracking-wider shadow-gold-md hover:shadow-gold-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group"
          >
            <Crown className="w-4 h-4" />
            <span>Create Your Custom Gumbad</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
