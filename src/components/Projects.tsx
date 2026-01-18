const Projects = () => {
  // Placeholder for projects - replace with actual project data
  const projects = [
    {
      title: "6MW Solar Power Plant",
      description: "Large-scale solar installation providing clean energy to industrial facility.",
      category: "Energy",
      year: "2023"
    },
    {
      title: "Commercial Building Renovation",
      description: "Complete renovation with energy-efficient upgrades and modern construction.",
      category: "Construction",
      year: "2023"
    },
    {
      title: "Residential Solar Installation",
      description: "Solar panel installation with battery backup for residential property.",
      category: "Energy",
      year: "2022"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing our expertise in integrated energy and construction solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group cursor-pointer">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <div className="aspect-video bg-gradient-to-r from-aziron-accent to-aziron-primary flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.category === 'Energy' 
                      ? 'bg-aziron-accent text-aziron-secondary' 
                      : 'bg-aziron-primary text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-aziron-secondary mb-2 group-hover:text-aziron-primary transition">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-aziron-dark font-medium">{project.year}</span>
                <span className="text-aziron-primary font-semibold">View Details →</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            More projects and testimonials coming soon...
          </p>
          <button className="btn-secondary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects