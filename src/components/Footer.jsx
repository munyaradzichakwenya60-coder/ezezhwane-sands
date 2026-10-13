import { Link } from 'react-router-dom'
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'
import { FaWhatsapp, FaFacebook } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-ez">EZE</span>
            <span className="logo-zhwane">ZHWANE</span>
            <span className="logo-sands">SANDS</span>
          </div>
          <p>
            Freecarokani Investment Private Limited. Supplying quality building materials across Bulawayo and surrounding areas.
          </p>
          <div className="footer-social">
            <a href="https://wa.me/263XXXXXXXXX" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={18} />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook size={18} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-products">
          <h4>Our Products</h4>
          <ul>
            <li>Riversand</li>
            <li>Pitsand</li>
            <li>Quarry Stone</li>
            <li>Gravel</li>
            <li>Rubble Removal</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <ul>
            <li>
              <MdLocationOn size={16} />
              <span>Bulawayo, Zimbabwe</span>
            </li>
            <li>
              <MdPhone size={16} />
              <a href="tel:+263XXXXXXXXX">+263 XX XXX XXXX</a>
            </li>
            <li>
              <MdEmail size={16} />
              <a href="mailto:info@ezezhwanesands.co.zw">info@ezezhwanesands.co.zw</a>
            </li>
            <li>
              <FaWhatsapp size={16} />
              <a href="https://wa.me/263XXXXXXXXX" target="_blank" rel="noreferrer">WhatsApp Orders</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} EzeZhwane Sands — Freecarokani Investment Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
