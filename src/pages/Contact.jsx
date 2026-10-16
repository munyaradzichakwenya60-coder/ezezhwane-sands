import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import './PageStyles.css'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const material = form.material.value
    const message = form.message.value
    const text = `Hi EzeZhwane Sands, my name is ${name}. I need ${material}. ${message}`
    window.open(`https://wa.me/263718058420?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <main>
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80')" }}
      >
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Contact <span>Us</span></h1>
          <p>Get a quote or place an order — we respond fast</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="section-title">
            <h2>Get In <span>Touch</span></h2>
            <p>Fill in the form below and we'll redirect you to WhatsApp with your details pre-filled — fastest way to get a quote.</p>
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
                    <a href="https://wa.me/263718058420" target="_blank" rel="noreferrer">Message us on WhatsApp</a>
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
                    Monday – Saturday: 7am – 5pm<br />
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
