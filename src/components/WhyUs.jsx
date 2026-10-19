import { Link } from 'react-router-dom'
import { usePicker } from './ProductPicker'
import './WhyUs.css'

const points = [
  {
    num: '01',
    title: 'Reliable and Professional Supplier',
    desc: 'We deliver what you ordered, when we said we would, with a professional service from order to offload.',
  },
  {
    num: '02',
    title: 'Competitive Prices',
    desc: 'Clear prices per 21-tonne load for each delivery area, so you know the cost before you order.',
  },
  {
    num: '03',
    title: 'Compliant with Statutory Obligations',
    desc: 'A registered company that meets its statutory obligations, so you deal with a legitimate supplier.',
  },
  {
    num: '04',
    title: '21-Tonne Deliveries',
    desc: 'Full truck loads delivered directly to your site. No middlemen, no delays.',
  },
]

export default function WhyUs() {
  const { picker } = usePicker()
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
            Freecarokani Investment Private Limited, trading as <strong>EzeZhwane Sands</strong>, supplies construction aggregates to Bulawayo's construction industry. From a single homeowner to large contractors, we deliver what you need, when you need it.
          </p>
          <a
            {...picker('Get a Quote button')}
            className="why-cta"
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
