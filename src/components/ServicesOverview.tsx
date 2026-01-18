import { Link } from 'react-router-dom'

const ServicesOverview = () => {
  const services = [
    {
      title: "Solar Energy",
      description: "Clean, renewable energy solutions for homes and businesses",
      icon: "☀️",
      count: "200+ Projects"
    },
    {
      title: "Construction",
      description: "Quality building and renovation services",
      icon: "🏗️",
      count: "150+ Projects"
    },
    {
      title: "Consultation",
      description: "Expert guidance and planning services",
      icon: "💡",
      count: "300+ Clients"
    },
    {
      title: "Maintenance",
      description: "Ongoing support and service maintenance",
      icon: "🔧",
      count: "24/7 Support"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-aziron-secondary mb-6">
            Our Core <span className="text-aziron-primary">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in integrated energy and construction solutions that transform properties and reduce environmental impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl bg-gradient-to-b from-white to-aziron-light hover:from-aziron-light hover:to-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-aziron-secondary mb-4 group-hover:text-aziron-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="text-aziron-primary font-semibold">
                {service.count}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-3 text-lg font-semibold text-aziron-primary hover:text-aziron-secondary transition-colors"
          >
            Explore All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview