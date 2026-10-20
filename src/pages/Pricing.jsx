import { useState } from 'react'
import { useWhatsApp } from '../lib/whatsapp'
import './Pricing.css'
import './PageStyles.css'

const areas = [
  {
    name: 'Western Bulawayo',
    products: [
      { name: 'Riversand', price: 260 },
      { name: 'Pitsand', price: 240 },
      { name: 'Quarry (Transport)', price: 140 },
    ],
  },
  {
    name: 'Eastern Bulawayo',
    products: [
      { name: 'Riversand', price: 270 },
      { name: 'Pitsand', price: 240 },
      { name: 'Quarry (Transport)', price: 150 },
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

export default function Pricing() {
  const [active, setActive] = useState(0)
  const wa = useWhatsApp()
  const area = areas[active]

  return (
    <>
      {/* Page hero */}
      <section className="page-hero pricing-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <h1>Delivery Pricing</h1>
          <p>All prices are per 21-tonne truckload, payment before delivery encouraged</p>
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
                  href={wa({ product: p.name, intent: 'order', area: area.name, price: p.price, where: 'price card' })}
                  className="pricing-card-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order via WhatsApp
                </a>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="pricing-disclaimer">
            Prices are for delivery within Bulawayo and surrounding areas. Outside-Bulawayo deliveries
            are available by agreement. Contact us for a quote.
          </p>

          {/* Payment options */}
          <div className="payment-options">
            <h2 className="payment-options-title">Payment Options</h2>
            <p className="payment-options-subtitle">We accept payment before delivery via the following methods:</p>
            <div className="payment-options-grid">
              <div className="payment-option-card">
                <div className="payment-option-icon">🌍</div>
                <h3>Diaspora (SA Account)</h3>
                <p>
                  Customers in the diaspora can deposit funds directly into our South African bank account.
                  Contact us on WhatsApp for our SA banking details before making payment.
                </p>
                <a
                  href={wa({ product: 'Payment', intent: 'enquire', area: 'Diaspora SA Account', where: 'payment options' })}
                  className="pricing-card-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get SA Account Details
                </a>
              </div>
              <div className="payment-option-card">
                <div className="payment-option-icon">🏦</div>
                <h3>Local Transfer (Zimbabwe)</h3>
                <p>
                  Local customers can transfer into our Zimbabwean account after discussing and agreeing
                  on the order. Contact us to confirm your order first, then we will provide banking details.
                </p>
                <a
                  href={wa({ product: 'Payment', intent: 'enquire', area: 'Local ZW Account', where: 'payment options' })}
                  className="pricing-card-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Local Account Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
