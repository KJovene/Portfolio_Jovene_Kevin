import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";
import MapImage from "../assets/MapImage.png";
import FrenzProject from "../assets/FrenzProject.png";
import HackatonProject from "../assets/HackatonProject.png";
import FlowFitProject from "../assets/FlowFitProject.png";
import ScrollyProject from "../assets/ScrollyProject.png";

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
  link?: string;
}

interface ProjectsProps {
  projects?: Project[];
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Stage - StreetPedia",
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
    link: "Projet réalisé sur un Gitea privé.",
  },
  {
    id: "2",
    title: "Projet Perso - FlowFit",
    description:
      "Application web complète de fitness à domicile : Musculation, Yoga et Mobilité",
    image: FlowFitProject,
    location: "Noisy-Le-Grand",
    period: "Novembre 2024 - Janvier 2025",
    context: "Projet personnel full-stack - Application de sport interactive",
    stack: "React 19 + TypeScript / Node.js + Express / PostgreSQL",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "TailwindCSS",
      "Sequelize",
    ],
    achievements: [
      "Développement d'une application full-stack moderne avec React 19, TypeScript, TanStack Router et Tailwind CSS 4 pour le frontend",
      "Mise en place d'une API RESTful sécurisée avec Node.js, Express 5, PostgreSQL et authentification JWT",
      "Création d'un système complet de gestion d'exercices avec upload d'images (Supabase Storage), catégorisation (3 catégories, 4 sous-catégories) et partage communautaire",
      "Développement d'un builder de séances interactif permettant de créer des programmes personnalisés avec drag & drop, durées personnalisables et temps de repos configurables",
      "Implémentation d'un lecteur de séances avec timer circulaire, progression en temps réel, et gestion intelligente des phases (préparation, exercice, repos)",
      "Système de notation par étoiles (0-5) et de favoris pour les séances avec calcul automatique des moyennes et compteurs",
      "Architecture modulaire avec 15+ hooks personnalisés, Zustand pour la gestion d'état, et TanStack Query pour le cache et la synchronisation des données",
      "Interface responsive avec navigation mobile optimisée, mode dark, et design moderne avec glassmorphism et effets de blur",
      "Gestion complète des utilisateurs : profil avec photo, séances personnelles/partagées, exercices privés/communautaires, et tableau de bord statistiques",
      "Déploiement en production avec Render (backend) et Vercel (frontend), base de données PostgreSQL hébergée sur Neon.tech",
    ],
    link: "https://github.com/KJovene/FlowFit",
  },
  {
    id: "3",
    title: "Projet Hetic - Frenz",
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
    link: "https://github.com/KJovene/Frenz",
  },
  {
    id: "4",
    title: "Projet Hetic - Hackaton",
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
    link: "https://github.com/KJovene/Hackatombe",
  },
  {
    id: "5",
    title: "Projet Hetic - Scrolly",
    description: "Création d'un feed de réseau social",
    image: ScrollyProject,
    location: "Montreuil",
    period: "Avril 2025",
    context: "Projet - Scrolly - Feed de réseau social",
    stack: "Back PHP (Symfony)/ Twig / BDD (Mongo)",
    tags: ["Symfony", "MongoDB"],
    achievements: [
      "Mise en place d’un système de connexion utilisateur sécurisé.",
      "Implémentation complète des opérations CRUD (création, lecture, modification, suppression) sur les posts.",
      "Conception d’une interface utilisateur interactive pour la consultation et la publication de contenu en temps réel.",
    ],
    link: "https://github.com/KJovene/Scrolly",
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
            link={project.link}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
    </section>
  );
};
