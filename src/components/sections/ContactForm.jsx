import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const SERVICES = [
  "Social Media Marketing",
  "Google & Search Ads",
  "Lead Generation",
  "Programmatic Advertising",
  "Meta & Social Ads",
  "Analytics & Reporting",
  "Other / Not Sure",
];

const BUDGETS = [
  "Under ₹50,000 / mo",
  "₹50K – ₹2L / mo",
  "₹2L – ₹5L / mo",
  "₹5L+ / mo",
];

const inputBase = `
  w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-[15px] text-white
  placeholder:text-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2
  focus:ring-orange-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
`;
const labelBase = "block text-sm font-semibold text-gray-300 mb-1.5";
const errorBase = "mt-1.5 flex items-center gap-1.5 text-xs text-rose-400";

const Field = ({ label, error, children }) => (
  <div>
    <label className={labelBase}>{label}</label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className={errorBase}
        >
          <AlertCircle size={12} className="flex-shrink-0" />
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [serverMessage, setServerMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setServerMessage('');
    setIsSuccess(false);
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Something went wrong');
      setIsSuccess(true);
      setServerMessage(result.success || 'Message sent successfully!');
      reset();
    } catch (error) {
      setIsSuccess(false);
      setServerMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 rounded-2xl border border-gray-800 shadow-xl shadow-black/50 p-7 sm:p-9">

      {/* Form header */}
      <div className="mb-7">
        <h3 className="text-xl font-extrabold text-white mb-1">Send us a message</h3>
        <p className="text-sm text-gray-500">We reply to every enquiry within 24 hours.</p>
      </div>

      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="flex flex-col items-center text-center py-10 gap-5"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
              className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-400"
            >
              <CheckCircle size={32} />
            </motion.div>
            <div>
              <p className="text-lg font-bold text-white mb-1">Message Received!</p>
              <p className="text-sm text-gray-400 max-w-xs">{serverMessage}</p>
            </div>
            <button
              onClick={() => { setIsSuccess(false); setServerMessage(''); }}
              className="text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors"
            >
              Send another message →
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your Name" error={errors.name?.message}>
                <input
                  type="text"
                  placeholder="John Smith"
                  disabled={isLoading}
                  className={`${inputBase} ${errors.name ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' : ''}`}
                  {...register("name", { required: "Name is required." })}
                />
              </Field>
              <Field label="Email Address" error={errors.email?.message}>
                <input
                  type="email"
                  placeholder="john@company.com"
                  disabled={isLoading}
                  className={`${inputBase} ${errors.email ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' : ''}`}
                  {...register("email", {
                    required: "Email is required.",
                    pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email." }
                  })}
                />
              </Field>
            </div>

            <Field label="Phone Number (optional)" error={errors.phone?.message}>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                disabled={isLoading}
                className={inputBase}
                {...register("phone")}
              />
            </Field>

            <Field label="Service You're Interested In" error={errors.service?.message}>
              <select
                disabled={isLoading}
                className={`${inputBase} ${errors.service ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' : ''}`}
                {...register("service", { required: "Please select a service." })}
              >
                <option value="" className="bg-gray-800">Select a service...</option>
                {SERVICES.map(s => <option key={s} value={s} className="bg-gray-800">{s}</option>)}
              </select>
            </Field>

            <Field label="Monthly Ad Budget" error={errors.budget?.message}>
              <select
                disabled={isLoading}
                className={`${inputBase} ${errors.budget ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' : ''}`}
                {...register("budget", { required: "Please select your budget." })}
              >
                <option value="" className="bg-gray-800">Select a range...</option>
                {BUDGETS.map(b => <option key={b} value={b} className="bg-gray-800">{b}</option>)}
              </select>
            </Field>

            <Field label="Tell Us About Your Goals" error={errors.message?.message}>
              <textarea
                rows={4}
                placeholder="What are you trying to achieve? Any context helps..."
                disabled={isLoading}
                className={`${inputBase} resize-none ${errors.message ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' : ''}`}
                {...register("message", { required: "Please tell us about your goals." })}
              />
            </Field>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={!isLoading ? { scale: 1.02, y: -1 } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={`w-full py-3.5 rounded-full font-bold text-[15px] flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                isLoading
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-900/30'
              }`}
            >
              {isLoading ? (
                <><Loader2 size={18} className="animate-spin" /> Sending…</>
              ) : (
                <><Send size={16} /> Send Message</>
              )}
            </motion.button>

            <AnimatePresence>
              {serverMessage && !isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm"
                >
                  <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                  {serverMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
