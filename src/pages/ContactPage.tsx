import ContactForm from '../components/ContactForm'
import ContactMap from '../components/ContactMap'
import ContactHours from '../components/ContactHours'
import ContactTeam from '../components/ContactTeam'
import { openWhatsApp } from '../utils/whatsapp'

const ContactPage = () => {
  // WhatsApp numbers for different departments
  const whatsappNumbers = {
    general: '+923204671763', // Basit's number for general inquiries
    sales: '+966501361323',   // Haider's number for sales
    support: '+923204671763', // Basit's number for support
    technical: '+923224773766' // Anum's number for technical
  }

  const openGeneralWhatsApp = () => {
    const message = 'Hello AZIRON Team, I would like to get more information about your services.'
    openWhatsApp(whatsappNumbers.general, message)
  }

  const openSalesWhatsApp = () => {
    const message = 'Hello AZIRON Sales Team, I would like to discuss solar energy solutions and get a quote.'
    openWhatsApp(whatsappNumbers.sales, message)
  }

  const openTechnicalWhatsApp = () => {
    const message = 'Hello AZIRON Technical Team, I have technical questions about your construction services.'
    openWhatsApp(whatsappNumbers.technical, message)
  }

  return (
    <div className="pt-8 pb-20">
      {/* Hero Section for Contact Page */}
      <div className="bg-gradient-to-r from-aziron-primary/10 to-aziron-accent/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-aziron-secondary mb-6">
            Get in <span className="text-aziron-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help with your energy and construction projects. 
            Reach out for consultations, quotes, or general inquiries.
          </p>
          
          {/* Quick Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={openGeneralWhatsApp}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
              </svg>
              Chat on WhatsApp
            </button>
            
            <a
              href="tel:+923204671763"
              className="bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now
            </a>
            
            <a
              href="mailto:aziron.enterprise@gmail.com"
              className="bg-aziron-accent text-aziron-secondary px-6 py-3 rounded-lg font-semibold hover:bg-aziron-primary hover:text-white hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm 
              initialSubject="New Project Inquiry"
              initialMessage="Hello AZIRON Team, I would like to discuss:• Project Type: Location: \n• Timeline: \n• Budget Range: \n• Specific Requirements: \n\nPlease contact me to schedule a consultation.\n\nBest regards,\n[Your Name]"
            />
          </div>
          <div className="space-y-8">
            <ContactHours />
            <ContactTeam />
            
            {/* WhatsApp Quick Links */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Quick WhatsApp Support</h3>
              <div className="space-y-4">
                <button
                  onClick={openGeneralWhatsApp}
                  className="w-full bg-white text-green-700 py-3 px-4 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                    </svg>
                    <span>General Inquiries</span>
                  </div>
                  <span className="text-sm">+92 3204671763</span>
                </button>
                
                <button
                  onClick={openSalesWhatsApp}
                  className="w-full bg-white text-green-700 py-3 px-4 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                    </svg>
                    <span>Solar & Energy Sales</span>
                  </div>
                  <span className="text-sm">+966 501361323</span>
                </button>
                
                <button
                  onClick={openTechnicalWhatsApp}
                  className="w-full bg-white text-green-700 py-3 px-4 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                    </svg>
                    <span>Technical Support</span>
                  </div>
                  <span className="text-sm">+92 3224773766</span>
                </button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-green-200">
                <p className="text-sm text-green-700">
                  <strong>Note:</strong> WhatsApp messages typically receive responses within 1-2 hours during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactMap />
      
      {/* Additional Contact Options */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-aziron-primary to-aziron-secondary rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-3">Phone Support</h3>
              <div className="space-y-2">
                <a href="tel:+966501361323" className="block text-lg hover:text-aziron-accent transition-colors">
                  +966 501361323
                </a>
                <a href="tel:+923204671763" className="block text-lg hover:text-aziron-accent transition-colors">
                  +92 3204671763
                </a>
                <a href="tel:+923224773766" className="block text-lg hover:text-aziron-accent transition-colors">
                  +92 3224773766
                </a>
              </div>
              <p className="mt-4 text-aziron-light">Available 8 AM - 6 PM (GMT+3)</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold mb-3">Email Support</h3>
              <a 
                href="mailto:aziron.enterprise@gmail.com" 
                className="text-lg hover:text-aziron-accent transition-colors break-all block"
              >
                aziron.enterprise@gmail.com
              </a>
              <p className="mt-4 text-aziron-light">Response within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3">Instant Support</h3>
              <button
                onClick={openGeneralWhatsApp}
                className="bg-white text-aziron-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                </svg>
                Start WhatsApp Chat
              </button>
              <p className="mt-4 text-aziron-light">Fastest response time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage