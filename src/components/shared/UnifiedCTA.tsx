'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const UnifiedCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  return (
    <section 
      ref={ref} 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Bokeh Light Effects at Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-48">
        {/* Green bokeh lights */}
        <motion.div 
          className="absolute bottom-12 left-1/4 w-32 h-32 bg-green-400 rounded-full blur-3xl opacity-70"
          animate={{ 
            x: [0, 20, -15, 10, 0],
            y: [0, -10, 15, -5, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-8 left-1/6 w-24 h-24 bg-green-300 rounded-full blur-2xl opacity-60"
          animate={{ 
            x: [0, -15, 20, -10, 0],
            y: [0, 12, -8, 15, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        {/* Yellow bokeh lights */}
        <motion.div 
          className="absolute bottom-16 left-1/2 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-75"
          animate={{ 
            x: [0, 15, -20, 12, 0],
            y: [0, -15, 8, -12, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-6 left-2/3 w-28 h-28 bg-yellow-300 rounded-full blur-2xl opacity-65"
          animate={{ 
            x: [0, -10, 18, -15, 0],
            y: [0, 10, -12, 8, 0],
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        {/* Orange bokeh lights */}
        <motion.div 
          className="absolute bottom-10 right-1/3 w-36 h-36 bg-orange-400 rounded-full blur-3xl opacity-70"
          animate={{ 
            x: [0, 18, -12, 15, 0],
            y: [0, -8, 14, -10, 0],
          }}
          transition={{ 
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-1/2 w-22 h-22 bg-orange-300 rounded-full blur-xl opacity-60"
          animate={{ 
            x: [0, -12, 15, -8, 0],
            y: [0, 15, -10, 12, 0],
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        {/* Purple bokeh lights */}
        <motion.div 
          className="absolute bottom-14 right-1/4 w-30 h-30 bg-purple-500 rounded-full blur-2xl opacity-75"
          animate={{ 
            x: [0, 12, -18, 10, 0],
            y: [0, -12, 10, -15, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-4 right-1/6 w-26 h-26 bg-purple-400 rounded-full blur-xl opacity-65"
          animate={{ 
            x: [0, -15, 12, -8, 0],
            y: [0, 8, -15, 12, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        {/* Pink bokeh lights */}
        <motion.div 
          className="absolute bottom-18 left-1/3 w-28 h-28 bg-pink-400 rounded-full blur-2xl opacity-70"
          animate={{ 
            x: [0, 20, -10, 15, 0],
            y: [0, -10, 18, -8, 0],
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-2 left-3/4 w-24 h-24 bg-pink-300 rounded-full blur-xl opacity-60"
          animate={{ 
            x: [0, -8, 15, -12, 0],
            y: [0, 12, -8, 15, 0],
          }}
          transition={{ 
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        {/* Red bokeh lights */}
        <motion.div 
          className="absolute bottom-22 center w-34 h-34 bg-red-400 rounded-full blur-3xl opacity-65"
          animate={{ 
            x: [0, 15, -20, 10, 0],
            y: [0, -15, 12, -8, 0],
          }}
          transition={{ 
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-8 right-2/3 w-20 h-20 bg-red-300 rounded-full blur-xl opacity-55"
          animate={{ 
            x: [0, -10, 18, -15, 0],
            y: [0, 15, -10, 12, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        {/* Additional vibrant lights */}
        <motion.div 
          className="absolute bottom-6 left-1/8 w-18 h-18 bg-cyan-400 rounded-full blur-lg opacity-70"
          animate={{ 
            x: [0, 12, -15, 8, 0],
            y: [0, -8, 12, -10, 0],
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-24 right-1/8 w-26 h-26 bg-indigo-400 rounded-full blur-2xl opacity-65"
          animate={{ 
            x: [0, -18, 10, -12, 0],
            y: [0, 10, -15, 8, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-12 left-5/6 w-22 h-22 bg-lime-400 rounded-full blur-xl opacity-70"
          animate={{ 
            x: [0, 8, -12, 15, 0],
            y: [0, -12, 8, -15, 0],
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Invest with ADIN.
        </motion.h2>
        
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        >
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-gray-600 text-lg">
              Early access for Tribute Labs Members
            </p>
            <motion.button 
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 inline-flex items-center space-x-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(147, 51, 234, 0.3)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get Started</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Secondary CTA */}
          <motion.div 
            className="pt-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          >
            <p className="text-gray-500 text-lg mb-2">
              Not a Tribute Labs Member?
            </p>
            <button className="text-purple-600 hover:text-purple-700 font-medium text-lg transition-colors duration-300 inline-flex items-center space-x-2">
              <span>Join the Waitlist</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default UnifiedCTA
