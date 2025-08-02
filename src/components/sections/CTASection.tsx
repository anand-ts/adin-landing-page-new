'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Invest with ADIN.
        </motion.h2>
        
        <motion.p 
          className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          Join our network for Tribute Labs Members.
        </motion.p>

        <motion.button 
          className="bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          whileHover={{ 
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span>
            Get Started →
          </span>
        </motion.button>

        <motion.p 
          className="text-sm text-gray-500 mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          Only for qualified limited partners and accredited investors.
        </motion.p>
      </div>
    </section>
  )
}

export default CTASection
