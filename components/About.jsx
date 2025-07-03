'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCoffee, FiGlobe, FiMoon } from 'react-icons/fi';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const stats = [
    { value: "20+", label: "Projects Completed", icon: <FiCode className="w-5 h-5" /> },
    { value: "5+", label: "Years Experience", icon: <FiGlobe className="w-5 h-5" /> },
    { value: "∞", label: "Cups of Coffee", icon: <FiCoffee className="w-5 h-5" /> },
    { value: "2 AM", label: "Best Coding Time", icon: <FiMoon className="w-5 h-5" /> },
  ];

  return (
    <section className="py-20 px-4 mt-10 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/20 to-black/20 relative overflow-hidden" id="about">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-900 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-indigo-900 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-900 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.div variants={item}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                <span className="inline-block mr-3">👋</span> 
                About Me
              </h2>
            </motion.div>
            
            <motion.p 
              variants={item}
              className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0"
            >
              Hey there! I'm <span className="font-semibold text-purple-400">Bonanza</span>, a full-stack web developer based in Ghana. I specialize in building <span className="text-purple-400 font-medium">fast, clean, and modern websites</span> and micro web apps using cutting-edge tools.
            </motion.p>
            
            <motion.p 
              variants={item}
              className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0"
            >
              I've worked with small businesses, startups, and solo hustlers to bring their online presence to life — whether it's a landing page, portfolio, or a custom-built app. I keep things <span className="text-purple-400 font-medium">simple, affordable, and effective</span>.
            </motion.p>
            
            <motion.p 
              variants={item}
              className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              When I'm not building cool things on the web, I'm probably learning something new, tweaking my code at <span className="text-purple-400">2am</span>, or plotting how to take over the web dev space one client at a time <span className="inline-block">😎</span>.
            </motion.p>
            
            {/* Stats grid */}
            <motion.div 
              variants={container}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700"
                >
                  <div className="flex items-center justify-center mb-2 text-purple-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right column - Visual elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center relative"
          >
            {/* Profile container */}
            <div className="relative max-w-md">
              {/* Profile image */}
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-1.5 rounded-full shadow-xl">
                  <div className="bg-gray-800 p-1 rounded-full">
                    <div className="w-full h-full overflow-hidden rounded-full border-4 border-gray-800">
                      <div className="bg-gray-700 border-2 border-dashed rounded-xl w-full aspect-square flex items-center justify-center">
                        {/* <div className="text-4xl">👨🏾‍💻</div> */}
                        <img src="/img1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-0 -right-10 bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 rounded-full shadow-lg z-20">
                <span className="font-medium text-white">Ghana Based</span>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 rounded-full shadow-lg z-20">
                <span className="font-medium text-white">2am Coder</span>
              </div>
              
              {/* Tech stack floating badges */}
              <div className="absolute top-1/4 -left-10 bg-gray-800 px-4 py-2 rounded-full shadow-lg rotate-[-10deg]">
                <span className="font-medium text-green-400">React</span>
              </div>
              <div className="absolute top-1/2 -right-10 bg-gray-800 px-4 py-2 rounded-full shadow-lg rotate-[10deg]">
                <span className="font-medium text-cyan-400">Firebase</span>
              </div>
              <div className="absolute bottom-1/4 -left-8 bg-gray-800 px-4 py-2 rounded-full shadow-lg rotate-[-5deg]">
                <span className="font-medium text-yellow-400">JavaScript</span>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute top-12 -left-8 w-4 h-4 bg-purple-500 rounded-full animate-float"></div>
              <div className="absolute bottom-20 -right-8 w-5 h-5 bg-indigo-500 rounded-full animate-float animation-delay-2000"></div>
              <div className="absolute top-1/2 right-12 w-3 h-3 bg-amber-500 rounded-full animate-float animation-delay-3000"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
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
      `}</style>
    </section>
  );
}