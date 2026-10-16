import { MdTerrain, MdWater, MdLandscape, MdConstruction, MdDeleteSweep } from 'react-icons/md'
import './ServicesSection.css'

const services = [
  {
    icon: <MdTerrain size={40} />,
    title: 'Riversand',
    desc: 'Fine, clean riversand ideal for plastering, brickwork and general construction use. Delivered in full 21-tonne truck loads.',
    img: '/riversand.png',
  },
  {
    icon: <MdWater size={40} />,
    title: 'Pitsand',
    desc: 'Coarse pitsand suitable for concrete mixing, foundation work and heavy-duty construction projects.',
    img: '/pitsand.png',
  },
  {
    icon: <MdLandscape size={40} />,
    title: 'Quarry Stone',
    desc: 'Crushed quarry stone for concrete aggregates, road construction, drainage and structural foundations.',
    img: '/quarry-stone.jpg',
  },
  {
    icon: <MdConstruction size={40} />,
    title: 'Gravel',
    desc: 'Natural gravel for driveways, landscaping, drainage solutions and construction fill material.',
    img: '/gravel.png',
  },
  {
    icon: <MdDeleteSweep size={40} />,
    title: 'Rubble Removal',
    desc: 'We collect and remove building rubble from your site to any required location — quick, reliable and affordable.',
    img: '/rubble-removal.png',
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
                  href={`https://wa.me/263718058420?text=Hi%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(s.title)}`}
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
