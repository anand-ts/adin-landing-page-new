import CompanyCard from './CompanyCard'
import { PORTFOLIO_COMPANIES } from '@/lib/constants'

const LiveReports = () => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 min-w-[280px]">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-900">Live Reports</span>
        </div>

        {/* Company Cards */}
        <div className="space-y-3">
          {PORTFOLIO_COMPANIES.slice(0, 3).map((company, index) => (
            <CompanyCard 
              key={company.name}
              name={company.name}
              description={company.description}
              logo={company.logo}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button className="text-sm text-primary hover:text-primary-dark transition-colors">
            View All Recent Reports →
          </button>
        </div>
      </div>
    </div>
  )
}

export default LiveReports
