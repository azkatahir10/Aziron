const SolarHero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-aziron-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-aziron-secondary mb-6">
              Solar Energy <span className="text-blue-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Harness the power of the sun with our comprehensive solar energy solutions. 
              From residential rooftops to industrial solar farms, we provide end-to-end services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#solar-services" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Explore Services
              </a>
              <button
                onClick={() => {
                  const subject = encodeURIComponent("Solar Energy Consultation Request")
                  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}`, '_blank')
                }}
                className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                Free Consultation
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-white rounded-2xl p-8 shadow-xl transform rotate-3">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Solar Panel Installation"
                className="rounded-lg shadow-lg transform -rotate-3"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold shadow-lg">
              ☀️ Clean Energy
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolarHero