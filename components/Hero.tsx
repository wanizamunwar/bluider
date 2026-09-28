import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
          alt="Modern apartment building exterior"
          loading="eager"
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-label">Est. 2018 — Trusted Builder</span>
        <h1 className="hero-title">Building Spaces for Better Living</h1>
        <p className="hero-text">
          Quality apartments and thoughtfully planned developments designed for modern families and investors.
          Clear pricing, flexible plans, and construction you can count on.
        </p>
        <div className="hero-buttons">
          <Link href="#projects" className="btn btn-hero-primary">
            Explore Projects
          </Link>
          <a href="#payment-plans" className="btn btn-hero-outline">
            View Payment Plans
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 7l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
}
