// Site assistant: answers ONLY from this website's own content (catalog, prices, contact
// details). It never calls an outside service. Each answer is { text, actions }, where an
// action is one of:
//   { label, to }                  go to a page on this site
//   { label, wa: {...} }           open WhatsApp with a ready message (see lib/whatsapp.js)
//   { label, ask: 'topic' }        a follow-up question chip
import { CATALOG } from './catalog.js'
import { AREAS, areaSlug } from './pricing.js'

export const PHONE = '+263 71 805 8420'
export const EMAIL = 'info@ezezhwanesands.co.zw'
export const HOURS = 'Monday to Saturday, 7am to 5pm. Sunday by arrangement.'

const PRICED = ['Riversand', 'Pitsand', 'Quarry (Transport)']

// Words people type, mapped to a topic. Includes a few common Ndebele and Shona words.
const TOPICS = [
  ['price', ['price', 'prices', 'cost', 'how much', 'rate', 'rates', 'charge', 'malini', 'imali', 'marii', 'mari', 'quote', 'quotation', 'expensive', 'cheap']],
  ['areas', ['area', 'areas', 'deliver to', 'location', 'where do you deliver', 'suburb', 'outside bulawayo', 'far']],
  ['order', ['order', 'buy', 'purchase', 'how do i', 'want', 'need', 'ngifuna', 'ndoda', 'book']],
  ['payment', ['pay', 'payment', 'bank', 'account', 'transfer', 'ecocash', 'cash', 'diaspora', 'south africa', 'deposit']],
  ['hours', ['hours', 'open', 'opening', 'close', 'closing', 'time', 'sunday', 'saturday', 'weekend', 'today']],
  ['contact', ['contact', 'phone', 'call', 'number', 'email', 'talk', 'person', 'human', 'agent', 'someone']],
  ['delivery', ['delivery', 'deliver', 'truck', 'tonne', 'ton', 'load', 'how long', 'when']],
  ['products', ['product', 'products', 'sell', 'materials', 'what do you have', 'stock', 'available']],
  ['about', ['about', 'who are you', 'company', 'freecarokani', 'registered', 'trust', 'legit']],
  ['gallery', ['photo', 'photos', 'picture', 'pictures', 'gallery', 'see your', 'trucks']],
]

const norm = (s) => ` ${s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim()} `

export function findArea(q) {
  const n = norm(q)
  return AREAS.find((a) => {
    const words = a.name.toLowerCase().split(' ')
    return n.includes(` ${a.name.toLowerCase()} `) || n.includes(` ${words[0]} `)
  })
}

export function findItem(q) {
  const n = norm(q)
  const syn = { quarry: 'quarry-stone', stone: 'quarry-stone', rubble: 'rubble-removal', brick: 'bricks', sand: null, river: 'riversand', pit: 'pitsand' }
  for (const p of CATALOG) {
    if (n.includes(` ${p.title.toLowerCase()} `) || n.includes(` ${p.slug.replace(/-/g, ' ')} `)) return p
  }
  for (const [w, slug] of Object.entries(syn)) {
    if (slug && n.includes(` ${w} `)) return CATALOG.find((p) => p.slug === slug)
  }
  return undefined
}

function topicOf(q) {
  const n = norm(q)
  let best = null
  let score = 0
  for (const [topic, words] of TOPICS) {
    const s = words.reduce((acc, w) => acc + (n.includes(` ${w} `) ? w.length : 0), 0)
    if (s > score) { best = topic; score = s }
  }
  return best
}

