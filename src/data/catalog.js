// Single list of products/services used for WhatsApp messages and the
// shareable product pages (/p/<slug>/) that give WhatsApp its photo preview.
// Plain JS (no JSX) so vite.config.js can import it at build time.

export const CATALOG = [
  {
    slug: 'riversand',
    title: 'Riversand',
    action: 'order',
    blurb: 'Coarse, clean riversand for concrete mixing, foundations and heavy construction. Delivered in 21-tonne loads in Bulawayo.',
    og: '/og/riversand.jpg',
    thumb: '/thumbs/riversand.webp',
  },
  {
    slug: 'pitsand',
    title: 'Pitsand',
    action: 'order',
    blurb: 'Fine pitsand for plastering, brickwork and mortar. Delivered in 21-tonne loads.',
    og: '/og/pitsand.jpg',
    thumb: '/thumbs/pitsand.webp',
  },
  {
    slug: 'quarry-stone',
    title: 'Quarry Stone',
    action: 'order',
    blurb: 'Crushed quarry stone for concrete aggregate, roads and drainage. Delivered in 21-tonne loads.',
    og: '/og/quarry-stone.jpg',
    thumb: '/thumbs/quarry-stone.webp',
  },
  {
    slug: 'gravel',
    title: 'Gravel',
    action: 'order',
    blurb: 'Natural gravel for driveways, landscaping, drainage and fill. Delivered in 21-tonne loads.',
    og: '/og/gravel.jpg',
    thumb: '/thumbs/gravel.webp',
  },
  {
    slug: 'bricks',
    title: 'Bricks',
    action: 'order',
    blurb: 'Quality bricks for building and walling, supplied in Bulawayo. Message us for the current price.',
    og: '/og/bricks.jpg',
    thumb: '/thumbs/bricks.webp',
  },
  {
    slug: 'cement',
    title: 'Cement',
    action: 'order',
    blurb: 'Cement for building and construction, supplied in Bulawayo. Message us for the current price.',
    og: '/og/cement.jpg',
    thumb: '/thumbs/cement.webp',
  },
  {
    slug: 'rubble-removal',
    title: 'Rubble Removal',
    action: 'book',
    blurb: 'We collect and remove building rubble from households and construction sites in Bulawayo.',
    og: '/og/rubble-removal.jpg',
    thumb: '/thumbs/rubble-removal.webp',
  },
  {
    slug: 'bulk-delivery',
    title: 'Bulk Delivery',
    action: 'order',
    blurb: 'Full 21-tonne truck deliveries across Bulawayo and surrounding areas.',
    og: '/og/bulk-delivery.jpg',
    thumb: '/thumbs/bulk-delivery.webp',
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
