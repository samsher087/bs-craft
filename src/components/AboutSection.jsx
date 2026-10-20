import React from 'react';
import { Sparkles, Heart, Award, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

export default function AboutSection({ onOpenCustomOrder }) {
  return (
    <section id="about" className="relative py-28 bg-[#050B1B] overflow-hidden border-t border-gold-500/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-[550px] h-[550px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Visual Collage with Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-gold-500/30 to-navy-900 border border-gold-400/40 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-navy-950 group">
                <img
                  src="/assets/images/samsher_alam_founder.jpg"
                  alt="Samsher Alam - Founder: Being Samsher Crafting"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-80" />

                {/* Bottom Card Inside Image */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-navy-950/90 border border-gold-500/30 backdrop-blur-md">
                  <p className="font-serif text-sm font-bold text-ivory-50">Samsher Alam</p>
                  <p className="text-xs text-gold-400 font-medium">Founder: Being Samsher Crafting</p>
                  <p className="text-[11px] text-ivory-300/70 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold-400" />
                    <span>Studio in Giridih, Jharkhand</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Decorative Seal */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-24 h-24 rounded-full bg-navy-900 border-2 border-gold-400 shadow-gold-md p-2 flex flex-col items-center justify-center text-center backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold-400 mb-0.5" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-gold-300">100% Genuine</span>
              <span className="text-[8px] text-ivory-300">Hand Carved</span>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400/20" />
              <span>The Artisan Heritage</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50 tracking-tight leading-tight">
                About <span className="text-gold-gradient italic font-cormorant">Being Samsher Crafting</span>
              </h2>

              <p className="text-gold-300 font-cormorant italic text-xl font-medium">
                “Har Creation Mein Mehnat Aur Perfection! ❤️”
              </p>
            </div>

            <div className="space-y-4 text-ivory-200/85 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                Being Samsher Crafting is built around a simple belief — <strong className="text-ivory-50 font-serif font-normal">every creation should carry its own identity.</strong> From intricate cutwork to grand domes and illuminated architectural designs, we focus on detail, creativity and finishing.
              </p>
              <p>
                Founded in Giridih, Jharkhand by master artisan Samsher Alam, our studio bridges deep-rooted traditional Islamic craft heritage with contemporary structural engineering. We take profound pride in working with thermocol, architectural acrylics, and gold foils — elevating them through surgical cutwork, symmetrical geometry, and warm ambient illumination into sacred landmarks.
              </p>
              <p>
                Whether it is an 8-tier royal Tajiya for a historic city imambara, a delicate Green Dome replica for a private prayer sanctuary, or custom minarets, every single cut is made with immense dedication, precision, and heartfelt prayers.
              </p>
            </div>

            {/* Core Values / Distinctions */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-navy-900/60 border border-gold-500/20">
                <CheckCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-ivory-50">Zero Shortcut Philosophy</h4>
                  <p className="text-xs text-ivory-300/70">No rushed assembly or hollow shortcuts. Every tier is structurally load-tested.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-navy-900/60 border border-gold-500/20">
                <CheckCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-ivory-50">Pan-India Connection</h4>
                  <p className="text-xs text-ivory-300/70">Proudly shipping to Lucknow, Hyderabad, Mumbai, Patna, Kolkata and nationwide.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenCustomOrder}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-gold-sm hover:shadow-gold-md hover:scale-105 transition-all"
              >
                Discuss a Bespoke Commission
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
