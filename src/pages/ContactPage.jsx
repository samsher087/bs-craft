import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import { getSiteConfig } from '../config/siteConfig';

export default function ContactPage() {
  const siteConfig = getSiteConfig();

  return (
    <div className="min-h-screen pt-24 pb-12 bg-[#0A0D14] text-sand-100">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center gap-2 text-xs font-mono text-gold-400 font-medium">
          <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <span className="text-sand-300">Studio & Contact</span>
        </div>
      </div>

      {/* Main Luxury Contact Section Component */}
      <ContactSection isPage={true} />
    </div>
  );
}
