import React from "react";
import { motion } from "framer-motion";

function LookSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <motion.img
            src="/images/about-preview.jpg"
            alt="About ZenithumMedia"
            className="rounded-xl shadow-xl object-cover w-[480px] h-[320px] md:w-[520px] md:h-[360px]"
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
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover Our{" "}
            <span className="text-blue-600">Digital Identity</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-amber-500 mb-6 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ZenithumMedia creates powerful digital experiences through strategy,
            creativity, and modern marketing intelligence.
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 leading-relaxed max-w-xl mb-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We are a network of highly skilled, independently operated marketing
            & advertising agencies. With a strong digital foundation, we deliver
            ROI-focused solutions tailored to every client. Our approach blends
            creativity, data, and innovation — making us one of the most
            reliable and growth-driven networks in the industry.
          </motion.p>

          {/* Optional CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex gap-4 mt-4"
          >
            <a
              href="/services"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition"
            >
              Explore Services
            </a>
            <a
              href="/about"
              className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-100 transition"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default LookSection;
