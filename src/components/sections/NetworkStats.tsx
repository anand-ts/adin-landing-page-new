'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const NetworkStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Network Stats */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            ADIN is a global network of{" "}
            <span className="font-bold text-gray-900 text-2xl md:text-3xl">
              1,2302 humans
            </span>
            <br />
            sharing insights and knowledge as Investors,
            <br />
            Members, & Founders.
          </p>
          
          {/* Progress dots */}
          <motion.div 
            className="flex justify-center items-center space-x-2 mt-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="w-3 h-3 bg-primary rounded-full" />
            <div className="w-3 h-3 bg-gray-300 rounded-full" />
            <div className="w-3 h-3 bg-gray-300 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default NetworkStats
