'use client'

import { motion } from 'framer-motion'
import { IoBusinessOutline, IoLeafOutline, IoFlashOutline } from 'react-icons/io5'

const recentDeals = [
  {
    name: 'New Range',
    description: 'Automated Compliance',
    icon: IoBusinessOutline,
    bgColor: 'bg-teal-500'
  },
  {
    name: 'Cactos',
    description: 'Energy Systems',
    icon: IoLeafOutline,
    bgColor: 'bg-green-600'
  },
  {
    name: 'OpenAI',
    description: 'Machine Intelligence',
    icon: IoFlashOutline,
    bgColor: 'bg-gray-800'
  }
]

export default function LiveReportsCard() {
  return (
    <motion.div 
      className="fixed bottom-8 right-8 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 p-6 z-50"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)'
      }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <h3 className="font-semibold text-gray-900">Live Reports</h3>
      </div>

      {/* Deals List */}
      <div className="space-y-3 mb-4">
        {recentDeals.map((deal, index) => (
          <motion.div
            key={deal.name}
            className="flex items-center gap-3 p-3 rounded-xl bg-white/70 hover:bg-white/90 transition-all duration-200 cursor-pointer group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.8 + (index * 0.1) }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Company Icon */}
            <div className={`w-12 h-12 ${deal.bgColor} rounded-xl flex items-center justify-center text-white text-lg font-medium shadow-sm group-hover:shadow-md transition-shadow`}>
              <deal.icon className="w-6 h-6" />
            </div>
            
            {/* Company Info */}
            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-900 truncate">{deal.name}</div>
              <div className="text-sm text-gray-500 truncate">{deal.description}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Link */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 2.3 }}
      >
        <button className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors duration-200 group">
          View All Recent Reports
          <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
        </button>
      </motion.div>
    </motion.div>
  )
}
