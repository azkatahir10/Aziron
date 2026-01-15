const About = () => {
  const values = [
    {
      title: "Sustainability",
      description: "Committed to environmentally responsible practices and promoting renewable energy solutions.",
      icon: "🌱"
    },
    {
      title: "Quality",
      description: "Striving for excellence in every project with highest standards of workmanship.",
      icon: "⭐"
    },
    {
      title: "Integrity",
      description: "Conducting business with honesty, transparency, and ethical principles.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "Embracing new technologies and approaches for cutting-edge solutions.",
      icon: "💡"
    },
    {
      title: "Customer Satisfaction",
      description: "Prioritizing client needs and striving to exceed expectations.",
      icon: "😊"
    },
    {
      title: "Safety",
      description: "Maintaining a safe working environment for employees and clients.",
      icon: "🛡️"
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-aziron-secondary mb-6">About AZIRON</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We operate at the intersection of renewable energy and construction, delivering integrated sustainable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-aziron-secondary mb-6">Our Mission</h2>
            <div className="bg-gradient-to-r from-aziron-light to-white p-8 rounded-2xl border-l-4 border-aziron-primary">
              <p className="text-lg text-gray-700 italic">
                "To empower our clients with sustainable energy solutions and build lasting structures with precision and integrity, contributing to a stronger community."
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-aziron-secondary mb-6">Our Vision</h2>
            <div className="bg-gradient-to-r from-aziron-light to-white p-8 rounded-2xl border-l-4 border-aziron-secondary">
              <p className="text-lg text-gray-700 italic">
                "To be a leading provider of integrated energy and construction solutions, recognized for our innovation, quality, and commitment to sustainability."
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-aziron-secondary mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-aziron-secondary mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose AZIRON?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Integrated Solutions</h3>
              <p>Unique combination of energy and construction services for seamless project delivery.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p>Experienced professionals with proven track records in energy and construction industries.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Sustainability Focus</h3>
              <p>Committed to reducing environmental impact through renewable energy solutions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Reliability</h3>
              <p>Trusted partner delivering projects on time and within budget.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About