import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

const FAQS = [
  {
    q: "What platforms do you run ads on?",
    a: "We manage campaigns across Google Search & Display, Meta (Facebook & Instagram), LinkedIn, YouTube, and programmatic networks. Every channel mix is chosen based on where your specific audience actually spends time — not what's trendy.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients see measurable improvements in ROAS and lead quality within the first 30 days. A full performance ramp — where campaigns are fully optimised and delivering peak results — typically takes 60–90 days depending on budget and industry.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "Yes, We work on long term period basis because we believe results should be what keeps you with us. That said, most of our clients have been with us for 12+ months.",
  },
  {
    q: "How do you report campaign performance?",
    a: "You get a dedicated real-time dashboard with full visibility into spend, ROAS, CPA, impressions, and conversions — updated daily. We also send a detailed monthly report with insights, wins, and the plan for the next month.",
  },
  {
    q: "Can you take over our existing ad accounts?",
    a: "Absolutely. We do a free audit of your current accounts first, identify what's working, what's wasting budget, and present a clear roadmap before we take over. No blind handover.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes. While we're based in Delhi, we manage campaigns for clients across India, South-East Asia, the Middle East, and the UK. Ad platforms are global — so are we.",
  },
  {
    q: "What makes ZenithumMedia different from other agencies?",
    a: "Three things: radical transparency (you see everything we see), dedicated account managers (not a rotating help desk), and a performance-first mindset backed by 300+ campaigns of real-world data across 20+ industries.",
  },
];

const AccordionItem = ({ faq, index, isOpen, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
    className={`rounded-2xl border-2 transition-colors duration-300 overflow-hidden ${
      isOpen
        ? "border-orange-500/60 shadow-md shadow-orange-900/20"
        : "border-gray-800 hover:border-gray-700"
    }`}
  >
    {/* Question row */}
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-gray-900 group"
    >
      <span className={`text-[15px] font-semibold leading-snug transition-colors duration-200 ${
        isOpen ? "text-orange-400" : "text-gray-200 group-hover:text-orange-400"
      }`}>
        {faq.q}
      </span>

      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
          isOpen ? "bg-orange-500 text-white" : "bg-gray-800 text-gray-400 group-hover:bg-orange-500/10 group-hover:text-orange-400"
        }`}
      >
        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
      </motion.div>
    </button>

    {/* Answer — animated height */}
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="answer"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden bg-gray-900"
        >
          <div className="px-6 pb-6 pt-1">
            <div className="w-full h-px bg-gray-800 mb-4" />
            <p className="text-gray-400 text-[15px] leading-relaxed">{faq.a}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-14 items-start">

          {/* ── Left: sticky header ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2 lg:sticky lg:top-28 flex flex-col gap-6"
          >
            <span className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest">
              FAQ
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Frequently Asked{" "}
              <span className="text-orange-400">Questions</span>
            </h2>

            <p className="text-gray-400 text-base leading-relaxed">
              Everything you need to know about working with ZenithumMedia.
              Can't find your answer? Just ask us directly.
            </p>

            {/* CTA card */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-xl">
                💬
              </div>
              <div>
                <p className="text-white font-bold text-[15px] mb-1">Still have questions?</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our team is happy to walk you through anything before you commit to a single rupee.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-400 transition-colors duration-200 group"
              >
                Ask Us Anything
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>

          {/* ── Right: accordion ── */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
