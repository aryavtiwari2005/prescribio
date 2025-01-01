// pages/TermsOfService.js
"use client";

import React from 'react';
import { inter, robotoSlab, openSans, poppins } from '../../utils/fonts';

const TermsOfService = () => {
  return (
    <div className={`container mx-auto px-4 py-16 ${inter.className}`}>
      <h1 className={`text-4xl font-bold mb-4 ${robotoSlab.className}`}>Terms of Service</h1>
      <p className={`text-gray-700 ${openSans.className}`}>
        Effective Date: 1st June 2023
      </p>
      <p className={`text-gray-700 ${openSans.className}`}>
        Welcome to Prescribio! These Terms of Service ("Terms") govern your access to and use of our website, applications, and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Service.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>1. Acceptance of Terms</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        By using the Service, you affirm that you are at least 18 years of age or are accessing the Service under the supervision of a parent or guardian. If you are using the Service on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>2. Changes to Terms</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        We may modify these Terms from time to time. We will notify you of any changes by posting the new Terms on this page. You are advised to review these Terms periodically for any changes. Changes to these Terms are effective when they are posted on this page. Your continued use of the Service after any changes to the Terms constitutes your acceptance of the new Terms.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>3. User Accounts</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        To access certain features of the Service, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for any activities or actions under your account.
      </p>
      <p className={`text-gray-700 ${openSans.className}`}>
        You agree to notify us immediately upon becoming aware of any breach of security or unauthorized use of your account. We will not be liable for any loss or damage arising from your failure to comply with the above requirements.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>4. Use of the Service</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
      </p>
      <ul className={`list-disc ml-8 ${openSans.className}`}>
        <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
        <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
        <li>To send, knowingly receive, upload, download, use, or re-use any material that does not comply with these Terms.</li>
        <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
        <li>To impersonate or attempt to impersonate Prescribio, a Prescribio employee, another user, or any other person or entity.</li>
        <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm Prescribio or users of the Service or expose them to liability.</li>
      </ul>

      <h2 className={`text-3xl font-bold mt- 8 mb-4 ${robotoSlab.className}`}>5. Intellectual Property Rights</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        The Service and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Prescribio, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
      </p>
      <p className={`text-gray-700 ${openSans.className}`}>
        These Terms permit you to use the Service for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service, except as follows:
      </p>
      <ul className={`list-disc ml-8 ${openSans.className}`}>
        <li>Your computer may temporarily store copies of such materials in RAM for the purpose of accessing the materials over the internet.</li>
        <li>You may store files that are automatically cached by your web browser for display enhancement purposes.</li>
        <li>You may print or download one copy of a reasonable number of pages of the Service for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li>
      </ul>
      <p className={`text-gray-700 ${openSans.className}`}>
        You must not:
      </p>
      <ul className={`list-disc ml-8 ${openSans.className}`}>
        <li>Modify copies of any materials from this site.</li>
        <li>Use any illustrations, photographs, video or audio sequences, or any graphics separately from the accompanying text.</li>
        <li>Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from this site.</li>
      </ul>
      <p className={`text-gray-700 ${openSans.className}`}>
        If you wish to make any use of material on the Service other than that set out in this section, please address your request to: contact@prescribio.com.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>6. Disclaimers</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        The Service is provided on an "as is" and "as available" basis. Prescribio makes no representations or warranties of any kind, express or implied, as to the operation of the Service or the information, content, materials, or products included on the Service. You expressly agree that your use of the Service is at your sole risk.
      </p>
      <p className={`text-gray-700 ${openSans.className}`}>
        To the full extent permissible by applicable law, Prescribio disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. Prescribio does not warrant that the Service, its servers, or e-mail sent from Prescribio are free of viruses or other harmful components. Prescribio will not be liable for any damages of any kind arising from the use of the Service, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>7. Limitation of Liability</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        In no event shall Prescribio, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of (or inability to access or use) the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>8. Indemnification</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        You agree to defend, indemnify, and hold harmless Prescribio, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, service providers, suppliers, and successors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service, including, but not limited to, your user contributions, any use of the Service's content, services, and products other than as expressly authorized in these Terms, or your use of any information obtained from the Service.
      </p>
      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>9. Governing Law</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law principles. Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Service shall be instituted exclusively in the federal or state courts located in [Insert Location], and you waive any objection to the exercise of jurisdiction over you by such courts and to venue in such courts.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>10. Miscellaneous</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        If any provision of these Terms is held to be invalid or unenforceable by a court of competent jurisdiction, such provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions of these Terms shall remain in full force and effect. These Terms constitute the entire agreement between you and Prescribio regarding your use of the Service, superseding any prior agreements between you and Prescribio relating to your use of the Service.
      </p>
      <p className={`text-gray-700 ${openSans.className}`}>
        No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and any failure of Prescribio to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
      </p>

      <h2 className={`text-3xl font-bold mt-8 mb-4 ${robotoSlab.className}`}>11. Contact Us</h2>
      <p className={`text-gray-700 ${openSans.className}`}>
        If you have any questions about these Terms, please contact us:
      </p>
      <ul className={`list-disc ml-8 ${openSans.className}`}>
        <li>Email: contact@prescribio.com</li>
        <li>Phone: +91 81780 22719</li>
        <li>Address: Gurugram, India</li>
      </ul>
    </div>
  );
};

export default TermsOfService;