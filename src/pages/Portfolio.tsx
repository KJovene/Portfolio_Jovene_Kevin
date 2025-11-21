import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Background } from "../components/Background";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { EducationSection } from "../components/EducationSection";
import { ContactSection } from "../components/ContactSection";

export const PortfolioLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("projects");

  const renderSection = () => {
    switch (activeSection) {
      case "projects":
        return <ProjectsSection />;
      case "skills":
        return <SkillsSection />;
      case "experience":
        return <ExperienceSection />;
      case "education":
        return <EducationSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <ProjectsSection />;
    }
  };

  return (
    <div className="portfolio-container">
      <Background />

      <div className="portfolio-main">
        {/* Left Column - Sidebar */}
        <Sidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Right Column - Content */}
        <div className="portfolio-content">{renderSection()}</div>
      </div>
    </div>
  );
};
