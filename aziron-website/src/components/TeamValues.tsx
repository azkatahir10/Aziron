const TeamValues = () => {
  const values = [
    {
      title: "Technical Excellence",
      description: "Continuous learning and mastery of latest technologies",
      icon: "⚙️"
    },
    {
      title: "Innovation",
      description: "Pushing boundaries in energy and construction solutions",
      icon: "💡"
    },
    {
      title: "Collaboration",
      description: "Working together to achieve exceptional results",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "Honest, transparent, and ethical in all dealings",
      icon: "🛡️"
    },
    {
      title: "Client Success",
      description: "Dedicated to exceeding client expectations",
      icon: "🎯"
    },
    {
      title: "Sustainability",
      description: "Commitment to environmentally responsible practices",
      icon: "🌱"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-aziron-secondary mb-6">
            Our Team <span className="text-aziron-primary">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our team's work and define our company culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-aziron-secondary mb-4 group-hover:text-aziron-primary">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 bg-gradient-to-r from-aziron-primary to-aziron-secondary rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-lg">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg">Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-lg">Certifications</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">300+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamValues