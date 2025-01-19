// src/skills/skills.tsx
import React, { useState } from 'react';
import { Download, ChevronRight } from 'lucide-react';
import SkillLogos from './skillLogos';
import Image from 'next/image';
import styles from './skills.module.css';

//importing images
import dqlab from '../../public/assets/dqlab.jpg'
import rakamin from '../../public/assets/rakaminnn.png'
import idz from '../../public/assets/indozone.jpeg'
import idz1 from '../../public/assets/google_news.jpg'
import idz2 from '../../public/assets/idz_intern.jpeg'
import idz3 from '../../public/assets/idz_kompas.jpeg'
import idz4 from '../../public/assets/indozone_17.jpg'
import rankSimilarWebImage from '../../public/assets/similarweb.png'

const ExperienceAndSkills: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: "Indozone.id",
      role: "Data Analyst Intern",
      period: "Aug 2023 - Nov 2023",
      logo: idz,
      description: [
        "Indozone.id is a leading digital media company in Indonesia, focusing on delivering the latest news and trending content to Millennial and Gen Z audiences. Globally, it ranks 65th in the Media and News category, according to SimilarWeb, solidifying its position as one of the most influential digital media platforms.",
        "Founded on September 18, 2014, Indozone is widely recognized for its popular tagline, #KAMUHARUSTAU (You Must Know). As a multi-platform news and entertainment media, Indozone is dedicated to becoming a trusted source of information for young Indonesians. With a vision to produce the most engaging, influential, and high-impact content, Indozone has firmly established itself as a go-to platform for Millennials and Gen Z.",
        <Image 
          src={rankSimilarWebImage} 
          alt="Indozone Rank on SimilarWeb" 
          key="rank-similar-web" 
          className="mx-auto my-8 align-middle pt-5"
          width={600}
          height={600}
        />,
      ],
      
      responsibilities: [
        "Contributed to the development of weekly and monthly reports, providing detailed insights into page views and unique visitors to track audience trends effectively",
        "Designed and implemented two Looker Studio dashboards: a comprehensive dashboard for monitoring writer and audience performance, and a specialized dashboard for visualizing Google Search Console data",
        "Enhanced reporting by introducing new metrics, including the analysis of page view differences between weekdays and weekends, offering valuable insights for content strategy adjustments",
        "Played a key role in driving a 15% increase in page views from May to August by analyzing user behavior and providing actionable insights for content optimization",
      ],
      gallery: [idz1, idz2, idz3, idz4],
    },
  ];

  const educations = [
    {
      logo: dqlab,
      name: "DQlab Academy",
      period: "Nov 23 - Feb 24",
      description:
        "Attended an intensive Data Science program with a focus on Python and SQL. Learned data analysis, data visualization using python framework. Completed over 5 hands-on projects including Churn Customers, Clustering, Analyzing business Decision.",
      certificate: true,
      certificateUrl: "/certificates/dqlab-certificate.pdf" 
    },
    {
      logo: rakamin,
      name: "Rakamin Academy",
      period: "Mar 24 - Jul 24",
      description:
        "Engaged in a Full Stack Data Science Bootcamp with an emphasis on end-to-end data science pipeline. Work on capstone projects with real industry clients using modern tech stack.",
      certificate: true,
      certificateUrl: "/certificates/rakamin-certificate.pdf" 
    },
  ];

  // Add download certificate function
  const handleDownloadCertificate = (certificateUrl: string, instituteName: string) => {
    try {
      // Create an anchor element
      const link = document.createElement('a');
      link.href = certificateUrl;
      link.download = `${instituteName.toLowerCase().replace(' ', '-')}-certificate.pdf`;
      
      // Append to document, trigger click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading certificate:', error);
      alert('Failed to download certificate. Please try again later.');
    }
  };

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
                      <h4 className={styles.subTitle}>My Achievements</h4>
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
                width={100}
                height={100}
              />
              <div className={styles.educationContent}>
                <h3 className={styles.educationName}>{edu.name}</h3>
                <p className={styles.period}>{edu.period}</p>
                <p className={styles.text}>{edu.description}</p>
                {edu.certificate && edu.certificateUrl && (
                  <button 
                    className={styles.downloadButton}
                    onClick={() => handleDownloadCertificate(edu.certificateUrl, edu.name)}
                    aria-label={`Download ${edu.name} certificate`}
                  >
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
