'use client';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }

  function handleBurger() {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  }

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">MA</a>
          <ul className="nav-links">
            {['about', 'experience', 'projects', 'skills', 'awards'].map(s => (
              <li key={s}><a href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a></li>
            ))}
            <li><a href="#contact" className="nav-cta">Contact</a></li>
          </ul>
          <div className="nav-right">
            <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
            <button className="burger" onClick={handleBurger} aria-label="Toggle menu">
              <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
              <span style={menuOpen ? { opacity: 0 } : {}} />
              <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {['about', 'experience', 'projects', 'skills', 'awards', 'contact'].map(s => (
            <li key={s}>
              <a href={`#${s}`} onClick={closeMenu}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
