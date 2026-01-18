const ContactMap = () => {
  const locations = [
    {
      name: "Saudi Arabia Office",
      address: "Riyadh, Saudi Arabia",
      phone: "+966 501361323",
      email: "aziron.enterprise@gmail.com",
      hours: "Sun-Thu: 8:00 AM - 6:00 PM"
    },
    {
      name: "Pakistan Office",
      address: "Lahore, Pakistan",
      phone: "+92 3204671763",
      email: "aziron.enterprise@gmail.com",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-aziron-secondary mb-6">
            Our <span className="text-aziron-primary">Locations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serving clients in Saudi Arabia, Pakistan, and international projects
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Visualization */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-aziron-light to-white rounded-2xl p-8 shadow-lg h-full">
              <div className="aspect-video bg-gradient-to-br from-aziron-accent/20 to-aziron-primary/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Simplified map representation */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-aziron-primary/30 to-transparent rounded-full border-4 border-white shadow-lg">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-aziron-primary font-bold">SA</div>
                    <div className="text-xs text-gray-600">Saudi Arabia</div>
                  </div>
                </div>
                <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-aziron-secondary/30 to-transparent rounded-full border-4 border-white shadow-lg">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-aziron-secondary font-bold">PK</div>
                    <div className="text-xs text-gray-600">Pakistan</div>
                  </div>
                </div>
                <div className="absolute top-3/4 left-1/2 w-16 h-16 bg-gradient-to-br from-aziron-accent/30 to-transparent rounded-full border-4 border-white shadow-lg">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-aziron-primary text-xs">INTL</div>
                  </div>
                </div>
                
                {/* Connection lines */}
                <div className="absolute top-1/3 left-1/3 w-1/3 h-0.5 bg-aziron-primary/20"></div>
                <div className="absolute top-1/2 left-1/2 w-1/4 h-0.5 bg-aziron-secondary/20 rotate-45"></div>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-aziron-secondary mb-2">Service Areas</h3>
                <p className="text-gray-600">
                  We provide services across Saudi Arabia, Pakistan, and undertake international projects in the Middle East and Asia.
                </p>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-aziron-secondary mb-4">{location.name}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-aziron-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{location.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-aziron-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <a href={`tel:${location.phone}`} className="text-gray-700 hover:text-aziron-primary transition-colors">
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-aziron-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href="mailto:aziron.enterprise@gmail.com" className="text-gray-700 hover:text-aziron-primary transition-colors break-all">
                      {location.email}
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-aziron-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{location.hours}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    const subject = encodeURIComponent(`Inquiry for ${location.name}`)
                    const body = encodeURIComponent(`Hello AZIRON Team,\n\nI would like to contact your ${location.name}.\n\nPlease provide information about:\n• Services available in ${location.address}\n• Consultation availability\n• Local project requirements\n\nBest regards,\n[Your Name]`)
                    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}&body=${body}`, '_blank')
                  }}
                  className="w-full mt-6 bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Contact {location.name.split(' ')[0]} Office
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMap