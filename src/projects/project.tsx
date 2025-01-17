import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';
import styles from './project.module.css';

interface ProjectData {
  title: string;
  description: string;
  github: string;
  icon: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollX, setScrollX] = useState<number>(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  const projects: ProjectData[] = [
    {
      title: "VIX Salicy Sales Dashboard",
      description: "Interactive dashboard for visualizing medicine sales across indonesia with multiple filters",
      github: "https://github.com/riyouuyt/VIX-Salicy-Sales-Dashboard",
      icon: "💊",
      tags: ["Rakamin Virtual Intern"]
    },
    {
      title: "VIX Home Credit Scorecard Model",
      description: "Predictive model for home credit risk assessment, leveraging features to optimize loan approval and mitigate default risks.",
      github: "https://github.com/riyouuyt/VIX-Home-Credit-Scorecard-Model",
      icon: "💳",
      tags: ["Rakamin Virtual Intern"]
    },
    {
      title: "Machine learning with Python Building Recommender System With Similarity Function",
      description: "This project creates a content-based movie recommender by processing film features into text, transforming them into vectors, and using cosine similarity to suggest similar films.",
      github: "https://github.com/riyouuyt/DQlab-Course/tree/master/Project/Python",
      icon: "🎥",
      tags: ["DQlab"]
    },
    {
      title: "Holiday Package Prediction using Machine Learning",
      description: "Analysis of customer behavior and sales patterns for a holiday business platform",
      github: "https://github.com/riyouuyt/HolidayPackPred-Project",
      icon: "🏖️",
      tags: ["Rakamin final Project"]
    },
    {
      title: "Neural Network from Scratch",
      description: "Creating neural network for number digit recognition using the MNIST dataset.",
      github: "https://github.com/riyouuyt/Neural-Network-from-Scratch",
      icon: "🧠",
      tags: ["Self-Project"]
    }
  ];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => 
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => 
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const distance = startX - e.clientX;
    setScrollX(distance);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      if (scrollX > 50) nextSlide();
      if (scrollX < -50) prevSlide();
      setIsDragging(false);
      setScrollX(0);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const distance = startX - e.touches[0].clientX;
    setScrollX(distance);
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      if (scrollX > 50) nextSlide();
      if (scrollX < -50) prevSlide();
      setIsDragging(false);
      setScrollX(0);
    }
  };

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Projects</h2>
        
        <div
          ref={carouselRef}
          className={styles.carouselContainer}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide} 
            className={`${styles.navButton} ${styles.prevButton}`}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Cards Container */}
          <div className={styles.cardsContainer}>
            {projects.map((project: ProjectData, index: number) => (
              <div
                key={index}
                className={`${styles.card} ${index === currentSlide ? styles.activeCard : styles.inactiveCard}`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 110}%)`
                }}
              >
                <div className={styles.cardIcon}>{project.icon}</div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>

                {/* Display Tags */}
                <div className={styles.tagsContainer}>
                  {project.tags.map((tag: string, idx: number) => (
                    <span key={idx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.moreInfoButton}
                >
                  <Github size={16} />
                  <span>More Info</span>
                </a>
              </div>
            ))}
          </div>

          <button 
            onClick={nextSlide} 
            className={`${styles.navButton} ${styles.nextButton}`}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className={styles.dotsContainer}>
          {projects.map((_: ProjectData, index: number) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
