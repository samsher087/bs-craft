import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, MessageCircle, Ruler, Layers, Flame, ShieldCheck } from 'lucide-react';
import { getProductBySlug } from '../../data/products';
import { buildProductWhatsAppUrl } from '../../config/siteConfig';

export default function FeaturedProjectStory() {
  const product = getProductBySlug('royal-blue-dome') || {
    name: "Royal Blue Dome with Golden Detailing",
    slug: "royal-blue-dome",
    category: "Gumbad",
    priceDisplay: "Starting at ₹22,500",
    dimensions: "Base Diameter: 3.5 ft | Height: 4.5 ft",
    materials: "Reinforced composite thermocol, metallic gold leafing, mount board",
    lighting: "Dual-circuit warm golden backlight with rim illumination",
    image: "/assets/images/royal_blue_dome.jpg",
    fullDesc: "A masterpiece of royal color contrast and intricate detailing. Features a deep royal blue finish adorned with handcrafted golden floral scrollwork, an arched arcade base with micro-jali screens, and a multi-stage sculpted golden kalas pinnacle."
  };

  const [activeImage, setActiveImage] = useState(product.image);

  const galleryThumbs = [
    product.image,
    "/assets/images/grand_gumbad_night.jpg",
    "/assets/images/workshop_jali_cutting.jpg"
  ];

  const handleWhatsAppEnquiry = () => {
    const url = buildProductWhatsAppUrl({
      productName: product.name,
      priceDisplay: product.priceDisplay,
      selectedSize: "Standard 3.5 ft Base",
      productUrl: window.location.origin + `/products/${product.slug}`
    });
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 sm:py-28 bg-sand-100 text-charcoal-900 border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 pb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold-600 font-semibold">
            In-Depth Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-charcoal-900">
            Featured <span className="font-cormorant italic font-normal text-gold-600">Project Story</span>
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 font-sans">
            A closer look into the architectural proportions, gilded leafing, and illumination of our recent commission.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Gallery View */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-card overflow-hidden bg-charcoal-900 aspect-[4/3] border border-subtle shadow-medium">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-charcoal-950/80 text-gold-300 backdrop-blur-md">
                  Contemporary Masterpiece
                </span>
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-3">
              {galleryThumbs.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(thumb)}
                  className={`w-24 h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === thumb ? 'border-gold-500 scale-105' : 'border-subtle opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={thumb} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-gold-700 font-semibold uppercase tracking-wider">
                {product.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                {product.name}
              </h3>
              <div className="font-serif text-xl font-bold text-charcoal-900">
                {product.priceDisplay}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans">
              {product.fullDesc}
            </p>

            {/* Specifications Matrix */}
            <div className="p-4 rounded-xl bg-white border border-subtle space-y-2.5 text-xs font-sans">
              <div className="flex items-start gap-2.5">
                <Ruler className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-charcoal-900">Dimensions: </span>
                  <span className="text-charcoal-600">{product.dimensions}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-emerald-850 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-charcoal-900">Materials: </span>
                  <span className="text-charcoal-600">{product.materials}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Flame className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-charcoal-900">Lighting: </span>
                  <span className="text-charcoal-600">{product.lighting}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppEnquiry}
                className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </button>

              <Link
                to={`/products/${product.slug}`}
                className="px-6 py-3 rounded-full border border-charcoal-800 text-charcoal-900 hover:bg-white font-semibold text-xs uppercase tracking-wider text-center"
              >
                View Full Product Page
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
