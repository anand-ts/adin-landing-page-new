'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const VideoButton = () => {
  const handleVideoClick = () => {
    window.open('https://www.linkedin.com/posts/tributelabs_ai-venturecapital-startups-activity-7354245253735800835-3Xc7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADK1bBEBtMlrwXDJzwgmWJYZydQ3erBwtaY', '_blank')
  }

  return (
    <motion.button 
      className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-lg border border-white/30 text-gray-900 font-medium px-8 py-4 rounded-full transition-all duration-300 text-lg shadow-lg hover:bg-white/30 hover:border-white/40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)',
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={handleVideoClick}
    >
      <Image 
        src="/how_to_earn.svg"
        alt="How to Earn"
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <span>
        Watch the Video
      </span>
    </motion.button>
  )
}

export default VideoButton
