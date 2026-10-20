import { useState } from 'react'
import './Pricing.css'
import './PageStyles.css'

const areas = [
  {
    name: 'Western Bulawayo',
    products: [
      { name: 'Riversand', price: 260 },
      { name: 'Pitsand', price: 240 },
      { name: 'Quarry (Transport)', price: 120 },
    ],
  },
  {
    name: 'Eastern Bulawayo',
    products: [
      { name: 'Riversand', price: 270 },
      { name: 'Pitsand', price: 240 },
      { name: 'Quarry (Transport)', price: 130 },
    ],
  },
  {
    name: 'Emzinyathini',
    products: [
      { name: 'Riversand', price: 290 },
      { name: 'Pitsand', price: 270 },
      { name: 'Quarry (Transport)', price: 190 },
    ],
  },
  {
    name: 'Cyrene Area',
    products: [
      { name: 'Riversand', price: 340 },
      { name: 'Pitsand', price: 280 },
      { name: 'Quarry (Transport)', price: 220 },
    ],
  },
]

const WHATSAPP = '263718058420'

export default function Pricing() {
  const [active, setActive] = useState(0)
  const area = areas[active]

  return (
    <>
      {/* Page hero */}
      <section className="page-hero pricing-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <h1>Delivery Pricing</h1>
          <p>All prices are per 21-tonne truckload, paid before delivery</p>
        </div>
      </section>

      <section className="pricing-section">
        <div className="pricing-container">
          <p className="pricing-note">Select your delivery area to see current rates:</p>

          {/* Area tabs */}
          <div className="pricing-tabs">
            {areas.map((a, i) => (
              <button
                key={a.name}
                className={`pricing-tab${active === i ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                {a.name}
              </button>
            ))}
          </div>

          {/* Price cards */}
          <div className="pricing-cards">
            {area.products.map((p) => (
              <div className="pricing-card" key={p.name}>
                <div className="pricing-card-name">{p.name}</div>
                <div className="pricing-card-price">${p.price}<span>.00</span></div>
                <div className="pricing-card-meta">Per 21-tonne load · {area.name}</div>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I'd%20like%20to%20order%20${encodeURIComponent(p.name)}%20delivered%20to%20${encodeURIComponent(area.name)}.%20Price%3A%20%24${p.price}`}
                  className="pricing-card-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order via WhatsApp
                </a>
              </div>
            ))}
          </div>

          {/* Payment options */}
          <div className="pricing-payment">
            <h3>Payment Options</h3>
            <div className="pricing-payment-grid">
              <div className="pricing-payment-card">
                <div className="pricing-payment-icon">🌍</div>
                <h4>Diaspora Payments</h4>
                <p>Clients in the diaspora can deposit payment directly into our <strong>South African bank account</strong>. Contact us on WhatsApp to get the account details before placing your order.</p>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I'm%20in%20the%20diaspora%20and%20would%20like%20to%20pay%20via%20your%20SA%20account.%20Please%20send%20me%20the%20details.`}
                  className="pricing-card-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get SA Account Details
                </a>
              </div>
              <div className="pricing-payment-card">
                <div className="pricing-payment-icon">🏦</div>
                <h4>Local Transfers</h4>
                <p>Local clients can transfer payment into our <strong>local bank account</strong> after discussion and agreement. Reach out on WhatsApp to confirm your order and receive account details.</p>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I'm%20a%20local%20client%20and%20would%20like%20to%20pay%20via%20local%20bank%20transfer.%20Please%20advise.`}
                  className="pricing-card-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discuss Payment
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="pricing-disclaimer">
            Prices are for delivery within Bulawayo and surrounding areas. Outside-Bulawayo deliveries
            are available by agreement — contact us for a quote.
          </p>
        </div>
      </section>
    </>
  )
}
