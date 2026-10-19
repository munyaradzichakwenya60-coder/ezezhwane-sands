import { MdTerrain, MdWater, MdLandscape, MdConstruction, MdDeleteSweep } from 'react-icons/md'
import { useWhatsApp } from '../lib/whatsapp'
import './ServicesSection.css'

const services = [
  {
    icon: <MdTerrain size={40} />,
    title: 'Riversand',
    desc: 'Fine, clean riversand ideal for plastering, brickwork and general construction use. Delivered in full 21-tonne truck loads.',
    img: '/riversand.webp',
  },
  {
    icon: <MdWater size={40} />,
    title: 'Pitsand',
    desc: 'Coarse pitsand suitable for concrete mixing, foundation work and heavy-duty construction projects.',
    img: '/pitsand.webp',
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
    img: '/gravel.webp',
  },
  {
    icon: <MdDeleteSweep size={40} />,
    title: 'Rubble Removal',
    desc: 'We collect and remove building rubble from your site to any required location. Quick, reliable and affordable.',
    img: '/rubble-removal.webp',
  },
]

export default function ServicesSection() {
  const wa = useWhatsApp()
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>Products & Services</span></h2>
          <p>We supply high-quality construction aggregates (Riversand, Pitsand, Quarry and Gravel) to construction sites, contractors and homeowners across Bulawayo and surrounding areas.</p>
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
                <div className="service-actions">
                  <a
                    href={wa({ product: s.title, intent: 'order', where: 'products section' })}
                    className="service-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Order Now →
                  </a>
                  <a
                    href={wa({ product: s.title, intent: 'enquire', where: 'products section' })}
                    className="service-link service-link-alt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
