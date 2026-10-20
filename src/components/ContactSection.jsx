import React, { useState } from 'react';
import {
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  ShieldCheck,
  Package,
  Video,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getSiteConfig, buildWhatsAppUrl } from '../config/siteConfig';

export default function ContactSection({ isPage = false }) {
  const siteConfig = getSiteConfig();

  // Interactive Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Grand Tajiya Shrine',
    dimension: '3 to 6 Feet (Sanctum/Gallery)',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    { id: 'Grand Tajiya Shrine', label: 'Grand Tajiya Shrine', icon: '🕌' },
    { id: 'Gumbad-e-Khazra Model', label: 'Gumbad-e-Khazra', icon: '🟢' },
    { id: 'Holy Roza & Dargah', label: 'Holy Roza / Dargah', icon: '🕋' },
    { id: 'Custom Architectural Model', label: 'Custom Monument', icon: '✨' }
  ];

  const dimensionOptions = [
    'Compact Display (Under 3 Feet)',
    'Standard Gallery (3 to 6 Feet)',
    'Monumental Procession (6 to 12+ Feet)',
    'Custom Dimensions (To Be Discussed)'
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Trigger celebratory gold confetti
    try {
      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#D4AF37', '#F3E5AB', '#124B3D', '#FAF7F2']
      });
    } catch {
      // Fallback gracefully if confetti fails
    }

    // Build structured WhatsApp message
    const lines = [
      `*New Studio Design Inquiry - Being Samsher Crafting*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Client Name:* ${formData.name || 'Valued Client'}`,
      `📱 *Contact/WhatsApp:* ${formData.phone || 'Provided via Chat'}`,
      `🏷️ *Project Category:* ${formData.category}`,
      `📐 *Preferred Scale:* ${formData.dimension}`,
      formData.message ? `📝 *Specific Details:* ${formData.message}` : null,
      `📍 *Location:* India Delivery`,
      `━━━━━━━━━━━━━━━━━━━━━━━━`,
      `_Assalamu Alaikum Samsher Bhai, please share pricing and availability for this custom commission._`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines)}`;
    setIsSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 450);
  };

  return (
    <section
      id="contact"
      className={`relative overflow-hidden bg-[#0A0D14] text-sand-100 ${isPage ? 'pt-8 sm:pt-12 pb-12 sm:pb-16' : 'pt-10 sm:pt-12 pb-14 sm:pb-16 border-t border-gold-500/15'
        }`}
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-gold-500/10 via-emerald-600/5 to-gold-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">


          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Let’s Build Something <br className="hidden sm:inline" />
            <span className="font-cormorant italic font-normal text-gold-gradient-dark">
              Sacred & Timeless Together.
            </span>
          </h2>


          <div className="flex items-center justify-center gap-3 pt-1 text-xs font-mono text-sand-300/70">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>Studio Hours: 9:00 AM – 9:00 PM IST</span>
            </span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">⚡ Avg. WhatsApp Reply: ~15 mins</span>
          </div>
        </div>

        {/* Interactive Consultation Form & Studio Guarantees */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left / Form: Quick Interactive Inquiry Builder */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-gold-500/25 shadow-2xl backdrop-blur-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-gold-400" />
                  <span>Direct Artisan Inquiry</span>
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Request a Custom Quote
                </h3>
              </div>
              <span className="text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/40 self-start sm:self-auto font-mono">
                Instant WhatsApp Output
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">

              {/* Category Picker */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-sand-200 uppercase tracking-wider">
                  Select Model Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, category: cat.id })}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-20 ${formData.category === cat.id
                        ? 'bg-gold-500/20 border-gold-400 text-white shadow-sm ring-1 ring-gold-400'
                        : 'bg-black/30 border-white/15 text-sand-300 hover:border-white/30'
                        }`}
                    >
                      <span className="text-lg">{cat.icon}</span>
                      <span className="text-[11px] font-medium leading-tight line-clamp-2">
                        {cat.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Name & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-sand-200 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mohd. Rizwan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-sand-400/50 text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-sand-200 uppercase tracking-wider">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-sand-400/50 text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>
              </div>

              {/* Preferred Dimensions / Scale */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-sand-200 uppercase tracking-wider">
                  Preferred Scale / Height
                </label>
                <select
                  value={formData.dimension}
                  onChange={(e) => setFormData({ ...formData, dimension: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition-colors cursor-pointer"
                >
                  {dimensionOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-charcoal-950 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes / Special Requests */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-sand-200 uppercase tracking-wider">
                  Specific Requirements or Deadline (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. Required before Muharram 5th, warm amber LED lighting, delivery to Lucknow..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-sand-400/50 text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-gold-sm hover:shadow-gold-md hover:scale-[1.01] flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-charcoal-950" />
                  <span>Send Consultation Request via WhatsApp</span>
                </button>
              </div>

              {isSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Inquiry generated! Opening WhatsApp chat with Samsher Alam...</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Studio Commitments & Trust Guarantees */}
          <div className="lg:col-span-5 space-y-5">

            {/* Master Artisan Bio Card */}
            <div className="rounded-3xl p-5 sm:p-6 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-gold-500/35 backdrop-blur-md shadow-2xl space-y-4 overflow-hidden group">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
                <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-gold-400/80 shadow-lg shrink-0 bg-charcoal-900 relative">
                  <img
                    src="/assets/images/samsher_alam_founder.jpg"
                    alt="Samsher Alam - Founder: Being Samsher Crafting"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="space-y-1.5 text-center sm:text-left flex-1">

                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">Samsher Alam</h4>
                  <p className="text-xs sm:text-sm text-gold-400 font-medium">Founder: Being Samsher Crafting</p>
                  <p className="text-[11px] text-sand-300/80 font-mono pt-0.5">
                    📍 Giridih Atelier, Jharkhand • PAN-INDIA DELIVERY
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/35 border border-white/10">
                <p className="text-xs sm:text-sm text-sand-100/90 leading-relaxed italic font-cormorant">
                  “Har creation mein mehnat aur perfection. From raw thermocol blocks to multi-tiered golden shrines, our pledge is sacred authenticity and structural excellence.”
                </p>
              </div>

              <div className="pt-1 flex items-center justify-between text-xs font-mono text-sand-300/80">
                <span className="flex items-center gap-1.5 text-gold-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  Direct Studio Commission
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Custom Orders
                </span>
              </div>
            </div>

            {/* 4 Pillars of Studio Assurance */}
            <div className="rounded-3xl p-6 bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/15 backdrop-blur-md shadow-xl space-y-4">
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-300">
                Studio Quality & Delivery Assurances
              </h4>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Reinforced Wooden Crating</h5>
                    <p className="text-[11px] text-sand-300/70 leading-relaxed">
                      Every model is cushioned in custom velvet high-density foam and sealed in wooden crates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">360° Video Proof Before Dispatch</h5>
                    <p className="text-[11px] text-sand-300/70 leading-relaxed">
                      We share comprehensive HD inspection video of the completed model with lighting test.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Authentic Architectural Symmetry</h5>
                    <p className="text-[11px] text-sand-300/70 leading-relaxed">
                      Laser-precise hand-carved arches, octagonal pillars, and 24k-gold finish embellishments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Transit Safety Commitment</h5>
                    <p className="text-[11px] text-sand-300/70 leading-relaxed">
                      Full tracking and freight coordination until the crate arrives safely at your doorstep.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
