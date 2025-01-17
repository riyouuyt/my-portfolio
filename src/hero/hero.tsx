// src/components/Hero/Hero.js
import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Hii! I'm Rio</h1>
          <h2>Data Analyst/Scientist</h2>
          <p>
            I'm passionate administration student who really interesting with AI world. 
            With expertise in Data analyst/scientist and machine learning i'm ready to contribute
            in indonesia digital AI goverment generation.
          </p>
          <button className={styles.downloadBtn}>
            Download CV
          </button>
        </div>
        
        <div className={styles.heroImage}>
          <img 
            src="/assets/profile.png" 
            alt="Hero illustration"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;