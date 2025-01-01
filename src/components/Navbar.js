"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faCogs, faCommentDots, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Inter, Poppins, Montserrat } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/#home', icon: faHome, label: 'Home' },
    { href: '/#about', icon: faInfo, label: 'About' },
    { href: '/#services', icon: faCogs, label: 'Services' },
    { href: '/#testimonials', icon: faCommentDots, label: 'Testimonials' },
  ];

  const handleNavigation = (e, href) => {
    setIsMobileMenuOpen(false);
    
    e.preventDefault();
    
    if (pathname !== '/') {
      router.push(`/${href}`);
      return;
    }

    const sectionId = href.substring(2);
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animated Menu Toggle Button
  const AnimatedMenuToggle = () => {
    return (
      <motion.div 
        className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'bg-white/20 backdrop-blur-sm' 
            : 'hover:bg-white/10'
        }`}
        initial={false}
        animate={isMobileMenuOpen ? "opened" : "closed"}
        whileTap={{ scale: 0.95 }}
      >
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ 
              rotate: [0, 360], 
              opacity: 1 
            }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            <FontAwesomeIcon 
              icon={faTimes} 
              className="text-indigo-600 w-6 h-6" 
            />
          </motion.div>
        ) : (
          <div className="space-y-1.5">
            <motion.div 
              className={`w-6 h-0.5 ${scrolled ? 'bg-indigo-600' : 'bg-white'}`}
              variants={{
                closed: { rotate: 0, y: 0 },
                opened: { rotate: 45, y: 6 }
              }}
            />
            <motion.div 
              className={`w-6 h-0.5 ${scrolled ? 'bg-indigo-600' : 'bg-white'}`}
              variants={{
                closed: { opacity: 1 },
                opened: { opacity: 0 }
              }}
            />
            <motion.div 
              className={`w-6 h-0.5 ${scrolled ? 'bg-indigo-600' : 'bg-white'}`}
              variants={{
                closed: { rotate: 0, y: 0 },
                opened: { rotate: -45, y: -6 }
              }}
            />
          </div>
        )}
      </motion.div>
    );
  };

  // Mobile Menu Variants
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        bounce: 0.2
      }
    }
  };

  // Nav Item Variants
  const navItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom) => ({
      opacity: 1, 
      x: 0,
      transition: {
        delay: custom * 0.2,
        type: "spring",
        stiffness: 120
      }
    })
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${inter.className} ${
        scrolled 
          ? 'bg-white text-indigo-600 shadow-lg py-2' 
          : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-8">
        <Link 
          href="/" 
          className={`text-2xl font-bold tracking-tight hover:scale-105 transition-transform duration-300 ${poppins.className}`}
        >
          PrescriBio
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavigation(e, item.href)}
              className={`group flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-600 hover:text-white ${montserrat.className}`}
            >
              <FontAwesomeIcon 
                icon={item.icon} 
                className="transform group-hover:scale-125 transition-transform duration-300" 
              />
              <span className="relative">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300"></span>
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
        >
          <AnimatedMenuToggle />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-indigo-600 z-40 md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            style={{
              top: scrolled ? '56px' : '64px', 
              backgroundColor: 'rgba(79, 70, 229, 0.95)' 
            }}
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={`flex items-center space-x-4 text-white text-2xl ${montserrat.className}`}
                  variants={navItemVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                >
                  <FontAwesomeIcon 
                    icon={item.icon} 
                    className="w-6 h-6" 
                  />
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}