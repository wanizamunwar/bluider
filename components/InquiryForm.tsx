'use client';

import { useState } from 'react';

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
    apartmentType: '',
    budget: '',
    paymentPlan: '',
    message: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <section id="inquiry" className="section inquiry-section">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }} className="inquiry-form">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
            <h3>Thank You</h3>
            <p style={{ marginTop: '1rem', color: 'var(--muted)' }}>
              Your inquiry has been received. We will get back to you within 24 hours with detailed information.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inquiry" className="section inquiry-section">
      <div className="container">
        <div className="inquiry-container">
          <div className="information-block reveal">
            <span className="section-label">Get in Touch</span>
            <h3>Request Project Details</h3>
            <p>
              Fill out the form below and our team will contact you with complete project information,
              floor plans, and a tailored payment plan.
            </p>

            <div className="information-contact">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="contact-text">
                  <strong>+92 21 1234 567</strong>
                  <span>Karachi Office</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="contact-text">
                  <strong>info@meridianproperties.pk</strong>
                  <span>Email Us</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </div>
                <div className="contact-text">
                  <strong>WhatsApp</strong>
                  <span>+92 300 1234 567</span>
                </div>
              </div>
            </div>
          </div>

          <form className="inquiry-form reveal" onSubmit={handleSubmit}>
            <h3>Contact Form</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" required value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" required value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="Your phone number" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" required value={formData.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="Your email" />
              </div>
              <div className="form-group">
                <label>Project</label>
                <select value={formData.project} onChange={(e) => handleChange('project', e.target.value)}>
                  <option value="">Select a project...</option>
                  <option value="Meridian Heights">Meridian Heights</option>
                  <option value="The Pearl Residences">The Pearl Residences</option>
                  <option value="Greenwood Estate">Greenwood Estate</option>
                </select>
              </div>
              <div className="form-group">
                <label>Apartment Type</label>
                <select value={formData.apartmentType} onChange={(e) => handleChange('apartmentType', e.target.value)}>
                  <option value="">Select type...</option>
                  <option value="1 Bedroom">1 Bedroom</option>
                  <option value="2 Bedroom">2 Bedroom</option>
                  <option value="3 Bedroom">3 Bedroom</option>
                  <option value="Penthouse">Penthouse</option>
                </select>
              </div>
              <div className="form-group">
                <label>Budget</label>
                <select value={formData.budget} onChange={(e) => handleChange('budget', e.target.value)}>
                  <option value="">Select budget range...</option>
                  <option value="PKR 10-15M">PKR 10 - 15 Million</option>
                  <option value="PKR 15-20M">PKR 15 - 20 Million</option>
                  <option value="PKR 20-30M">PKR 20 - 30 Million</option>
                  <option value="PKR 30M+">PKR 30 Million+</option>
                </select>
              </div>
              <div className="form-group">
                <label>Preferred Payment Plan</label>
                <select value={formData.paymentPlan} onChange={(e) => handleChange('paymentPlan', e.target.value)}>
                  <option value="">Select plan...</option>
                  <option value="Standard 60 months">Standard (60 Months)</option>
                  <option value="Extended 84 months">Extended (84 Months)</option>
                  <option value="Accelerated 36 months">Accelerated (36 Months)</option>
                  <option value="Custom">Custom Plan</option>
                </select>
              </div>
              <div className="form-group full-width">
                <label>Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  style={{ resize: 'vertical' }}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Request Project Details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
