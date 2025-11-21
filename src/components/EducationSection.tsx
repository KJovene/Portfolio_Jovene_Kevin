import React from "react";

interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
}

interface EducationSectionProps {
  education?: Education[];
}

const DEFAULT_EDUCATION: Education[] = [
  {
    id: "1",
    degree: "Bachelor Développement Web",
    school: "Hetic",
    period: "2024 - 2027",
  },
  {
    id: "2",
    degree: "MBA Marketing Sportif",
    school: "Sport Management School",
    period: "2019 - 2021",
  },
  {
    id: "3",
    degree: "Master MEEF",
    school: "Université Gustave Eiffel",
    period: "2013 - 2019",
  },
];

export const EducationSection: React.FC<EducationSectionProps> = ({
  education = DEFAULT_EDUCATION,
}) => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">
        <span className="section-title-gradient">Formations</span>
      </h2>

      <div className="education-grid">
        {education.map((edu) => (
          <div key={edu.id} className="education-card">
            <div className="education-icon">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <div className="education-content">
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-school">{edu.school}</h4>
              <span className="education-period">{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
