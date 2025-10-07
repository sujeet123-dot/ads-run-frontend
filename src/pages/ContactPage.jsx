import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/sections/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | AdRun Pro</title>
        <meta name="description" content="Get in touch with the AdRun Pro team for a free consultation and quote. Let's discuss how we can help grow your business." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
         <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Let's Talk</h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Have a project in mind or just want to learn more? Fill out the form below, and one of our specialists will get back to you within 24 hours.</p>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;