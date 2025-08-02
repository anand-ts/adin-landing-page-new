'use client'

import VideoButton from './VideoButton'
import AnimatedText from './AnimatedText'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="text-gray-900 block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Investing in early
            </motion.span>
            <motion.span 
              className="text-gray-900 block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              stage ideas building for
            </motion.span>
            <motion.div 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <AnimatedText />
              <span className="text-gray-900">.</span>
            </motion.div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            ADIN backs teams building the future of the internet
            <br />
            focusing on Seed Rounds to Series-A.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
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
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-90"
        style={{
          boxShadow: '0 0 30px rgba(34, 197, 94, 0.7), 0 0 60px rgba(34, 197, 94, 0.3)',
          filter: 'brightness(1.8) saturate(2.0)'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
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
          ease: "easeInOut",
          delay: 1.4
        }}
      />
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
      >
        <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center hover:border-gray-600 transition-colors duration-300">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
