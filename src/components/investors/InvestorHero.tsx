'use client'

import { motion } from 'framer-motion'

const InvestorHero = () => {
  return (
    <div className="space-y-8">
      <motion.h1 
        className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.8 } }}
      >
        AI Will be the
        <br />
        Best Investor.
      </motion.h1>
      
      <motion.p 
        className="text-lg text-gray-600 mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.7 } }}
      >
        ADIN and its agents automate venture, from diligence to 
        making investment decisions, with deals sourced by 
        investors and the ADIN member network.
      </motion.p>

      <motion.button 
        className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 inline-flex items-center space-x-2 hover:shadow-lg"
        initial={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.0, delay: 0.5, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.6 } }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>Apply Now</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </div>
  )
}

export default InvestorHero
