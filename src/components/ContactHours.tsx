const ContactHours = () => {
  const hours = [
    { day: "Monday - Friday", time: "8:00 AM - 6:00 PM", type: "General Inquiries" },
    { day: "Saturday", time: "9:00 AM - 2:00 PM", type: "Project Consultations" },
    { day: "Sunday", time: "Closed", type: "Saudi Office" },
    { day: "Emergency Support", time: "24/7 Available", type: "Existing Projects" }
  ]

  const holidaySchedule = [
    { date: "Eid al-Fitr", period: "3-4 days", notice: "Advance notice provided" },
    { date: "Eid al-Adha", period: "3-4 days", notice: "Emergency support available" },
    { date: "National Day", period: "1 day", notice: "Limited services" }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-aziron-secondary mb-6">Operating Hours</h3>
      
      <div className="space-y-4 mb-8">
        {hours.map((hour, index) => (
          <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
            <div>
              <div className="font-semibold text-gray-800">{hour.day}</div>
              <div className="text-sm text-gray-600">{hour.type}</div>
            </div>
            <div className={`font-semibold ${hour.day === 'Emergency Support' ? 'text-green-600' : 'text-aziron-primary'}`}>
              {hour.time}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-aziron-light to-aziron-accent/20 rounded-xl p-4 mb-6">
        <h4 className="font-semibold text-aziron-secondary mb-2">⏰ Best Time to Reach Us</h4>
        <p className="text-sm text-gray-600">
          For quick responses, contact us between 10 AM - 4 PM on weekdays. 
          Quote requests are typically responded to within 24 hours.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Holiday Schedule 2024</h4>
        <div className="space-y-3">
          {holidaySchedule.map((holiday, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <div className="font-medium text-gray-700">{holiday.date}</div>
                <div className="text-sm text-gray-500">{holiday.notice}</div>
              </div>
              <div className="text-sm font-semibold text-aziron-primary bg-aziron-accent/20 px-3 py-1 rounded-full">
                {holiday.period}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-gray-800">Response Time</div>
            <div className="text-sm text-gray-600">Typically within 24 hours</div>
          </div>
          <div className="text-aziron-primary font-bold">24h</div>
        </div>
      </div>
    </div>
  )
}

export default ContactHours