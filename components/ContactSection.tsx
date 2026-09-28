import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: '56px' }}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have questions? Reach out directly. We respond quickly.
          </p>
        </div>

        <div className="contact-grid reveal">
          <div className="contact-card">
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3>Office</h3>
            <p>Plot 45, DHA Phase VIII</p>
            <p>Karachi, Pakistan</p>
            <Link href="#location" className="btn btn-outline btn-sm" style={{ marginTop: '16px' }}>
              View Map
            </Link>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <h3>Call Us</h3>
            <p>+92 21 1234 567</p>
            <p>Mon - Sat, 9:00 AM - 6:00 PM</p>
            <Link href="tel:+92211234567" className="btn btn-outline btn-sm" style={{ marginTop: '16px' }}>
              Call Now
            </Link>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </div>
            <h3>WhatsApp</h3>
            <p>+92 300 1234 567</p>
            <p>Available 24/7</p>
            <Link href="https://wa.me/923001234567" className="btn btn-outline btn-sm" style={{ marginTop: '16px' }} target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </Link>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: '40px' }}>
          <Link href="#inquiry" className="btn btn-primary">
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
