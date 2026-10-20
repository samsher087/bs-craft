import React from 'react';
import HeroVideo from '../components/HeroVideo';
import TajiyaCollections from '../components/home/TajiyaCollections';
import BestsellingModels from '../components/home/BestsellingModels';
import CraftsmanshipMotion from '../components/home/CraftsmanshipMotion';
import MadeToOrderSection from '../components/home/MadeToOrderSection';
import OurProcessSection from '../components/home/OurProcessSection';
import TrustDeliverySection from '../components/home/TrustDeliverySection';
import InstagramYouTubeSection from '../components/home/InstagramYouTubeSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Cinematic Video Hero */}
      <HeroVideo />

      {/* Section A: Tajiya Collections (9:16 Vertical Cards with Details Over Image) */}
      <TajiyaCollections />

      {/* Section B: Bestselling / Featured Models */}
      <BestsellingModels />

      {/* Section C: Craftsmanship in Motion */}
      <CraftsmanshipMotion />

      {/* Section D: Made to Order */}
      <MadeToOrderSection />

      {/* Section E: Our Process */}
      <OurProcessSection />

      {/* Section F: Trust & Delivery */}
      <TrustDeliverySection />

      {/* Section H: Instagram & YouTube */}
      <InstagramYouTubeSection />

      {/* Section I: Atelier Contact & Consultation */}
      <ContactSection />
    </div>
  );
}
