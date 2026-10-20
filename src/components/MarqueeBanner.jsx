import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Tag, ShieldCheck, MessageCircle } from 'lucide-react';
import { getSiteConfig } from '../config/siteConfig';

export default function MarqueeBanner() {
  const siteConfig = getSiteConfig();

  const newsItems = [
    {
      id: 1,
      badge: "EXCLUSIVE OFFER",
      badgeStyle: "bg-emerald-500/25 text-emerald-300 border-emerald-400/40",
      text: "Free Ambient LED Illumination Kit included with every custom Tajiya commission",
      actionText: "Claim Offer",
      link: "/custom-order"
    },
    {
      id: 2,
      badge: "IMPORTANT NEWS",
      badgeStyle: "bg-gold-500/25 text-gold-300 border-gold-400/40",
      text: "Muharram 2027 Advance Bookings Open — Reserve early for guaranteed timely handcrafting & freight dispatch",
      actionText: "Book Tajiya",
      link: "/products?category=Tajiya"
    },
    {
      id: 3,
      badge: "SAFE DISPATCH",
      badgeStyle: "bg-white/15 text-sand-200 border-white/25",
      text: "100% Safe Pan-India Delivery — Custom-molded velvet foam cushioning & reinforced wooden export crates",
      actionText: "Logistics Info",
      link: "/contact"
    },
    {
      id: 4,
      badge: "NEW ARRIVAL",
      badgeStyle: "bg-amber-500/25 text-amber-300 border-amber-400/40",
      text: "Handcrafted Gumbad-e-Khazra & Ala Hazrat Dargah models now available in catalogue",
      actionText: "Explore Now",
      link: "/products"
    },
    {
      id: 5,
      badge: "DIRECT ARTISAN",
      badgeStyle: "bg-emerald-500/25 text-emerald-300 border-emerald-400/40",
      text: `Direct WhatsApp consultation with Master Craftsman Samsher Alam (${siteConfig.displayPhone})`,
      actionText: "Chat Now",
      isWhatsApp: true
    }
  ];

  return (
    <div
      className="relative w-full overflow-hidden transition-colors duration-300 select-none border-t border-b bg-black/45 hover:bg-black/55 backdrop-blur-[2px] border-white/10 text-white"
      aria-label="Important News & Offers Marquee"
    >
      {/* Edge gradient mask for smooth fade in/out on wide screens */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track (Duplicated 2x for seamless continuous infinite loop) */}
      <div className="animate-marquee-smooth py-1 sm:py-1.5 flex items-center">
        {[...newsItems, ...newsItems].map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="inline-flex items-center gap-2.5 mx-4 sm:mx-6 shrink-0 group/item cursor-pointer text-xs"
          >
            {/* Category / Alert Pill */}
            <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold uppercase tracking-wider border backdrop-blur-xs ${item.badgeStyle}`}>
              {item.badge}
            </span>

            {/* Announcement Message */}
            <span className="font-sans font-medium text-white/95 text-[11px] sm:text-xs tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
              {item.text}
            </span>

            {/* Action CTA Link */}
            {item.isWhatsApp ? (
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Assalamu Alaikum Samsher Bhai! I saw the offer on your website and would like to inquire.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-gold-300 hover:text-white underline underline-offset-2 transition-colors uppercase tracking-wider ml-1"
              >
                <span>{item.actionText}</span>
                <ArrowRight className="w-2.5 h-2.5 group-hover/item:translate-x-0.5 transition-transform" />
              </a>
            ) : (
              <Link
                to={item.link}
                className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-gold-300 hover:text-white underline underline-offset-2 transition-colors uppercase tracking-wider ml-1"
              >
                <span>{item.actionText}</span>
                <ArrowRight className="w-2.5 h-2.5 group-hover/item:translate-x-0.5 transition-transform" />
              </Link>
            )}

            {/* Decorative Separator Star */}
            <span className="text-gold-400/60 ml-4 sm:ml-6 text-xs select-none">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
