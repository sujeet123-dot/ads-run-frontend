import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "ZenithumMedia doubled our lead generation in just 3 months. Their attention to detail and data transparency is unmatched in the industry.",
    author: "Jane Doe",
    role: "CEO",
    company: "TechStart Inc.",
    result: "2× Leads",
    resultColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    avatarColor: "from-blue-500 to-indigo-600",
    featured: false,
  },
  {
    quote:
      "The most transparent and effective ad agency we've ever worked with. Our ROAS has never been higher, and communication is seamless every step of the way.",
    author: "John Smith",
    role: "CMO",
    company: "FashionVerse",
    result: "+132% ROAS",
    resultColor: "text-orange-600 bg-orange-50 border-orange-200",
    avatarColor: "from-orange-500 to-red-500",
    featured: true,
  },
  {
    quote:
      "They took the time to understand our niche B2B market and delivered a highly targeted LinkedIn campaign that exceeded all expectations.",
    author: "Emily White",
    role: "Founder",
    company: "Innovate Solutions",
    result: "4.8× Pipeline",
    resultColor: "text-violet-400 bg-violet-500/10 border-violet-500/30",
    avatarColor: "from-violet-500 to-purple-600",
    featured: false,
  },
];

const stars = (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-orange-400 fill-orange-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, index }) => {
  const { quote, author, role, company, result, resultColor, avatarColor, featured } = testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { type: "spring", stiffness: 280, damping: 22 },
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.12 }}
      className={`group relative flex flex-col rounded-2xl border-2 p-7 cursor-default overflow-hidden ${
        featured
          ? "bg-orange-500 border-orange-400 shadow-lg shadow-orange-900/40 hover:shadow-2xl hover:shadow-orange-900/50"
          : "bg-gray-900 border-gray-800 hover:shadow-2xl hover:shadow-black/60 hover:border-gray-700"
      }`}
    >
      {/* Left accent bar */}
      <div
        className={`absolute left-0 top-4 bottom-4 w-1 rounded-full origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ${
          featured ? "bg-white/40" : "bg-orange-400"
        }`}
      />

      {/* Decorative quote icon */}
      <div
        className={`absolute top-5 right-6 transition-all duration-300 group-hover:rotate-12 group-hover:scale-125 ${
          featured ? "text-white/20 group-hover:text-white/30" : "text-gray-800 group-hover:text-gray-700"
        }`}
      >
        <Quote size={52} />
      </div>

      {/* Stars */}
      <div className="relative mb-5 transition-transform duration-200 group-hover:scale-105 origin-left">
        {stars}
      </div>

      {/* Quote */}
      <p
        className={`relative flex-1 text-[15px] leading-relaxed mb-7 transition-colors duration-200 ${
          featured ? "text-white/90" : "text-gray-300 group-hover:text-gray-100"
        }`}
      >
        "{quote}"
      </p>

      {/* Divider */}
      <div className={`h-px mb-5 ${featured ? "bg-white/20" : "bg-gray-800"}`} />

      {/* Footer */}
      <div className="relative flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg`}
          >
            {author.charAt(0)}
          </div>
          <div>
            <p className={`text-sm font-bold leading-tight ${featured ? "text-white" : "text-white"}`}>
              {author}
            </p>
            <p className={`text-xs mt-0.5 ${featured ? "text-white/70" : "text-gray-500"}`}>
              {role}, {company}
            </p>
          </div>
        </div>

        <span
          className={`flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full border transition-transform duration-200 group-hover:scale-110 ${
            featured ? "bg-white text-orange-600 border-white" : resultColor
          }`}
        >
          {result}
        </span>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => (
  <section className="py-24 bg-gray-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
          Client Stories
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Trusted by leaders in{" "}
          <span className="text-orange-400">their industry</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          Real results from real partnerships. Here's what our clients say about
          working with ZenithumMedia.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.author} testimonial={t} index={i} />
        ))}
      </div>

      {/* Bottom trust line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12 text-sm text-gray-500"
      >
        Join <span className="font-semibold text-gray-300">50+ businesses</span> already scaling with ZenithumMedia
      </motion.p>

    </div>
  </section>
);

export default TestimonialsSection;
