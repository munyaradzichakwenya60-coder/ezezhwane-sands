import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCommentDots, FaTimes, FaPaperPlane, FaWhatsapp } from 'react-icons/fa'
import { useWhatsApp } from '../lib/whatsapp'
import { answer, GREETING } from '../data/assistant'
import './SiteAssistant.css'

// A guided helper that answers from this website's own content only (no outside AI or lookups).
export default function SiteAssistant() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([{ from: 'bot', ...GREETING }])
  const [text, setText] = useState('')
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const wa = useWhatsApp()

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight
  }, [msgs, open])

  useEffect(() => {
    if (open) inputRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const ask = (q, shown = q) => {
    const reply = answer(q)
    setMsgs((m) => [...m, { from: 'you', text: shown }, { from: 'bot', ...reply }])
  }

  const send = (e) => {
    e.preventDefault()
    const q = text.trim()
    if (!q) return
    setText('')
    ask(q)
  }

  const act = (a) => {
    if (a.to) { navigate(a.to); if (window.innerWidth < 640) setOpen(false) }
    else if (a.ask) ask(a.ask, a.label)
  }

  return (
    <>
      <button
        className={`sa-launcher${open ? ' is-open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close the help assistant' : 'Open the help assistant'}
        aria-expanded={open}
      >
        {open ? <FaTimes size={22} /> : <FaCommentDots size={24} />}
        {!open && <span>Need help?</span>}
      </button>

      {open && (
        <div className="sa-panel" role="dialog" aria-label="EzeZhwane help assistant">
          <div className="sa-head">
            <div>
              <strong>EzeZhwane Assistant</strong>
              <small>Answers from this website</small>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close"><FaTimes /></button>
          </div>

          <div className="sa-list" ref={listRef} aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={`sa-msg sa-${m.from}`}>
                <p>{m.text}</p>
                {m.actions?.length > 0 && i === msgs.length - 1 && (
                  <div className="sa-actions">
                    {m.actions.map((a) =>
                      a.wa ? (
                        <a key={a.label} className="sa-chip sa-wa" href={wa({ ...a.wa, where: 'site assistant' })} target="_blank" rel="noopener noreferrer">
                          <FaWhatsapp /> {a.label}
                        </a>
                      ) : a.href ? (
                        <a key={a.label} className="sa-chip" href={a.href}>{a.label}</a>
                      ) : (
                        <button key={a.label} className={`sa-chip${a.to ? ' sa-go' : ''}`} onClick={() => act(a)}>
                          {a.to ? `${a.label} →` : a.label}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <form className="sa-form" onSubmit={send}>
            <input
              ref={inputRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ask about prices, products, delivery…"
              aria-label="Type your question"
              maxLength={200}
            />
            <button type="submit" aria-label="Send"><FaPaperPlane /></button>
          </form>
        </div>
      )}
    </>
  )
}
