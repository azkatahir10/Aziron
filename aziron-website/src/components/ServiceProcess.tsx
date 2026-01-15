const ServiceProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Discuss your project requirements, goals, and budget",
      duration: "1-2 days",
      icon: "💬"
    },
    {
      number: "02",
      title: "Site Assessment",
      description: "On-site evaluation and technical analysis",
      duration: "2-3 days",
      icon: "📐"
    },
    {
      number: "03",
      title: "Custom Proposal",
      description: "Detailed project plan, timeline, and pricing",
      duration: "3-5 days",
      icon: "📋"
    },
    {
      number: "04",
      title: "Project Execution",
      description: "Professional implementation with quality assurance",
      duration: "Project dependent",
      icon: "⚡"
    },
    {
      number: "05",
      title: "Final Inspection",
      description: "Quality check and client approval",
      duration: "1-2 days",
      icon: "✅"
    },
    {
      number: "06",
      title: "Aftercare Support",
      description: "Ongoing maintenance and support services",
      duration: "Ongoing",
      icon: "🔧"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-aziron-secondary mb-6">
            Our Service <span className="text-aziron-primary">Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A structured approach to ensure quality, transparency, and satisfaction at every step
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-aziron-primary via-aziron-accent to-aziron-secondary"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto md:mx-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">{step.icon}</div>
                      <div>
                        <div className="text-sm font-semibold text-aziron-primary">STEP {step.number}</div>
                        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Duration:</span>
                      <span className="font-semibold text-aziron-primary">{step.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="my-8 md:my-0 md:mx-12 relative">
                  <div className="w-8 h-8 bg-white border-4 border-aziron-primary rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-aziron-primary rounded-full"></div>
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceProcess