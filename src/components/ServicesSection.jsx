import { MdTerrain, MdWater, MdLandscape, MdConstruction, MdDeleteSweep } from 'react-icons/md'
import './ServicesSection.css'

const services = [
  {
    icon: <MdTerrain size={40} />,
    title: 'Riversand',
    desc: 'Fine, clean riversand ideal for plastering, brickwork and general construction use. Delivered in full 21-tonne truck loads.',
    img: 'https://images.unsplash.com/photo-1500479694472-551d1fb6258d?w=600&q=80',
  },
  {
    icon: <MdWater size={40} />,
    title: 'Pitsand',
    desc: 'Coarse pitsand suitable for concrete mixing, foundation work and heavy-duty construction projects.',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
  },
  {
    icon: <MdLandscape size={40} />,
    title: 'Quarry Stone',
    desc: 'Crushed quarry stone for concrete aggregates, road construction, drainage and structural foundations.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  },
  {
    icon: <MdConstruction size={40} />,
    title: 'Gravel',
    desc: 'Natural gravel for driveways, landscaping, drainage solutions and construction fill material.',
    img: 'https://images.unsplash.com/photo-1568022162802-1f1d9c9ef87e?w=600&q=80',
  },
  {
    icon: <MdDeleteSweep size={40} />,
    title: 'Rubble Removal',
    desc: 'We collect and remove building rubble from your site to any required location — quick, reliable and affordable.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
]

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>Products & Services</span></h2>
          <p>We supply high-quality building materials to construction sites, contractors and homeowners across Bulawayo and surrounding areas.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-img" style={{ backgroundImage: `url(${s.img})` }}>
                <div className="service-img-overlay" />
              </div>
              <div className="service-body">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a
                  href={`https://wa.me/263XXXXXXXXX?text=Hi%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(s.title)}`}
                  className="service-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Order Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
