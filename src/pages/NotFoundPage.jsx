import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen pt-36 pb-24 flex items-center justify-center px-4 bg-warm-light text-luxury-charcoal text-center">
      <div className="max-w-md p-8 rounded-card bg-white border border-subtle shadow-lg space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-gold-600 tracking-widest uppercase">Error 404</span>
          <h1 className="font-serif text-3xl font-bold text-luxury-charcoal">
            Page Not Found
          </h1>
          <p className="text-xs text-luxury-charcoal/70 leading-relaxed font-sans">
            The architectural page or model you are searching for does not exist or has been relocated in our digital showroom.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white font-medium text-xs uppercase tracking-wider shadow-sm transition-all"
          >
            Return to Homepage
          </Link>
          <Link
            to="/products"
            className="px-6 py-3 rounded-full bg-warm-light hover:bg-warm-light/70 text-luxury-charcoal border border-subtle font-medium text-xs tracking-wider uppercase transition-all"
          >
            Explore Catalogue
          </Link>
        </div>
      </div>
    </div>
  );
}
