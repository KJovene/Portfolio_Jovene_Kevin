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
