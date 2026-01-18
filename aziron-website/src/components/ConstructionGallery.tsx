import { useState } from 'react'

const ConstructionGallery = () => {
  const [activeCategory, setActiveCategory] = useState('interior')

  const galleryCategories = {
    interior: [
      {
        id: 1,
        title: "Modern Kitchen Renovation",
        description: "Complete kitchen remodel with modern finishes",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Residential",
        duration: "3 weeks",
        area: "25 sqm"
      },
      {
        id: 2,
        title: "Luxury Bathroom",
        description: "High-end bathroom with premium fixtures",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Residential",
        duration: "2 weeks",
        area: "12 sqm"
      },
      {
        id: 3,
        title: "Office Interior",
        description: "Commercial office space construction",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Commercial",
        duration: "8 weeks",
        area: "200 sqm"
      }
    ],
    exterior: [
      {
        id: 1,
        title: "Building Facade",
        description: "Modern exterior cladding installation",
        image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Commercial",
        duration: "6 weeks",
        area: "500 sqm"
      },
      {
        id: 2,
        title: "Outdoor Terrace",
        description: "Landscaped outdoor living space",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Residential",
        duration: "4 weeks",
        area: "50 sqm"
      },
      {
        id: 3,
        title: "Commercial Parking",
        description: "Complete parking area construction",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Commercial",
        duration: "10 weeks",
        area: "1000 sqm"
      }
    ],
    structural: [
      {
        id: 1,
        title: "Industrial Warehouse",
        description: "Steel structure warehouse construction",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Industrial",
        duration: "16 weeks",
        area: "2000 sqm"
      },
      {
        id: 2,
        title: "Multi-story Building",
        description: "Reinforced concrete structure",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Commercial",
        duration: "32 weeks",
        area: "5000 sqm"
      },
      {
        id: 3,
        title: "Foundation Work",
        description: "Deep foundation excavation and pouring",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Industrial",
        duration: "8 weeks",
        area: "800 sqm"
      }
    ]
  }

  const openProjectInquiry = (projectTitle: string, category: string) => {
    const subject = encodeURIComponent(`Construction Inquiry: ${projectTitle}`)
    const body = encodeURIComponent(`Hello AZIRON Team,\n\nI'm interested in ${category} construction similar to "${projectTitle}".\n\nProject Details:\n• Project type: \n• Location: \n• Budget: \n• Timeline: \n\nPlease provide a consultation.\n\nBest regards,\n[Your Name]`)
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}&body=${body}`, '_blank')
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-aziron-secondary mb-6">
            Construction <span className="text-orange-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our diverse range of construction projects and capabilities
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(galleryCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category} Construction
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryCategories[activeCategory as keyof typeof galleryCategories].map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.type}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  {project.area}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-800">{project.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Area</div>
                    <div className="font-semibold text-gray-800">{project.area}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Type</div>
                    <div className="font-semibold text-gray-800">{project.type}</div>
                  </div>
                </div>
                
                <button
                  onClick={() => openProjectInquiry(project.title, activeCategory)}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Similar Project Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white mb-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50,000+</div>
              <div className="text-lg">Sq Meters Built</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-lg">Safety Record</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-lg">On-time Delivery</div>
            </div>
          </div>
        </div>

        {/* Before/After Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-aziron-secondary mb-8">
            Transformation <span className="text-orange-600">Gallery</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Before Renovation</h4>
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-5xl mb-2">🏚️</div>
                  <div className="text-gray-600">Original Structure</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                This commercial space required complete renovation including structural repairs, 
                electrical upgrades, and modern interior finishes.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">After Renovation</h4>
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-5xl mb-2">🏢</div>
                  <div className="text-gray-600">Modern Office Space</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Transformed into a modern, energy-efficient office space with sustainable materials 
                and smart building systems.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={() => {
              const subject = encodeURIComponent("Custom Construction Project")
              window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}`, '_blank')
            }}
            className="inline-flex items-center gap-3 text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300"
          >
            <span>Start Your Construction Project</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ConstructionGallery