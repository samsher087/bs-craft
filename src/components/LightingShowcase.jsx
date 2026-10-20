import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, Sun, Moon, Zap, Lightbulb, SlidersHorizontal, ArrowLeftRight } from 'lucide-react';

export default function LightingShowcase({ onOpenCustomOrder }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="relative py-28 bg-[#040711] overflow-hidden border-t border-gold-500/15">
      {/* Background illumination halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gold-500/10 rounded-full blur-[180px] pointer-events-none animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Interactive Lighting Showcase</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50 tracking-tight">
            When Craft <span className="text-gold-gradient italic font-cormorant">Meets Light</span>
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-3" />

          <p className="text-ivory-200/85 text-base sm:text-lg leading-relaxed font-sans">
            “Beautiful detailing becomes even more magical when the right lighting brings every curve, cut and architectural element to life.”
          </p>
        </div>

        {/* Quick Slider Preset Buttons */}
        <div className="mt-8 flex justify-center items-center gap-3">
          <button
            onClick={() => setSliderPosition(10)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              sliderPosition < 25
                ? 'bg-gold-500 text-navy-950 shadow-gold-sm'
                : 'bg-navy-900 text-ivory-300 hover:text-white border border-gold-500/20'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Before: Elegant Craftsmanship</span>
          </button>

          <button
            onClick={() => setSliderPosition(50)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              sliderPosition >= 25 && sliderPosition <= 75
                ? 'bg-gold-500 text-navy-950 shadow-gold-sm'
                : 'bg-navy-900 text-ivory-300 hover:text-white border border-gold-500/20'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Split Comparison</span>
          </button>

          <button
            onClick={() => setSliderPosition(90)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              sliderPosition > 75
                ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 shadow-gold-sm'
                : 'bg-navy-900 text-ivory-300 hover:text-white border border-gold-500/20'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>After: Royal Illuminated</span>
          </button>
        </div>

        {/* Interactive Before & After Slider Box */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border-2 border-gold-400/50 shadow-2xl shadow-navy-950 cursor-ew-resize select-none"
          >
            {/* Background Image: AFTER (Night Illumination) */}
            <img
              src="/assets/images/grand_gumbad_night.jpg"
              alt="Grand Gumbad After Lighting"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />

            {/* Label: Night Illuminated */}
            <div className="absolute top-5 right-5 pointer-events-none z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-navy-950/85 border border-gold-400/50 text-gold-300 text-xs sm:text-sm font-semibold backdrop-blur-md flex items-center gap-2 shadow-lg">
                <Moon className="w-4 h-4 text-gold-400" />
                <span>After: Royal Illuminated Appearance</span>
              </span>
            </div>

            {/* Foreground Clipped Image: BEFORE (Natural Daylight Craftsmanship) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/assets/images/grand_gumbad_day.jpg"
                alt="Grand Gumbad Before Lighting"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />

              {/* Label: Elegant Craftsmanship */}
              <div className="absolute top-5 left-5 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full bg-navy-950/85 border border-gold-400/50 text-ivory-100 text-xs sm:text-sm font-semibold backdrop-blur-md flex items-center gap-2 shadow-lg">
                  <Sun className="w-4 h-4 text-gold-400" />
                  <span>Before: Elegant Craftsmanship</span>
                </span>
              </div>
            </div>

            {/* Draggable Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-gold-300 via-gold-400 to-gold-600 shadow-gold-lg cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Center Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-ivory-50 text-navy-950 shadow-gold-lg flex items-center justify-center">
                <ArrowLeftRight className="w-5 h-5 text-navy-950 animate-pulse" />
              </div>
            </div>

            {/* Drag Hint at Bottom Center */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-navy-950/70 border border-gold-500/30 text-gold-300/80 text-[11px] backdrop-blur-md pointer-events-none">
              Drag slider left or right to compare
            </div>
          </div>
        </div>

        {/* Feature Points Under Slider */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-5 rounded-2xl bg-navy-900/70 border border-gold-500/20 text-center space-y-2">
            <Lightbulb className="w-6 h-6 text-gold-400 mx-auto" />
            <h4 className="font-serif text-base font-bold text-ivory-50">Concealed LED Architecture</h4>
            <p className="text-xs text-ivory-300/75">Wiring is invisibly routed inside columns and dome bases to eliminate exposed cables.</p>
          </div>

          <div className="p-5 rounded-2xl bg-navy-900/70 border border-gold-500/20 text-center space-y-2">
            <Zap className="w-6 h-6 text-gold-400 mx-auto" />
            <h4 className="font-serif text-base font-bold text-ivory-50">Dual Power Capability</h4>
            <p className="text-xs text-ivory-300/75">Operates on safe low-voltage 12V DC adapters or high-end rechargeable portable battery packs.</p>
          </div>

          <div className="p-5 rounded-2xl bg-navy-900/70 border border-gold-500/20 text-center space-y-2">
            <Sparkles className="w-6 h-6 text-gold-400 mx-auto" />
            <h4 className="font-serif text-base font-bold text-ivory-50">Warm Amber & Gold Spectrum</h4>
            <p className="text-xs text-ivory-300/75">Calibrated color temperatures that enhance gold foils and project hypnotic jali shadow patterns.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
