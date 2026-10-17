import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { useWhatsApp } from '../lib/whatsapp'
import './Hero.css'

export default function Hero() {
  const wa = useWhatsApp()
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <p className="hero-sub">Bulawayo's Trusted Building Materials Supplier</p>
          <h1>
            Building Bulawayo,<br />
            <span>One Load at a Time</span>
          </h1>
          <p className="hero-desc">
            Riversand · Pitsand · Quarry · Gravel · Rubble Removal<br />
            21-tonne truck deliveries across Bulawayo and surrounding areas.
          </p>
          <div className="hero-btns">
            <a
              href={wa({ intent: 'order', where: 'top banner' })}
              className="btn-red hero-wa"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={18} /> Order on WhatsApp
            </a>
            <Link to="/products" className="btn-outline">Our Products</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
