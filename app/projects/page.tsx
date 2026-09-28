import { projects } from '@/data/siteData';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main>
      <section className="section" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '16px' }}>
            <span className="section-label">Our Portfolio</span>
            <h1 className="section-title">Featured Projects</h1>
            <p style={{ maxWidth: '560px', margin: '0 auto', color: 'var(--muted)' }}>
              Each project is chosen for its location, accessibility, and long-term value.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', marginTop: '40px' }}>
            {projects.map((project) => (
              <div key={project.id} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '8px' }}>
                    {project.city}
                  </div>
                  <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>{project.name}</h2>
                  <p style={{ color: 'var(--fg-light)', lineHeight: '1.8', marginBottom: '1.5rem' }}>{project.description}</p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '1.5rem' }}>
                    <div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>Apartments</div>
                      <div style={{ fontWeight: 600 }}>{project.features.bedrooms}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>Status</div>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: 'rgba(74,99,64,0.1)', color: 'var(--success)', fontSize: '0.75rem', fontWeight: 600, borderRadius: '2px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--success)', display: 'inline-block' }}></span>
                        {project.status}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>Starting From</div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--accent)' }}>{project.startingPrice}</div>
                    </div>
                    <Link href="#payment-plans" className="btn btn-primary">View Details</Link>
                  </div>
                </div>
                <div style={{ borderRadius: '4px', overflow: 'hidden' }}>
                  <img src={project.image} alt={project.name} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
