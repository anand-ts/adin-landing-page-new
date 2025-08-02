'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AISpeedSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            AI speed.
            <br />
            Human judgment.
          </h2>
          
          <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
            ADIN pairs expert operators with intelligent agents to handle the heavy lifting of venture workflows. Faster 
            analysis, tighter feedback loops, and more space for high-conviction bets.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Powered by AI Agents */}
          <motion.div 
            className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/adin-logo-56x56.webp"
                alt="ADIN Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Powered by</h3>
                <h4 className="text-xl font-bold text-gray-900">AI Agents</h4>
              </div>
            </div>
            
            {/* AI Agents SVG */}
            <div className="flex justify-center">
              <Image 
                src="/Profile Card Inner Container.svg" 
                alt="AI Agents Profile Cards"
                width={300}
                height={225}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Supported by Humans */}
          <motion.div 
            className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/adin-logo-56x56.webp"
                alt="ADIN Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Supported by</h3>
                <h4 className="text-xl font-bold text-gray-900">Humans</h4>
              </div>
            </div>
            
            {/* Ryan Hoover SVG */}
            <div className="flex justify-center">
              <Image 
                src="/ryan_hoover.svg" 
                alt="Ryan Hoover and Human Support Team"
                width={300}
                height={225}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Tribute Labs Project - Bottom Wide Section */}
        <motion.div 
          className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        >
          <div className="flex items-center space-x-6">
            {/* Logo on the left */}
            <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden flex-shrink-0">
              <Image
                src="/tl.gif"
                alt="Tribute Labs"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content on the right */}
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-900 mb-2">A Tribute Labs Project</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                Tribute Labs has supported over 70 companies, empowering more than 300 projects through technical
                guidance, architecture, and hyperion innovations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AISpeedSection
