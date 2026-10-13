import { FaWhatsapp } from 'react-icons/fa'
import './OrderCTA.css'

export default function OrderCTA() {
  return (
    <section className="order-cta">
      <div className="order-cta-overlay" />
      <div className="container order-cta-inner">
        <div className="order-cta-text">
          <h2>Ready to Order?</h2>
          <p>Message us on WhatsApp with your material, quantity and delivery location — we'll get back to you with a price and delivery time.</p>
        </div>
        <a
          href="https://wa.me/263XXXXXXXXX?text=Hi%20EzeZhwane%20Sands%2C%20I%20would%20like%20to%20order%20building%20materials"
          className="cta-wa-btn"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp size={22} />
          WhatsApp Us Now
        </a>
      </div>
    </section>
  )
}
