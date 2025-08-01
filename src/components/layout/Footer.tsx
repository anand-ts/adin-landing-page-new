import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Investors', href: '/investors' },
      { name: 'Members', href: '/members' },
      { name: 'Founders', href: '/founders' }
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  }

  return (
    <footer className="gradient-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/adin_wordmark.svg"
                alt="Adin"
                width={100}
                height={40}
                className="h-10 w-auto filter brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              ADIN backs teams building the future of the internet, 
              focusing on Seed Rounds to Series-A investments in biotech, 
              creative tools, and blockchain innovations.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 Adin. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-white/60 text-xs">
                Only for qualified limited partners and accredited investors.
              </span>
              {/* Social Icons could go here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
