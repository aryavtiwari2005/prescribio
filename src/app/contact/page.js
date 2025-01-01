'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { 
  inter, 
  robotoSlab, 
  openSans, 
  poppins 
} from '../../utils/fonts';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Simulate a network request
    setTimeout(() => {
      console.log('Contact form submitted', formData);
      setLoading(false);
      setSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div className={`flex flex-col min-h-screen ${inter.className}`}>
      <main className="flex-grow bg-gradient-to-r from-indigo-600 to-purple-600 py-16 md:py-24">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Information Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
            >
              <h2 className={`text-4xl font-bold mb-6 text-indigo-600 ${robotoSlab.className}`}>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-indigo-500" />
                  <div>
                    <h3 className={`font-semibold ${poppins.className}`}>Email</h3>
                    <p className={`text-gray-600 ${openSans.className}`}>contact@prescribio.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faPhone} className="text-2xl text-indigo-500" />
                  <div>
                    <h3 className={`font-semibold ${poppins.className}`}>Phone</h3>
                    <p className={`text-gray-600 ${openSans.className}`}>+91 81780 22719</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-indigo-500" />
                  <div>
                    <h3 className={`font-semibold ${poppins.className}`}>Address</h3>
                    <p className={`text-gray-600 ${openSans.className}`}>
                      Tower 3, DLF Cyber City, Phase 2 Gurugram, Haryana 122002 India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <form 
                onSubmit={handleSubmit} 
                className="bg-white p-8 rounded-xl shadow-lg space-y-6"
              >
                <h2 className={`text-4xl font-bold mb-6 text-indigo-600 ${robotoSlab.className}`}>
                  Send Us a Message
                </h2>
                
                <div>
                  <label className={`block mb-2 text-gray-700 ${poppins.className}`}>
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData(prevState => ({...prevState, name: e.target.value}))}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 transition ${openSans.className}`}
                    required 
                  />
                </div>
                
                <div>
                  <label className={`block mb-2 text-gray-700 ${poppins.className}`}>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData(prevState => ({...prevState, email: e.target.value}))}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 transition ${openSans.className}`}
                    required 
                  />
                </div>
                
                <div>
                  <label className={`block mb-2 text-gray-700 ${poppins.className}`}>
                    Subject
                  </label>
                  <input 
                    type="text" 
                    value={formData.subject}
                    onChange={(e) => setFormData(prevState => ({...prevState, subject: e.target.value}))}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 transition ${openSans.className}`}
                    required 
                  />
                </div>
                
                <div>
                  <label className={`block mb-2 text-gray-700 ${poppins.className}`}>
                    Message
                  </label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData(prevState => ({...prevState, message: e.target.value}))}
                    className={`w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-indigo-200 transition ${openSans.className}`}
                    required 
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-colors ${loading ? 'animate-pulse' : ''} ${poppins.className}`}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : success ? 'Message Sent!' : 'Send Message'}
                </button>
                {success && <p className="text-green-500 text-sm mt-2">Your message has been sent successfully!</p>}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}