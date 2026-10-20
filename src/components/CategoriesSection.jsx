import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';
import { categoriesList } from '../data/products';

export default function CategoriesSection() {
  return (
    <section id="categories" className="relative py-24 sm:py-28 bg-deep-black overflow-hidden border-t border-gold-500/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-royal-emerald/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gold-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-900 border border-gold-400/35 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            <span>Artisan Spectrum</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-warm-white tracking-tight">
            Featured <span className="text-gold-gradient italic font-cormorant">Categories</span>
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-2" />

          <p className="text-warm-white/80 text-sm sm:text-base leading-relaxed font-sans">
            Explore our specialized craft domains — from sacred multi-tier Tajiyas and majestic Gumbads to delicate jali work and custom architectural replicas.
          </p>
        </div>

        {/* 8 Category Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {categoriesList.map((category) => (
            <div
              key={category.id}
              className="group relative rounded-2xl bg-charcoal-900/80 border border-gold-500/20 hover:border-gold-400/60 shadow-xl hover:shadow-gold-md hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Category Cover Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-950">
                <img
                  src={category.coverImage}
                  alt={category.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                {/* Subtitle Pill */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-950/90 border border-emerald-600/40 text-emerald-300 backdrop-blur-md">
                    {category.modelCount}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-warm-white group-hover:text-gold-200 transition-colors line-clamp-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-warm-white/70 leading-relaxed line-clamp-3 font-sans">
                    {category.description}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="pt-3 border-t border-charcoal-800 flex items-center justify-between">
                  <Link
                    to={`/creations?category=${encodeURIComponent(category.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-300 group-hover:text-gold-200 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
