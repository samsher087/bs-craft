import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Sparkles, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../config/siteConfig';
import MarqueeBanner from './MarqueeBanner';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/products' },
    { name: 'Our Craft', path: '/#craft', isHash: true },
    { name: 'Custom Orders', path: '/custom-order' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    if (link.isHash) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById('craft');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById('craft');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleQuickOrder = () => {
    window.open(buildWhatsAppUrl("Hello Being Samsher Crafting! I am visiting your website and would like to enquire about ordering a custom model."), '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 text-white ${isScrolled
          ? 'bg-[#050B1B]/95 backdrop-blur-md border-b border-gold-500/20 shadow-2xl'
          : 'bg-[#050B1B]/85 sm:bg-charcoal-950/80 backdrop-blur-md border-b border-white/10 shadow-lg'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 transition-all duration-300">

        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 sm:gap-1.5 group cursor-pointer"
        >
          <img
            src="/assets/images/logo.png"
            alt="Being Samsher Crafting"
            className="h-13 sm:h-15 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105 brightness-125 contrast-105 drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
          />
          <div className="hidden sm:flex flex-col -ml-1.5 sm:-ml-2">
            <span className="font-cormorant italic text-lg sm:text-xl transition-colors text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Being Samsher Crafting
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = !link.isHash && location.pathname === link.path;
            return link.isHash ? (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-colors rounded-full cursor-pointer text-sand-100/90 hover:text-white hover:bg-white/10"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3.5 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-colors rounded-full ${isActive
                  ? 'text-white font-bold bg-white/20 shadow-xs'
                  : 'text-sand-100/90 hover:text-white hover:bg-white/10'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Direct Phone & Email Contact in place of old buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">

          {/* Contact Details Pill (Desktop & Tablet) */}
          <div
            className="hidden sm:flex flex-col items-start justify-center px-3.5 py-1.5 rounded-2xl border backdrop-blur-md transition-all border-white/20 bg-charcoal-900/80 text-white shadow-md hover:border-gold-400/50"
          >
            <a
              href="tel:9818572692"
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide transition-colors text-sand-50 hover:text-gold-300"
              title="Call: 9818572692"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400 fill-gold-400/20 shrink-0" />
              <span>+91-9818572692</span>
            </a>
            <button
              type="button"
              onClick={handleQuickOrder}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide transition-all mt-0.5 cursor-pointer hover:scale-105 active:scale-95 text-gold-300 hover:text-white"
              title="Book Your Order Now"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Book Your Order Now</span>
            </button>
          </div>

          {/* Quick Call Button (Mobile) */}
          <a
            href="tel:9818572692"
            className="sm:hidden p-2 rounded-full border transition-all border-white/20 bg-charcoal-900/70 text-gold-300 hover:bg-charcoal-800"
            title="Call: 9818572692"
            aria-label="Call 9818572692"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border transition-colors border-white/20 bg-charcoal-900/60 text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Translucent Marquee Banner for Important News & Offers - Positioned Just Below Menu */}
      <MarqueeBanner />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[62px] bg-[#050B1B]/98 border-b border-gold-500/30 shadow-2xl p-6 text-white space-y-3 animate-fade-in backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              link.isHash ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-white/10 text-sand-100 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${location.pathname === link.path
                      ? 'bg-white/20 text-white font-bold'
                      : 'hover:bg-white/10 text-sand-100 hover:text-white'
                    }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <a
              href="tel:9818572692"
              className="w-full py-2.5 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-300" />
              <span>Call: 9818572692</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleQuickOrder();
              }}
              className="w-full py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4 text-gold-200" />
              <span>Book Your Order Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
