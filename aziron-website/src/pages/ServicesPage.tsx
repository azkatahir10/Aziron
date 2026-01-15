import { Link } from 'react-router-dom'

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: "Solar Energy Solutions",
      description: "Complete solar energy systems for homes, businesses, and industries",
      icon: "☀️",
      color: "from-blue-500 to-blue-600",
      features: [
        "Solar Panel Installation",
        "Solar System Design",
        "Energy Storage Solutions",
        "Solar Maintenance & Repair"
      ],
      link: "/services/solar"
    },
    {
      title: "Construction Services",
      description: "Quality construction and building services with precision",
      icon: "🏗️",
      color: "from-orange-500 to-orange-600",
      features: [
        "New Construction",
        "Renovations & Remodeling",
        "Interior & Exterior Work",
        "Project Management"
      ],
      link: "/services/construction"
    },
    {
      title: "Integrated Solutions",
      description: "Combined energy and construction projects",
      icon: "🔄",
      color: "from-green-500 to-green-600",
      features: [
        "Complete Property Solutions",
        "Sustainable Building Design",
        "Energy-Efficient Construction",
        "Smart Home Integration"
      ],
      link: "/services"
    }
  ]

  const openGeneralQuote = () => {
    const subject = encodeURIComponent('General Services Inquiry from Website')
    const body = encodeURIComponent(`Hello AZIRON Team,\n\nI am interested in your services.\n\nPlease provide information about:\n• Available service packages\n• Pricing details\n• Consultation availability\n\nLooking forward to your response.\n\nBest regards,\n[Your Name]`)
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}&body=${body}`, '_blank')
  }

  return (
    <div className="pt-8 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-aziron-light to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-aziron-secondary mb-6">
              Our <span className="text-aziron-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive energy and construction solutions tailored to meet your specific needs. 
              Explore our specialized services or get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openGeneralQuote}
                className="bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Get General Quote
              </button>
              <a 
                href="#service-categories" 
                className="border-2 border-aziron-primary text-aziron-primary px-8 py-3 rounded-lg font-semibold hover:bg-aziron-primary hover:text-white transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <section id="service-categories" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-aziron-secondary mb-6">
              Service <span className="text-aziron-primary">Categories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select a category to explore detailed services or get a specialized quote
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group"
              >
                <div className={`h-3 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-8">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {category.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-aziron-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-700 mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      to={category.link}
                      className="flex-1 bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
                    >
                      Explore Details
                    </Link>
                    <button
                      onClick={() => {
                        const subject = encodeURIComponent(`Quote Request: ${category.title}`)
                        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}`, '_blank')
                      }}
                      className="px-4 border border-aziron-primary text-aziron-primary rounded-lg hover:bg-aziron-primary hover:text-white transition-colors"
                    >
                      Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Solutions */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-aziron-primary to-aziron-secondary rounded-3xl p-8 md:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Need <span className="text-yellow-300">Integrated Solutions</span>?
                </h2>
                <p className="text-xl mb-8">
                  Combine energy and construction services for complete project solutions. 
                  Our integrated approach ensures seamless coordination and optimal results.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Single point of contact for all services</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Coordinated project timelines</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Cost savings on bundled services</span>
                  </li>
                </ul>
                <button
                  onClick={() => {
                    const subject = encodeURIComponent("Integrated Solutions Inquiry")
                    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}`, '_blank')
                  }}
                  className="bg-white text-aziron-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Discuss Integrated Project
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-5xl mb-4">🔄</div>
                  <h3 className="text-2xl font-bold mb-4">Integrated Approach</h3>
                  <p className="mb-6">
                    Energy + Construction = Complete Property Solutions
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold">1 + 1</div>
                      <div className="text-sm">Services Combined</div>
                    </div>
                    <div className="bg-white/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold">-20%</div>
                      <div className="text-sm">Cost Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-aziron-secondary mb-6">
              How We <span className="text-aziron-primary">Work</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven process ensures quality, transparency, and satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understand your needs" },
              { step: "02", title: "Planning", description: "Design optimal solutions" },
              { step: "03", title: "Execution", description: "Professional implementation" },
              { step: "04", title: "Support", description: "Ongoing maintenance" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-aziron-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Contact us for a detailed consultation and personalized quote
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={openGeneralQuote}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 text-lg flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Get Detailed Quote
            </button>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call for Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage