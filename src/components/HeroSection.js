'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPrescriptionBottleAlt, 
  faHeartbeat, 
  faClipboard, 
  faShieldAlt, 
  faMobileAlt 
} from '@fortawesome/free-solid-svg-icons';
import { Inter, Poppins, Montserrat } from 'next/font/google';
import Counter from './Counter'; // Import the Counter component

// Font configurations
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat'
});

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    className={`bg-white/10 backdrop-blur-lg p-4 rounded-lg ${montserrat.className}`}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay }}
  >
    <FontAwesomeIcon icon={icon} className="text-2xl text-yellow-300 mb-2" />
    <h3 className="text-lg font-semibold mb-1 font-bold">{title}</h3>
    <p className="text-sm text-white/80">{description}</p>
  </motion.div>
);

const HeroSection = () => {
  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    
    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const features = [
    {
      icon: faShieldAlt,
      title: "Secure & Private",
      description: "End-to-end encryption for all medical data",
    },
    {
      icon: faMobileAlt,
      title: "Always Accessible",
      description: "Access prescriptions anytime, anywhere",
    },
    {
      icon: faHeartbeat,
      title: "Better Healthcare",
      description: "Improved accuracy and patient outcomes",
    },
  ];

  return (
    <motion.section
      className={`relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden pt-20 ${inter.className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="home"
    >
      {/* Background Shape Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Floating Shapes */}
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-white/10 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "loop" 
          }}
        />
        <motion.div 
          className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-white/5 rounded-full"
          animate={{ 
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            repeatType: "loop" 
          }}
        />

        {/* Smaller Dynamic Shapes */}
        {[...Array(10)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ 
              translateY: [0, 50, 0],
              translateX: [0, -50, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: Math.random() * 10 + 5, 
              repeat: Infinity, 
              repeatType: "loop" 
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 min-h-[calc(100vh-5rem)]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 h-full">
          {/* Left content section */}
          <motion.div
            className="flex-1 text-left"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <FontAwesomeIcon 
                icon={faPrescriptionBottleAlt} 
                className="text-7xl mb-6 text-white/90" 
              />
              <h1 className={`text-6xl font-extrabold tracking-wide mb-4 ${poppins.className}`}>
                Prescri<span className="text-yellow-300">Bio</span>
              </h1>
              <p className={`text-xl leading-relaxed mb-8 text-white/90 ${montserrat.className}`}>
                Transform your healthcare experience with digital prescriptions that are 
                secure, instant, and environmentally conscious. Join thousands of healthcare 
                providers and patients who trust PrescriBio for seamless prescription management.
              </p>
            </motion.div>

            <motion.div
              className="flex gap-4 mb-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link href="/contact" className={`px-8 py-3 bg-yellow-400 text-indigo-800 rounded-lg shadow-lg hover:bg-yellow-300 transition-colors font-semibold ${poppins.className}`}>
                Get Started
               </Link>
              <Link href="/#about" onClick={(e) => handleScrollToSection(e, "#about")} className={`px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg shadow-lg hover:bg-white/20 transition-colors font-semibold ${poppins.className}`}>
                Learn More
              </Link>
            </motion.div>

            {/* Stats section */}
            <motion.div
              className={`flex gap-8 ${montserrat.className}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div>
                <Counter endValue={10} />
                <p className="text-white/80">Active Users</p>
              </div>
              <div>
                <Counter endValue={50} />
                <p className="text-white/80">Prescriptions</p>
              </div>
              <div>
                <Counter endValue={50} />
                <p className="text-white/80">Uptime</p>
              </div>
            </motion.div>
          </motion.div>

           {/* Right features section */}
          <motion.div
            className="flex-1 grid grid-cols-1 gap-6"
            initial={{ opacity:  0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                delay={0.4 + index * 0.2}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Optional Subtle Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 mix-blend-overlay pointer-events-none"></div>
    </motion.section>
  );
};

export default HeroSection;