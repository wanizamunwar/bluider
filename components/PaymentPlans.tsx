'use client';

import { useState } from 'react';
import { projects } from '@/data/siteData';
import Link from 'next/link';

function PaymentPlanCard({ project }: { project: typeof projects[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="payment-plan-item reveal">
      <div
        className="payment-plan-header"
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
        aria-expanded={open}
      >
        <div>
          <div className="payment-plan-title">{project.name}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '4px' }}>
            {project.features.bedrooms} · {project.features.area}
          </div>
        </div>
        <div className={`payment-plan-toggle ${open ? 'open' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>

      <div className={`payment-plan-body ${open ? 'open' : ''}`}>
        <div className="payment-breakdown">
          <div className="payment-item">
            <div className="payment-item-label">Total Price</div>
            <div className="payment-item-value">{project.totalPrice}</div>
          </div>
          <div className="payment-item">
            <div className="payment-item-label">Booking Amount</div>
            <div className="payment-item-value">{project.bookingAmount}</div>
          </div>
          <div className="payment-item">
            <div className="payment-item-label">Monthly Installment</div>
            <div className="payment-item-value">{project.monthlyInstallment}</div>
          </div>
          <div className="payment-item">
            <div className="payment-item-label">Duration</div>
            <div className="payment-item-value">{project.duration}</div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '12px' }}>
            Payment Stages
          </div>
          <div className="payment-stages">
            <div className="stage completed">
              <div className="stage-dot">✓</div>
              <div className="stage-label">Booking</div>
            </div>
            <div className="stage-line completed" />
            <div className="stage completed">
              <div className="stage-dot">✓</div>
              <div className="stage-label">Confirmation</div>
            </div>
            <div className="stage-line completed" />
            <div className="stage active">
              <div className="stage-dot">1</div>
              <div className="stage-label">Installments</div>
            </div>
            <div className="stage-line" />
            <div className="stage">
              <div className="stage-dot">2</div>
              <div className="stage-label">Final</div>
            </div>
            <div className="stage-line" />
            <div className="stage">
              <div className="stage-dot">3</div>
              <div className="stage-label">Possession</div>
            </div>
          </div>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '20px' }}>
          Possession: <strong style={{ color: 'var(--fg)' }}>{project.possession}</strong>
        </p>

        <div className="payment-plan-cta">
          <Link href="#calculator" className="btn btn-outline btn-sm">
            Calculate Your Payment
          </Link>
          <Link href="#contact" className="btn btn-primary btn-sm">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PaymentPlans() {
  return (
    <section id="payment-plans" className="section section-alt">
      <div className="container">
        <div className="payment-plans-intro reveal">
          <span className="section-label">Payment Plans</span>
          <h2 className="section-title">Installment Options</h2>
          <p className="section-subtitle">
            Every project has its own payment structure. Click below to see the details for each development.
          </p>
        </div>

        <div className="payment-plans-list">
          {projects.map((project) => (
            <PaymentPlanCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
