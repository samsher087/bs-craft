import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, MapPin, Phone, Mail, MessageCircle, Lock } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from './SocialIcons';
import { getSiteConfig } from '../config/siteConfig';

export default function Footer({ onOpenPolicy }) {
  const siteConfig = getSiteConfig();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/products' },
    { name: 'Our Craft', path: '/#craft' },
    { name: 'Custom Orders', path: '/custom-order' },
    { name: 'About Studio', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const categories = [
    'Tajiya',
    'Gumbad',
    'Gumbad-e-Khazra / Mini Madina',
    'Minar',
    'Dargah & Religious Models',
    'Thermocol Cutting & Fine Jali',
    'Decorative Models',
    'Custom Creations'
  ];

  return (
    <footer className="bg-charcoal-900 text-sand-100 border-t border-subtle-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-8 sm:pb-10 border-b border-white/10">

          {/* Brand Identity & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="flex flex-col items-center shrink-0">
                <img
                  src="/assets/images/samsher_alam_founder.jpg"
                  alt="Samsher Alam - Founder"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover object-center border-2 border-gold-400/80 shadow-[0_0_15px_rgba(198,161,91,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:border-gold-300 ring-2 ring-gold-500/20"
                />
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-gold-400 font-semibold mt-1">
                  Founder
                </span>
              </div>
              <div>
                <span className="font-cormorant italic text-lg sm:text-xl transition-colors text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] block">
                  Being Samsher Crafting
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase font-sans text-gold-400 font-semibold block">
                  Architectural & Tajiya Studio
                </span>
              </div>
            </Link>

            <p className="text-xs text-sand-300/80 italic font-sans">
              "Where Every Design Becomes a New Identity."
            </p>

            <p className="text-gold-300 font-cormorant italic text-lg font-medium">
              “Har Creation Mein Mehnat Aur Perfection!”
            </p>

            <p className="text-xs text-sand-300/70 leading-relaxed font-sans max-w-sm">
              Custom handcrafted architectural models, Tajiya, Gumbad, Minar, thermocol cutting, and fine jali work. Based in Jharkhand, delivering across India.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-gold-400 text-gold-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-gold-400 text-gold-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-gold-400 text-gold-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-gold-400 text-emerald-400 hover:text-emerald-300 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-gold-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sand-300/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-gold-400">
              Categories
            </h4>
            <ul className="space-y-1.5 text-xs">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/products?category=${encodeURIComponent(cat)}`}
                    className="text-sand-300/70 hover:text-white transition-colors line-clamp-1"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact Info */}
          <div className="lg:col-span-3 space-y-3.5 text-xs">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-gold-400">
                Studio & Contact
              </h4>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>

            <div className="space-y-2.5 text-sand-300/85 font-sans">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.fullAddress)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">{siteConfig.fullAddress}</span>
              </a>

              <a
                href={`tel:${siteConfig.whatsappNumber}`}
                className="flex items-center gap-2.5 hover:text-gold-300 transition-colors group"
              >
                <Phone className="w-4 h-4 text-gold-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-mono">{siteConfig.displayPhone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 hover:text-gold-300 transition-colors group"
              >
                <Mail className="w-4 h-4 text-gold-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="truncate">{siteConfig.email}</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello Being Samsher Crafting! I would like to consult about an architectural order.")}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-emerald-500/20"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-300/60 font-sans">
          <p>
            © {new Date().getFullYear()} Being Samsher Crafting. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <button
              onClick={() => onOpenPolicy && onOpenPolicy('privacy')}
              className="hover:text-gold-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicy && onOpenPolicy('terms')}
              className="hover:text-gold-300 transition-colors"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicy && onOpenPolicy('shipping')}
              className="hover:text-gold-300 transition-colors"
            >
              Shipping & Returns Policy
            </button>
            <span>•</span>
            <Link
              to="/admin"
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
              className="inline-flex items-center gap-1 text-gold-400/90 hover:text-white"
            >
              <Lock className="w-3 h-3" />
              <span>Admin</span>
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gold-300 hover:text-white text-xs transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
