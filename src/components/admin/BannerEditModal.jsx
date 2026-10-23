import React, { useState } from 'react';
import { X, Sparkles, Megaphone, Save, ArrowRight, MessageCircle, Link as LinkIcon, Check } from 'lucide-react';
import { BADGE_THEMES, BADGE_PRESETS, LINK_PRESETS } from '../../data/banners';

export default function BannerEditModal({ isOpen, onClose, onSave, editingBanner }) {
  if (!isOpen) return null;

  return (
    <BannerEditModalContent
      onClose={onClose}
      onSave={onSave}
      editingBanner={editingBanner}
      key={editingBanner ? editingBanner.id : 'new-banner'}
    />
  );
}

function BannerEditModalContent({ onClose, onSave, editingBanner }) {
  const [formData, setFormData] = useState(() => ({
    badge: editingBanner?.badge || 'EXCLUSIVE OFFER',
    badgeTheme: editingBanner?.badgeTheme || 'gold',
    text: editingBanner?.text || '',
    actionText: editingBanner?.actionText || (editingBanner ? 'Explore Now' : 'Claim Offer'),
    link: editingBanner?.link || (editingBanner ? '/products' : '/custom-order'),
    isWhatsApp: Boolean(editingBanner?.isWhatsApp),
    active: editingBanner?.active !== false
  }));

  const [formError, setFormError] = useState('');

  const currentTheme = BADGE_THEMES[formData.badgeTheme] || BADGE_THEMES.gold;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.text.trim()) {
      setFormError('Please enter the announcement or offer text for the banner.');
      return;
    }

    onSave({
      ...formData,
      ...(editingBanner ? { id: editingBanner.id } : {})
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-gold-500/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden text-[#111827] my-auto">
        
        {/* MODAL HEADER */}
        <div className="bg-[#0B0F15] text-white p-5 sm:p-6 border-b border-gold-500/20 relative overflow-hidden flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] uppercase tracking-widest font-mono text-gold-400 font-semibold px-2 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-gold-400" />
                  <span>Announcement Banner Manager</span>
                </span>
                {editingBanner && (
                  <span className="text-[10px] text-white/50 font-mono hidden sm:inline-block">
                    ID: {editingBanner.id}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                {editingBanner ? 'Edit Banner Text & Announcement' : 'Add New Banner Text'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
            title="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MODAL FORM BODY */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {formError && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-300 text-red-700 text-xs font-semibold">
              {formError}
            </div>
          )}

          {/* 1. ANNOUNCEMENT TEXT */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider">
                Banner Announcement Text <span className="text-red-500">*</span>
              </label>
              <span className="text-[11px] text-[#6B7280] font-mono">
                {formData.text.length} characters
              </span>
            </div>
            <textarea
              rows="3"
              value={formData.text}
              onChange={(e) => {
                setFormData({ ...formData, text: e.target.value });
                if (formError) setFormError('');
              }}
              placeholder="e.g. Muharram 2027 Advance Bookings Open — Reserve early for guaranteed timely handcrafting & safe delivery..."
              className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-medium text-xs sm:text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all shadow-xs"
              required
            />
            <p className="text-[11px] text-[#6B7280] mt-1">
              This message will scroll in the top marquee ticker across every page on the website.
            </p>
          </div>

          {/* 2. BADGE TAG & PRESETS */}
          <div>
            <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
              Category / Alert Badge Tag
            </label>
            <input
              type="text"
              value={formData.badge}
              onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
              placeholder="e.g. EXCLUSIVE OFFER, IMPORTANT NEWS, NEW ARRIVAL"
              className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-bold text-xs uppercase tracking-wider focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all shadow-xs"
            />

            {/* Quick Presets */}
            <div className="mt-2 flex flex-wrap gap-1.5 items-center">
              <span className="text-[10px] text-[#6B7280] font-semibold mr-1">Quick Tags:</span>
              {BADGE_PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setFormData({ ...formData, badge: preset })}
                  className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer ${
                    formData.badge === preset
                      ? 'bg-gold-500 text-luxury-charcoal shadow-xs'
                      : 'bg-white border border-[#D1D5DB] text-[#4B5563] hover:border-gold-400 hover:text-[#111827]'
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          {/* 3. BADGE COLOR & STYLE THEME */}
          <div>
            <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
              Badge Color & Theme Styling
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(BADGE_THEMES).map(([key, theme]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFormData({ ...formData, badgeTheme: key })}
                  className={`p-2.5 rounded-xl border-2 text-left flex items-center justify-between gap-2 transition-all cursor-pointer ${
                    formData.badgeTheme === key
                      ? 'border-gold-500 bg-gold-50/60 ring-2 ring-gold-500/30'
                      : 'border-[#E5E7EB] bg-white hover:border-gold-300'
                  }`}
                >
                  <div className="truncate">
                    <span className="text-xs font-bold text-[#111827] block truncate">{theme.label}</span>
                    <span className={`inline-block px-1.5 py-0.5 mt-1 rounded text-[9px] font-mono font-bold ${theme.classes} bg-black/80`}>
                      Preview
                    </span>
                  </div>
                  {formData.badgeTheme === key && (
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 4. ACTION CTA BUTTON */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                Action CTA Button Text
              </label>
              <input
                type="text"
                value={formData.actionText}
                onChange={(e) => setFormData({ ...formData, actionText: e.target.value })}
                placeholder="e.g. Claim Offer, Book Now, Explore"
                className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-semibold text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all shadow-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                Action Destination Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, isWhatsApp: false })}
                  className={`py-2 px-3 rounded-xl border-2 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    !formData.isWhatsApp
                      ? 'border-emerald-900 bg-emerald-900 text-white shadow-xs'
                      : 'border-[#D1D5DB] bg-white text-[#4B5563] hover:bg-[#F9FAFB]'
                  }`}
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                  <span>Page Link</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, isWhatsApp: true })}
                  className={`py-2 px-3 rounded-xl border-2 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    formData.isWhatsApp
                      ? 'border-[#25D366] bg-[#25D366] text-white shadow-xs'
                      : 'border-[#D1D5DB] bg-white text-[#4B5563] hover:bg-[#F9FAFB]'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>
            </div>
          </div>

          {/* 5. PAGE LINK (IF NOT WHATSAPP) */}
          {!formData.isWhatsApp && (
            <div>
              <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                Target Website Route / URL
              </label>
              <input
                type="text"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                placeholder="e.g. /custom-order or /products"
                className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#D1D5DB] text-[#111827] font-mono text-xs focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition-all shadow-xs"
              />

              {/* Quick Link Presets */}
              <div className="mt-2 flex flex-wrap gap-1.5 items-center">
                <span className="text-[10px] text-[#6B7280] font-semibold mr-1">Page Shortcuts:</span>
                {LINK_PRESETS.map((lp) => (
                  <button
                    key={lp.url}
                    type="button"
                    onClick={() => setFormData({ ...formData, link: lp.url })}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-mono transition-all cursor-pointer ${
                      formData.link === lp.url
                        ? 'bg-emerald-900 text-white font-bold'
                        : 'bg-white border border-[#D1D5DB] text-[#4B5563] hover:border-emerald-600 hover:text-[#111827]'
                    }`}
                  >
                    {lp.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 6. ACTIVE TOGGLE */}
          <div className="p-4 rounded-xl border-2 border-[#D1D5DB] bg-white flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#111827] block">
                Publish Status (Show in Live Marquee)
              </span>
              <span className="text-[11px] text-[#6B7280]">
                When active, this banner text is live and rotating on the public website.
              </span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.active}
                onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>

          {/* 7. LIVE ITEM PREVIEW CARD */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-[#111827] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Live Banner Item Visual Preview</span>
              </span>
              <span className="text-[10px] font-mono text-[#6B7280]">As seen in top marquee</span>
            </div>

            <div className="p-4 rounded-xl bg-black/90 border border-gold-500/30 text-white shadow-inner flex items-center gap-3 overflow-x-auto">
              {formData.badge && (
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold uppercase tracking-wider border shrink-0 ${currentTheme.classes}`}>
                  {formData.badge}
                </span>
              )}
              <span className="text-xs font-medium text-white/95 truncate">
                {formData.text || 'Your announcement message will preview here...'}
              </span>
              {formData.actionText && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-gold-300 uppercase tracking-wider shrink-0 underline ml-auto">
                  <span>{formData.actionText}</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </span>
              )}
            </div>
          </div>

          {/* MODAL FOOTER */}
          <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border-2 border-[#D1D5DB] bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#1F2937] font-bold text-xs cursor-pointer transition-all"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4 text-gold-400" />
              <span>{editingBanner ? 'Update Banner Text' : 'Publish New Banner Text'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
