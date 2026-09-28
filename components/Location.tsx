import { projects } from '@/data/siteData';

export default function Location() {
  const project = projects[0];
  const loc = project.location;

  return (
    <section id="location" className="section">
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: '48px' }}>
          <span className="section-label">Location</span>
          <h2 className="section-title">{project.name}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {loc.address}
          </p>
        </div>

        <div className="location-grid">
          <div className="location-map reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.0!2d67.0!3d24.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33bb9f0908e23%3A0x6d1c7a6e5e5c5e5c!2sKarachi!5e0!3m2!1sen!2s!4v1700000000000"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="location-details reveal">
            <p className="location-address">{loc.address}</p>

            <div className="location-amenities">
              <div className="amenity-item">
                <svg viewBox="0 0 24 24" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                <span>Nearby Roads: {loc.roads.join(', ')}</span>
              </div>
              <div className="amenity-item">
                <svg viewBox="0 0 24 24" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                <span>Schools: {loc.schools.join(', ')}</span>
              </div>
              <div className="amenity-item">
                <svg viewBox="0 0 24 24" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                <span>Hospitals: {loc.hospitals.join(', ')}</span>
              </div>
              <div className="amenity-item">
                <svg viewBox="0 0 24 24" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                <span>Shopping: {loc.shopping.join(', ')}</span>
              </div>
              <div className="amenity-item">
                <svg viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Transport: {loc.transport.join(', ')}</span>
              </div>
              <div className="amenity-item">
                <svg viewBox="0 0 24 24" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><line x1="12" y1="22" x2="12" y2="17"/><polyline points="22 7 12 12 2 7"/></svg>
                <span>Landmarks: {loc.landmarks.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
