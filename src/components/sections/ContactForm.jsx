import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [serverMessage, setServerMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setServerMessage('');
    setIsSuccess(false);
    setIsLoading(true); // Start loading

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }
      
      setIsSuccess(true);
      setServerMessage(result.success || 'Message sent successfully!');
      reset(); 

    } catch (error) {
      setIsSuccess(false);
      setServerMessage(error.message);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  // Modern Input Styles
  const inputWrapperClass = "relative";
  const inputClasses = `
    w-full rounded-xl bg-[#141625] border border-white/10 p-4 text-white placeholder-gray-500 
    focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 
    transition-all duration-300
  `;
  const errorClasses = "text-rose-400 text-xs mt-1 flex items-center gap-1";

  return (
    <div className="w-full max-w-lg mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-2xl">
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        
        {/* Header inside form (Optional) */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white">Send us a message</h3>
          <p className="text-gray-400 text-sm">We usually reply within 24 hours.</p>
        </div>

        {/* Name Field */}
        <div className={inputWrapperClass}>
          <input 
            className={`${inputClasses} ${errors.name ? 'border-rose-500/50' : ''}`} 
            placeholder="Your Name" 
            type="text" 
            id="name"
            disabled={isLoading}
            {...register("name", { required: "Name is required." })} 
          />
          {errors.name && (
            <span className={errorClasses}>
              <AlertCircle size={12} /> {errors.name.message}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div className={inputWrapperClass}>
          <input 
            className={`${inputClasses} ${errors.email ? 'border-rose-500/50' : ''}`} 
            placeholder="Email Address" 
            type="email" 
            id="email"
            disabled={isLoading}
            {...register("email", { 
              required: "Email is required.", 
              pattern: { value: /^\S+@\S+$/i, message: "Please enter a valid email." } 
            })} 
          />
          {errors.email && (
            <span className={errorClasses}>
              <AlertCircle size={12} /> {errors.email.message}
            </span>
          )}
        </div>

        {/* Message Field */}
        <div className={inputWrapperClass}>
          <textarea 
            className={`${inputClasses} min-h-[150px] resize-none ${errors.message ? 'border-rose-500/50' : ''}`} 
            placeholder="How can we help you?" 
            id="message"
            disabled={isLoading}
            {...register("message", { required: "Please enter your message." })}
          ></textarea>
          {errors.message && (
            <span className={errorClasses}>
              <AlertCircle size={12} /> {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isLoading}
          className={`
            w-full rounded-full py-3.5 font-bold text-white flex items-center justify-center gap-2
            transition-all duration-300 shadow-lg
            ${isLoading 
              ? 'bg-gray-700 cursor-not-allowed opacity-70' 
              : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-indigo-500/25 hover:-translate-y-0.5'
            }
          `}
        >
          {isLoading ? (
            <>
              <Loader2 size={20} className="animate-spin" /> Sending...
            </>
          ) : (
            <>
              Send Message <Send size={18} />
            </>
          )}
        </button>
      </form>

      {/* Server Feedback Messages */}
      {serverMessage && (
        <div className={`
          mt-6 p-4 rounded-xl flex items-start gap-3 text-sm
          ${isSuccess 
            ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' 
            : 'bg-rose-500/10 border border-rose-500/20 text-rose-400'
          }
        `}>
          <div className="mt-0.5 shrink-0">
            {isSuccess ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          </div>
          <div>{serverMessage}</div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;