import { MdTerrain, MdWaves, MdGrain, MdDeleteSweep } from 'react-icons/md'
import { GiStonePile, GiBrickWall, GiConcreteBag } from 'react-icons/gi'
import { useWhatsApp } from '../lib/whatsapp'
import './ServicesSection.css'

const services = [
  {
    icon: <MdWaves size={40} />,
    title: 'Riversand',
    desc: 'Coarse, clean riversand suitable for concrete mixing, foundation work and heavy construction. Delivered in full 21-tonne truck loads.',
    img: '/riversand.webp',
  },
  {
    icon: <MdTerrain size={40} />,
    title: 'Pitsand',
    desc: 'Fine pitsand ideal for plastering, brickwork, mortar mixing and general construction use.',
    img: '/pitsand.webp',
  },
  {
    icon: <GiStonePile size={40} />,
    title: 'Quarry Stone',
    desc: 'Crushed quarry stone for concrete aggregates, road construction, drainage and structural foundations.',
    img: '/photos/quarry-stone.webp',
  },
  {
    icon: <MdGrain size={40} />,
    title: 'Gravel',
    desc: 'Natural gravel for driveways, landscaping, drainage solutions and construction fill material.',
    img: '/gravel.webp',
  },
  {
    icon: <GiBrickWall size={40} />,
    title: 'Bricks',
    desc: 'Quality bricks for building and walling. Message us for the current price and availability.',
    img: '/photos/bricks.webp',
  },
  {
    icon: <GiConcreteBag size={40} />,
    title: 'Cement',
    desc: 'Cement for building and construction. Message us for the current price and availability.',
    img: '/photos/cement.webp',
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
