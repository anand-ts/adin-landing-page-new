'use client'

import { motion } from 'framer-motion'

const VideoButton = () => {
  return (
    <motion.button 
      className="inline-flex items-center space-x-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-4 rounded-full transition-all duration-300 text-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ 
        backgroundColor: '#fbbf24',
        boxShadow: '0 10px 25px rgba(251, 191, 36, 0.3)',
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <svg 
        className="w-6 h-6" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path 
          fillRule="evenodd" 
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
          clipRule="evenodd" 
        />
      </svg>
      <span>
        Watch the Video
      </span>
    </motion.button>
  )
}

export default VideoButton
