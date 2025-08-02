'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CompanyCard from './CompanyCard'

const companies = [
  { name: 'TechFlow', description: 'AI-powered workflow automation', logo: '/next.svg' },
  { name: 'DataSync', description: 'Real-time data synchronization platform', logo: '/next.svg' },
  { name: 'CloudVault', description: 'Secure cloud storage solutions', logo: '/next.svg' },
  { name: 'NetCore', description: 'Network infrastructure management', logo: '/next.svg' },
  { name: 'ByteStream', description: 'High-performance data streaming', logo: '/next.svg' },
  { name: 'CodeBase', description: 'Developer collaboration tools', logo: '/next.svg' }
]

export default function LiveReports() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Live Deal Reports
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time analytics and performance tracking for all active investments in our portfolio.
          </p>
        </motion.div>

        {/* Live Analytics Dashboard */}
        <motion.div 
          className="bg-white rounded-3xl shadow-xl p-8 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Portfolio Overview</h3>
              <p className="text-gray-600">Real-time performance metrics</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-500">Live</span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
              <div className="text-3xl font-bold text-blue-900 mb-2">$47.2M</div>
              <div className="text-blue-700">Total Assets Under Management</div>
              <div className="text-sm text-blue-600 mt-2">↗ +12.3% this quarter</div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-900 mb-2">23.4%</div>
              <div className="text-green-700">Average IRR</div>
              <div className="text-sm text-green-600 mt-2">↗ +2.1% vs benchmark</div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-900 mb-2">156</div>
              <div className="text-purple-700">Active Deals</div>
              <div className="text-sm text-purple-600 mt-2">32 new this month</div>
            </div>
          </div>

          {/* Company Cards */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Active Processing Queue</h4>
            {companies.map((company, index) => (
              <CompanyCard
                key={company.name}
                name={company.name}
                description={company.description}
                logo={company.logo}
                delay={index}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want access to detailed analytics?
          </h3>
          <p className="text-gray-600 mb-8">
            Join our investor network to get comprehensive deal reports and portfolio insights.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300">
            Request Access
          </button>
        </motion.div>
      </div>
    </section>
  )
}
