import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-aziron-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            {/* Bigger Footer Logo */}
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
                    <div className="text-lg">+966 501361323</div>
                    <div className="text-md">+92 3204671763</div>
                    <div className="text-md">+92 3224773766</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📧</span>
                  <span className="text-lg">aziron.enterprise@gmail.com</span>
                </div>
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