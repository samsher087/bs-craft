import React from 'react';
import { Sparkles, ArrowUpRight, Heart } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from './SocialIcons';

export default function InstagramSection() {
  const feed = [
    {
      img: "/assets/images/hero_royal_tajiya.jpg",
      likes: "1.8k",
      caption: "New 9-foot royal tajiya completed for Lucknow. Har creation mein mehnat aur perfection! ❤️"
    },
    {
      img: "/assets/images/gumbad_e_khazra.jpg",
      likes: "2.4k",
      caption: "Gumbad-e-Khazra miniature tribute. Warm amber LED testing inside studio."
    },
    {
      img: "/assets/images/workshop_jali_cutting.jpg",
      likes: "3.1k",
      caption: "Macro cutwork carving reel — 14 hours of continuous hand jali work."
    },
    {
      img: "/assets/images/grand_gumbad_night.jpg",
      likes: "2.7k",
      caption: "Ceremonial illumination test for Grand Noor Gumbad. Pure majesty."
    }
  ];

  return (
    <section className="relative py-24 bg-[#040814] overflow-hidden border-t border-gold-500/15">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gold-500/15">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
              <InstagramIcon className="w-3.5 h-3.5 text-gold-400" />
              <span>@beingsamsher</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50 tracking-tight">
              Follow Our <span className="text-gold-gradient italic font-cormorant">Crafting Journey</span>
            </h2>

            <p className="text-ivory-200/80 text-sm sm:text-base font-sans">
              Watch live carving videos, behind-the-scenes studio sessions, and new commission unveilings daily.
            </p>
          </div>

          {/* Social Links Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://instagram.com/beingsamsher"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center gap-2"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://youtube.com/@beingsamsher"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center gap-2"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>YouTube</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://facebook.com/beingsamsher"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center gap-2"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4-Image Instagram Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feed.map((post, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-navy-950 border border-gold-500/25 shadow-lg"
            >
              <img
                src={post.img}
                alt="Instagram post by Being Samsher"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-300 p-5 flex flex-col justify-end text-left space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-rose-400 font-semibold">
                  <Heart className="w-4 h-4 fill-rose-500" />
                  <span>{post.likes}</span>
                </div>
                <p className="text-xs text-ivory-100 font-sans line-clamp-3">
                  {post.caption}
                </p>
                <span className="text-[10px] text-gold-300 font-mono font-medium">
                  #beingsamsher #tajiyadesign
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
