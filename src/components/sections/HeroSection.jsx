import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion'; 
import Button from '../ui/Button'; 

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 px-6 overflow-hidden bg-[#0a0b14]">
      
      <div className="absolute top-20 left-[-10%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* --- Left Column: Text Content --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          {/* Small "pill" tag */}
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-sm font-semibold mb-6 backdrop-blur-sm">
            🚀 Digital Marketing Agency
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
            Data-Driven <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400">
              Ad Campaigns.
            </span>
            <span className="block mt-2 text-white">Unparalleled Growth.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            We scale businesses by managing high-performance ad campaigns on Google, Meta, and beyond. Stop guessing, start growing.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {/* Using your custom Button component */}
            <Button to="/contact" primary className="flex items-center gap-2">
              Get a Free Consultation <ArrowRight size={18} />
            </Button>
            <Button to="/case-studies" secondary>
              See Our Results
            </Button>
          </div>
        </motion.div>

        {/* --- Right Column: Abstract Dashboard Image --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          {/* The "Card" that acts as the hero image */}
          <div className="relative bg-gradient-to-br from-[#1e2130] to-[#141625] p-8 rounded-3xl border border-white/5 shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 ease-out">
            
            {/* Card Header */}
            <div className="flex items-center gap-5 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-sm">
                <BarChart2 size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Live Campaign Analytics</h3>
                <p className="text-sm text-gray-500">Real-time Performance Data</p>
              </div>
            </div>

            {/* Fake Progress Bars representing data */}
            <div className="space-y-5 mb-8">
              <div>
                <div className="flex justify-between text-sm mb-2"><span className="text-gray-400">Google Ads</span><span className="text-indigo-400">+145%</span></div>
                <div className="h-3 bg-[#0a0b14] rounded-full w-full overflow-hidden"><div className="h-full bg-indigo-500 w-[85%] rounded-full"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2"><span className="text-gray-400">Meta Ads</span><span className="text-purple-400">+92%</span></div>
                <div className="h-3 bg-[#0a0b14] rounded-full w-full overflow-hidden"><div className="h-full bg-purple-500 w-[65%] rounded-full"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2"><span className="text-gray-400">TikTok Ads</span><span className="text-teal-400">+210%</span></div>
                <div className="h-3 bg-[#0a0b14] rounded-full w-full overflow-hidden"><div className="h-full bg-teal-400 w-[95%] rounded-full"></div></div>
              </div>
            </div>

            {/* Card Footer Stats */}
            <div className="flex justify-between text-center p-4 bg-white/5 rounded-2xl">
              <div>
                <h4 className="text-3xl font-bold text-white">10M+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">Total Installs</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">120+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">Countries</p>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;