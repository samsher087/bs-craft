// Central Banner and Announcement Management System for Being Samsher Crafting
// Synchronized with localStorage so Admin updates reflect immediately across the entire website.

export const BADGE_THEMES = {
  gold: {
    label: "Royal Gold",
    classes: "bg-gold-500/25 text-gold-300 border-gold-400/40"
  },
  emerald: {
    label: "Sacred Emerald",
    classes: "bg-emerald-500/25 text-emerald-300 border-emerald-400/40"
  },
  amber: {
    label: "Warm Amber",
    classes: "bg-amber-500/25 text-amber-300 border-amber-400/40"
  },
  rose: {
    label: "Festive Crimson / Rose",
    classes: "bg-rose-500/25 text-rose-300 border-rose-400/40"
  },
  sky: {
    label: "Celestial Blue",
    classes: "bg-sky-500/25 text-sky-300 border-sky-400/40"
  },
  classic: {
    label: "Classic Frosted White",
    classes: "bg-white/15 text-sand-200 border-white/25"
  }
};

export const BADGE_PRESETS = [
  "EXCLUSIVE OFFER",
  "IMPORTANT NEWS",
  "MUHARRAM 2027",
  "NEW ARRIVAL",
  "SAFE DISPATCH",
  "DIRECT ARTISAN",
  "SPECIAL FESTIVAL",
  "LIMITED SLOTS",
  "HANDMADE EXCELLENCE"
];

export const LINK_PRESETS = [
  { label: "Custom Commission Form", url: "/custom-order" },
  { label: "All Catalogue Models", url: "/products" },
  { label: "Tajiya Collection", url: "/products?category=Tajiya" },
  { label: "Gumbad Collection", url: "/products?category=Gumbad" },
  { label: "Logistics & Contact", url: "/contact" },
  { label: "Atelier Story / About", url: "/about" }
];

export const DEFAULT_BANNERS = [
  {
    id: "banner-1",
    badge: "EXCLUSIVE OFFER",
    badgeTheme: "emerald",
    badgeStyle: "bg-emerald-500/25 text-emerald-300 border-emerald-400/40",
    text: "Free Ambient LED Illumination Kit included with every custom Tajiya commission",
    actionText: "Claim Offer",
    link: "/custom-order",
    isWhatsApp: false,
    active: true,
    createdAt: "2026-01-01T00:00:00.000Z"
  },
  {
    id: "banner-2",
    badge: "IMPORTANT NEWS",
    badgeTheme: "gold",
    badgeStyle: "bg-gold-500/25 text-gold-300 border-gold-400/40",
    text: "Muharram 2027 Advance Bookings Open — Reserve early for guaranteed timely handcrafting & freight dispatch",
    actionText: "Book Tajiya",
    link: "/products?category=Tajiya",
    isWhatsApp: false,
    active: true,
    createdAt: "2026-01-02T00:00:00.000Z"
  },
  {
    id: "banner-3",
    badge: "SAFE DISPATCH",
    badgeTheme: "classic",
    badgeStyle: "bg-white/15 text-sand-200 border-white/25",
    text: "100% Safe Pan-India Delivery — Custom-molded velvet foam cushioning & reinforced wooden export crates",
    actionText: "Logistics Info",
    link: "/contact",
    isWhatsApp: false,
    active: true,
    createdAt: "2026-01-03T00:00:00.000Z"
  },
  {
    id: "banner-4",
    badge: "NEW ARRIVAL",
    badgeTheme: "amber",
    badgeStyle: "bg-amber-500/25 text-amber-300 border-amber-400/40",
    text: "Handcrafted Gumbad-e-Khazra & Ala Hazrat Dargah models now available in catalogue",
    actionText: "Explore Now",
    link: "/products",
    isWhatsApp: false,
    active: true,
    createdAt: "2026-01-04T00:00:00.000Z"
  },
  {
    id: "banner-5",
    badge: "DIRECT ARTISAN",
    badgeTheme: "emerald",
    badgeStyle: "bg-emerald-500/25 text-emerald-300 border-emerald-400/40",
    text: "Direct WhatsApp consultation with Master Craftsman Samsher Alam",
    actionText: "Chat Now",
    link: "",
    isWhatsApp: true,
    active: true,
    createdAt: "2026-01-05T00:00:00.000Z"
  }
];

export const getBanners = () => {
  try {
    const saved = localStorage.getItem('bsc_banner_items');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Error loading banners from storage:", e);
  }
  return DEFAULT_BANNERS;
};

export const getActiveBanners = () => {
  const all = getBanners();
  return all.filter(item => item.active !== false);
};

export const saveBanner = (bannerData) => {
  try {
    const existing = getBanners();
    const themeStyle = BADGE_THEMES[bannerData.badgeTheme]?.classes || BADGE_THEMES.gold.classes;

    let updated;
    if (bannerData.id) {
      // Edit existing
      updated = existing.map(item => {
        if (item.id === bannerData.id) {
          return {
            ...item,
            ...bannerData,
            badgeStyle: themeStyle,
            updatedAt: new Date().toISOString()
          };
        }
        return item;
      });
    } else {
      // Add new
      const newBanner = {
        id: `banner-${Date.now()}`,
        badge: bannerData.badge?.trim() || "ANNOUNCEMENT",
        badgeTheme: bannerData.badgeTheme || "gold",
        badgeStyle: themeStyle,
        text: bannerData.text?.trim() || "",
        actionText: bannerData.actionText?.trim() || "Learn More",
        link: bannerData.link?.trim() || "/products",
        isWhatsApp: Boolean(bannerData.isWhatsApp),
        active: bannerData.active !== false,
        createdAt: new Date().toISOString()
      };
      updated = [newBanner, ...existing];
    }

    localStorage.setItem('bsc_banner_items', JSON.stringify(updated));
    window.dispatchEvent(new Event('banners-updated'));
    return { success: true, banners: updated };
  } catch (e) {
    console.error("Error saving banner:", e);
    return { success: false, error: e.message };
  }
};

export const deleteBanner = (id) => {
  try {
    const existing = getBanners();
    const updated = existing.filter(item => item.id !== id);
    localStorage.setItem('bsc_banner_items', JSON.stringify(updated));
    window.dispatchEvent(new Event('banners-updated'));
    return true;
  } catch (e) {
    console.error("Error deleting banner:", e);
    return false;
  }
};

export const toggleBannerActive = (id) => {
  try {
    const existing = getBanners();
    const updated = existing.map(item => {
      if (item.id === id) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    localStorage.setItem('bsc_banner_items', JSON.stringify(updated));
    window.dispatchEvent(new Event('banners-updated'));
    return true;
  } catch (e) {
    console.error("Error toggling banner status:", e);
    return false;
  }
};

export const reorderBanners = (reorderedList) => {
  try {
    localStorage.setItem('bsc_banner_items', JSON.stringify(reorderedList));
    window.dispatchEvent(new Event('banners-updated'));
    return true;
  } catch (e) {
    console.error("Error reordering banners:", e);
    return false;
  }
};

export const resetBannersToDefault = () => {
  try {
    localStorage.setItem('bsc_banner_items', JSON.stringify(DEFAULT_BANNERS));
    window.dispatchEvent(new Event('banners-updated'));
    return DEFAULT_BANNERS;
  } catch (e) {
    console.error("Error resetting banners:", e);
    return DEFAULT_BANNERS;
  }
};
