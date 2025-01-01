'use client';

import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeartbeat, 
  faLeaf, 
  faCloud, 
  faShieldAlt, 
  faGlobe, 
  faUserMd 
} from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { 
  inter, 
  robotoSlab, 
  openSans, 
  poppins 
} from '../utils/fonts';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: faHeartbeat,
      title: 'Enhanced Patient Experience',
      description:
        'We prioritize patient-centric care by creating an intuitive, user-friendly platform that simplifies prescription management.',
      color: 'text-red-500'
    },
    {
      icon: faLeaf,
      title: 'Sustainable Healthcare',
      description:
        'Our digital solution significantly reduces paper waste, supporting environmental sustainability in healthcare.',
      color: 'text-green-500'
    },
    {
      icon: faCloud,
      title: 'Cloud-Based Solutions',
      description:
        'Leverage cutting-edge cloud technology for secure, accessible, and seamless prescription management.',
      color: 'text-blue-500'
    },
    {
      icon: faShieldAlt,
      title: 'Robust Security',
      description:
        'State-of-the-art encryption and compliance with healthcare data protection standards ensure your information remains confidential.',
      color: 'text-purple-500'
    },
    {
      icon: faGlobe,
      title: 'Global Accessibility',
      description:
        'Access your prescriptions from anywhere in the world, breaking down geographical barriers in healthcare.',
      color: 'text-teal-500'
    },
    {
      icon: faUserMd,
      title: 'Healthcare Professional Support',
      description:
        'Streamline prescription workflows, reduce administrative burden, and improve overall healthcare delivery.',
      color: 'text-indigo-500'
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
      id="about"
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
          <h2 className={`text-5xl font-bold text-center mb-6 text-gray-800 ${robotoSlab.className}`}>
            About <span className={`${poppins.className} text-indigo-600`}>PrescriBio</span>
          </h2>
          <p className={`text-center mb-12 max-w-3xl mx-auto text-gray-600 text-xl leading-relaxed ${openSans.className}`}>
            We are pioneering a digital healthcare revolution, transforming prescription management 
            through innovative technology, user-centric design, and a commitment to sustainability 
            and accessibility.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
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
                    icon={feature.icon}
                    className={`text-6xl ${feature.color} mb-5 group-hover:animate-pulse`}
                  />
                </motion.div>
                <h3 className={`text-2xl font-semibold mb-4 text-gray-800 ${poppins.className}`}>
                  {feature.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${openSans.className}`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;