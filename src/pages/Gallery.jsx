import './PageStyles.css'

const photos = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=70',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=70',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=70',
  'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=700&q=70',
  'https://images.unsplash.com/photo-1590593162201-f67611a18b87?w=700&q=70',
  'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&q=70',
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=70',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=70',
  'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=700&q=70',
]

export default function Gallery() {
  return (
    <main>
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=70')" }}
      >
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Our <span>Gallery</span></h1>
          <p>Real deliveries, real materials, real results</p>
        </div>
      </div>

      <section className="gallery-section">
        <div className="container">
          <div className="section-title">
            <h2>Work <span>In Action</span></h2>
            <p>Placeholder images below. These will be replaced with EzeZhwane's own site photos once provided.</p>
          </div>
          <div className="gallery-grid">
            {photos.map((src, i) => (
              <div className="gallery-item" key={i}>
                <img src={src} alt={`EzeZhwane Sands delivery ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
