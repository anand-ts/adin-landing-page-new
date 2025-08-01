import Image from 'next/image'

interface CompanyCardProps {
  name: string
  description: string
  logo: string
  delay?: number
}

const CompanyCard = ({ name, description, logo, delay = 0 }: CompanyCardProps) => {
  return (
    <div 
      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Company Logo */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
          <Image
            src={logo}
            alt={`${name} logo`}
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Company Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-gray-900 truncate">
          {name}
        </h4>
        <p className="text-xs text-gray-600 truncate">
          {description}
        </p>
      </div>

      {/* Status Indicator */}
      <div className="flex-shrink-0">
        <div className="w-2 h-2 bg-green-500 rounded-full" />
      </div>
    </div>
  )
}

export default CompanyCard
