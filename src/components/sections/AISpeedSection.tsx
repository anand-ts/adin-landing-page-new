'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { IoSearch, IoFlash, IoTrendingUp, IoBarChart, IoColorPalette, IoPersonOutline } from 'react-icons/io5'

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
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                AI speed.
                <br />
                Human judgment.
              </h2>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                ADIN pairs expert operators with intelligent agents to handle the heavy lifting of venture workflows. Faster 
                analysis, tighter feedback loops, and more space for high-conviction bets.
              </p>
            </div>

            {/* Powered by AI Agents */}
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
                  <h3 className="text-sm font-semibold text-gray-900">Powered by</h3>
                  <h4 className="text-xl font-bold text-gray-900">AI Agents</h4>
                </div>
              </div>
              
              <div className="space-y-4">
                {aiAgents.map((agent, index) => (
                  <motion.div 
                    key={agent.name} 
                    className="flex items-center space-x-4 group hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 + (index * 0.1) }}
                  >
                    <div 
                      className={`w-10 h-10 ${agent.color} rounded-lg flex items-center justify-center text-gray-700 transition-all duration-300 group-hover:scale-110`}
                    >
                      {agent.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900">{agent.name}</h5>
                      <p className="text-sm text-gray-600">{agent.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Human Support */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
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
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-4 group hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white shadow-sm transition-all duration-300 group-hover:scale-110">
                    <IoPersonOutline className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900">Ryan Hoover</h5>
                    <p className="text-sm text-gray-600">Founder & Product Expert</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 group hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
                >
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white shadow-sm transition-all duration-300 group-hover:scale-110">
                    <IoPersonOutline className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900">Sarah Chen</h5>
                    <p className="text-sm text-gray-600">Investment Director</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 group hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white shadow-sm transition-all duration-300 group-hover:scale-110">
                    <IoPersonOutline className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900">Marcus Rodriguez</h5>
                    <p className="text-sm text-gray-600">Technical Advisor</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 group hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
                >
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white shadow-sm transition-all duration-300 group-hover:scale-110">
                    <IoPersonOutline className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900">Emma Thompson</h5>
                    <p className="text-sm text-gray-600">Portfolio Manager</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 group hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut", delay: 0.7 }}
                >
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white shadow-sm transition-all duration-300 group-hover:scale-110">
                    <IoPersonOutline className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900">David Kim</h5>
                    <p className="text-sm text-gray-600">Operations Lead</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tribute Labs Project - Central Piece */}
        <motion.div 
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.8 }}
        >
          <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-lg text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                <Image
                  src="/tl.gif"
                  alt="Tribute Labs"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-xl mb-3">A Tribute Labs Project</h5>
                <p className="text-gray-600 leading-relaxed max-w-lg">
                  Tribute Labs has supported over 70 companies, empowering more than 300 projects through technical
                  guidance, architecture, and hyperion innovations. Our venture AI systems communicate these KPIs
                  providing the tools and support they need to scale with confidence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AISpeedSection
