// src/skills/skills.tsx
import React, { useState } from 'react';
import { Download, ChevronRight } from 'lucide-react';
import SkillLogos from './skillLogos';
import Image from 'next/image';
import styles from './skills.module.css';

const ExperienceAndSkills: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: "Indozone.id",
      role: "Data Analyst Intern",
      period: "Aug 2023 - Nov 2023",
      logo: "/assets/indozone.jpeg",
      description:
        "Indozone.id is a leading digital media company in Indonesia that focuses on delivering current news and trending content to millennial and Gen Z audiences. They have established themselves as a trusted source for young Indonesians seeking the latest updates and information. In addition to news, Indozone.id also offers a wide range of content, including entertainment, lifestyle, sports, and more. Their focus on trending topics and engaging content makes them a popular destination for young people in Indonesia.",
      responsibilities: [
        "Analyzed user behavior and content performance using Google Analytics and Search Console",
        "Created interactive dashboards using Looker Studio to visualize key metrics",
        "Optimized content strategy based on data insights, resulting in 25% increase in user engagement",
        "Collaborated with editorial team to identify trending topics and content opportunities",
        "Conducted A/B testing for headline optimization and content placement",
      ],
      gallery: [
        "/assets/google_news.jpg",
        "/assets/idz_intern.jpeg",
        "/assets/idz_kompas.jpeg",
        "/assets/indozone 17.jpg",
      ],
    },
  ];

  const educations = [
    {
      logo: "/assets/dqlab.jpg",
      name: "DQlab Academy",
      period: "Nov 23 - Feb 24",
      description:
        "Attended an intensive Data Science program with a focus on Python and SQL. Learned data analysis, data visualization using python framework. Completed over 5 hands-on projects including Churn Customers, Clustering, Analyzing business Decision.",
      certificate: true,
    },
    {
      logo: "/assets/rakaminnn.png",
      name: "Rakamin Academy",
      period: "Mar 24 - Jul 24",
      description:
        "Engaged in a Full Stack Data Science Bootcamp with an emphasis on end-to-end data science pipeline. Work on capstone projects with real industry clients using modern tech stack.",
      certificate: true,
    },
  ];

  const skills = {
    programming: [
      { name: "Python", icon: SkillLogos.Python },
      { name: "JavaScript", icon: SkillLogos.JavaScript },
      { name: "TypeScript", icon: SkillLogos.TypeScript },
      { name: "SQL", icon: SkillLogos.SQL },
    ],
    tools: [
      { name: "Excel", icon: SkillLogos.Excel },
      { name: "Google Analytics", icon: SkillLogos.GoogleAnalytics },
      { name: "Search Console", icon: SkillLogos.GSC },
      { name: "Looker Studio", icon: SkillLogos.Looker },
    ],
    additional: [
      { name: "Notion", icon: SkillLogos.Notion },
      { name: "Figma", icon: SkillLogos.Figma },
      { name: "Canva", icon: SkillLogos.Canva },
      { name: "VS Code", icon: SkillLogos.VSCode },
    ],
  };

  return (
    <div className={`${styles.container} container mx-auto px-4 py-8 max-w-6xl space-y-16`}>
      {/* Work Experience Section */}
      <section>
        <h1 className={styles.sectionTitle}>Work Experience</h1>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceCard}>
            <div className={styles.experienceHeader}>
              <Image
                src={exp.logo}
                alt={exp.company}
                className={styles.experienceLogo}
                width={90}  // Adjust width as necessary
                height={90} // Adjust height as necessary
              />
              <div className={styles.experienceContent}>
                <div className={styles.experienceHeaderTop}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                    <p className={styles.period}>{exp.period}</p>
                  </div>
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className={styles.readMoreButton}
                  >
                    {expandedIndex === index ? "Show Less" : "Read More"}
                    <ChevronRight
                      size={16}
                      className={`${styles.chevron} ${expandedIndex === index ? styles.expanded : ""}`}
                    />
                  </button>
                </div>

                {expandedIndex === index && (
                  <div className={styles.expandedContent}>
                    <div>
                      <h4 className={styles.subTitle}>About Company</h4>
                      <p className={styles.text}>{exp.description}</p>
                    </div>

                    <div>
                      <h4 className={styles.subTitle}>Job Responsibilities</h4>
                      <ul className={styles.responsibilitiesList}>
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className={styles.text}>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className={styles.subTitle}>Event Gallery</h4>
                      <div className={styles.galleryGrid}>
                        {exp.gallery.map((img, idx) => (
                          <Image
                            key={idx}
                            src={img}
                            alt={`Event ${idx + 1}`}
                            className={styles.galleryImage}
                            width={700} // Adjust width as necessary
                            height={700} // Adjust height as necessary
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.educationGrid}>
          {educations.map((edu, index) => (
            <div key={index} className={styles.educationCard}>
              <Image
                src={edu.logo}
                alt={edu.name}
                className={styles.educationLogo}
                width={100}  // Adjust width as necessary
                height={100} // Adjust height as necessary
              />
              <div className={styles.educationContent}>
                <h3 className={styles.educationName}>{edu.name}</h3>
                <p className={styles.period}>{edu.period}</p>
                <p className={styles.text}>{edu.description}</p>
                {edu.certificate && (
                  <button className={styles.downloadButton}>
                    <Download size={16} />
                    <span>Download Certificate</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsGrid}>
          {Object.entries(skills).map(([category, items], index) => (
            <div key={index} className={styles.skillsCard}>
              <h3 className={styles.skillsCategory}>{category}</h3>
              <div className={styles.skillsList}>
                {items.map((skill, idx) => (
                  <div key={idx} className={styles.skillItem}>
                    <div className={styles.skillIcon}>{skill.icon}</div>
                    <span className={styles.text}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperienceAndSkills;
