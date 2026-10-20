import React, { useState } from 'react';
import { Sparkles, MessageCircle, Ruler, Layers, ChevronRight, Award } from 'lucide-react';
import { tajiyaCategories, tajiyaCollection, products } from '../data/products';

export default function TajiyaSection({ onSelectProduct, onOpenCustomOrder }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? tajiyaCollection
    : tajiyaCollection.filter(item => item.type === activeCategory);

  const handleCardClick = (item) => {
    // Find matching product in products or pass custom details
    const matched = products.find(p => p.category === 'Tajiya') || products[0];
    onSelectProduct({
      ...matched,
      name: item.name,
      subCategory: item.type,
      image: item.image,
      dimensions: item.height,
      shortDesc: item.desc
    });
  };

  return (
    <section id="tajiya" className="relative py-28 bg-[#040814] bg-islamic-pattern border-t border-gold-500/15">
      {/* Golden glow ambience */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Sacred Craftsmanship</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50 tracking-tight">
            Premium <span className="text-gold-gradient italic font-cormorant">Tajiya Collection</span>
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-3" />

          <p className="text-ivory-200/80 text-sm sm:text-base leading-relaxed font-sans">
            Honoring sacred heritage with unparalleled devotion and precision. Each Tajiya is an architectural symphony of multi-tiered domes, minars, delicate thermocol fretwork, and golden splendor.
          </p>
        </div>

        {/* Category Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {tajiyaCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-bold shadow-gold-sm'
                  : 'bg-navy-900/80 text-ivory-200/80 hover:text-gold-200 border border-gold-500/20 hover:border-gold-500/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Display */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group relative rounded-3xl bg-gradient-to-b from-navy-900/90 to-navy-950/90 border border-gold-500/25 hover:border-gold-400/60 shadow-xl hover:shadow-gold-md hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Framing */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-950">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-80" />

                {/* Type Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-navy-950/90 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                    {item.type}
                  </span>
                </div>

                {/* Specs Overlay */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-ivory-200">
                  <span className="flex items-center gap-1 bg-navy-900/80 px-2.5 py-1 rounded-md border border-gold-500/25 text-gold-300 font-medium">
                    <Ruler className="w-3.5 h-3.5" />
                    <span>{item.height}</span>
                  </span>
                  <span className="flex items-center gap-1 bg-navy-900/80 px-2.5 py-1 rounded-md border border-gold-500/25 text-gold-300 font-medium">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{item.tiers}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-ivory-50 group-hover:text-gold-200 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed font-sans line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-3 border-t border-navy-800/80 flex items-center justify-between">
                  <span className="text-xs text-gold-400 font-medium">
                    100% Handcrafted
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-gold-300 group-hover:text-gold-200">
                    <span>View Specifications</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Dedicated Tajiya CTA Box */}
        <div className="mt-16 rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/30 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="absolute right-0 top-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400">
              <Award className="w-4 h-4" />
              <span>Custom Tajiya Specialists</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50">
              Want a Custom Tajiya for Your City or Anjuman?
            </h3>
            <p className="text-xs sm:text-sm text-ivory-300/80">
              From compact 4-foot indoor sanctums to monumental 15-foot community procession masterpieces, we engineer custom scale, light channels, and modular easy-assembly structures.
            </p>
          </div>

          <button
            onClick={onOpenCustomOrder}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-navy-950 font-bold text-sm uppercase tracking-wider shadow-gold-md hover:shadow-gold-lg hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2 group"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Discuss Your Design</span>
          </button>
        </div>

      </div>
    </section>
  );
}
