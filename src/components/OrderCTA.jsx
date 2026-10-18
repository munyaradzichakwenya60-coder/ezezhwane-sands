import { FaWhatsapp } from 'react-icons/fa'
import { usePicker } from './ProductPicker'
import './OrderCTA.css'

export default function OrderCTA() {
  const { picker } = usePicker()
  return (
    <section className="order-cta">
      <div className="order-cta-overlay" />
      <div className="container order-cta-inner">
        <div className="order-cta-text">
          <h2>Ready to Order?</h2>
          <p>Message us on WhatsApp with your material, quantity and delivery location and we'll get back to you with a price and delivery time.</p>
        </div>
        <a
          {...picker('Ready to Order section')}
          className="cta-wa-btn"
        >
          <FaWhatsapp size={22} />
          WhatsApp Us Now
        </a>
      </div>
    </section>
  )
}
