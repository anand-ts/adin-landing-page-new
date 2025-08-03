'use client'

import { motion } from 'framer-motion'
import VideoButton from './VideoButton'
import AnimatedText from './AnimatedText'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full filter blur-3xl opacity-25 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <span className="text-gray-900 block">
              Investing in early
            </span>
            <span className="text-gray-900 block">
              stage ideas building for
            </span>
            <div className="block">
              <AnimatedText />
              <span className="text-gray-900">.</span>
            </div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            ADIN backs teams building the future of the internet focusing on Seed Rounds to Series-A
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <VideoButton />
          </motion.div>
        </div>
      </div>

      {/* Prominent LED Strip Effect */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 shadow-2xl"
        style={{
          boxShadow: '0 0 40px rgba(139, 92, 246, 0.8), 0 0 80px rgba(139, 92, 246, 0.4)',
          filter: 'brightness(1.5) saturate(1.8)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-90"
        style={{
          boxShadow: '0 0 30px rgba(34, 197, 94, 0.7), 0 0 60px rgba(34, 197, 94, 0.3)',
          filter: 'brightness(1.8) saturate(2.0)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      
      {/* Pulsing LED Glow Animation */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-500"
        style={{
          filter: 'blur(4px) brightness(2.0)',
          mixBlendMode: 'screen'
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut"
        }}
      />
      
      {/* Scroll Indicator - Modern Arrow Animation */}
      <motion.div 
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {/* Triple stacked arrows */}
          <motion.svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0 
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
          <motion.svg 
            className="w-5 h-5 text-gray-400 -mt-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.3 
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
          </motion.svg>
          <motion.svg 
            className="w-4 h-4 text-gray-400 -mt-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.6 
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
