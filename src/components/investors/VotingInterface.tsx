'use client'

import { useState } from 'react'
import { IoRocketSharp } from 'react-icons/io5'
import Image from 'next/image'
import { motion } from 'framer-motion'

const VotingInterface = () => {
  const [votes, setVotes] = useState({
    scribe: 'for',
    sona: 'against'
  })

  const companies = [
    {
      id: 'scribe',
      name: 'Scribe',
      vote: votes.scribe,
      logo: 'S',
      bgColor: 'bg-blue-600'
    },
    {
      id: 'sona',
      name: 'Sona',
      vote: votes.sona,
      logo: 'S',
      bgColor: 'bg-purple-600'
    }
  ]

  const toggleVote = (companyId: string) => {
    setVotes(prev => ({
      ...prev,
      [companyId]: prev[companyId as keyof typeof prev] === 'for' ? 'against' : 'for'
    }))
  }

  return (
    <div className="space-y-6">
      {/* Frame 1012 Image */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.9 } }}
      >
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/Frame 10122863.png"
            alt="Frame 1012"
            width={500}
            height={350}
            className="w-full h-auto object-cover"
          />
          {/* LED Overlay Effect */}
          <div className="absolute inset-0 border-2 border-purple-400 rounded-2xl shadow-lg shadow-purple-400/30"></div>
        </div>
      </motion.div>
      
      {/* Voting Interface */}
      <motion.div 
        className="bg-black rounded-2xl p-6 text-white relative overflow-hidden max-w-md"
        initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.8 } }}
      >
      {/* Background gradient accent */}
      <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
        100%
      </div>
      
      {/* Close button */}
      <button className="absolute top-4 right-12 text-white/60 hover:text-white">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <IoRocketSharp className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Voting Dashboard</h3>
            <p className="text-xs text-gray-400">Portfolio</p>
          </div>
        </div>
      </div>

      {/* Voting Cards */}
      <div className="space-y-3">
        {companies.map((company) => (
          <div 
            key={company.id}
            className="bg-gray-900 rounded-lg p-3 flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-6 h-6 ${company.bgColor} rounded-full flex items-center justify-center text-xs font-semibold text-white`}>
                {company.logo}
              </div>
              <span className="font-medium text-sm">{company.name}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-400 capitalize">
                {company.vote}
              </span>
              <button
                onClick={() => toggleVote(company.id)}
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                  company.vote === 'for' 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-red-500 hover:bg-red-600'
                }`}
              >
                {company.vote === 'for' ? (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
    </div>
  )
}

export default VotingInterface
