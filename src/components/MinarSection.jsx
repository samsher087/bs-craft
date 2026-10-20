import React from 'react';
import { Sparkles, Building2, ArrowUpRight, Compass, Layers, ShieldCheck } from 'lucide-react';

export default function MinarSection({ onSelectProduct, onOpenCustomOrder }) {
  const models = [
    {
      id: "minar-custom",
      title: "Royal Slender Minar Pair",
      category: "Minar",
      height: "7 ft to 14 ft",
      image: "/assets/images/custom_minar.jpg",
      tag: "Architectural Height",
      desc: "Tall vertical minarets featuring observation balconies, geometric fretwork fluting, and illuminated lantern cupolas."
    },
    {
      id: "madina-model",
      title: "Mini Madina Sanctuary Model",
      category: "Mosque-inspired",
      height: "Scale Architectural Model",
      image: "/assets/images/mini_madina_model.jpg",
      tag: "Scale Replica",
      desc: "Complete architectural compound featuring minarets, central dome, pillared porticos, and illuminated courtyards."
    },
    {
      id: "ajmer-model",
      title: "Ajmer Sharif Dargah Tribute",
      category: "Dargah-inspired",
      height: "Sacred Structure",
      image: "/assets/images/ajmer_dargah_model.jpg",
      tag: "Heritage Craft",
      desc: "Replicating the iconic sanctuary with scalloped chhatris, gold leaf crown, and internal warm LED illumination."
    },
    {
      id: "dome-structure",
      title: "Noor Cupola & Decorative Structure",
      category: "Decorative Structure",
      height: "Custom Modular",
      image: "/assets/images/grand_gumbad_day.jpg",
      tag: "Bespoke Design",
      desc: "Ornate stage backdrop, ceremonial archway, and entrance pavilions crafted for spiritual events and exhibitions."
    }
  ];

  return (
    <section id="minar" className="relative py-28 bg-[#040814] bg-jali-mesh border-t border-gold-500/15">
      {/* Background soft glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-gold-400" />
            <span>Islamic Architectural Models</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50 tracking-tight">
            Architectural <span className="text-gold-gradient italic font-cormorant">Craftsmanship</span>
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-3" />

          <p className="text-ivory-200/80 text-sm sm:text-base leading-relaxed font-sans">
            Slender minarets, sacred mosque replicas, and intricate decorative structures engineered with geometric perfection, lightweight durability, and breathtaking illumination.
          </p>
        </div>

        {/* Premium Vertical Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {models.map((model) => (
            <div
              key={model.id}
              className="group relative rounded-3xl bg-gradient-to-b from-navy-900/90 to-navy-950/95 border border-gold-500/20 hover:border-gold-400/60 shadow-xl hover:shadow-gold-md hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Vertical Tall Image Showcase */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-navy-950">
                <img
                  src={model.image}
                  alt={model.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent opacity-80" />

                {/* Floating Tag */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-navy-950/90 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                    {model.category}
                  </span>
                </div>

                {/* Dimensions badge */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-gold-300">
                  <span className="bg-navy-950/80 px-2.5 py-1 rounded-md border border-gold-500/25">
                    {model.height}
                  </span>
                </div>
              </div>

              {/* Vertical Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-ivory-50 group-hover:text-gold-200 transition-colors">
                    {model.title}
                  </h3>
                  <p className="text-xs text-ivory-300/75 leading-relaxed font-sans line-clamp-3">
                    {model.desc}
                  </p>
                </div>

                {/* Card Button */}
                <div className="pt-4 border-t border-navy-800">
                  <button
                    onClick={onOpenCustomOrder}
                    className="w-full py-2.5 rounded-xl bg-navy-850 hover:bg-gold-500 text-gold-300 hover:text-navy-950 border border-gold-500/30 hover:border-transparent text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    <span>Custom Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
