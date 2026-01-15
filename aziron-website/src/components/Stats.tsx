const Stats = () => {
  const stats = [
    { number: "7+", label: "Years Experience", suffix: "" },
    { number: "200+", label: "Projects Completed", suffix: "" },
    { number: "50+", label: "Happy Clients", suffix: "" },
    { number: "10MW+", label: "Solar Installed", suffix: "Capacity" },
    { number: "98%", label: "Client Satisfaction", suffix: "Rate" },
    { number: "24/7", label: "Support Available", suffix: "" }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Delivering excellence in energy and construction across multiple projects
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg font-semibold">{stat.label}</div>
              {stat.suffix && (
                <div className="text-sm opacity-80">{stat.suffix}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats