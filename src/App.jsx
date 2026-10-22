import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

// Global Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LegalModals from './components/LegalModals';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';

// Page Views
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CustomOrderPage from './pages/CustomOrderPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [activePolicy, setActivePolicy] = useState(null);

  const handleOpenPolicy = (policyKey) => {
    setActivePolicy(policyKey);
  };

  const handleClosePolicy = () => {
    setActivePolicy(null);
  };

  return (
    <ErrorBoundary>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-warm-light text-luxury-charcoal font-sans selection:bg-gold-500 selection:text-white flex flex-col justify-between">
            
            {/* Sticky Luxury Navbar with Cart Drawer trigger & Mobile Menu */}
            <Navbar />

            {/* Slide-out Cart Drawer */}
            <CartDrawer />

            {/* Dynamic Route View */}
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:slug" element={<ProductDetailPage />} />
                
                {/* Legacy / Alias paths for backwards compatibility */}
                <Route path="/creations" element={<Navigate to="/products" replace />} />
                <Route path="/creations/:slug" element={<ProductDetailPage />} />
                
                <Route path="/custom-order" element={<CustomOrderPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/admin" element={<AdminDashboardPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>

            {/* Brand Footer with Navigation, Policies, and Location */}
            <Footer onOpenPolicy={handleOpenPolicy} />

            {/* Global Floating WhatsApp Contact Quick Action */}
            <FloatingWhatsApp />

            {/* Legal Policies Modal (Privacy, Terms, Shipping & Delivery Feasibility) */}
            <LegalModals activePolicy={activePolicy} onClose={handleClosePolicy} />

          </div>
        </Router>
      </CartProvider>
    </ErrorBoundary>
  );
}

