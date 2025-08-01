'use client'

import { useState } from 'react'

const MembersFAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const faqs = [
    {
      id: 'what-is-adin',
      question: 'What is ADIN?',
      answer: 'ADIN is an artificial intelligence-powered venture capital fund focused on biotech and healthcare innovation. We leverage advanced AI to identify and analyze the most promising opportunities in the life sciences sector, providing both capital and expertise to accelerate breakthrough technologies that can improve human health and wellbeing.'
    },
    {
      id: 'how-is-adin-structured',
      question: 'How is ADIN structured?',
      answer: 'ADIN operates as a hybrid venture capital structure combining traditional VC principles with AI-driven investment strategies. Our fund structure allows for both institutional and individual participation, with clear governance protocols and transparent fee structures designed to align interests between all stakeholders.'
    },
    {
      id: 'what-industries-does-adin-focus-on',
      question: 'What industries does ADIN focus on?',
      answer: 'ADIN primarily focuses on biotech, medtech, digital health, pharmaceutical technologies, diagnostic tools, therapeutic platforms, and other life science innovations. We are particularly interested in companies leveraging AI, machine learning, and data science to advance healthcare outcomes.'
    },
    {
      id: 'we-interpretation-in-adin-network',
      question: 'We interpretation in the ADIN network?',
      answer: 'The ADIN network consists of industry experts, successful entrepreneurs, research scientists, medical professionals, and strategic partners across the healthcare ecosystem. Members gain access to exclusive deal flow, mentorship opportunities, industry insights, and collaborative partnerships that can accelerate business growth.'
    },
    {
      id: 'how-can-i-get-into-the-network',
      question: 'How can I get into the network?',
      answer: 'You can join the ADIN network by applying through our membership program. We look for individuals with relevant industry experience, deal sourcing capabilities, or domain expertise in biotech and healthcare. The application process includes background verification and alignment assessment with our investment thesis.'
    },
    {
      id: 'who-made-adin',
      question: 'Who made ADIN?',
      answer: 'ADIN was founded by a team of experienced venture capitalists, AI researchers, and biotech industry veterans. Our founding team combines decades of investment experience with deep technical expertise in artificial intelligence and life sciences, creating a unique approach to healthcare venture capital.'
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

export default MembersFAQ
