import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | AdRun Pro</title>
        <meta name="description" content="Learn about the team, mission, and values behind AdRun Pro. We are a passionate team of digital marketing experts." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">We Are Your Growth Partners</h1>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            AdRun Pro was founded on a simple principle: advertising should be an investment, not an expense. We are a team of passionate data analysts, creative strategists, and digital marketers dedicated to helping businesses achieve sustainable growth through performance marketing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-left text-gray-300 space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2">Our Mission</h2>
          <p>
            Our mission is to empower businesses of all sizes to compete and win in the digital landscape. We do this by creating transparent, data-driven, and highly effective advertising strategies that deliver a clear and measurable return on investment.
          </p>
          <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2 pt-6">Our Approach</h2>
          <p>
            We believe in partnership. We work closely with our clients to understand their unique goals, challenges, and customers. We don't use a one-size-fits-all approach. Instead, every campaign is custom-built, meticulously managed, and continuously optimized for peak performance.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;