import Link from 'next/link';
import { projects } from '@/data/siteData';

export default function ConstructionProgress() {
  return (
    <section id="construction" className="section section-alt">
      <div className="container">
        <div className="progress-header reveal">
          <span className="section-label">Construction Updates</span>
          <h2 className="section-title">Project Progress</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            See where we are on each project. Full transparency at every stage.
          </p>
        </div>

        <div className="progress-items">
          {projects.map((project) => (
            <div key={project.id} className="progress-item reveal">
              <div className="progress-image-wrapper">
                <img src={project.image} alt={project.name} loading="lazy" />
              </div>
              <div className="progress-content">
                <h3 className="progress-title">{project.name}</h3>

                <div className="progress-stages">
                  {project.construction.map((stage, i) => {
                    const isCompleted = stage.status === 'Completed';
                    const isInProgress = stage.status.includes('Complete') || stage.status.includes('In Progress');
                    const isUpcoming = stage.status === 'Upcoming';

                    return (
                      <div key={i}>
                        <div className="progress-stage">
                          <div className={`progress-stage-icon ${isCompleted ? 'completed' : isInProgress ? 'in-progress' : 'upcoming'}`}>
                            {isCompleted ? '✓' : isInProgress ? '●' : '○'}
                          </div>
                          <div className="progress-stage-text">
                            <div className="progress-stage-name">{stage.name}</div>
                            <div className="progress-stage-status">{stage.status}</div>
                          </div>
                        </div>
                        {i < project.construction.length - 1 && (
                          <div className={`stage-line ${isCompleted ? 'completed' : ''}`} />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="progress-bar-container">
                  <div className="progress-bar-label">
                    <span>Overall Progress</span>
                    <span>{project.completion}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${project.completion}%` }} />
                  </div>
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '16px' }}>
                  Expected possession: <strong style={{ color: 'var(--fg)' }}>{project.possession}</strong>
                </div>

                <Link href={`#payment-plans`} className="btn btn-primary btn-sm">
                  View Payment Plan
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
