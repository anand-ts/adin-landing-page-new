'use client'

import { useState, useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  continuous?: boolean
  incrementRate?: number
}

const AnimatedCounter = ({ end, suffix = '', prefix = '', duration = 2000, className = '', continuous = false, incrementRate = 5000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState<string>('0')
  const [hasStarted, setHasStarted] = useState(false)
  const [currentValue, setCurrentValue] = useState(end)
  const countRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          
          const startTime = Date.now()
          const startValue = 0
          
          const updateCount = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            // Easing function for smooth animation
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const currentValue = startValue + (end - startValue) * easeOut
            
            // Format number based on whether it's a decimal
            const displayValue = end % 1 === 0 
              ? Math.floor(currentValue).toLocaleString()
              : currentValue.toFixed(1)
            
            setCount(displayValue)
            
            if (progress < 1) {
              requestAnimationFrame(updateCount)
            }
          }
          
          requestAnimationFrame(updateCount)
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasStarted])

  // Separate effect for continuous counting
  useEffect(() => {
    if (continuous && hasStarted) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCurrentValue(prev => {
            const newValue = prev + 1
            const displayValue = newValue.toLocaleString()
            setCount(displayValue)
            return newValue
          })
        }, incrementRate)
        
        return () => clearInterval(interval)
      }, duration + 500) // Start continuous counting after initial animation plus small delay
      
      return () => clearTimeout(timer)
    }
  }, [continuous, hasStarted, duration, incrementRate])

  return (
    <div ref={countRef} className={className}>
      {prefix}{count}{suffix}
    </div>
  )
}

const MemberStats = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join <AnimatedCounter 
              end={10000} 
              suffix="+" 
              duration={2000}
              className="inline"
              continuous={true}
              incrementRate={3000}
            /> active members
            <br />
            earning with <span className="text-purple-600">ADIN</span>.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our members are making real money through deal submissions and network participation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <AnimatedCounter 
              end={10000} 
              suffix="+" 
              duration={2500}
              className="text-4xl font-bold text-purple-600 mb-2"
            />
            <div className="text-gray-600">Active Members</div>
          </div>
          <div className="text-center">
            <AnimatedCounter 
              end={2.4} 
              prefix="$"
              suffix="M" 
              duration={2200}
              className="text-4xl font-bold text-green-600 mb-2"
            />
            <div className="text-gray-600">Paid to Members</div>
          </div>
          <div className="text-center">
            <AnimatedCounter 
              end={167} 
              suffix="+" 
              duration={2800}
              className="text-4xl font-bold text-orange-600 mb-2"
            />
            <div className="text-gray-600">Deals Submitted</div>
          </div>
          <div className="text-center">
            <AnimatedCounter 
              end={10} 
              suffix="%" 
              duration={1800}
              className="text-4xl font-bold text-blue-600 mb-2"
            />
            <div className="text-gray-600">Average Carry</div>
          </div>
        </div>

        {/* Member Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-purple-600 rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-4">Submit Deals</h3>
            <p className="text-gray-600">
              Find promising startups and submit them for ADIN review. Earn 10% carry on successful investments.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-green-600 rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-4">Network Access</h3>
            <p className="text-gray-600">
              Connect with other investors, founders, and industry experts in our exclusive member network.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-orange-600 rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-4">AI Insights</h3>
            <p className="text-gray-600">
              Get access to ADIN&apos;s AI-powered deal analysis and market intelligence tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MemberStats
