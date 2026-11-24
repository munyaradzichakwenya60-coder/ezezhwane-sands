// Delivery prices per 21-tonne load, by area. Used by the Pricing page and the site assistant.
// Change a price here and both update.

export const AREAS = [
  {
    name: 'Western Bulawayo',
    products: [
      { name: 'Riversand', price: 260 },
      { name: 'Pitsand', price: 240 },
      { name: 'Quarry (Transport)', price: 140 },
    ],
  },
  {
    name: 'Eastern Bulawayo',
    products: [
      { name: 'Riversand', price: 270 },
      { name: 'Pitsand', price: 240 },
      { name: 'Quarry (Transport)', price: 150 },
    ],
  },
  {
    name: 'Emzinyathini',
    products: [
      { name: 'Riversand', price: 290 },
      { name: 'Pitsand', price: 270 },
      { name: 'Quarry (Transport)', price: 190 },
    ],
  },
  {
    name: 'Cyrene Area',
    products: [
      { name: 'Riversand', price: 340 },
      { name: 'Pitsand', price: 280 },
      { name: 'Quarry (Transport)', price: 220 },
    ],
  },
]

export const areaSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-')

// Index of an area from its slug (e.g. 'eastern-bulawayo'); 0 if missing or unknown.
export const areaIndex = (slug) => {
  const i = AREAS.findIndex((a) => areaSlug(a.name) === slug)
  return i < 0 ? 0 : i
}
