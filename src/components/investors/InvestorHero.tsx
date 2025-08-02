'use client'

import { motion } from 'framer-motion'

const InvestorHero = () => {
  return (
    <div className="space-y-8">
      <motion.h1 
        className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        AI Will be the
        <br />
        Best Investor.
      </motion.h1>
      
      <motion.p 
        className="text-lg text-gray-600 mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        ADIN and its agents automate venture, from diligence to 
        making investment decisions, with deals sourced by 
        investors and the ADIN member network.
      </motion.p>

      <motion.button 
        className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 inline-flex items-center space-x-2 hover:shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
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
