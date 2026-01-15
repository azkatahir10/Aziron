const ConstructionProcess = () => {
  const processSteps = [
    {
      phase: "Planning & Design",
      steps: [
        {
          number: "01",
          title: "Initial Consultation",
          description: "Understand project requirements and goals",
          duration: "1-2 days",
          icon: "💬"
        },
        {
          number: "02",
          title: "Site Assessment",
          description: "Detailed site analysis and measurements",
          duration: "2-3 days",
          icon: "📐"
        },
        {
          number: "03",
          title: "Design Development",
          description: "Architectural and engineering design",
          duration: "1-2 weeks",
          icon: "🏗️"
        }
      ]
    },
    {
      phase: "Pre-Construction",
      steps: [
        {
          number: "04",
          title: "Permits & Approvals",
          description: "Obtain necessary permits and approvals",
          duration: "2-4 weeks",
          icon: "📋"
        },
        {
          number: "05",
          title: "Material Procurement",
          description: "Source quality materials and equipment",
          duration: "1-3 weeks",
          icon: "📦"
        },
        {
          number: "06",
          title: "Team Mobilization",
          description: "Assemble skilled construction team",
          duration: "1 week",
          icon: "👷"
        }
      ]
    },
    {
      phase: "Construction",
      steps: [
        {
          number: "07",
          title: "Site Preparation",
          description: "Clear and prepare construction site",
          duration: "1-2 weeks",
          icon: "⚒️"
        },
        {
          number: "08",
          title: "Foundation Work",
          description: "Excavation and foundation construction",
          duration: "2-4 weeks",
          icon: "🏛️"
        },
        {
          number: "09",
          title: "Structural Work",
          description: "Build structural framework",
          duration: "3-8 weeks",
          icon: "🏗️"
        },
        {
          number: "10",
          title: "MEP Installation",
          description: "Mechanical, Electrical, Plumbing systems",
          duration: "2-6 weeks",
          icon: "🔌"
        },
        {
          number: "11",
          title: "Interior Finishing",
          description: "Walls, flooring, ceilings, fixtures",
          duration: "3-8 weeks",
          icon: "🎨"
        }
      ]
    },
    {
      phase: "Completion",
      steps: [
        {
          number: "12",
          title: "Final Inspection",
          description: "Quality control and compliance check",
          duration: "1-2 weeks",
          icon: "✅"
        },
        {
          number: "13",
          title: "Client Walkthrough",
          description: "Final review with client",
          duration: "1-2 days",
          icon: "👣"
        },
        {
          number: "14",
          title: "Project Handover",
          description: "Complete documentation and keys",
          duration: "1 week",
          icon: "🔑"
        }
      ]
    }
  ]

  const projectTypes = [
    {
      type: "Residential",
      timeline: "3-6 months",
      keyActivities: ["Design", "Construction", "Finishing"],
      icon: "🏠"
    },
    {
      type: "Commercial",
      timeline: "6-12 months",
      keyActivities: ["Planning", "Structure", "MEP", "Interior"],
      icon: "🏢"
    },
    {
      type: "Industrial",
      timeline: "8-18 months",
      keyActivities: ["Site Prep", "Heavy Structure", "Systems", "Commissioning"],
      icon: "🏭"
    },
    {
      type: "Renovation",
      timeline: "1-4 months",
      keyActivities: ["Assessment", "Demolition", "Rebuild", "Finish"],
      icon: "🔨"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-aziron-secondary mb-6">
            Construction <span className="text-orange-600">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures quality, safety, and timely delivery of every project
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          {processSteps.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  {String.fromCharCode(65 + phaseIndex)}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{phase.phase}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {phase.steps.map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
                  >
                    <div className="flex items-start mb-4">
                      <div className="text-3xl mr-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-lg font-bold text-orange-500">{step.number}</div>
                        <h4 className="text-lg font-semibold text-gray-800">{step.title}</h4>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Duration</span>
                      <span className="font-semibold text-orange-600">{step.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Project Timelines */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-aziron-secondary mb-8">
            Project <span className="text-orange-600">Timelines</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-2">{project.type}</h4>
                <div className="text-orange-600 font-semibold mb-4">{project.timeline}</div>
                
                <div className="space-y-2 mb-6">
                  {project.keyActivities.map((activity, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {activity}
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => {
                    const subject = encodeURIComponent(`${project.type} Construction Inquiry`)
                    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}`, '_blank')
                  }}
                  className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm"
                >
                  Discuss {project.type} Project
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Quality Assurance</h3>
              <p className="text-xl mb-8">
                We maintain the highest standards throughout every phase of construction
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-lg p-3 mr-4">
                    <div className="text-2xl">🔍</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Regular Inspections</h4>
                    <p className="opacity-90">Daily site inspections by project managers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-lg p-3 mr-4">
                    <div className="text-2xl">📊</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Material Testing</h4>
                    <p className="opacity-90">All materials tested for quality and compliance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-lg p-3 mr-4">
                    <div className="text-2xl">🛡️</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Safety Protocols</h4>
                    <p className="opacity-90">Strict safety measures and regular audits</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-6 text-center">Construction Timeline Example</h4>
              <div className="space-y-4">
                {[
                  { phase: "Planning", duration: "1-2 weeks", progress: "100%" },
                  { phase: "Design", duration: "2-3 weeks", progress: "100%" },
                  { phase: "Permits", duration: "2-4 weeks", progress: "75%" },
                  { phase: "Construction", duration: "12-24 weeks", progress: "50%" },
                  { phase: "Finishing", duration: "4-8 weeks", progress: "25%" }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{item.phase}</span>
                      <span className="font-semibold">{item.duration}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-white h-2 rounded-full transition-all duration-500"
                        style={{ width: item.progress }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              const subject = encodeURIComponent("Construction Process Consultation")
              window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}`, '_blank')
            }}
            className="inline-flex items-center gap-3 text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300"
          >
            <span>Schedule Construction Consultation</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ConstructionProcess