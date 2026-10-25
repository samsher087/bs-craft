import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function TrustDeliverySection() {
  const deliveryProtocols = [
    "Multi-layer scratch-resistant velvet and cotton inner wrapping",
    "High-density custom shock-absorbing foam molds custom fitted to each dome & minar",
    "Double-walled heavy exterior wooden crates with structural corner stiffeners",
    "Fragile consignment handling markings and weather-resistant outer wrap",
    "Pre-dispatch photo and video verification sent directly via WhatsApp"
  ];

  return (
    <section className="pt-8 sm:pt-10 pb-8 sm:pb-10 bg-[#FAF7F2] text-charcoal-900 border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 pb-6 sm:pb-7">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold-600 font-semibold">
            Integrity in Transit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-charcoal-900">
            Customer Trust & <span className="font-cormorant italic font-normal text-gold-600">Safe Delivery</span>
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 font-sans">
            Delicate thermocol architectural art requires engineered packaging. We build heavy-duty wooden crates designed for express transport.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Packaging Photo */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-sand-100 border border-subtle shadow-xl aspect-square">
              <img
                src="/assets/images/dispatch_packaging.jpg"
                alt="4-Step Safe Delivery Across India: Protected, Secured, Loaded, and Dispatched"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] text-charcoal-500 font-mono mt-2.5 text-center">
              Our 4-step transit protocol — protective wrap, wooden framing, secured loading & pan-India dispatch.
            </p>
          </div>

          {/* Delivery Points & Feasibility Note Box */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#181B22] border border-gold-500/25 text-white shadow-xl space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-white">
                  Engineered for Safe Pan-India Transit
                </h3>
                <p className="text-xs sm:text-sm text-sand-200/85 leading-relaxed font-sans">
                  Each model is built with modular sectional joints where required, allowing tall structures (up to 12+ feet) to be safely transported, assembled, and locked on-site with zero structural compromise.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-sand-100 font-sans">
                {deliveryProtocols.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>

              {/* Feasibility Alert Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-gold-400/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-gold-300">
                  <AlertCircle className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>All India Delivery Availability Notice</span>
                </div>
                <p className="text-xs text-sand-200/80 leading-relaxed font-sans">
                  We deliver to all states across India. Because each model varies in height, tier count, and delicate perimeter filigree, <strong className="text-white">final shipping availability and transit logistics are confirmed upfront</strong> according to your exact product dimensions, destination city, and courier transit feasibility.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
