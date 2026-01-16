import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import { openWhatsApp, DEFAULT_NUMBER } from '../utils/whatsapp'

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
    const subject = encodeURIComponent('Quick Quote Request from AZIRON Website')
    const body = encodeURIComponent(`Hello AZIRON Team,\n\nI would like to request a quick quote for your services.\n\nPlease contact me with more information.\n\nBest regards,\n[Your Name]`)
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    if (isMobile || window.innerWidth < 768) {
      // Enhanced mobile email opening with multiple fallbacks
      openMobileEmail(companyEmail, subject, body)
    } else {
      // Use Gmail for desktop
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${subject}&body=${body}`
      window.open(gmailUrl, '_blank')
    }
    
    // Close mobile menu if open
    if (window.innerWidth < 768) {
      setIsMenuOpen(false)
    }
  }

  // Special function for mobile email opening with multiple fallbacks
  const openMobileEmail = (email: string, subject: string, body: string) => {
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`
    const gmailAppLink = `https://mail.google.com/mail/?extsrc=mailto&url=${encodeURIComponent(mailtoLink)}`
    
    // Try multiple methods in sequence
    const methods = [
      // Method 1: Direct Gmail app link (best for Android with Gmail)
      () => {
        window.location.href = gmailAppLink
        return true
      },
      // Method 2: Standard mailto with timeout
      () => {
        const a = document.createElement('a')
        a.href = mailtoLink
        a.target = '_blank'
        a.rel = 'noopener noreferrer'
        a.style.display = 'none'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        return true
      },
      // Method 3: window.location fallback
      () => {
        window.location.href = mailtoLink
        return true
      },
      // Method 4: If all else fails, show instructions
      () => {
        alert(`Please email us at: ${email}\n\nSubject: ${decodeURIComponent(subject)}\n\nCopy this email address and send us a message.`)
        return false
      }
    ]

    // Try each method with delay
    let methodIndex = 0
    const tryMethod = () => {
      if (methodIndex < methods.length) {
        try {
          const success = methods[methodIndex]()
          if (!success && methodIndex < methods.length - 1) {
            // Try next method after delay
            setTimeout(() => {
              methodIndex++
              tryMethod()
            }, 500)
          }
        } catch (error) {
          // Try next method on error
          setTimeout(() => {
            methodIndex++
            tryMethod()
          }, 500)
        }
      }
    }
    
    tryMethod()
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
          <nav className="hidden md:flex space-x-4 items-center ml-auto mr-4">
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

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* WhatsApp Button */}
            <button
              onClick={() => openWhatsApp(DEFAULT_NUMBER, 'Hello AZIRON Team, I would like to get more information about your services.')}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
              </svg>
              WhatsApp
            </button>

            {/* Email Quote Button */}
            <button
              onClick={openQuoteEmail}
              className="bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Get Quote
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
              
              <div className="grid grid-cols-2 gap-3 pt-4">
                <button
                  onClick={() => {
                    openWhatsApp(DEFAULT_NUMBER, 'Hello AZIRON Team, I would like to get more information about your services.')
                    setIsMenuOpen(false)
                  }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                  </svg>
                  WhatsApp
                </button>
                
                <button
                  onClick={openQuoteEmail}
                  className="bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header