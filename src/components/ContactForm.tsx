import { useState } from 'react'

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

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const openEmailClient = (e: React.FormEvent) => {
    e.preventDefault()
    
    const companyEmail = 'aziron.enterprise@gmail.com'
    const subject = encodeURIComponent(formData.subject || `Contact Form: ${formData.service || 'General Inquiry'}`)
    
    let body = `CONTACT FORM SUBMISSION\n`
    body += `======================\n\n`
    if (formData.name) body += `Name: ${formData.name}\n`
    if (formData.email) body += `Email: ${formData.email}\n`
    if (formData.phone) body += `Phone: ${formData.phone}\n`
    if (formData.service) body += `Service Interest: ${formData.service}\n`
    if (formData.projectType) body += `Project Type: ${formData.projectType}\n`
    if (formData.timeline) body += `Timeline: ${formData.timeline}\n\n`
    if (formData.message) body += `Message:\n${formData.message}\n\n`
    body += `---\nSubmitted via AZIRON Website Contact Form`
    
    const encodedBody = encodeURIComponent(body)
    
    window.location.href = `mailto:${companyEmail}?subject=${subject}&body=${encodedBody}`
    setIsSubmitted(true)
    
    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitted(false)
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
    }, 3000)
  }

  const openQuickInquiry = (type: string) => {
    const subject = encodeURIComponent(`Quick ${type} Inquiry`)
    const body = encodeURIComponent(`Hello AZIRON Team,\n\nI'm interested in ${type}.\n\nPlease send me:\n• Service information\n• Pricing details\n• Availability\n\nBest regards,\n[Your Name]`)
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}&body=${body}`, '_blank')
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-aziron-secondary mb-2">Send Us a Message</h2>
        <p className="text-gray-600">Fill out the form below and we'll open your email client with all information pre-filled</p>
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

      {isSubmitted && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          ✅ Opening your email client... Please check for a new email draft.
        </div>
      )}

      <form onSubmit={openEmailClient} className="space-y-6">
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
            className="bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 flex-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Open in Email Client
          </button>
          
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              This will open your default email client
            </p>
            <p className="text-xs text-gray-500">
              To: aziron.enterprise@gmail.com
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
            <div className="text-2xl font-bold text-aziron-primary">Free</div>
            <div className="text-sm text-gray-600">Consultation</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm