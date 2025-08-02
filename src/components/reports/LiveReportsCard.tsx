'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoBusinessOutline, IoLeafOutline, IoFlashOutline, IoRemoveOutline, IoAddOutline } from 'react-icons/io5'

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
  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <motion.div 
      className="fixed bottom-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 z-50"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
        width: isMinimized ? 'auto' : '320px'
      }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
    >
      {/* Header with Minimize Button */}
      <div className="flex items-center justify-between p-6 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <h3 className="font-semibold text-gray-900">Live Reports</h3>
        </div>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="p-1 hover:bg-gray-100 rounded-lg transition-colors duration-200 flex-shrink-0"
          aria-label={isMinimized ? "Expand" : "Minimize"}
        >
          {isMinimized ? (
            <IoAddOutline className="w-4 h-4 text-gray-600" />
          ) : (
            <IoRemoveOutline className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ opacity: 0, height: 0, paddingBottom: 0 }}
            animate={{ opacity: 1, height: "auto", paddingBottom: 24 }}
            exit={{ opacity: 0, height: 0, paddingBottom: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
