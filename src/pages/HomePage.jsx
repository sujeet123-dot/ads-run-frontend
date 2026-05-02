import React from 'react';
import { Helmet } from 'react-helmet-async';

// Import Components
import HeroSection from '../components/sections/HeroSection';
import ClientLogosSection from '../components/sections/ClientLogosSection';
import StatsSection from '../components/sections/StatsSection';
import ServicesPreviewSection from '../components/sections/ServicesPreviewSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import LookSection from '../components/sections/LookSection';
import HeroSection1 from '../components/sections/HeroSection1';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>ZenithumMedia | Advertising Agency</title>
        <meta name="description" content="Expertly managed ad campaigns on Google, Meta, and LinkedIn to scale your business. Maximize your ROI with Adsonick." />
      </Helmet>

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Client Logos Carousel */}
      <ClientLogosSection />

      {/* 3. Stats Counter */}
      <StatsSection />

      {/* 4. Services Preview Section */}
      <ServicesPreviewSection />

      <LookSection />

      {/* 5. Testimonials Section */}
      <TestimonialsSection />

      {/* 6. FAQ Section */}
      <FAQSection />

      {/* 7. Final CTA Section */}
      <CTASection />
    </>
  )
}
export default HomePage;