import React from "react";
import { motion } from "framer-motion";

const CLIENTS_ROW_1 = [
  "TechStart Inc.",
  "FashionVerse",
  "Innovate Solutions",
  "GrowthLab",
  "NexaDigital",
  "BlueSky Media",
  "PeakCommerce",
  "UrbanBrands",
  "SparkRetail",
  "VisionCo",
];

const CLIENTS_ROW_2 = [
  "FinEdge",
  "CloudMark",
  "EcomPro",
  "MetroPulse",
  "SwiftLeads",
  "AlphaScale",
  "TrueReach",
  "BrightPath",
  "CoreMedia",
  "ZenBusiness",
];

const row1 = [...CLIENTS_ROW_1, ...CLIENTS_ROW_1];
const row2 = [...CLIENTS_ROW_2, ...CLIENTS_ROW_2];

const LogoChip = ({ name }) => (
  <div className="flex-shrink-0 mx-4 flex items-center justify-center h-12 px-7 rounded-full border border-gray-700 bg-gray-800 hover:border-violet-500/50 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
    <span className="text-[13px] font-semibold text-gray-400 whitespace-nowrap tracking-wide">
      {name}
    </span>
  </div>
);

const ClientLogosSection = () => {
  return (
    <section className="py-16 bg-gray-950 border-y border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold text-gray-500 uppercase tracking-widest"
        >
          Trusted by 650+ brands & businesses
        </motion.p>
      </div>

      {/* Row 1 — scrolls left */}
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="flex animate-marquee w-max">
          {row1.map((name, i) => (
            <LogoChip key={`r1-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div
        className="relative mt-4"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="flex animate-marquee-reverse w-max">
          {row2.map((name, i) => (
            <LogoChip key={`r2-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
