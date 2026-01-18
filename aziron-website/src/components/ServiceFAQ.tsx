import { useState } from 'react'

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does a typical solar installation take?",
      answer: "Residential installations typically take 1-3 days, while commercial projects may take 1-3 weeks depending on size and complexity."
    },
    {
      question: "Do you provide maintenance services after installation?",
      answer: "Yes, we offer comprehensive maintenance packages including regular inspections, cleaning, and performance monitoring."
    },
    {
      question: "What certifications do your team members have?",
      answer: "Our team includes Saudi Engineering Council and Pakistan Engineering Council registered engineers, along with NABCEP-certified solar professionals."
    },
    {
      question: "Can you handle both energy and construction aspects of a project?",
      answer: "Absolutely! Our integrated approach allows us to manage complete projects including both construction and energy solutions."
    },
    {
      question: "What is your typical project timeline from inquiry to completion?",
      answer: "Most projects take 4-12 weeks from initial consultation to completion, depending on scope and approvals needed."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we work with several financing partners and can help you explore government incentives and financing options."
    }
  ]

  const openGeneralInquiry = () => {
    const subject = encodeURIComponent("FAQ Inquiry from Website")
    const body = encodeURIComponent(`Hello AZIRON Team,\n\nI have additional questions about your services.\n\nPlease provide information about:\n\n• Specific question:\n• Project details:\n• Timeline:\n\nBest regards,\n[Your Name]`)
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}&body=${body}`, '_blank')
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-aziron-secondary mb-6">
            Frequently Asked <span className="text-aziron-primary">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and processes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  <svg 
                    className={`w-6 h-6 text-aziron-primary transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-aziron-light to-aziron-accent/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-aziron-secondary mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is ready to answer any specific questions about your project
            </p>
            <button
              onClick={openGeneralInquiry}
              className="bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Ask Your Question via Email
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceFAQ