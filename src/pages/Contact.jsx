import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { buildMessage, WHATSAPP_NUMBER } from '../lib/whatsapp'
import './PageStyles.css'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const material = form.material.value
    const message = form.message.value
    const phone = form.phone.value
    const text = buildMessage({
      intent: 'enquire',
      product: material === 'Multiple Materials' ? undefined : material,
      extra: [
        `Name: ${name}`,
        phone ? `Phone: ${phone}` : null,
        material === 'Multiple Materials' ? 'Material: Multiple materials' : null,
        `Details: ${message}`,
      ].filter(Boolean).join('\n'),
      source: 'Contact page (enquiry form)',
    })
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <main>
      <div
        className="page-hero"
        style={{ backgroundImage: "url('/photos/site-banner.webp')" }}
      >
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Contact <span>Us</span></h1>
          <p>Get a quote or place an order. We respond fast</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="section-title">
            <h2>Get In <span>Touch</span></h2>
            <p>Fill in the form below and we'll redirect you to WhatsApp with your details pre-filled, the fastest way to get a quote.</p>
          </div>

          <div className="contact-inner">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <ul className="contact-info-list">
                <li>
                  <MdLocationOn size={22} className="ci-icon" />
                  <div>
                    <strong>Location</strong>
                    Bulawayo, Zimbabwe
                  </div>
                </li>
                <li>
                  <MdPhone size={22} className="ci-icon" />
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:+263718058420">+263 71 805 8420</a>
                  </div>
                </li>
                <li>
                  <FaWhatsapp size={22} className="ci-icon" />
                  <div>
                    <strong>WhatsApp Orders</strong>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">Message us on WhatsApp</a>
                  </div>
                </li>
                <li>
                  <MdEmail size={22} className="ci-icon" />
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:info@ezezhwanesands.co.zw">info@ezezhwanesands.co.zw</a>
                  </div>
                </li>
                <li>
                  <MdAccessTime size={22} className="ci-icon" />
                  <div>
                    <strong>Operating Hours</strong>
                    Monday to Saturday: 7am to 5pm<br />
                    Sunday: By arrangement
                  </div>
                </li>
              </ul>
            </div>

            <div className="contact-form">
              <h3>Place an Order Enquiry</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input id="name" name="name" type="text" placeholder="John Moyo" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="+263 77 XXX XXXX" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="material">Material Needed</label>
                  <select id="material" name="material" required>
                    <option value="">Select a material...</option>
                    <option>Riversand</option>
                    <option>Pitsand</option>
                    <option>Quarry Stone</option>
                    <option>Gravel</option>
                    <option>Rubble Removal</option>
                    <option>Multiple Materials</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Delivery Location & Details</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us your delivery address, quantity needed, and any other details..."
                    required
                  />
                </div>
                <button type="submit" className="btn-red" style={{ width: '100%', padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <FaWhatsapp size={18} /> Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
