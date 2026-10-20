import React, { useState, useEffect, useRef } from 'react';
import { 
  Lock, 
  Unlock, 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle, 
  Eye, 
  Star, 
  Settings, 
  FolderPlus, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Save, 
  X,
  ExternalLink,
  ShieldCheck,
  Search,
  IndianRupee,
  Video,
  Layers,
  ArrowRight,
  Sparkles,
  Image as ImageIcon,
  Tag,
  Clock,
  Box,
  Sliders,
  Check,
  Palette,
  Lightbulb,
  Maximize2,
  Package,
  RotateCcw,
  Upload,
  FolderOpen
} from 'lucide-react';
import { getProducts, saveProducts } from '../data/products';
import { getEnquiries, updateEnquiryStatus, deleteEnquiry } from '../data/enquiries';
import { getSiteConfig, saveSiteConfig, buildWhatsAppUrl } from '../config/siteConfig';

const PRESET_STUDIO_IMAGES = [
  { label: 'Royal Gold Tajiya', url: '/assets/images/hero_royal_tajiya.jpg', category: 'Tajiya' },
  { label: 'Emerald Tajiya Studio', url: '/assets/images/tajiya_emerald_studio_bright.jpg', category: 'Tajiya' },
  { label: 'Shahi Golden Palace', url: '/assets/images/tajiya_shahi_golden_palace.jpg', category: 'Tajiya' },
  { label: 'Gumbad-e-Khazra', url: '/assets/images/gumbad_e_khazra.jpg', category: 'Gumbad' },
  { label: 'Ajmer Dargah Model', url: '/assets/images/ajmer_dargah_model.jpg', category: 'Dargah' },
  { label: 'Grand Gumbad Night', url: '/assets/images/grand_gumbad_night.jpg', category: 'Gumbad' },
  { label: 'Custom Minar Work', url: '/assets/images/custom_minar.jpg', category: 'Minar' },
  { label: 'Thermocol Jali Cutting', url: '/assets/images/workshop_jali_cutting.jpg', category: 'Jali' }
];

