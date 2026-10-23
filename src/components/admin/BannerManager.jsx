import React, { useState } from 'react';
import {
  Megaphone,
  Plus,
  Edit3,
  Trash2,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  Sparkles,
  CheckCircle,
  Eye,
  EyeOff,
  ExternalLink,
  MessageCircle,
  Link as LinkIcon
} from 'lucide-react';
import BannerEditModal from './BannerEditModal';
import {
  getBanners,
  saveBanner,
  deleteBanner,
  toggleBannerActive,
  reorderBanners,
  resetBannersToDefault
} from '../../data/banners';
import MarqueeBanner from '../MarqueeBanner';

export default function BannerManager({ banners, setBanners, onAddNewRequest }) {
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'active' | 'inactive'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState(null);
  const [notice, setNotice] = useState('');

  const showNotification = (msg) => {
    setNotice(msg);
    setTimeout(() => setNotice(''), 3500);
  };

  const handleOpenAdd = () => {
    setEditingBanner(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (banner) => {
    setEditingBanner(banner);
    setIsModalOpen(true);
  };

  const handleSave = (bannerData) => {
    const result = saveBanner(bannerData);
    if (result.success) {
      setBanners(getBanners());
      setIsModalOpen(false);
      showNotification(
        bannerData.id
          ? 'Banner announcement successfully updated!'
          : 'New banner text successfully added and published to the website!'
      );
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this banner text from the website?')) {
      deleteBanner(id);
      setBanners(getBanners());
      showNotification('Banner text deleted.');
    }
  };

  const handleToggleActive = (id) => {
    toggleBannerActive(id);
    setBanners(getBanners());
  };

  const handleMove = (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= banners.length) return;
    const newBanners = [...banners];
    const [moved] = newBanners.splice(index, 1);
    newBanners.splice(targetIndex, 0, moved);
    reorderBanners(newBanners);
    setBanners(newBanners);
  };

  const handleReset = () => {
    if (
      window.confirm(
        'Reset all banner announcements to original studio defaults? Any custom banners added will be replaced.'
      )
    ) {
      const defaults = resetBannersToDefault();
      setBanners(defaults);
      showNotification('All banner announcements reset to default presets.');
    }
  };

  const filteredBanners = banners.filter((b) => {
    if (filterMode === 'active') return b.active !== false;
    if (filterMode === 'inactive') return b.active === false;
    return true;
  });

  const activeCount = banners.filter((b) => b.active !== false).length;
  const inactiveCount = banners.length - activeCount;

  return (
    <div className="mt-8 space-y-6">
      
      {/* NOTICE TOAST */}
      {notice && (
        <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-950 font-bold text-xs flex items-center justify-between shadow-sm animate-fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>{notice}</span>
          </div>
          <button
            onClick={() => setNotice('')}
            className="text-emerald-800 hover:text-emerald-950 text-xs cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* TOP HEADER CONTROLS */}
      <div className="p-6 rounded-2xl bg-white border border-subtle shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-700 flex items-center justify-center">
              <Megaphone className="w-4 h-4" />
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-luxury-charcoal">
              Top Marquee Banner & News Announcements
            </h2>
          </div>
          <p className="text-xs text-luxury-charcoal/70 max-w-2xl">
            Banners scroll continuously along the top of every page. You can add new promotional offers, seasonal announcements, or edit and reorder existing banner texts.
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2.5 rounded-xl border border-subtle bg-warm-light/60 hover:bg-warm-light text-luxury-charcoal/70 hover:text-luxury-charcoal text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            title="Reset to default banner presets"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={handleOpenAdd}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 text-gold-400" />
            <span>Add New Banner Text</span>
          </button>
        </div>
      </div>

      {/* LIVE MARQUEE PREVIEW CONTAINER */}
      <div className="rounded-2xl border-2 border-gold-500/30 bg-[#0B0F15] overflow-hidden shadow-md">
        <div className="px-4 py-2.5 bg-black/80 border-b border-gold-500/20 flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-gold-400 font-bold">
              Live Website Marquee Preview
            </span>
          </div>
          <span className="text-[11px] text-gray-300 font-mono">
            {activeCount} Active Items Scrolling Publicly
          </span>
        </div>
        <div className="py-1">
          <MarqueeBanner />
        </div>
      </div>

      {/* METRICS & FILTER BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-subtle pb-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-bold text-luxury-charcoal">Filter:</span>
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filterMode === 'all'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'bg-white border border-subtle text-luxury-charcoal/70 hover:text-luxury-charcoal'
            }`}
          >
            All ({banners.length})
          </button>
          <button
            onClick={() => setFilterMode('active')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filterMode === 'active'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'bg-white border border-subtle text-luxury-charcoal/70 hover:text-luxury-charcoal'
            }`}
          >
            Active ({activeCount})
          </button>
          <button
            onClick={() => setFilterMode('inactive')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filterMode === 'inactive'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'bg-white border border-subtle text-luxury-charcoal/70 hover:text-luxury-charcoal'
            }`}
          >
            Hidden ({inactiveCount})
          </button>
        </div>

        <div className="text-xs text-luxury-charcoal/60">
          Showing <strong className="text-luxury-charcoal">{filteredBanners.length}</strong> banner announcement items
        </div>
      </div>

      {/* BANNERS LIST */}
      {filteredBanners.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-white border border-subtle text-luxury-charcoal/60 text-sm space-y-3">
          <Megaphone className="w-10 h-10 mx-auto text-gold-500/50 stroke-1" />
          <h3 className="font-serif text-base font-bold text-luxury-charcoal">
            No Banner Announcements Found
          </h3>
          <p className="text-xs text-luxury-charcoal/70 max-w-md mx-auto">
            {filterMode === 'all'
              ? 'You have not added any banner texts yet. Click below to add your first announcement or reset to studio presets.'
              : `No banners match the "${filterMode}" filter.`}
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={handleOpenAdd}
              className="px-5 py-2.5 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              Add New Banner Text
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2.5 rounded-xl bg-warm-light hover:bg-warm-light/80 text-luxury-charcoal text-xs font-semibold cursor-pointer"
            >
              Reset Defaults
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3.5">
          {filteredBanners.map((banner, index) => {
            const originalIndex = banners.findIndex((b) => b.id === banner.id);
            return (
              <div
                key={banner.id}
                className={`p-4 sm:p-5 rounded-2xl bg-white border-2 transition-all shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  banner.active !== false
                    ? 'border-[#E5E7EB] hover:border-gold-400'
                    : 'border-dashed border-gray-300 opacity-65 bg-gray-50'
                }`}
              >
                {/* LEFT: ORDER CONTROLS & ACTIVE TOGGLE */}
                <div className="flex items-center gap-3 shrink-0">
                  {/* Order Buttons */}
                  <div className="flex flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => handleMove(originalIndex, -1)}
                      disabled={originalIndex === 0}
                      className="p-1 rounded-md bg-[#F3F4F6] hover:bg-gold-100 disabled:opacity-30 disabled:cursor-not-allowed text-[#374151] hover:text-[#111827] transition-colors cursor-pointer"
                      title="Move Up in Marquee Order"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMove(originalIndex, 1)}
                      disabled={originalIndex === banners.length - 1}
                      className="p-1 rounded-md bg-[#F3F4F6] hover:bg-gold-100 disabled:opacity-30 disabled:cursor-not-allowed text-[#374151] hover:text-[#111827] transition-colors cursor-pointer"
                      title="Move Down in Marquee Order"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Active / Inactive Pill Switch */}
                  <button
                    type="button"
                    onClick={() => handleToggleActive(banner.id)}
                    className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      banner.active !== false
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 hover:bg-emerald-200'
                        : 'bg-gray-200 text-gray-700 border border-gray-300 hover:bg-gray-300'
                    }`}
                    title={banner.active !== false ? 'Click to Hide from Website' : 'Click to Make Active on Website'}
                  >
                    {banner.active !== false ? (
                      <>
                        <Eye className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Active</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3.5 h-3.5 text-gray-600" />
                        <span>Hidden</span>
                      </>
                    )}
                  </button>
                </div>

                {/* CENTER: BADGE, TEXT, AND ACTION INFO */}
                <div className="flex-1 space-y-1.5 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Badge Pill with live theme styling */}
                    <span
                      className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider border bg-black/85 ${
                        banner.badgeStyle || 'bg-gold-500/25 text-gold-300 border-gold-400/40'
                      }`}
                    >
                      {banner.badge || 'ANNOUNCEMENT'}
                    </span>

                    {/* Destination Pill */}
                    {banner.isWhatsApp ? (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-green-100 text-green-800 border border-green-300 flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>WhatsApp Chat Action</span>
                      </span>
                    ) : banner.link ? (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-emerald-900 bg-emerald-50 border border-emerald-200 flex items-center gap-1">
                        <LinkIcon className="w-3 h-3" />
                        <span>{banner.link}</span>
                      </span>
                    ) : null}

                    {banner.actionText && (
                      <span className="text-[10px] font-bold text-gold-800 font-mono">
                        Button: "{banner.actionText}"
                      </span>
                    )}
                  </div>

                  {/* Main Announcement Message */}
                  <p className="text-xs sm:text-sm font-semibold text-[#111827] leading-relaxed">
                    {banner.text}
                  </p>
                </div>

                {/* RIGHT: ACTIONS (EDIT & DELETE) */}
                <div className="flex items-center gap-2 shrink-0 self-end md:self-center pt-2 md:pt-0">
                  <button
                    type="button"
                    onClick={() => handleOpenEdit(banner)}
                    className="px-3.5 py-1.5 rounded-xl border border-gold-400 bg-gold-50 hover:bg-gold-100 text-gold-900 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                    title="Edit Banner Text"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-gold-700" />
                    <span>Edit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(banner.id)}
                    className="p-1.5 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-800 transition-colors cursor-pointer"
                    title="Delete Banner Text"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* EDIT / ADD MODAL */}
      <BannerEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        editingBanner={editingBanner}
      />

    </div>
  );
}
