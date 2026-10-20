import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('bsc_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('bsc_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error("Error saving cart:", e);
    }
  }, [cartItems]);

  const addToCart = (product, configuration = {}) => {
    const selectedSize = configuration.selectedSize || (product.sizeOptions ? product.sizeOptions[0].name : "Standard");
    const selectedLighting = configuration.selectedLighting || (product.lightingOptions ? product.lightingOptions[0].name : "Standard");
    const unitPrice = configuration.unitPrice || product.price || 0;
    const quantity = configuration.quantity || 1;

    // Unique key per product + configuration
    const itemKey = `${product.id}-${selectedSize}-${selectedLighting}`;

    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.itemKey === itemKey);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            itemKey,
            productId: product.id,
            slug: product.slug,
            name: product.name,
            category: product.category,
            image: product.image,
            selectedSize,
            selectedLighting,
            unitPrice,
            quantity
          }
        ];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (itemKey) => {
    setCartItems(prev => prev.filter(item => item.itemKey !== itemKey));
  };

  const updateQuantity = (itemKey, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemKey);
      return;
    }
    setCartItems(prev => prev.map(item => item.itemKey === itemKey ? { ...item, quantity: newQuantity } : item));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      subtotal,
      totalItemsCount,
      isCartOpen,
      setIsCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false)
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
