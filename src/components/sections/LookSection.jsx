import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function LookSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start order-1 md:order-none"
        >
          <motion.img
            src="/rst.png"
            alt="About ZenithumMedia"
            className="w-full max-w-sm sm:max-w-md aspect-[4/3] rounded-xl shadow-xl object-cover"
            whileHover={{
              scale: 1.03,
              rotate: 1,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.18)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-5 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover Our{" "}
            <span className="text-blue-600">Digital Identity</span>
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl text-amber-500 mb-4 sm:mb-6 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ZenithumMedia creates powerful digital experiences through
            strategy, creativity, and modern marketing intelligence.
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0 mb-5 sm:mb-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We are a network of highly skilled, independently operated
            marketing & advertising agencies. With a strong digital foundation,
            we deliver ROI-focused solutions tailored to every client. Our
            approach blends creativity, data, and innovation — making us one of
            the most reliable and growth-driven networks in the industry.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
          >
            <NavLink to="/services"
             className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium text-sm sm:text-[15px] hover:bg-blue-700 transition text-center"
            >
              Explore Services
            </NavLink>
            <NavLink 
            to="/about" 
            className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-medium text-sm sm:text-[15px] hover:bg-slate-100 transition text-center"
            >
              Learn More
            </NavLink>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default LookSection;
