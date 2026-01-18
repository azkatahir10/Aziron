// WhatsApp utility functions
export const openWhatsApp = (phoneNumber: string, message?: string) => {
  // Clean phone number (remove spaces, dashes, etc.)
  const cleanNumber = phoneNumber.replace(/\s+/g, '').replace('+', '')
  const defaultMessage = 'Hello, I would like to get more information about your services.'
  const encodedMessage = encodeURIComponent(message || defaultMessage)
  
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}

// Team member phone numbers
export const TEAM_NUMBERS = {
  haider: '+966501361323',
  basit: '+923204671763',
  anum: '+923224773766'
} as const

// Default number for general inquiries
export const DEFAULT_NUMBER = '+923204671763' // Basit's number