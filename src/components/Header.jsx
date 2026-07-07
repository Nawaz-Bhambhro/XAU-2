import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/articles'
import { languages, defaultLanguage } from '../data/languages'
import { xauBrand } from '../data/xauPlatformContent'
import { publicUrl } from '../utils/publicUrl'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState(defaultLanguage)
  const langRef = useRef(null)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectLanguage = (lang) => {
    setSelectedLang(lang)
    setLangOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner container">
        <div className="site-logo">
          <Link to="/home" className="brand" aria-label={xauBrand.fullName} onClick={closeMenu}>
            <div className="title-with-logo">
              <img
                src={publicUrl('/images/xau-crest-logo.png')}
                alt={xauBrand.name}
                className="logo-img logo-img-crest"
              />
              <div className="site-brand-text">
                <p className="site-title site-title-gold">{xauBrand.name}</p>
                <p className="site-subtitle-gold">{xauBrand.fullName}</p>
              </div>
            </div>
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>

        <nav className={`primary-nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-ul">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? 'nv-active' : '')}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="lang-selector" ref={langRef}>
              <button
                type="button"
                className="lang-toggle"
                onClick={() => setLangOpen((open) => !open)}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
              >
                <img
                  src={publicUrl(`/images/flags/${selectedLang.code}.svg`)}
                  width="16"
                  height="16"
                  alt={selectedLang.label}
                />
                <span>{selectedLang.label}</span>
                <span className={`lang-arrow ${langOpen ? 'open' : ''}`} aria-hidden="true" />
              </button>

              {langOpen && (
                <ul className="lang-dropdown" role="listbox">
                  {languages.map((lang) => (
                    <li key={lang.code} role="option" aria-selected={selectedLang.code === lang.code}>
                      <button
                        type="button"
                        className={`lang-option ${selectedLang.code === lang.code ? 'active' : ''}`}
                        onClick={() => selectLanguage(lang)}
                      >
                        <img
                          src={publicUrl(`/images/flags/${lang.code}.svg`)}
                          width="16"
                          height="16"
                          alt=""
                        />
                        <span>{lang.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
