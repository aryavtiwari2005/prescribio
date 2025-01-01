"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Prescribio?",
      answer: "Prescribio is a digital prescription platform that allows healthcare providers to send prescriptions electronically."
    },
    {
      question: "How does e-prescribing work?",
      answer: "E-prescribing allows providers to send prescriptions directly to pharmacies electronically, improving efficiency and reducing errors."
    },
    {
      question: "Is my information secure?",
      answer: "Yes, we use industry-standard encryption and security measures to protect your personal information."
    },
    {
      question: "Can I access my prescriptions online?",
      answer: "Yes, you can view your prescriptions and their status through your Prescribio account."
    },
    {
      question: "Can I use Prescribio on my mobile device?",
      answer: "Yes, Prescribio is designed to be mobile-friendly, allowing you to access your prescriptions and account information from your smartphone or tablet."
    },
    {
      question: "What if I encounter issues while using the platform?",
      answer: "If you encounter any issues, please contact our support team through the 'Help' section on our website. We are here to assist you."
    },
    {
      question: "Are there any fees associated with using Prescribio?",
      answer: "Prescribio is free for patients. Healthcare providers may have different pricing plans based on their usage."
    },
    {
      question: "How can I provide feedback about the service?",
      answer: "We welcome your feedback! You can provide feedback through the 'Contact Us' form on our website or by emailing our support team."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto transition-transform transform">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-6">Find answers to common questions about our services.</p>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 mb-4">
            <div 
              className={`flex justify-between items-center cursor-pointer py-4 transition-all duration-300 ${activeIndex === index ? 'bg-gray-000' : 'hover:bg-gray-000'}`} 
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <span className="text-xl text-gray-600">
                <FontAwesomeIcon icon={activeIndex === index ? faMinus : faPlus} />
              </span>
            </div>
            <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}>
              <div className="py-2 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;