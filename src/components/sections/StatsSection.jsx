import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Megaphone, Star } from "lucide-react";

const STATS = [
  { icon: Megaphone, value: 300, suffix: "+", label: "Campaigns Launched", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Users,     value: 50,  suffix: "+", label: "Happy Clients",      color: "text-blue-400",   bg: "bg-blue-500/10"   },
  { icon: TrendingUp,value: 105, suffix: "%", label: "Avg. ROAS Uplift",   color: "text-emerald-400",bg: "bg-emerald-500/10"},
  { icon: Star,      value: 96,  suffix: "%", label: "Client Retention",   color: "text-violet-400", bg: "bg-violet-500/10" },
];

const useCounter = (target, duration = 1800, started = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
};

const StatCard = ({ icon: Icon, value, suffix, label, color, bg, started, index }) => {
  const count = useCounter(value, 1800, started);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
      className="relative group bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-700 shadow-sm hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300 p-8 text-center overflow-hidden"
    >
      <div className={`absolute inset-0 ${bg} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

      <div className="relative">
        <div className={`w-12 h-12 rounded-xl ${bg} ${color} flex items-center justify-center mx-auto mb-5`}>
          <Icon size={22} />
        </div>
        <div className={`text-4xl sm:text-5xl font-extrabold ${color} tabular-nums mb-2`}>
          {count.toLocaleString()}{suffix}
        </div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            By the Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Results that speak for themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} started={inView} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
