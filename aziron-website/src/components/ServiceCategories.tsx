const ServiceCategories = () => {
  const categories = [
    {
      title: "Solar Energy Solutions",
      description: "Complete solar energy systems for residential, commercial, and industrial applications",
      services: [
        "Solar Panel Installation",
        "Solar System Design",
        "Energy Storage Solutions",
        "Solar Maintenance & Repair",
        "Energy Efficiency Audits",
        "Government Incentive Guidance"
      ],
      icon: "☀️",
      color: "border-aziron-primary"
    },
    {
      title: "Construction Services",
      description: "Quality construction and renovation services with sustainable practices",
      services: [
        "New Construction Projects",
        "Building Renovations",
        "Commercial Construction",
        "Residential Remodeling",
        "Project Management",
        "Design-Build Services"
      ],
      icon: "🏗️",
      color: "border-aziron-secondary"
    },
    {
      title: "Consultation & Planning",
      description: "Expert guidance for energy and construction projects",
      services: [
        "Project Feasibility Studies",
        "Energy Consumption Analysis",
        "Construction Planning",
        "Permit Assistance",
        "Budget Planning",
        "Timeline Development"
      ],
      icon: "📋",
      color: "border-aziron-accent"
    }
  ]

  const openServiceQuote = (category: string) => {
    const companyEmail = 'aziron.enterprise@gmail.com'
    const subject = encodeURIComponent(`${category} - Service Inquiry`)
    const body = encodeURIComponent(`Hello AZIRON Team,\n\nI am interested in your ${category} services.\n\nPlease provide information about:\n• Available service packages\n• Pricing details\n• Service timeline\n• Consultation availability\n\nSpecific Requirements:\n\nBest regards,\n[Your Name]`)
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-aziron-secondary mb-6">
            Service Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of services designed to meet all your energy and construction needs
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-r from-white to-aziron-light rounded-2xl p-8 border-l-4 ${category.color} shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="text-5xl">{category.icon}</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-aziron-secondary mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-aziron-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-gray-200">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Typical Project Timeline:</h4>
                  <p className="text-sm text-gray-600">2-8 weeks depending on project scope</p>
                </div>
                <button
                  onClick={() => openServiceQuote(category.title)}
                  className="bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Get Quote for {category.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCategories