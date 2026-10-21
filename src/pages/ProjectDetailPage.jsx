import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  MessageCircle, 
  Share2, 
  Check, 
  Ruler, 
  Layers, 
  Flame, 
  Clock, 
  PackageCheck, 
  ArrowLeft, 
  ArrowUpRight,
  ShieldCheck,
  Maximize2,
  Video
} from 'lucide-react';
import { getProductBySlug, getProducts } from '../data/products';
import { buildWhatsAppUrl, getSiteConfig } from '../config/siteConfig';
import LightboxModal from '../components/LightboxModal';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [siteConfig, setSiteConfig] = useState(getSiteConfig());

  const product = getProductBySlug(slug);
  const allProducts = getProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleUpdate = () => setSiteConfig(getSiteConfig());
    window.addEventListener('site-config-updated', handleUpdate);
    return () => window.removeEventListener('site-config-updated', handleUpdate);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen pt-36 pb-20 flex flex-col items-center justify-center text-center px-4 bg-deep-black text-warm-white">
        <h2 className="font-serif text-3xl font-bold mb-3">Creation Not Found</h2>
        <p className="text-warm-white/70 text-sm max-w-md mb-6">
          The requested project model could not be found or has been updated in our digital showroom.
        </p>
        <Link
          to="/creations"
          className="px-6 py-2.5 rounded-full bg-royal-emerald text-warm-white font-semibold text-xs tracking-wider uppercase"
        >
          Return to Catalogue
        </Link>
      </div>
    );
  }

  // Related products from same category or tag
  const relatedProducts = allProducts
    .filter(p => p.id !== product.id && (p.category === product.category || p.tag === product.tag))
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppEnquiry = () => {
    const msg = `Hello Being Samsher Crafting! I am interested in your ${product.name}. Please share customization options, dimensions, pricing, and delivery details.`;
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-deep-black text-warm-white">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-royal-emerald/20 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs & Back Link */}
        <div className="py-4 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-gold-400 font-medium">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/creations" className="hover:underline">Creations</Link>
            <span>/</span>
            <span className="text-warm-white/70 line-clamp-1">{product.name}</span>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-charcoal-900 border border-gold-500/25 text-warm-white hover:text-gold-300 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        </div>

        {/* Project Hero Layout */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Cinematic Image Showcase & Lightbox Zoom */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-gold-400/30 via-royal-emerald/25 to-charcoal-900 border border-gold-400/40 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-deep-black group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-80" />

                {/* Zoom Trigger Button */}
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute bottom-4 right-4 px-3.5 py-2 rounded-full bg-deep-black/90 hover:bg-gold-500 hover:text-deep-black text-gold-300 border border-gold-500/40 flex items-center gap-1.5 text-xs font-semibold backdrop-blur-md transition-all shadow-xl cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Full Screen</span>
                </button>

                {/* Tag Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-deep-black/90 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                    {product.tag}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Share Link Toolbar */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-charcoal-900/80 border border-gold-500/20 text-xs text-warm-white/80">
              <span className="font-mono text-[11px] text-gold-400 line-clamp-1">
                Unique URL: /creations/{product.slug}
              </span>

              <button
                onClick={handleCopyLink}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-charcoal-800 hover:bg-charcoal-700 text-gold-300 border border-gold-500/30'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied!' : 'Copy Share Link'}</span>
              </button>
            </div>

            {/* Optional Video Preview if configured */}
            {product.videoUrl && (
              <div className="p-4 rounded-2xl bg-charcoal-900/80 border border-gold-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-gold-300 uppercase tracking-wider">
                  <Video className="w-4 h-4 text-emerald-400" />
                  <span>Crafting Video Clip Available</span>
                </div>
                <p className="text-xs text-warm-white/70">
                  Ask us on WhatsApp for high-definition 360-degree video clips and illumination demonstrations of this model.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Full Specifications, Description & Order Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-royal-emerald/30 border border-gold-500/30 text-emerald-300 inline-block">
                {product.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-warm-white tracking-tight">
                {product.name}
              </h1>
              <p className="text-gold-300 font-cormorant italic text-lg font-medium">
                {product.modelType}
              </p>
            </div>

            {/* Price / Quote Status (Strictly No Fabricated Prices) */}
            <div className="p-4 rounded-2xl bg-charcoal-900 border border-gold-500/30 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-warm-white/60 block font-mono">
                  Pricing
                </span>
                <span className="font-serif text-2xl font-bold text-white">
                  {siteConfig.showPrices ? (product.priceDisplay || "Request a Quote") : "Pricing on request"}
                </span>
              </div>
              <span className="text-xs text-warm-white/70 font-sans text-right max-w-[160px]">
                Customized according to size, tiers & materials
              </span>
            </div>

            {/* Full Authentic Description */}
            <div className="space-y-3 text-xs sm:text-sm text-warm-white/80 font-sans leading-relaxed">
              <p>{product.fullDesc || product.shortDesc}</p>
            </div>

            {/* Specifications Matrix Table */}
            <div className="rounded-2xl bg-charcoal-900/90 border border-gold-500/20 p-5 space-y-3.5 text-xs">
              <h3 className="font-serif text-sm font-bold text-warm-white uppercase tracking-wider text-gold-400 border-b border-charcoal-800 pb-2">
                Craft Specifications
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Ruler className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-warm-white block">Dimensions & Scale</span>
                    <span className="text-warm-white/75">{product.dimensions}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-warm-white block">Craft Materials</span>
                    <span className="text-warm-white/75">{product.materials}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Flame className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-warm-white block">Lighting Setup</span>
                    <span className="text-warm-white/75">{product.lighting}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-warm-white block">Handcrafting Timeline</span>
                    <span className="text-warm-white/75">{product.craftTime}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PackageCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-warm-white block">Packaging & Transit</span>
                    <span className="text-warm-white/75">{product.packaging}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons: Contextual WhatsApp Enquiry & Custom Order Form */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-700 via-royal-emerald to-emerald-800 hover:from-emerald-600 hover:to-royal-emerald text-warm-white border border-gold-400/40 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-gold-sm hover:shadow-gold-md transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300" />
                <span>Enquire on WhatsApp</span>
              </button>

              <Link
                to={`/custom-order?model=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}`}
                className="w-full py-3.5 rounded-full bg-charcoal-900 hover:bg-charcoal-850 text-gold-300 hover:text-white border border-gold-500/35 font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Customize This Model Form</span>
              </Link>
            </div>

            {/* Feasibility Notice */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-charcoal-900/60 border border-gold-500/20 text-[11px] text-warm-white/70">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>All India Delivery Available (Confirmed per model dimensions & route)</span>
            </div>

          </div>

        </div>

        {/* Related Creations Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-gold-500/20 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold text-warm-white">
                  Related <span className="text-gold-gradient italic font-cormorant">Creations</span>
                </h3>
                <p className="text-xs text-warm-white/70 mt-1">
                  Discover more handcrafted models in our portfolio.
                </p>
              </div>

              <Link
                to="/creations"
                className="text-xs font-semibold text-gold-300 hover:text-gold-200 inline-flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/creations/${rel.slug}`}
                  className="group rounded-2xl bg-charcoal-900/80 border border-gold-500/20 hover:border-gold-400/50 p-4 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-deep-black mb-3">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-serif text-base font-bold text-warm-white group-hover:text-gold-200 transition-colors line-clamp-1">
                    {rel.name}
                  </h4>
                  <p className="text-[11px] text-warm-white/70 line-clamp-1 mt-1">
                    {rel.modelType}
                  </p>
                  <div className="pt-3 mt-3 border-t border-charcoal-800 flex items-center justify-between text-xs text-gold-400">
                    <span>View Model</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <LightboxModal
          item={{
            image: product.image,
            title: product.name,
            category: product.category,
            caption: product.fullDesc || product.shortDesc,
            dimensions: product.dimensions,
            location: "Studio Showcase"
          }}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
