'use client'
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { label: 'Home', url: '#home' },
    { label: 'Services', url: '#services' },
    { label: 'Portfolio', url: '#portfolio' },
    { label: 'About', url: '#about' },
    { label: 'Contact', url: '#contact' },
  ];

  // Handle scroll effect for header and active link
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = `#${section.getAttribute('id')}`;
        }
      });
      
      setActiveLink(current || '#home');
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when clicking on links
  const handleLinkClick = (url) => {
    setIsOpen(false);
    setActiveLink(url);
    
    // Scroll to section
    const target = document.querySelector(url);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-xl py-4 ${
        scrolled 
          ? 'bg-black/70 border-b border-gray-700/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <Link href="/" className="flex items-center group">
            <motion.span 
              className="text-xl font-bold font-mono group-hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white">bonanza</span>
              <span className="text-purple-600">Dev</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                onClick={() => handleLinkClick(link.url)}
                className={`relative px-3 py-2 font-mono transition-colors ${
                  activeLink === link.url 
                    ? 'text-purple-500' 
                    : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                {link.label}
                {activeLink === link.url && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"
                    layoutId="activeIndicator"
                  />
                )}
              </Link>
            ))}
            
            {/* Contact button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-full text-white font-medium text-sm transition-colors"
            >
              Hire Me
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-gray-300 focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  onClick={() => handleLinkClick(link.url)}
                  className={`py-3 px-4 my-1 rounded-lg transition-colors ${
                    activeLink === link.url
                      ? 'bg-purple-900/30 text-purple-400'
                      : 'text-gray-300 hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="font-mono">{link.label}</span>
                    {activeLink === link.url && (
                      <div className="ml-2 w-2 h-2 bg-purple-500 rounded-full"></div>
                    )}
                  </div>
                </Link>
              ))}
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-4 py-3 bg-purple-700 hover:bg-purple-600 rounded-xl text-white font-medium transition-colors"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}