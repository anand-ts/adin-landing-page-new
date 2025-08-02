'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { IoSearch, IoFlash, IoTrendingUp, IoBarChart, IoColorPalette } from 'react-icons/io5'

const AISpeedSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const aiAgents = [
    {
      name: "The Value Sleuth",
      description: "Scanning opinions, not the movement.",
      icon: <IoSearch className="w-5 h-5" />,
      color: "bg-orange-100"
    },
    {
      name: "The Tech Oracle", 
      description: "Predicting tomorrow's breakthroughs, today.",
      icon: <IoFlash className="w-5 h-5" />,
      color: "bg-red-100"
    },
    {
      name: "The Monopoly Maker",
      description: "Spotting the next market dominator.",
      icon: <IoTrendingUp className="w-5 h-5" />,
      color: "bg-blue-100"
    },
    {
      name: "The Unit Master",
      description: "Numbers first, growth always.",
      icon: <IoBarChart className="w-5 h-5" />,
      color: "bg-green-100"
    },
    {
      name: "The Eddie Guy",
      description: "Seeking those gems for lasting growth.",
      icon: <IoColorPalette className="w-5 h-5" />,
      color: "bg-purple-100"
    }
  ]

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - AI Agents */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(8px)" }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.8 } }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(6px)" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.9 } }}
            >
              AI speed.
              <br />
              Human judgment.
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-8 text-lg"
              initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 25, filter: "blur(4px)" }}
              transition={{ duration: 1.0, delay: 0.4, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.7 } }}
            >
              ADIN pairs expert operators with intelligent agents to handle the heavy lifting of venture workflows. Faster 
              analysis, tighter feedback loops, and more space for high-conviction bets.
            </motion.p>

            {/* Powered by AI Agents */}
            <motion.div 
              className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm"
              initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
              animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : { opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.8 } }}
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
                  <h4 className="text-xl font-bold">AI Agents</h4>
                </div>
              </div>
              
              <div className="space-y-4">
                {aiAgents.map((agent, index) => (
                  <motion.div 
                    key={agent.name} 
                    className="flex items-center space-x-4 group"
                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                    animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, x: -20, filter: "blur(4px)" }}
                    transition={{ duration: 1.0, delay: 0.8 + index * 0.15, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.6 } }}
                  >
                    <div 
                      className={`w-10 h-10 ${agent.color} rounded-lg flex items-center justify-center text-gray-700 transition-colors duration-300`}
                    >
                      {agent.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">{agent.name}</h5>
                      <p className="text-sm text-gray-600">{agent.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tribute Labs Project */}
            <motion.div 
              className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm"
              initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
              animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : { opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
              transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.8 } }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  T
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2">A Tribute Labs Project</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Tribute Labs has supported over 70 companies, empowering more than 300 projects through technical
                    guidance, architecture, and hyperion innovations. Our venture AI systems communicate these KPIs
                    providing the tools and support they need to scale with confidence.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Human Support */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(8px)" }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.8 } }}
          >
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(4px)" }}
              transition={{ duration: 1.0, delay: 0.5, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.7 } }}
            >
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Supported by</h3>
              <h4 className="text-xl font-bold mb-6">Humans</h4>
            </motion.div>

            {/* Team Member Card with Enhanced LED Effect */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
              animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : { opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 1.4, delay: 0.7, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 1.0 } }}
            >
              {/* Enhanced LED Ribbon Effect */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 p-8 text-center shadow-sm border border-gray-200">
                {/* Bright LED Ribbon Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-400 shadow-lg shadow-blue-400/50"></div>
                <div className="absolute inset-[2px] rounded-xl bg-gradient-to-br from-green-200 via-blue-200 to-purple-200"></div>
                
                {/* Glowing LED Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-30"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 1), transparent)',
                    filter: 'blur(1px)',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Additional Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-300/20 to-transparent animate-pulse"></div>
                
                <div className="relative z-10">
                  <div className="relative inline-block">
                    <div 
                      className="w-48 h-48 bg-gray-300 rounded-lg mx-auto mb-4 overflow-hidden transition-transform duration-300 hover:shadow-lg"
                    >
                      {/* Placeholder for team member photo */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white text-2xl font-bold">
                        RM
                      </div>
                    </div>
                    <motion.div 
                      className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm shadow-lg"
                      initial={{ opacity: 0, scale: 0, filter: "blur(4px)" }}
                      animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0, filter: "blur(4px)" }}
                      transition={{ duration: 1.0, delay: 1.5, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.6 } }}
                    >
                      ✓
                    </motion.div>
                  </div>
                  <h5 className="font-bold text-gray-900 text-lg">Ryan Hoover</h5>
                  <p className="text-sm text-gray-600">Founder & Product Expert</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AISpeedSection
