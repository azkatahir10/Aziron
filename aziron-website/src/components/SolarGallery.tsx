import { useState } from 'react'

const SolarGallery = () => {
  const [activeTab, setActiveTab] = useState('residential')

  const galleryItems = {
    residential: [
      {
        id: 1,
        title: "Rooftop Solar Installation",
        description: "Residential home with 5kW solar system",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        capacity: "5 kW",
        location: "Riyadh, Saudi Arabia",
        savings: "70% reduction"
      },
      {
        id: 2,
        title: "Villa Solar System",
        description: "Complete solar solution for luxury villa",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        capacity: "8 kW",
        location: "Jeddah, Saudi Arabia",
        savings: "65% reduction"
      },
      {
        id: 3,
        title: "Apartment Building",
        description: "Shared solar system for residential complex",
        image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        capacity: "25 kW",
        location: "Jeddah, Saudi Arabia",
        savings: "60% reduction"
      }
    ],
    commercial: [
      {
        id: 1,
        title: "Shopping Mall",
        description: "Commercial solar installation for retail space",
        image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        capacity: "100 kW",
        location: "Dammam, Saudi Arabia",
        savings: "55% reduction"
      },
      {
        id: 2,
        title: "Office Building",
        description: "Corporate headquarters solar project",
        image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        capacity: "75 kW",
        location: "Abu Dhabi, UAE",
        savings: "50% reduction"
      },
      {
        id: 3,
        title: "Warehouse Facility",
        description: "Industrial solar installation",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        capacity: "150 kW",
        location: "Sharjah, UAE",
        savings: "45% reduction"
      }
    ],
    industrial: [
      {
        id: 1,
        title: "6MW Solar Power Plant",
        description: "Large-scale industrial solar farm",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        capacity: "6 MW",
        location: "Lahore, Pakistan",
        savings: "40% reduction"
      },
      {
        id: 2,
        title: "Manufacturing Plant",
        description: "Solar installation for factory operations",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        capacity: "2 MW",
        location: "Industrial City, Pakistan",
        savings: "35% reduction"
      },
      {
        id: 3,
        title: "Water Treatment Plant",
        description: "Solar-powered water facility",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        capacity: "3 MW",
        location: "Riyadh, Saudi Arabia",
        savings: "30% reduction"
      }
    ]
  }

  const [_selectedImage, _setSelectedImage] = useState<number | null>(null)

  const openProjectInquiry = (projectTitle: string) => {
    const subject = encodeURIComponent(`Inquiry: ${projectTitle}`)
    const body = encodeURIComponent(`Hello AZIRON Team,\n\nI'm interested in a project similar to "${projectTitle}".\n\nPlease provide:\n• Project details\n• Estimated costs\n• Timeline\n• Requirements\n\nBest regards,\n[Your Name]`)
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}&body=${body}`, '_blank')
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-aziron-secondary mb-6">
            Solar Project <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful solar installations across different sectors
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(galleryItems).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab} Projects
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems[activeTab as keyof typeof galleryItems].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.capacity}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-semibold text-gray-800">{item.location}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-sm text-gray-500">Energy Savings</div>
                    <div className="font-semibold text-green-600">{item.savings}</div>
                  </div>
                </div>
                
                <button
                  onClick={() => openProjectInquiry(item.title)}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Similar Project Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg">Solar Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10MW+</div>
              <div className="text-lg">Total Capacity</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2000+</div>
              <div className="text-lg">Panels Installed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              const subject = encodeURIComponent("Custom Solar Project Inquiry")
              window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}`, '_blank')
            }}
            className="inline-flex items-center gap-3 text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>Request Custom Solar Project Consultation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SolarGallery