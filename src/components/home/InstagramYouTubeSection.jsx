import React, { useState } from 'react';
import { ExternalLink, Play, X } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '../SocialIcons';
import { getSiteConfig, toYouTubeEmbedUrl, toYouTubeWatchUrl } from '../../config/siteConfig';

export default function InstagramYouTubeSection() {
  const siteConfig = getSiteConfig();
  const [activeVideo, setActiveVideo] = useState(null);

  const socialReels = [
    {
      title: "Gumbad-e-Khazra Light Reveal",
      image: "/assets/images/gumbad_e_khazra.jpg",
      platform: "Instagram Reel",
      url: siteConfig.instagramUrl,
      videoUrl: null
    },
    {
      title: "Royal Blue Dome Filigree",
      image: "/assets/images/royal_blue_dome.jpg",
      platform: "YouTube Short",
      url: siteConfig.youtubeUrl,
      videoUrl: "https://www.youtube.com/watch?v=bzv2S55df8c"
    },
    {
      title: "Hand Carving Geometric Jali",
      image: "/assets/images/workshop_jali_cutting.jpg",
      platform: "Behind the Scenes",
      url: siteConfig.instagramUrl,
      videoUrl: null
    },
    {
      title: "Night Illumination on Noor Gumbad",
      image: "/assets/images/grand_gumbad_night.jpg",
      platform: "YouTube Showcase",
      url: siteConfig.youtubeUrl,
      videoUrl: "https://www.youtube.com/watch?v=bzv2S55df8c"
    }
  ];

  const handleCardClick = (reel) => {
    if (reel.videoUrl) {
      setActiveVideo(reel);
    } else {
      window.open(reel.url, '_blank');
    }
  };

  return (
    <section className="py-24 sm:py-28 bg-sand-100 text-charcoal-900 border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-subtle">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold-600 font-semibold">
              Live Studio Feeds
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-charcoal-900">
              Instagram & <span className="font-cormorant italic font-normal text-gold-600">YouTube Stories</span>
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl font-sans">
              Follow our daily carving sessions, time-lapses, and completed commission ceremonies.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-subtle bg-white hover:bg-sand-200 text-charcoal-800 text-xs font-semibold shadow-sm transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
              <span>@beingsamsher</span>
            </a>

            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-subtle bg-white hover:bg-sand-200 text-charcoal-800 text-xs font-semibold shadow-sm transition-colors"
            >
              <YoutubeIcon className="w-3.5 h-3.5 text-red-600" />
              <span>YouTube Channel</span>
            </a>
          </div>
        </div>

        {/* Visual Reels Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialReels.map((reel, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(reel)}
              className="group relative rounded-card overflow-hidden bg-sand-200 aspect-[4/5] shadow-subtle hover:shadow-medium transition-all block cursor-pointer"
            >
              <img
                src={reel.image}
                alt={reel.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Play Badge for YouTube reels */}
              {reel.videoUrl ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                </div>
              ) : (
                <div className="absolute top-3 right-3 p-2 rounded-full bg-charcoal-950/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              )}

              <div className="absolute bottom-4 inset-x-4 text-white space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-gold-300">
                  {reel.platform}
                </span>
                <h4 className="font-serif text-sm font-bold group-hover:text-gold-200 transition-colors line-clamp-2">
                  {reel.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl rounded-card bg-charcoal-900 border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-charcoal-950">
              <div className="flex items-center gap-2">
                <YoutubeIcon className="w-4 h-4 text-red-500" />
                <h3 className="font-serif text-sm font-bold text-white">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1 rounded-lg text-sand-300 hover:text-white"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full bg-charcoal-950">
              <iframe
                src={toYouTubeEmbedUrl(activeVideo.videoUrl, { autoplay: true, mute: false, controls: true })}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="p-4 text-xs text-sand-200/80 bg-charcoal-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span>{activeVideo.title} · Handcrafted by Being Samsher Crafting</span>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={toYouTubeWatchUrl(activeVideo.videoUrl)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium text-[11px] transition-colors"
                >
                  <YoutubeIcon className="w-3 h-3" />
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

