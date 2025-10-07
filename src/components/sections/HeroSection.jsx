import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 flex items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            Data-Driven Ad Campaigns.
            <span className="sm:block mt-2"> Unparalleled Growth. </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl sm:text-xl/relaxed text-gray-300">
            We scale businesses by managing high-performance ad campaigns on Google, Meta, and beyond. Stop guessing, start growing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/contact" primary>Get a Free Consultation</Button>
            <Button to="/case-studies">See Our Results</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;