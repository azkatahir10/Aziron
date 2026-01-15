import ContactForm from '../components/ContactForm'
import ContactMap from '../components/ContactMap'
import ContactHours from '../components/ContactHours'
import ContactTeam from '../components/ContactTeam'
import { DEFAULT_NUMBER, openWhatsApp } from '../utils/whatsapp'

const ContactPage = () => {
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
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm 
              initialSubject="New Project Inquiry"
              initialMessage="Hello AZIRON Team,\n\nI would like to discuss:\n\n• Project Type: \n• Location: \n• Timeline: \n• Budget Range: \n• Specific Requirements: \n\nPlease contact me to schedule a consultation.\n\nBest regards,\n[Your Name]"
            />
          </div>
          <div className="space-y-8">
            <ContactHours />
            <ContactTeam />
          </div>
        </div>
      </div>

      <ContactMap />
    </div>
  )
}

export default ContactPage