import { Link } from 'react-router-dom'

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Integrated Solutions",
      description: "One provider for both energy and construction needs",
      icon: "🔄"
    },
    {
      title: "Certified Experts",
      description: "Saudi and Pakistan Engineering Council registered",
      icon: "📜"
    },
    {
      title: "Sustainable Focus",
      description: "Eco-friendly solutions that reduce carbon footprint",
      icon: "🌱"
    },
    {
      title: "7+ Years Experience",
      description: "Proven track record in large-scale projects",
      icon: "⭐"
    },
    {
      title: "End-to-End Service",
      description: "From consultation to completion and maintenance",
      icon: "🎯"
    },
    {
      title: "Client-Centric",
      description: "Personalized solutions for unique needs",
      icon: "🤝"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-aziron-secondary mb-6">
            Why Choose <span className="text-aziron-primary">AZIRON</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with customer-focused service to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-aziron-secondary mb-4 group-hover:text-aziron-primary">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Project */}
        <div className="mt-20 bg-gradient-to-r from-aziron-primary to-aziron-secondary rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Featured Project: 6MW Solar Plant</h3>
              <p className="text-xl mb-6">
                Successfully installed and commissioned a large-scale solar power plant, providing clean energy for industrial operations.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>6 Megawatt capacity</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Industrial facility power</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Significant cost savings</span>
                </li>
              </ul>
              <Link 
                to="/services/solar" 
                className="inline-flex items-center gap-2 bg-white text-aziron-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View More Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-white/20 to-transparent rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4">6MW</div>
                  <div className="text-xl">Solar Power Generation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs