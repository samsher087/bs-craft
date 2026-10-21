import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { buildWhatsAppUrl, getSiteConfig } from '../config/siteConfig';

export default function CartDrawer() {
  const { cartItems, isCartOpen, closeCart, removeFromCart, updateQuantity, subtotal, totalItemsCount } = useCart();
  const [siteConfig, setSiteConfig] = useState(getSiteConfig());

  useEffect(() => {
    const handleUpdate = () => setSiteConfig(getSiteConfig());
    window.addEventListener('site-config-updated', handleUpdate);
    return () => window.removeEventListener('site-config-updated', handleUpdate);
  }, []);

  if (!isCartOpen) return null;

  const handleOrderCartOnWhatsApp = () => {
    if (cartItems.length === 0) return;

    let itemsSummary = cartItems.map((item, idx) => {
      const priceText = siteConfig.showPrices
        ? `\n   • Qty: ${item.quantity} × ₹${item.unitPrice.toLocaleString('en-IN')}\n   • Item Subtotal: ₹${(item.unitPrice * item.quantity).toLocaleString('en-IN')}`
        : `\n   • Qty: ${item.quantity} (Quotation on Request)`;

      return (
        `${idx + 1}. *${item.name}*\n` +
        `   • Size: ${item.selectedSize}\n` +
        `   • Lighting: ${item.selectedLighting}` +
        priceText
      );
    }).join('\n\n');

    const subtotalText = siteConfig.showPrices
      ? `*Cart Estimated Subtotal: ₹${subtotal.toLocaleString('en-IN')}*`
      : `*Quotation: Price on Request (Pending Size & Delivery Destination)*`;

    const message = 
`Hello Being Samsher Crafting!
I would like to place an order enquiry for the following models:

${itemsSummary}

---------------------------------------
${subtotalText}
*(Shipping & packaging charges to be confirmed per destination)*

Please share confirmation, production timeline, and bank/dispatch details.
“Har Creation Mein Mehnat Aur Perfection!”`.trim();

    window.open(buildWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-charcoal-950/60 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-subtle shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-subtle flex items-center justify-between bg-sand-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gold-500" />
              <h2 className="font-serif text-lg font-bold text-charcoal-900">
                Your Selection ({totalItemsCount})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-lg text-charcoal-500 hover:text-charcoal-900 hover:bg-sand-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-sand-100 flex items-center justify-center text-charcoal-400 mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-base font-bold text-charcoal-900">Your shopping bag is empty</h3>
                <p className="text-xs text-charcoal-500 max-w-xs mx-auto">
                  Explore our handcrafted collection of Tajiyas, Gumbads, Minars, and fine jali work.
                </p>
                <div className="pt-2">
                  <button
                    onClick={closeCart}
                    className="px-5 py-2 rounded-full bg-emerald-850 hover:bg-emerald-900 text-white text-xs font-semibold"
                  >
                    Explore Catalogue
                  </button>
                </div>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.itemKey}
                  className="p-3.5 rounded-xl border border-subtle bg-sand-50/50 flex gap-3.5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg bg-sand-200 shrink-0"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <Link
                          to={`/products/${item.slug}`}
                          onClick={closeCart}
                          className="font-serif text-sm font-bold text-charcoal-900 hover:text-gold-600 line-clamp-1"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.itemKey)}
                          className="text-charcoal-400 hover:text-red-500 p-0.5"
                          title="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-charcoal-500 font-sans mt-0.5 line-clamp-1">
                        Size: <span className="font-medium text-charcoal-700">{item.selectedSize}</span>
                      </p>
                      <p className="text-[10px] text-charcoal-500 font-sans line-clamp-1">
                        Light: <span className="font-medium text-charcoal-700">{item.selectedLighting}</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 mt-1 border-t border-subtle">
                      {siteConfig.showPrices ? (
                        <span className="font-serif text-xs font-bold text-charcoal-900">
                          ₹{(item.unitPrice * item.quantity).toLocaleString('en-IN')}
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold text-charcoal-700">
                          Quote on Request
                        </span>
                      )}

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-1.5 border border-subtle rounded-lg bg-white px-1.5 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.itemKey, item.quantity - 1)}
                          className="p-1 hover:text-gold-600 text-charcoal-600"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-medium px-1 text-charcoal-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.itemKey, item.quantity + 1)}
                          className="p-1 hover:text-gold-600 text-charcoal-600"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-subtle bg-sand-50 space-y-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-charcoal-600 font-medium">
                    {siteConfig.showPrices ? "Estimated Subtotal" : "Quotation Subtotal"}
                  </span>
                  <span className="font-serif text-lg font-bold text-charcoal-900">
                    {siteConfig.showPrices ? `₹${subtotal.toLocaleString('en-IN')}` : "Quote on Request"}
                  </span>
                </div>
                <div className="flex items-start gap-1.5 text-[11px] text-charcoal-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-850 shrink-0 mt-0.5" />
                  <span>Delivery & heavy-duty wooden crating charges confirmed upon destination verification.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleOrderCartOnWhatsApp}
                  className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Selection via WhatsApp</span>
                </button>

                <button
                  onClick={closeCart}
                  className="w-full py-2.5 rounded-full border border-subtle text-charcoal-700 hover:text-charcoal-900 hover:bg-white text-xs font-semibold transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
