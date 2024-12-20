'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { WavesIcon as Wave } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative text-white py-20 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/image/banner.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-50"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <motion.h1 
            className="aquatico text-4xl md:text-6xl font-bold mb-4 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dive Into Ocean Wonders
          </motion.h1>
          <motion.p 
            className="text-xl mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore the depths of marine life and uncover the secrets beneath the waves in our captivating SeaWorld blog.
          </motion.p>
          <motion.button 
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-blue-700 bg-blue-100 rounded-full shadow-md transition duration-300 ease-out"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-blue-600"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-500 opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white flex items-center">
              Start Exploring
              <Wave className="ml-2 w-5 h-5" />
            </span>
          </motion.button>
        </div>
        <div className="md:w-1/2 relative h-[400px]">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7 }}
          >
          
          </motion.div>
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.8, rotate: 10, x: 50, y: 50 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, x: 30, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex justify-center items-center my-20 mr-10">
              <Image 
                src="/image/Hero2.png?" 
                alt="Underwater scene 2" 
                width={600} 
                height={400} 
                className="rounded-lg object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
