import './PageStyles.css'

const photos = [
  { src: '/photos/truck-side.webp', alt: 'EzeZhwane Sands 21-tonne tipper truck' },
  { src: '/photos/offloading.webp', alt: 'Truck offloading a load of sand' },
  { src: '/photos/truck-front.webp', alt: 'EzeZhwane Sands truck, front view' },
  { src: '/photos/truck-blue.webp', alt: 'EzeZhwane Sands tipper truck, side view' },
  { src: '/photos/sand-pile.webp', alt: 'Delivered sand on site' },
  { src: '/photos/quarry-stone.webp', alt: 'Crushed quarry stone' },
  { src: '/photos/bricks-stack.webp', alt: 'Stacks of face bricks' },
  { src: '/photos/foundation.webp', alt: 'Brick foundation filled with sand' },
  { src: '/photos/site-banner.webp', alt: 'Building site with EzeZhwane Sands banner' },
  { src: '/photos/bricks-sand.webp', alt: 'Bricks and sand on site' },
]

export default function Gallery() {
  return (
    <main>
      <div
        className="page-hero"
        style={{ backgroundImage: "url('/photos/truck-side.webp')" }}
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
            <p>Our trucks, our materials and our deliveries on site.</p>
          </div>
          <div className="gallery-grid">
            {photos.map((p, i) => (
              <div className="gallery-item" key={i}>
                <img src={p.src} alt={p.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
