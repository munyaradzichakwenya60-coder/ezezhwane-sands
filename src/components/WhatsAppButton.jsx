import { FaWhatsapp } from 'react-icons/fa'
import { useWhatsApp } from '../lib/whatsapp'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  const wa = useWhatsApp()
  return (
    <a
      href={wa({ intent: 'order', where: 'floating button' })}
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
