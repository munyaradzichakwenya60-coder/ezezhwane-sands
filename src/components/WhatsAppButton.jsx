import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/263718058420?text=Hi%2C%20I%20would%20like%20to%20order%20building%20materials"
      className="whatsapp-fab"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={30} />
      <span>Order on WhatsApp</span>
    </a>
  )
}
