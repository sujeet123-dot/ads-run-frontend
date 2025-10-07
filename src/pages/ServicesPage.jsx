// src/pages/ServicesPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ui/ServiceCard'; // Assuming you have this component

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Ad Management Services - AdRun Co.</title>
        <meta name="description" content="Explore our expert ad management services for Google Ads, Meta Ads, and LinkedIn to maximize your ROI and grow your business." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard title="Google Ads Management" description="Target high-intent customers actively searching for your solution." />
          <ServiceCard title="Meta (Facebook & Instagram) Ads" description="Build brand awareness and drive conversions with powerful social ads." />
          <ServiceCard title="LinkedIn Advertising" description="Reach key decision-makers in a professional context with B2B campaigns." />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;