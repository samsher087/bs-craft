import React, { useState } from 'react';
import { Play, X, ExternalLink } from 'lucide-react';
import { YoutubeIcon } from '../SocialIcons';
import { toYouTubeEmbedUrl, toYouTubeWatchUrl } from '../../config/siteConfig';

export default function CraftsmanshipMotion() {
  const [activeClip, setActiveClip] = useState(null);

  const motionStrips = [
    {
      id: "strip-1",
      title: "Precision Thermocol Cutting",
      phase: "01. Sculpting Phase",
      desc: "Sub-millimeter micro-knife hand cutting of raw architectural thermocol.",
      image: "/assets/images/workshop_jali_cutting.jpg",
      videoUrl: "https://www.youtube.com/watch?v=bzv2S55df8c"
    },
    {
      id: "strip-2",
      title: "Fine Arabesque Jali Work",
      phase: "02. Cutwork Detailing",
      desc: "Perforating intricate eight-point star matrices for interior shadow projection.",
      image: "/assets/images/tajiya_red_dome_emerald_glow.jpg",
      videoUrl: "https://youtube.com/shorts/ca5T2-Y0JVQ?si=vwnM3kan66RUgWi0"
    },
    {
      id: "strip-3",
      title: "Assembly & Gold Gilded Finishing",
      phase: "03. Structural Gilding",
      desc: "Aligning multi-tiered architectural pillars and adhering 24k-style metallic leaf.",
      image: "/assets/images/royal_blue_dome.jpg",
      videoUrl: "https://youtu.be/gLM27KPwedU?si=ZsQQE0HckRHkKBFh"
    },
    {
      id: "strip-4",
      title: "Lighting Circuit Installation",
      phase: "04. Optical Engineering",
      desc: "Installing low-heat warm golden LED channels hidden within arcades.",
      image: "/assets/images/grand_gumbad_night.jpg",
      videoUrl: "https://youtu.be/AueuFoNUvz0?si=RQgrNTtdSJNazgj_"
    },
    {
      id: "strip-5",
      title: "Final Masterpiece Reveal",
      phase: "05. Inspection & Reveal",
      desc: "360-degree illumination reveal and dimensional verification prior to wooden crating.",
      image: "/assets/images/hero_royal_tajiya.PNG",
      videoUrl: "https://youtu.be/KHupuU34mQE?si=YXnWyXxzpLhLRw7U"
    }
  ];

  return (
    <section id="craft" className="pt-10 sm:pt-12 pb-8 sm:pb-10 bg-charcoal-850 text-white border-b border-subtle-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-7 sm:pb-8 border-b border-subtle-dark">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-[11px] font-mono uppercase tracking-[0.2em] font-semibold">
              <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
              <span>Studio Crafting Videos</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Craftsmanship <span className="font-cormorant italic font-normal text-gold-400">in Motion</span>
            </h2>
            <p className="text-xs sm:text-sm text-sand-300/80 max-w-xl font-sans">
              Watch real-time cutting, illumination tests, and master reveals directly from our workshop. Click any card below to play the video.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-900 border border-white/10 text-xs text-sand-200 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>5 Interactive Video Stages</span>
            </span>
          </div>
        </div>

        {/* Video Reel Strip Cards */}
        <div className="mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {motionStrips.map((strip) => (
            <div
              key={strip.id}
              onClick={() => setActiveClip(strip)}
              className="group relative rounded-card overflow-hidden bg-charcoal-900 border border-subtle-dark hover:border-gold-400/70 shadow-subtle hover:shadow-[0_4px_24px_rgba(212,160,23,0.25)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-charcoal-950">
                <img
                  src={strip.image}
                  alt={strip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />

                {/* Highly Visible Animated Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-14 h-14 rounded-full bg-gold-400/30 animate-ping opacity-75" />
                    <div className="relative w-12 h-12 rounded-full bg-gold-500 group-hover:bg-gold-400 text-charcoal-950 flex items-center justify-center shadow-[0_0_20px_rgba(212,160,23,0.6)] transform group-hover:scale-115 transition-all duration-300">
                      <Play className="w-5 h-5 fill-charcoal-950 ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Stage Phase Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-charcoal-950/85 text-gold-300 border border-gold-500/30 shadow-sm backdrop-blur-sm">
                    {strip.phase}
                  </span>
                </div>

                {/* Quick Watch Pill */}
                <div className="absolute bottom-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-red-600/90 group-hover:bg-red-600 text-white shadow-md backdrop-blur-xs transition-colors">
                    <Play className="w-2.5 h-2.5 fill-white" />
                    <span>Play Video</span>
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-2 bg-charcoal-900 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-sm font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-1">
                    {strip.title}
                  </h3>
                  <p className="text-[11px] text-sand-300/70 line-clamp-2 leading-relaxed mt-1">
                    {strip.desc}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-gold-400 group-hover:text-gold-300">
                  <span className="flex items-center gap-1.5">
                    <Play className="w-3 h-3 fill-gold-400" />
                    Watch Clip
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">HD Demo ▶</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {activeClip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/90 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-card bg-charcoal-900 border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-charcoal-950">
              <div className="flex items-center gap-2">
                <YoutubeIcon className="w-4 h-4 text-red-500" />
                <h3 className="font-serif text-sm font-bold text-white">
                  {activeClip.title} ({activeClip.phase})
                </h3>
              </div>
              <button
                onClick={() => setActiveClip(null)}
                className="p-1 rounded-lg text-sand-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full bg-charcoal-950">
              <iframe
                src={toYouTubeEmbedUrl(activeClip.videoUrl, { autoplay: true, mute: false, controls: true })}
                title={activeClip.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="p-4 text-xs text-sand-200/80 bg-charcoal-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span>{activeClip.desc}</span>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={toYouTubeWatchUrl(activeClip.videoUrl)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium text-[11px] transition-colors"
                >
                  <YoutubeIcon className="w-3 h-3" />
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-gold-400 font-mono text-[11px] hidden sm:inline">Recorded at Studio in Jharkhand</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
