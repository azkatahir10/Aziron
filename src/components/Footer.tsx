import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { openWhatsApp, DEFAULT_NUMBER } from '../utils/whatsapp'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-aziron-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="mb-6 inline-block">
              <img 
                src={logo} 
                alt="AZIRON Energy & Build" 
                className="h-20 object-contain hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-300 mb-4 mt-4 text-lg">
              Strength in Energy, Precision in Build.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">Registered with:</p>
              <p className="text-gray-300 text-sm">• Saudi Engineering Council</p>
              <p className="text-gray-300 text-sm">• Pakistan Engineering Council</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition text-lg">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition text-lg">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition text-lg">Services</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white transition text-lg">Our Team</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition text-lg">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 text-lg">Solar Panel Installation</li>
              <li className="text-gray-300 text-lg">Energy Storage Solutions</li>
              <li className="text-gray-300 text-lg">General Contracting</li>
              <li className="text-gray-300 text-lg">Renovations & Remodeling</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">📞</span>
                  <div className="space-y-1">
                    <a href="tel:+966501361323" className="block text-lg hover:text-white transition">
                      +966 501361323
                    </a>
                    <a href="tel:+923204671763" className="block text-lg hover:text-white transition">
                      +92 3204671763
                    </a>
                    <a href="tel:+923224773766" className="block text-lg hover:text-white transition">
                      +92 3224773766
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📧</span>
                  <a href="mailto:aziron.enterprise@gmail.com" className="text-lg hover:text-white transition break-all">
                    aziron.enterprise@gmail.com
                  </a>
                </div>
              </li>
              <li>
                <button
                  onClick={() => openWhatsApp(DEFAULT_NUMBER, 'Hello AZIRON Team, I would like to get more information about your services.')}
                  className="flex items-center space-x-3 text-lg hover:text-white transition"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="text-lg">&copy; {currentYear} AZIRON ENERGY & BUILD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer