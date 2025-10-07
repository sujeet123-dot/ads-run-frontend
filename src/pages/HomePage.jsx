import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/sections/HeroSection';
import TestimonialCard from '../components/ui/TestimonialCard';
import Button from '../components/ui/Button';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>AdRun Pro | Performance Marketing Agency</title>
        <meta name="description" content="Expertly managed ad campaigns on Google, Meta, and LinkedIn to scale your business. Maximize your ROI with AdRun Pro." />
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-gray-400">Our results speak for themselves. Here's what our clients say.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TestimonialCard 
              quote="AdRun Pro doubled our lead generation in just 3 months. Their attention to detail is unmatched."
              author="Jane Doe"
              company="CEO, TechStart Inc."
            />
            <TestimonialCard 
              quote="The most transparent and effective ad agency we've ever worked with. Our ROAS has never been higher."
              author="John Smith"
              company="Marketing Director, FashionVerse"
            />
             <TestimonialCard 
              quote="They took the time to understand our niche B2B market and delivered a campaign that exceeded all expectations."
              author="Emily White"
              company="Founder, Innovate Solutions"
            />
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Amplify Your Growth?</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Let's build a winning strategy for your business. Get in touch for a free, no-obligation proposal.</p>
            <div className="mt-8">
               <Button to="/contact" primary>Schedule Your Free Call</Button>
            </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;