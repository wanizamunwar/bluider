import Link from 'next/link';
import { projects } from '@/data/siteData';

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="project-item reveal">
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
        />
      </div>
      <div className="project-details">
        <div className="project-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {project.city}
        </div>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-meta">
          <div className="project-meta-item">
            <span className="project-meta-label">Apartments</span>
            <span className="project-meta-value">{project.features.bedrooms}</span>
          </div>
          <div className="project-meta-item">
            <span className="project-meta-label">Area</span>
            <span className="project-meta-value">{project.features.area}</span>
          </div>
          <div className="project-meta-item">
            <span className="project-meta-label">Units</span>
            <span className="project-meta-value">{project.features.units}</span>
          </div>
          <div className="project-meta-item">
            <span className="project-meta-label">Status</span>
            <span className="project-status-badge">{project.status}</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              Starting From
            </span>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--accent)' }}>
              {project.startingPrice}
            </div>
          </div>
          <Link href={`#payment-plans`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="projects-header reveal">
          <span className="section-label">Our Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Each project is chosen for its location, accessibility, and long-term value.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