const POPULAR_TAGS = [
  'Royal Masterpiece',
  'Bestseller',
  'Imperial Gold',
  'Made to Order',
  'Exhibition Special',
  'Sacred Heritage',
  'Custom Scale'
];

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState('enquiries'); // 'enquiries' | 'products' | 'settings'
  const [products, setProducts] = useState(getProducts());
  const [enquiries, setEnquiries] = useState(getEnquiries());
  const [config, setConfig] = useState(getSiteConfig());

  // Search & filter in admin
  const [searchTerm, setSearchTerm] = useState('');

  // Edit / Add modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [modalActiveTab, setModalActiveTab] = useState('all');
  const [imageError, setImageError] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    category: 'Tajiya',
    tag: 'Royal Masterpiece',
    price: 18500,
    isStartingPrice: true,
    originalPrice: 22000,
    availability: 'Made to Order',
    customisable: true,
    shortDesc: '',
    fullDesc: '',
    dimensions: 'Base: 24 x 24 inches | Height: 36 inches',
    material: 'High-density architectural thermocol, 24k gold foil leafing',
    colourFinish: 'Ivory white, metallic gold leafing & royal emerald accents',
    lighting: 'Warm golden interior micro-LED halo',
    leadTime: '14 to 20 Days',
    packaging: 'Rigid wooden shipping crate with foam mold',
    image: '/assets/images/hero_royal_tajiya.jpg',
    videoUrl: '',
    featured: true
  });

  const [settingsNotice, setSettingsNotice] = useState('');

  const officialCategories = [
    'Tajiya',
    'Gumbad',
    'Gumbad-e-Khazra / Mini Madina',
    'Minar',
    'Dargah & Religious Architectural Models',
    'Thermocol Cutting & Fine Jali Work',
    'Decorative Models',
    'Custom Creations'
  ];

  useEffect(() => {
    // Check session
    const session = sessionStorage.getItem('bsc_admin_auth');
    if (session === 'true') {
      setIsAuthenticated(true);
    }

    const refreshData = () => {
      setProducts(getProducts());
      setEnquiries(getEnquiries());
      setConfig(getSiteConfig());
    };

    window.addEventListener('products-updated', refreshData);
    window.addEventListener('enquiries-updated', refreshData);
    window.addEventListener('site-config-updated', refreshData);
    return () => {
      window.removeEventListener('products-updated', refreshData);
      window.removeEventListener('enquiries-updated', refreshData);
      window.removeEventListener('site-config-updated', refreshData);
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput === config.adminPin || pinInput === 'samsher2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('bsc_admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('Incorrect Security PIN. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('bsc_admin_auth');
  };

  // Auto generate slug from name
  const handleGenerateSlug = () => {
    if (!formData.name) return;
    const generated = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    setFormData((prev) => ({ ...prev, slug: generated }));
  };

  // Helper to process, resize and compress any browsed or dragged image file
  const processImageFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (JPG, PNG, WebP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const maxDim = 1200;
        let width = img.width;
        let height = img.height;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.88);
        setFormData((prev) => ({ ...prev, image: optimizedDataUrl }));
        setImageError(false);
        setUploadedFileName(file.name);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  // Handle local image file browse & upload with auto-optimization
  const handleImageFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  // Drag & drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  // Open modal for adding
  const handleAddNew = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      slug: '',
      category: 'Tajiya',
      tag: 'Royal Masterpiece',
      price: 18500,
      isStartingPrice: true,
      originalPrice: '',
      availability: 'Made to Order',
      customisable: true,
      shortDesc: '',
      fullDesc: '',
      dimensions: 'Base: 24 x 24 in | Height: 36 in',
      material: 'High-density architectural thermocol, 24k gold foil leafing',
      colourFinish: 'Ivory white & imperial gold leafing',
      lighting: 'Warm golden interior micro-LED halo',
      leadTime: '14 to 20 Days',
      packaging: 'Rigid wooden crate with high-density foam',
      image: '/assets/images/hero_royal_tajiya.jpg',
      videoUrl: '',
      featured: true
    });
    setModalActiveTab('all');
    setImageError(false);
    setUploadedFileName('');
    setIsModalOpen(true);
  };

  // Open modal for editing
  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      ...product,
      name: product.name || '',
      slug: product.slug || '',
      category: product.category || 'Tajiya',
      tag: product.tag || 'Handcrafted',
      price: product.price || 15000,
      isStartingPrice: product.isStartingPrice ?? true,
      originalPrice: product.originalPrice || '',
      availability: product.availability || 'Made to Order',
      customisable: product.customisable ?? product.customizable ?? true,
      shortDesc: product.shortDesc || '',
      fullDesc: product.fullDesc || '',
      dimensions: product.dimensions || 'Custom Scalable',
      material: product.material || 'High-density architectural thermocol, 24k gold foil',
      colourFinish: product.colourFinish || product.colorFinish || 'Ivory white & metallic gold',
      lighting: product.lighting || 'Warm golden interior micro-LED halo',
      leadTime: product.leadTime || product.craftTime || '14 to 20 Days',
      packaging: product.packaging || 'Rigid wooden crate with high-density foam',
      image: product.image || '/assets/images/hero_royal_tajiya.jpg',
      videoUrl: product.videoUrl || '',
      featured: product.featured ?? false
    });
    setModalActiveTab('all');
    setImageError(false);
    setUploadedFileName(product.image?.startsWith('data:') ? 'Custom Uploaded Photo' : '');
    setIsModalOpen(true);
  };

  // Save product (Add or Edit)
  const handleSaveProduct = (e) => {
    e.preventDefault();
    const slug = formData.slug?.trim() || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    // Ensure sizeOptions exist or create defaults from base price
    const basePrice = Number(formData.price) || 12000;
    const sizeOptions = editingProduct?.sizeOptions || [
      { name: 'Standard Scale', price: basePrice },
      { name: 'Grand Scale', price: Math.round(basePrice * 1.45) }
    ];

    const productToSave = {
      ...formData,
      id: editingProduct ? editingProduct.id : `prod-${Date.now()}`,
      slug,
      price: basePrice,
      originalPrice: formData.originalPrice ? Number(formData.originalPrice) : null,
      sizeOptions,
      customisable: formData.customisable ?? true,
      customizable: formData.customisable ?? true
    };

    let updatedList;
    if (editingProduct) {
      updatedList = products.map(p => p.id === editingProduct.id ? productToSave : p);
    } else {
      updatedList = [productToSave, ...products];
    }

    saveProducts(updatedList);
    setProducts(updatedList);
    setIsModalOpen(false);
  };

  // Delete product
  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this model from the catalogue?")) {
      const updatedList = products.filter(p => p.id !== id);
      saveProducts(updatedList);
      setProducts(updatedList);
    }
  };

  // Toggle Featured
  const handleToggleFeatured = (id) => {
    const updatedList = products.map(p => p.id === id ? { ...p, featured: !p.featured } : p);
    saveProducts(updatedList);
    setProducts(updatedList);
  };

  // Update site config
  const handleSaveSettings = (e) => {
    e.preventDefault();
    saveSiteConfig(config);
    setSettingsNotice('Site settings successfully saved and applied across the website!');
    setTimeout(() => setSettingsNotice(''), 3000);
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // If not authenticated, render login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-36 pb-24 flex items-center justify-center px-4 bg-warm-light text-luxury-charcoal">
        <div className="w-full max-w-md p-8 rounded-card bg-white border border-subtle shadow-xl space-y-6">
          <div className="text-center space-y-3">
            <img 
              src="/assets/images/logo.png" 
              alt="Being Samsher Crafting" 
              className="h-20 w-auto mx-auto object-contain drop-shadow-md brightness-125 contrast-105" 
            />
            <h2 className="font-serif text-2xl font-bold text-luxury-charcoal">
              Studio Admin Portal
            </h2>
            <p className="text-xs text-luxury-charcoal/70">
              Enter master access PIN to manage product models, review custom orders, and configure studio contacts.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-luxury-charcoal uppercase tracking-wider mb-1.5">
                Security PIN
              </label>
              <input
                type="password"
                placeholder="Enter PIN (Default: samsher2026)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-warm-light/40 border border-subtle text-luxury-charcoal text-sm focus:outline-none focus:border-gold-500"
              />
            </div>

            {loginError && (
              <p className="text-xs text-red-600 font-medium">{loginError}</p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              Authenticate & Enter
            </button>
          </form>

          <p className="text-center text-[11px] text-luxury-charcoal/50 font-mono">
            Being Samsher Crafting • Internal Management Console
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-24 bg-warm-light text-luxury-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-subtle">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/images/logo.png" 
              alt="Being Samsher Crafting" 
              className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm brightness-125 contrast-105" 
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-charcoal">
                  Studio Admin Console
                </h1>
              </div>
              <p className="text-xs text-luxury-charcoal/70 mt-0.5">
                Being Samsher Crafting • Catalogue Pricing & Enquiry System
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleAddNew}
              className="px-4 py-2 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white font-medium text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Model</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full bg-white hover:bg-warm-light/70 text-luxury-charcoal border border-subtle text-xs font-medium cursor-pointer"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="mt-6 flex flex-wrap gap-2 border-b border-subtle pb-4">
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'enquiries'
                ? 'bg-emerald-900 text-white shadow-sm'
                : 'bg-white text-luxury-charcoal/70 hover:text-luxury-charcoal border border-subtle'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Custom Enquiries ({enquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'products'
                ? 'bg-emerald-900 text-white shadow-sm'
                : 'bg-white text-luxury-charcoal/70 hover:text-luxury-charcoal border border-subtle'
            }`}
          >
            <FolderPlus className="w-4 h-4" />
            <span>Catalogue Products ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-emerald-900 text-white shadow-sm'
                : 'bg-white text-luxury-charcoal/70 hover:text-luxury-charcoal border border-subtle'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Studio Settings</span>
          </button>
        </div>

        {/* TAB 1: CUSTOM ENQUIRIES CRM */}
        {activeTab === 'enquiries' && (
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-luxury-charcoal">
                Customer Custom Order Submissions
              </h2>
              <span className="text-xs text-luxury-charcoal/60">
                Direct one-click WhatsApp client contact
              </span>
            </div>

            {enquiries.length === 0 ? (
              <div className="p-12 text-center rounded-card bg-white border border-subtle text-luxury-charcoal/60 text-sm">
                No customer custom enquiries recorded yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {enquiries.map((enq) => (
                  <div
                    key={enq.id}
                    className="p-5 rounded-card bg-white border border-subtle shadow-sm space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-subtle pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-base font-bold text-luxury-charcoal">
                            {enq.customerName}
                          </h3>
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                            enq.status === 'New' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                            enq.status === 'Contacted' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                            'bg-warm-light text-luxury-charcoal/70'
                          }`}>
                            {enq.status}
                          </span>
                        </div>
                        <p className="text-xs text-gold-600 font-mono mt-0.5">
                          {enq.mobile} • {enq.cityState} • ID: {enq.id}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={enq.status}
                          onChange={(e) => updateEnquiryStatus(enq.id, e.target.value)}
                          className="px-2.5 py-1 rounded-md bg-warm-light/60 border border-subtle text-xs text-luxury-charcoal focus:outline-none"
                        >
                          <option value="New">Status: New</option>
                          <option value="Contacted">Status: Contacted</option>
                          <option value="In Discussion">Status: In Discussion</option>
                          <option value="Completed">Status: Completed</option>
                        </select>

                        <a
                          href={`https://wa.me/${enq.mobile.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${enq.customerName}! Master Craftsman Samsher Alam here from Being Samsher Crafting regarding your custom order enquiry for ${enq.modelCategory}.`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3.5 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-[#20bd5a]"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>

                        <button
                          onClick={() => deleteEnquiry(enq.id)}
                          className="p-1.5 rounded-md bg-warm-light hover:bg-red-50 text-luxury-charcoal/60 hover:text-red-600 transition-colors cursor-pointer"
                          title="Delete Enquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-luxury-charcoal/80 font-sans">
                      <div>
                        <span className="text-luxury-charcoal/50 block font-mono text-[10px]">CATEGORY & SCALE</span>
                        <span className="font-semibold text-luxury-charcoal">{enq.modelCategory}</span>
                        <span className="block text-luxury-charcoal/70">Dimensions: {enq.dimensions}</span>
                      </div>

                      <div>
                        <span className="text-luxury-charcoal/50 block font-mono text-[10px]">LIGHTING & MATERIAL</span>
                        <span>{enq.preferredMaterial}</span>
                        <span className="block text-luxury-charcoal/70">{enq.lighting}</span>
                      </div>

                      <div>
                        <span className="text-luxury-charcoal/50 block font-mono text-[10px]">BUDGET & DELIVERY DATE</span>
                        <span>{enq.budgetRange || 'Not specified'}</span>
                        <span className="block text-luxury-charcoal/70">Due: {enq.deliveryDate || 'Flexible'}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-md bg-warm-light/50 text-xs text-luxury-charcoal">
                      <span className="text-gold-600 font-semibold text-[11px] block">Customer Notes:</span>
                      <p className="mt-1 leading-relaxed">{enq.designDescription}</p>
                      {enq.referenceImageName && (
                        <p className="mt-1 text-[11px] text-emerald-800 font-mono">
                          📎 Reference File: {enq.referenceImageName}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CATALOGUE PRODUCTS (CMS) */}
        {activeTab === 'products' && (
          <div className="mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="font-serif text-xl font-bold text-luxury-charcoal">
                Catalogue Models & Configured Prices ({products.length})
              </h2>
              
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-luxury-charcoal/40" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name or category..."
                    className="pl-9 pr-4 py-1.5 rounded-full border border-subtle bg-white text-xs text-luxury-charcoal focus:outline-none focus:border-gold-500"
                  />
                </div>

                <button
                  onClick={handleAddNew}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-white text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all"
                >
                  <Plus className="w-4 h-4 text-gold-400" />
                  <span>Add New Model to Catalogue</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="rounded-card bg-white border border-subtle shadow-sm overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] bg-warm-light/40">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 flex gap-1">
                      <button
                        onClick={() => handleToggleFeatured(p.id)}
                        className={`px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1 cursor-pointer ${
                          p.featured ? 'bg-gold-500 text-white' : 'bg-white/90 text-luxury-charcoal/70'
                        }`}
                      >
                        <Star className="w-3 h-3 fill-current" />
                        <span>{p.featured ? 'Featured' : 'Standard'}</span>
                      </button>
                    </div>

                    <div className="absolute bottom-2 right-2">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-xs font-bold text-emerald-900 border border-subtle shadow-sm">
                        {p.isStartingPrice ? 'Starting at ' : ''}₹{p.price?.toLocaleString('en-IN') || 'Quote'}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-base font-bold text-luxury-charcoal line-clamp-1">{p.name}</h3>
                      <p className="text-[11px] text-emerald-800 font-medium">{p.category}</p>
                      <p className="text-xs text-luxury-charcoal/70 line-clamp-2 mt-1">{p.shortDesc}</p>
                    </div>

                    <div className="pt-3 border-t border-subtle flex items-center justify-between">
                      <span className="text-[10px] text-gold-600 font-mono">/products/{p.slug}</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(p)}
                          className="p-1.5 rounded-md bg-warm-light hover:bg-gold-50 text-luxury-charcoal hover:text-gold-700 transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(p.id)}
                          className="p-1.5 rounded-md bg-warm-light hover:bg-red-50 text-luxury-charcoal/60 hover:text-red-600 transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SITE CONFIG & HERO VIDEO */}
        {activeTab === 'settings' && (
          <div className="mt-8 max-w-2xl mx-auto">
            <form onSubmit={handleSaveSettings} className="p-6 sm:p-8 rounded-card bg-white border border-subtle shadow-sm space-y-5">
              <h2 className="font-serif text-xl font-bold text-luxury-charcoal border-b border-subtle pb-3">
                Studio Central Configuration
              </h2>

              {settingsNotice && (
                <div className="p-3 rounded-md bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                  {settingsNotice}
                </div>
              )}

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-luxury-charcoal uppercase tracking-wider mb-1">
                    Hero Background Video URL
                  </label>
                  <input
                    type="text"
                    value={config.heroVideoUrl || ''}
                    onChange={(e) => setConfig({ ...config, heroVideoUrl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md bg-warm-light/40 border border-subtle text-luxury-charcoal"
                    placeholder="https://www.youtube.com/watch?v=... or direct MP4 URL"
                  />
                  <p className="text-[10px] text-luxury-charcoal/50 mt-1">Supports official YouTube video link (e.g. https://www.youtube.com/watch?v=bzv2S55df8c) or direct MP4 video file.</p>
                </div>

                <div>
                  <label className="block font-semibold text-luxury-charcoal uppercase tracking-wider mb-1">
                    Hero Video Poster Image URL
                  </label>
                  <input
                    type="text"
                    value={config.heroPosterImage || ''}
                    onChange={(e) => setConfig({ ...config, heroPosterImage: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md bg-warm-light/40 border border-subtle text-luxury-charcoal"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-luxury-charcoal uppercase tracking-wider mb-1">
                    WhatsApp Number (International format without +)
                  </label>
                  <input
                    type="text"
                    value={config.whatsappNumber}
                    onChange={(e) => setConfig({ ...config, whatsappNumber: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md bg-warm-light/40 border border-subtle text-luxury-charcoal"
                  />
                  <p className="text-[10px] text-luxury-charcoal/50 mt-1">Example: 919818572692 (Central WhatsApp)</p>
                </div>

                <div>
                  <label className="block font-semibold text-luxury-charcoal uppercase tracking-wider mb-1">
                    Display Phone Number
                  </label>
                  <input
                    type="text"
                    value={config.displayPhone}
                    onChange={(e) => setConfig({ ...config, displayPhone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md bg-warm-light/40 border border-subtle text-luxury-charcoal"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-luxury-charcoal uppercase tracking-wider mb-1">
                    Studio Email Address
                  </label>
                  <input
                    type="email"
                    value={config.email || ''}
                    onChange={(e) => setConfig({ ...config, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md bg-warm-light/40 border border-subtle text-luxury-charcoal"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-luxury-charcoal uppercase tracking-wider mb-1">
                    Studio Full Address
                  </label>
                  <input
                    type="text"
                    value={config.fullAddress}
                    onChange={(e) => setConfig({ ...config, fullAddress: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md bg-warm-light/40 border border-subtle text-luxury-charcoal"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-luxury-charcoal uppercase tracking-wider mb-1">
                    Instagram Channel URL
                  </label>
                  <input
                    type="text"
                    value={config.instagramUrl}
                    onChange={(e) => setConfig({ ...config, instagramUrl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md bg-warm-light/40 border border-subtle text-luxury-charcoal"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-luxury-charcoal uppercase tracking-wider mb-1">
                    YouTube Channel URL
                  </label>
                  <input
                    type="text"
                    value={config.youtubeUrl}
                    onChange={(e) => setConfig({ ...config, youtubeUrl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md bg-warm-light/40 border border-subtle text-luxury-charcoal"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Configuration Changes</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>

      {/* ADD / EDIT PRODUCT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-hidden animate-fade-in">
          <div className="relative w-full max-w-5xl max-h-[92vh] rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-gold-500/30 flex flex-col shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden text-[#111827]">
            
            {/* MODAL HEADER */}
            <div className="bg-[#0B0F15] text-white p-4 sm:p-5 md:p-6 border-b border-gold-500/20 relative overflow-hidden shrink-0">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 shadow-inner">
                    {editingProduct ? <Edit3 className="w-5 h-5" /> : <FolderPlus className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] uppercase tracking-widest font-mono text-gold-400 font-semibold px-2 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-gold-400" />
                        <span>Atelier Catalogue CMS</span>
                      </span>
                      {editingProduct && (
                        <span className="text-[10px] text-white/50 font-mono hidden sm:inline-block">
                          ID: {editingProduct.id}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide">
                      {editingProduct ? 'Edit Model Specifications & Pricing' : 'Add New Model to Catalogue'}
                    </h3>
                    <p className="text-xs text-white/60 hidden sm:block mt-0.5">
                      Configure bespoke scale, architectural specifications, commercial pricing, and showcase media.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <div className="hidden md:flex flex-col items-end text-right">
                    <span className="text-[10px] uppercase tracking-wider text-gold-400/80 font-mono">Current Tier</span>
                    <span className="text-xs font-bold text-white font-serif">
                      {formData.isStartingPrice ? 'From ' : ''}₹{Number(formData.price || 0).toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-white/10 transition-all cursor-pointer"
                    title="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* NAVIGATION / SECTION TABS */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-xs">
                {[
                  { id: 'all', label: 'All Sections', icon: Sparkles },
                  { id: 'identity', label: 'Identity & URL', icon: Tag },
                  { id: 'pricing', label: 'Pricing & Availability', icon: IndianRupee },
                  { id: 'specs', label: 'Artisan Specs', icon: Layers },
                  { id: 'media', label: 'Media & Description', icon: ImageIcon },
                  { id: 'preview', label: 'Live Preview', icon: Eye, mobileOnly: true }
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = modalActiveTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setModalActiveTab(tab.id)}
                      className={`px-3 py-1.5 rounded-lg font-medium text-xs flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                        tab.mobileOnly ? 'lg:hidden ' : ''
                      }${
                        isActive
                          ? 'bg-gold-500 text-luxury-charcoal font-semibold shadow-xs'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* FORM CONTAINER */}
            <form onSubmit={handleSaveProduct} className="flex-1 overflow-hidden flex flex-col text-[#111827]">
              
              {/* SCROLLABLE BODY */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-7 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-[#111827]">
                  
                  {/* LEFT COLUMN: FORM SECTIONS */}
                  <div className={`space-y-6 ${modalActiveTab === 'preview' ? 'hidden lg:block lg:col-span-7' : 'lg:col-span-7'}`}>

                    {/* SECTION 1: IDENTITY & CATEGORY */}
                    {(modalActiveTab === 'all' || modalActiveTab === 'identity') && (
                      <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#E5E7EB] shadow-sm space-y-4">
                        <div className="flex items-center gap-2.5 border-b border-[#E5E7EB] pb-3">
                          <div className="w-8 h-8 rounded-xl bg-gold-100 border border-gold-300 flex items-center justify-center text-gold-800 shrink-0">
                            <Tag className="w-4 h-4 text-gold-800" />
                          </div>
                          <div>
                            <h4 className="font-serif text-base font-bold text-[#111827]">
                              1. Core Identification & Category
                            </h4>
                            <p className="text-xs text-[#4B5563]">
                              Official title, collection classification, and public web slug.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div className="sm:col-span-2">
                            <div className="flex items-center justify-between mb-1.5">
                              <label className="block text-[#111827] font-bold text-xs">
                                Model Name <span className="text-red-600">*</span>
                              </label>
                              <span className="text-[11px] text-[#6B7280]">Official Catalogue Name</span>
                            </div>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="e.g. Royal Shahi Tajiya (7-Tier Emperor Edition)"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-semibold text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all placeholder:text-[#9CA3AF] shadow-xs"
                            />
                          </div>

                          <div>
                            <label className="block text-[#111827] font-bold mb-1.5 text-xs">
                              Official Category <span className="text-red-600">*</span>
                            </label>
                            <select
                              value={formData.category}
                              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-semibold text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all cursor-pointer shadow-xs"
                            >
                              {officialCategories.map((c) => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <label className="block text-[#111827] font-bold text-xs">
                                Collection Tag / Badge
                              </label>
                              <span className="text-[11px] text-[#6B7280]">Highlighted badge</span>
                            </div>
                            <input
                              type="text"
                              value={formData.tag}
                              onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                              placeholder="e.g. Royal Masterpiece"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-semibold text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all placeholder:text-[#9CA3AF] shadow-xs"
                            />
                          </div>

                          {/* Quick Tag Suggestion Chips */}
                          <div className="sm:col-span-2 pt-1">
                            <span className="text-[11px] text-[#374151] block mb-1.5 font-bold">
                              Popular Tag Presets (click to apply):
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {POPULAR_TAGS.map((t) => (
                                <button
                                  key={t}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, tag: t })}
                                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                                    formData.tag === t
                                      ? 'bg-gold-500 text-[#0F100F] shadow-xs ring-1 ring-gold-600'
                                      : 'bg-[#F3F4F6] hover:bg-gold-100 text-[#1F2937] border border-[#D1D5DB]'
                                  }`}
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <div className="flex items-center justify-between mb-1.5">
                              <label className="block text-[#111827] font-bold text-xs">
                                URL Slug / Web Key
                              </label>
                              <button
                                type="button"
                                onClick={handleGenerateSlug}
                                className="text-[11px] font-bold text-gold-700 hover:text-gold-900 flex items-center gap-1 cursor-pointer"
                              >
                                <RotateCcw className="w-3 h-3 text-gold-700" />
                                <span>Auto-generate from name</span>
                              </button>
                            </div>
                            <div className="flex rounded-xl overflow-hidden border-2 border-[#D1D5DB] bg-white focus-within:border-gold-500 focus-within:ring-2 focus-within:ring-gold-500/25 transition-all shadow-xs">
                              <span className="px-3.5 py-2.5 bg-[#F3F4F6] text-[#4B5563] text-xs font-mono font-bold border-r border-[#D1D5DB] shrink-0 select-none">
                                /products/
                              </span>
                              <input
                                type="text"
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                placeholder="shahi-royal-tajiya"
                                className="w-full px-3 py-2.5 bg-transparent text-[#111827] font-mono font-bold text-xs focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SECTION 2: PRICING & COMMERCIALS */}
                    {(modalActiveTab === 'all' || modalActiveTab === 'pricing') && (
                      <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#E5E7EB] shadow-sm space-y-4">
                        <div className="flex items-center gap-2.5 border-b border-[#E5E7EB] pb-3">
                          <div className="w-8 h-8 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-900 shrink-0">
                            <IndianRupee className="w-4 h-4 text-emerald-900" />
                          </div>
                          <div>
                            <h4 className="font-serif text-base font-bold text-[#111827]">
                              2. Commercial Pricing & Availability
                            </h4>
                            <p className="text-xs text-[#4B5563]">
                              Baseline quotation, MRP comparison, and workshop availability.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <label className="block text-[#111827] font-bold text-xs">
                                Catalogue Price in INR (₹) <span className="text-red-600">*</span>
                              </label>
                              <span className="text-xs text-emerald-800 font-extrabold font-mono">
                                ₹{Number(formData.price || 0).toLocaleString('en-IN')}
                              </span>
                            </div>
                            <div className="relative rounded-xl border-2 border-[#D1D5DB] bg-white overflow-hidden focus-within:border-gold-500 focus-within:ring-2 focus-within:ring-gold-500/25 transition-all shadow-xs">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#374151] font-extrabold text-sm">
                                ₹
                              </span>
                              <input
                                type="number"
                                required
                                min="0"
                                step="500"
                                value={formData.price}
                                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                                className="w-full pl-8 pr-3.5 py-2.5 bg-transparent text-[#111827] font-bold text-sm focus:outline-none"
                              />
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <label className="block text-[#111827] font-bold text-xs">
                                Original MRP (for Strike-through)
                              </label>
                              {formData.originalPrice && Number(formData.originalPrice) > Number(formData.price) && (
                                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                                  {Math.round(((Number(formData.originalPrice) - Number(formData.price)) / Number(formData.originalPrice)) * 100)}% SAVINGS
                                </span>
                              )}
                            </div>
                            <div className="relative rounded-xl border-2 border-[#D1D5DB] bg-white overflow-hidden focus-within:border-gold-500 focus-within:ring-2 focus-within:ring-gold-500/25 transition-all shadow-xs">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#374151] font-extrabold text-sm">
                                ₹
                              </span>
                              <input
                                type="number"
                                min="0"
                                step="500"
                                value={formData.originalPrice}
                                onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                                placeholder="e.g. 24000 (optional)"
                                className="w-full pl-8 pr-3.5 py-2.5 bg-transparent text-[#111827] font-bold text-xs focus:outline-none"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[#111827] font-bold mb-1.5 text-xs">
                              Price Format Display
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                type="button"
                                onClick={() => setFormData({ ...formData, isStartingPrice: true })}
                                className={`py-2 px-3 rounded-xl border-2 text-center font-bold text-xs transition-all cursor-pointer ${
                                  formData.isStartingPrice
                                    ? 'bg-emerald-900 text-white border-emerald-900 shadow-sm'
                                    : 'bg-[#F9FAFB] text-[#374151] border-[#D1D5DB] hover:bg-white'
                                }`}
                              >
                                Starting at ₹...
                              </button>
                              <button
                                type="button"
                                onClick={() => setFormData({ ...formData, isStartingPrice: false })}
                                className={`py-2 px-3 rounded-xl border-2 text-center font-bold text-xs transition-all cursor-pointer ${
                                  !formData.isStartingPrice
                                    ? 'bg-emerald-900 text-white border-emerald-900 shadow-sm'
                                    : 'bg-[#F9FAFB] text-[#374151] border-[#D1D5DB] hover:bg-white'
                                }`}
                              >
                                Fixed ₹...
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="block text-[#111827] font-bold mb-1.5 text-xs">
                              Commercial Availability
                            </label>
                            <select
                              value={formData.availability}
                              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-semibold text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all cursor-pointer shadow-xs"
                            >
                              <option value="Made to Order">Made to Order (Bespoke Commission)</option>
                              <option value="Ready to Dispatch">Ready to Dispatch (In Atelier Stock)</option>
                              <option value="Limited Exhibition Piece">Limited Exhibition Piece</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SECTION 3: ARTISAN SPECIFICATIONS */}
                    {(modalActiveTab === 'all' || modalActiveTab === 'specs') && (
                      <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#E5E7EB] shadow-sm space-y-4">
                        <div className="flex items-center gap-2.5 border-b border-[#E5E7EB] pb-3">
                          <div className="w-8 h-8 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900 shrink-0">
                            <Layers className="w-4 h-4 text-amber-900" />
                          </div>
                          <div>
                            <h4 className="font-serif text-base font-bold text-[#111827]">
                              3. Artisan Specifications & Craftsmanship
                            </h4>
                            <p className="text-xs text-[#4B5563]">
                              Physical proportions, materials, illumination, and transit packaging.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div>
                            <label className="block text-[#111827] font-bold mb-1.5 flex items-center gap-1.5 text-xs">
                              <Maximize2 className="w-3.5 h-3.5 text-gold-700" />
                              <span>Standard Dimensions</span>
                            </label>
                            <input
                              type="text"
                              value={formData.dimensions}
                              onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                              placeholder="Base: 24 x 24 in | Height: 36 in"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-semibold text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all placeholder:text-[#9CA3AF] shadow-xs"
                            />
                          </div>

                          <div>
                            <label className="block text-[#111827] font-bold mb-1.5 flex items-center gap-1.5 text-xs">
                              <Clock className="w-3.5 h-3.5 text-gold-700" />
                              <span>Crafting Lead Time</span>
                            </label>
                            <input
                              type="text"
                              value={formData.leadTime}
                              onChange={(e) => setFormData({ ...formData, leadTime: e.target.value })}
                              placeholder="e.g. 14 to 20 Days"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-semibold text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all placeholder:text-[#9CA3AF] shadow-xs"
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <label className="block text-[#111827] font-bold mb-1.5 flex items-center gap-1.5 text-xs">
                              <Box className="w-3.5 h-3.5 text-gold-700" />
                              <span>Architectural Materials</span>
                            </label>
                            <input
                              type="text"
                              value={formData.material}
                              onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                              placeholder="High-density architectural thermocol, 24k gold foil leafing"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-semibold text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all placeholder:text-[#9CA3AF] shadow-xs"
                            />
                          </div>

                          <div>
                            <label className="block text-[#111827] font-bold mb-1.5 flex items-center gap-1.5 text-xs">
                              <Palette className="w-3.5 h-3.5 text-gold-700" />
                              <span>Colour & Finish</span>
                            </label>
                            <input
                              type="text"
                              value={formData.colourFinish}
                              onChange={(e) => setFormData({ ...formData, colourFinish: e.target.value })}
                              placeholder="Ivory white & imperial gold leafing"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-semibold text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all placeholder:text-[#9CA3AF] shadow-xs"
                            />
                          </div>

                          <div>
                            <label className="block text-[#111827] font-bold mb-1.5 flex items-center gap-1.5 text-xs">
                              <Lightbulb className="w-3.5 h-3.5 text-gold-700" />
                              <span>Lighting System</span>
                            </label>
                            <input
                              type="text"
                              value={formData.lighting}
                              onChange={(e) => setFormData({ ...formData, lighting: e.target.value })}
                              placeholder="Warm golden interior micro-LED halo"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-semibold text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all placeholder:text-[#9CA3AF] shadow-xs"
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <label className="block text-[#111827] font-bold mb-1.5 flex items-center gap-1.5 text-xs">
                              <Package className="w-3.5 h-3.5 text-gold-700" />
                              <span>Transit Packaging</span>
                            </label>
                            <input
                              type="text"
                              value={formData.packaging}
                              onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                              placeholder="Rigid wooden shipping crate with foam mold"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-semibold text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all placeholder:text-[#9CA3AF] shadow-xs"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SECTION 4: MEDIA & DESCRIPTIONS */}
                    {(modalActiveTab === 'all' || modalActiveTab === 'media') && (
                      <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#E5E7EB] shadow-sm space-y-4">
                        <div className="flex items-center gap-2.5 border-b border-[#E5E7EB] pb-3">
                          <div className="w-8 h-8 rounded-xl bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-900 shrink-0">
                            <ImageIcon className="w-4 h-4 text-blue-900" />
                          </div>
                          <div>
                            <h4 className="font-serif text-base font-bold text-[#111827]">
                              4. Visual Media & Editorial Descriptions
                            </h4>
                            <p className="text-xs text-[#4B5563]">
                              High-resolution imagery, video walkthrough, and narrative presentation.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4 text-xs">
                          {/* IMAGE SELECTION WITH BROWSE & URL */}
                          <div className="space-y-3">
                            <div className="flex items-center justify-between mb-1">
                              <label className="block text-[#111827] font-bold text-xs">
                                Model Showcase Photo <span className="text-red-600">*</span>
                              </label>
                              <span className="text-[11px] text-[#6B7280]">
                                Browse device or specify URL
                              </span>
                            </div>

                            {/* BROWSE FROM COMPUTER ZONE */}
                            <div
                              onClick={() => fileInputRef.current?.click()}
                              onDragOver={handleDragOver}
                              onDragLeave={handleDragLeave}
                              onDrop={handleDrop}
                              className={`p-4 sm:p-5 rounded-2xl border-2 border-dashed transition-all flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs cursor-pointer select-none ${
                                isDragging
                                  ? 'border-gold-600 bg-gold-100 ring-4 ring-gold-500/30 scale-[1.01]'
                                  : 'border-gold-400 bg-gold-50/60 hover:bg-gold-50/90 hover:border-gold-500'
                              }`}
                            >
                              <div className="flex items-center gap-3.5">
                                <div className="w-12 h-12 rounded-2xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-800 shrink-0 shadow-inner">
                                  <Upload className="w-6 h-6 text-gold-800" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-[#111827] flex items-center gap-2">
                                    <span>Browse & Upload Image from Computer / Phone</span>
                                    <span className="text-[10px] bg-gold-200 text-gold-950 font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                      Device
                                    </span>
                                  </div>
                                  <div className="text-xs text-[#4B5563] mt-0.5 font-medium">
                                    Click anywhere to choose a file or drag & drop (JPG, PNG, WebP)
                                  </div>
                                  <div className="text-[10px] text-emerald-800 font-semibold mt-0.5">
                                    ✓ Auto-scaled & compressed to avoid storage limits
                                  </div>
                                </div>
                              </div>

                              <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleImageFileChange}
                                className="hidden"
                                id="admin-product-file-input"
                              />

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  fileInputRef.current?.click();
                                }}
                                className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 active:scale-95 text-[#0F100F] font-bold text-xs flex items-center gap-2 shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
                              >
                                <FolderOpen className="w-4 h-4 text-[#0F100F]" />
                                <span>Browse Image</span>
                              </button>
                            </div>

                            {/* Uploaded File Confirmation Banner */}
                            {uploadedFileName && (
                              <div className="flex items-center justify-between p-3 px-4 rounded-xl bg-emerald-50 border-2 border-emerald-300 text-emerald-950 text-xs shadow-xs">
                                <div className="flex items-center gap-3 truncate">
                                  <img
                                    src={formData.image}
                                    alt="Thumbnail"
                                    className="w-10 h-10 rounded-lg object-cover border border-emerald-400 shrink-0 shadow-xs"
                                  />
                                  <div className="truncate">
                                    <div className="flex items-center gap-1.5 font-bold text-[#111827]">
                                      <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                                      <span className="truncate">Selected Image: {uploadedFileName}</span>
                                    </div>
                                    <div className="text-[11px] text-emerald-800 font-medium">
                                      Photo successfully loaded into model form
                                    </div>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setUploadedFileName('');
                                    setFormData({ ...formData, image: '/assets/images/hero_royal_tajiya.jpg' });
                                  }}
                                  className="px-3 py-1.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 font-bold text-xs ml-2 cursor-pointer transition-all shrink-0"
                                >
                                  Reset
                                </button>
                              </div>
                            )}

                            {/* Image Path / URL Input */}
                            <div className="space-y-1">
                              <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold text-[#374151]">
                                  Or Image Path / Web URL:
                                </span>
                                <span className="text-[10px] text-[#6B7280] font-mono">
                                  Local path or web URL
                                </span>
                              </div>
                              <input
                                type="text"
                                required
                                value={formData.image}
                                onChange={(e) => {
                                  setFormData({ ...formData, image: e.target.value });
                                  setImageError(false);
                                  setUploadedFileName('');
                                }}
                                placeholder="/assets/images/hero_royal_tajiya.jpg"
                                className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-mono font-bold text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all shadow-xs"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[#111827] font-bold mb-1.5 flex items-center gap-1.5 text-xs">
                              <Video className="w-3.5 h-3.5 text-gold-700" />
                              <span>Video Walkthrough URL (Optional YouTube / MP4 Link)</span>
                            </label>
                            <input
                              type="text"
                              value={formData.videoUrl}
                              onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                              placeholder="https://www.youtube.com/watch?v=..."
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-mono font-bold text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all shadow-xs"
                            />
                          </div>

                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <label className="block text-[#111827] font-bold text-xs">
                                Short Teaser Description (for Catalogue Cards)
                              </label>
                              <span className="text-[11px] text-[#6B7280] font-semibold">
                                {formData.shortDesc.length}/150 chars
                              </span>
                            </div>
                            <textarea
                              rows="2"
                              value={formData.shortDesc}
                              onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                              placeholder="Brief highlights of this model for quick reading on catalog cards and search results..."
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-medium text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all shadow-xs"
                            />
                          </div>

                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <label className="block text-[#111827] font-bold text-xs">
                                Full Architectural & Artisanal Narrative
                              </label>
                              <span className="text-[11px] text-[#6B7280]">
                                Detailed specification on product page
                              </span>
                            </div>
                            <textarea
                              rows="3"
                              value={formData.fullDesc}
                              onChange={(e) => setFormData({ ...formData, fullDesc: e.target.value })}
                              placeholder="Comprehensive description covering tier levels, floral fretwork, calligraphy inscriptions, interior sanctum, and dome construction..."
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-medium text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all shadow-xs"
                            />
                          </div>

                          {/* TOGGLE SWITCHES */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <label className="flex items-start gap-3 p-4 rounded-xl border-2 border-[#D1D5DB] bg-white hover:border-gold-400 hover:bg-gold-50/30 transition-all cursor-pointer select-none shadow-xs">
                              <input
                                type="checkbox"
                                checked={formData.featured}
                                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                                className="mt-0.5 w-4 h-4 rounded text-gold-500 focus:ring-gold-400 cursor-pointer"
                              />
                              <div>
                                <span className="font-bold text-[#111827] text-xs flex items-center gap-1.5">
                                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                  <span>Featured Showcase</span>
                                </span>
                                <p className="text-[11px] text-[#4B5563] mt-0.5 font-normal">
                                  Highlight prominently in homepage carousel & top tier sections.
                                </p>
                              </div>
                            </label>

                            <label className="flex items-start gap-3 p-4 rounded-xl border-2 border-[#D1D5DB] bg-white hover:border-gold-400 hover:bg-gold-50/30 transition-all cursor-pointer select-none shadow-xs">
                              <input
                                type="checkbox"
                                checked={formData.customisable}
                                onChange={(e) => setFormData({ ...formData, customisable: e.target.checked })}
                                className="mt-0.5 w-4 h-4 rounded text-gold-500 focus:ring-gold-400 cursor-pointer"
                              />
                              <div>
                                <span className="font-bold text-[#111827] text-xs flex items-center gap-1.5">
                                  <Sliders className="w-3.5 h-3.5 text-emerald-700" />
                                  <span>Customisation Available</span>
                                </span>
                                <p className="text-[11px] text-[#4B5563] mt-0.5 font-normal">
                                  Allow clients to request bespoke scale, lighting, and finishes.
                                </p>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* RIGHT COLUMN: STICKY LIVE PREVIEW & STUDIO PRESETS */}
                  <div className={`lg:col-span-5 space-y-5 ${modalActiveTab === 'preview' ? 'block' : 'hidden lg:block'}`}>
                    
                    {/* LIVE CARD PREVIEW */}
                    <div className="bg-white rounded-2xl border-2 border-[#E5E7EB] overflow-hidden shadow-md flex flex-col">
                      <div className="p-3.5 bg-gradient-to-r from-[#111827] to-[#1F2937] text-white flex items-center justify-between text-xs font-semibold">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span className="font-mono text-xs uppercase tracking-wider text-gold-400 font-bold">
                            Live Catalogue Preview
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-300 font-mono">Public View</span>
                      </div>

                      {/* PREVIEW IMAGE CONTAINER WITH HOVER & DRAG-AND-DROP */}
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`relative aspect-[4/3] bg-[#F3F4F6] overflow-hidden group cursor-pointer transition-all ${
                          isDragging ? 'ring-4 ring-gold-500 scale-[1.01]' : ''
                        }`}
                        title="Click to Browse Device Photo or Drop Image Here"
                      >
                        {formData.image && !imageError ? (
                          <>
                            <img
                              src={formData.image}
                              alt={formData.name || 'Preview'}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              onError={() => setImageError(true)}
                            />
                            {/* Hover overlay with Browse action */}
                            <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white z-20">
                              <div className="w-11 h-11 rounded-full bg-gold-500 text-luxury-charcoal flex items-center justify-center shadow-lg">
                                <FolderOpen className="w-5 h-5 text-[#0F100F]" />
                              </div>
                              <span className="text-xs font-bold bg-black/80 px-3 py-1 rounded-full text-gold-300 border border-gold-500/30">
                                Click to Browse Device Photo
                              </span>
                              <span className="text-[10px] text-white/80 font-mono">
                                or drop image file here
                              </span>
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#F9FAFB] text-[#6B7280]">
                            <ImageIcon className="w-10 h-10 mb-2 stroke-1 text-gold-600" />
                            <span className="text-xs font-bold text-[#374151]">No Image Assigned</span>
                            <span className="text-[11px] text-[#6B7280] mt-1">Click to browse photo from computer</span>
                          </div>
                        )}

                        {/* Top Badges */}
                        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 z-10 pointer-events-none">
                          {formData.tag && (
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-gold-500 text-[#0F100F] shadow-sm uppercase tracking-wider">
                              {formData.tag}
                            </span>
                          )}
                          {formData.featured && (
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-amber-600 text-white shadow-sm flex items-center gap-1">
                              <Star className="w-2.5 h-2.5 fill-current" />
                              <span>Featured</span>
                            </span>
                          )}
                        </div>

                        {/* Price Pill */}
                        <div className="absolute bottom-2.5 right-2.5 z-10 pointer-events-none">
                          <div className="px-3 py-1 rounded-lg bg-white/95 backdrop-blur-sm border border-gold-500/40 shadow-md flex items-center gap-1.5">
                            <span className="text-xs font-extrabold text-emerald-950">
                              {formData.isStartingPrice ? 'Starting ' : ''}₹{Number(formData.price || 0).toLocaleString('en-IN')}
                            </span>
                            {formData.originalPrice && Number(formData.originalPrice) > Number(formData.price) && (
                              <span className="text-[10px] text-[#6B7280] line-through font-bold">
                                ₹{Number(formData.originalPrice).toLocaleString('en-IN')}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* QUICK BROWSE ACTION BAR BENEATH CARD IMAGE */}
                      <div className="p-3 bg-[#F9FAFB] border-t border-[#E5E7EB] flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full py-2 px-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-[#0F100F] font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                        >
                          <FolderOpen className="w-4 h-4 text-[#0F100F]" />
                          <span>Browse Image from Computer</span>
                        </button>
                      </div>

                      <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-[11px] font-extrabold text-emerald-900 uppercase tracking-wider font-mono">
                              {formData.category}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#F3F4F6] text-[#1F2937] font-bold border border-[#D1D5DB]">
                              {formData.availability}
                            </span>
                          </div>

                          <h4 className="font-serif text-base font-bold text-[#111827] line-clamp-1">
                            {formData.name || 'Untitled Model Masterpiece'}
                          </h4>

                          <p className="text-xs text-[#4B5563] line-clamp-2 mt-1 leading-relaxed font-medium">
                            {formData.shortDesc || 'Handcrafted architectural replica engineered with precision thermocol fretwork and gold accents.'}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#4B5563]">
                          <span className="font-mono text-[11px] text-gold-800 font-bold truncate max-w-[140px]">
                            /products/{formData.slug || 'model-url'}
                          </span>
                          <span className="text-[11px] bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded border border-emerald-300">
                            {formData.leadTime || '14–20 Days'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ONE-CLICK STUDIO PHOTO PRESETS */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#E5E7EB] shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-[#111827] uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                          <span>Studio Photo Library</span>
                        </label>
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-[11px] font-bold text-gold-700 hover:text-gold-900 flex items-center gap-1 cursor-pointer"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>Browse Device</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {PRESET_STUDIO_IMAGES.map((preset) => (
                          <button
                            key={preset.url}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, image: preset.url });
                              setImageError(false);
                            }}
                            className={`flex items-center gap-2 p-2 rounded-xl border-2 text-left transition-all cursor-pointer ${
                              formData.image === preset.url
                                ? 'border-gold-500 bg-gold-50 ring-2 ring-gold-500/40'
                                : 'border-[#E5E7EB] bg-[#F9FAFB] hover:bg-white hover:border-gold-400'
                            }`}
                          >
                            <img
                              src={preset.url}
                              alt={preset.label}
                              className="w-10 h-10 rounded-lg object-cover border border-[#D1D5DB] shrink-0"
                            />
                            <div className="truncate">
                              <div className="text-xs font-bold text-[#111827] truncate">{preset.label}</div>
                              <div className="text-[10px] text-[#4B5563] font-mono truncate font-semibold">{preset.category}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* READINESS CHECKLIST */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#F9FAFB] border-2 border-[#E5E7EB] space-y-2.5 text-xs">
                      <div className="font-bold text-[#111827] flex items-center gap-1.5 text-xs uppercase tracking-wider">
                        <CheckCircle className="w-4 h-4 text-emerald-700" />
                        <span>Catalogue Publication Status</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-[#374151] font-semibold">Model Title</span>
                          {formData.name.trim() ? (
                            <span className="text-emerald-800 font-bold flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" /> Valid
                            </span>
                          ) : (
                            <span className="text-amber-700 font-bold">Required</span>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#374151] font-semibold">Pricing Tier</span>
                          {formData.price > 0 ? (
                            <span className="text-emerald-800 font-bold flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" /> ₹{Number(formData.price).toLocaleString('en-IN')}
                            </span>
                          ) : (
                            <span className="text-amber-700 font-bold">Required</span>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#374151] font-semibold">Category</span>
                          <span className="text-emerald-800 font-bold flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> {formData.category}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#374151] font-semibold">Showcase Image</span>
                          {formData.image && !imageError ? (
                            <span className="text-emerald-800 font-bold flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" /> Assigned
                            </span>
                          ) : (
                            <span className="text-red-600 font-bold">Needs photo</span>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              {/* MODAL STICKY FOOTER ACTION BAR */}
              <div className="bg-white border-t-2 border-[#E5E7EB] p-4 sm:p-5 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 shadow-lg">
                <div className="text-xs text-[#374151] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-500 shrink-0"></span>
                  <span className="font-semibold">
                    {formData.name ? (
                      <>Saving <strong className="text-[#111827]">{formData.name}</strong> to <strong className="text-emerald-900">{formData.category}</strong></>
                    ) : (
                      'Configure required model details to publish to catalogue'
                    )}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl border-2 border-[#D1D5DB] bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#1F2937] font-bold text-xs cursor-pointer transition-all"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-7 py-2.5 rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Save className="w-4 h-4 text-gold-400" />
                    <span>{editingProduct ? 'Update Model' : 'Save Model to Catalogue'}</span>
                  </button>
                </div>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
