const ContactTeam = () => {
  const teamContacts = [
    {
      name: "Muhammad Haider Aziz",
      role: "CEO & Founder",
      department: "Leadership & Technical",
      email: "aziron.enterprise@gmail.com",
      phone: "+966 501361323",
      availability: "Mon-Fri, 9AM-5PM",
      expertise: "Solar Projects, Technical Consultation"
    },
    {
      name: "Abdul Basit",
      role: "Chief Operating Officer",
      department: "Operations & Construction",
      email: "aziron.enterprise@gmail.com",
      phone: "+92 3204671763",
      availability: "Mon-Sat, 10AM-6PM",
      expertise: "Construction Projects, Project Management"
    },
    {
      name: "Anum Tahir",
      role: "Chief Technology Officer",
      department: "Technology & Innovation",
      email: "aziron.enterprise@gmail.com",
      phone: "Via Email",
      availability: "Mon-Fri, 10AM-4PM",
      expertise: "Digital Solutions, AI Integration"
    }
  ]

  const departments = [
    {
      name: "Sales & Quotes",
      contact: "aziron.enterprise@gmail.com",
      phone: "+966 501361323",
      focus: "New project inquiries, quotes"
    },
    {
      name: "Project Support",
      contact: "aziron.enterprise@gmail.com",
      phone: "+92 3224773766",
      focus: "Existing projects, site visits"
    },
    {
      name: "Technical Support",
      contact: "aziron.enterprise@gmail.com",
      phone: "+92 3204671763",
      focus: "System maintenance, troubleshooting"
    }
  ]

  const openTeamEmail = (name: string, role: string) => {
    const subject = encodeURIComponent(`Contact Request for ${name} - ${role}`)
    const body = encodeURIComponent(`Dear ${name},\n\nI would like to discuss:\n\n• Topic: \n• Preferred contact method: \n• Best time to reach: \n\nLooking forward to your response.\n\nBest regards,\n[Your Name]`)
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}&body=${body}`, '_blank')
  }

  return (
    <div className="bg-gradient-to-br from-aziron-secondary to-aziron-primary text-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-6">Team Contacts</h3>
      
      <div className="space-y-6 mb-8">
        {teamContacts.map((member, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-bold text-lg">{member.name}</h4>
                <p className="text-aziron-light text-sm">{member.role}</p>
              </div>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {member.department}
              </span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>{member.email}</span>
              </div>
              
              {member.phone !== "Via Email" && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <a href={`tel:${member.phone}`} className="hover:underline">
                    {member.phone}
                  </a>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{member.availability}</span>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-white/20">
              <p className="text-xs text-aziron-light mb-2">Expertise:</p>
              <p className="text-sm">{member.expertise}</p>
            </div>
            
            <button
              onClick={() => openTeamEmail(member.name, member.role)}
              className="w-full mt-4 bg-white text-aziron-primary py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              Email {member.name.split(' ')[0]}
            </button>
          </div>
        ))}
      </div>

      <div>
        <h4 className="font-bold text-lg mb-4">Department Contacts</h4>
        <div className="space-y-3">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-3">
              <div className="font-semibold mb-1">{dept.name}</div>
              <div className="text-sm text-aziron-light">Focus: {dept.focus}</div>
              <div className="flex justify-between items-center mt-2">
                <a 
                  href={`mailto:${dept.contact}`}
                  className="text-sm hover:underline"
                >
                  {dept.contact}
                </a>
                <a 
                  href={`tel:${dept.phone}`}
                  className="text-sm bg-white/10 px-2 py-1 rounded hover:bg-white/20 transition-colors"
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/20 text-center">
        <p className="text-sm text-aziron-light">
          For urgent matters outside business hours, please email with "URGENT" in the subject line.
        </p>
      </div>
    </div>
  )
}

export default ContactTeam