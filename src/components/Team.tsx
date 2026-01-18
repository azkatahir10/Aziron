import { useInView } from 'react-intersection-observer'

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const teamMembers = [
    {
      name: "Muhammad Haider Aziz",
      role: "CEO & Founder",
      color: "from-aziron-primary to-aziron-secondary",
      details: [
        { label: "Qualification", value: "BS Electrical Engineering" },
        { label: "Experience", value: "7+ years in industrial maintenance & renewable energy" },
        { label: "Expertise", value: "PLC programming, Solar systems, Project management" },
      ]
    },
    {
      name: "Abdul Basit",
      role: "Chief Operating Officer",
      color: "from-aziron-accent to-aziron-primary",
      details: [
        { label: "Qualification", value: "Mechanical Engineer (UET Lahore)" },
        { label: "Experience", value: "Extensive construction industry experience" },
        { label: "Expertise", value: "Project management, Sustainable building" },
      ]
    },
    {
      name: "Anum Tahir",
      role: "Chief Technology Officer",
      color: "from-aziron-secondary to-aziron-dark",
      details: [
        { label: "Qualification", value: "MS Computer Science (LUMS)" },
        { label: "Experience", value: "Microsoft Certified Data Scientist & AI Engineer" },
        { label: "Expertise", value: "Data analytics, Machine learning, Energy optimization" },
      ]
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-aziron-accent to-aziron-light rounded-full text-aziron-primary font-semibold text-sm mb-4">
            Our Leadership
          </span>
          <h2 className="section-title">
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced professionals driving innovation in energy and construction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group cursor-pointer transform transition-all duration-700 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="card hover-lift h-full">
                <div className="relative mb-8">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${member.color} mx-auto flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110`}>
                    <span className="text-white text-4xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-aziron-accent to-aziron-primary rounded-full group-hover:w-32 transition-all duration-500"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-aziron-secondary text-center mb-2 group-hover:gradient-text transition-all duration-300">
                  {member.name}
                </h3>
                <p className="text-aziron-primary font-semibold text-center mb-6 group-hover:tracking-widest transition-all duration-300">
                  {member.role}
                </p>
                
                <div className="space-y-4">
                  {member.details.map((detail, idx) => (
                    <div 
                      key={idx}
                      className="transform group-hover:translate-x-2 transition-all duration-300"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <p className="text-sm font-semibold text-gray-500 group-hover:text-aziron-primary transition-colors duration-300">
                        {detail.label}
                      </p>
                      <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 group-hover:border-aziron-accent transition-colors duration-300">
                  <div className="flex justify-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-aziron-light flex items-center justify-center group-hover:bg-aziron-accent transition-colors duration-300">
                      <span className="text-aziron-primary">👔</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-aziron-light flex items-center justify-center group-hover:bg-aziron-accent transition-colors duration-300">
                      <span className="text-aziron-primary">📧</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated CTA */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-aziron-light to-white rounded-2xl p-8 shadow-lg inline-block hover-lift">
            <p className="text-xl text-gray-700 mb-4">
              Ready to work with our expert team?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 btn-primary shadow-lg hover:shadow-xl"
            >
              <span>Start Your Project</span>
              <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team