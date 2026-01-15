const CTABanner = () => {
  const openQuoteEmail = () => {
    const companyEmail = 'aziron.enterprise@gmail.com'
    const subject = encodeURIComponent('Project Inquiry from Homepage')
    const body = encodeURIComponent(`Hello AZIRON Team,\n\nI visited your website and would like to discuss:\n\n• Project type: \n• Timeline: \n• Budget: \n• Location: \n\nPlease contact me for a consultation.\n\nBest regards,\n[Your Name]`)
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-aziron-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Transform your property with sustainable energy and expert construction. Get a free consultation today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <button
            onClick={openQuoteEmail}
            className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 text-lg flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Start with Email Quote
          </button>
          <a
            href="tel:+923204671763"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            Call for Quick Chat
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
          <h4 className="text-2xl font-semibold mb-4">What's Next?</h4>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">1</div>
              <div>
                <h5 className="font-semibold mb-2">Initial Consultation</h5>
                <p className="text-sm opacity-90">Discuss your project requirements</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl">2</div>
              <div>
                <h5 className="font-semibold mb-2">Custom Proposal</h5>
                <p className="text-sm opacity-90">Receive detailed project plan</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl">3</div>
              <div>
                <h5 className="font-semibold mb-2">Project Execution</h5>
                <p className="text-sm opacity-90">Expert implementation & support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTABanner