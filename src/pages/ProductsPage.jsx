import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  X, 
  Eye, 
  MessageCircle, 
  ArrowUpRight, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import { getProducts, productCategories } from '../data/products';
import { buildProductWhatsAppUrl, getSiteConfig } from '../config/siteConfig';
import LightboxModal from '../components/LightboxModal';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [products, setProducts] = useState(getProducts());
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'price-asc' | 'price-desc' | 'name'
  const [priceFilter, setPriceFilter] = useState('all'); // 'all' | 'under-20k' | '20k-35k' | 'above-35k'
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [lightboxData, setLightboxData] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
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

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  // Filter & Sort Logic
  const filteredProducts = products.filter((prod) => {
    const matchesCategory = selectedCategory === 'All' || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesPrice = true;
    if (siteConfig.showPrices) {
      if (priceFilter === 'under-20k') matchesPrice = prod.price < 20000;
      if (priceFilter === '20k-35k') matchesPrice = prod.price >= 20000 && prod.price <= 35000;
      if (priceFilter === 'above-35k') matchesPrice = prod.price > 35000;
    }

    return matchesCategory && matchesSearch && matchesPrice;
  }).sort((a, b) => {
    if (siteConfig.showPrices) {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
    }
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  const displayedProducts = filteredProducts.slice(0, visibleCount);

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

  const handleOpenLightbox = (e, product) => {
    e.stopPropagation();
    setLightboxData({
      item: {
        image: product.image,
        title: product.name,
        category: product.category,
        caption: product.shortDesc,
        dimensions: product.dimensions,
        location: "Artisan Studio in Jharkhand"
      }
    });
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-sand-100 text-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Header */}
        <div className="py-4 space-y-3">
          <div className="flex items-center gap-2 text-xs text-charcoal-500 font-medium">
            <Link to="/" className="hover:text-charcoal-900">Home</Link>
            <span>/</span>
            <span className="text-charcoal-900 font-semibold">Collections</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-subtle">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold-600 font-semibold">
                {siteConfig.showPrices ? "Catalogue & Individual Pricing" : "Catalogue & Bespoke Models"}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-charcoal-900">
                Architectural <span className="font-cormorant italic font-normal text-gold-600">Creations</span>
              </h1>
              <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl font-sans">
                {siteConfig.showPrices
                  ? "Explore individual models with transparent sample pricing, full specifications, dimensions, and direct WhatsApp customization options."
                  : "Explore individual models with full specifications, dimensions, craftsmanship details, and direct WhatsApp custom order options."}
              </p>
            </div>

            <div className="text-xs text-charcoal-500 font-mono bg-white px-3.5 py-1.5 rounded-full border border-subtle">
              Showing <span className="font-bold text-charcoal-900">{filteredProducts.length}</span> models
            </div>
          </div>
        </div>

        {/* Toolbar: Search, Filters & Sorting */}
        <div className="mt-6 p-4 sm:p-5 rounded-card bg-white border border-subtle shadow-subtle space-y-4">
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-400" />
              <input
                type="text"
                placeholder="Search by model name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-2 rounded-full bg-sand-50 border border-subtle text-xs sm:text-sm focus:outline-none focus:border-charcoal-700 focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-800"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Price Filter & Sorting Dropdowns */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              
              {/* Price Filter - Only when prices are visible */}
              {siteConfig.showPrices && (
                <div className="flex items-center gap-1.5 text-xs text-charcoal-600">
                  <span className="font-medium">Price:</span>
                  <select
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                    className="px-3 py-1.5 rounded-lg bg-sand-50 border border-subtle text-xs text-charcoal-800 focus:outline-none focus:border-charcoal-800"
                  >
                    <option value="all">All Prices</option>
                    <option value="under-20k">Under ₹20,000</option>
                    <option value="20k-35k">₹20,000 – ₹35,000</option>
                    <option value="above-35k">Above ₹35,000</option>
                  </select>
                </div>
              )}

              {/* Sort By */}
              <div className="flex items-center gap-1.5 text-xs text-charcoal-600">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <span className="font-medium">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 rounded-lg bg-sand-50 border border-subtle text-xs text-charcoal-800 focus:outline-none focus:border-charcoal-800"
                >
                  <option value="featured">Featured First</option>
                  {siteConfig.showPrices && (
                    <>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                    </>
                  )}
                  <option value="name">Model Name</option>
                </select>
              </div>

            </div>
          </div>

          {/* Category Pills */}
          <div className="pt-2 flex flex-wrap gap-2">
            <button
              onClick={() => handleCategorySelect('All')}
              className={`px-3.5 py-1.5 rounded-full text-xs transition-colors cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-charcoal-900 text-white font-semibold'
                  : 'bg-sand-100 text-charcoal-700 hover:bg-sand-200'
              }`}
            >
              All Models
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-charcoal-900 text-white font-semibold'
                    : 'bg-sand-100 text-charcoal-700 hover:bg-sand-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="mt-16 text-center py-20 rounded-card bg-white border border-subtle space-y-3">
            <div className="w-12 h-12 rounded-full bg-sand-100 flex items-center justify-center mx-auto text-charcoal-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-charcoal-900">No creations found</h3>
            <p className="text-xs text-charcoal-500 max-w-sm mx-auto">
              No models match your current category and price filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setPriceFilter('all');
              }}
              className="px-5 py-2 rounded-full bg-charcoal-900 text-white text-xs font-semibold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-card border border-subtle bg-white hover:border-gold-400 hover:shadow-medium transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand-100">
                  <Link to={`/products/${product.slug}`} className="block w-full h-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </Link>

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-charcoal-950/85 text-white backdrop-blur-md">
                      {product.tag}
                    </span>
                  </div>

                  {/* Actions on Top Right */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <button
                      onClick={(e) => handleOpenLightbox(e, product)}
                      className="p-1.5 rounded-full bg-white/90 hover:bg-charcoal-900 hover:text-white text-charcoal-800 shadow-sm transition-all"
                      title="Zoom Photo"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="p-1.5 rounded-full bg-white/90 hover:bg-charcoal-900 hover:text-white text-charcoal-800 shadow-sm transition-all"
                      title="Quick View"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-charcoal-500 font-mono">
                      <span>{product.category}</span>
                      <span className="text-emerald-850 font-medium">{product.availability}</span>
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

                  {/* Pricing and Actions */}
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
        )}

        {/* Load More Button if more products exist */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="px-7 py-3 rounded-full border border-charcoal-800 text-charcoal-900 hover:bg-charcoal-900 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Load More Models ({filteredProducts.length - visibleCount} remaining)
            </button>
          </div>
        )}

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
                className="w-full h-full object-cover"
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

      {/* Lightbox Modal */}
      {lightboxData && (
        <LightboxModal
          item={lightboxData.item}
          onClose={() => setLightboxData(null)}
        />
      )}
    </div>
  );
}
