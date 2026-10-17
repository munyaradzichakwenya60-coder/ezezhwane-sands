// Single list of products/services used for WhatsApp messages and the
// shareable product pages (/p/<slug>/) that give WhatsApp its photo preview.
// Plain JS (no JSX) so vite.config.js can import it at build time.

export const CATALOG = [
  {
    slug: 'riversand',
    title: 'Riversand',
    action: 'order',
    blurb: 'Fine, clean riversand for plastering, brickwork and mortar. Delivered in 21-tonne loads in Bulawayo.',
    og: '/og/riversand.jpg',
  },
  {
    slug: 'pitsand',
    title: 'Pitsand',
    action: 'order',
    blurb: 'Coarse pitsand for concrete mixing, foundations and heavy construction. Delivered in 21-tonne loads.',
    og: '/og/pitsand.jpg',
  },
  {
    slug: 'quarry-stone',
    title: 'Quarry Stone',
    action: 'order',
    blurb: 'Crushed quarry stone for concrete aggregate, roads and drainage. Delivered in 21-tonne loads.',
    og: '/og/quarry-stone.jpg',
  },
  {
    slug: 'gravel',
    title: 'Gravel',
    action: 'order',
    blurb: 'Natural gravel for driveways, landscaping, drainage and fill. Delivered in 21-tonne loads.',
    og: '/og/gravel.jpg',
  },
  {
    slug: 'rubble-removal',
    title: 'Rubble Removal',
    action: 'book',
    blurb: 'We collect and remove building rubble from households and construction sites in Bulawayo.',
    og: '/og/rubble-removal.jpg',
  },
  {
    slug: 'bulk-delivery',
    title: 'Bulk Delivery',
    action: 'order',
    blurb: 'Full 21-tonne truck deliveries across Bulawayo and surrounding areas.',
    og: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1000&q=70',
  },
]

// Names used elsewhere on the site that point at a catalog entry.
export const ALIASES = {
  'Quarry (Transport)': 'quarry-stone',
}

export const bySlug = (slug) => CATALOG.find((p) => p.slug === slug)

export const findProduct = (name = '') => {
  const alias = ALIASES[name]
  if (alias) return bySlug(alias)
  const n = name.trim().toLowerCase()
  return CATALOG.find((p) => p.title.toLowerCase() === n)
}
