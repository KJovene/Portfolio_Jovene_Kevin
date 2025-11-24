import React from "react";

interface ProjectDetailProps {
  project: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    location?: string;
    period?: string;
    context?: string;
    achievements: string[];
    link?: string;
  };
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onBack,
}) => {
  return (
    <section className="project-detail">
      {/* Back Button */}
      <button onClick={onBack} className="back-button">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Retour aux projets
      </button>

      {/* Project Header */}
      <div className="project-detail-header">
        <h1 className="project-detail-title">{project.title}</h1>
        {project.location && project.period && (
          <div className="project-detail-meta">
            <span className="meta-location">{project.location}</span>
            <span className="meta-separator">•</span>
            <span className="meta-period">{project.period}</span>
          </div>
        )}
        {project.context && (
          <p className="project-detail-context">{project.context}</p>
        )}
      </div>

      {/* Stack Section */}
      <div className="project-detail-section">
        <h2 className="project-detail-subtitle">
          <span className="section-title-gradient">Stack</span> Technique
        </h2>
        <div className="project-detail-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub Link Section */}
      {project.link && (
        <div className="project-detail-section">
          <h2 className="project-detail-subtitle">
            <span className="section-title-gradient">Code Source</span>
          </h2>
          {project.link.startsWith("http") ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link flex gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Voir le projet sur GitHub
            </a>
          ) : (
            <p className="project-detail-stack">{project.link}</p>
          )}
        </div>
      )}

      {/* Achievements Section */}
      <div className="project-detail-section">
        <h2 className="project-detail-subtitle">
          <span className="section-title-gradient">Réalisations</span> &
          Contributions
        </h2>
        <ul className="project-detail-achievements">
          {project.achievements.map((achievement, index) => (
            <li key={index} className="achievement-item">
              <svg
                className="achievement-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
