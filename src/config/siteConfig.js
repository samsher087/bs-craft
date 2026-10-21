// Central configuration for Being Samsher Crafting
// Can be customized via environment variables or updated dynamically through Admin Dashboard

const DEFAULT_CONFIG = {
  brandName: "Being Samsher Crafting",
  tagline: "Where Every Design Becomes a New Identity.",
  signature: "Being Samsher Crafting — Har Creation Mein Mehnat Aur Perfection!",
  location: "Jharkhand, India",
  fullAddress: "Giridih, Jharkhand - 825412, India",
  shippingNotice: "All India Delivery Available (Subject to product size, packaging & delivery feasibility)",
  whatsappNumber: "919818572692", // Central configurable WhatsApp number
  displayPhone: "+91 9818572692",
  email: "shamii087@gmail.com",
  instagramUrl: "https://instagram.com/beingsamsher",
  youtubeUrl: "https://youtube.com/@beingsamsher",
  facebookUrl: "https://facebook.com/samshercrafts",
  adminPin: "samsher2026",

  // Pricing Visibility Configuration - Hidden by default per studio policy (can be toggled in Admin Dashboard)
  showPrices: false,

  // Hero Video Configuration - Official Samsher Crafting Video
  heroVideoUrl: "https://youtu.be/vKihid2cNvs?si=ac2rruwVnGfnaNx_",
  heroPosterImage: "/assets/images/hero_royal_tajiya.jpg",
  heroHeading: "Artistry That Brings Every Detail to Life.",
  heroSupportingText: "Discover beautifully crafted Tajiya, Gumbad, Minar and architectural models, created with precision, creativity, and passion."
};

export const getSiteConfig = () => {
  try {
    const saved = localStorage.getItem('bsc_site_config');
    if (saved) {
      const parsed = JSON.parse(saved);
      let modified = false;

      // Clean up legacy video URLs if present
      if (parsed.heroVideoUrl && (parsed.heroVideoUrl.includes('mixkit.co') || parsed.heroVideoUrl.includes('bzv2S55df8c'))) {
        parsed.heroVideoUrl = DEFAULT_CONFIG.heroVideoUrl;
        modified = true;
      }
      // Migrate legacy default contact details
      if (parsed.fullAddress === "Giridih, Jharkhand - 815301, India") {
        parsed.fullAddress = DEFAULT_CONFIG.fullAddress;
        modified = true;
      }
      if (parsed.whatsappNumber === "919934526789") {
        parsed.whatsappNumber = DEFAULT_CONFIG.whatsappNumber;
        modified = true;
      }
      if (parsed.displayPhone === "+91 9934526789") {
        parsed.displayPhone = DEFAULT_CONFIG.displayPhone;
        modified = true;
      }
      if (parsed.email === "beingsamshercrafting@gmail.com") {
        parsed.email = DEFAULT_CONFIG.email;
        modified = true;
      }

      // Default showPrices to false if not explicitly set
      if (parsed.showPrices === undefined) {
        parsed.showPrices = false;
        modified = true;
      }

      if (modified) {
        localStorage.setItem('bsc_site_config', JSON.stringify(parsed));
      }
      return { ...DEFAULT_CONFIG, ...parsed };
    }
  } catch (e) {
    console.error("Error reading site config:", e);
  }
  return DEFAULT_CONFIG;
};

export const saveSiteConfig = (newConfig) => {
  try {
    localStorage.setItem('bsc_site_config', JSON.stringify(newConfig));
    window.dispatchEvent(new Event('site-config-updated'));
    return true;
  } catch (e) {
    console.error("Error saving site config:", e);
    return false;
  }
};

export const buildWhatsAppUrl = (customMessage = "") => {
  const config = getSiteConfig();
  const defaultMsg = `Hello Being Samsher Crafting! I visited your website and would like to enquire about your custom handcrafted models.`;
  const message = customMessage || defaultMsg;
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const buildProductWhatsAppUrl = ({ productName, priceDisplay, selectedSize, productUrl }) => {
  const config = getSiteConfig();
  const pricingLine = (config.showPrices && priceDisplay)
    ? `Product price: ${priceDisplay}.\n`
    : `Please share the price quotation, customization options, and delivery timeline.\n`;

  const msg =
    `Hello Being Samsher Crafting! I am interested in ${productName}.
${pricingLine}Selected size: ${selectedSize || 'Standard'}.
Please confirm availability and delivery charges.
${productUrl ? `Product Link: ${productUrl}` : ''}`.trim();

  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

export const getYouTubeVideoId = (url) => {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  // Check if already an 11-char alphanumeric ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }
  // Match standard YouTube URLs, shorts, embed, live, youtu.be
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))([\w-]{11})/;
  const match = trimmed.match(regex);
  if (match && match[1]) {
    return match[1];
  }
  return null;
};

export const toYouTubeEmbedUrl = (url, { autoplay = true, mute = false, loop = false, controls = true } = {}) => {
  if (!url) return '';
  const videoId = getYouTubeVideoId(url);
  if (videoId) {
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      mute: mute ? '1' : '0',
      controls: controls ? '1' : '0',
      rel: '0',
      modestbranding: '1',
      enablejsapi: '1'
    });
    if (loop) {
      params.set('loop', '1');
      params.set('playlist', videoId);
    }
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }
  if (url.includes('/embed/')) return url;
  return url;
};

export const toYouTubeWatchUrl = (url) => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://www.youtube.com/watch?v=${videoId}` : (url || 'https://www.youtube.com/@beingsamsher');
};

