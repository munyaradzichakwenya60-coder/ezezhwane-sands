import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { CATALOG } from '../data/catalog'
import { useWhatsApp } from '../lib/whatsapp'
import './ProductPicker.css'

const PickerContext = createContext({ picker: () => ({}) })

// const { picker } = usePicker()
// <a {...picker('floating button')} className="...">  -> opens the product list
export const usePicker = () => useContext(PickerContext)

export function PickerProvider({ children }) {
  const [from, setFrom] = useState(null)

  // href keeps working as a plain link to the Products page if JavaScript fails
  const picker = useCallback(
    (where) => ({
      href: '/products',
      onClick: (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return
        e.preventDefault()
        setFrom(where)
      },
    }),
    [],
  )

  return (
    <PickerContext.Provider value={{ picker }}>
      {children}
      {from && <ProductSheet from={from} onClose={() => setFrom(null)} />}
    </PickerContext.Provider>
  )
}

function ProductSheet({ from, onClose }) {
  const wa = useWhatsApp()
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const where = `product list, ${from}`

  return (
    <div className="picker-overlay" onClick={onClose}>
      <div
        className="picker-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="picker-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="picker-head">
          <div>
            <h3 id="picker-title">What do you need?</h3>
            <p>Pick a product and we'll open WhatsApp with it.</p>
          </div>
          <button type="button" className="picker-close" onClick={onClose} ref={closeRef} aria-label="Close">
            <MdClose size={24} />
          </button>
        </div>

        <ul className="picker-list">
          {CATALOG.map((p) => (
            <li className="picker-row" key={p.slug}>
              <img className="picker-thumb" src={p.thumb} alt="" width="56" height="56" loading="lazy" />
              <span className="picker-name">{p.title}</span>
              <span className="picker-actions">
                <a
                  href={wa({ product: p.title, intent: 'order', where })}
                  className="picker-btn"
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                >
                  <FaWhatsapp size={14} /> {p.action === 'book' ? 'Book' : 'Order'}
                </a>
                <a
                  href={wa({ product: p.title, intent: 'enquire', where })}
                  className="picker-btn picker-btn-alt"
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                >
                  Enquire
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
