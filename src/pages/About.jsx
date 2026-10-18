import { MdCheckCircle } from 'react-icons/md'
import './PageStyles.css'

export default function About() {
  return (
    <main>
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=70')" }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>About <span>EzeZhwane Sands</span></h1>
          <p>Bulawayo's trusted raw building materials supplier</p>
        </div>
      </div>

      <section className="about-section">
        <div className="container about-inner">
          <div className="about-text">
            <p className="section-eyebrow">Who We Are</p>
            <h2>Freecarokani Investment <span>Private Limited</span></h2>
            <p>
              Registered as Freecarokani Investment Private Limited and operating under the trade name <strong>EzeZhwane Sands</strong>, we are a Bulawayo-based raw building materials supplier serving the construction industry across the city and surrounding areas.
            </p>
            <p>
              We supply the essential raw materials that form the backbone of every construction project: Riversand, Pitsand, Quarry stone and Gravel, delivered directly to your site in full 21-tonne truck loads.
            </p>
            <p>
              Beyond supply, we also offer rubble removal services, helping households and contractors keep their sites clean and compliant. Whether you're building a family home or running a large commercial project, we have the capacity and reliability to keep your work moving.
            </p>

            <ul className="about-list">
              {[
                '21-tonne full truck deliveries',
                'Bulawayo city and surrounding areas',
                'Rubble removal service available',
                'Payment before delivery, with flexible agreements',
                'Outside Bulawayo deliveries by arrangement',
              ].map((item, i) => (
                <li key={i}><MdCheckCircle size={18} color="var(--red)" /> {item}</li>
              ))}
            </ul>
          </div>

          <div className="about-img-col">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=70"
              alt="Building materials delivery"
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
