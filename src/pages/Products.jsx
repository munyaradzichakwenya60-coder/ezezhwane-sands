import { FaWhatsapp } from 'react-icons/fa'
import { useWhatsApp } from '../lib/whatsapp'
import './PageStyles.css'

const products = [
  {
    title: 'Riversand',
    desc: 'Coarse, clean riversand suitable for concrete mixing, foundation work and heavy construction. Sourced from quality river beds.',
    img: '/riversand.webp',
    uses: 'Concrete · Foundations · Heavy Builds',
  },
  {
    title: 'Pitsand',
    desc: 'Fine pitsand ideal for plastering, brickwork, mortar mixing and all general construction use. Smoother and finer than riversand.',
    img: '/pitsand.webp',
    uses: 'Plastering · Brickwork · Mortar',
  },
  {
    title: 'Quarry Stone',
    desc: 'Crushed quarry stone for concrete aggregates, road construction, drainage systems and structural foundation work.',
    img: '/photos/quarry-stone.webp',
    uses: 'Concrete Aggregate · Roads · Drainage',
  },
  {
    title: 'Gravel',
    desc: 'Natural gravel suitable for driveways, landscaping, drainage solutions, pathway construction and general fill.',
    img: '/gravel.webp',
    uses: 'Driveways · Landscaping · Fill',
  },
  {
    title: 'Bricks',
    desc: 'Quality bricks for building and walling. Message us for the current price and availability.',
    img: '/photos/bricks.webp',
    uses: 'Building · Walling · Foundations',
  },
  {
    title: 'Cement',
    desc: 'Cement for building and construction. Message us for the current price and availability.',
    img: '/photos/cement.webp',
    uses: 'Concrete · Plastering · Blocks',
  },
  {
    title: 'Rubble Removal',
    desc: 'We collect and remove building rubble from households and construction sites to any required disposal location.',
    img: '/rubble-removal.webp',
    uses: 'Site Cleanup · Household Rubble',
  },
  {
    title: 'Bulk Delivery',
    desc: 'All materials are delivered in our 21-tonne trucks, filled to capacity. We cover Bulawayo and surrounding areas.',
    img: '/photos/truck-side.webp',
    uses: '21 Tonnes · Full Load · City + Surrounds',
  },
]

export default function Products() {
  const wa = useWhatsApp()
  return (
    <main>
      <div
        className="page-hero"
        style={{ backgroundImage: "url('/photos/truck-front.webp')" }}
      >
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Our <span>Products</span></h1>
          <p>Quality construction aggregates delivered to your site</p>
        </div>
      </div>

      <section className="products-section">
        <div className="container">
          <div className="section-title">
            <h2>What We <span>Supply</span></h2>
            <p>Sand, stone and gravel are delivered in 21-tonne truck loads. Contact us on WhatsApp to get a price and confirm availability.</p>
          </div>
          <div className="products-grid">
            {products.map((p, i) => (
              <div className="product-card" key={i}>
                <div className="product-card-img" style={{ backgroundImage: `url(${p.img})` }} />
                <div className="product-card-body">
                  <h3>{p.title}</h3>
                  <p style={{ marginBottom: 6 }}>{p.desc}</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--red)', fontWeight: 700, marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {p.uses}
                  </p>
                  <div className="product-actions">
                    <a
                      href={wa({ product: p.title, intent: 'order', where: 'product card' })}
                      className="product-order-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp size={15} /> Order
                    </a>
                    <a
                      href={wa({ product: p.title, intent: 'enquire', where: 'product card' })}
                      className="product-order-btn product-enquire-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp size={15} /> Enquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
