import React from 'react';
import { X, ShieldCheck, FileText, Truck } from 'lucide-react';
import { getSiteConfig } from '../config/siteConfig';

export default function LegalModals({ activePolicy, onClose }) {
  if (!activePolicy) return null;
  const siteConfig = getSiteConfig();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-luxury-charcoal/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[85vh] rounded-card bg-white border border-subtle shadow-2xl flex flex-col overflow-hidden animate-fade-in">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-subtle bg-warm-light/40">
          <div className="flex items-center gap-2.5">
            {activePolicy === 'privacy' && <ShieldCheck className="w-5 h-5 text-emerald-800" />}
            {activePolicy === 'terms' && <FileText className="w-5 h-5 text-gold-600" />}
            {activePolicy === 'shipping' && <Truck className="w-5 h-5 text-gold-600" />}
            
            <h3 className="font-serif text-lg font-bold text-luxury-charcoal">
              {activePolicy === 'privacy' && 'Privacy Policy'}
              {activePolicy === 'terms' && 'Terms & Conditions'}
              {activePolicy === 'shipping' && 'Shipping & Delivery Feasibility Policy'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-warm-light text-luxury-charcoal/70 hover:text-luxury-charcoal transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-luxury-charcoal/80 font-sans leading-relaxed">
          {activePolicy === 'privacy' && (
            <>
              <p>
                <strong className="text-luxury-charcoal">Privacy Policy for Being Samsher Crafting</strong>
              </p>
              <p>
                We respect your personal privacy. When you enquire about custom models via our forms or WhatsApp, we collect only necessary contact information (name, phone number, delivery location, and custom specifications).
              </p>
              <p>
                <strong>Data Usage:</strong> Your details are used exclusively for direct communication, quotation preparation, blueprint sharing, and delivery logistics coordination.
              </p>
              <p>
                <strong>Third-Party Sharing:</strong> We do not sell, rent, or share your contact information with any marketing companies or third parties, except authorized logistics partners for package delivery.
              </p>
              <p>
                <strong>Contact:</strong> For questions regarding your information, contact us via WhatsApp or at {siteConfig.email}.
              </p>
            </>
          )}

          {activePolicy === 'terms' && (
            <>
              <p>
                <strong className="text-luxury-charcoal">Terms & Conditions of Commission</strong>
              </p>
              <p>
                <strong>1. Handcrafted Nature:</strong> Every model is hand-carved, cut, and assembled. Minor natural variations in foil burnish and thermocol texture are authentic signatures of artisan handwork.
              </p>
              <p>
                <strong>2. Custom Orders:</strong> Custom commission dimensions and structural specifications are finalized prior to crafting. Changes requested after cutting has commenced may incur additional material charges.
              </p>
              <p>
                <strong>3. Dispatch Feasibility:</strong> Because large architectural models are fragile and structural, delivery to certain remote pin codes is subject to transport feasibility and courier container clearance.
              </p>
            </>
          )}

          {activePolicy === 'shipping' && (
            <>
              <p>
                <strong className="text-luxury-charcoal">Shipping & Delivery Feasibility Policy</strong>
              </p>
              <p>
                <strong>All India Reach:</strong> We arrange dispatch across India. Shipping availability depends on overall package dimensions, courier height clearance, and safe transit routes to your destination city.
              </p>
              <p>
                <strong>Custom Wooden Crating:</strong> Every model is packed inside an interior high-density shock-absorbing foam mold and an exterior reinforced wooden shipping crate with fragile consignment markings.
              </p>
              <p>
                <strong>Packaging & Delivery Charges:</strong> Shipping fees are calculated based on actual crate dimensions, weight, and delivery pincode, and are confirmed directly via WhatsApp prior to dispatch.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-subtle bg-warm-light/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-luxury-charcoal text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
