import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ]

  const serviceItems = [
    { name: 'All Services', path: '/services' },
    { name: 'Solar Energy', path: '/services/solar' },
    { name: 'Construction', path: '/services/construction' },
  ]

  const openQuoteEmail = () => {
    const companyEmail = 'aziron.enterprise@gmail.com'
    const subject = encodeURIComponent('Quick Quote Request from Website')
    const body = encodeURIComponent(`Hello AZIRON Team,\n\nI would like to request a quick quote.\n\nBest regards,\n[Your Name]`)
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white shadow-md py-3'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group flex-shrink-0">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="AZIRON Energy & Build" 
                className="h-16 md:h-20 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center ml-auto mr-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-all duration-300 relative group text-lg ${
                  location.pathname === item.path
                    ? 'text-aziron-primary font-semibold'
                    : 'text-gray-700 hover:text-aziron-primary'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-aziron-primary to-aziron-secondary transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`font-medium transition-all duration-300 relative group text-lg flex items-center gap-1 ${
                  location.pathname.includes('/services')
                    ? 'text-aziron-primary font-semibold'
                    : 'text-gray-700 hover:text-aziron-primary'
                }`}
              >
                Services
                <svg 
                  className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className={`absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-aziron-primary to-aziron-secondary transition-all duration-300 group-hover:w-full ${
                  location.pathname.includes('/services') ? 'w-full' : ''
                }`}></span>
              </button>
              
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`block px-4 py-2 text-gray-700 hover:bg-aziron-light hover:text-aziron-primary transition-colors ${
                        location.pathname === service.path ? 'bg-aziron-light text-aziron-primary font-semibold' : ''
                      }`}
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={openQuoteEmail}
              className="bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-aziron-primary hover:text-aziron-secondary transition-colors duration-300 ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white rounded-xl shadow-xl p-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium py-3 px-4 rounded-lg transition-all duration-300 text-lg ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-aziron-light to-aziron-accent text-aziron-primary font-semibold'
                      : 'text-gray-700 hover:bg-aziron-light'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services Dropdown */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-medium text-gray-700 px-4 mb-2">Services</div>
                <div className="space-y-2 pl-8">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`block py-2 rounded-lg transition-all duration-300 ${
                        location.pathname === service.path
                          ? 'text-aziron-primary font-semibold'
                          : 'text-gray-600 hover:text-aziron-primary'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => {
                  openQuoteEmail()
                  setIsMenuOpen(false)
                }}
                className="bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white py-3 px-4 rounded-lg font-semibold text-center hover:shadow-lg transition-colors duration-300 text-lg mt-2 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header