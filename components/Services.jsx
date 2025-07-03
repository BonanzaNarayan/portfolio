'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Affordable Business Websites",
      description: "Clean, mobile-friendly websites for small businesses, freelancers, events, or side hustles.",
      price: "Starting at GHS500",
      delivery: "Delivered in 2–4 days",
      perfectFor: ["Shops", "Barbershops", "Schools", "Churches", "Events", "Online vendors"]
    },
    {
      title: "Personal Portfolio Websites",
      description: "A modern personal site to show off your skills, resume, or creative work.",
      price: "Starting at GHS400",
      delivery: "Delivered in 2–4 days",
      perfectFor: ["Developers", "Designers", "Photographers", "Students"]
    },
    {
      title: "Micro Web Apps",
      description: "Lightweight, custom web apps for bookings, client requests, and dashboards.",
      price: "Starting at GHS1000+",
      delivery: "Delivered in 4–9 days",
      perfectFor: ["Booking systems", "Client management", "Simple dashboards"]
    },
    {
      title: "Landing Pages",
      description: "One-page sites for marketing campaigns, promos, launches, or digital products.",
      price: "Starting at GHS500",
      delivery: "Delivered in 2–4 days",
      perfectFor: ["Product launches", "Marketing campaigns", "Digital products"]
    },
    {
      title: "AI-Powered Features",
      description: "Add smart functionality like chatbots and auto-reply forms to your website.",
      price: "Add-on from GHS200",
      perfectFor: ["Enhancing existing websites", "Customer support", "Lead generation"]
    },
    {
      title: "Custom Solutions",
      description: "Tailored solutions for your unique business requirements.",
      price: "Custom pricing",
      perfectFor: ["Complex projects", "Unique business needs"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      } 
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id='services'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What I Do
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional web solutions tailored to your business needs
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              className=" bg-white/5 rounded-2xl overflow-hidden p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium rounded-full">
                    {service.price}
                  </span>
                </div>
                
                <p className="text-gray-400 mt-4">{service.description}</p>
                
                {service.delivery && (
                  <div className="mt-4 flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-700 font-medium">{service.delivery}</span>
                  </div>
                )}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {service.perfectFor.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}