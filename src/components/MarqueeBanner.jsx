import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getSiteConfig } from '../config/siteConfig';
import { getActiveBanners } from '../data/banners';

export default function MarqueeBanner() {
  const [siteConfig, setSiteConfig] = useState(getSiteConfig());
  const [banners, setBanners] = useState(getActiveBanners());

  useEffect(() => {
    const handleBannersUpdate = () => {
      setBanners(getActiveBanners());
    };
    const handleConfigUpdate = () => {
      setSiteConfig(getSiteConfig());
    };

    window.addEventListener('banners-updated', handleBannersUpdate);
    window.addEventListener('site-config-updated', handleConfigUpdate);

    return () => {
      window.removeEventListener('banners-updated', handleBannersUpdate);
      window.removeEventListener('site-config-updated', handleConfigUpdate);
    };
  }, []);

  if (!banners || banners.length === 0) {
    return null;
  }

  // Ensure enough items for a full smooth continuous scroll by repeating the banner list
  const displayItems = banners.length < 4 ? [...banners, ...banners, ...banners, ...banners] : [...banners, ...banners];

  return (
    <div
      className="relative w-full overflow-hidden transition-colors duration-300 select-none border-t border-b bg-black/45 hover:bg-black/55 backdrop-blur-[2px] border-white/10 text-white"
      aria-label="Important News & Offers Marquee"
    >
      {/* Edge gradient mask for smooth fade in/out on wide screens */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track (Duplicated for seamless continuous infinite loop) */}
      <div className="animate-marquee-smooth py-1 sm:py-1.5 flex items-center">
        {displayItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="inline-flex items-center gap-2.5 mx-4 sm:mx-6 shrink-0 group/item cursor-pointer text-xs"
          >
            {/* Category / Alert Pill */}
            {item.badge && (
              <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold uppercase tracking-wider border backdrop-blur-xs ${item.badgeStyle || 'bg-gold-500/25 text-gold-300 border-gold-400/40'}`}>
                {item.badge}
              </span>
            )}

            {/* Announcement Message */}
            <span className="font-sans font-medium text-white/95 text-[11px] sm:text-xs tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
              {item.text}
            </span>

            {/* Action CTA Link */}
            {item.actionText && (
              item.isWhatsApp ? (
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Assalamu Alaikum Samsher Bhai! I saw your announcement "${item.text}" and would like to inquire.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-gold-300 hover:text-white underline underline-offset-2 transition-colors uppercase tracking-wider ml-1"
                >
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-2.5 h-2.5 group-hover/item:translate-x-0.5 transition-transform" />
                </a>
              ) : (
                <Link
                  to={item.link || '/products'}
                  className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-gold-300 hover:text-white underline underline-offset-2 transition-colors uppercase tracking-wider ml-1"
                >
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-2.5 h-2.5 group-hover/item:translate-x-0.5 transition-transform" />
                </Link>
              )
            )}

            {/* Decorative Separator Star */}
            <span className="text-gold-400/60 ml-4 sm:ml-6 text-xs select-none">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
