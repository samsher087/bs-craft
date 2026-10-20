import React, { useState } from 'react';
import { Play, Sparkles, X, ExternalLink } from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';
import { getSiteConfig, toYouTubeEmbedUrl } from '../config/siteConfig';

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null);
  const siteConfig = getSiteConfig();

  const videos = [
    {
      id: "vid-1",
      title: "Precision Thermocol Jali Hand Cutwork",
      category: "Cutting Process",
      duration: "Behind-the-Scenes",
      thumbnail: "/assets/images/workshop_jali_cutting.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=bzv2S55df8c",
      description: "Witness Master Craftsman Samsher Alam carving 0.5mm geometric arabesque lattice matrices by hand."
    },
    {
      id: "vid-2",
      title: "Ceremonial Golden Illumination Test",
      category: "Lighting Demo",
      duration: "Studio Demo",
      thumbnail: "/assets/images/grand_gumbad_night.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=bzv2S55df8c",
      description: "Low-heat ambient gold and amber LEDs illuminating the inner arches and kalas pinnacle in pitch darkness."
    },
    {
      id: "vid-3",
      title: "Grand Shahi Royal Tajiya Reveal",
      category: "Finished Reveal",
      duration: "Masterpiece",
      thumbnail: "/assets/images/hero_royal_tajiya.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=bzv2S55df8c",
      description: "Complete 360-degree walkthrough of the 7-tier royal Tajiya featuring micro-minars and ornate gold foil leafing."
    },
    {
      id: "vid-4",
      title: "Gumbad-e-Khazra Architectural Tribute",
      category: "Spiritual Craft",
      duration: "Showcase",
      thumbnail: "/assets/images/gumbad_e_khazra.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=bzv2S55df8c",
      description: "A close-up exploration of the sacred Green Dome curvature, arched veranda pillars, and glowing interior."
    }
  ];

  return (
    <section className="relative py-24 sm:py-28 bg-[#091510] overflow-hidden border-t border-gold-500/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-royal-emerald/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header (User Specified Branding) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gold-500/20">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-900 border border-gold-400/35 text-gold-300 text-xs font-semibold uppercase tracking-wider">
              <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
              <span>Studio Reels & Demonstration</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-warm-white tracking-tight">
              Behind Every Creation <span className="text-gold-gradient italic font-cormorant">Is a Story.</span>
            </h2>
            <p className="text-warm-white/80 text-sm sm:text-base max-w-2xl font-sans">
              Watch our handcrafted journey — behind-the-scenes cutting techniques, delicate jali carving, lighting tests, and finished masterpiece reveals.
            </p>
          </div>

          <a
            href={siteConfig.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600/90 hover:bg-red-600 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md self-start md:self-auto cursor-pointer"
          >
            <YoutubeIcon className="w-4 h-4" />
            <span>Visit Official YouTube Channel</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Video Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setActiveVideo(vid)}
              className="group relative rounded-2xl bg-charcoal-900/90 border border-gold-500/20 hover:border-gold-400/60 shadow-xl hover:shadow-gold-md transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail Area with Play Button */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-deep-black">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Play Icon Badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold-500/90 group-hover:bg-gold-400 text-deep-black flex items-center justify-center shadow-gold-md transform group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-deep-black ml-0.5" />
                  </div>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-deep-black/90 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                    {vid.category}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-warm-white group-hover:text-gold-200 transition-colors line-clamp-1">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-warm-white/70 line-clamp-2 mt-1 font-sans">
                    {vid.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-charcoal-800 flex items-center justify-between text-[11px] text-gold-400/90 font-medium">
                  <span>Watch Video</span>
                  <span className="text-emerald-400">Play Demo ▶</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-black/95 backdrop-blur-md">
          <div className="relative w-full max-w-4xl rounded-2xl bg-charcoal-900 border border-gold-500/40 shadow-2xl overflow-hidden">

            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-charcoal-800 bg-deep-black">
              <div className="flex items-center gap-2">
                <YoutubeIcon className="w-4 h-4 text-red-500" />
                <h3 className="font-serif text-sm sm:text-base font-bold text-warm-white">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-warm-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Frame Area */}
            <div className="relative aspect-video w-full bg-deep-black flex items-center justify-center">
              <iframe
                src={toYouTubeEmbedUrl(activeVideo.youtubeUrl, { autoplay: true, mute: false, controls: true })}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-charcoal-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-warm-white/80">
              <p>{activeVideo.description}</p>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={activeVideo.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium text-xs transition-colors"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={siteConfig.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-1.5 rounded-full bg-royal-emerald text-warm-white font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap text-xs"
                >
                  Subscribe
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
