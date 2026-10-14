import { FaWhatsapp } from 'react-icons/fa'
import './PageStyles.css'

const products = [
  {
    title: 'Riversand',
    desc: 'Fine, clean riversand ideal for plastering, brickwork, mortar mixing and all general construction use. Sourced from quality river beds.',
    img: '/riversand.png',
    uses: 'Plastering · Brickwork · Mortar',
  },
  {
    title: 'Pitsand',
    desc: 'Coarse pitsand suitable for concrete mixing, foundation work and heavy construction. Stronger and coarser than riversand.',
    img: '/pitsand.png',
    uses: 'Concrete · Foundations · Heavy Builds',
  },
  {
    title: 'Quarry Stone',
    desc: 'Crushed quarry stone for concrete aggregates, road construction, drainage systems and structural foundation work.',
    img: '/quarry-stone.jpg',
    uses: 'Concrete Aggregate · Roads · Drainage',
  },
  {
    title: 'Gravel',
    desc: 'Natural gravel suitable for driveways, landscaping, drainage solutions, pathway construction and general fill.',
    img: '/gravel.jpg',
    uses: 'Driveways · Landscaping · Fill',
  },
  {
    title: 'Rubble Removal',
    desc: 'We collect and remove building rubble from households and construction sites to any required disposal location.',
    img: '/rubble-removal.png',
    uses: 'Site Cleanup · Household Rubble',
  },
  {
    title: 'Bulk Delivery',
    desc: 'All materials are delivered in our 21-tonne trucks — filled to capacity. We cover Bulawayo and surrounding areas.',
    img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&q=80',
    uses: '21 Tonnes · Full Load · City + Surrounds',
  },
]

export default function Products() {
  return (
    <main>
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80')" }}
      >
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Our <span>Products</span></h1>
          <p>Quality raw building materials delivered to your site</p>
        </div>
      </div>

      <section className="products-section">
        <div className="container">
          <div className="section-title">
            <h2>What We <span>Supply</span></h2>
            <p>All materials are delivered in 21-tonne truck loads. Contact us on WhatsApp to get a price and confirm availability.</p>
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
                  <a
                    href={`https://wa.me/263XXXXXXXXX?text=Hi%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(p.title)}`}
                    className="product-order-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp size={15} /> Order on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
