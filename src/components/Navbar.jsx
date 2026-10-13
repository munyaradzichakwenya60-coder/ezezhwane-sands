import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdMenu, MdClose } from 'react-icons/md'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-ez">EZE</span>
          <span className="logo-zhwane">ZHWANE</span>
          <span className="logo-sands">SANDS</span>
        </Link>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={location.pathname === l.to ? 'active' : ''}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/263XXXXXXXXX"
            className="nav-cta"
            target="_blank"
            rel="noreferrer"
          >
            Order Now
          </a>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(o => !o)}>
          {menuOpen ? <MdClose size={26} /> : <MdMenu size={26} />}
        </button>
      </div>
    </header>
  )
}
