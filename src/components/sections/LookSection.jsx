import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const FEATURES = [
  "Performance-first approach on every campaign",
  "Real-time reporting with zero hidden fees",
  "Dedicated account manager for your brand",
  "Proven across 300+ campaigns & 50+ clients",
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay },
  },
});

function LookSection() {
  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Image column ── */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Background decoration */}
            <div className="absolute -top-8 -left-8 w-72 h-72 rounded-full bg-orange-500/5 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-gray-900 -z-10" />

            {/* Dot pattern */}
            <div
              className="absolute top-4 right-0 w-32 h-32 opacity-10 -z-10"
              style={{
                backgroundImage: "radial-gradient(circle, #f97316 1.5px, transparent 1.5px)",
                backgroundSize: "14px 14px",
              }}
            />

            {/* Image */}
            <div className="relative w-full max-w-md">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/70 border border-gray-800"
              >
                <img
                  src="/zm1.jpg"
                  alt="About ZenithumMedia"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Floating badge — top left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 18 }}
                className="absolute -top-5 -left-5 bg-gray-900 rounded-2xl shadow-lg border border-gray-700 px-4 py-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center text-white text-lg">
                  🏆
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Top-Rated Agency</p>
                  <p className="text-[10px] text-gray-500">Branding Campaigns</p>
                </div>
              </motion.div>

              {/* Floating badge — bottom right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 18 }}
                className="absolute -bottom-5 -right-5 bg-orange-500 rounded-2xl shadow-lg shadow-orange-900/40 px-4 py-3 flex items-center gap-3"
              >
                <div className="text-2xl">📈</div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Avg. ROAS Uplift</p>
                  <p className="text-sm font-extrabold text-white">+105%</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: Text column ── */}
          <div className="flex flex-col">

            {/* Eyebrow */}
            <motion.span
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 self-start mb-5 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest"
            >
              Who We Are
            </motion.span>

            {/* Headline */}
            <motion.h2
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.12] tracking-tight mb-5"
            >
              We Don't Just Run Ads.{" "}
              <span className="text-orange-400">We Build Growth Engines.</span>
            </motion.h2>

            {/* Body */}
            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8"
            >
              We are a network of highly skilled, independently operated
              marketing agencies. With a strong digital foundation, we deliver
              ROI-focused solutions tailored to every client — blending
              creativity, data, and innovation to make us one of the most
              reliable growth-driven networks in the industry.
            </motion.p>

            {/* Feature list */}
            <ul className="space-y-3.5 mb-10">
              {FEATURES.map((feat, i) => (
                <motion.li
                  key={feat}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 + i * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2
                    size={19}
                    className="text-orange-400 flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110"
                  />
                  <span className="text-gray-300 text-[15px] leading-snug group-hover:text-white transition-colors duration-200">
                    {feat}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp(0.65)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white text-[15px] font-semibold hover:bg-orange-600 transition-all duration-200 shadow-md shadow-orange-900/30 hover:-translate-y-0.5 group"
              >
                Explore Services
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-700 text-gray-300 text-[15px] font-semibold hover:border-gray-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                About Us
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default LookSection;
