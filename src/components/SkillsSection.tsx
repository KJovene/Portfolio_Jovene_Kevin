import React from "react";

interface Skill {
  name: string;
  icon?: string;
}

interface SkillsSectionProps {
  languages?: Skill[];
  tools?: Skill[];
  deploys?: Skill[];
}

const DEFAULT_LANGUAGES: Skill[] = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Symfony",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
  },
];

const DEFAULT_TOOLS: Skill[] = [
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Notion",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
  },
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "Unity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "CI-CD",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  { name: "Strapi", icon: "https://strapi.io/assets/strapi-logo-dark.svg" },
  { name: "Neon", icon: "https://neon.tech/favicon.ico" },
  { name: "n8n", icon: "https://n8n.io/favicon.ico" },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "Jest",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    name: "Mongoose",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
  },
];

const DEFAULT_DEPLOY: Skill[] = [
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  {
    name: "Neon.Tech",
    icon: "https://neon.tech/favicon.ico",
  },
  {
    name: "Render",
    icon: "https://avatars.githubusercontent.com/u/36424661?s=200&v=4",
  },
];

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  languages = DEFAULT_LANGUAGES,
  tools = DEFAULT_TOOLS,
  deploys = DEFAULT_DEPLOY,
}) => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">
        <span className="section-title-gradient">Skills</span>
      </h2>

      <div className="skills-grid">
        {/* Languages Section */}
        <div className="skill-category">
          <h3 className="skill-category-title">Langages & Frameworks</h3>
          <div className="skill-tags">
            {languages.map((lang) => (
              <span key={lang.name} className="skill-tag">
                {lang.icon && (
                  <img src={lang.icon} alt={lang.name} className="skill-icon" />
                )}
                {lang.name}
              </span>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="skill-category">
          <h3 className="skill-category-title">Outils & Technologies</h3>
          <div className="skill-tags">
            {tools.map((tool) => (
              <span key={tool.name} className="skill-tag">
                {tool.icon && (
                  <img src={tool.icon} alt={tool.name} className="skill-icon" />
                )}
                {tool.name}
              </span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3 className="skill-category-title">Déploiement</h3>
          <div className="skill-tags">
            {deploys.map((deploy) => (
              <span key={deploy.name} className="skill-tag">
                {deploy.icon && (
                  <img
                    src={deploy.icon}
                    alt={deploy.name}
                    className="skill-icon"
                  />
                )}
                {deploy.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
