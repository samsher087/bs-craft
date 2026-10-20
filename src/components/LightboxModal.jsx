import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ item, items, currentIndex, onIndexChange, onClose }) {
  if (!item) return null;

  const handlePrev = (e) => {
    e.stopPropagation();
    const newIdx = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onIndexChange(newIdx);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const newIdx = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onIndexChange(newIdx);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-deep-black/95 backdrop-blur-xl transition-all"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-charcoal-900 border border-gold-500/40 text-gold-300 hover:text-white flex items-center justify-center transition-all hover:rotate-90 shadow-2xl"
        aria-label="Close Lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev Button */}
      {items && items.length > 1 && (
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-6 z-20 w-12 h-12 rounded-full bg-charcoal-900/90 border border-gold-500/40 text-gold-300 hover:text-white flex items-center justify-center transition-all shadow-xl hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Button */}
      {items && items.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-6 z-20 w-12 h-12 rounded-full bg-charcoal-900/90 border border-gold-500/40 text-gold-300 hover:text-white flex items-center justify-center transition-all shadow-xl hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image & Caption Content Area */}
      <div 
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden border-2 border-gold-400/50 shadow-2xl shadow-deep-black bg-deep-black">
          <img
            src={item.image}
            alt={item.title || item.name}
            className="max-h-[72vh] max-w-[88vw] object-contain object-center"
          />

          {/* Top Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-deep-black/85 border border-gold-400/40 text-gold-300 backdrop-blur-md">
              {item.category}
            </span>
          </div>
        </div>

        {/* Caption Card Below Image */}
        <div className="mt-4 p-4 rounded-2xl bg-charcoal-900/95 border border-gold-500/30 text-center max-w-2xl w-full shadow-xl space-y-1">
          <h3 className="font-serif text-lg font-bold text-warm-white">
            {item.title || item.name}
          </h3>
          <p className="text-xs text-warm-white/80">
            {item.caption || item.shortDesc}
          </p>
          <div className="pt-1.5 flex items-center justify-center gap-4 text-[11px] text-gold-400 font-mono">
            {item.dimensions && <span>Size: {item.dimensions}</span>}
            {item.location && <span>• {item.location}</span>}
            {items && <span>• {currentIndex + 1} of {items.length}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
