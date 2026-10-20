import React, { useState } from 'react';
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, MapPin } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-28 bg-[#050B1B] overflow-hidden border-t border-gold-500/15">
      {/* Background glow halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Patron Voices</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50 tracking-tight">
            Words of Reverence & <br />
            <span className="text-gold-gradient italic font-cormorant">Appreciation</span>
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-3" />

          <p className="text-ivory-200/80 text-sm sm:text-base leading-relaxed font-sans">
            Hear from community organizers, spiritual caretakers, and private collectors across India who trusted Being Samsher Crafting.
          </p>
        </div>

        {/* Carousel Showcase Card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-navy-900/90 to-navy-950/95 border border-gold-400/35 shadow-2xl backdrop-blur-xl">
            
            {/* Top Quote Icon & Stars */}
            <div className="flex items-center justify-between pb-8 border-b border-navy-800">
              <div className="flex items-center gap-1.5">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-gold-300 bg-gold-500/15 px-3 py-1 rounded-full border border-gold-400/30">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                <span>Verified Commission</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="py-8 space-y-6">
              <Quote className="w-10 h-10 text-gold-400/20" />
              <p className="font-serif text-lg sm:text-2xl text-ivory-50 leading-relaxed italic font-normal">
                “{current.text}”
              </p>
            </div>

            {/* Author Meta & Navigation */}
            <div className="pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-ivory-50">{current.name}</h4>
                <p className="text-xs text-gold-400 font-medium">{current.role}</p>
                <div className="mt-1 flex items-center gap-3 text-xs text-ivory-300/70">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold-400" />
                    <span>{current.city}</span>
                  </span>
                  <span>•</span>
                  <span className="font-mono text-gold-300/90">{current.project}</span>
                </div>
              </div>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-11 h-11 rounded-full bg-navy-950 border border-gold-500/30 hover:border-gold-300 text-gold-300 hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="text-xs font-mono text-gold-400 px-2">
                  {currentIndex + 1} / {testimonials.length}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-11 h-11 rounded-full bg-navy-950 border border-gold-500/30 hover:border-gold-300 text-gold-300 hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
