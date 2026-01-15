import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-aziron-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-aziron-secondary mb-6">
            Request Your Free Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contact us via email for expert consultation. All information will be sent to our official email:
            <span className="block font-semibold text-aziron-primary mt-2">
              aziron.enterprise@gmail.com
            </span>
          </p>
        </div>

        <ContactForm 
          initialSubject="Quote Request from Website"
          initialMessage="Hello AZIRON Team,\n\nI would like to request a quote for:\n\n• Project Type: \n• Location: \n• Estimated Budget: \n• Timeline: \n\nPlease provide detailed information about your services and pricing.\n\nThank you,\n[Your Name]"
        />

        {/* Quick Contact Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-aziron-secondary mb-4">Direct Email</h3>
            <a 
              href="mailto:aziron.enterprise@gmail.com" 
              className="text-lg text-aziron-primary hover:text-aziron-secondary break-all"
            >
              aziron.enterprise@gmail.com
            </a>
            <p className="text-gray-600 mt-2">Click to open your email client</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-aziron-secondary mb-4">Phone Numbers</h3>
            <div className="space-y-2">
              <a href="tel:+966501361323" className="block text-lg text-gray-700 hover:text-aziron-primary">
                +966 501361323
              </a>
              <a href="tel:+923204671763" className="block text-lg text-gray-700 hover:text-aziron-primary">
                +92 3204671763
              </a>
              <a href="tel:+923224773766" className="block text-lg text-gray-700 hover:text-aziron-primary">
                +92 3224773766
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-aziron-secondary mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aziron.enterprise@gmail.com&su=Quick Quote Request&body=Hello AZIRON Team,%0D%0A%0D%0APlease send me a quote.%0D%0A%0D%0ABest regards,"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg text-blue-600 hover:text-blue-800"
              >
                Open Gmail Compose
              </a>
              <button
                onClick={() => navigator.clipboard.writeText('aziron.enterprise@gmail.com')}
                className="text-lg text-purple-600 hover:text-purple-800"
              >
                Copy Email Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact