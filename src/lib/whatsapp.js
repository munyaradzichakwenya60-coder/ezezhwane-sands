import { useLocation } from 'react-router-dom'
import { ALIASES, findProduct } from '../data/catalog'

// Change the business number in ONE place.
export const WHATSAPP_NUMBER = '263718058420'
const BUSINESS = 'EzeZhwane Sands'

const PAGE_NAMES = {
  '/': 'Home page',
  '/about': 'About page',
  '/products': 'Products page',
  '/pricing': 'Pricing page',
  '/gallery': 'Gallery page',
  '/contact': 'Contact page',
}

const pageName = (pathname) => PAGE_NAMES[pathname] || 'website'

// Link that WhatsApp turns into a photo preview card (see vite.config.js).
export const productLink = (slug) =>
  typeof window === 'undefined' ? '' : `${window.location.origin}/p/${slug}/`

/**
 * Build the WhatsApp message.
 *
 * intent:    'order':   customer wants to buy / book
 *            'enquire': customer wants availability and price first
 *            'quote':   general "I need a quote"
 *            'hello':   no specific request
 * product:   product / service name (optional)
 * area, price: delivery area and price from the Pricing page (optional)
 * source:    where on the site the click happened, e.g. 'Products page'
 */
export function buildMessage({ intent = 'order', product, area, price, source, extra }) {
  const item = product ? findProduct(product) : undefined
  // Keep the wording the page uses (e.g. 'Quarry (Transport)') but still link the right product photo.
  const name = item && !ALIASES[product] ? item.title : product
  const lines = []

  if (name && intent === 'enquire') {
    lines.push(`Hi ${BUSINESS}, I have an enquiry about *${name}*. Is it available, and what is the price?`)
  } else if (name) {
    const verb = item?.action === 'book' ? 'book' : 'order'
    lines.push(`Hi ${BUSINESS}, I'd like to ${verb} *${name}*.`)
  } else if (intent === 'quote') {
    lines.push(`Hi ${BUSINESS}, I need a quote for construction aggregates.`)
  } else if (intent === 'enquire') {
    lines.push(`Hi ${BUSINESS}, I have an enquiry about your construction aggregates.`)
  } else if (intent === 'hello') {
    lines.push(`Hi ${BUSINESS}, I'd like to get in touch.`)
  } else {
    lines.push(`Hi ${BUSINESS}, I'd like to order construction aggregates.`)
  }

  if (area) lines.push(`Delivery area: ${area}`)
  if (price) lines.push(`Price shown on website: $${price} per 21-tonne load`)
  if (extra) lines.push(extra)

  if (item) lines.push('', `Product: ${productLink(item.slug)}`)
  if (source) lines.push('', `Sent from the website: ${source}`)

  return lines.join('\n').replace(/\n{3,}/g, '\n\n')
}

export const whatsappUrl = (opts) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage(opts))}`

/**
 * Hook: returns wa(opts) which fills in the current page as the source.
 *   const wa = useWhatsApp()
 *   <a href={wa({ product: 'Riversand', intent: 'enquire' })} />
 * Pass `where` for the exact spot, e.g. 'hero button'.
 */
export function useWhatsApp() {
  const { pathname } = useLocation()
  return ({ where, ...opts }) => {
    const page = pageName(pathname)
    const source = where ? `${page} (${where})` : page
    return whatsappUrl({ ...opts, source })
  }
}
