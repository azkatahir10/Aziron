const ConstructionServices = () => {
  const categories = [
    {
      title: "Interior Construction",
      services: [
        {
          name: "Residential Interiors",
          description: "Complete interior solutions for homes",
          image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          features: ["Flooring", "Painting", "Lighting", "Custom Cabinetry"]
        },
        {
          name: "Commercial Interiors",
          description: "Office and commercial space interiors",
          image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          features: ["Partition Walls", "Ceilings", "Electrical", "HVAC"]
        },
        {
          name: "Kitchen & Bath",
          description: "Specialized kitchen and bathroom renovations",
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          features: ["Plumbing", "Tiling", "Fixtures", "Ventilation"]
        }
      ]
    },
    {
      title: "Exterior Construction",
      services: [
        {
          name: "Building Facades",
          description: "Exterior finishes and facade systems",
          image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          features: ["Cladding", "Windows", "Doors", "Weatherproofing"]
        },
        {
          name: "Outdoor Structures",
          description: "Patios, decks, and outdoor living spaces",
          image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          features: ["Woodwork", "Masonry", "Roofing", "Landscaping"]
        },
        {
          name: "Parking & Driveways",
          description: "Parking areas and driveway construction",
          image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          features: ["Paving", "Drainage", "Lighting", "Marking"]
        }
      ]
    },
    {
      title: "Specialized Services",
      services: [
        {
          name: "Structural Work",
          description: "Foundation and structural modifications",
          image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          features: ["Steel Work", "Concrete", "Beams", "Columns"]
        },
        {
          name: "MEP Services",
          description: "Mechanical, Electrical, Plumbing systems",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          features: ["Wiring", "Piping", "Ductwork", "Controls"]
        },
        {
          name: "Finishing Works",
          description: "Final touches and finishing elements",
          image: "https://images.unsplash.com/photo-1503387769-00a112127ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          features: ["Trim Work", "Hardware", "Appliances", "Cleaning"]
        }
      ]
    }
  ]

  const openCategoryQuote = (category: string) => {
    const subject = encodeURIComponent(`Construction Quote: ${category}`)
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}`, '_blank')
  }

  return (
    <section id="construction-services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-aziron-secondary mb-6">
            Construction <span className="text-orange-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete construction solutions for residential, commercial, and industrial projects
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-gray-800">{category.title}</h3>
                <button
                  onClick={() => openCategoryQuote(category.title)}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Get {category.title} Quote
                </button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h4>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <button
                        onClick={() => openCategoryQuote(service.name)}
                        className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                      >
                        Request Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConstructionServices