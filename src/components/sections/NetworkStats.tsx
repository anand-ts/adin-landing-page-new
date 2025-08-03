'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const NetworkStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  return (
    <section ref={ref} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Bold Network Statement - Centerpiece */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Main Statement */}
          <div className="relative">
            {/* Background decorative element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
            </div>
            
            {/* Text Content */}
            <div className="relative z-10 py-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                ADIN is a global network of{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  1,2302 humans
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
                sharing insights and knowledge as{" "}
                <span className="font-semibold text-blue-600">Investors</span>,{" "}
                <span className="font-semibold text-green-600">Members</span>, &{" "}
                <span className="font-semibold text-purple-600">Founders</span>.
              </p>

              {/* Bottom dot border */}
              <motion.div 
                className="flex justify-center items-center space-x-2 mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full opacity-50"></div>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full opacity-60"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full opacity-50"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full opacity-70"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full opacity-50"></div>
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full opacity-50"></div>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full opacity-60"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NetworkStats
