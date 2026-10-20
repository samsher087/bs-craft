import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getSiteConfig, buildWhatsAppUrl } from '../config/siteConfig';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const siteConfig = getSiteConfig();

  const handleOpenWhatsApp = () => {
    const defaultMsg = `Hello Being Samsher Crafting! I visited your website and would like to enquire about your handcrafted Tajiya, Gumbad, Minar, and custom architectural models.`;
    window.open(buildWhatsAppUrl(defaultMsg), '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-subtle text-xs shadow-lg backdrop-blur-md animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-luxury-charcoal font-medium">Direct WhatsApp Support</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 hover:text-red-500 text-luxury-charcoal/50 transition-colors ml-1 cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button with Golden Pulsing Ring */}
      <button
        onClick={handleOpenWhatsApp}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />

        {/* Small Golden Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold-500 border-2 border-white text-white flex items-center justify-center text-[10px] font-bold">
          ★
        </span>
      </button>
    </div>
  );
}
