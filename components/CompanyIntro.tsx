import Link from 'next/link';

export default function CompanyIntro() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="company-intro">
          <div className="company-image reveal">
            <img
              src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80"
              alt="Modern construction site"
              loading="lazy"
            />
            <div className="company-image-overlay" />
          </div>
          <div className="company-text reveal">
            <span className="section-label">About Us</span>
            <h2 className="section-title">Built with Purpose. Designed to Last.</h2>
            <p className="section-subtitle">
              We are a team of experienced builders and developers committed to delivering practical,
              well-planned residential spaces in Pakistan&rsquo;s leading cities. Every project reflects
              our focus on structural integrity, transparent pricing, and the needs of the people who will live there.
            </p>
            <p className="section-subtitle">
              Since 2018, we have developed over 400 residential units across Karachi and Islamabad.
              Our construction process follows strict quality benchmarks — from foundation to finishing —
              and we keep our buyers informed at every stage.
            </p>

            <div className="company-stats">
              <div className="stat-item">
                <span className="stat-number">400+</span>
                <span className="stat-label">Units Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Active Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <Link href="#projects" className="btn btn-primary">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
