import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Eye, ArrowUpRight, X, Sparkles } from 'lucide-react';
import { getProducts } from '../../data/products';
import { buildProductWhatsAppUrl, getSiteConfig } from '../../config/siteConfig';

export default function BestsellingModels() {
  const products = getProducts().filter(p => p.featured).slice(0, 20);
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
    <section className="pt-8 sm:pt-10 pb-8 sm:pb-9 bg-white text-charcoal-900 border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header - Centered */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 pb-5 sm:pb-6 border-b border-subtle">
          {/* Centered Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-charcoal-900">
            Featured & <span className="font-cormorant italic font-normal text-gold-600">Bestselling Models</span>
          </h2>

          {/* Decorative Gold Accent Flourish */}
          <div className="flex items-center justify-center gap-3 pt-0.5">
            <span className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-gold-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-gold-400" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-card border border-subtle bg-sand-50/40 hover:bg-white hover:border-gold-300 hover:shadow-medium transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Product Image Area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand-100">
                <Link to={`/products/${product.slug}`} className="block w-full h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover ${product.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-700 ease-out`}
                    loading="lazy"
                  />
                </Link>

                {/* Tag Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-charcoal-950/90 text-gold-300 border border-gold-400/30 backdrop-blur-md shadow-xs">
                    {product.tag}
                  </span>
                </div>

                {/* Quick View Button */}
                <button
                  onClick={() => setQuickViewProduct(product)}
                  className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 hover:bg-charcoal-900 hover:text-white text-charcoal-800 shadow-sm backdrop-blur-md transition-all cursor-pointer"
                  title="Quick View"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Product Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-charcoal-500 font-mono">
                    <span className="line-clamp-1">{product.category}</span>
                    <span className="text-emerald-800 font-medium whitespace-nowrap ml-2">{product.availability}</span>
                  </div>

                  <Link to={`/products/${product.slug}`} className="block">
                    <h3 className="font-serif text-base font-bold text-charcoal-900 group-hover:text-gold-600 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Pricing & Actions */}
                <div className="pt-3 border-t border-subtle space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      {siteConfig.showPrices ? (
                        <>
                          <span className="font-serif text-lg font-bold text-charcoal-900">
                            {product.priceDisplay || `₹${product.price.toLocaleString('en-IN')}`}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-charcoal-400 line-through ml-2">
                              ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="font-serif text-sm font-bold text-charcoal-800">
                          Pricing on request
                        </span>
                      )}
                    </div>

                    <span className="text-[10px] text-gold-700 bg-gold-50 px-2 py-0.5 rounded font-mono font-medium border border-gold-200">
                      Customizable
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to={`/products/${product.slug}`}
                      className="py-2 rounded-lg border border-subtle hover:bg-sand-100 text-charcoal-800 text-center text-xs font-semibold transition-colors"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={(e) => handleWhatsAppOrder(e, product)}
                      className="py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Products Link */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sand-100 hover:bg-gold-500 text-charcoal-900 hover:text-navy-950 font-serif font-bold text-xs uppercase tracking-wider border border-gold-300 transition-all duration-300 shadow-xs hover:shadow-md"
          >
            <span>Explore Complete Collection ({getProducts().length}+ Models)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/70 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-card bg-white border border-subtle shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 animate-fade-in">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-charcoal-400 hover:text-charcoal-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="md:w-1/2 aspect-square rounded-lg overflow-hidden bg-sand-100">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className={`w-full h-full object-cover ${quickViewProduct.imagePosition || 'object-center'}`}
              />
            </div>

            <div className="md:w-1/2 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-gold-600 uppercase font-semibold">
                  {quickViewProduct.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal-900">
                  {quickViewProduct.name}
                </h3>
                {siteConfig.showPrices ? (
                  <div className="font-serif text-lg font-bold text-charcoal-900">
                    {quickViewProduct.priceDisplay || `₹${quickViewProduct.price.toLocaleString('en-IN')}`}
                  </div>
                ) : (
                  <div className="font-serif text-base font-bold text-charcoal-900">
                    Pricing on request
                  </div>
                )}
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {quickViewProduct.shortDesc}
                </p>
                <div className="text-xs text-charcoal-700 space-y-1 font-mono pt-1">
                  <p>• Dimensions: {quickViewProduct.dimensions}</p>
                  <p>• Craft Time: {quickViewProduct.craftTime}</p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  to={`/products/${quickViewProduct.slug}`}
                  onClick={() => setQuickViewProduct(null)}
                  className="w-full py-2.5 rounded-lg bg-emerald-850 text-white font-semibold text-xs text-center block uppercase tracking-wider"
                >
                  Full Specifications & Order Options
                </Link>
                <button
                  onClick={(e) => handleWhatsAppOrder(e, quickViewProduct)}
                  className="w-full py-2.5 rounded-lg bg-[#25D366] text-white font-semibold text-xs flex items-center justify-center gap-1.5 uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
