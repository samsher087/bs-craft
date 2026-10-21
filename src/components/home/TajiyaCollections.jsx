import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Eye, ArrowUpRight, Sparkles, X, ShieldCheck } from 'lucide-react';
import { getTajiyaProducts } from '../../data/products';
import { buildProductWhatsAppUrl, getSiteConfig } from '../../config/siteConfig';

export default function TajiyaCollections() {
  const tajiyas = getTajiyaProducts();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [siteConfig, setSiteConfig] = useState(getSiteConfig());

  useEffect(() => {
    const handleConfigChange = () => setSiteConfig(getSiteConfig());
    window.addEventListener('site-config-updated', handleConfigChange);
    return () => window.removeEventListener('site-config-updated', handleConfigChange);
  }, []);

  const handleWhatsAppOrder = (e, product) => {
    e.stopPropagation();
    const url = buildProductWhatsAppUrl({
      productName: product.name,
      priceDisplay: product.priceDisplay,
      selectedSize: product.sizeOptions ? product.sizeOptions[0].name : "Standard",
      productUrl: window.location.origin + `/products/${product.slug}`
    });
    window.open(url, '_blank');
  };

  return (
    <section id="tajiya-collections" className="pt-8 sm:pt-12 pb-8 sm:pb-10 bg-[#FAF7F2] text-charcoal-900 border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header - Styled Exactly as Screenshot with Tight Spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-[#E8E3D8]">
          <div className="space-y-3">
            {/* Elegant Section Eyebrow Label Badge */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-charcoal-900">
              Tajiya <span className="font-cormorant italic font-normal text-gold-600">Collections</span>
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl font-sans leading-relaxed">
              Majestic multi-tiered shrines engineered with handcrafted thermocol fretwork, 24k gold leaf filigree, and celestial ambient illumination.
            </p>
          </div>

          <Link
            to="/products?category=Tajiya"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-charcoal-800 text-charcoal-900 hover:bg-charcoal-900 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all self-start md:self-auto cursor-pointer"
          >
            <span>Browse Tajiya Catalogue</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4:5 Aspect Ratio Cards Grid - 4 Blocks Per Row for Proper Visibility */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {tajiyas.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] border border-gold-500/20 hover:border-gold-400/80 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between bg-charcoal-950"
            >
              {/* Full-Bleed 4:5 Poster Image */}
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover object-center brightness-105 contrast-105 saturate-105 group-hover:brightness-110 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />

              {/* Very Subtle Gradient so Inner Image Remains Bright and Visible */}
              <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

              {/* Top Bar Over Image: Compact Floating Badge & Quick View */}
              <div className="relative z-10 p-3.5 sm:p-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/40 text-gold-300 backdrop-blur-xs border border-gold-400/30 shadow-sm">
                  {product.tag}
                </span>

                <button
                  onClick={() => setQuickViewProduct(product)}
                  className="p-2.5 rounded-full bg-black/35 hover:bg-gold-500 hover:text-charcoal-950 text-white backdrop-blur-xs border border-white/30 transition-all cursor-pointer shadow-md"
                  title="Quick View Details"
                  aria-label="Quick View Details"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bottom Floating Glass Card - Transparent to keep inner image visible */}
              <div className="relative z-10 m-2.5 sm:m-3 p-3 sm:p-3.5 rounded-2xl bg-black/20 hover:bg-black/30 backdrop-blur-[2px] border border-white/20 shadow-lg space-y-2 transition-all">
                {/* Pricing Block Over Image */}
                {siteConfig.showPrices ? (
                  <div className="flex items-baseline justify-between">
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-sand-100 uppercase tracking-wider block font-sans drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] font-semibold">
                        Starting at
                      </span>
                      <div className="flex items-baseline gap-1.5 sm:gap-2">
                        <div className="flex items-baseline">
                          <span className="font-serif text-lg sm:text-xl font-bold text-gold-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] mr-0.5">
                            ₹
                          </span>
                          <span className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] tracking-tight">
                            {product.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                        {product.originalPrice && (
                          <span className="text-xs text-sand-200/80 line-through drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="text-[10px] text-gold-200 bg-black/30 px-2.5 py-0.5 rounded-full font-mono font-medium border border-gold-400/40 backdrop-blur-xs">
                      Customizable
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center py-1">
                    <span className="font-serif text-base sm:text-lg font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] tracking-wide text-center">
                      Pricing on request
                    </span>
                  </div>
                )}

                {/* Action Buttons Over Image */}
                <div className="grid grid-cols-2 gap-2 pt-0.5">
                  <Link
                    to={`/products/${product.slug}`}
                    className="py-2 rounded-xl bg-black/30 hover:bg-white text-white hover:text-charcoal-900 border border-white/30 backdrop-blur-xs text-center text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center cursor-pointer shadow-sm"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={(e) => handleWhatsAppOrder(e, product)}
                    className="py-2 rounded-xl bg-[#25D366]/95 hover:bg-[#20bd5a] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/75 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-subtle shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 animate-fade-in">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-sand-100 hover:bg-sand-200 text-charcoal-600 hover:text-charcoal-900 transition-colors"
              aria-label="Close Quick View"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="md:w-1/2 aspect-[9/16] max-h-[380px] rounded-2xl overflow-hidden bg-charcoal-900 shadow-md">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-600 font-semibold">
                  {quickViewProduct.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                  {quickViewProduct.name}
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-sans">
                  {quickViewProduct.shortDesc}
                </p>

                <div className="pt-2 space-y-1 text-xs text-charcoal-700">
                  <p><strong>Dimensions:</strong> {quickViewProduct.dimensions}</p>
                  <p><strong>Crafting Time:</strong> {quickViewProduct.craftTime || quickViewProduct.availability}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-subtle space-y-4">
                <div>
                  <span className="text-xs text-charcoal-500 block">Pricing</span>
                  {siteConfig.showPrices ? (
                    <>
                      <span className="font-serif text-2xl font-bold text-charcoal-900">
                        ₹{quickViewProduct.price.toLocaleString('en-IN')}
                      </span>
                      {quickViewProduct.originalPrice && (
                        <span className="text-xs text-charcoal-400 line-through ml-2">
                          ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="font-serif text-lg font-bold text-charcoal-900">
                      Pricing on request
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Link
                    to={`/products/${quickViewProduct.slug}`}
                    className="flex-1 py-2.5 rounded-xl bg-charcoal-900 hover:bg-black text-white text-xs font-semibold text-center transition-colors"
                  >
                    Full Details
                  </Link>

                  <button
                    onClick={(e) => handleWhatsAppOrder(e, quickViewProduct)}
                    className="flex-1 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
