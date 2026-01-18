const SolarProcess = () => {
  const steps = [
    { number: "01", title: "Consultation", description: "Energy needs assessment", icon: "💬" },
    { number: "02", title: "Design", description: "Custom system planning", icon: "📐" },
    { number: "03", title: "Approval", description: "Permits and permissions", icon: "✅" },
    { number: "04", title: "Installation", description: "Professional setup", icon: "⚡" },
    { number: "05", title: "Commissioning", description: "System activation", icon: "🔧" },
    { number: "06", title: "Monitoring", description: "Performance tracking", icon: "📊" }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-aziron-secondary mb-6">
            Our Solar <span className="text-blue-600">Process</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group text-center"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                {step.icon}
              </div>
              <div className="text-3xl font-bold text-blue-500 mb-2">{step.number}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolarProcess