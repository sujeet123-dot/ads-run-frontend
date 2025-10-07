import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [serverMessage, setServerMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // --- UPDATED SUBMIT FUNCTION ---
  const onSubmit = async (data) => {
    setServerMessage(''); // Clear previous messages
    setIsSuccess(false);

    try {
      const response = await fetch('http://localhost:8000/api/contact', { // Your backend URL
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
      setServerMessage(result.success);
      reset(); // Clear the form fields on success

    } catch (error) {
      setIsSuccess(false);
      setServerMessage(error.message);
    }
  };

  const inputClasses = "w-full rounded-lg border-gray-700 bg-gray-800 p-3 text-sm text-white placeholder-gray-500";
  const errorClasses = "text-red-500 text-xs mt-1";

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {/* Form fields remain the same */}
        <div>
          <label className="sr-only" htmlFor="name">Name</label>
          <input className={inputClasses} placeholder="Your Name" type="text" id="name"
            {...register("name", { required: "Name is required." })} />
          {errors.name && <span className={errorClasses}>{errors.name.message}</span>}
        </div>
        <div>
          <label className="sr-only" htmlFor="email">Email</label>
          <input className={inputClasses} placeholder="Email Address" type="email" id="email"
            {...register("email", { 
              required: "Email is required.", 
              pattern: { value: /^\S+@\S+$/i, message: "A valid email is required." } 
            })} />
          {errors.email && <span className={errorClasses}>{errors.email.message}</span>}
        </div>
        <div>
          <label className="sr-only" htmlFor="message">Message</label>
          <textarea className={inputClasses} placeholder="How can we help?" rows="8" id="message"
            {...register("message", { required: "A message is required." })}
          ></textarea>
          {errors.message && <span className={errorClasses}>{errors.message.message}</span>}
        </div>

        <div className="mt-4">
          <button type="submit" className="w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white sm:w-auto hover:bg-blue-700 transition-colors">
            Send Enquiry
          </button>
        </div>
      </form>

      {/* Display server success/error messages */}
      {serverMessage && (
        <div className={`mt-4 text-center p-3 rounded-md ${isSuccess ? 'bg-green-800/50 text-green-300' : 'bg-red-800/50 text-red-300'}`}>
            {serverMessage}
        </div>
      )}
    </div>
  );
};

export default ContactForm;