'use client';

import { apartments, apartmentTypes } from '@/data/siteData';
import { useState } from 'react';
import Link from 'next/link';

export default function ApartmentsPage() {
  const [activeFilter, setActiveFilter] = useState('1 Bedroom');

  return (
    <main>
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '16px' }}>
            <span className="section-label">Our Apartments</span>
            <h1 className="section-title">Available Units</h1>
            <p style={{ maxWidth: '560px', margin: '0 auto', color: 'var(--muted)' }}>
              Browse our current inventory. Each apartment is designed for comfort, natural light, and practical living.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {apartmentTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                style={{
                  padding: '10px 20px',
                  border: activeFilter === type ? '2px solid var(--fg)' : '1px solid var(--border)',
                  background: activeFilter === type ? 'var(--fg)' : 'transparent',
                  color: activeFilter === type ? '#fff' : 'var(--muted)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  borderRadius: '4px',
                  letterSpacing: '0.02em',
                  transition: 'all 0.25s ease',
                }}
              >
                {type}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
            {apartments[activeFilter as keyof typeof apartments].map((apt) => (
              <div key={apt.id} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
                  <img src={apt.image} alt={apt.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  <span style={{ position: 'absolute', top: '12px', left: '12px', padding: '4px 12px', background: 'rgba(250,247,243,0.95)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', borderRadius: '4px' }}>
                    {activeFilter}
                  </span>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>{apt.name}</h3>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap', fontSize: '0.82rem', color: 'var(--muted)' }}>
                    <span>{apt.bedrooms} Bed</span>
                    <span>{apt.bathrooms} Bath</span>
                    <span>{apt.area}</span>
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px' }}>{apt.price}</div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a href="#contact" className="btn btn-outline" style={{ flex: 1, fontSize: '0.78rem', padding: '10px 16px', minHeight: '40px', textAlign: 'center' }}>Request Details</a>
                    <Link href="#payment-plans" className="btn btn-primary" style={{ flex: 1, fontSize: '0.78rem', padding: '10px 16px', minHeight: '40px', textAlign: 'center' }}>View Floor Plan</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
