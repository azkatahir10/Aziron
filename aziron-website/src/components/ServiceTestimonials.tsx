const ServiceTestimonials = () => {
  const testimonials = [
    {
      name: "Ahmed R.",
      company: "Residential Client, Riyadh",
      project: "Solar Installation",
      quote: "Professional team, excellent installation, and great after-service support. My electricity bills reduced by 70%!",
      rating: 5,
      date: "January 2024"
    },
    {
      name: "Sarah M.",
      company: "Commercial Building Owner",
      project: "Complete Renovation",
      quote: "AZIRON handled our office renovation perfectly. They completed on time and within budget. Highly recommended!",
      rating: 5,
      date: "December 2023"
    },
    {
      name: "Industrial Solutions Ltd.",
      company: "Manufacturing Facility",
      project: "6MW Solar Plant",
      quote: "Large-scale project handled professionally. The solar plant has been running flawlessly for 18 months now.",
      rating: 5,
      date: "August 2023"
    }
  ]

  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "200+", label: "Projects Completed" },
    { value: "24/7", label: "Support Available" },
    { value: "7+", label: "Years Experience" }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-aziron-secondary mb-6">
            What Our <span className="text-aziron-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from clients who have experienced our services firsthand
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.company}</div>
                <div className="text-xs text-aziron-primary mt-1">{testimonial.project} • {testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-aziron-primary to-aziron-secondary rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const subject = encodeURIComponent("Request Client References")
              const body = encodeURIComponent(`Hello AZIRON Team,\n\nI would like to:\n\n• See more client testimonials\n• Request references for similar projects\n• Speak with past clients\n\nMy project type:\n\nBest regards,\n[Your Name]`)
              window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=${subject}&body=${body}`, '_blank')
            }}
            className="inline-flex items-center gap-2 text-lg font-semibold text-aziron-primary hover:text-aziron-secondary transition-colors"
          >
            Request More References
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServiceTestimonials