'use client';

import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faQuoteLeft, 
  faUserMd, 
  faUserCircle, 
  faStar 
} from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { 
  inter, 
  robotoSlab, 
  openSans, 
  poppins,
  montserrat 
} from '../utils/fonts';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials = [
    {
      name: 'Dr. Rajesh Gupta',
      role: 'Chief Medical Officer, Vivantia Cura',
      feedback:
        'PrescriBio has transformed our prescription management at Fortis. The platform\'s innovative approach perfectly aligns with India\'s digital health mission, making healthcare more accessible and efficient.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/11.jpg'
    },
    {
      name: 'Priya Iyer',
      role: 'Healthcare Technology Consultant, Eternus Health',
      feedback:
        'As a healthcare professional in India\'s tech hub, I\'m impressed by PrescriBio\'s seamless integration of technology and patient care. It\'s exactly the kind of solution we need to modernize our healthcare system.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/83.jpg'
    },
    {
      name: 'Vikram Mehta',
      role: 'Patient Advocate, Vero Medical Trust',
      feedback:
        'PrescriBio has been a game-changer for patients like me. In a country with diverse healthcare challenges, this platform provides a simple, secure, and reliable way to manage medical prescriptions.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
        stiffness: 120
      }
    }
  };

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <FontAwesomeIcon 
        key={i} 
        icon={faStar} 
        className="text-yellow-400 mx-0.5" 
      />
    ));
  };

  return (
    <motion.section
      id="testimonials"
      className={`py-16 bg-gradient-to-br from-gray-50 to-gray-100 ${inter.className}`}
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
            What <span className={`${poppins.className} text-indigo-600`}>Our Users</span> Say
          </h2>
          <p className={`text-center mb-12 max-w-3xl mx-auto text-gray-600 text-xl leading-relaxed ${openSans.className}`}>
            Hear directly from healthcare professionals and patients across India who have transformed 
            their prescription management experience with PrescriBio.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center text-center">
                <FontAwesomeIcon 
                  icon={faQuoteLeft} 
                  className="text-3xl text-indigo-500 mb-4 opacity-50" 
                />
                <p className={`text-gray-700 mb-6 italic leading-relaxed ${montserrat.className}`}>
                  "{testimonial.feedback}"
                </p>
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full border-2 border-indigo-200 mr-4"
                  />
                  <div>
                    <h4 className={`text-xl font-semibold text-gray-800 ${poppins.className}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-gray-600 text-sm ${openSans.className}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;