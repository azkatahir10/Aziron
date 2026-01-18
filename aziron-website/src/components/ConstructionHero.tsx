const ConstructionHero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-aziron-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-aziron-secondary mb-6">
              Construction <span className="text-orange-600">Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Quality construction services with precision and attention to detail. 
              From new builds to renovations, we deliver exceptional results.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#construction-services" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                View Services
              </a>
              <button
                onClick={() => {
                  const subject = encodeURIComponent("Construction Project Inquiry")
                  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}`, '_blank')
                }}
                className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300"
              >
                Discuss Project
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-8 shadow-xl transform -rotate-3">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Construction Site"
                className="rounded-lg shadow-lg transform rotate-3"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold shadow-lg">
              🏗️ Build Smart
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConstructionHero