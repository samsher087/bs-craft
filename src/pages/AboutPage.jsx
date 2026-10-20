import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  MapPin,
  CheckCircle,
  Target,
  Eye,
  Hammer,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from '../components/SocialIcons';
import { getSiteConfig } from '../config/siteConfig';

export default function AboutPage() {
  const siteConfig = getSiteConfig();

  const craftingTools = [
    {
      name: "Surgical Micro-Blades & Precision Knives",
      desc: "Specially calibrated angled blades used for sub-millimeter thermocol fretwork and arabesque jali screens."
    },
    {
      name: "Architectural Proportional Calipers",
      desc: "Geometric compasses and dividers to calculate classical Mughal and Indo-Islamic proportion and scale."
    },
    {
      name: "Gold Leafing & Foil Burnishing Tools",
      desc: "Dedicated burnishing irons to adhere metallic foils and 24k gold leaf without creasing or distortion."
    },
    {
      name: "Low-Voltage LED Circuit Rig",
      desc: "Continuity and thermal testing rigs to ensure interior architectural illumination runs cool, safely, and reliably."
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 bg-warm-light text-luxury-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Header */}
        <div className="py-4 space-y-3">
          <div className="flex items-center gap-2 text-xs text-gold-600 font-medium">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-luxury-charcoal/70">About Us</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <img
              src="/assets/images/logo.png"
              alt="Being Samsher Crafting"
              className="h-20 sm:h-24 w-auto object-contain self-start drop-shadow-md brightness-125 contrast-105"
            />
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/10 border border-emerald-900/20 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-gold-600" />
                <span>The Artisan Heritage</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-charcoal tracking-tight">
                About <span className="font-cormorant italic text-gold-600">Being Samsher Crafting</span>
              </h1>

              <p className="text-emerald-800 font-serif italic text-lg sm:text-xl font-medium">
                “Har Creation Mein Mehnat Aur Perfection!”
              </p>
            </div>
          </div>
        </div>

        {/* Main Brand Story Section */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Workshop Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-card overflow-hidden bg-white border border-subtle shadow-md">
              <div className="aspect-[4/5] bg-charcoal-900 relative">
                <img
                  src="/assets/images/samsher_alam_founder.jpg"
                  alt="Samsher Alam - Founder"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Artisan Caption Overlay */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-card bg-white/95 backdrop-blur-md border border-subtle shadow-sm">
                  <p className="font-serif text-base font-bold text-luxury-charcoal">Samsher Alam</p>
                  <p className="text-xs text-gold-600 font-semibold">Founder </p>
                  <p className="text-[11px] text-luxury-charcoal/70 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Studio in Jharkhand, India</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-7 space-y-6 text-luxury-charcoal/80 text-sm sm:text-base leading-relaxed font-sans">

            <div className="p-6 rounded-card bg-white border border-subtle shadow-sm space-y-3">
              <p className="font-serif text-base sm:text-lg text-luxury-charcoal font-medium leading-relaxed">
                "At Being Samsher Crafting, every model represents imagination, patience, and dedication. From intricate Tajiya designs and elegant Gumbad models to detailed Minar structures and custom architectural creations, we focus on turning ideas into beautiful handcrafted work."
              </p>
              <p className="text-gold-600 font-serif italic text-sm">
                "Our philosophy is simple: every creation deserves attention to detail, quality workmanship, and a personal touch."
              </p>
            </div>

            <p>
              Based in Jharkhand, India, our studio was founded by master artisan Samsher Alam to keep traditional Indian architectural craftsmanship alive while embracing modern symmetry, structural durability, and illumination techniques.
            </p>

            <p>
              We specialize in custom handcrafted architectural models, Tajiya, Gumbad, Minar, religious and decorative models, thermocol cutting, and fine jali work. Rather than mass-manufacturing generic models, every single order is treated as a unique work of art — built from high-density materials, adorned with authentic gold foils, and illuminated with warm ambient LEDs.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/custom-order"
                className="px-7 py-3 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white font-medium text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss a Custom Commission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="px-6 py-3 rounded-full border border-subtle bg-white hover:bg-warm-light/60 text-luxury-charcoal font-medium text-xs uppercase tracking-wider transition-all"
              >
                Browse Our Collection
              </Link>
            </div>

          </div>

        </div>

        {/* Mission & Vision Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-card bg-white border border-subtle shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-luxury-charcoal">Our Mission</h3>
            <p className="text-xs sm:text-sm text-luxury-charcoal/75 leading-relaxed font-sans">
              To deliver masterfully handcrafted architectural models that inspire spiritual reverence and visual awe. We strive to give every patron across India direct access to authentic artisan craft without intermediaries.
            </p>
          </div>

          <div className="p-8 rounded-card bg-white border border-subtle shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-luxury-charcoal">Our Vision</h3>
            <p className="text-xs sm:text-sm text-luxury-charcoal/75 leading-relaxed font-sans">
              To be India's foremost destination for bespoke Islamic architectural miniatures, recognized for unmatched cutwork precision, structural integrity, and heartfelt perfection in every creation.
            </p>
          </div>
        </div>

        {/* Tools and Crafting Process Details */}
        <div className="mt-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-charcoal">
              Tools of the <span className="font-cormorant italic text-gold-600">Artisan Trade</span>
            </h3>
            <p className="text-xs text-luxury-charcoal/70">
              Precision instrument mastery refined over years of architectural model making.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {craftingTools.map((tool, idx) => (
              <div key={idx} className="p-6 rounded-card bg-white border border-subtle shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-warm-light border border-subtle flex items-center justify-center text-gold-600">
                  <Hammer className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-luxury-charcoal">{tool.name}</h4>
                <p className="text-xs text-luxury-charcoal/70 leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Social Connections Banner */}
        <div className="mt-16 p-8 rounded-card bg-charcoal-900 text-warm-white border border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-white">Connect with Being Samsher Crafting</h4>
            <p className="text-xs text-warm-white/75">Follow our daily workshop videos, carving stories, and customer dispatches on social media.</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-gold-500 text-gold-300 hover:text-charcoal-950 border border-white/10 transition-all cursor-pointer"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-red-600 text-gold-300 hover:text-white border border-white/10 transition-all cursor-pointer"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-blue-600 text-gold-300 hover:text-white border border-white/10 transition-all cursor-pointer"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
