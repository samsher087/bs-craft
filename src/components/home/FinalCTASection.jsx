import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="py-24 sm:py-28 bg-charcoal-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 z-10">
        
        <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-gold-400 font-semibold block">
          Custom Crafting Studio
        </span>

        {/* Headline (User Specified) */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
          Let’s Build Something <br className="hidden sm:inline" />
          <span className="font-cormorant italic font-normal text-gold-gradient-dark">
            Extraordinary.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-sand-200/80 max-w-xl mx-auto font-sans leading-relaxed">
          From historic shrines to personal prayer sanctums, our studio translates architectural vision into breathtaking handcrafted reality.
        </p>

        {/* Buttons (User Specified) */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider shadow-gold-subtle hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Models</span>
            <ArrowRight className="w-4 h-4 text-charcoal-950" />
          </Link>

          <Link
            to="/custom-order"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs uppercase tracking-wider backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Request a Custom Design</span>
          </Link>
        </div>

        <p className="text-xs text-gold-300/80 font-cormorant italic pt-3">
          “Har Creation Mein Mehnat Aur Perfection!”
        </p>

      </div>
    </section>
  );
}
