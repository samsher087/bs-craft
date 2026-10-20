import React, { useState } from 'react';
import { Sparkles, MessageCircle, Send, CheckCircle2, ShieldCheck, Phone, FileText, Image as ImageIcon, MapPin, Ruler } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getSiteConfig } from '../config/siteConfig';

export default function CustomOrderSection() {
  const siteConfig = getSiteConfig();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    productType: 'Royal Tajiya',
    requiredSize: '6 to 8 Feet',
    deliveryLocation: '',
    referenceNotes: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const productTypes = [
    'Royal Tajiya',
    'Traditional Tajiya',
    'Modern Tajiya',
    'Grand Gumbad',
    'Gumbad-e-Khazra Replica',
    'Mini Madina Model',
    'Custom Minar Pair',
    'Fine Jali Cutwork Panel',
    'Custom Architectural Structure'
  ];

  const sizeOptions = [
    'Mini (2 to 3.5 Feet)',
    'Medium (4 to 5.5 Feet)',
    'Grand (6 to 8 Feet)',
    'Monumental (9 to 12 Feet)',
    'Mega Procession (14+ Feet)',
    'Custom Dimensions (Specify in notes)'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Assalamu Alaikum / Hello Being Samsher Crafting Team!\n\n` +
      `I would like to enquire about a Custom Order:\n` +
      `• Name: ${formData.name || 'Interested Customer'}\n` +
      `• City / State: ${formData.city || 'Not specified'}\n` +
      `• Product: ${formData.productType}\n` +
      `• Required Size: ${formData.requiredSize}\n` +
      `• Message/Idea: ${formData.message || 'Please share catalogue & quotation details.'}\n\n` +
      `Tagline: Har Creation Mein Mehnat Aur Perfection!`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FFF3C4', '#AA820A', '#101F45']
      });
    } catch {
      // fallback
    }

    // Also trigger WhatsApp with the exact structured message
    setTimeout(() => {
      handleWhatsAppDirect();
    }, 1200);
  };

  return (
    <section id="custom-order" className="relative py-28 bg-[#040814] bg-jali-mesh overflow-hidden border-t border-gold-500/15">
      {/* Background glow halos */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Bespoke Commissioning</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50 tracking-tight">
            Have a Design <span className="text-gold-gradient italic font-cormorant">in Mind?</span>
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-3" />

          <p className="text-ivory-200/85 text-base sm:text-lg leading-relaxed font-sans">
            Share your idea, reference image or required dimensions with us. We’ll help turn your concept into a beautifully crafted creation.
          </p>
        </div>

        {/* Quick Contact Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={handleWhatsAppDirect}
            className="px-7 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us Instantly</span>
          </button>

          <a
            href={`tel:${siteConfig.whatsappNumber}`}
            className="px-7 py-3 rounded-full bg-navy-900 hover:bg-navy-800 text-gold-300 hover:text-white border border-gold-500/40 font-semibold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Call Workshop ({siteConfig.displayPhone})</span>
          </a>
        </div>

        {/* Main Custom Order Enquiry Form */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-navy-900/95 to-navy-950/95 border border-gold-400/30 shadow-2xl backdrop-blur-xl">
            
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 rounded-full bg-gold-500/20 border-2 border-gold-400 flex items-center justify-center text-gold-300 mx-auto shadow-gold-md animate-bounce">
                  <CheckCircle2 className="w-10 h-10 text-gold-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-bold text-ivory-50">
                    Enquiry Received with Reverence!
                  </h3>
                  <p className="text-gold-300 font-cormorant italic text-lg">
                    “Har Creation Mein Mehnat Aur Perfection! ❤️”
                  </p>
                  <p className="text-sm text-ivory-300/80 max-w-md mx-auto">
                    Master Craftsman Samsher Alam and our studio team will review your specifications and contact you on WhatsApp / Phone within 3 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-navy-850 hover:bg-navy-800 text-gold-300 border border-gold-500/30 text-xs font-semibold"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Mohammad Irfan Rizvi"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-gold-500/30 focus:border-gold-400 text-ivory-50 text-sm placeholder:text-navy-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
                    />
                  </div>

                  {/* Mobile / WhatsApp */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-gold-500/30 focus:border-gold-400 text-ivory-50 text-sm placeholder:text-navy-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider">
                      Your City & State *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Lucknow, UP / Mumbai / Patna"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-gold-500/30 focus:border-gold-400 text-ivory-50 text-sm placeholder:text-navy-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
                    />
                  </div>

                  {/* Product Type Dropdown */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider">
                      Product Type *
                    </label>
                    <select
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-gold-500/30 focus:border-gold-400 text-ivory-50 text-sm focus:outline-none focus:ring-1 focus:ring-gold-400"
                    >
                      {productTypes.map((type) => (
                        <option key={type} value={type} className="bg-navy-950 text-ivory-50">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Required Size Dropdown */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider">
                      Required Size / Height *
                    </label>
                    <select
                      name="requiredSize"
                      value={formData.requiredSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-gold-500/30 focus:border-gold-400 text-ivory-50 text-sm focus:outline-none focus:ring-1 focus:ring-gold-400"
                    >
                      {sizeOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-navy-950 text-ivory-50">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Delivery Location Address */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider">
                      Delivery Location / Pincode
                    </label>
                    <input
                      type="text"
                      name="deliveryLocation"
                      placeholder="e.g. Hazratganj, Lucknow (Pincode: 226001)"
                      value={formData.deliveryLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-gold-500/30 focus:border-gold-400 text-ivory-50 text-sm placeholder:text-navy-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
                    />
                  </div>

                </div>

                {/* Reference Photo / Design description */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider flex items-center justify-between">
                    <span>Reference Image / Concept Notes</span>
                    <span className="text-[11px] text-ivory-400 font-normal">Optional</span>
                  </label>
                  <input
                    type="text"
                    name="referenceNotes"
                    placeholder="Describe reference photo or link (you can also attach the photo directly on WhatsApp)"
                    value={formData.referenceNotes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-gold-500/30 focus:border-gold-400 text-ivory-50 text-sm placeholder:text-navy-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
                  />
                </div>

                {/* Detailed Message */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider">
                    Detailed Message & Lighting Preferences
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your event date, required tiers, lighting preference (golden/warm white), or specific design inspirations..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-gold-500/30 focus:border-gold-400 text-ivory-50 text-sm placeholder:text-navy-400 focus:outline-none focus:ring-1 focus:ring-gold-400 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-navy-950 font-bold text-sm uppercase tracking-wider shadow-gold-md hover:shadow-gold-lg hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-navy-950 group-hover:translate-x-1 transition-transform" />
                    <span>Send Custom Enquiry & WhatsApp Link</span>
                  </button>
                  <p className="text-center text-[11px] text-ivory-300/60 mt-3">
                    🔒 Safe & Direct Communication. No Spam. Pan-India Delivery Guaranteed.
                  </p>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
