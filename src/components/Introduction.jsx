import React from 'react';
import { PenTool, Scissors, Award, Sparkles, Check } from 'lucide-react';

export default function Introduction() {
  const cards = [
    {
      number: "01",
      title: "Custom Designs",
      subtitle: "Tailored to Your Vision",
      icon: PenTool,
      desc: "Every community, family, and organization has a unique aesthetic and architectural vision. We craft custom dimensions, structural levels, dome curves, and color palettes according to your exact specifications.",
      points: ["Custom scale from 3ft to 15+ft", "Reference image translation", "Modular assembly systems"]
    },
    {
      number: "02",
      title: "Fine Cutwork",
      subtitle: "Micro-Precision Jali & Carving",
      icon: Scissors,
      desc: "Our hallmark signature. We do not use generic laser-burnt stampings. Each arabesque star mesh, scalloped muqarnas arch, and floral border is delicately hand-carved with surgical blades for crisp, flawless edges.",
      points: ["Intricate geometric star patterns", "Authentic calligraphy & arches", "Zero-fray clean cuts"]
    },
    {
      number: "03",
      title: "Premium Finishing",
      subtitle: "Gold Leafing & Illumination",
      icon: Award,
      desc: "A great structure comes alive through its finish. We apply museum-grade gold leafing, durable smooth primers, and embedded warm LED lighting architectures that create an enchanting, spiritual ambiance.",
      points: ["High-reflective gold leafing", "Embedded warm LED wiring", "Museum preservation coat"]
    }
  ];

  return (
    <section className="relative py-24 bg-navy-950 bg-jali-mesh border-y border-gold-500/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-400/30 text-gold-300 text-xs font-medium tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>The Artisan Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50 tracking-tight">
            Crafted With Passion. <br />
            <span className="text-gold-gradient italic font-cormorant">
              Designed With Perfection.
            </span>
          </h2>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-3" />

          <p className="text-ivory-200/80 text-base sm:text-lg leading-relaxed font-sans">
            Being Samsher Crafting is a craftsmanship studio dedicated to creating detailed Tajiya, Gumbad, Minar and custom architectural designs. Every creation combines creativity, precision, traditional inspiration and modern craftsmanship.
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group relative rounded-3xl p-8 bg-gradient-to-b from-navy-900/90 to-navy-950/90 border border-gold-500/20 hover:border-gold-400/60 shadow-xl hover:shadow-gold-md hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle card top glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gold-500/10 rounded-full blur-2xl group-hover:bg-gold-400/20 transition-all pointer-events-none" />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-navy-800">
                    <span className="font-serif text-3xl font-extrabold text-gold-400/80 tracking-wider">
                      {card.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-navy-800/80 border border-gold-500/30 flex items-center justify-center text-gold-300 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-md">
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="pt-6 space-y-1.5">
                    <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                      {card.subtitle}
                    </p>
                    <h3 className="font-serif text-2xl font-bold text-ivory-50 group-hover:text-gold-200 transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-ivory-300/75 leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>

                {/* Bullet Highlights */}
                <div className="mt-6 pt-4 border-t border-navy-800/80 space-y-2">
                  {card.points.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-ivory-200/90">
                      <span className="w-4 h-4 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300 text-[10px]">
                        ✓
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
