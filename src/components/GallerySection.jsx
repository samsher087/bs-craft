import React, { useState } from 'react';
import { Sparkles, Eye, MapPin, Maximize2, Layers } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/gallery';

export default function GallerySection({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-28 bg-[#050B1B] overflow-hidden border-t border-gold-500/15">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Visual Chronicles</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50 tracking-tight">
            Master Craft <span className="text-gold-gradient italic font-cormorant">Gallery</span>
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-3" />

          <p className="text-ivory-200/80 text-sm sm:text-base leading-relaxed font-sans">
            Explore our curated photo archive spanning royal Tajiya designs, majestic domes, intricate workshop carvings, packaging protocols, and delivered landmarks.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-2.5">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-bold shadow-gold-sm scale-105'
                  : 'bg-navy-900/80 text-ivory-200/80 hover:text-gold-200 border border-gold-500/20 hover:border-gold-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Gallery Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, filteredItems, idx)}
              className="group relative rounded-3xl bg-navy-900/90 border border-gold-500/20 hover:border-gold-400/60 overflow-hidden shadow-xl hover:shadow-gold-md hover:-translate-y-1.5 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Framing */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-navy-950/85 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Fullscreen Zoom Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-gold-500/90 text-navy-950 flex items-center justify-center shadow-gold-md transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-3 right-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gold-300/90 bg-navy-950/80 px-2.5 py-0.5 rounded-full border border-gold-500/20">
                    <MapPin className="w-3 h-3 text-gold-400" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className="p-5 space-y-1.5">
                <h3 className="font-serif text-lg font-bold text-ivory-50 group-hover:text-gold-200 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-ivory-300/75 leading-relaxed font-sans line-clamp-2">
                  {item.caption}
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-gold-400/80 font-mono">
                  <span>{item.dimensions}</span>
                  <span className="hover:underline flex items-center gap-1">Open Lightbox ↗</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
