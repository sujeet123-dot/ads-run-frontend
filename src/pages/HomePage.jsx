import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import { Smartphone, Globe, Layers, ArrowRight } from 'lucide-react'; 

// Import Components
import HeroSection from '../components/sections/HeroSection';
import TestimonialCard from '../components/ui/TestimonialCard'; 
import ServiceCard from '../components/ui/ServiceCard'
import Button from '../components/ui/Button';
import LookSection from '../components/sections/LookSection';

const HomePage = () => {

  // useEffect(() => {
  // window.location.href = "https://sujeetkumar.space";
  // }, []);


  
  // Data for Services Preview
  const services = [
    {
      icon: <Smartphone />,
      title: "Mobile Advertising",
      desc: "Reach millions of smartphone users worldwide with our targeted campaigns and real-time bidding strategies."
    },
    {
      icon: <Globe />,
      title: "Web Marketing",
      desc: "Maximize desktop reach with high-quality traffic sources, premium placements, and data-driven optimization."
    },
    {
      icon: <Layers />,
      title: "Display & Programmatic",
      desc: "Visually communicate your message through high-impact banners, video ads, and native placements."
    }
  ];

  return (
    <>
      <Helmet>
        <title>ZenithumMedia | Performance Marketing Agency</title>
        <meta name="description" content="Expertly managed ad campaigns on Google, Meta, and LinkedIn to scale your business. Maximize your ROI with Adsonick." />
      </Helmet>

      {/* 1. Hero Section (Already styled) */}
      <HeroSection />

      {/* 2. Services Preview Section */}
      <section className="py-24 bg-purple-50 px-6">
        <div className="container mx-auto">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Holistic <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400">Growth Solutions</span>
            </h2>
            <p className="text-gray-800 text-lg">
              We provide a full spectrum of digital marketing services designed to work together for maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceCard 
                key={i} 
                icon={s.icon} 
                title={s.title} 
                description={s.desc} 
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/services" secondary className="gap-2 group">
              View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </section>

      <LookSection />

      {/* 3. Testimonials Section */}
      <section className="py-24 bg-[#e9eaee] px-6 border-t border-white/5">
        <div className="container mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-orange-700 mb-6">Trusted by Leaders</h2>
            <p className="text-gray-600 text-lg">
              Our results speak for themselves. Here's what our partners have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="ZenithumMedia doubled our lead generation in just 3 months. Their attention to detail and data transparency is unmatched in the industry."
              author="Jane Doe"
              company="CEO, TechStart Inc."
            />
            <TestimonialCard 
              quote="The most transparent and effective ad agency we've ever worked with. Our ROAS has never been higher, and communication is seamless."
              author="John Smith"
              company="CMO, FashionVerse"
            />
             <TestimonialCard 
              quote="They took the time to understand our niche B2B market and delivered a highly targeted LinkedIn campaign that exceeded all expectations."
              author="Emily White"
              company="Founder, Innovate Solutions"
            />
          </div>

        </div>
      </section>

      {/* 4. Final CTA Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        
        {/* Decorative background for the CTA card */}
        <div className="container mx-auto relative z-10">
          <div className="bg-gradient-to-r from-red-300 to-orange-400 rounded-3xl p-12 md:p-20 text-center border border-white/10 shadow-2xl relative overflow-hidden">
            
            {/* Glowing effect behind the card content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-black mb-6">
              Ready to <span className="text-indigo-400">Amplify</span> Your Growth?
            </h2>
            <p className="relative z-10 text-gray-600 text-lg max-w-2xl mx-auto mb-10">
              Let's build a winning strategy for your business. Stop guessing and start scaling with our data-driven approach.
            </p>
            
            <div className="relative z-10">
              <Button to="/contact" primary className="text-lg px-10 py-4 shadow-xl shadow-indigo-500/20">
                Schedule Your Free Call
              </Button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
export default HomePage;