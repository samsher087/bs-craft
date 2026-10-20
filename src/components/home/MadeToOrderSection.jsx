import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, Ruler, ShieldCheck } from 'lucide-react';

export default function MadeToOrderSection() {
  return (
    <section className="py-24 sm:py-28 bg-sand-100 text-charcoal-900 border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Workshop Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-card overflow-hidden bg-sand-200 border border-subtle shadow-medium aspect-[4/3]">
              <img
                src="/assets/images/workshop_jali_cutting.jpg"
                alt="Master Craftsman Samsher Alam carving intricate jali panel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 inset-x-5 text-white flex items-center justify-between text-xs">
                <div>
                  <p className="font-serif font-bold text-sm">Samsher Alam Studio</p>
                  <p className="text-[11px] text-sand-300">Handcrafting architectural models in Jharkhand</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-gold-500/90 text-charcoal-950 font-bold text-[10px] uppercase font-mono">
                  100% Hand Sculpted
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Explanation & Custom Order CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold-600 font-semibold">
                Bespoke Studio Service
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-charcoal-900 leading-tight">
                Made to Order. <br />
                <span className="font-cormorant italic font-normal text-gold-600">Built to Reverence.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
              No two spiritual landmarks or commemorative occasions are identical. We work directly with patrons, committees, and architecture lovers to translate sketches, historic photographs, and unique spatial dimensions into physical masterpieces.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-charcoal-800 font-sans">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-850 shrink-0 mt-0.5" />
                <span>Custom heights from 2 feet table centerpieces up to 15+ feet community Tajiyas</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-850 shrink-0 mt-0.5" />
                <span>Integrated warm gold, amber, or multi-channel ceremonial lighting circuits</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-850 shrink-0 mt-0.5" />
                <span>Pre-dispatch photos and video inspection directly via WhatsApp</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/custom-order"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-850 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
              >
                <span>Request Custom Model</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/about"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-charcoal-800 text-charcoal-900 hover:bg-white text-xs font-semibold uppercase tracking-wider text-center"
              >
                Read Studio Story
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
