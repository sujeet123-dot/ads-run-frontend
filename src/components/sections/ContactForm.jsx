import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

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
      const url = import.meta.env.VITE_API_URL.replace(/\/$/, "") + '/api/contact';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || result.message || 'Something went wrong');
      }

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

  const inputClasses =
    "w-full rounded-lg border p-3 text-sm placeholder-gray-500 focus:ring-2 focus:ring-blue-500 transition-colors \
     bg-gray-100 text-gray-900 border-gray-300 \
     dark:bg-gray-800 dark:text-white dark:border-gray-700";

  const errorClasses = "text-red-600 dark:text-red-400 text-xs mt-1";

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label className="sr-only" htmlFor="name">Name</label>
          <input
            className={inputClasses}
            placeholder="Your Name"
            type="text"
            id="name"
            {...register("name", { required: "Name is required." })}
          />
          {errors.name && <span className={errorClasses}>{errors.name.message}</span>}
        </div>

        <div>
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            className={inputClasses}
            placeholder="Email Address"
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required.",
              pattern: { value: /^\S+@\S+$/i, message: "A valid email is required." }
            })}
          />
          {errors.email && <span className={errorClasses}>{errors.email.message}</span>}
        </div>

        <div>
          <label className="sr-only" htmlFor="message">Message</label>
          <textarea
            className={inputClasses}
            placeholder="How can we help?"
            rows="8"
            id="message"
            {...register("message", { required: "A message is required." })}
          ></textarea>
          {errors.message && <span className={errorClasses}>{errors.message.message}</span>}
        </div>

        <div className="mt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto rounded-lg px-5 py-3 font-medium text-white transition-colors \
                       bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-50"
          >
            {isLoading ? 'Sending...' : 'Send Enquiry'}
          </button>
        </div>
      </form>

      {serverMessage && (
        <div
          className={`mt-4 text-center p-3 rounded-md transition-colors duration-300 ${
            isSuccess
              ? 'bg-green-100 text-green-900 dark:bg-green-800/50 dark:text-green-300'
              : 'bg-red-100 text-red-900 dark:bg-red-800/50 dark:text-red-300'
          }`}
        >
          {serverMessage}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
