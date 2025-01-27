'use client';

import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptopMedical, 
  faCloud, 
  faShieldAlt, 
  faSync, 
  faUserMd, 
  faChartLine 
} from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { 
  inter, 
  robotoSlab, 
  openSans, 
  poppins,
  montserrat 
} from '../utils/fonts';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: faLaptopMedical,
      title: 'Digital Prescription Management',
      description: 'Seamlessly transform your prescription workflow with our cutting-edge digital platform, eliminating paper-based inefficiencies.',
      color: 'text-blue-500',
      details: [
        'Instant prescription generation',
        'Easy sharing with healthcare providers',
        'Real-time prescription tracking'
      ]
    },
    {
      icon: faCloud,
      title: 'Advanced Cloud Storage',
      description: 'Leverage state-of-the-art cloud technology for secure, accessible, and comprehensive medical record management.',
      color: 'text-green-500',
      details: [
        'Encrypted cloud storage',
        'Multi-device synchronization',
        '24/7 secure access'
      ]
    },
    {
      icon: faShieldAlt,
      title: 'Comprehensive Data Protection',
      description: 'Implement robust security measures to safeguard patient information with industry-leading privacy protocols.',
      color: 'text-red-500',
      details: [
        'HIPAA compliant encryption',
        'Multi-factor authentication',
        'Regular security audits'
      ]
    },
    {
      icon: faSync,
      title: 'Seamless Integration',
      description: 'Effortlessly connect with existing healthcare systems and electronic health record platforms.',
      color: 'text-purple-500',
      details: [
        'Compatible with major EHR systems',
        'API-driven architecture',
        'Smooth data migration'
      ]
    },
    {
      icon: faUserMd,
      title: 'Healthcare Professional Support',
      description: 'Empower medical professionals with intuitive tools that streamline clinical workflows and enhance patient care.',
      color: 'text-teal-500',
      details: [
        'Comprehensive dashboard',
        'Quick patient record access',
        'Intelligent prescription management'
      ]
    },
    {
      icon: faChartLine,
      title: 'Analytics & Insights',
      description: 'Gain valuable insights into prescription trends, patient demographics, and healthcare delivery patterns.',
      color: 'text-indigo-500',
      details: [
        'Detailed reporting',
        'Predictive analytics',
        'Customizable dashboards'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.section
      className={`py-16 bg-gradient-to-br from-gray-50 to-gray-100 ${inter.className}`}
      id="services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl font-bold text-center mb-6 text-gray-800 ${robotoSlab.className}`}>
            Our <span className={`${poppins.className} text-indigo-600`}>Comprehensive</span> Services
          </h2>
          <p className={`text-center mb-12 max-w-3xl mx-auto text-gray-600 text-xl leading-relaxed ${openSans.className}`}>
            We provide a holistic digital healthcare solution designed to revolutionize 
            prescription management, enhance patient care, and empower healthcare professionals.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FontAwesomeIcon
                    icon={service.icon}
                    className={`text-6xl ${service.color} mb-5 group-hover:animate-pulse`}
                  />
                </motion.div>
                <h3 className={`text-2xl font-semibold mb-4 text-gray-800 ${poppins.className}`}>
                  {service.title}
                </h3>
                <p className={`text-gray-600 mb-4 leading-relaxed ${montserrat.className}`}>
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-center text-gray-600 text-sm ${openSans.className}`}
                    >
                      <span className="mr-2 text-green-500">✓</span>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;