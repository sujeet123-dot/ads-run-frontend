import React from "react";
import { ArrowRight, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="relative bg-slate-50">
      {/* subtle background shape */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-br from-blue-100/60 via-slate-50 to-cyan-50/40" />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-1.5 text-xs font-medium text-blue-700 mb-5 shadow-sm">
              🚀 ZenithumMedia · Performance Marketing Agency
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-5">
              Scale your{" "}
              <span className="text-orange-600">paid campaigns</span>
              <span className="block text-slate-900">
                with predictable results.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              We manage and optimize ad campaigns across Meta, Google, and
              programmatic to bring you profitable, trackable growth — not just
              clicks and impressions.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button
                to="/contact"
                primary
                className="flex items-center gap-2 text-sm sm:text-base !bg-blue-600 hover:!bg-blue-700"
              >
                Book a Strategy Call
                <ArrowRight size={18} />
              </Button>

              <Button
                to="/case-studies"
                secondary
                className="text-sm sm:text-base border border-slate-300 text-slate-800 hover:border-slate-400"
              >
                View Case Studies
              </Button>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-500">
              Average ROAS improvement with ZenithumMedia clients:{" "}
              <span className="font-semibold text-emerald-600">+118%</span>
            </p>
          </motion.div>

          {/* Right: Analytics card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-100/70 via-white to-teal-100/60 blur-sm" />

              <div className="relative bg-white border border-slate-200 rounded-2xl shadow-md p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <BarChart2 size={22} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Performance Overview
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        Last 30 days · All channels
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
                    +132% ROAS
                  </span>
                </div>

                {/* Rows */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-[12px] mb-1.5">
                      <span className="text-slate-500">Google Search</span>
                      <span className="text-emerald-600 font-medium">
                        +118%
                      </span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full w-[78%] rounded-full bg-blue-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[12px] mb-1.5">
                      <span className="text-slate-500">Meta Ads</span>
                      <span className="text-emerald-600 font-medium">+96%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full w-[64%] rounded-full bg-cyan-500" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[12px] mb-1.5">
                      <span className="text-slate-500">Remarketing</span>
                      <span className="text-emerald-600 font-medium">
                        +171%
                      </span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full w-[88%] rounded-full bg-emerald-500" />
                    </div>
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-[11px] text-slate-500 mb-1">Ad Spend</p>
                    <p className="text-sm font-semibold text-slate-900">
                      ₹4.3L
                    </p>
                    <p className="text-[11px] text-emerald-600 mt-0.5">
                      +29% vs last month
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 mb-1">
                      Revenue Attributed
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      ₹19.2L
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Avg CPA: ₹205
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
