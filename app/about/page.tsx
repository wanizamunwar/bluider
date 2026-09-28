import { projects } from '@/data/siteData';
import Link from 'next/link';

export default function AboutPage() {
  const project = projects[0];
  const loc = project.location;

  return (
    <main>
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="section-label">About Us</div>
          <h1 className="section-title" style={{ marginBottom: '2rem' }}>Who We Are</h1>
          <p style={{ maxWidth: '650px', lineHeight: '1.8', marginBottom: '2rem' }}>
            Meridian Properties is a real estate development company based in Karachi, Pakistan.
            Since 2018, we have focused on building practical, well-designed residential spaces
            with transparent pricing and clear communication.
          </p>
          <p style={{ maxWidth: '650px', lineHeight: '1.8', color: 'var(--fg-light)' }}>
            Our team brings together architects, engineers, and project managers who share a
            commitment to delivering quality construction on schedule. We believe in keeping
            buyers informed and treating every project as our own.
          </p>

          <div className="company-stats" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
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
        </div>
      </section>

      <section id="location" className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="section-label">Location</span>
            <h2 className="section-title">{project.name}</h2>
            <p style={{ color: 'var(--muted)', maxWidth: '500px', margin: '0 auto' }}>{loc.address}</p>
          </div>
          <div className="location-grid">
            <div className="location-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.0!2d67.0!3d24.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33bb9f0908e23%3A0x6d1c7a6e5e5c5e5c!2sKarachi!5e0!3m2!1sen!2s!4v1700000000000" loading="lazy" allowFullScreen />
            </div>
            <div className="location-details">
              <p className="location-address">{loc.address}</p>
              <div className="location-amenities">
                <div className="amenity-item"><svg viewBox="0 0 24 24" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><span>Roads: {loc.roads.slice(0, 2).join(', ')}</span></div>
                <div className="amenity-item"><svg viewBox="0 0 24 24" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg><span>Schools: {loc.schools.join(', ')}</span></div>
                <div className="amenity-item"><svg viewBox="0 0 24 24" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg><span>Hospitals: {loc.hospitals.join(', ')}</span></div>
                <div className="amenity-item"><svg viewBox="0 0 24 24" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg><span>Shopping: {loc.shopping.slice(0, 2).join(', ')}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
