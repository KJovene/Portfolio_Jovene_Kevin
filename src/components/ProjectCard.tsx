import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  onClick,
}) => {
  return (
    <div
      className="project-card"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500">{title}</span>
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
