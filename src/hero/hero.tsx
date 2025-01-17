// src/components/Hero/Hero.tsx
import React from 'react';
import Image from 'next/image';
import styles from './hero.module.css';
import heroImg from '../../public/assets/profile.png'

const Hero: React.FC = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Hi! I&apos;m Rio</h1>
          <h2>Data Analyst/Scientist</h2>
          <p>
            I&apos;m a passionate administration student who is really interested in the AI world. 
            With expertise in data analysis, data science, and machine learning, I&apos;m ready to contribute 
            to Indonesia&apos;s digital AI government generation.
          </p>
          <button className={styles.downloadBtn}>
            Download CV
          </button>
        </div>

        <div className={styles.heroImage}>
          <Image 
            src={heroImg} 
            alt="Hero illustration" 
            width={500}
            height={500}
            priority
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
