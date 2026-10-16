import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import './Hero.css'

export default function Hero() {
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
              href="https://wa.me/263718058420?text=Hi%2C%20I%20would%20like%20to%20order%20building%20materials"
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
