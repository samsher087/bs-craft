import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function FeaturedCollections() {
  const collections = [
    {
      title: "Tajiya Masterpieces",
      category: "Tajiya",
      image: "/assets/images/grand_tajiya_illuminated.jpg",
      description: "Symmetrical multi-tiered shrines engineered with handcrafted thermocol fretwork and golden illumination.",
      link: "/products?category=Tajiya",
      size: "large"
    },
    {
      title: "Sacred Gumbad & Cupolas",
      category: "Gumbad",
      image: "/assets/images/royal_blue_dome.jpg",
      description: "Fluted domes with ornate kalas finials, scalloped Mughal arches, and ambient interior warmth.",
      link: "/products?category=Gumbad",
      size: "regular"
    },
    {
      title: "Gumbad-e-Khazra Replicas",
      category: "Gumbad-e-Khazra / Mini Madina",
      image: "/assets/images/gumbad_e_khazra.jpg",
      description: "Proportionate spiritual replicas of the iconic Green Dome of Madina.",
      link: "/products?category=Gumbad-e-Khazra / Mini Madina",
      size: "regular"
    },
    {
      title: "Towering Royal Minars",
      category: "Minar",
      image: "/assets/images/custom_minar.jpg",
      description: "Slender architectural minarets featuring observation balconies and glowing lantern beacons.",
      link: "/products?category=Minar",
      size: "regular"
    },
    {
      title: "Precision Thermocol Jali",
      category: "Thermocol Cutting & Fine Jali Work",
      image: "/assets/images/workshop_jali_cutting.jpg",
      description: "Micro-knife arabesque geometric lace screens with sub-millimeter tolerances.",
      link: "/products?category=Thermocol Cutting & Fine Jali Work",
      size: "large"
    }
  ];

  return (
    <section id="featured-collections" className="py-24 sm:py-28 bg-sand-100 text-charcoal-900 border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-subtle">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold-600 font-semibold">
              Curated Showroom
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-charcoal-900">
              Featured <span className="font-cormorant italic font-normal text-gold-600">Collections</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal-700 hover:text-charcoal-900 uppercase tracking-wider group"
          >
            <span>View All Collections</span>
            <ArrowUpRight className="w-4 h-4 text-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Editorial Asymmetrical Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-7">
          
          {/* Card 1: Large Span */}
          <div className="md:col-span-7">
            <Link
              to={collections[0].link}
              className="group relative rounded-card overflow-hidden block aspect-[16/11] bg-charcoal-900 shadow-subtle hover:shadow-medium transition-all duration-500"
            >
              <img
                src={collections[0].image}
                alt={collections[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />
              
              <div className="absolute bottom-6 inset-x-6 text-white space-y-1.5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400 font-semibold">
                  {collections[0].category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold group-hover:text-gold-200 transition-colors">
                  {collections[0].title}
                </h3>
                <p className="text-xs text-sand-200/80 font-sans max-w-lg line-clamp-2">
                  {collections[0].description}
                </p>
              </div>
            </Link>
          </div>

          {/* Card 2: Regular Span */}
          <div className="md:col-span-5">
            <Link
              to={collections[1].link}
              className="group relative rounded-card overflow-hidden block aspect-[16/11] md:aspect-auto md:h-full bg-charcoal-900 shadow-subtle hover:shadow-medium transition-all duration-500"
            >
              <img
                src={collections[1].image}
                alt={collections[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />
              
              <div className="absolute bottom-6 inset-x-6 text-white space-y-1.5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400 font-semibold">
                  {collections[1].category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold group-hover:text-gold-200 transition-colors">
                  {collections[1].title}
                </h3>
                <p className="text-xs text-sand-200/80 font-sans line-clamp-2">
                  {collections[1].description}
                </p>
              </div>
            </Link>
          </div>

          {/* Bottom 3 Cards */}
          {collections.slice(2).map((col, idx) => (
            <div key={idx} className="md:col-span-4">
              <Link
                to={col.link}
                className="group relative rounded-card overflow-hidden block aspect-[4/3] bg-charcoal-900 shadow-subtle hover:shadow-medium transition-all duration-500"
              >
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />
                
                <div className="absolute bottom-5 inset-x-5 text-white space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400 font-semibold">
                    {col.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold group-hover:text-gold-200 transition-colors line-clamp-1">
                    {col.title}
                  </h3>
                  <p className="text-xs text-sand-200/80 font-sans line-clamp-1">
                    {col.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
