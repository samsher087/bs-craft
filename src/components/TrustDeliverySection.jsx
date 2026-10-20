import React from 'react';
import { 
  PackageCheck, 
  Truck, 
  ShieldCheck, 
  MapPin, 
  CheckCircle, 
  FileCheck,
  AlertCircle 
} from 'lucide-react';
import { getSiteConfig } from '../config/siteConfig';

export default function TrustDeliverySection() {
  const siteConfig = getSiteConfig();

  const packagingChecklist = [
    "Multi-layer scratch-resistant velvet and cotton inner wrapping",
    "Precision-cut high-density foam cradle custom molded around domes and minars",
    "Heavy-duty double-walled exterior wooden shipping crates with corner stiffeners",
    "Fragile consignment handling markings & moisture-barrier sealing",
    "Comprehensive pre-dispatch photo & video documentation sent to customer",
    "Express logistics tracking with direct dispatch point contact"
  ];

  return (
    <section className="relative py-24 sm:py-28 bg-deep-black overflow-hidden border-t border-gold-500/15">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-royal-emerald/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-900 border border-gold-400/35 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <PackageCheck className="w-3.5 h-3.5 text-gold-400" />
            <span>Safe Transit & Integrity</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-warm-white tracking-tight">
            Customer Trust & <span className="text-gold-gradient italic font-cormorant">Delivery Standards</span>
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-2" />

          <p className="text-warm-white/80 text-sm sm:text-base leading-relaxed font-sans">
            Handcrafted architectural models are delicate works of devotion. We engineer protective wooden crating and custom foam shock absorbers for safe transit across India.
          </p>
        </div>

        {/* Visual Packaging & Dispatch Showcase */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Authentic Packaging Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-gold-400/30 via-royal-emerald/30 to-charcoal-900 border border-gold-400/40 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-charcoal-950">
                <img
                  src="/assets/images/dispatch_packaging.jpg"
                  alt="4-Step Safe Delivery Across India: Protected, Secured, Loaded, and Dispatched"
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-deep-black/90 border border-gold-500/30 backdrop-blur-md flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-warm-white font-medium">Actual Workshop Crating Process</span>
                  </div>
                  <span className="text-gold-400 font-mono text-[11px]">Inspection Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Packaging Protocol & All India Feasibility Notice */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-warm-white">
                Engineered for Safe Delivery
              </h3>
              <p className="text-xs sm:text-sm text-warm-white/75 leading-relaxed font-sans">
                Each model is built with modular sectional joints where needed, allowing monumental creations (up to 12+ feet) to be safely transported, assembled, and locked on-site with zero structural compromise.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-2.5">
              {packagingChecklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-warm-white/85 font-sans">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Critical Feasibility Alert Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-charcoal-900/90 border border-gold-400/30 space-y-2">
              <div className="flex items-center gap-2 text-gold-300 font-semibold text-xs sm:text-sm">
                <AlertCircle className="w-4 h-4 text-gold-400 shrink-0" />
                <span>All India Delivery Notice & Feasibility</span>
              </div>
              <p className="text-xs text-warm-white/75 leading-relaxed font-sans">
                We deliver to all states across India. Because each model varies in height, tier count, and delicate perimeter filigree, <strong>final shipping availability and transit logistics are confirmed upfront</strong> according to your exact product size, destination city, and courier feasibility.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
