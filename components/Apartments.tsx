'use client';

import { useState } from 'react';
import { apartments, apartmentTypes } from '@/data/siteData';
import Link from 'next/link';

type ApartmentKey = keyof typeof apartments;

export default function Apartments() {
  const [activeFilter, setActiveFilter] = useState<ApartmentKey>('1 Bedroom');

  const currentApartments = apartments[activeFilter];

  return (
    <section id="apartments" className="section">
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: '8px' }}>
          <span className="section-label">Our Apartments</span>
          <h2 className="section-title">Available Units</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Browse our current inventory. Each apartment is designed for comfort, natural light, and practical living.
          </p>
        </div>

        <div className="apartments-filters reveal">
          {apartmentTypes.map((type) => (
            <button
              key={type}
              className={`filter-btn ${activeFilter === type ? 'active' : ''}`}
              onClick={() => setActiveFilter(type as ApartmentKey)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="apartments-grid">
          {currentApartments.map((apt) => (
            <div key={apt.id} className="apartment-card reveal">
              <div className="apartment-image">
                <img src={apt.image} alt={apt.name} loading="lazy" />
                <span className="apartment-type-badge">{activeFilter}</span>
              </div>
              <div className="apartment-info">
                <h3 className="apartment-title">{apt.name}</h3>
                <div className="apartment-specs">
                  <span className="apartment-spec">
                    <svg viewBox="0 0 24 24" strokeWidth="2"><path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/><path d="M21 7H3l2-4h14l2 4z"/><path d="M12 4v16"/></svg>
                    {apt.bedrooms} Bed{apt.bedrooms > 1 ? 's' : ''}
                  </span>
                  <span className="apartment-spec">
                    <svg viewBox="0 0 24 24" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    {apt.bathrooms} Bath
                  </span>
                  <span className="apartment-spec">
                    <svg viewBox="0 0 24 24" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                    {apt.area}
                  </span>
                </div>
                <div className="apartment-price">
                  {apt.price}
                </div>
                <div className="apartment-actions">
                  <a href="#contact" className="btn btn-outline btn-sm">
                    Request Details
                  </a>
                  <Link href="#payment-plans" className="btn btn-primary btn-sm">
                    View Floor Plan
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
