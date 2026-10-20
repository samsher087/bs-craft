import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageCircle, ArrowUpRight, Eye } from 'lucide-react';
import { getProducts } from '../data/products';
import { buildWhatsAppUrl } from '../config/siteConfig';

export default function FeaturedCreations() {
  const allProducts = getProducts();
  const featured = allProducts.filter(p => p.featured).slice(0, 8);

  const handleWhatsAppEnquiry = (e, product) => {
    e.stopPropagation();
    const msg = `Hello Being Samsher Crafting! I am interested in your ${product.name}. Please share customization options, dimensions, pricing, and delivery details.`;
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="creations" className="relative py-24 sm:py-28 bg-[#091510] bg-jali-mesh overflow-hidden border-t border-gold-500/15">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-royal-emerald/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gold-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gold-500/20">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-900 border border-gold-400/35 text-gold-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Digital Showroom</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-warm-white tracking-tight">
              Featured <span className="text-gold-gradient italic font-cormorant">Creations</span>
            </h2>
            <p className="text-warm-white/80 text-sm sm:text-base max-w-2xl font-sans">
              Hand-sculpted Islamic architectural models, bespoke Tajiya masterpieces, and intricate lattice panels crafted with dedication and surgical precision.
            </p>
          </div>

          <Link
            to="/creations"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal-900 hover:bg-emerald-950 border border-gold-500/35 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md self-start md:self-auto cursor-pointer"
          >
            <span>View Complete Catalogue</span>
            <ArrowUpRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>

        {/* 8 Product Visual Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {featured.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl bg-charcoal-900/90 border border-gold-500/20 hover:border-gold-400/60 shadow-xl hover:shadow-gold-md hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Product Image Area */}
              <Link to={`/creations/${product.slug}`} className="relative aspect-[4/3] w-full overflow-hidden bg-deep-black block cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/25 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                {/* Tag Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-deep-black/90 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                    {product.tag}
                  </span>
                </div>

                {/* View Details Eye Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-11 h-11 rounded-full bg-gold-500 text-deep-black flex items-center justify-center shadow-gold-md transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-warm-white/90 pointer-events-none">
                  <span className="text-[11px] font-medium text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-600/30">
                    {product.modelType || product.category}
                  </span>
                  <span className="text-[10px] text-gold-300 bg-charcoal-950/80 px-2 py-0.5 rounded-full border border-gold-500/30">
                    {product.priceDisplay || "Request a Quote"}
                  </span>
                </div>
              </Link>

              {/* Card Content Area */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <Link to={`/creations/${product.slug}`} className="block">
                    <h3 className="font-serif text-lg font-bold text-warm-white group-hover:text-gold-200 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-warm-white/70 leading-relaxed line-clamp-2 font-sans">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Card Action Buttons: View Details & Enquire on WhatsApp */}
                <div className="pt-3 border-t border-charcoal-800 flex items-center justify-between gap-2">
                  <Link
                    to={`/creations/${product.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-warm-white hover:text-gold-300 transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  <button
                    onClick={(e) => handleWhatsAppEnquiry(e, product)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-900/90 hover:bg-royal-emerald text-emerald-200 hover:text-white border border-emerald-600/40 text-[11px] font-semibold transition-all shadow-sm cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Custom Design Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-charcoal-900 via-emerald-950 to-charcoal-900 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-warm-white">
              Need a personalized scale or custom design?
            </h4>
            <p className="text-xs sm:text-sm text-warm-white/75">
              We translate photographs, architectural sketches, and custom ideas into physical handcrafted models.
            </p>
          </div>

          <Link
            to="/custom-order"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-500 text-deep-black font-bold text-xs uppercase tracking-wider shadow-gold-sm hover:shadow-gold-md hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
          >
            Request a Custom Design
          </Link>
        </div>

      </div>
    </section>
  );
}
