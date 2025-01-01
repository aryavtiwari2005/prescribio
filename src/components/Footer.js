// components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTwitter, 
  faFacebook, 
  faLinkedin, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot,
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';
import { 
  inter, 
  robotoSlab, 
  openSans, 
  poppins,
  montserrat 
} from '../utils/fonts';

export default function Footer() {
  return (
    <footer className={`relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white ${inter.className}`}>
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-purple-500 to-indigo-500"></div>
      
      {/* Backdrop blur overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>

      <div className="relative container mx-auto px-6 pt-16 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className={`text-3xl font-bold bg-clip-text text-white-700 inline-block ${robotoSlab.className}`}>
              PrescriBio
            </h3>
            <p className={`text-gray-300 text-sm leading-relaxed ${openSans.className}`}>
              Revolutionizing digital prescriptions with smart technology and seamless healthcare integration.
            </p>
            <div className="flex space-x-4 pt-4">
              {[faTwitter, faFacebook, faLinkedin, faInstagram].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="group relative p-3 bg-indigo-800/50 rounded-lg hover:bg-yellow-400 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <FontAwesomeIcon 
                    icon={icon} 
                    className="w-5 h-5 group-hover:text-indigo-900 transition-colors duration-300" 
                  />
                  <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-8">
            <h4 className={`text-lg font-semibold mb-6 border-b-2 border-white-700 inline-block ${poppins.className}`}>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Our Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className={`group flex items-center text-gray-300 hover:text-yellow-400 transition-all duration-300 ${montserrat.className}`}
                  >
                    <span className="relative overflow-hidden inline-block w-5">
                      <FontAwesomeIcon 
                        icon={faArrowRight} 
                        className="h-3 w-3 absolute transform -translate-x-5 group-hover:translate-x-0 transition-transform duration-300"
                      />
                    </span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 border-b-2 border-white-700 inline-block ${poppins.className}`}>
              Contact Us
            </h4>
            <div className="space-y-4">
              {[
                { icon: faPhone, text: '+1 (555) 123-4567' },
                { icon: faEnvelope, text: 'contact@prescribio.com' },
                { icon: faLocationDot, text: 'San Francisco, CA' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`group flex items-center space-x-3 text-gray-300 hover:text-white p-2 rounded-lg hover:bg-indigo-800/50 transition-all duration-300 ${openSans.className}`}
                >
                  <div className="p-2 bg-indigo-800/50 rounded-lg group-hover:bg-yellow-400 transition-colors duration-300">
                    <FontAwesomeIcon 
                      icon={item.icon} 
                      className="w-4 h-4 group-hover:text-indigo-900" 
                    />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 border-b-2 border-white-700 inline-block ${poppins.className}`}>
              Stay Updated
            </h4>
            <div className="space-y-4">
              <p className={`text-sm text-gray-300 ${openSans.className}`}>
                Subscribe to our newsletter for updates and insights.
              </p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 bg-indigo-800/50 border border-indigo-700 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 text-sm ${montserrat.className}`}
                />
              </div>
              <button className={`w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-indigo-900 font-semibold px-4 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg ${poppins.className}`}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-indigo-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm text-gray-400 ${openSans.className}`}>
              &copy; {new Date().getFullYear()} PrescriBio. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-300 ${montserrat.className}`}
                >
                  {item} </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}