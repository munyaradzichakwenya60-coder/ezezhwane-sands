import { MdCheckCircle } from 'react-icons/md'
import './PageStyles.css'

export default function About() {
  return (
    <main>
      <div className="page-hero" style={{ backgroundImage: "url('/photos/truck-front-2.webp')" }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>About <span>EzeZhwane Sands</span></h1>
          <p>Bulawayo's trusted construction aggregates supplier</p>
        </div>
      </div>

      <section className="about-section">
        <div className="container about-inner">
          <div className="about-text">
            <p className="section-eyebrow">Who We Are</p>
            <h2>Freecarokani Investment <span>Private Limited</span></h2>
            <p>
              <strong>EzeZhwane Sands</strong> is a Bulawayo-based company registered as Freecarokani Investment Pvt Ltd. We supply construction aggregates (Riversand, Pitsand, Quarry and Gravel) serving the construction industry across the city and surrounding areas.
            </p>
            <p>
              We supply the essential raw materials that form the backbone of every construction project: Riversand, Pitsand, Quarry stone and Gravel, delivered directly to your site in full 21-tonne truck loads.
            </p>
            <p>
              Beyond supply, we also offer rubble removal and construction services in Bulawayo, helping households and contractors keep their sites clean and compliant. Whether you're building a family home or running a large commercial project, we have the capacity and reliability to keep your work moving.
            </p>

            <ul className="about-list">
              {[
                '21-tonne full truck deliveries',
                'Bulawayo city and surrounding areas',
                'Rubble removal service available',
                'Payment before delivery encouraged, pay on delivery accepted',
                'Outside Bulawayo deliveries by arrangement',
              ].map((item, i) => (
                <li key={i}><MdCheckCircle size={18} color="var(--red)" /> {item}</li>
              ))}
            </ul>
          </div>

          <div className="about-img-col">
            <img
              src="/photos/truck-side.webp"
              alt="Construction aggregates delivery"
            />
            <div className="about-badge">
              <strong>EzeZhwane</strong>
              <span>Sands</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
