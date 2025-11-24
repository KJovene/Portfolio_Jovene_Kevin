import React from "react";

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
}

interface ExperienceSectionProps {
  experiences?: Experience[];
}

const DEFAULT_EXPERIENCES: Experience[] = [
  {
    id: "1",
    title: "Développeur FullStack",
    company: "Streetpedia",
    period: "06/2025 - 08/2025",
    description: "Stage - Création d'une application mobile",
    achievements: [
      "Optimisation des performances backend via Docker, permettant une réduction du temps de réponse API de 250 ms à 120 ms.",
      "Mise en place de tests unitaires avec Jest et participation aux rituels Agile (daily, sprint review, rétros).",
      "Développement des fonctionnalités CRUD (création, lecture, mise à jour, suppression) sur l’ensemble des modules applicatifs.",
      "Conception du backend selon une architecture MVC pour une meilleure maintenabilité et séparation des responsabilités.",
    ],
  },
  {
    id: "2",
    title: "Business Developer",
    company: "Majoby / Neosilver",
    period: "2021 - 2024",
    description: "Commercial dans des entreprises de différents secteurs",
  },
];

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences = DEFAULT_EXPERIENCES,
}) => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">
        <span className="section-title-gradient">Expériences</span>
      </h2>

      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-marker" />
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <h4 className="experience-company">{exp.company}</h4>
              <p className="experience-description">{exp.description}</p>
              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
