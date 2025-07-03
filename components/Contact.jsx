'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMessageSquare, FiCalendar } from 'react-icons/fi';

export default function Contact() {
  const [copied, setCopied] = useState({ email: false, phone: false, whatsapp: false });
  
  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6" />,
      label: "Email",
      value: "narayan bonanzakweku @gmail.com",
      action: () => {
        navigator.clipboard.writeText("narayanbonanzakweku@gmial.com");
        setCopied({ ...copied, email: true });
        setTimeout(() => setCopied({ ...copied, email: false }), 2000);
      },
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      label: "Phone",
      value: "0554435925",
      action: () => {
        navigator.clipboard.writeText("0554435925");
        setCopied({ ...copied, phone: true });
        setTimeout(() => setCopied({ ...copied, phone: false }), 2000);
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FiMessageSquare className="w-6 h-6" />,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      action: () => window.open("https://wa.me/233554435925", "_blank"),
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 " id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Reach out directly through any of these channels. I'm available for projects and consultations.
          </motion.p>
        </div>

        <div className="flex justify-center items-center">
          {/* Contact methods */}
          <div className="space-y-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r ${method.color} text-white mr-6`}>
                  {method.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.label}</h3>
                  <div className="flex items-center">
                    <p className="text-gray-700 text-lg">{method.value}</p>
                    {copied[method.label.toLowerCase()] && (
                      <span className="ml-3 px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        Copied!
                      </span>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={method.action}
                  className="ml-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors text-sm font-medium"
                >
                  {method.label === "WhatsApp" ? "Message" : "Copy"}
                </button>
              </motion.div>
            ))}
            
            {/* Book a call button - large CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <FiCalendar className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">Book a Call</h3>
              <p className="text-purple-200 mb-6 max-w-md mx-auto">
                Schedule a 30-minute consultation to discuss your project needs and how I can help.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-purple-600 font-bold rounded-full text-lg shadow-lg hover:bg-gray-100 transition-colors"
                onClick={() => window.open("https://calendly.com/narayanbonanzakweku/30min", "_blank")}
              >
                Schedule Now
              </motion.button>
            </motion.div>
          </div>
          

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
        
        .animate-blob {
          animation: blob 8s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}