'use client'

import { useState, useEffect } from 'react'

const AnimatedText = () => {
  const words = ['biotech', 'creative tools', 'blockchain']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000) // Change word every 2 seconds

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className="inline-block relative">
      <span className="inline bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-extrabold">
        {words[currentWordIndex]}
      </span>
    </div>
  )
}

export default AnimatedText
