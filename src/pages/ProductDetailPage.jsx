import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Share2, 
  Check, 
  MessageCircle, 
  ShoppingBag, 
  Sparkles, 
  Ruler, 
  Layers, 
  Flame, 
  Clock, 
  PackageCheck, 
  Maximize2,
  ShieldCheck,
  Video,
  Plus,
  Minus,
  Play,
  X,
  ExternalLink
} from 'lucide-react';
import { YoutubeIcon } from '../components/SocialIcons';
import { getProductBySlug, getProducts } from '../data/products';
import { buildProductWhatsAppUrl, buildWhatsAppUrl, getSiteConfig, toYouTubeEmbedUrl, toYouTubeWatchUrl } from '../config/siteConfig';
import { useCart } from '../context/CartContext';
import LightboxModal from '../components/LightboxModal';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = getProductBySlug(slug);
  const allProducts = getProducts();

  const [selectedImage, setSelectedImage] = useState(product?.image || '');
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [selectedLightingIndex, setSelectedLightingIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [addedToast, setAddedToast] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [siteConfig, setSiteConfig] = useState(getSiteConfig());

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleConfigChange = () => setSiteConfig(getSiteConfig());
    window.addEventListener('site-config-updated', handleConfigChange);
    if (product) {
      setSelectedImage(product.image);
      setSelectedSizeIndex(0);
      setSelectedLightingIndex(0);
      setQuantity(1);
    }
    return () => window.removeEventListener('site-config-updated', handleConfigChange);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen pt-36 pb-20 flex flex-col items-center justify-center text-center px-4 bg-sand-100 text-charcoal-900">
        <h2 className="font-serif text-3xl font-bold mb-3">Model Not Found</h2>
        <p className="text-charcoal-600 text-sm max-w-md mb-6">
          The requested creation does not exist or has been relocated in our digital catalogue.
        </p>
        <Link
          to="/products"
          className="px-6 py-2.5 rounded-full bg-charcoal-900 text-white font-semibold text-xs tracking-wider uppercase"
        >
          Return to Catalogue
        </Link>
      </div>
    );
  }

  // Calculate dynamic configured price
  const baseSizePrice = (product.sizeOptions && product.sizeOptions[selectedSizeIndex]) 
    ? product.sizeOptions[selectedSizeIndex].price 
    : (product.price || 0);

  const lightingPrice = (product.lightingOptions && product.lightingOptions[selectedLightingIndex])
    ? product.lightingOptions[selectedLightingIndex].price
    : 0;

  const unitPrice = baseSizePrice + lightingPrice;
  const totalPrice = unitPrice * quantity;

  const selectedSizeObj = product.sizeOptions ? product.sizeOptions[selectedSizeIndex] : null;
  const selectedLightingObj = product.lightingOptions ? product.lightingOptions[selectedLightingIndex] : null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddToCart = () => {
    addToCart(product, {
      selectedSize: selectedSizeObj ? selectedSizeObj.name : "Standard",
      selectedLighting: selectedLightingObj ? selectedLightingObj.name : "Standard",
      unitPrice,
      quantity
    });
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  const handleWhatsAppOrder = () => {
    const url = buildProductWhatsAppUrl({
      productName: product.name,
      priceDisplay: `₹${totalPrice.toLocaleString('en-IN')}`,
      selectedSize: `${selectedSizeObj ? selectedSizeObj.name : "Standard"} (${quantity} Qty)`,
      productUrl: window.location.href
    });
    window.open(url, '_blank');
  };

  const handleAskQuestion = () => {
    const msg = `Hello Being Samsher Crafting! I have a question regarding the ${product.name} (SKU: ${product.sku || 'N/A'}).`;
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  const relatedProducts = allProducts
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.image];

  return (
    <div className="min-h-screen pt-28 pb-24 bg-sand-100 text-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="py-4 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
          <div className="flex items-center gap-2 text-charcoal-500">
            <Link to="/" className="hover:text-charcoal-900">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-charcoal-900">Collections</Link>
            <span>/</span>
            <span className="text-charcoal-900 font-semibold line-clamp-1">{product.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-subtle bg-white hover:bg-sand-200 text-charcoal-700 text-xs transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-850" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-subtle bg-white hover:bg-sand-200 text-charcoal-700 text-xs transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          </div>
        </div>

        {/* Main Product Layout */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Product Gallery */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="relative rounded-card overflow-hidden bg-white border border-subtle aspect-[4/3] shadow-subtle group">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Fullscreen Zoom */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute bottom-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-charcoal-900 hover:text-white text-charcoal-800 shadow-md backdrop-blur-md transition-all cursor-pointer"
                title="Fullscreen Lightbox"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Watch Video Badge Button */}
              {product.videoUrl && (
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold backdrop-blur-md transition-all cursor-pointer shadow-md"
                  title="Watch Crafting Video"
                >
                  <Play className="w-3.5 h-3.5 fill-white text-white" />
                  <span>Watch Video</span>
                </button>
              )}

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-charcoal-950/85 text-white backdrop-blur-md">
                  {product.tag}
                </span>
              </div>
            </div>

            {/* Thumbnail Carousel */}
            {galleryImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-24 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      selectedImage === img ? 'border-charcoal-900 scale-105' : 'border-subtle opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Watch Crafting Video Button */}
            {product.videoUrl && (
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full py-3.5 px-4 rounded-xl bg-charcoal-900 hover:bg-charcoal-950 text-white border border-gold-500/40 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md transition-all hover:scale-[1.01] cursor-pointer"
              >
                <YoutubeIcon className="w-4 h-4 text-red-500" />
                <span>Watch Workshop Crafting & Illumination Video</span>
                <Play className="w-3.5 h-3.5 text-gold-400 fill-gold-400 ml-1" />
              </button>
            )}

            {/* Packaging and Production Assurance Banner */}
            <div className="p-5 rounded-card bg-white border border-subtle space-y-2 text-xs font-sans">
              <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-900">
                <ShieldCheck className="w-4 h-4 text-emerald-850 shrink-0" />
                <span>Craftsmanship & Packaging Standards</span>
              </div>
              <p className="text-charcoal-600 leading-relaxed">
                Handcrafted upon order in Jharkhand. Shipped in rigid double-walled wooden crates with shockproof custom foam molds. Safe transit feasibility confirmed for all Indian states.
              </p>
            </div>

          </div>

          {/* Right Column: Pricing, Configuration & Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-charcoal-500 font-mono">
                <span>{product.category}</span>
                <span>SKU: {product.sku || 'BSC-MODEL'}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 pt-1">
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-50 text-emerald-850 border border-emerald-200">
                  {product.availability}
                </span>
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-sand-200 text-charcoal-800">
                  All India Delivery
                </span>
              </div>
            </div>

            {/* Dynamic Price Display */}
            {siteConfig.showPrices ? (
              <div className="p-4 rounded-xl bg-white border border-subtle flex items-baseline justify-between">
                <div>
                  <span className="text-[11px] text-charcoal-500 uppercase tracking-wider block font-mono">
                    Calculated Price (INR)
                  </span>
                  <span className="font-serif text-3xl font-bold text-charcoal-900">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                  {quantity > 1 && (
                    <span className="text-xs text-charcoal-500 block">
                      (₹{unitPrice.toLocaleString('en-IN')} per unit × {quantity})
                    </span>
                  )}
                </div>

                <div className="text-right text-[11px] text-charcoal-500 font-sans">
                  <span>Shipping calculated</span> <br />
                  <span>at dispatch confirmation</span>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-white border border-subtle flex items-baseline justify-between">
                <div>
                  <span className="text-[11px] text-charcoal-500 uppercase tracking-wider block font-mono">
                    Pricing & Quotation
                  </span>
                  <span className="font-serif text-2xl font-bold text-charcoal-900">
                    Quote on Request
                  </span>
                  <span className="text-xs text-charcoal-500 block mt-0.5">
                    Handcrafted according to your selected scale, lighting & delivery location
                  </span>
                </div>

                <div className="text-right text-[11px] text-emerald-800 font-sans font-medium">
                  <span>Free Quotation</span> <br />
                  <span>via WhatsApp</span>
                </div>
              </div>
            )}

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans">
              {product.fullDesc || product.shortDesc}
            </p>

            {/* CONFIGURATION: Size Selector */}
            {product.sizeOptions && product.sizeOptions.length > 0 && (
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-charcoal-900 uppercase tracking-wider font-mono">
                  Select Dimension / Scale:
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {product.sizeOptions.map((opt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`p-3 rounded-lg border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${
                        selectedSizeIndex === idx
                          ? 'border-charcoal-900 bg-sand-50 font-semibold text-charcoal-900 shadow-sm'
                          : 'border-subtle bg-white text-charcoal-700 hover:bg-sand-50'
                      }`}
                    >
                      <div>
                        <span className="block font-medium">{opt.name}</span>
                        <span className="text-[11px] text-charcoal-500 font-normal">Dimensions: {opt.dimensions}</span>
                      </div>
                      {siteConfig.showPrices ? (
                        <span className="font-serif font-bold text-charcoal-900">
                          ₹{opt.price.toLocaleString('en-IN')}
                        </span>
                      ) : (
                        <span className="text-[11px] text-charcoal-600 font-medium font-mono">
                          Scale Option
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CONFIGURATION: Lighting Options */}
            {product.lightingOptions && product.lightingOptions.length > 0 && (
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-charcoal-900 uppercase tracking-wider font-mono">
                  Lighting Setup:
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {product.lightingOptions.map((opt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedLightingIndex(idx)}
                      className={`p-2.5 rounded-lg border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${
                        selectedLightingIndex === idx
                          ? 'border-charcoal-900 bg-sand-50 font-semibold text-charcoal-900 shadow-sm'
                          : 'border-subtle bg-white text-charcoal-700 hover:bg-sand-50'
                      }`}
                    >
                      <span>{opt.name}</span>
                      <span className="font-mono text-charcoal-600">
                        {siteConfig.showPrices
                          ? (opt.price > 0 ? `+₹${opt.price.toLocaleString('en-IN')}` : 'Included')
                          : (opt.price > 0 ? 'Custom Setup' : 'Standard')}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-1">
              <span className="text-xs font-semibold text-charcoal-900 uppercase tracking-wider font-mono">
                Quantity:
              </span>
              <div className="flex items-center border border-subtle rounded-lg bg-white px-2 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 text-charcoal-600 hover:text-charcoal-900"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-xs font-bold text-charcoal-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 text-charcoal-600 hover:text-charcoal-900"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Action Buttons: Add to Cart & WhatsApp Order */}
            <div className="space-y-2.5 pt-3">
              <button
                onClick={handleAddToCart}
                className="w-full py-4 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-gold-400" />
                <span>Add to Selection Bag {siteConfig.showPrices ? `(₹${totalPrice.toLocaleString('en-IN')})` : ''}</span>
              </button>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{siteConfig.showPrices ? "Order via WhatsApp Now" : "Request Quote via WhatsApp"}</span>
              </button>

              <button
                onClick={handleAskQuestion}
                className="w-full py-2.5 rounded-full border border-subtle text-charcoal-700 hover:bg-white text-xs font-semibold transition-colors"
              >
                Ask a Question About Customization
              </button>
            </div>

            {/* Toast Notice */}
            {addedToast && (
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-850 text-xs font-medium text-center animate-fade-in">
                ✓ Added to your selection bag. Open your bag anytime at top right!
              </div>
            )}

            {/* Specifications Details Accordion/Matrix */}
            <div className="pt-4 border-t border-subtle space-y-3">
              <h3 className="font-serif text-sm font-bold text-charcoal-900 uppercase tracking-wider font-mono">
                Model Specifications
              </h3>
              
              <div className="space-y-2 text-xs text-charcoal-700 font-sans">
                {product.height && (
                  <div className="flex justify-between py-1 border-b border-subtle/50">
                    <span className="text-charcoal-500">Height:</span>
                    <span className="font-medium text-charcoal-900">{product.height}</span>
                  </div>
                )}
                {product.width && (
                  <div className="flex justify-between py-1 border-b border-subtle/50">
                    <span className="text-charcoal-500">Base Width:</span>
                    <span className="font-medium text-charcoal-900">{product.width}</span>
                  </div>
                )}
                {product.material && (
                  <div className="flex justify-between py-1 border-b border-subtle/50">
                    <span className="text-charcoal-500">Materials:</span>
                    <span className="font-medium text-charcoal-900">{product.material}</span>
                  </div>
                )}
                {product.colorFinish && (
                  <div className="flex justify-between py-1 border-b border-subtle/50">
                    <span className="text-charcoal-500">Finish & Leafing:</span>
                    <span className="font-medium text-charcoal-900">{product.colorFinish}</span>
                  </div>
                )}
                {product.craftTime && (
                  <div className="flex justify-between py-1 border-b border-subtle/50">
                    <span className="text-charcoal-500">Production Time:</span>
                    <span className="font-medium text-charcoal-900">{product.craftTime}</span>
                  </div>
                )}
                {product.packaging && (
                  <div className="flex justify-between py-1 border-b border-subtle/50">
                    <span className="text-charcoal-500">Packaging:</span>
                    <span className="font-medium text-charcoal-900">{product.packaging}</span>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Related Creations */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-subtle space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold-600 font-semibold">
                  Complementary Creations
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                  Related in {product.category}
                </h3>
              </div>
              <Link to="/products" className="text-xs font-semibold text-charcoal-800 hover:text-gold-600">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map(rel => (
                <Link
                  key={rel.id}
                  to={`/products/${rel.slug}`}
                  className="group rounded-card overflow-hidden bg-white border border-subtle p-4 hover:shadow-medium transition-all block"
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-sand-100 mb-3">
                    <img src={rel.image} alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-charcoal-900 group-hover:text-gold-600 transition-colors line-clamp-1">
                    {rel.name}
                  </h4>
                  <p className="font-serif text-xs font-bold text-charcoal-700 mt-1">
                    {siteConfig.showPrices ? (rel.priceDisplay || `₹${rel.price.toLocaleString('en-IN')}`) : "Pricing on request"}
                  </p>
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
            image: selectedImage,
            title: product.name,
            category: product.category,
            caption: product.fullDesc,
            dimensions: product.dimensions
          }}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      {/* Video Modal Player */}
      {isVideoModalOpen && product.videoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl rounded-card bg-charcoal-900 border border-gold-500/30 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-charcoal-950">
              <div className="flex items-center gap-2">
                <YoutubeIcon className="w-4 h-4 text-red-500" />
                <h3 className="font-serif text-sm font-bold text-white">
                  {product.name} — Crafting & Illumination
                </h3>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1 rounded-lg text-sand-300 hover:text-white"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full bg-charcoal-950">
              <iframe
                src={toYouTubeEmbedUrl(product.videoUrl, { autoplay: true, mute: false, controls: true })}
                title={`${product.name} Crafting Video`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="p-4 text-xs text-sand-200/80 bg-charcoal-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span>Handcrafted in Jharkhand by Master Craftsman Samsher Alam.</span>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={toYouTubeWatchUrl(product.videoUrl)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium text-[11px] transition-colors"
                >
                  <YoutubeIcon className="w-3 h-3" />
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
