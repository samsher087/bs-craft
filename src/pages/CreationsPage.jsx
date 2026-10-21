import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Sparkles, 
  MessageCircle, 
  ArrowUpRight, 
  Eye, 
  Maximize2,
  X
} from 'lucide-react';
import { getProducts, categoriesList } from '../data/products';
import { buildWhatsAppUrl, getSiteConfig } from '../config/siteConfig';
import LightboxModal from '../components/LightboxModal';

export default function CreationsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [products, setProducts] = useState(getProducts());
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModelType, setSelectedModelType] = useState('All');
  const [lightboxData, setLightboxData] = useState(null);
  const [siteConfig, setSiteConfig] = useState(getSiteConfig());

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleUpdate = () => {
      setProducts(getProducts());
      setSiteConfig(getSiteConfig());
    };
    window.addEventListener('products-updated', handleUpdate);
    window.addEventListener('site-config-updated', handleUpdate);
    return () => {
      window.removeEventListener('products-updated', handleUpdate);
      window.removeEventListener('site-config-updated', handleUpdate);
    };
  }, []);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  // Extract unique model types for filter
  const modelTypes = ['All', ...new Set(products.map(p => p.modelType).filter(Boolean))];

  // Filter products based on category, search, and model type
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedModelType === 'All' || product.modelType === selectedModelType;
    return matchesCategory && matchesSearch && matchesType;
  });

  const handleCategorySelect = (catName) => {
    setSelectedCategory(catName);
    if (catName === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catName);
    }
    setSearchParams(searchParams);
  };

  const handleWhatsAppEnquiry = (e, product) => {
    e.stopPropagation();
    const msg = `Hello Being Samsher Crafting! I am interested in your ${product.name}. Please share customization options, dimensions, pricing, and delivery details.`;
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  const handleOpenLightbox = (product, index) => {
    setLightboxData({
      item: {
        image: product.image,
        title: product.name,
        category: product.category,
        caption: product.shortDesc,
        dimensions: product.dimensions,
        location: "Crafted in Jharkhand"
      },
      items: filteredProducts.map(p => ({
        image: p.image,
        title: p.name,
        category: p.category,
        caption: p.shortDesc,
        dimensions: p.dimensions,
        location: "Crafted in Jharkhand"
      })),
      currentIndex: index
    });
  };

  const handleLightboxIndexChange = (newIdx) => {
    if (lightboxData && lightboxData.items) {
      setLightboxData({
        ...lightboxData,
        currentIndex: newIdx,
        item: lightboxData.items[newIdx]
      });
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-deep-black text-warm-white">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-10 w-[550px] h-[550px] bg-royal-emerald/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumbs & Title */}
        <div className="py-6 space-y-4">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-medium">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-warm-white/70">Our Creations</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gold-500/20">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900 border border-gold-400/35 text-gold-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Primary Digital Catalogue</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-warm-white tracking-tight">
                Our Handcrafted <span className="text-gold-gradient italic font-cormorant">Creations</span>
              </h1>
              <p className="text-warm-white/75 text-sm sm:text-base max-w-2xl font-sans">
                Browse our completed architectural models, Tajiyas, Gumbads, and fine jali panels. Each creation is custom made with devotion and precision.
              </p>
            </div>

            {/* Total count badge */}
            <div className="text-xs text-gold-300/80 bg-charcoal-900 px-4 py-2 rounded-full border border-gold-500/30">
              Showing <span className="text-warm-white font-bold">{filteredProducts.length}</span> creations
            </div>
          </div>
        </div>

        {/* Filter & Live Search Toolbar */}
        <div className="mt-6 p-4 sm:p-6 rounded-2xl bg-charcoal-900/90 border border-gold-500/20 shadow-xl space-y-4">
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-400" />
              <input
                type="text"
                placeholder="Search by project name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-deep-black/90 border border-gold-500/30 focus:border-gold-400 text-warm-white text-xs sm:text-sm placeholder:text-warm-white/40 focus:outline-none focus:ring-1 focus:ring-gold-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-warm-white/50 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Model Type Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-xs text-warm-white/70 whitespace-nowrap flex items-center gap-1 font-medium">
                <Filter className="w-3.5 h-3.5 text-gold-400" />
                Model Type:
              </span>
              <select
                value={selectedModelType}
                onChange={(e) => setSelectedModelType(e.target.value)}
                className="px-3 py-2 rounded-xl bg-deep-black border border-gold-500/30 text-warm-white text-xs focus:outline-none focus:border-gold-400 cursor-pointer"
              >
                {modelTypes.map((type) => (
                  <option key={type} value={type} className="bg-charcoal-900 text-warm-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="pt-2 flex flex-wrap gap-2">
            <button
              onClick={() => handleCategorySelect('All')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === 'All'
                  ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-deep-black shadow-gold-sm font-bold'
                  : 'bg-deep-black text-warm-white/80 hover:text-gold-200 border border-gold-500/20'
              }`}
            >
              All Categories
            </button>
            {categoriesList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.name)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  selectedCategory === cat.name
                    ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-deep-black shadow-gold-sm font-bold'
                    : 'bg-deep-black text-warm-white/80 hover:text-gold-200 border border-gold-500/20'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

        </div>

        {/* Gallery Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 space-y-4">
            <div className="w-16 h-16 rounded-full bg-charcoal-900 border border-gold-500/30 flex items-center justify-center mx-auto text-gold-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-warm-white">No creations found matching your filter</h3>
            <p className="text-xs text-warm-white/70">Try adjusting your search query or reset the category filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
                setSelectedModelType('All');
              }}
              className="px-5 py-2 rounded-full bg-royal-emerald text-warm-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative rounded-2xl bg-charcoal-900/90 border border-gold-500/20 hover:border-gold-400/60 shadow-xl hover:shadow-gold-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-deep-black">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-deep-black/90 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                      {product.tag}
                    </span>
                  </div>

                  {/* Zoom Lightbox Trigger */}
                  <button
                    onClick={() => handleOpenLightbox(product, index)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-deep-black/80 hover:bg-gold-500 hover:text-deep-black text-gold-300 border border-gold-500/40 flex items-center justify-center transition-all shadow-md"
                    title="Zoom Image"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-warm-white/90 pointer-events-none">
                    <span className="text-[10px] font-medium text-emerald-300 bg-emerald-950/85 px-2 py-0.5 rounded-full border border-emerald-600/30">
                      {product.modelType}
                    </span>
                    <span className="text-[10px] text-white bg-charcoal-950/90 px-2.5 py-0.5 rounded-full border border-white/25 font-medium">
                      {siteConfig.showPrices ? (product.priceDisplay || "Request a Quote") : "Pricing on request"}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
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

                  {/* Card Actions */}
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
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxData && (
        <LightboxModal
          item={lightboxData.item}
          items={lightboxData.items}
          currentIndex={lightboxData.currentIndex}
          onIndexChange={handleLightboxIndexChange}
          onClose={() => setLightboxData(null)}
        />
      )}
    </div>
  );
}
