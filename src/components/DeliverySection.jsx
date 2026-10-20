import React from 'react';
import { Sparkles, Truck, ShieldCheck, MapPin, Package, CheckCircle2 } from 'lucide-react';

export default function DeliverySection() {
  const hubs = [
    { city: "Lucknow", state: "Uttar Pradesh", time: "2-3 Days" },
    { city: "Hyderabad", state: "Telangana", time: "3-4 Days" },
    { city: "Mumbai", state: "Maharashtra", time: "3-5 Days" },
    { city: "Patna", state: "Bihar", time: "1-2 Days" },
    { city: "Kolkata", state: "West Bengal", time: "1-2 Days" },
    { city: "Delhi NCR", state: "National Capital", time: "2-3 Days" },
    { city: "Ranchi & Giridih", state: "Jharkhand (Local)", time: "Same / Next Day" },
    { city: "Bengaluru & Chennai", state: "South India", time: "4-5 Days" },
  ];

  const packageLayers = [
    {
      step: "01",
      title: "Scratch-Free Soft Wrap",
      desc: "Soft micro-fiber sheet protects delicate gold foil leafing and lacquer surfaces from surface abrasion."
    },
    {
      step: "02",
      title: "High-Density Foam Cushioning",
      desc: "Custom contoured foam blocks hug dome curves and minarets to neutralize mechanical vibrations."
    },
    {
      step: "03",
      title: "Reinforced Exterior Wooden Crate",
      desc: "Heavy-duty pine-wood frame absorbs freight impacts and prevents crushing during transit."
    },
    {
      step: "04",
      title: "Weather-Sealed Moisture Barrier",
      desc: "Heavy stretch film wrapping keeps ambient moisture, rain, and dust completely out."
    }
  ];

  return (
    <section className="relative py-28 bg-[#040814] bg-islamic-pattern overflow-hidden border-t border-gold-500/15">
      {/* Background soft glow */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5 text-gold-400" />
            <span>Pan-India Logistics</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50 tracking-tight">
            From Our Workshop <br />
            <span className="text-gold-gradient italic font-cormorant">To Your Doorstep</span>
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-3" />

          {/* Highlight Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-sm font-semibold">
            ✨ All India Delivery Available
          </div>

          <p className="text-ivory-200/85 text-base sm:text-lg leading-relaxed font-sans pt-2">
            “Every creation is carefully packed and prepared for safe transportation from our workshop to your doorstep.”
          </p>
        </div>

        {/* 2-Column Delivery Concept: Packaging Protocol & Route Hubs */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: 4-Layer Packaging Armor */}
          <div className="lg:col-span-6 rounded-3xl p-8 bg-gradient-to-b from-navy-900/95 to-navy-950/95 border border-gold-500/25 shadow-xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-navy-800">
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-400/30 flex items-center justify-center text-gold-300">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-ivory-50">4-Stage Shockproof Packaging</h3>
                <p className="text-xs text-gold-400">Zero Transit-Damage Architecture</p>
              </div>
            </div>

            <div className="space-y-4">
              {packageLayers.map((layer) => (
                <div key={layer.step} className="flex gap-4 p-4 rounded-2xl bg-navy-950/60 border border-gold-500/15">
                  <span className="font-serif text-xl font-bold text-gold-400/90 shrink-0">
                    {layer.step}
                  </span>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-ivory-50">{layer.title}</h4>
                    <p className="text-xs text-ivory-300/75 mt-1 leading-relaxed">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: India Delivery Hubs & Interactive Map Concept */}
          <div className="lg:col-span-6 rounded-3xl p-8 bg-gradient-to-b from-navy-900/95 to-navy-950/95 border border-gold-500/25 shadow-xl flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-navy-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-400/30 flex items-center justify-center text-gold-300">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-ivory-50">Studio Hub: Giridih, Jharkhand</h3>
                  <p className="text-xs text-gold-400">Direct Express Transit to Every State</p>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                Active Routes
              </span>
            </div>

            {/* Hubs Grid */}
            <div className="grid grid-cols-2 gap-3">
              {hubs.map((hub, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-navy-950/70 border border-navy-800 hover:border-gold-500/40 transition-colors flex flex-col justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                    <span className="text-xs font-serif font-bold text-ivory-50">{hub.city}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-ivory-300/70">
                    <span>{hub.state}</span>
                    <span className="text-gold-300/90 font-mono font-medium">{hub.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Note & Assurance */}
            <div className="p-4 rounded-2xl bg-gold-500/10 border border-gold-400/30 flex items-center gap-3 text-xs text-gold-200">
              <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
              <span>Full shipment insurance and step-by-step dispatch tracking photos sent on WhatsApp.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
