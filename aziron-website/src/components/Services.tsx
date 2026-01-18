import { useInView } from 'react-intersection-observer'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Function to open email client for service quotes
  const openServiceQuote = (serviceName: string) => {
    const companyEmail = 'aziron.enterprise@gmail.com'
    const subject = encodeURIComponent(`Quote Request: ${serviceName}`)
    const body = encodeURIComponent(`Hello AZIRON Team,\n\nI am interested in your ${serviceName} services.\n\nPlease provide information about:\n• Detailed pricing and packages\n• Service timeline and availability\n• Specific requirements\n• Available options and upgrades\n• Any certifications or warranties\n\nProject Details:\n• Location: \n• Project Size: \n• Timeline: \n• Budget Range: \n\nAdditional Notes:\n\nBest regards,\n[Your Name]\n[Your Contact Information]`)
    
    // Try to open Gmail compose window
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${subject}&body=${body}`
    
    // Open in new tab for Gmail
    window.open(gmailUrl, '_blank')
  }

  // Function for general quote
  const openGeneralQuote = () => {
    const companyEmail = 'aziron.enterprise@gmail.com'
    const subject = encodeURIComponent('General Quote Request from AZIRON Website')
    const body = encodeURIComponent(`Hello AZIRON Team,\n\nI would like to request a quote for your services.\n\nPlease provide information about:\n• Available services and packages\n• Pricing details\n• Service areas\n• Timeline estimates\n• Consultation availability\n\nBest regards,\n[Your Name]\n[Your Contact Information]`)
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
  }

  const energyServices = [
    {
      title: "Solar Panel Installation",
      description: "Residential, commercial, and industrial solar panel installations with expert setup and configuration.",
      icon: "☀️",
      delay: "0ms",
      features: ["Custom Design", "Professional Installation", "Quality Assurance"]
    },
    {
      title: "Solar System Design",
      description: "Custom solar system design and consultation for optimal energy production.",
      icon: "📐",
      delay: "100ms",
      features: ["Energy Analysis", "System Sizing", "Layout Planning"]
    },
    {
      title: "Energy Storage",
      description: "Battery solutions for energy independence and backup power solutions.",
      icon: "🔋",
      delay: "200ms",
      features: ["Battery Backup", "Load Management", "Smart Integration"]
    },
    {
      title: "Energy Audits",
      description: "Comprehensive energy efficiency assessments and optimization recommendations.",
      icon: "📊",
      delay: "300ms",
      features: ["Efficiency Analysis", "Cost Savings", "Optimization Plan"]
    }
  ]

  const constructionServices = [
    {
      title: "General Contracting",
      description: "Complete project management from start to finish with quality assurance.",
      icon: "👷",
      delay: "0ms",
      features: ["Project Management", "Quality Control", "Timeline Management"]
    },
    {
      title: "New Construction",
      description: "Building new residential and commercial structures with modern techniques.",
      icon: "🏗️",
      delay: "100ms",
      features: ["Design-Build", "Sustainable Materials", "Modern Techniques"]
    },
    {
      title: "Renovations & Remodeling",
      description: "Transforming existing spaces with modern upgrades and improvements.",
      icon: "🛠️",
      delay: "200ms",
      features: ["Space Optimization", "Modern Upgrades", "Quality Finish"]
    },
    {
      title: "Design-Build Services",
      description: "Integrated design and construction solutions for seamless project delivery.",
      icon: "🎨",
      delay: "300ms",
      features: ["Integrated Design", "Single Responsibility", "Streamlined Process"]
    }
  ]

  return (
    <section ref={ref} id="services" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-aziron-accent to-aziron-light rounded-full text-aziron-primary font-semibold text-sm mb-4">
            Our Integrated Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-aziron-secondary mb-6">
            Services That <span className="text-aziron-primary">Power Your Vision</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining renewable energy expertise with construction excellence for comprehensive property solutions.
          </p>
          
          {/* Quick Quote Button */}
          <div className="mt-8">
            <button
              onClick={openGeneralQuote}
              className="bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto group"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Request General Quote via Email
            </button>
            <p className="text-gray-500 mt-2 text-sm">Click to open email with pre-filled information</p>
          </div>
        </div>

        {/* Energy Solutions */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-aziron-primary">
              Energy Solutions
            </h3>
            <div className="hidden md:block w-1/3 h-1 bg-gradient-to-r from-transparent via-aziron-accent to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {energyServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100 ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  animationDelay: service.delay,
                  transitionDelay: service.delay 
                }}
              >
                <div className="relative mb-6">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-aziron-accent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h4 className="text-xl font-bold text-aziron-secondary mb-3 group-hover:text-aziron-primary transition-colors duration-300">
                  {service.title}
                </h4>
                
                <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-500 mb-2">Key Features:</h5>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center">
                        <svg className="w-4 h-4 text-aziron-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Quote Button */}
                <button
                  onClick={() => openServiceQuote(service.title)}
                  className="w-full bg-gradient-to-r from-aziron-accent to-aziron-light text-aziron-secondary py-3 rounded-lg font-semibold hover:from-aziron-primary hover:to-aziron-secondary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Get Quote via Email
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Construction Services */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-aziron-secondary">
              Construction Services
            </h3>
            <div className="hidden md:block w-1/3 h-1 bg-gradient-to-r from-transparent via-aziron-primary to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {constructionServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100 ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  animationDelay: service.delay,
                  transitionDelay: service.delay 
                }}
              >
                <div className="relative mb-6">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-aziron-primary to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h4 className="text-xl font-bold text-aziron-secondary mb-3 group-hover:text-aziron-primary transition-colors duration-300">
                  {service.title}
                </h4>
                
                <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-500 mb-2">Key Features:</h5>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center">
                        <svg className="w-4 h-4 text-aziron-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Quote Button */}
                <button
                  onClick={() => openServiceQuote(service.title)}
                  className="w-full bg-gradient-to-r from-aziron-accent to-aziron-light text-aziron-secondary py-3 rounded-lg font-semibold hover:from-aziron-primary hover:to-aziron-secondary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Get Quote via Email
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Integrated Solutions CTA */}
        <div className={`mt-20 bg-gradient-to-r from-aziron-primary to-aziron-secondary rounded-3xl p-8 md:p-12 text-white text-center transform transition-all duration-1000 delay-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Integrated Solutions?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Combine energy and construction services for complete project solutions. Get a comprehensive quote for integrated services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openServiceQuote("Integrated Energy & Construction Services")}
              className="bg-white text-aziron-secondary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 text-lg flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Request Integrated Quote
            </button>
            <a
              href="tel:+966501361323"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-aziron-primary transition-all duration-300 text-lg flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call for Consultation
            </a>
          </div>
          <p className="mt-6 text-aziron-light text-sm">
            Email: aziron.enterprise@gmail.com | All quotes sent via email for your convenience
          </p>
        </div>

        {/* Email Tips */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-aziron-accent">
          <h4 className="text-xl font-semibold text-aziron-secondary mb-4">💡 Tips for Your Quote Request:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-700 mb-2">Include in Your Email:</h5>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-aziron-primary mr-2">•</span>
                  <span>Project location and size</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aziron-primary mr-2">•</span>
                  <span>Specific service requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aziron-primary mr-2">•</span>
                  <span>Desired timeline and budget</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aziron-primary mr-2">•</span>
                  <span>Contact information for follow-up</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-700 mb-2">What to Expect:</h5>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-aziron-primary mr-2">•</span>
                  <span>Detailed pricing within 24-48 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aziron-primary mr-2">•</span>
                  <span>Personalized service recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aziron-primary mr-2">•</span>
                  <span>Free initial consultation options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aziron-primary mr-2">•</span>
                  <span>Follow-up call to discuss details</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services