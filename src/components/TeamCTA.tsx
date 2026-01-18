const TeamCTA = () => {
  const openJoinUsEmail = () => {
    const subject = encodeURIComponent("Career Inquiry - Join AZIRON Team")
    const body = encodeURIComponent(`Dear AZIRON Team,\n\nI am interested in career opportunities at AZIRON.\n\n• Position interested in:\n• My experience:\n• Education:\n• Skills:\n\nPlease contact me to discuss opportunities.\n\nBest regards,\n[Your Name]\n[Contact Information]`)
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}&body=${body}`, '_blank')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-aziron-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join Our <span className="text-aziron-accent">Growing Team</span>
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          We're always looking for talented professionals passionate about energy and construction innovation
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <button
            onClick={openJoinUsEmail}
            className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 text-lg flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Inquire About Careers
          </button>
          <a
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            Contact HR Team
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
          <h4 className="text-2xl font-semibold mb-4">Current Opportunities</h4>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/5 rounded-xl p-6">
              <h5 className="text-xl font-semibold mb-2">Solar Engineer</h5>
              <p className="text-sm opacity-90 mb-4">Design and implement solar energy systems</p>
              <span className="text-xs bg-aziron-accent/30 text-aziron-accent px-3 py-1 rounded-full">Full-time</span>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <h5 className="text-xl font-semibold mb-2">Construction Manager</h5>
              <p className="text-sm opacity-90 mb-4">Oversee construction projects end-to-end</p>
              <span className="text-xs bg-aziron-accent/30 text-aziron-accent px-3 py-1 rounded-full">Contract</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamCTA