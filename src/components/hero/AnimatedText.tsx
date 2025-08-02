'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AnimatedText = () => {
  const words = ['biotech', 'creative tools', 'blockchain']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000) // Change word every 3 seconds for smoother experience

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className="inline-block relative min-w-[250px] md:min-w-[300px] text-left">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          className="inline bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut"
          }}
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export default AnimatedText
