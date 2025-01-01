// pages/PrivacyPolicy.js
"use client";

import React from 'react';
import { inter, robotoSlab, openSans, poppins } from '../../utils/fonts';

const PrivacyPolicy = () => {
  return (
    <div className={`container mx-auto px-4 py-16 ${inter.className}`}>
      <h1 className={`text-4xl font-bold mb-4 ${robotoSlab.className}`}>Privacy Policy</h1>
      <p className={`text-gray-700 ${openSans.className}`}>
        Effective Date: 1st June 2023
      </p>
      <p className={`text-gray-700 ${openSans.className}`}>
        Welcome to Prescribio! Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way. Please read this policy carefully. If you do not agree with the terms of this policy, please do not access the site.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>1. Information We Collect</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        We may collect information about you in a variety of ways, including:
      </p>
      <ul className={`list-disc ml-8 ${openSans.className}`}>
        <li>
          <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, phone number, and demographic information, that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site, such as online chat and message boards.
        </li>
        <li>
          <strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the site.
        </li>
        <li>
          <strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the site.
        </li>
        <li>
          <strong>Data from Social Networks:</strong> User information from social networking sites, such as Facebook, Google+, Twitter, Instagram, and others, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.
        </li>
      </ul>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>2. How We Use Your Information</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        We use the information we collect in the following ways:
      </p>
      <ul className={`list-disc ml-8 ${openSans.className}`}>
        <li>To facilitate account creation and logon process.</li>
        <li>To send you a confirmation email regarding your account.</li>
        <li>To manage your account and provide you with customer support.</li>
        <li>To process your transactions and send you related information, including purchase confirmations and invoices.</li>
        <li>To send you marketing and promotional communications.</li>
        <li>To improve our website and services, including troubleshooting, data analysis, testing, research, and service improvement.</li>
        <li>To comply with legal obligations and protect our rights.</li>
      </ul>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>3. Disclosure of Your Information</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
      </p>
      <ul className={`list-disc ml-8 ${openSans.className}`}>
        <li>
          <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
 </li>
        <li>
          <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
        </li>
        <li>
          <strong>Marketing Communications:</strong> With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
        </li>
        <li>
          <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
        </li>
        <li>
          <strong>Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
        </li>
        <li>
          <strong>Other Users:</strong> When you share personal information (for example, by posting comments, contributions, or other content to the site) or otherwise interact with public areas of the site, such information may be viewed by all users and may be publicly distributed outside.
        </li>
      </ul>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>4. Tracking Technologies</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        We may use cookies, web beacons, tracking pixels, and other tracking technologies on the site to help customize the site and improve your experience. When you access the site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the site.
      </p>
      <p className={`text-gray-700 ${openSans.className}`}>
        We may use third-party software to help us track and analyze your use of the site, including but not limited to Google Analytics. This software may use cookies and other tracking technologies to collect information about your use of the site and other websites. You can opt-out of Google Analytics by visiting the Google Analytics opt-out page.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>5. Third-Party Websites</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        The site may contain links to third-party websites and applications of interest, including advertisements and external services that are not affiliated with us. Once you have used these links to leave the site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>6. Security of Your Information</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
      </p>
      <p className={`text-gray-700 ${openSans.className}`}>
        Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>7. Policy for Children</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible. If you become aware of any data we have collected from children under age 13, please contact us </p>
      <p className={`text-gray-700 ${openSans.className}`}>
        If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. We will take steps to remove such information from our records.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>8. Your Rights</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        Depending on your location, you may have the following rights regarding your personal information:
      </p>
      <ul className={`list-disc ml-8 ${openSans.className}`}>
        <li>
          <strong>The Right to Access:</strong> You have the right to request copies of your personal information. We may charge you a small fee for this service.
        </li>
        <li>
          <strong>The Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or incomplete.
        </li>
        <li>
          <strong>The Right to Erasure:</strong> You have the right to request that we erase your personal information, under certain conditions.
        </li>
        <li>
          <strong>The Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal information, under certain conditions.
        </li>
        <li>
          <strong>The Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
        </li>
        <li>
          <strong>The Right to Withdraw Consent:</strong> You have the right to withdraw your consent at any time where Prescribio relied on your consent to process your personal information.
        </li>
      </ul>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>9. Changes to This Privacy Policy</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>10. Contact Us</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <ul className={`list-disc ml-8 ${openSans.className}`}>
        <li>Email: contact@prescribio.com</li>
        <li>Phone: +91 92896 00575</li>
        <li>Address: Gurugram, India</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;