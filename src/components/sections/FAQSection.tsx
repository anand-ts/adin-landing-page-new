'use client'

import { useState } from 'react'

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Adin?",
      answer: "ADIN is an AI-first, community-powered venture club that combines a network of AI agents with human insight to identify and fund the best early-stage startups. We source insights from a community's stock all websites and, in minutes, produces a comprehensive report covering team background, market landscape, competitive positioning, and evaluations from A-tier expert AI 'venture capital' investors review these data points combined business intelligence metrics like transparent capital development and founder access to high-potential deals."
    },
    {
      question: "How is ADIN structured?",
      answer: "ADIN operates as a hybrid venture fund combining AI-powered deal sourcing and analysis with human expertise and community insights. Our structure includes AI agents for initial screening and analysis, a network of experienced operators and investors for validation, and a systematic approach to early-stage investing."
    },
    {
      question: "What industries does ADIN focus on?",
      answer: "We focus primarily on biotech, creative tools, blockchain technologies, and AI/machine learning companies. Our thesis centers on backing teams building foundational technologies that will shape the future of the internet and human interaction with technology."
    },
    {
      question: "Will tokenization fit into ADIN's model?",
      answer: "We're exploring how tokenization and Web3 technologies can enhance our investment model and community engagement. While not core to our current operations, we see potential for blockchain technologies to improve transparency, liquidity, and community participation in venture investing."
    },
    {
      question: "How can I get join the network?",
      answer: "You can join the ADIN network by applying through our platform. We welcome investors, operators, and founders who share our vision of combining AI efficiency with human judgment in early-stage investing. Different membership tiers offer varying levels of access and participation."
    },
    {
      question: "Who made ADIN?",
      answer: "ADIN was created by a team of experienced venture investors, AI researchers, and technology operators. The project combines decades of investing experience with cutting-edge AI technology to reimagine how early-stage venture capital can operate at scale while maintaining high conviction investing principles."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Frequently
            <br />
            asked questions.
          </h2>
          <p className="text-gray-600 text-lg">
            Here is a collection of what is asked most about ADIN.
          </p>
          
          {/* Category Tags */}
          <div className="flex justify-center space-x-4 mt-8">
            <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
              General
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
              Pricing
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openItem === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openItem === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
