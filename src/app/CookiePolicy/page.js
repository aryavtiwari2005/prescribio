// pages/CookiePolicy.js
"use client";

import React from 'react';
import { inter, robotoSlab, openSans, poppins } from '../../utils/fonts';

const CookiePolicy = () => {
  return (
    <div className={`container mx-auto px-4 py-16 ${inter.className}`}>
      <h1 className={`text-4xl font-bold mb-4 ${robotoSlab.className}`}>Cookie Policy</h1>
      <p className={`text-gray-700 ${openSans.className}`}>
        Effective Date: 1st June 2023
      </p>
      <p className={`text-gray-700 ${openSans.className}`}>
        Welcome to Prescribio! This Cookie Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the service, your choices regarding cookies, and further information about cookies.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>1. What Are Cookies?</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>2. How Prescribio Uses Cookies</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
      </p>
      <ul className={`list-disc ml-8 ${openSans.className}`}>
        <li>
          <strong>Essential Cookies:</strong> We use cookies to remember information that changes the way the Service behaves or looks, such as a user's language preference on the Service.
        </li>
        <li>
          <strong>Account-Related Cookies:</strong> We use cookies to manage the signup process and general administration. These cookies will usually be deleted when you log out; however, in some cases, they may remain afterward to remember your site preferences when logged out.
        </li>
        <li>
          <strong>Analytics Cookies:</strong> We use cookies to help us analyze how our visitors use the Service and to monitor website performance. This helps us provide a high-quality experience by customizing our offering and quickly identifying and fixing any issues that arise.
        </li>
        <li>
          <strong>Advertising Cookies:</strong> We may use cookies to deliver advertisements that are relevant to you and your interests. These cookies may also help us measure the effectiveness of our advertising campaigns.
        </li>
        <li>
          <strong>Third-Party Cookies:</strong> In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service and deliver advertisements on and through the Service.
        </li>
      </ul>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>3. Types of Cookies We Use</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        We use both session cookies and persistent cookies on the Service:
      </p>
      <ul className={`list-disc ml-8 ${openSans.className}`}>
        <li>
          <strong>Session Cookies:</strong> We use session cookies to operate our Service. These cookies are temporary and expire once you close your browser.
        </li>
        <li>
          <strong>Persistent Cookies:</strong> We use persistent cookies to remember your preferences for future visits. These cookies remain on your device for a set period or until you delete them.
        </li>
      </ul>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>4. Your Choices Regarding Cookies</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        If you prefer to avoid the use of cookies on the Service, you must first disable the use of cookies in your browser and then delete the cookies saved in your browser associated with this website. You may use this option for preventing the use of cookies at any time.
      </p>
      <p className={`text-gray -700 ${openSans.className}`}>
        In addition, please note that if you delete cookies or refuse to accept them, you might not be able to use the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>5. More Information About Cookies</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        You can learn more about cookies and the following third-party websites:
      </p>
      <ul className={`list-disc ml-8 ${openSans.className}`}>
        <li><a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">AllAboutCookies</a></li>
        <li><a href="https://www.networkadvertising.org/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a></li>
        <li><a href="https://www.aboutads.info/" target="_blank" rel="noopener noreferrer">AboutAds</a></li>
      </ul>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>6. Changes to This Cookie Policy</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>7. Contact Us</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        If you have any questions about this Cookie Policy, please contact us:
      </p>
      <ul className={`list-disc ml-8 ${openSans.className}`}>
        <li>Email: contact@prescribio.com</li>
        <li>Phone: +91 92896 00575</li>
        <li>Address: Gurugram, India</li>
      </ul>
    </div>
  );
};

export default CookiePolicy;