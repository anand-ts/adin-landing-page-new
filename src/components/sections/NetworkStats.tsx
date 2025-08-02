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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(6px)" }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.7 } }}
          >
            ADIN is a global network of{" "}
            <motion.span 
              className="font-bold text-gray-900 text-2xl md:text-3xl"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(4px)" }}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.8 } }}
            >
              1,2302 humans
            </motion.span>
            <br />
            sharing insights and knowledge as Investors,
            <br />
            Members, & Founders.
          </motion.p>
          
          {/* Progress dots */}
          <motion.div 
            className="flex justify-center items-center space-x-2 mt-8"
            initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 25, filter: "blur(4px)" }}
            transition={{ duration: 1.0, delay: 0.9, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.6 } }}
          >
            <motion.div 
              className="w-3 h-3 bg-primary rounded-full"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            />
            <motion.div 
              className="w-3 h-3 bg-gray-300 rounded-full"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            />
            <motion.div 
              className="w-3 h-3 bg-gray-300 rounded-full"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default NetworkStats
