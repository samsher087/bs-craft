import React from 'react';
import { X, Sparkles, MessageCircle, Ruler, Layers, Lightbulb, Clock, PackageCheck, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { getSiteConfig } from '../config/siteConfig';

export default function ProductModal({ product, onClose, onOpenCustomOrder }) {
  if (!product) return null;

  const handleWhatsAppEnquiry = () => {
    const config = getSiteConfig();
    const text = encodeURIComponent(
      `Assalamu Alaikum / Hello Being Samsher Crafting!\n\n` +
      `I am interested in ordering/inquiring about this design:\n` +
      `• Design Name: ${product.name}\n` +
      `• Category: ${product.category} (${product.subCategory || ''})\n` +
      `• Dimensions: ${product.dimensions}\n` +
      `• Lighting: ${product.lighting || 'Default Warm LED'}\n\n` +
      `Please let me know the availability, pricing quotation, and delivery timeline to my city.\n` +
      `Tagline: Har Creation Mein Mehnat Aur Perfection!`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark Blur Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-gradient-to-b from-navy-900 to-navy-950 border border-gold-400/40 shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-navy-950/90 border border-gold-500/40 text-gold-300 hover:text-white flex items-center justify-center transition-all shadow-lg hover:rotate-90"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left Column: Big Product Image */}
          <div className="md:col-span-6 relative aspect-square md:aspect-auto bg-navy-950">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80 md:hidden" />

            {/* Tag Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-navy-950/90 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                {product.tag || 'Masterpiece'}
              </span>
            </div>

            {/* Rating */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-navy-900/90 px-3 py-1 rounded-full border border-gold-500/30 text-gold-300 text-xs">
              <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              <span className="font-bold">{product.rating || '5.0'}</span>
              <span className="text-ivory-400/70">({product.reviewsCount || '30+'} Reviews)</span>
            </div>
          </div>

          {/* Right Column: Specifications & Commission CTA */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 max-h-[85vh] overflow-y-auto">
            
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  {product.category} • {product.subCategory}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50 mt-1">
                  {product.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-ivory-200/85 leading-relaxed font-sans">
                {product.fullDesc || product.shortDesc}
              </p>

              {/* Specifications List */}
              <div className="pt-2 space-y-3 border-t border-navy-800">
                
                {product.dimensions && (
                  <div className="flex items-start gap-3 text-xs">
                    <Ruler className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gold-300/80 font-medium block">Dimensions:</span>
                      <span className="text-ivory-100">{product.dimensions}</span>
                    </div>
                  </div>
                )}

                {product.materials && (
                  <div className="flex items-start gap-3 text-xs">
                    <Layers className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gold-300/80 font-medium block">Materials & Finishing:</span>
                      <span className="text-ivory-100">{product.materials}</span>
                    </div>
                  </div>
                )}

                {product.lighting && (
                  <div className="flex items-start gap-3 text-xs">
                    <Lightbulb className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gold-300/80 font-medium block">Lighting Configuration:</span>
                      <span className="text-ivory-100">{product.lighting}</span>
                    </div>
                  </div>
                )}

                {product.craftTime && (
                  <div className="flex items-start gap-3 text-xs">
                    <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gold-300/80 font-medium block">Crafting Time:</span>
                      <span className="text-ivory-100">{product.craftTime}</span>
                    </div>
                  </div>
                )}

                {product.packaging && (
                  <div className="flex items-start gap-3 text-xs">
                    <PackageCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gold-300/80 font-medium block">Transit Protection:</span>
                      <span className="text-ivory-100">{product.packaging}</span>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-navy-800 space-y-3">
              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire This Design on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenCustomOrder();
                }}
                className="w-full py-3 rounded-full bg-navy-800 hover:bg-gold-500 text-gold-300 hover:text-navy-950 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Request Custom Dimensions / Modifications
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
