import { openWhatsApp, TEAM_NUMBERS } from '../utils/whatsapp'

const ContactTeam = () => {
  const teamContacts = [
    {
      name: "Muhammad Haider Aziz",
      role: "CEO & Founder",
      department: "Leadership & Technical",
      email: "aziron.enterprise@gmail.com",
      phone: TEAM_NUMBERS.haider,
      whatsapp: TEAM_NUMBERS.haider,
      availability: "Mon-Fri, 9AM-5PM",
      expertise: "Solar Projects, Technical Consultation"
    },
    {
      name: "Abdul Basit",
      role: "Chief Operating Officer",
      department: "Operations & Construction",
      email: "aziron.enterprise@gmail.com",
      phone: TEAM_NUMBERS.basit,
      whatsapp: TEAM_NUMBERS.basit,
      availability: "Mon-Sat, 10AM-6PM",
      expertise: "Construction Projects, Project Management"
    },
    {
      name: "Anum Tahir",
      role: "Chief Technology Officer",
      department: "Technology & Innovation",
      email: "aziron.enterprise@gmail.com",
      phone: "Via Email",
      whatsapp: TEAM_NUMBERS.anum,
      availability: "Mon-Fri, 10AM-4PM",
      expertise: "Digital Solutions, AI Integration"
    }
  ]

  const departments = [
    {
      name: "Sales & Quotes",
      contact: "aziron.enterprise@gmail.com",
      phone: "+966 501361323",
      whatsapp: TEAM_NUMBERS.haider,
      focus: "New project inquiries, quotes"
    },
    {
      name: "Project Support",
      contact: "aziron.enterprise@gmail.com",
      phone: "+92 3224773766",
      whatsapp: TEAM_NUMBERS.anum,
      focus: "Existing projects, site visits"
    },
    {
      name: "Technical Support",
      contact: "aziron.enterprise@gmail.com",
      phone: "+92 3204671763",
      whatsapp: TEAM_NUMBERS.basit,
      focus: "System maintenance, troubleshooting"
    }
  ]

  const openTeamEmail = (name: string, role: string) => {
    const subject = encodeURIComponent(`Contact Request for ${name} - ${role}`)
    const body = encodeURIComponent(`Dear ${name},\n\nI would like to discuss:\n\n• Topic: \n• Preferred contact method: \n• Best time to reach: \n\nLooking forward to your response.\n\nBest regards,\n[Your Name]`)
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}&body=${body}`, '_blank')
  }

  const openTeamWhatsApp = (phoneNumber: string, memberName: string, memberRole: string) => {
    const message = `Hello ${memberName} (${memberRole}), I would like to get more information about your services.`
    openWhatsApp(phoneNumber, message)
  }

  const openDepartmentWhatsApp = (phoneNumber: string, departmentName: string) => {
    const message = `Hello ${departmentName} team, I would like to get more information about your services.`
    openWhatsApp(phoneNumber, message)
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
            
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => openTeamEmail(member.name, member.role)}
                className="flex-1 bg-white text-aziron-primary py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                Email {member.name.split(' ')[0]}
              </button>
              
              <button
                onClick={() => openTeamWhatsApp(member.whatsapp, member.name, member.role)}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                </svg>
                WhatsApp
              </button>
            </div>
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
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex justify-between items-center">
                  <a 
                    href={`mailto:${dept.contact}`}
                    className="text-sm hover:underline"
                  >
                    {dept.contact}
                  </a>
                  <a 
                    href={`tel:${dept.phone}`}
                    className="text-sm bg-white/10 px-3 py-1 rounded hover:bg-white/20 transition-colors"
                  >
                    Call
                  </a>
                </div>
                <button
                  onClick={() => openDepartmentWhatsApp(dept.whatsapp, dept.name)}
                  className="w-full bg-green-600/80 text-white py-1.5 rounded font-medium hover:bg-green-700/80 transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                  </svg>
                  WhatsApp
                </button>
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