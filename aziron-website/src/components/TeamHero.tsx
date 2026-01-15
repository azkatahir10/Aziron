const TeamHero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-aziron-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-aziron-secondary mb-6">
            Meet Our <span className="text-aziron-primary">Expert Team</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Led by industry professionals with decades of combined experience in energy and construction sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#team-members" 
              className="bg-gradient-to-r from-aziron-primary to-aziron-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Meet the Team
            </a>
            <a 
              href="/contact" 
              className="border-2 border-aziron-primary text-aziron-primary px-8 py-3 rounded-lg font-semibold hover:bg-aziron-primary hover:text-white transition-all duration-300"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamHero