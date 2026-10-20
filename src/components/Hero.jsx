import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Heart, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-24 flex items-center justify-center overflow-hidden bg-emerald-radial bg-islamic-pattern">
      {/* Background Golden & Emerald Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-royal-emerald/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-royal-emerald/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Animated Golden Light Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[18%] left-[12%] w-2 h-2 rounded-full bg-gold-300 shadow-gold-sm animate-float-slow opacity-75" />
        <div className="absolute top-[32%] right-[16%] w-2.5 h-2.5 rounded-full bg-gold-glow shadow-gold-md animate-float-fast opacity-80" />
        <div className="absolute bottom-[24%] left-[20%] w-1.5 h-1.5 rounded-full bg-gold-200 animate-float-slow opacity-60" />
        <div className="absolute top-[68%] right-[14%] w-2 h-2 rounded-full bg-gold-400 shadow-gold-sm animate-float-fast opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headlines, Trust statement & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-7">
            
            {/* Small Royal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-gold-500/35 text-gold-300 text-xs sm:text-sm font-medium shadow-gold-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
              <span className="tracking-wide">Being Samsher Crafting • Jharkhand, India</span>
            </div>

            {/* Main Headline (User Specified) */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-semibold tracking-tight text-warm-white leading-[1.12]">
                Crafting Dreams Into <br className="hidden sm:inline" />
                <span className="text-gold-metallic italic font-cormorant font-normal">
                  Extraordinary Creations.
                </span>
              </h1>
              
              {/* Brand Tagline & Signature */}
              <p className="text-gold-300/95 font-cormorant italic text-lg sm:text-xl font-medium tracking-wide">
                “Har Creation Mein Mehnat Aur Perfection! ❤️”
              </p>
            </div>

            {/* Supporting Text (User Specified) */}
            <p className="text-warm-white/85 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed font-sans">
              Discover beautifully handcrafted Tajiya, Gumbad, Minar, and custom architectural models — designed with creativity, precision, and passion.
            </p>

            {/* CTAs (User Specified) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/creations"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-deep-black font-bold text-xs sm:text-sm tracking-wider uppercase shadow-gold-md hover:shadow-gold-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Explore Our Creations</span>
                <ArrowRight className="w-4 h-4 text-deep-black group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/custom-order"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-charcoal-900/85 hover:bg-emerald-950 text-gold-300 hover:text-white border border-gold-500/40 hover:border-gold-300 font-semibold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-gold-400 group-hover:rotate-12 transition-transform" />
                <span>Request a Custom Design</span>
              </Link>
            </div>

            {/* Small Trust Statement (User Specified) */}
            <div className="pt-6 border-t border-gold-500/20">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-charcoal-900/70 border border-gold-500/20 text-xs sm:text-sm text-gold-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom Designs | Detailed Craftsmanship | All India Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Cinematic Architectural Masterpiece Image */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-none">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-4 bg-gradient-to-t from-gold-500/25 via-royal-emerald/20 to-transparent rounded-[2.5rem] blur-2xl opacity-75" />

              {/* Gold Ornamented Frame */}
              <div className="relative rounded-[2.5rem] p-2.5 sm:p-3 bg-gradient-to-b from-gold-400/50 via-emerald-900/60 to-charcoal-900 border border-gold-400/40 shadow-2xl shadow-deep-black">
                
                <div className="relative rounded-[2rem] overflow-hidden bg-deep-black border border-gold-500/30 aspect-[4/5] group">
                  <img
                    src="/assets/images/hero_royal_tajiya.jpg"
                    alt="Handcrafted Royal Tajiya Model by Being Samsher Crafting"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/25 to-transparent opacity-85" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-deep-black/85 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                      Signature Handcrafted Model
                    </span>
                    <span className="w-7 h-7 rounded-full bg-gold-500/20 border border-gold-400/50 flex items-center justify-center text-gold-300 text-xs">
                      ★
                    </span>
                  </div>

                  {/* Bottom Model Card */}
                  <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-deep-black/90 backdrop-blur-md border border-gold-500/35 text-left space-y-1.5 shadow-xl">
                    <div className="flex items-center justify-between">
                      <h2 className="font-serif text-lg font-semibold text-warm-white">
                        The Shahi Royal Tajiya
                      </h2>
                      <span className="text-[11px] text-gold-400 font-medium px-2 py-0.5 rounded bg-royal-emerald/40 border border-gold-500/30">
                        Handcrafted
                      </span>
                    </div>
                    <p className="text-xs text-warm-white/75 line-clamp-2">
                      Multi-tier architectural structure with fine thermocol jali cutwork, gold foil accents, and warm golden illumination.
                    </p>
                    <div className="pt-1 flex items-center justify-between text-[11px] text-gold-300/90 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gold-400" />
                        Jharkhand, India
                      </span>
                      <Link 
                        to="/creations/fine-cut-tajiya"
                        className="hover:underline text-gold-300 font-semibold"
                      >
                        View Project →
                      </Link>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
