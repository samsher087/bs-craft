import React from 'react';
import { Sparkles, Scissors, PenTool, Hammer, Palette, Eye, Lightbulb, PackageCheck, Truck } from 'lucide-react';

export default function WorkshopSection() {
  const steps = [
    {
      title: "Thermocol Precision Cutting",
      category: "Foundation",
      icon: Scissors,
      image: "/assets/images/workshop_jali_cutting.jpg",
      caption: "High-density virgin blocks are sculpted using specialized hot wires and calibrated razor guides."
    },
    {
      title: "Jali Lattice Carving",
      category: "Perforation",
      icon: PenTool,
      image: "/assets/images/workshop_jali_cutting.jpg",
      caption: "Dozens of hours spent hand-carving micro-scale arabesque stars with sub-millimeter accuracy."
    },
    {
      title: "Structural Assembly",
      category: "Engineering",
      icon: Hammer,
      image: "/assets/images/mini_madina_model.jpg",
      caption: "Interlocking wooden dowels and polymer adhesives secure multi-tier architectural tiers."
    },
    {
      title: "Fine Detailing & Gilding",
      category: "Ornamentation",
      icon: Palette,
      image: "/assets/images/hero_royal_tajiya.jpg",
      caption: "Gold foil leafing, scalloped borders, and minaret pinnacle crown embellishments."
    },
    {
      title: "Lighting Installation",
      category: "Electronics",
      icon: Lightbulb,
      image: "/assets/images/grand_gumbad_night.jpg",
      caption: "Concealed 12V LED channels calibrated for warm ceremonial radiance and longevity."
    },
    {
      title: "Safe Packaging & Dispatch",
      category: "Logistics",
      icon: Truck,
      image: "/assets/images/grand_gumbad_day.jpg",
      caption: "Encased in shock-absorbing foam molds and rigid exterior wooden crates for pan-India transit."
    }
  ];

  return (
    <section className="relative py-28 bg-[#040814] overflow-hidden border-t border-gold-500/15">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Behind The Scenes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50 tracking-tight">
            Behind Every <span className="text-gold-gradient italic font-cormorant">Creation</span>
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-3" />

          <p className="text-ivory-200/80 text-sm sm:text-base leading-relaxed font-sans">
            Witness the discipline, passion, and meticulous hand movements inside our Giridih crafting studio that turn ideas into timeless sacred art.
          </p>
        </div>

        {/* Workshop Step Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-navy-900/80 border border-gold-500/20 hover:border-gold-400/60 overflow-hidden shadow-xl hover:shadow-gold-md hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-80" />

                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-navy-950/90 border border-gold-400/30 text-gold-300 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300">
                    <Icon className="w-4 h-4 text-gold-400" />
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-ivory-50 group-hover:text-gold-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory-300/75 leading-relaxed font-sans">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
