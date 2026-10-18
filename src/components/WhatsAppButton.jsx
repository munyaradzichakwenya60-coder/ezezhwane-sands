import { FaWhatsapp } from 'react-icons/fa'
import { usePicker } from './ProductPicker'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  const { picker } = usePicker()
  return (
    <a
      {...picker('floating button')}
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={30} />
      <span>Order on WhatsApp</span>
    </a>
  )
}
