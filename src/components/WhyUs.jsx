import { Link } from 'react-router-dom'
import './WhyUs.css'

const points = [
  {
    num: '01',
    title: '21-Tonne Deliveries',
    desc: 'Full truck loads delivered directly to your site. No middlemen, no delays.',
  },
  {
    num: '02',
    title: 'Quality Materials',
    desc: 'Every load is clean, graded and sourced from trusted quarries and river sources.',
  },
  {
    num: '03',
    title: 'Flexible Payment',
    desc: 'We encourage payment before delivery but we work with clients on agreements.',
  },
  {
    num: '04',
    title: 'Wide Coverage',
    desc: 'Based in Bulawayo. We deliver across surrounding areas by prior agreement.',
  },
]

export default function WhyUs() {
  return (
    <section className="why-us">
      <div className="container why-us-inner">

        <div className="why-us-left">
          <p className="why-label">Why Choose Us</p>
          <h2>
            Reliable Supply.<br />
            <span>Every Time.</span>
          </h2>
          <p className="why-desc">
            Freecarokani Investment Private Limited — trading as <strong>EzeZhwane Sands</strong> — supplying raw building materials to Bulawayo's construction industry. From a single homeowner to large contractors, we deliver what you need, when you need it.
          </p>
          <a
            href="https://wa.me/263718058420?text=Hi%2C%20I%20need%20a%20quote%20for%20building%20materials"
            className="why-cta"
            target="_blank"
            rel="noreferrer"
          >
            Get a Quote
          </a>
        </div>

        <div className="why-us-right">
          {points.map((p) => (
            <div className="why-item" key={p.num}>
              <span className="why-num">{p.num}</span>
              <div className="why-item-body">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
