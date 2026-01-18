import { useState } from 'react'
import emailjs from '@emailjs/browser'

interface ContactFormProps {
  initialSubject?: string
  initialMessage?: string
}

const ContactForm = ({ initialSubject = '', initialMessage = '' }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    projectType: '',
    timeline: '',
    message: initialMessage,
    subject: initialSubject
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  // ⭐ EMAILJS CONFIGURATION - UPDATE THESE VALUES ⭐
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_1ristks', // Your Service ID from screenshot
    TEMPLATE_ID: 'template_l11ox5k', // Get from EmailJS dashboard
    PUBLIC_KEY: 'lV85dNEjDx1-FB7G6', // Get from EmailJS → API Keys
    TO_EMAIL: 'aziron.enterprise@gmail.com' // Your email address
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Send email to YOUR aziron.enterprise@gmail.com account
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          to_email: EMAILJS_CONFIG.TO_EMAIL, // This ensures email goes to you
          from_name: formData.name,
          from_email: formData.email,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service || 'Not specified',
          projectType: formData.projectType || 'Not specified',
          timeline: formData.timeline || 'Not specified',
          subject: formData.subject || `Contact Form: ${formData.service || 'General Inquiry'}`,
          message: formData.message,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString()
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      if (result.text === 'OK') {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          projectType: '',
          timeline: '',
          message: '',
          subject: ''
        })
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      console.error('EmailJS error:', err)
      setError('Failed to send message. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const openQuickInquiry = (type: string) => {
    // Fallback to Gmail for quick inquiries
    const subject = encodeURIComponent(`Quick ${type} Inquiry`)
    const body = encodeURIComponent(`Hello AZIRON Team,\n\nI'm interested in ${type}.\n\nPlease send me:\n• Service information\n• Pricing details\n• Availability\n\nBest regards,\n[Your Name]`)
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAILJS_CONFIG.TO_EMAIL}&su=${subject}&body=${body}`, '_blank')
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-aziron-secondary mb-2">Send Us a Message</h2>
        <p className="text-gray-600">Fill out the form below and we'll respond within 24 hours</p>
      </div>

      {/* Quick Inquiry Buttons */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-700 mb-4">Quick Inquiries:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => openQuickInquiry('Solar Installation')}
            className="bg-aziron-light text-aziron-secondary py-2 px-3 rounded-lg hover:bg-aziron-accent transition-colors text-sm"
          >
            Solar Quote
          </button>
          <button
            onClick={() => openQuickInquiry('Construction')}
            className="bg-aziron-light text-aziron-secondary py-2 px-3 rounded-lg hover:bg-aziron-accent transition-colors text-sm"
          >
            Construction
          </button>
          <button
            onClick={() => openQuickInquiry('Consultation')}
            className="bg-aziron-light text-aziron-secondary py-2 px-3 rounded-lg hover:bg-aziron-accent transition-colors text-sm"
          >
            Consultation
          </button>
          <button
            onClick={() => openQuickInquiry('Maintenance')}
            className="bg-aziron-light text-aziron-secondary py-2 px-3 rounded-lg hover:bg-aziron-accent transition-colors text-sm"
          >
            Maintenance
          </button>
        </div>
      </div>

      {/* Success/Error Messages */}
      {isSubmitted && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          ✅ Message sent successfully to AZIRON team! We'll respond within 24 hours.
        </div>
      )}

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          ⚠️ {error}
          <div className="mt-2 text-sm">
            You can also email us directly at: <a href={`mailto:${EMAILJS_CONFIG.TO_EMAIL}`} className="underline">{EMAILJS_CONFIG.TO_EMAIL}</a>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form fields remain exactly the same as before */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aziron-primary focus:border-transparent transition-all"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aziron-primary focus:border-transparent transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aziron-primary focus:border-transparent transition-all"
              placeholder="+966 123 456 789"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Service Interest *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aziron-primary focus:border-transparent transition-all"
            >
              <option value="">Select a service</option>
              <option value="Solar Installation">Solar Panel Installation</option>
              <option value="Energy Storage">Energy Storage Solutions</option>
              <option value="Construction">Construction Services</option>
              <option value="Renovation">Renovations & Remodeling</option>
              <option value="Consultation">Consultation & Design</option>
              <option value="Maintenance">Maintenance Services</option>
              <option value="Multiple Services">Multiple Services</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Project Type
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aziron-primary focus:border-transparent transition-all"
            >
              <option value="">Select project type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
              <option value="Government">Government/Municipal</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Timeline
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aziron-primary focus:border-transparent transition-all"
            >
              <option value="">Select timeline</option>
              <option value="Immediate">Immediate (Within 1 month)</option>
              <option value="1-3 Months">1-3 Months</option>
              <option value="3-6 Months">3-6 Months</option>
              <option value="6+ Months">6+ Months (Planning)</option>
              <option value="Not Sure">Not Sure Yet</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aziron-primary focus:border-transparent transition-all"
            placeholder="What would you like to discuss?"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Your Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aziron-primary focus:border-transparent transition-all resize-none"
            placeholder="Please describe your project requirements, location, specific needs, and any questions you have..."
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 flex-1 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending to AZIRON...
              </>
            ) : (
              <>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Send to AZIRON Team
              </>
            )}
          </button>
          
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              Directly to: aziron.enterprise@gmail.com
            </p>
            <p className="text-xs text-gray-500">
              Secure & encrypted delivery
            </p>
          </div>
        </div>
      </form>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-aziron-primary">24h</div>
            <div className="text-sm text-gray-600">Response Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-aziron-primary">100%</div>
            <div className="text-sm text-gray-600">Privacy Protected</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-aziron-primary">Direct</div>
            <div className="text-sm text-gray-600">To AZIRON Team</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm