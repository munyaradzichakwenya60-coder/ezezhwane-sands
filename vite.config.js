import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { CATALOG } from './src/data/catalog.js'

// Builds /p/<slug>/index.html for every product. WhatsApp reads the preview
// tags in these pages to show the product photo and name inside the chat,
// then visitors are sent on to the Products page.
function productSharePages() {
  const site = (
    process.env.VITE_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'https://ezezhwane-sands.vercel.app')
  ).replace(/\/$/, '')
  const esc = (t) => t.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

  return {
    name: 'product-share-pages',
    generateBundle() {
      for (const p of CATALOG) {
        const title = esc(`${p.title} | EzeZhwane Sands`)
        const desc = esc(p.blurb)
        const url = `${site}/p/${p.slug}/`
        const img = p.og.startsWith('http') ? p.og : `${site}${p.og}`
        const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${desc}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="EzeZhwane Sands" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${esc(img)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <script>location.replace('/products')</script>
  </head>
  <body>
    <p><a href="/products">${esc(p.title)}: view on EzeZhwane Sands</a></p>
  </body>
</html>
`
        this.emitFile({ type: 'asset', fileName: `p/${p.slug}/index.html`, source: html })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), productSharePages()],
})
