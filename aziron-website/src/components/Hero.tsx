const Hero = () => {
  // Function to open email client
  const openQuoteEmail = () => {
    const companyEmail = 'aziron.enterprise@gmail.com'
    const subject = encodeURIComponent('Quote Request from AZIRON Website')
    const body = encodeURIComponent(`Hello AZIRON Team,\n\nI would like to request a quote for your services.\n\nBest regards,\n[Your Name]`)
    
    // Try to open Gmail compose window
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
  }

  return (
    <section className="relative bg-gradient-to-r from-aziron-light to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Sustainable Energy
              <span className="block text-aziron-primary mt-2">Expert Construction</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              AZIRON ENERGY & BUILD provides integrated solar energy solutions and construction services. 
              Transform your property with sustainable energy and expert construction.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={openQuoteEmail}
                className="bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 text-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Get Free Quote
              </button>
              <a 
                href="#services" 
                className="bg-aziron-accent text-aziron-secondary px-8 py-4 rounded-lg font-semibold hover:bg-aziron-primary hover:text-white hover:shadow-lg transition-all duration-300 text-lg"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-aziron-accent rounded-2xl p-8 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Solar Installation"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
