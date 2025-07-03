'use client'
import projects from '@/data/projects'
import React from 'react'
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  return (
    <section id='portfolio'>
        <div className="text-center mb-16">
            <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
            My Works
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
        <main className="min-h-screen  px-4 md:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {projects.map((project) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -10 }}
                    className="group rounded-3xl overflow-hidden border border-white/50 bg-white/5 transition-all"
                >
                    
                    <div className="p-6">
                    <div className="flex justify-between flex-col gap-3 items-start mb-4">
                        <p className="text-indigo-400">Web Development</p>
                        <h3 className="text-3xl font-semibold">{project.name}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 rounded-md text-xs bg-gray-800 text-gray-300"
                        >
                            {tech}
                        </span>
                        ))}
                    </div>
                    
                    <a
                        href={`${project.url}`}
                        target='_blank'
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors border border-purple-400 p-2 bg-purple-400/5 rounded-3xl"
                    >
                        View demo
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    </div>
                </motion.div>
                ))}
            </motion.div>
      </main>
    </section>
  )
}
