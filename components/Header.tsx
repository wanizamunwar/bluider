'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      <a href="/">Home</a>
      <a href="#projects">Projects</a>
      <a href="#apartments">Apartments</a>
      <a href="#payment-plans">Payment Plans</a>
      <a href="#about">About Us</a>
      <a href="#contact">Contact</a>
    </>
  );

  return (
    <>
      <header
        className={`header ${scrolled ? 'scrolled' : ''}`}
        style={scrolled ? { boxShadow: '0 1px 3px rgba(28,28,28,0.06)' } : undefined}
      >
        <div className="container header-inner">
          <Link href="/" className="logo">
            Meridian
            <span>.</span>
            <div className="logo-small">Property Development</div>
          </Link>

          <nav className="nav">
            <div className="nav-links">
              {navLinks}
            </div>
            <div className="nav-cta">
              <Link href="#projects" className="btn btn-primary btn-sm">
                View Projects
              </Link>
            </div>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu open">
          <nav>
            <a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#apartments" onClick={() => setMobileMenuOpen(false)}>Apartments</a>
            <a href="#payment-plans" onClick={() => setMobileMenuOpen(false)}>Payment Plans</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <Link href="#projects" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', textAlign: 'center' }}>
              View Our Projects
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
