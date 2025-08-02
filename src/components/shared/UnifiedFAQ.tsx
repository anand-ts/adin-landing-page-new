'use client'

import { useState } from 'react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'general' | 'pricing'
}

interface UnifiedFAQProps {
  faqs?: FAQItem[]
}

const UnifiedFAQ = ({ faqs: customFaqs }: UnifiedFAQProps) => {
  const [openQuestion, setOpenQuestion] = useState<string | null>('what-is-adin')
  const [activeCategory, setActiveCategory] = useState<'general' | 'pricing'>('general')

  const defaultFaqs: FAQItem[] = [
    {
      id: 'what-is-adin',
      question: 'What is Adin?',
      answer: 'ADIN is an AI-first, community-powered venture DAO that combines a network of AI agents with human insight to identify and fund the best early-stage startups. Its engine ingests a company\'s deck or website and, in minutes, produces a comprehensive report covering team background, market landscape, competitive positioning, and evaluations from a five-agent AI "venture board." Investors review these data-rich findings and vote. By marrying AI\'s analytical speed with the collective wisdom of a diverse investor community, ADIN enables faster, more transparent capital deployment and broader access to high-potential deals.',
      category: 'general'
    },
    {
      id: 'how-is-adin-structured',
      question: 'How is ADIN structured?',
      answer: 'ADIN operates as a hybrid venture capital structure combining traditional VC principles with AI-driven investment strategies and community governance. Our structure includes AI agents for initial screening and analysis, a network of experienced operators and investors for validation, and a systematic approach to early-stage investing.',
      category: 'general'
    },
    {
      id: 'what-industries-does-adin-focus-on',
      question: 'What industries does ADIN focus on?',
      answer: 'We focus primarily on biotech, creative tools, blockchain technologies, and AI/machine learning companies. Our thesis centers on backing teams building foundational technologies that will shape the future of the internet and human interaction with technology.',
      category: 'general'
    },
    {
      id: 'will-tokenization-fit-into-adins-model',
      question: 'Will tokenization fit into ADIN\'s model?',
      answer: 'We\'re exploring how tokenization and Web3 technologies can enhance our investment model and community engagement. While not core to our current operations, we see potential for blockchain technologies to improve transparency, liquidity, and community participation in venture investing.',
      category: 'general'
    },
    {
      id: 'how-can-i-get-join-the-network',
      question: 'How can I get join the network?',
      answer: 'You can join the ADIN network by applying through our platform. We welcome investors, operators, and founders who share our vision of combining AI efficiency with human judgment in early-stage investing. Different membership tiers offer varying levels of access and participation.',
      category: 'general'
    },
    {
      id: 'who-made-adin',
      question: 'Who made ADIN?',
      answer: 'ADIN was created by a team of experienced venture investors, AI researchers, and technology operators. The project combines decades of investing experience with cutting-edge AI technology to reimagine how early-stage venture capital can operate at scale while maintaining high conviction investing principles.',
      category: 'general'
    }
  ]

  const faqs = customFaqs || defaultFaqs
  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory)

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently
            <br />
            asked questions.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Here is a collection of what is asked most about ADIN.
          </p>
          
          {/* Category Filter Tags */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveCategory('general')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'general'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              General
            </button>
            <button
              onClick={() => setActiveCategory('pricing')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'pricing'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Pricing
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleQuestion(faq.id)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ml-4 ${
                    openQuestion === faq.id ? 'rotate-180' : ''
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
              {openQuestion === faq.id && (
                <div className="px-6 pb-6">
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

export default UnifiedFAQ
