import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../config/siteConfig';

export default function CustomOrderBanner() {
  const handleWhatsAppChat = () => {
    const url = buildWhatsAppUrl(
      "Hello Being Samsher Crafting! I have a unique design in mind for a custom handcrafted model. I would like to discuss the design, dimensions, materials, detailing, lighting, and estimated cost."
    );
    window.open(url, '_blank');
  };

  return (
    <section className="relative py-20 bg-deep-black overflow-hidden border-t border-gold-500/15">
      {/* Decorative Golden & Emerald Halo */}
      <div className="absolute inset-0 bg-gradient-to-r from-royal-emerald/20 via-transparent to-royal-emerald/20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-14 bg-gradient-to-br from-charcoal-900 via-emerald-950 to-charcoal-900 border-2 border-gold-400/40 shadow-2xl overflow-hidden text-center space-y-6">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-deep-black/80 border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Bespoke Commissioning</span>
          </div>

          {/* Headline (User Specified) */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-warm-white tracking-tight leading-tight">
            Have a Unique <span className="text-gold-gradient italic font-cormorant">Design in Mind?</span>
          </h2>

          {/* Description (User Specified) */}
          <p className="text-warm-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            Tell us your vision. We will discuss the design, dimensions, materials, detailing, lighting, and estimated cost with you.
          </p>

          {/* Action Buttons (User Specified) */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/custom-order"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-deep-black font-bold text-xs sm:text-sm uppercase tracking-wider shadow-gold-md hover:shadow-gold-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request a Custom Model</span>
              <ArrowRight className="w-4 h-4 text-deep-black" />
            </Link>

            <button
              onClick={handleWhatsAppChat}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          {/* Signature statement */}
          <p className="text-xs text-gold-300/80 font-cormorant italic tracking-wide pt-2">
            “Har Creation Mein Mehnat Aur Perfection! ❤️”
          </p>

        </div>
      </div>
    </section>
  );
}
