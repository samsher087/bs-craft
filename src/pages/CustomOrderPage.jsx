import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Sparkles, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Upload, 
  X, 
  AlertCircle, 
  ShieldCheck, 
  Ruler, 
  Phone,
  Image as ImageIcon,
  Palette,
  Lightbulb,
  Clock,
  MapPin,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveEnquiry } from '../data/enquiries';
import { buildWhatsAppUrl } from '../config/siteConfig';

export default function CustomOrderPage() {
  const [searchParams] = useSearchParams();
  const prefilledModel = searchParams.get('model') || '';
  const prefilledCategory = searchParams.get('category') || 'Tajiya';

  const [formData, setFormData] = useState({
    customerName: '',
    whatsappNumber: '',
    email: '',
    productCategory: prefilledCategory,
    height: '',
    width: '',
    depth: '',
    preferredMaterial: 'High-density architectural thermocol with 24k gold foil leafing',
    colourFinish: 'Ivory white, metallic gold leafing & royal emerald accents',
    lightingRequirements: 'Warm golden interior micro-LED halo (with dimmer adapter)',
    quantity: 1,
    budgetInr: '',
    deliveryLocation: '',
    requiredDate: '',
    designDescription: prefilledModel ? `Interested in customized creation based on: ${prefilledModel}` : '',
  });

  const [referenceFile, setReferenceFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'Tajiya',
    'Gumbad',
    'Gumbad-e-Khazra / Mini Madina',
    'Minar',
    'Dargah & Religious Architectural Models',
    'Thermocol Cutting & Fine Jali Work',
    'Decorative Models',
    'Custom Creations'
  ];

  const materialOptions = [
    'High-density architectural thermocol with 24k gold foil leafing',
    'Laser & surgical micro-cut thermocol with satin lacquer',
    'Rigid structural composite with brass/metallic kalas finials',
    'Lightweight display thermocol for indoor wall vitrine',
    'Custom blend (craftsman recommendation)'
  ];

  const finishOptions = [
    'Ivory white, metallic gold leafing & royal emerald accents',
    'Pure traditional gold & silver tinsel leafing',
    'Royal blue & emerald jewel-toned heritage finish',
    'Monochromatic pearl white with mirror jali highlights',
    'Custom color palette (will specify in design notes)'
  ];

  const lightingOptions = [
    'Warm golden interior micro-LED halo (with dimmer adapter)',
    'Dual circuit gold & emerald backlight illumination',
    'Soft ambient warm white without visible diodes',
    'Non-illuminated classical architectural finish',
    '12V battery-pack compatible for religious procession mobility'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, referenceFile: 'Image file size must be under 8MB' }));
        return;
      }
      setReferenceFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setErrors(prev => ({ ...prev, referenceFile: null }));
    }
  };

  const removeFile = () => {
    setReferenceFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Please enter your full name.';
    }
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp number is required.';
    } else if (!/^[0-9+ -]{8,16}$/.test(formData.whatsappNumber.trim())) {
      newErrors.whatsappNumber = 'Please enter a valid phone or WhatsApp number.';
    }
    if (!formData.productCategory) {
      newErrors.productCategory = 'Please select a product category.';
    }
    if (!formData.height.trim() && !formData.width.trim()) {
      newErrors.dimensions = 'Please specify at least approximate height or dimensions.';
    }
    if (!formData.deliveryLocation.trim()) {
      newErrors.deliveryLocation = 'City and State / Pincode are required to verify shipping feasibility.';
    }
    if (!formData.designDescription.trim()) {
      newErrors.designDescription = 'Please describe your vision, specific shrine/monument inspiration, or special requests.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildPrefilledWhatsAppMessage = () => {
    const dims = [
      formData.height ? `Height: ${formData.height}` : null,
      formData.width ? `Width: ${formData.width}` : null,
      formData.depth ? `Depth: ${formData.depth}` : null,
    ].filter(Boolean).join(' × ');

    return (
      `Hello Being Samsher Crafting!\n\n` +
      `*CUSTOM ORDER STUDIO ENQUIRY*\n` +
      `-----------------------------------------\n` +
      `• *Customer Name:* ${formData.customerName}\n` +
      `• *WhatsApp:* ${formData.whatsappNumber}\n` +
      (formData.email ? `• *Email:* ${formData.email}\n` : '') +
      `• *Category:* ${formData.productCategory}\n` +
      `• *Dimensions:* ${dims || 'To be finalized'}\n` +
      `• *Preferred Material:* ${formData.preferredMaterial}\n` +
      `• *Colour & Finish:* ${formData.colourFinish}\n` +
      `• *Lighting:* ${formData.lightingRequirements}\n` +
      `• *Quantity:* ${formData.quantity}\n` +
      (formData.budgetInr ? `• *Budget:* ₹${formData.budgetInr}\n` : '') +
      `• *Delivery Location:* ${formData.deliveryLocation}\n` +
      (formData.requiredDate ? `• *Required Date:* ${formData.requiredDate}\n` : '') +
      (referenceFile ? `• *Reference Image:* Attached in chat (${referenceFile.name})\n` : '') +
      `\n*Design Vision & Notes:*\n${formData.designDescription}\n\n` +
      `“Har Creation Mein Mehnat Aur Perfection!”`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstError = Object.keys(errors)[0] || 'customerName';
      const el = document.getElementById(firstError);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const dims = [
        formData.height ? `H: ${formData.height}` : null,
        formData.width ? `W: ${formData.width}` : null,
        formData.depth ? `D: ${formData.depth}` : null,
      ].filter(Boolean).join(' × ');

      const enquiryRecord = {
        customerName: formData.customerName,
        mobile: formData.whatsappNumber,
        email: formData.email,
        modelCategory: formData.productCategory,
        dimensions: dims || 'Custom',
        preferredMaterial: formData.preferredMaterial,
        colourFinish: formData.colourFinish,
        lighting: formData.lightingRequirements,
        quantity: formData.quantity,
        cityState: formData.deliveryLocation,
        budgetRange: formData.budgetInr ? `₹${formData.budgetInr}` : 'Not specified',
        deliveryDate: formData.requiredDate,
        designDescription: formData.designDescription,
        referenceImageName: referenceFile ? referenceFile.name : null,
      };

      const result = saveEnquiry(enquiryRecord);
      setLoading(false);

      if (result.success) {
        setSubmissionSuccess(result.record);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#C6A15B', '#124B3D', '#151515', '#F7F6F2']
          });
        } catch {
          // ignore
        }
      } else {
        setErrors({ form: 'An error occurred while saving. Please click the direct WhatsApp button below.' });
      }
    }, 900);
  };

  const handleOpenWhatsAppDirect = () => {
    const text = buildPrefilledWhatsAppMessage();
    window.open(buildWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-warm-light text-luxury-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Header */}
        <div className="py-4 space-y-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-gold-600 font-medium">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-luxury-charcoal/70">Custom Order Studio</span>
          </div>

          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/10 border border-emerald-900/20 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Bespoke Handcrafted Commission</span>
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-charcoal tracking-tight leading-tight">
              Your Idea. Our Craft. <br className="hidden sm:inline" />
              <span className="font-cormorant italic text-gold-600">One Extraordinary Creation.</span>
            </h1>

            <p className="text-luxury-charcoal/75 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
              Let us bring your vision to life. Request custom Tajiya, Gumbad, Minar, Dargah replicas, and architectural models engineered with sub-millimeter thermocol fretwork and royal illumination.
            </p>
          </div>
        </div>

        {/* Quick WhatsApp Assistance Banner */}
        <div className="mt-6 p-5 rounded-card bg-white border border-subtle shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-luxury-charcoal">Prefer discussing directly on WhatsApp?</p>
              <p className="text-xs text-luxury-charcoal/70">Send rough sketches, monument photos, or voice notes straight to Master Craftsman Samsher Alam.</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleOpenWhatsAppDirect}
            className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs tracking-wide flex items-center gap-2 whitespace-nowrap transition-all shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

        {/* Success Modal / Banner */}
        {submissionSuccess && (
          <div className="mt-8 p-6 sm:p-8 rounded-card bg-emerald-50 border border-emerald-200 text-emerald-900 shadow-md animate-fade-in">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0 mt-0.5" />
              <div className="space-y-3 flex-1">
                <h3 className="font-serif text-2xl font-bold text-emerald-950">
                  Enquiry Received Successfully!
                </h3>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  Thank you, <strong className="text-emerald-950">{submissionSuccess.customerName}</strong>. Your custom request for a <strong>{submissionSuccess.modelCategory}</strong> has been saved with Reference ID: <span className="font-mono font-bold bg-white px-2 py-0.5 rounded border border-emerald-200 text-xs text-emerald-900">{submissionSuccess.id}</span>.
                </p>
                <p className="text-xs text-emerald-700">
                  For the fastest verification of custom dimensions, materials, and delivery feasibility, connect with us on WhatsApp with this request prefilled:
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={handleOpenWhatsAppDirect}
                    className="px-6 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Prefilled Summary to WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmissionSuccess(null)}
                    className="px-5 py-2.5 rounded-full bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-medium text-xs tracking-wider transition-all cursor-pointer"
                  >
                    Create Another Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Custom Order Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-8">

          {/* Section 1: Customer Contact Details */}
          <div className="bg-white p-6 sm:p-8 rounded-card border border-subtle shadow-sm space-y-6">
            <div className="border-b border-subtle pb-4">
              <h2 className="font-serif text-lg font-bold text-luxury-charcoal flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-700 text-xs flex items-center justify-center font-sans font-bold">1</span>
                Contact Information
              </h2>
              <p className="text-xs text-luxury-charcoal/60 mt-0.5">We will use this to share model dimensions, photos, and progress updates.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-luxury-charcoal uppercase tracking-wider mb-1.5" htmlFor="customerName">
                  Customer Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder="e.g. Mohammad Tariq"
                  className={`w-full px-4 py-2.5 rounded-md border text-sm transition-all focus:outline-none ${
                    errors.customerName 
                      ? 'border-red-400 bg-red-50/50 focus:border-red-500' 
                      : 'border-subtle bg-warm-light/40 focus:border-gold-500 focus:bg-white'
                  }`}
                />
                {errors.customerName && <p className="text-red-500 text-xs mt-1">{errors.customerName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-luxury-charcoal uppercase tracking-wider mb-1.5" htmlFor="whatsappNumber">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleInputChange}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full px-4 py-2.5 rounded-md border text-sm transition-all focus:outline-none ${
                    errors.whatsappNumber 
                      ? 'border-red-400 bg-red-50/50 focus:border-red-500' 
                      : 'border-subtle bg-warm-light/40 focus:border-gold-500 focus:bg-white'
                  }`}
                />
                {errors.whatsappNumber && <p className="text-red-500 text-xs mt-1">{errors.whatsappNumber}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-luxury-charcoal uppercase tracking-wider mb-1.5" htmlFor="email">
                  Email Address <span className="text-luxury-charcoal/40 font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. tariq@example.com"
                  className="w-full px-4 py-2.5 rounded-md border border-subtle bg-warm-light/40 focus:border-gold-500 focus:bg-white text-sm transition-all focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Model Category & Required Dimensions */}
          <div className="bg-white p-6 sm:p-8 rounded-card border border-subtle shadow-sm space-y-6">
            <div className="border-b border-subtle pb-4">
              <h2 className="font-serif text-lg font-bold text-luxury-charcoal flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-700 text-xs flex items-center justify-center font-sans font-bold">2</span>
                Model Category & Physical Scale
              </h2>
              <p className="text-xs text-luxury-charcoal/60 mt-0.5">Specify the type of handcrafted structure and target dimensions.</p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-luxury-charcoal uppercase tracking-wider mb-1.5" htmlFor="productCategory">
                  Product Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="productCategory"
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-md border border-subtle bg-warm-light/40 focus:border-gold-500 focus:bg-white text-sm transition-all focus:outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Three-dimensional inputs: Height, Width, Depth */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-luxury-charcoal uppercase tracking-wider flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-gold-600" />
                    <span>Target Dimensions (Height, Width, Depth) <span className="text-red-500">*</span></span>
                  </label>
                  <span className="text-[11px] text-luxury-charcoal/60">Feet or Inches</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      placeholder="Height (e.g. 4 ft / 48 in)"
                      className="w-full px-3.5 py-2.5 rounded-md border border-subtle bg-warm-light/40 focus:border-gold-500 focus:bg-white text-sm transition-all focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="width"
                      value={formData.width}
                      onChange={handleInputChange}
                      placeholder="Width / Base (e.g. 3 ft)"
                      className="w-full px-3.5 py-2.5 rounded-md border border-subtle bg-warm-light/40 focus:border-gold-500 focus:bg-white text-sm transition-all focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="depth"
                      value={formData.depth}
                      onChange={handleInputChange}
                      placeholder="Depth (e.g. 2 ft)"
                      className="w-full px-3.5 py-2.5 rounded-md border border-subtle bg-warm-light/40 focus:border-gold-500 focus:bg-white text-sm transition-all focus:outline-none"
                    />
                  </div>
                </div>
                {errors.dimensions && <p className="text-red-500 text-xs mt-1.5">{errors.dimensions}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-luxury-charcoal uppercase tracking-wider mb-1.5" htmlFor="quantity">
                  Quantity Required
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="100"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-24 px-3.5 py-2 rounded-md border border-subtle bg-warm-light/40 focus:border-gold-500 focus:bg-white text-sm font-semibold text-center focus:outline-none"
                  />
                  <span className="text-xs text-luxury-charcoal/60">Piece(s)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Material, Colour & Lighting Customization */}
          <div className="bg-white p-6 sm:p-8 rounded-card border border-subtle shadow-sm space-y-6">
            <div className="border-b border-subtle pb-4">
              <h2 className="font-serif text-lg font-bold text-luxury-charcoal flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-700 text-xs flex items-center justify-center font-sans font-bold">3</span>
                Materials, Finishes & Illumination
              </h2>
              <p className="text-xs text-luxury-charcoal/60 mt-0.5">Customize the artistic feel, foils, and internal lighting systems.</p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-luxury-charcoal uppercase tracking-wider mb-1.5" htmlFor="preferredMaterial">
                  Preferred Material
                </label>
                <select
                  id="preferredMaterial"
                  name="preferredMaterial"
                  value={formData.preferredMaterial}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-md border border-subtle bg-warm-light/40 focus:border-gold-500 focus:bg-white text-sm transition-all focus:outline-none"
                >
                  {materialOptions.map((mat) => (
                    <option key={mat} value={mat}>{mat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-luxury-charcoal uppercase tracking-wider mb-1.5 flex items-center gap-1.5" htmlFor="colourFinish">
                  <Palette className="w-3.5 h-3.5 text-gold-600" />
                  <span>Colour & Finish</span>
                </label>
                <select
                  id="colourFinish"
                  name="colourFinish"
                  value={formData.colourFinish}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-md border border-subtle bg-warm-light/40 focus:border-gold-500 focus:bg-white text-sm transition-all focus:outline-none"
                >
                  {finishOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-luxury-charcoal uppercase tracking-wider mb-1.5 flex items-center gap-1.5" htmlFor="lightingRequirements">
                  <Lightbulb className="w-3.5 h-3.5 text-gold-600" />
                  <span>Lighting Requirements</span>
                </label>
                <select
                  id="lightingRequirements"
                  name="lightingRequirements"
                  value={formData.lightingRequirements}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-md border border-subtle bg-warm-light/40 focus:border-gold-500 focus:bg-white text-sm transition-all focus:outline-none"
                >
                  {lightingOptions.map((light) => (
                    <option key={light} value={light}>{light}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 4: Budget, Delivery & Scheduling */}
          <div className="bg-white p-6 sm:p-8 rounded-card border border-subtle shadow-sm space-y-6">
            <div className="border-b border-subtle pb-4">
              <h2 className="font-serif text-lg font-bold text-luxury-charcoal flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-700 text-xs flex items-center justify-center font-sans font-bold">4</span>
                Budget, Location & Scheduling
              </h2>
              <p className="text-xs text-luxury-charcoal/60 mt-0.5">All India dispatch is tailored to safe wooden crating and structural dimensions.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-luxury-charcoal uppercase tracking-wider mb-1.5 flex items-center gap-1.5" htmlFor="deliveryLocation">
                  <MapPin className="w-3.5 h-3.5 text-gold-600" />
                  <span>Delivery Location (City & State) <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  id="deliveryLocation"
                  name="deliveryLocation"
                  value={formData.deliveryLocation}
                  onChange={handleInputChange}
                  placeholder="e.g. Ranchi, Jharkhand / Mumbai, MH"
                  className={`w-full px-4 py-2.5 rounded-md border text-sm transition-all focus:outline-none ${
                    errors.deliveryLocation 
                      ? 'border-red-400 bg-red-50/50 focus:border-red-500' 
                      : 'border-subtle bg-warm-light/40 focus:border-gold-500 focus:bg-white'
                  }`}
                />
                {errors.deliveryLocation && <p className="text-red-500 text-xs mt-1">{errors.deliveryLocation}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-luxury-charcoal uppercase tracking-wider mb-1.5" htmlFor="budgetInr">
                  Target Budget in INR <span className="text-luxury-charcoal/40 font-normal lowercase">(optional)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-luxury-charcoal/50 text-sm font-semibold">₹</span>
                  <input
                    type="text"
                    id="budgetInr"
                    name="budgetInr"
                    value={formData.budgetInr}
                    onChange={handleInputChange}
                    placeholder="e.g. 25000"
                    className="w-full pl-8 pr-4 py-2.5 rounded-md border border-subtle bg-warm-light/40 focus:border-gold-500 focus:bg-white text-sm transition-all focus:outline-none"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-luxury-charcoal uppercase tracking-wider mb-1.5 flex items-center gap-1.5" htmlFor="requiredDate">
                  <Calendar className="w-3.5 h-3.5 text-gold-600" />
                  <span>Required Date / Event Occasion <span className="text-luxury-charcoal/40 font-normal lowercase">(optional)</span></span>
                </label>
                <input
                  type="date"
                  id="requiredDate"
                  name="requiredDate"
                  value={formData.requiredDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-md border border-subtle bg-warm-light/40 focus:border-gold-500 focus:bg-white text-sm transition-all focus:outline-none"
                />
                <p className="text-[11px] text-luxury-charcoal/60 mt-1">Please note handcrafting intricate models takes between 10 to 25 days depending on tier count.</p>
              </div>
            </div>
          </div>

          {/* Section 5: Design Description & Reference Upload */}
          <div className="bg-white p-6 sm:p-8 rounded-card border border-subtle shadow-sm space-y-6">
            <div className="border-b border-subtle pb-4">
              <h2 className="font-serif text-lg font-bold text-luxury-charcoal flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-700 text-xs flex items-center justify-center font-sans font-bold">5</span>
                Design Description & Reference Image
              </h2>
              <p className="text-xs text-luxury-charcoal/60 mt-0.5">Describe your shrine inspiration, arch shapes, and upload any sketch or photograph.</p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-luxury-charcoal uppercase tracking-wider mb-1.5" htmlFor="designDescription">
                  Design Description & Specific Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="designDescription"
                  name="designDescription"
                  rows={4}
                  value={formData.designDescription}
                  onChange={handleInputChange}
                  placeholder="Describe your design vision: e.g. 5-tier traditional Tajiya with scalloped arches, multi-layer kalas finials, gold arabesque jali screens, and emerald backlight..."
                  className={`w-full px-4 py-3 rounded-md border text-sm transition-all focus:outline-none ${
                    errors.designDescription 
                      ? 'border-red-400 bg-red-50/50 focus:border-red-500' 
                      : 'border-subtle bg-warm-light/40 focus:border-gold-500 focus:bg-white'
                  }`}
                />
                {errors.designDescription && <p className="text-red-500 text-xs mt-1">{errors.designDescription}</p>}
              </div>

              {/* Image Upload Box */}
              <div>
                <label className="block text-xs font-semibold text-luxury-charcoal uppercase tracking-wider mb-1.5">
                  Reference Image Upload <span className="text-luxury-charcoal/40 font-normal lowercase">(PNG, JPG up to 8MB)</span>
                </label>

                {!referenceFile ? (
                  <label className="border-2 border-dashed border-subtle hover:border-gold-500/60 rounded-card p-6 flex flex-col items-center justify-center cursor-pointer bg-warm-light/20 hover:bg-white transition-all text-center">
                    <Upload className="w-8 h-8 text-gold-600 mb-2" />
                    <span className="text-sm font-semibold text-luxury-charcoal">Click to upload reference image or sketch</span>
                    <span className="text-xs text-luxury-charcoal/50 mt-1">Photos of historical shrines, architectural drawings, or rough drafts</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="p-4 rounded-card border border-gold-500/30 bg-warm-light/40 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {previewUrl ? (
                        <img src={previewUrl} alt="Preview" className="w-12 h-12 object-cover rounded border border-subtle" />
                      ) : (
                        <ImageIcon className="w-8 h-8 text-gold-600" />
                      )}
                      <div>
                        <p className="text-xs font-semibold text-luxury-charcoal">{referenceFile.name}</p>
                        <p className="text-[11px] text-luxury-charcoal/60">{(referenceFile.size / 1024).toFixed(1)} KB</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-1.5 text-luxury-charcoal/60 hover:text-red-500 rounded-full hover:bg-white transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
                {errors.referenceFile && <p className="text-red-500 text-xs mt-1">{errors.referenceFile}</p>}
              </div>
            </div>
          </div>

          {errors.form && (
            <div className="p-4 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errors.form}</span>
            </div>
          )}

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-luxury-charcoal/70">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Direct craft consultation. No automated charges or fake payments.</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleOpenWhatsAppDirect}
                className="flex-1 sm:flex-none px-6 py-3 rounded-full border border-[#25D366] text-[#124B3D] hover:bg-[#25D366]/10 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Fallback</span>
              </button>

              <button
                type="submit"
                disabled={loading}
                className="flex-1 sm:flex-none px-8 py-3 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Custom Enquiry</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}
