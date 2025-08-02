'use client'

import { motion } from 'framer-motion'
import CompanyCard from './CompanyCard'
import { PORTFOLIO_COMPANIES } from '@/lib/constants'

const LiveReports = () => {
  return (
    <motion.div 
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 min-w-[280px]">
        {/* Header */}
        <motion.div 
          className="flex items-center space-x-2 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <motion.div 
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-sm font-medium text-gray-900">Live Reports</span>
        </motion.div>

        {/* Company Cards */}
        <div className="space-y-3">
          {PORTFOLIO_COMPANIES.slice(0, 3).map((company, index) => (
            <CompanyCard 
              key={company.name}
              name={company.name}
              description={company.description}
              logo={company.logo}
              delay={1.4 + index * 0.1}
            />
          ))}
        </div>

        {/* View All Link */}
        <motion.div 
          className="mt-4 pt-4 border-t border-gray-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
        >
          <button className="text-sm text-primary hover:text-primary-dark transition-colors duration-300">
            View All Recent Reports →
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LiveReports
