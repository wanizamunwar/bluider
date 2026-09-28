export default function WhyChooseUs() {
  const features = [
    {
      title: 'Quality Construction',
      description: 'Materials and workmanship focused on long-term durability. Every structure is built to exceed local building standards.',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      ),
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear prices and payment schedules with no hidden charges. You know exactly what you are paying and when.',
      icon: (
        <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      ),
    },
    {
      title: 'Prime Locations',
      description: 'Projects selected with accessibility and convenience in mind. Near schools, hospitals, and commercial areas.',
      icon: (
        <svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
      ),
    },
    {
      title: 'Flexible Payment Plans',
      description: 'Installment options available on selected projects. We work with you to find a plan that fits your budget.',
      icon: (
        <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
      ),
    },
    {
      title: 'Construction Updates',
      description: 'Regular progress reports and site visits. You can track your investment every step of the way.',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      ),
    },
    {
      title: 'Customer Support',
      description: 'Assistance throughout booking and purchasing. A dedicated point of contact from inquiry to possession.',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      ),
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: '56px' }}>
          <span className="section-label">Why Us</span>
          <h2 className="section-title">Built on Trust</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            What sets us apart is a straightforward approach — honest work, fair prices, and genuine support.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, i) => (
            <div key={i} className="feature-item reveal">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
