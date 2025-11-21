import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";
import MapImage from "../assets/MapImage.png";
import FrenzProject from "../assets/FrenzProject.png";
import HackatonProject from "../assets/HackatonProject.png";

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  location?: string;
  period?: string;
  context?: string;
  stack: string;
  achievements: string[];
}

interface ProjectsProps {
  projects?: Project[];
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: "1",
    title: "StreetPedia",
    description:
      "Application qui permet de découvrir son environnement durant ses déplacements",
    image: MapImage,
    location: "Sarcelles",
    period: "Juin 2025 - Août 2025",
    context: "Stage - Création d'une application mobile",
    stack:
      "React Native (Front) · Node.js (Back) · PostgreSQL avec Prisma (ORM)",
    tags: [
      "React Native",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Jest",
    ],
    achievements: [
      "Optimisation des performances backend via Docker, permettant une réduction du temps de réponse API de 250 ms à 120 ms.",
      "Mise en place de tests unitaires avec Jest et participation aux rituels Agile (daily, sprint review, rétros).",
      "Développement des fonctionnalités CRUD (création, lecture, mise à jour, suppression) sur l'ensemble des modules applicatifs.",
      "Conception du backend selon une architecture MVC pour une meilleure maintenabilité et séparation des responsabilités.",
    ],
  },
  {
    id: "2",
    title: "Frenz",
    description: "Plateforme communautaire basée sur le style de Reddit",
    image: FrenzProject,
    location: "Hetic, Montreuil",
    period: "Mai 2025",
    context: "Projet - Création d'une plateforme communautaire",
    stack:
      "React (Front) · Strapi (Headless CMS Back) · Neon/PostgreSQL (Base de données)",
    tags: ["React", "Strapi", "Neon", "PostgreSQL"],
    achievements: [
      "Implémentation d'un système complet d'authentification : création de compte, connexion, gestion de session et pages profil.",
      "Intégration de Strapi comme CMS backend pour la gestion des utilisateurs, permissions et contenus.",
      "Développement des fonctionnalités CRUD : création, édition et suppression de posts avec validation et gestion des médias.",
    ],
  },
  {
    id: "3",
    title: "Hackaton",
    description: "Application de mise en commun de veille technologique",
    image: HackatonProject,
    location: "Hetic, Montreuil",
    period: "Mai 2025",
    context:
      "Projet - Hackaton - Application de mise en commun de veille technologique",
    stack: "Front (React) / Back (Node) / BDD (AWS)",
    tags: ["React", "Node.js", "AWS"],
    achievements: [
      "Mise en place d'un système d'authentification sécurisé (gestion des sessions / tokens, rôles utilisateurs).",
      "Développement d'un module de veille technologique collaborative : création, partage et catégorisation de ressources technologiques entre utilisateurs.",
      "Conception d'une API REST Node.js et intégration avec une base de données AWS.",
    ],
  },
];

export const ProjectsSection: React.FC<ProjectsProps> = ({
  projects = DEFAULT_PROJECTS,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        <span className="section-title-gradient">Projets</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
    </section>
  );
};
