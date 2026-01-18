const SolarBenefits = () => {
  const benefits = [
    { title: "Cost Savings", value: "Up to 70%", icon: "💰", description: "Reduce electricity bills" },
    { title: "ROI Period", value: "3-5 Years", icon: "📈", description: "Quick return on investment" },
    { title: "Warranty", value: "25 Years", icon: "🛡️", description: "Panel performance guarantee" },
    { title: "Carbon Reduction", value: "5+ Tons/Year", icon: "🌍", description: "Annual CO2 reduction" }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solar <span className="text-yellow-300">Benefits</span>
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover the advantages of switching to solar energy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors duration-300"
            >
              <div className="text-5xl mb-6">{benefit.icon}</div>
              <div className="text-4xl font-bold mb-2">{benefit.value}</div>
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <p className="opacity-90">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolarBenefits