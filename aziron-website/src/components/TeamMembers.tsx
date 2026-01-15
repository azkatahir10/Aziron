import { useState } from 'react'

interface TeamMember {
  id: number
  name: string
  role: string
  education: string
  experience: string
  expertise: string[]
  image?: string
  certifications: string[]
  projects: string[]
  email: string
  phone: string
}

const TeamMembers = () => {
  const [activeMember, setActiveMember] = useState<number>(1)

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Muhammad Haider Aziz",
      role: "CEO & Founder",
      education: "BS Electrical Engineering, University of Central Punjab",
      experience: "7+ years in industrial maintenance, automation, and renewable energy projects",
      expertise: ["PLC Programming", "Solar System Installation", "Chiller Optimization", "Large-scale Project Management"],
      certifications: ["Registered Engineer - Saudi Engineering Council", "Registered Engineer - Pakistan Engineering Council"],
      projects: ["6MW Solar Power Plant", "Industrial Automation Systems", "Commercial Solar Installations"],
      email: "aziron.enterprise@gmail.com",
      phone: "+966 501361323"
    },
    {
      id: 2,
      name: "Abdul Basit",
      role: "Chief Operating Officer",
      education: "Mechanical Engineering, University of Engineering & Technology (UET) Lahore",
      experience: "Extensive practical experience in construction industry",
      expertise: ["Project Management", "General Contracting", "Sustainable Building Practices", "Renovation & Remodeling"],
      certifications: ["Construction Management", "Project Management Professional"],
      projects: ["Commercial Building Projects", "Residential Complexes", "Industrial Facilities"],
      email: "aziron.enterprise@gmail.com",
      phone: "+92 3204671763"
    },
    {
      id: 3,
      name: "Anum Tahir",
      role: "Chief Technology Officer",
      education: "MS Computer Science (LUMS), BS Computer Science (UET Lahore)",
      experience: "Microsoft Certified Data Scientist and AI Engineer",
      expertise: ["Data Analytics", "Machine Learning", "Cloud-based AI Solutions", "Predictive Modeling"],
      certifications: ["Microsoft Certified: Data Scientist", "Microsoft Certified: AI Engineer"],
      projects: ["Energy Optimization Systems", "Smart Construction Solutions", "Automated Data Workflows"],
      email: "aziron.enterprise@gmail.com",
      phone: "Via Email"
    }
  ]

  const getMemberImage = (memberId: number) => {
    // Placeholder images - replace with actual images
    const imageUrls = [
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
    return imageUrls[memberId - 1]
  }

  const openMemberEmail = (member: TeamMember) => {
    const subject = encodeURIComponent(`Team Inquiry - ${member.name}`)
    const body = encodeURIComponent(`Dear ${member.name},\n\nI would like to discuss:\n\n• Topic: \n• Related to your expertise in: ${member.expertise[0]}\n• Best time to contact: \n\nLooking forward to your response.\n\nBest regards,\n[Your Name]`)
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}&su=${subject}&body=${body}`, '_blank')
  }

  return (
    <section id="team-members" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-aziron-secondary mb-6">
            Our <span className="text-aziron-primary">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals driving innovation in energy and construction industries
          </p>
        </div>

        {/* Team Member Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {teamMembers.map((member) => (
            <button
              key={member.id}
              onClick={() => setActiveMember(member.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeMember === member.id
                  ? 'bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {member.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Active Member Display */}
        <div className="max-w-6xl mx-auto">
          {teamMembers
            .filter(member => member.id === activeMember)
            .map((member) => (
              <div key={member.id} className="bg-gradient-to-br from-white to-aziron-light rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Member Image & Basic Info */}
                  <div className="space-y-6">
                    <div className="relative">
                      <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                        <img 
                          src={getMemberImage(member.id)} 
                          alt={member.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white px-6 py-2 rounded-full font-bold">
                        {member.role}
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h3 className="text-2xl font-bold text-aziron-secondary mb-4">Quick Contact</h3>
                      <div className="space-y-3">
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-3 text-gray-700 hover:text-aziron-primary transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span className="break-all">{member.email}</span>
                        </a>
                        {member.phone !== "Via Email" && (
                          <a 
                            href={`tel:${member.phone}`}
                            className="flex items-center gap-3 text-gray-700 hover:text-aziron-primary transition-colors"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                            </svg>
                            <span>{member.phone}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-aziron-secondary mb-2">{member.name}</h3>
                      <p className="text-aziron-primary font-semibold text-lg mb-4">{member.role}</p>
                      <p className="text-gray-600">{member.experience}</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-aziron-secondary mb-3">Education & Qualifications</h4>
                      <p className="text-gray-700">{member.education}</p>
                      <div className="mt-3 space-y-2">
                        {member.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-aziron-secondary mb-3">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-aziron-accent to-aziron-light text-aziron-secondary rounded-full text-sm font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-aziron-secondary mb-3">Notable Projects</h4>
                      <ul className="space-y-2">
                        {member.projects.map((project, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <span className="w-2 h-2 bg-aziron-primary rounded-full"></span>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => openMemberEmail(member)}
                      className="w-full bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Contact {member.name.split(' ')[0]}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* All Team Members Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-aziron-secondary text-center mb-12">Complete Team Overview</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={getMemberImage(member.id)} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h4>
                  <p className="text-aziron-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.experience}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{member.expertise.length} areas of expertise</span>
                    <button
                      onClick={() => setActiveMember(member.id)}
                      className="text-aziron-primary hover:text-aziron-secondary font-semibold text-sm"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamMembers