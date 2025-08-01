'use client'

import { useState } from 'react'

const FoundersFAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const faqs = [
    {
      id: 'what-is-adin',
      question: 'What is ADIN?',
      answer: 'ADIN is an AI-first, community-powered venture DAO that combines a network of AI agents with human insight to identify and back the best early-stage startups. Its engine ingests a company\'s deck or website and, in minutes, produces a comprehensive report covering team composition, product differentiation, market size, and more. By marrying AI\'s analytical speed with the collective wisdom of a diverse investor community, ADIN enables faster, more intelligent capital deployment and broader access to high-potential deals.'
    },
    {
      id: 'how-is-adin-structured',
      question: 'How is ADIN structured?',
      answer: 'ADIN operates as a decentralized autonomous organization (DAO) structure that combines traditional venture capital principles with AI-driven decision making and community governance. The platform uses smart contracts and tokenized governance to enable distributed investment decisions while maintaining professional investment standards.'
    },
    {
      id: 'what-industries-does-adin-focus-on',
      question: 'What industries does ADIN focus on?',
      answer: 'ADIN focuses primarily on early-stage technology companies across biotech, fintech, AI/ML, SaaS, and emerging technologies. Our AI evaluation engine is particularly effective at analyzing technical innovations and market opportunities in these rapidly evolving sectors.'
    },
    {
      id: 'wii-tokenization-fit-into-adins-model',
      question: 'Wii tokenization fit into ADIN\'s model?',
      answer: 'Tokenization enables ADIN to democratize access to venture capital by allowing fractional ownership of investment opportunities. Through blockchain technology, we can offer transparent, liquid, and programmable investment vehicles that traditional VC structures cannot provide.'
    },
    {
      id: 'how-can-i-get-join-the-network',
      question: 'How can I get join the network?',
      answer: 'You can join the ADIN network by applying through our platform. We welcome entrepreneurs, investors, and industry experts who want to participate in our community-driven investment ecosystem. The application process includes verification of your background and alignment with our investment philosophy.'
    },
    {
      id: 'who-made-adin',
      question: 'Who made ADIN?',
      answer: 'ADIN was created by a team of seasoned venture capitalists, AI researchers, and blockchain developers who recognized the need for more efficient and accessible venture capital. Our founding team combines decades of investment experience with cutting-edge technology expertise.'
    }
  ]

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Frequently
            <br />
            asked questions.
          </h2>
          <p className="text-gray-600">
            Here is a collection of what is asked most about ADIN.
          </p>
          <div className="inline-block mt-4 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            More FAQs
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openQuestion === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openQuestion === faq.id && (
                <div className="px-6 pb-5 bg-gray-50 border-t border-gray-200">
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

export default FoundersFAQ
