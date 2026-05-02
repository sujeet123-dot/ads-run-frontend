import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Deterministic star positions
const STARS = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  top: `${((i * 137.508) % 100).toFixed(3)}%`,
  left: `${((i * 97.31) % 100).toFixed(3)}%`,
  size: i % 5 === 0 ? 2.5 : i % 3 === 0 ? 1.5 : 1,
  opacity: 0.15 + ((i * 0.07) % 0.45),
}));

// Word-by-word headline animation
const HEADLINE_1 = ["Strategic", "Campaigns", "for"];
const HEADLINE_2 = ["Modern", "Businesses"];

const wordVariant = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.1 },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">

      {/* ── Twinkling star field ── */}
      {STARS.map(({ id, top, left, size, opacity }) => (
        <motion.div
          key={id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{ top, left, width: size, height: size }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, opacity, opacity * 0.4, opacity] }}
          transition={{
            duration: 3 + (id % 4),
            delay: (id * 0.05) % 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── Orange glowing orb — breathes slowly ── */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{
          scale: [0.85, 1, 0.9, 1],
          opacity: [0, 0.5, 0.45, 0.5],
        }}
        transition={{
          duration: 6,
          times: [0, 0.3, 0.6, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 38% 38%, #f97316 0%, #ea580c 28%, #c2410c 55%, transparent 78%)",
          filter: "blur(72px)",
        }}
      />

      {/* ── Secondary smaller orb (offset) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.12, 0.22, 0.12], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #fb923c 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10"
        >
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <span className="text-orange-400 text-sm font-semibold tracking-wide">
            Data-Driven Ad Agency
          </span>
        </motion.div>

        {/* ── Headline — word by word with blur-in ── */}
        <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-bold text-white leading-[1.12] tracking-tight mb-6">
          <div className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-0">
            {HEADLINE_1.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordVariant}
                initial="hidden"
                animate="show"
                className={word === "Campaigns" ? "text-orange-400" : ""}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-[0.3em]">
            {HEADLINE_2.map((word, i) => (
              <motion.span
                key={word}
                custom={HEADLINE_1.length + i}
                variants={wordVariant}
                initial="hidden"
                animate="show"
                className={word === "Businesses" ? "text-orange-400" : ""}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.65}
          className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg mx-auto mb-10"
        >
          We bring high-performance ad solutions to your fingertips and
          streamline your growth across every channel.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.82}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 text-white text-[15px] font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg shadow-orange-900/40"
            >
              Get in touch
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-gray-700 text-white text-[15px] font-semibold hover:border-orange-500/50 bg-gray-900/40 hover:bg-orange-500/5 transition-all duration-200"
            >
              View services
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Floating stats strip ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1.05}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {[
            { value: "300+", label: "Campaigns" },
            { value: "50+",  label: "Clients"   },
            { value: "105%", label: "Avg. ROAS Uplift" },
          ].map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + i * 0.12 }}
              className="flex flex-col items-center gap-0.5"
            >
              <span className="text-2xl font-extrabold text-orange-400 tabular-nums">{value}</span>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom gradient fade ── */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
