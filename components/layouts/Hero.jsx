'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      },
    },
  };

  return (
    <div 
      className="min-h-screen mt-10 flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden"
      id="home"
    >
      {/* Background elements */}
      {/* <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div> */}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="text-center lg:text-left"
          >
            {/* <motion.div variants={itemVariants}>
              <h2 className="text-lg md:text-xl font-semibold text-purple-600 mb-2 tracking-wide">
                FULL-STACK DEVELOPER
              </h2>
            </motion.div> */}
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              <span className="block">Hello, I'm</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Bonanza Narayan
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
            >
              I build <span className="font-semibold text-purple-600">fast, modern websites</span> and web apps for businesses that convert visitors into customers.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
                <Link href={'#contact'}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3.5 text-lg font-semibold rounded-full bg-white text-gray-800 border border-gray-300 hover:border-indigo-300 transition-all duration-300 shadow-sm"
                    >
                        View Projects
                    </motion.button>
                </Link>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-12 flex justify-center lg:justify-start"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <div className="bg-green-500 rounded-full h-3 w-3 mr-2"></div>
                  <span className="text-gray-700 font-medium text-sm">Available for work</span>
                </div>
                
                <div className="flex flex-wrap justify-center gap-3 max-w-md">
                  {['React', 'NextJS', 'Firebase', 'JavaScript', 'Astro', 'Tailwind', 'TypeScript'].map((tech, index) => (
                    <motion.span 
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
                      className="px-3.5 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium shadow-inner"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
              }
            }}
            whileHover={{ 
              y: -10,
              transition: { 
                duration: 0.4, 
                ease: "easeOut"
              }
            }}
            className="flex justify-center relative"
          >
            <div className="relative">
              {/* Image container with decorative elements */}
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-1.5 rounded-full shadow-xl">
                  <div className="bg-white p-1 rounded-full">
                    <div className="w-full h-full overflow-hidden rounded-full border-4 border-white">
                      {/* <div className="bg-gray-200 border-2 border-dashed rounded-xl w-96 h-96" /> */}
                      <img src="/img1.jpg" alt="img" className='w-90' />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white px-4 py-2.5 rounded-full shadow-lg z-20 flex items-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-10"></div>
                <span className="font-medium text-gray-700 relative">5+ years experience</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white px-4 py-2.5 rounded-full shadow-lg z-20 flex items-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-10"></div>
                <span className="font-medium text-gray-700 relative">20+ projects</span>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute top-12 -left-8 w-4 h-4 bg-purple-500 rounded-full animate-float"></div>
              <div className="absolute bottom-20 -right-8 w-5 h-5 bg-indigo-500 rounded-full animate-float animation-delay-2000"></div>
              <div className="absolute top-1/2 right-12 w-3 h-3 bg-pink-500 rounded-full animate-float animation-delay-3000"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animation styles */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-blob {
          animation: blob 8s infinite;
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}