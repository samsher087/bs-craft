import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ChevronDown, ShieldCheck, Play, X, ExternalLink } from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';
import { getSiteConfig, getYouTubeVideoId, toYouTubeEmbedUrl, toYouTubeWatchUrl } from '../config/siteConfig';

export default function HeroVideo() {
  const siteConfig = getSiteConfig();
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  const youtubeVideoId = getYouTubeVideoId(siteConfig.heroVideoUrl || "https://youtu.be/vKihid2cNvs?si=ac2rruwVnGfnaNx_");
  const isYouTube = Boolean(youtubeVideoId);

  const togglePlay = () => {
    if (isYouTube) {
      setIsModalOpen(true);
      return;
    }
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const scrollToNext = () => {
    const el = document.getElementById('tajiya-collections') || document.getElementById('featured-collections');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal-950 text-white">
      {/* Background Video Player with Fallback Poster */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {isYouTube ? (
          <div className="relative w-full h-full overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeVideoId}&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`}
              title="Being Samsher Crafting Hero Video"
              className="absolute top-1/2 left-1/2 w-[180vw] h-[180vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-1000 border-0 pointer-events-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setVideoLoaded(true)}
              style={{ opacity: videoLoaded ? 0.90 : 0.70 }}
            />
          </div>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={siteConfig.heroPosterImage || "/assets/images/hero_royal_tajiya.jpg"}
            onLoadedData={() => setVideoLoaded(true)}
            className="w-full h-full object-cover object-center scale-105 transition-opacity duration-1000"
            style={{ opacity: videoLoaded ? 0.90 : 0.75 }}
          >
            <source src={siteConfig.heroVideoUrl} type="video/mp4" />
            <img
              src={siteConfig.heroPosterImage || "/assets/images/hero_royal_tajiya.jpg"}
              alt="Handcrafted architectural models in workshop"
              className="w-full h-full object-cover"
            />
          </video>
        )}

        {/* Balanced Vignette: keeps workshop crafting clearly visible in center while ensuring text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/20 to-charcoal-950/85 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_45%,_rgba(10,13,16,0.5)_100%] pointer-events-none" />
      </div>

      {/* Floating Ambient Craft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-500/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Hero Content Container - Clean clearance below fixed navbar & above bottom controls */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-36 sm:pb-28 text-center space-y-5 z-10">

        {/* Eyebrow (User Specified) */}

        {/* Main Heading (User Specified) with text drop shadow for contrast against brighter video */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-sand-50 leading-[1.12] max-w-4xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          Artistry That Brings Every <br className="hidden sm:inline" />
          <span className="italic font-cormorant font-normal text-gold-gradient-dark">
            Detail to Life.
          </span>
        </h1>

        {/* Supporting Text (User Specified) */}


        {/* Brand Signature */}
        <p className="text-gold-300 font-cormorant italic text-lg sm:text-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          “Har Creation Mein Mehnat Aur Perfection! | Let's Build Something Extraordinary.”
        </p>

        {/* CTA Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 flex-wrap">
          <Link
            to="/products"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider shadow-gold-subtle hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span>Explore Our Collection</span>
            <ArrowRight className="w-4 h-4 text-charcoal-950 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* High-Visibility Watch Video CTA Button */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:to-red-600 text-white border border-red-300/40 font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(220,38,38,0.55)] hover:shadow-[0_0_35px_rgba(220,38,38,0.75)] hover:scale-105 cursor-pointer ring-2 ring-red-400/40 group"
          >
            <span className="relative flex h-3.5 w-3.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
              <Play className="relative w-3.5 h-3.5 fill-white text-white ml-0.5" />
            </span>
            <span>Watch Studio Crafting Video</span>
          </button>

          <Link
            to="/custom-order"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Sparkles className="w-4 h-4 text-gold-300" />
            <span>Custom Order</span>
          </Link>
        </div>

        {/* Dedicated Live Video Status & Play Trigger */}
        <div className="pt-1 flex justify-center">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-charcoal-900/80 hover:bg-charcoal-900 border border-gold-500/40 hover:border-gold-400 backdrop-blur-md text-sand-100 hover:text-white transition-all shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:scale-105 cursor-pointer group"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-sand-200">
              Playing Studio Reel: <span className="text-gold-300 font-semibold">Authentic Hand-Cut Tajiya Crafting</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono font-bold text-gold-400 group-hover:text-gold-200 bg-gold-500/15 px-2 py-0.5 rounded-full border border-gold-500/30">
              <Play className="w-2.5 h-2.5 fill-current" />
              Watch HD
            </span>
          </button>
        </div>

        {/* Subtle Trust Line */}
        <div className="pt-2 flex items-center justify-center gap-3 text-xs text-sand-200/90 font-sans drop-shadow">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Bespoke Proportions • Safe Wooden Crating • All India Express Transit</span>
        </div>

      </div>

      {/* Bottom Controls: Video Play/Pause & Scroll Indicator (Positioned with clear margin to prevent clipping) */}
      <div className="absolute bottom-4 sm:bottom-6 inset-x-0 max-w-7xl mx-auto px-6 flex items-center justify-between text-xs text-sand-300/80 z-20">

        {/* Play/Pause / Watch Toggle */}
        <button
          onClick={togglePlay}
          className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-charcoal-900/95 border border-gold-400/60 hover:border-gold-400 backdrop-blur-md text-xs font-semibold text-gold-300 hover:text-white transition-all shadow-[0_4px_16px_rgba(0,0,0,0.7)] hover:scale-105 cursor-pointer group"
          title="Watch studio crafting video in HD"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <Play className="w-3.5 h-3.5 text-gold-400 fill-gold-400 group-hover:scale-110 transition-transform" />
          <span>Watch Full Video (HD)</span>
        </button>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-1 hover:text-white transition-colors cursor-pointer group drop-shadow"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono font-medium">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-gold-400 animate-bounce" />
        </button>

        {/* Location Stamp */}
        <div className="hidden sm:block text-[11px] font-mono text-sand-300/90 bg-charcoal-900/70 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
          📍 Giridih, Jharkhand, India
        </div>
      </div>

      {/* Full HD Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl rounded-card bg-charcoal-900 border border-gold-500/30 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-charcoal-950">
              <div className="flex items-center gap-2">
                <YoutubeIcon className="w-4 h-4 text-red-500" />
                <h3 className="font-serif text-sm sm:text-base font-bold text-white">
                  हर Design की अपनी पहचान ❤️ | Being Samsher Crafting
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-sand-300 hover:text-white"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full bg-charcoal-950">
              <iframe
                src={toYouTubeEmbedUrl(siteConfig.heroVideoUrl || "https://youtu.be/vKihid2cNvs?si=ac2rruwVnGfnaNx_", { autoplay: true, mute: false, controls: true })}
                title="Being Samsher Crafting Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="p-4 text-xs text-sand-200/80 bg-charcoal-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span>Experience authentic hand-cut thermocol models, golden leafing & lighting tests from our Giridih workshop.</span>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={toYouTubeWatchUrl(siteConfig.heroVideoUrl)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium text-xs transition-colors"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