const isPriced = (item) => PRICED.some((n) => n.toLowerCase().startsWith(item.title.toLowerCase().split(' ')[0]))
const ON_REQUEST = CATALOG.filter((p) => !isPriced(p) && p.slug !== 'bulk-delivery').map((p) => p.title.toLowerCase())
const listWords = (xs) => xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`

const priceLines = (area) =>
  area.products.map((p) => `${p.name}: $${p.price}`).join('\n')

export const MENU = [
  { label: 'Prices', ask: 'price' },
  { label: 'Products', ask: 'products' },
  { label: 'How to order', ask: 'order' },
  { label: 'Payment options', ask: 'payment' },
  { label: 'Opening hours', ask: 'hours' },
  { label: 'Talk to a person', ask: 'contact' },
]

export const GREETING = {
  text: "Hi! I'm the EzeZhwane assistant. I can help you find prices, products, how to order or pay, and our contact details. What do you need?",
  actions: MENU,
}

function areaChips() {
  return AREAS.map((a) => ({ label: a.name, ask: `price ${a.name}` }))
}

function itemAnswer(item) {
  const actions = []
  const priced = isPriced(item)
  if (priced) actions.push({ label: `See ${item.title.toLowerCase()} prices`, ask: 'price' })
  actions.push({ label: item.action === 'book' ? `Book ${item.title.toLowerCase()}` : `Order ${item.title.toLowerCase()}`, wa: { product: item.title, intent: 'order' } })
  actions.push({ label: 'Ask about it first', wa: { product: item.title, intent: 'enquire' } })
  actions.push({ label: 'All products', to: '/products' })
  const price = priced ? ' Prices depend on your delivery area.' : ''
  return { text: `${item.title}: ${item.blurb}${price}`, actions }
}

export function answer(q) {
  const area = findArea(q)
  const item = findItem(q)
  let topic = topicOf(q)
  if (!topic && area) topic = 'price'
  if (!topic && item) topic = 'item'

  switch (topic) {
    case 'price': {
      if (area) {
        return {
          text: `Prices for ${area.name}, per 21-tonne load:\n${priceLines(area)}\n\nThe price of ${listWords(ON_REQUEST)} is given on request.`,
          actions: [
            { label: `Open ${area.name} prices`, to: `/pricing?area=${areaSlug(area.name)}` },
            { label: 'Order now', wa: { intent: 'order', area: area.name } },
            { label: 'Other areas', ask: 'price' },
          ],
        }
      }
      if (item && !isPriced(item)) {
        return {
          text: `The price of ${item.title.toLowerCase()} is given on request. Send us a quick message and we'll give you today's price.`,
          actions: [{ label: `Ask the ${item.title.toLowerCase()} price`, wa: { product: item.title, intent: 'enquire' } }, { label: 'Other prices', ask: 'price' }],
        }
      }
      return {
        text: 'Our prices are per 21-tonne truckload and depend on where you are. Which area are you in?',
        actions: [...areaChips(), { label: 'Outside Bulawayo', ask: 'outside bulawayo area' }],
      }
    }
    case 'areas':
      if (/outside|far/.test(q.toLowerCase())) {
        return {
          text: 'We deliver across Bulawayo and surrounding areas. Deliveries outside Bulawayo are possible by agreement: send us your location for a quote.',
          actions: [{ label: 'Get a quote', wa: { intent: 'quote', extra: 'Delivery is outside Bulawayo.' } }],
        }
      }
      return {
        text: `We deliver across Bulawayo and surrounding areas. Our price areas are: ${AREAS.map((a) => a.name).join(', ')}. Pick one to see its prices.`,
        actions: areaChips(),
      }
    case 'order':
      if (item) return itemAnswer(item)
      return {
        text: 'Ordering is easy: pick what you need and WhatsApp opens with your order already written. Our team confirms the price, area and delivery time with you there.',
        actions: [
          { label: 'Riversand', wa: { product: 'Riversand', intent: 'order' } },
          { label: 'Pitsand', wa: { product: 'Pitsand', intent: 'order' } },
          { label: 'Quarry stone', wa: { product: 'Quarry Stone', intent: 'order' } },
          { label: 'See all products', to: '/products' },
        ],
      }
    case 'payment':
      return {
        text: 'We encourage payment before delivery.\n\nDiaspora: pay into our South African bank account.\nLocal: transfer into our Zimbabwean account once your order is agreed.\n\nFor your safety, bank details are only shared on WhatsApp, never on the website.',
        actions: [
          { label: 'Get SA account details', wa: { intent: 'payment', extra: 'South African account' } },
          { label: 'Get local account details', wa: { intent: 'payment', extra: 'Zimbabwe local account' } },
          { label: 'Payment options page', to: '/pricing' },
        ],
      }
    case 'hours':
      return { text: `We're open ${HOURS}`, actions: [{ label: 'Contact page', to: '/contact' }, { label: 'Message us', wa: { intent: 'hello' } }] }
    case 'contact':
      return {
        text: `You can reach our team on WhatsApp or by phone on ${PHONE}, or email ${EMAIL}. We're open ${HOURS}`,
        actions: [{ label: 'Chat on WhatsApp', wa: { intent: 'hello' } }, { label: 'Call us', href: `tel:${PHONE.replace(/\s/g, '')}` }, { label: 'Contact page', to: '/contact' }],
      }
    case 'delivery':
      return {
        text: 'We deliver in full 21-tonne truckloads across Bulawayo and surrounding areas. Tell us your location and when you need it, and we will confirm the delivery time on WhatsApp.',
        actions: [{ label: 'Check prices', ask: 'price' }, { label: 'Arrange a delivery', wa: { product: 'Bulk Delivery', intent: 'order' } }],
      }
    case 'products':
      if (item) return itemAnswer(item)
      return {
        text: `We supply ${CATALOG.filter((p) => p.action !== 'book').map((p) => p.title.toLowerCase()).join(', ')}, and we also do rubble removal. Which one are you interested in?`,
        actions: CATALOG.map((p) => ({ label: p.title, ask: p.title })),
      }
    case 'item':
      return itemAnswer(item)
    case 'about':
      return {
        text: 'EzeZhwane Sands is run by Freecarokani Investment Pvt Ltd, a registered company supplying construction aggregates and deliveries in Bulawayo with our own trucks.',
        actions: [{ label: 'About us', to: '/about' }, { label: 'See our trucks', to: '/gallery' }],
      }
    case 'gallery':
      return { text: 'You can see our trucks, sites and deliveries in our gallery.', actions: [{ label: 'Open the gallery', to: '/gallery' }] }
    default:
      return {
        text: "Sorry, I can only help with things on this website, like prices, products, ordering, payments and contact details. Try one of these, or ask our team directly.",
        actions: [...MENU.slice(0, 4), { label: 'Ask the team on WhatsApp', wa: { intent: 'enquire', extra: `Question from the website assistant: "${q.slice(0, 200)}"` } }],
      }
  }
}
